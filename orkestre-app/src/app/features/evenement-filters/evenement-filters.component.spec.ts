import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementFiltersComponent } from './evenement-filters.component';

describe('EvenementFiltersComponent', () => {
  let component: EvenementFiltersComponent;
  let fixture: ComponentFixture<EvenementFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenementFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
