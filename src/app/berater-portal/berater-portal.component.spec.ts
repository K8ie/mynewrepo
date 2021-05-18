import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeraterPortalComponent } from './berater-portal.component';

describe('BeraterPortalComponent', () => {
  let component: BeraterPortalComponent;
  let fixture: ComponentFixture<BeraterPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeraterPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeraterPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
