import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PokemonSelectionComponent } from './components/pokemon-selection/pokemon-selection.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  { path: '', component: ConfigurationComponent },
  { path: 'loader/:nextComponent/:message', component: LoaderComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'selection', component: PokemonSelectionComponent },
  { path: 'profile', component: MyProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
