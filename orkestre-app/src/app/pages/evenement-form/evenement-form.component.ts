import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evenement } from '../../shared/models/evenement';
import { EvenementService } from '../../services/evenement.service';
import { AuthenticationService } from '../../services/authentication.service';
import { EvenementCategoryEnum } from '../../shared/models/evenementCategoryEnum';

@Component({
  selector: 'app-evenement-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './evenement-form.component.html',
  styleUrl: './evenement-form.component.css',
})
export class EvenementFormComponent {
  evenement: Evenement = {} as Evenement;
  selectedCategory: EvenementCategoryEnum = {} as EvenementCategoryEnum;

  constructor(private service: EvenementService,private authService: AuthenticationService) {
    this.authService.getUser().subscribe({
      next: (user) => {
        console.log(user.id)
        this.evenement.organizer =user;
      },
      error: (error) => {
        console.error("Erreur lors du chargement de l'utilisateur", error);
      },
    });
  }

  createEvenement() {
    this.evenement.category = this.selectedCategory;
    this.service.addEvenement(this.evenement).subscribe({
      next: (data) => {
        console.log('Evenement crée', data);
      },
      error: (error) => {
        console.error("Erreur lors de la création de l'évènement", error);
      },
    });
  }
}
