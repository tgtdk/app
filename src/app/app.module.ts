import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterOutlet } from '@angular/router';
import { DxTreeViewModule, DxDropDownBoxModule, DxDataGridModule, DxButtonModule, DxSelectBoxModule, DxAutocompleteModule } from 'devextreme-angular';
import { HelloComponent } from './hello/hello.component';
import { BasicRedEleDirective } from './learn-directive/Directies basic learning/basic-red-ele.directive';
import { ChangeEleValDirective } from './learn-directive/Directies basic learning/change-ele-val.directive';
import { LearnDirectiveComponent } from './learn-directive/learn-directive.component';
import { Sib1Component } from './sib1/sib1.component';
import { Sib2Component } from './sib2/sib2.component';
import { SiblingAComponent } from './sibling-a/sibling-a.component';
import { SiblingBComponent } from './sibling-b/sibling-b.component';
import { AppRoutingModule } from './app-routing.module';
import { MockApiInterceptor } from './logging.interceptor';
import { ApiService } from './api.service';

@NgModule({
    declarations: [
        AppComponent, // Add other components here if needed
        HelloComponent,
        Sib1Component, 
        Sib2Component,
        SiblingAComponent, 
        SiblingBComponent,
        LearnDirectiveComponent,
        BasicRedEleDirective,
        ChangeEleValDirective
    ],
    imports: [
        BrowserModule,
        DxTreeViewModule,
        DxDropDownBoxModule,
        HttpClientModule,
        DxDataGridModule,
        RouterOutlet, 
        FormsModule,
        DxButtonModule,
        DxSelectBoxModule, 
        DxAutocompleteModule,
         CommonModule,
         AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MockApiInterceptor,
            multi: true,
          },
          ApiService
    ],
    bootstrap: [AppComponent] // Ensure AppComponent is the entry point
})
export class AppModule { }



