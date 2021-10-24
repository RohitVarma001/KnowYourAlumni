import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumiContributorComponent } from './alumi-contributor.component';

describe('AlumiContributorComponent', () => {
  let component: AlumiContributorComponent;
  let fixture: ComponentFixture<AlumiContributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumiContributorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumiContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
