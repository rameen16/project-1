import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BagsComponent } from './bags/bags.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { SunglassesComponent } from './sunglasses/sunglasses.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'bags' , component:BagsComponent},
  {path:'perfumes' , component:PerfumesComponent},
  {path:'sunglasses' , component:SunglassesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
