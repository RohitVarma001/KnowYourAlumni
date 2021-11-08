import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableDataComponent } from './edit-table-data.component';

describe('EditTableDataComponent', () => {
  let component: EditTableDataComponent;
  let fixture: ComponentFixture<EditTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTableDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
