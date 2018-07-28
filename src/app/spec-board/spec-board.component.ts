import { Component, OnInit } from '@angular/core';
import  * as specData from '../specData.json';

@Component({
  selector: 'spec-board',
  templateUrl: './spec-board.component.html',
  styleUrls: ['./spec-board.component.css']
})
export class SpecBoardComponent implements OnInit {
  developmentSpecs: string[];
  testingSpecs: string[];
  selectedSpecsArr: string[] = [];
  selectedSpecsObj: object = {};

  constructor() { }

  ngOnInit() {
    this.developmentSpecs = Object.keys(specData.development);
    this.testingSpecs = Object.keys(specData.testing);
  }

  selectedSpec(spec) {
    if (this.selectedSpecsObj[spec]) {
      this.selectedSpecsObj[spec]++;
    } else {
      this.selectedSpecsObj[spec] = 1;
      this.selectedSpecsArr.push(spec)
    }
  }

}
