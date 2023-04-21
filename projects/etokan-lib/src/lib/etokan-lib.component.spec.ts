import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtokanLibComponent } from './etokan-lib.component';

describe('EtokanLibComponent', () => {
  let component: EtokanLibComponent;
  let fixture: ComponentFixture<EtokanLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtokanLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtokanLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
