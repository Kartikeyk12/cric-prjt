import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-in-play',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './in-play.component.html',
  styleUrl: './in-play.component.scss'
})
export class InPlayComponent {

}
