import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { RightPaneComponent } from './components/right-pane/right-pane.component';
import { TopHeaderComponent } from './components/top-header/top-header/top-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SportsPageComponent } from './components/sports-page/sports-page.component';
import { InPlayComponent } from './components/in-play/in-play.component';
import { ExchangeComponent } from './components/exchange/exchange.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../app/components/banner/banner.module').then(m => m.BannerModule) },
  { path: 'sport', component: SportsPageComponent },
  { path: 'inplay', component: InPlayComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: '**', redirectTo: '/home' } 

];