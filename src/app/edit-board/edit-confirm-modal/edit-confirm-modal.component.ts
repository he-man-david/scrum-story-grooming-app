import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-confirm-modal',
  templateUrl: './edit-confirm-modal.component.html',
  styleUrls: ['./edit-confirm-modal.component.css']
})
export class EditConfirmModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
