import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { EvenementService } from '../../services/evenement.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-cancel-evenement-by-organizer',
  imports: [],
  templateUrl: './cancel-evenement-by-organizer.component.html',
  styleUrl: './cancel-evenement-by-organizer.component.css'
})
export class CancelEvenementByOrganizerComponent {

  userConnected = {} as User;


  @Input() evId: number = 0;

   constructor(
    private evenementService: EvenementService,
    private authenticationService: AuthenticationService
  ) {

     this.authenticationService.getUser().subscribe({
    next: (user) => {
      this.userConnected = user;
    },
    error: (err) => {
      console.error('Erreur:', err);
    },
  });
   
  }

  cancelEvenementByOrganizer() {
  this.evenementService.cancelEvenementByOrganizer(this.evId, this.userConnected.id).subscribe();
}


}