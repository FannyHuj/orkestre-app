import { Component, Input } from '@angular/core';
import { EvenementService } from '../../services/evenement.service';
import { Evenement } from '../../shared/models/evenement';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-evenement-registration',
  imports: [CommonModule],
  templateUrl: './evenement-registration.component.html',
  styleUrl: './evenement-registration.component.css',
  standalone: true
})
export class EvenementRegistrationComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;

  @Input() evId: number = 0;

  evenement: Evenement = {} as Evenement;
  user: User = {} as User;

  constructor(
    private evenementService: EvenementService,
    private authenticationService: AuthenticationService
  ) {}

  closeAlert() {
    this.successMessage = null;
  }
  closeErrorAlert() {
    this.errorMessage = null;
  }

  evenementRegistrationByUser() {

    this.authenticationService.getUser().subscribe({
      next: (user) => {
        this.user = user;
        this.evenementService.evenementRegistrationByUser(this.evId, this.user.id).subscribe();

      },
      error: (err) => {
        this.errorMessage =
          "Il y a eu une erreur lors de l'inscription à l'événement. Veuillez réessayer plus tard.";
      },
    });
  }
}
