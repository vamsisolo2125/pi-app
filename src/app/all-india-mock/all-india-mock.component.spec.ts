import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIndiaMockComponent } from './all-india-mock.component';

describe('AllIndiaMockComponent', () => {
  let component: AllIndiaMockComponent;
  let fixture: ComponentFixture<AllIndiaMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIndiaMockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIndiaMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
