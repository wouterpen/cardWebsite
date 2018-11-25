import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: ShowCardsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];
@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
