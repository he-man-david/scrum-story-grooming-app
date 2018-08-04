import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spec-beans',
  templateUrl: './spec-beans.component.html',
  styleUrls: ['./spec-beans.component.css']
})

export class SpecBeansComponent implements OnInit {
  @Input() specName: string; 
  @Input() count: number;
  @Input() color: string;
  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectSpec(spec) {
    this.selected.emit(spec)
  }

}


