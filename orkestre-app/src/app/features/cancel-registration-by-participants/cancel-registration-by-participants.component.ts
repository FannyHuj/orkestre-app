import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { EvenementService } from '../../services/evenement.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Evenement } from '../../shared/models/evenement';

@Component({
  selector: 'app-cancel-registration-by-participants',
  imports: [],
  templateUrl: './cancel-registration-by-participants.component.html',
  styleUrl: './cancel-registration-by-participants.component.css'
})
export class CancelRegistrationByParticipantsComponent {

  userConnected = {} as User;

   @Input() evenement:Evenement = {} as Evenement;

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

  cancelRegistrationByParticipants() {
    this.evenementService.cancelRegistrationByParticipants(this.evenement.id, this.userConnected.id).subscribe();
  }

}
