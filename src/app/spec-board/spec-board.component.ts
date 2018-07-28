import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spec-board',
  templateUrl: './spec-board.component.html',
  styleUrls: ['./spec-board.component.css']
})
export class SpecBoardComponent implements OnInit {
  something = "testing..."

  constructor() { }

  ngOnInit() {
  }

}
