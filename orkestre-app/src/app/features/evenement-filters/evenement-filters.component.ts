import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Evenement } from '../../shared/models/evenement';
import { EvenementFilters } from '../../shared/models/evenement-filters';
import { EvenementService } from '../../services/evenement.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor (private service: EvenementService,private toastr: ToastrService) {
    this.applyDefaultFilters();
  }
  applyFilters(){
      if (this.filters.date === undefined) {
       this.filters.date = "null";
      }
      this.service.getFilteredEvenements(this.filters).subscribe({
      next: (data) => {
        this.evenementList = data;
      },
      error: () => {
         this.toastr.error('Impossible de récupérer les événements');
      },
    
  });
}
  applyDefaultFilters(){
    
      this.service.getAllEvenements().subscribe({
      next: (data) => {
        this.evenementList = data;
      },
      error: () => {
         this.toastr.error('Impossible de récupérer les événements');
      },
    
  });
  }
}
