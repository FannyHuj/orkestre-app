import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEvenementByOrganizerComponent } from './cancel-evenement-by-organizer.component';

describe('CancelEvenementByOrganizerComponent', () => {
  let component: CancelEvenementByOrganizerComponent;
  let fixture: ComponentFixture<CancelEvenementByOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelEvenementByOrganizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelEvenementByOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
