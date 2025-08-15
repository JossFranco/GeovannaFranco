import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankHeaderComponentComponent } from './bank-header-component.component';

describe('BankHeaderComponentComponent', () => {
  let component: BankHeaderComponentComponent;
  let fixture: ComponentFixture<BankHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankHeaderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
