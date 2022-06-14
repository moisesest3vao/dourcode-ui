import { AuthGuard } from './account/shared/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//const
const homeModule = () => import('./component/home/home.module').then(x => x.HomeModule);
const loginModule = () => import('./account/login/login.module').then(x => x.LoginModule);
const meModule = () => import('./component/profile/me/me.module').then(x => x.MeModule);

//routes
const routes: Routes = [
  {path: "login", loadChildren: loginModule },
  {path: "home", loadChildren: homeModule, canActivate: [AuthGuard]},
  {path: "me", loadChildren: meModule, canActivate: [AuthGuard] },
  {path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
