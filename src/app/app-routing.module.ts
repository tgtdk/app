import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Default route (you can change it)
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Add other routes here
  exports: [RouterModule]
})
export class AppRoutingModule {
  
      
}
