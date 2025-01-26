import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ApiCallAfterAnotherComponent } from './api-call-after-another/api-call-after-another.component';


@NgModule({
  declarations: [
    FeatureComponent,
    ApiCallAfterAnotherComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
