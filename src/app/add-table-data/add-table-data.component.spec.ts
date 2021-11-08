import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTableDataComponent } from './add-table-data.component';

describe('AddTableDataComponent', () => {
  let component: AddTableDataComponent;
  let fixture: ComponentFixture<AddTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTableDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
