import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulOperationComponent } from './successful-operation.component';

describe('SuccessfulOperationComponent', () => {
  let component: SuccessfulOperationComponent;
  let fixture: ComponentFixture<SuccessfulOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
