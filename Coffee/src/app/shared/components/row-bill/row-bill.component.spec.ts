import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowBillComponent } from './row-bill.component';

describe('RowBillComponent', () => {
  let component: RowBillComponent;
  let fixture: ComponentFixture<RowBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
