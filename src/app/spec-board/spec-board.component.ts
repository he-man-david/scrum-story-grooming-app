import { Component, OnInit } from '@angular/core';
import  { specData } from '../specData';

@Component({
  selector: 'spec-board',
  templateUrl: './spec-board.component.html',
  styleUrls: ['./spec-board.component.css']
})
export class SpecBoardComponent implements OnInit {
  developmentSpecs: string[];
  testingSpecs: string[];
  allSpecs: object;
  selectedSpecsArr: string[] = [];
  selectedSpecsObj: object = {};
  totalPoint: number = 0;

  constructor() { }

  ngOnInit() {
    this.developmentSpecs = Object.keys(specData.development);
    this.testingSpecs = Object.keys(specData.testing);
    this.allSpecs = { ...specData.development, ...specData.testing };
  }

  selectedSpec(spec) {
    if (this.selectedSpecsObj[spec]) {
      this.selectedSpecsObj[spec]++;
    } else {
      this.selectedSpecsObj[spec] = 1;
      this.selectedSpecsArr.push(spec);
    }
    this.computingPoints(spec);
  }

  deselectSpec(spec) {
    if (this.selectedSpecsObj[spec] && this.selectedSpecsObj[spec] !== 1) {
      this.selectedSpecsObj[spec]--;
    } else {
      this.selectedSpecsObj[spec] = 0;
      this.selectedSpecsArr.splice(this.selectedSpecsArr.indexOf(spec), 1);
    }
    this.computingPoints(spec, "-");
  }

  computingPoints(spec, operation = "+") {
    if (operation === "+") {
      this.totalPoint += this.allSpecs[spec];
    } else {
      this.totalPoint -= this.allSpecs[spec];
    }
  }

  clearAll() {
    console.log("hey", this.totalPoint);
    this.totalPoint = 0;
    this.selectedSpecsArr = [];
    this.selectedSpecsObj = {};
  }

}
