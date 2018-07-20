import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path : '', redirectTo : 'pets', pathMatch : 'full'},
  {path : 'pets', component : HomeComponent, pathMatch : 'full'},
  {path : 'pets/new', component : NewComponent},
  {path : 'pets/:id/edit', component : EditComponent },
  {path : 'pets/:id', component : DetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
