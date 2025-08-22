import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { DeleteProfileComponent } from "../delete-profile/delete-profile.component";

@Component({
  selector: 'app-personal-informations',
  imports: [FormsModule, CommonModule, DeleteProfileComponent],
  templateUrl: './personal-informations.component.html',
  styleUrl: './personal-informations.component.css',
})
export class PersonalInformationsComponent {
  user: User = {} as User;
  userConnected = {} as User;
  pictureURL = environment.apiURL+'/';
  avatar: File = {} as File;
  fileName = '';
  successMessage: string = '';
  errorMessage: string = '';

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

  updateProfileInfos() {
    const formData = new FormData();

    formData.append('firstName', this.userConnected.firstName);
    formData.append('lastName', this.userConnected.lastName);
    formData.append('email', this.userConnected.email);
    formData.append('phoneNumber', this.userConnected.phoneNumber);
    formData.append('picture', this.avatar);

    this.userService
      .updateProfileInfos(this.userConnected.id, formData)
      .subscribe({
        next: (response) => {
          this.userConnected.picture = response.picture;
          this.toastr.success('Vos informations ont été mises à jour avec succès !');
        },
        error: (error) => {
          this.toastr.error('Vos informations n\'ont pas pu êtres mises à jour, veuillez réessayer plus tard');
        },
      });
  }


  onFileSelected(event: any) {
    this.avatar = event.target.files[0];
    console.log('Avatar selected:', this.avatar);

    if (this.avatar) {
      this.fileName = this.avatar.name;
    }
  }

  closeAlert() {
    this.successMessage = '';
  }
  closeErrorAlert() {
    this.errorMessage = '';
  }

  selectUserProfile(userProfile : User ):void{
        this.userConnected=userProfile;
      }
}
