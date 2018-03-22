import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routechild1Component } from './routechild-1.component';

describe('Routechild1Component', () => {
  let component: Routechild1Component;
  let fixture: ComponentFixture<Routechild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routechild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routechild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
