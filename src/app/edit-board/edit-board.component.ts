import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { specData } from '../specData';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {

  allSpecs: object[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.configureAllSpecsArr()
  }

  configureAllSpecsArr() {
    let specsObj = { ...specData.development, ...specData.testing };
    let specObjKeys = Object.keys(specsObj);
    for(let i = 0; i < specObjKeys.length; i++) {
      let obj = {}
      let key = specObjKeys[i];
      obj[key] = specsObj[key];
      this.allSpecs.push(obj)
    }
  }

  goHome() {
    this.router.navigate(['/home'])
  }



}
