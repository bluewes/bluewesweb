import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTcComponent } from './wallet-tc.component';

describe('WalletTcComponent', () => {
  let component: WalletTcComponent;
  let fixture: ComponentFixture<WalletTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
