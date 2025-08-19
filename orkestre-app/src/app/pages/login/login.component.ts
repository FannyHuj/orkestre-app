import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from '../../shared/models/login';
import { Router, RouterLink } from '@angular/router';
import { LoginTraceService } from '../../services/login-trace.service';
import { LoginTrace } from '../../shared/models/login-trace';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private auth: AuthenticationService, private router: Router, private LoginTraceService: LoginTraceService,private toastr: ToastrService) {}
  login: Login = {} as Login;
  token: string | null = null;
  loginTrace: LoginTrace = {} as LoginTrace;

  log() {
    this.auth.login(this.login).subscribe({
      next: auth => {
        this.auth.setToken(auth.token);
        this.router.navigateByUrl("/");
        this.auth.getUser().subscribe({
          next: user => {
        
            this.loginTrace.email = user.email;
            this.loginTrace.loginDate = new Date();
            this.loginTrace.userId = user.id;
            this.LoginTraceService.addLoginTrace(this.loginTrace).then(() => {
             
              this.toastr.success('Connexion réussie');
            }); 
          }, 
          error: err => console.error('Erreur lors de la récupération de l\'utilisateur :', err) 
        });
      }, 
      error: err => console.error('Quelque chose s\'est mal passé lors de la connexion :', err) 
    }); 
  }
}
