import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletFaqComponent } from './wallet-faq.component';

describe('WalletFaqComponent', () => {
  let component: WalletFaqComponent;
  let fixture: ComponentFixture<WalletFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
