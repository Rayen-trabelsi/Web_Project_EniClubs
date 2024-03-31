import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclubsComponent } from './addclubs.component';

describe('AddclubsComponent', () => {
  let component: AddclubsComponent;
  let fixture: ComponentFixture<AddclubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddclubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
