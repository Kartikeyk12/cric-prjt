import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { RightPaneComponent } from "./components/right-pane/right-pane.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TopHeaderComponent } from "./components/top-header/top-header/top-header.component";
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ExchangeComponent } from './components/exchange/exchange.component';
import { InPlayComponent } from './components/in-play/in-play.component';
import { SportsPageComponent } from './components/sports-page/sports-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './module/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, TopHeaderComponent,RouterModule, RightPaneComponent, FooterComponent, MainHeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cricAdda-project';
}
