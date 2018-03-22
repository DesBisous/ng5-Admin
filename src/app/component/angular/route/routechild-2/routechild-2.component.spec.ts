import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routechild2Component } from './routechild-2.component';

describe('Routechild2Component', () => {
  let component: Routechild2Component;
  let fixture: ComponentFixture<Routechild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routechild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routechild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
