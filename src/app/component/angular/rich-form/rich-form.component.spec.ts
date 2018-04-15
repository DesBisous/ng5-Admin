import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichFormComponent } from './rich-form.component';

describe('RichFormComponent', () => {
  let component: RichFormComponent;
  let fixture: ComponentFixture<RichFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
