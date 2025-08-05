import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isConnected: boolean= false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {

    
  }
  

  isUserConnected(): boolean {
    this.isConnected = this.authService.isUserConnected();
    
    return this.authService.isUserConnected();

  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
