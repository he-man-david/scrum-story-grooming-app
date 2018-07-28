import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spec-beans',
  templateUrl: './spec-beans.component.html',
  styleUrls: ['./spec-beans.component.css']
})
export class SpecBeansComponent implements OnInit {
  @Input() specName: string; 

  constructor() { }

  ngOnInit() {
  }

}
