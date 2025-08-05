import { Component } from '@angular/core';
import { PersonalInformationsComponent } from "../../features/personal-informations/personal-informations.component";
import { EvenementCardComponent } from "../../features/evenement-card/evenement-card.component";

@Component({
  selector: 'app-profile-page',
  imports: [PersonalInformationsComponent, EvenementCardComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {}