import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredEvenementSectionComponent } from './registered-evenement-section.component';

describe('RegisteredEvenementSectionComponent', () => {
  let component: RegisteredEvenementSectionComponent;
  let fixture: ComponentFixture<RegisteredEvenementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredEvenementSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredEvenementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
