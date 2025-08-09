import { Component } from '@angular/core';
import { OrkestrePresentationComponent } from "../../features/orkestre-presentation/orkestre-presentation.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [OrkestrePresentationComponent,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
