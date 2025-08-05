import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkestrePresentationComponent } from './orkestre-presentation.component';

describe('OrkestrePresentationComponent', () => {
  let component: OrkestrePresentationComponent;
  let fixture: ComponentFixture<OrkestrePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrkestrePresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrkestrePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
