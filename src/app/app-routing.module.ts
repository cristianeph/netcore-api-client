import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OauthGuardService} from './shared/services/oauth-guard.service';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
    canActivate: [OauthGuardService]
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: '**',
    redirectTo: 'security/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
