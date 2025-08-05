import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementRegistrationComponent } from './evenement-registration.component';

describe('EvenementRegistrationComponent', () => {
  let component: EvenementRegistrationComponent;
  let fixture: ComponentFixture<EvenementRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenementRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
