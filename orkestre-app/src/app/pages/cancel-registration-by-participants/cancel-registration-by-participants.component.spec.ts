import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRegistrationByParticipantsComponent } from './cancel-registration-by-participants.component';

describe('CancelRegistrationByParticipantsComponent', () => {
  let component: CancelRegistrationByParticipantsComponent;
  let fixture: ComponentFixture<CancelRegistrationByParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelRegistrationByParticipantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelRegistrationByParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
