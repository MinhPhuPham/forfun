import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyButtonsComponent } from './beauty-buttons.component';

describe('BeautyButtonsComponent', () => {
  let component: BeautyButtonsComponent;
  let fixture: ComponentFixture<BeautyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
