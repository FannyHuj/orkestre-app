import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { EvenementService } from '../../services/evenement.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Evenement } from '../../shared/models/evenement';
import { ToastrService } from 'ngx-toastr';

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
       private authenticationService: AuthenticationService,
       private toastr: ToastrService
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
    this.evenementService.cancelRegistrationByParticipants(this.evenement.id, this.userConnected.id).subscribe({
    next: () => {
      this.toastr.success('Annulation réussie');
    },
    error: (err) => {
      console.error('Erreur:', err);
      this.toastr.error('Annulation échouée');
    },
  });
  }

}
