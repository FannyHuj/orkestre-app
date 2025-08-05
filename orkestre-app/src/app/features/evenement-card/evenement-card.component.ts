import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evenement } from '../../shared/models/evenement';
import { EvenementService } from '../../services/evenement.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { CancelEvenementByOrganizerComponent } from '../../pages/cancel-evenement-by-organizer/cancel-evenement-by-organizer.component';
import { CancelRegistrationByParticipantsComponent } from '../../pages/cancel-registration-by-participants/cancel-registration-by-participants.component';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-evenement-card',
  imports: [CommonModule, FormsModule, CancelEvenementByOrganizerComponent,CancelRegistrationByParticipantsComponent],
  templateUrl: './evenement-card.component.html',
  styleUrl: './evenement-card.component.css'
})
export class EvenementCardComponent {

  evenement: Evenement = {} as Evenement;
  evenementList: Evenement[] = [];
  userConnected = {} as User;
  selectedEvent : Evenement  = {} as Evenement;

  constructor(
    private service: EvenementService,
    private authenticationService: AuthenticationService, 
   
    private userService: UserService
  ) {
    this.authenticationService.getUser().subscribe({
      next: (user) => {
        this.userConnected = user;
        this.loadEvenements(user.id);
      },
      error: (err) => {
        console.error('Erreur:', err);
      }
    });
  }

    selectEvent(ev : Evenement ):void{
      this.selectedEvent=ev;
    }

  loadEvenements(userId: number): void {
    this.service.findEvenementByUserId(userId).subscribe({
      next: (data: Evenement[]) => {
        this.evenementList = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des évènements:', err);
      }
    });
  }

  isOwner(): boolean {
    return this.userConnected && this.evenement.organizer && 
           this.userConnected.id === this.evenement.organizer.id;
  }

}
