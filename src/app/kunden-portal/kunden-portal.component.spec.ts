import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenPortalComponent } from './kunden-portal.component';

describe('KundenPortalComponent', () => {
  let component: KundenPortalComponent;
  let fixture: ComponentFixture<KundenPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KundenPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KundenPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
