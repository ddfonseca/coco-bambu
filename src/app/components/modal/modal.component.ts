import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input()
  minutes = 0;

  @Input()
  seconds = 0;

  @Input()
  showModal = false;

  @Output()
  showModalChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeModal = (): void => {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  };
}
