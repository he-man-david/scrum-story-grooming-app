import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecBoardComponent } from './spec-board.component';

describe('SpecBoardComponent', () => {
  let component: SpecBoardComponent;
  let fixture: ComponentFixture<SpecBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
