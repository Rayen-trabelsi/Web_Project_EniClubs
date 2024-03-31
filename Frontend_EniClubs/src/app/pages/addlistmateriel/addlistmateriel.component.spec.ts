import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistmaterielComponent } from './addlistmateriel.component';

describe('AddlistmaterielComponent', () => {
  let component: AddlistmaterielComponent;
  let fixture: ComponentFixture<AddlistmaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlistmaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistmaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
