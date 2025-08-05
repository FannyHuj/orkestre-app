import { Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Evenement } from '../../shared/models/evenement';
import { EvenementFilters } from '../../shared/models/evenement-filters';
import { EvenementService } from '../../services/evenement.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-evenement-filters',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './evenement-filters.component.html',
  standalone: true,
  styleUrl: './evenement-filters.component.css'
})
export class EvenementFiltersComponent {

  evenement: Evenement = {} as Evenement;
  evenementList: Evenement[] = [];
  filters:EvenementFilters = {} as EvenementFilters;

  

  //@Output() evenementsFound = new EventEmitter<Evenement[]>();

  constructor (private service: EvenementService) {
    this.applyDefaultFilters();
  }

  applyFilters(){
      if (this.filters.date === undefined) {
       this.filters.date = "null";
      }
      this.service.getFilteredEvenements(this.filters).subscribe((data: Evenement[]) => {
      this.evenementList = data;
    });
  }

  applyDefaultFilters(){
    
      this.service.getAllEvenements().subscribe((data: Evenement[]) => {
      this.evenementList = data;
    });
   
    
    

  }


}
