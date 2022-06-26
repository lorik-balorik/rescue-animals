import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NonAuthComponent} from "./layout/non-auth/non-auth.component";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NonAuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
