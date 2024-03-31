import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclubsComponent } from './updateclubs.component';

describe('UpdateclubsComponent', () => {
  let component: UpdateclubsComponent;
  let fixture: ComponentFixture<UpdateclubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateclubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
