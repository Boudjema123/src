import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component'; 
import { CheminsComponent} from './chemins/chemins.component';
import { ComposantsComponent} from './composants/composants.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'about/chemins',
    component : CheminsComponent
  },
  {
    path:'about/composants',
    component : ComposantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
