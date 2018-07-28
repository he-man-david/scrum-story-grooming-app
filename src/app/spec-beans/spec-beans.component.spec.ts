import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecBeansComponent } from './spec-beans.component';

describe('SpecBeansComponent', () => {
  let component: SpecBeansComponent;
  let fixture: ComponentFixture<SpecBeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecBeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecBeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
