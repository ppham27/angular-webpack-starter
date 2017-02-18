import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, animate, transition, style, trigger} from '@angular/core';

@Component({
  selector: 'toggle-edit',
  templateUrl: './toggle-edit.component.html',
  styleUrls: ['./toggle-edit.component.scss'],
  animations: [
    trigger('visible', [
      transition('* => *', [
        style({opacity: 0}),
        animate('1000ms ease-in-out', style({opacity: 1}))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleEditComponent<V> {
  @Input('model') modelValue: V;
  @Output() onCancel: EventEmitter<V> = new EventEmitter<V>();
  @Output() onSave: EventEmitter<V> = new EventEmitter<V>();
  isEditable = false;
  private originalValue: V;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  edit() {   
    this.originalValue = this.modelValue;
    this.isEditable = true;
    this.changeDetectorRef.detectChanges();
  }

  save() {
    if (this.modelValue !== this.originalValue) {
      this.onSave.emit(this.modelValue);
    }
    this.isEditable = false;
    this.changeDetectorRef.detectChanges();
  }

  cancel() {
    this.onCancel.emit(this.originalValue);
    this.isEditable = false;
    this.changeDetectorRef.detectChanges();
  }
}
