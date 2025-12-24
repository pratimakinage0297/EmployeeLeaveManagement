import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee-modal',
  imports: [CommonModule],
  templateUrl: './add-employee-modal.html',
  styleUrl: './add-employee-modal.css',
})
export class AddEmployeeModal {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
