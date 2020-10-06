import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// import { Subject } from 'rxjs';

@Component({
  selector: 'edit-confirm-modal',
  templateUrl: './edit-confirm-modal.component.html',
  styleUrls: ['./edit-confirm-modal.component.css']
})
export class EditConfirmModalComponent implements OnInit {
  // @Output() continueUpdate: Subject<any> = new Subject();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // this.continueUpdate.next(1);
  }

  confirmUpdateBoard() {
    // this.continueUpdate.next(2)
    
  }

}
