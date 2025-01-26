import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { ApiCallAfterAnotherComponent } from './api-call-after-another/api-call-after-another.component';

const routes: Routes = [
  { path: 'feature', component: FeatureComponent },
  { path: 'api-call-after-another', component: ApiCallAfterAnotherComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
