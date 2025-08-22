import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-profile',
  imports: [],
  templateUrl: './delete-profile.component.html',
  styleUrl: './delete-profile.component.css',
})
export class DeleteProfileComponent {
  user: User = {} as User;
  userConnected = {} as User;
  pictureURL = environment.apiURL + '/';
  avatar: File = {} as File;
  fileName = '';
  successMessage: string = '';
  errorMessage: string = '';

   @Input() userProfile: number = 0;

  constructor(
    private userService: UserService,
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

  deleteProfile() {
    this.userService.deleteProfile(this.userConnected.id).subscribe({
      next: () => {
        this.toastr.success('Votre compte a été supprimé avec succès.');
        this.authenticationService.logout();
      },
      error: () => {
        this.toastr.error(
          'La suppression du compte a échoué. Veuillez réessayer plus tard.'
        );
      },
    });
  }
}
