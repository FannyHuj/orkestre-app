import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../shared/models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserRoleEnum } from '../../shared/models/userRoleEnum';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  
  user: User = {} as User;
  role: UserRoleEnum[] = [] as UserRoleEnum[];
  avatar: File = {} as File;

  redirectUrl = '';
  fileName = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService ,private router: Router) {}

  signIn(event: Event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstName", this.user.firstName);
    formData.append("lastName", this.user.lastName);
    formData.append("email", this.user.email);
    formData.append("password", this.user.password);
    formData.append("phoneNumber", this.user.phoneNumber);
    formData.append("picture", this.avatar);

    this.userService.signIn(formData).subscribe({
      next: (response) => {
        //Wait for 2 seconds before showing the success message
        setTimeout(() => {
          this.successMessage = 'Utilisateur créé avec succès !';
        }, 2000);

        //Redirect to the home page after creating the user
        this.router.navigate([this.redirectUrl]);

        console.log('User created successfully', response);
      },
      error: (error) => {
        this.errorMessage =
          "Erreur lors de la création de l'utilisateur, veuillez recommencer plus tard";
        //Show the error message
        console.error('Error creating user', error);
      },
    });
  }

  onFileSelected(event: any) {
    this.avatar = event.target.files[0];

    if (this.avatar) {
      this.fileName = this.avatar.name;
    }
  }
}
