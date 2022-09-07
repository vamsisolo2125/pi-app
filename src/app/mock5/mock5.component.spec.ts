import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock5Component } from './mock5.component';

describe('Mock5Component', () => {
  let component: Mock5Component;
  let fixture: ComponentFixture<Mock5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mock5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mock5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
