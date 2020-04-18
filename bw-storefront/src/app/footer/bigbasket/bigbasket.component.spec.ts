import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigbasketComponent } from './bigbasket.component';

describe('BigbasketComponent', () => {
  let component: BigbasketComponent;
  let fixture: ComponentFixture<BigbasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigbasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
