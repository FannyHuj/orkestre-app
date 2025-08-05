import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EvenementRegistrationComponent } from '../../features/evenement-registration/evenement-registration.component';
import { EvenementService } from '../../services/evenement.service';
import { Evenement } from '../../shared/models/evenement';
import { CommonModule } from '@angular/common';
import { CancelEvenementByOrganizerComponent } from '../cancel-evenement-by-organizer/cancel-evenement-by-organizer.component';
import { CancelRegistrationByParticipantsComponent } from '../cancel-registration-by-participants/cancel-registration-by-participants.component';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../shared/models/user';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-evenement-details',
  imports: [RouterLink,CommonModule, EvenementRegistrationComponent, CommonModule,CancelEvenementByOrganizerComponent,CancelRegistrationByParticipantsComponent,QRCodeComponent],
  templateUrl: './evenement-details.component.html',
  styleUrl: './evenement-details.component.css',
})
export class EvenementDetailsComponent {
  evenement: Evenement = {} as Evenement;
  userConnected = {} as User;
  shareableUrl: string = "";



  constructor(
    private route: ActivatedRoute,
    private evenementService: EvenementService,
    private authenticationService: AuthenticationService
  ) {
    this.shareableUrl = window.location.href; // Get the current URL to share


        this.authenticationService.getUser().subscribe({
       next: (user) => {
         this.userConnected = user;
       },
       error: (err) => {
         console.error('Erreur:', err);
       },
     });

    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the 'id' parameter from the route
    if (id) {
      this.evenementService.findEvenementById(id).subscribe((data) => {
        this.evenement = data;
      });
    }
  }

    isOwner(): boolean {
    return this.userConnected.id == this.evenement.organizer.id;
  }

  

}
