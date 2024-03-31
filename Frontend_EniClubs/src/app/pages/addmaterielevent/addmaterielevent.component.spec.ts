import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaterieleventComponent } from './addmaterielevent.component';

describe('AddmaterieleventComponent', () => {
  let component: AddmaterieleventComponent;
  let fixture: ComponentFixture<AddmaterieleventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmaterieleventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaterieleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
