import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuxPage } from './mux.page';

describe('MuxPage', () => {
  let component: MuxPage;
  let fixture: ComponentFixture<MuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
