import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorConnectComponent } from './vendor-connect.component';

describe('VendorConnectComponent', () => {
  let component: VendorConnectComponent;
  let fixture: ComponentFixture<VendorConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
