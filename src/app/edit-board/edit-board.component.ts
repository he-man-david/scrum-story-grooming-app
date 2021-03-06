import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { specData } from '../specData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditConfirmModalComponent } from './edit-confirm-modal/edit-confirm-modal.component';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {

  allDevSpecs: object[] = [];
  allTestSpecs: object[] = [];

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    let devSpecs = { ...specData.development };
    let testSpecs = { ...specData.testing };
    this.allDevSpecs = this.configureAllSpecsArr(devSpecs);
    this.allTestSpecs = this.configureAllSpecsArr(testSpecs);
  }

  configureAllSpecsArr(specsObj) {
    let specObjKeys = Object.keys(specsObj);
    let specArr = []
    for(let i = 0; i < specObjKeys.length; i++) {
      let obj = {}
      let name = specObjKeys[i];
      obj["name"] = name;
      obj["point"] = specsObj[name];
      specArr.push(obj)
    }
    return specArr
  }

  goHome() {
    this.router.navigate(['/home'])
  }

  addRow(type) {
    if (type === "dev") {
      this.allDevSpecs.push({'enter name here': 'enter point'})
    } else {
      this.allTestSpecs.push({'enter name here': 'enter point'})
    }
  }

  open() {
    const modalRef = this.modalService.open(EditConfirmModalComponent);
  }

}
