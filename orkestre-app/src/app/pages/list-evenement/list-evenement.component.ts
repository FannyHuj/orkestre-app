import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Evenement } from '../../shared/models/evenement';
import { EvenementService } from '../../services/evenement.service';
import { EvenementFiltersComponent } from '../../features/evenement-filters/evenement-filters.component';
import { EvenementRegistrationComponent } from '../../features/evenement-registration/evenement-registration.component';


@Component({
  selector: 'app-list-evenement',
  imports: [CommonModule, FormsModule, RouterModule, EvenementFiltersComponent, EvenementRegistrationComponent, RouterLink],
  templateUrl: './list-evenement.component.html',
  standalone: true,
  styleUrl: './list-evenement.component.css'
})
export class ListEvenementComponent {

  selectedEvenement: Evenement = {} as Evenement;

   setSelectedEvenement(evenement: Evenement) {
    this.selectedEvenement = evenement;
  }


  //evenements:Evenement[] = [];

  //@Output() filteredEvenements = new EventEmitter<Evenement[]>();

  constructor (private evenementService: EvenementService) {
   /* this.evenementService.getAllEvenements().subscribe((data: Evenement[]) => {
      this.evenements = data;
    });*/
  }

}
