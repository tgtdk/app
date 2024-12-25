import { Component, NgModule, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SService } from './s.service';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { CommonSvcService } from './common-svc.service';
import { Sib1Component } from './sib1/sib1.component';
import { Sib2Component } from './sib2/sib2.component';
import { StoreServiceService } from './store-service.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SiblingAComponent } from './sibling-a/sibling-a.component';
import { SiblingBComponent } from './sibling-b/sibling-b.component';
import { DxAutocompleteModule, DxButtonModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular'; // Import DxSelectBoxModule
import { Routes } from '@angular/router';
import { DxAutoComplateComponent } from './dx-auto-complate/dx-auto-complate.component';import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DxDropDownBoxModule, DxDataGridModule } from 'devextreme-angular';
import { DxTreeViewComponent, DxTreeViewModule, DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LearnDirectiveComponent } from './learn-directive/learn-directive.component';
import { BasicRedEleDirective } from './learn-directive/Directies basic learning/basic-red-ele.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  autocompleteData: any = [];
  pageSize: number = 100; // Number of items loaded per page
  loadedData: any[] = []; // Holds the currently loaded dat
  treeDataSource: any;
  treeBoxValue = ['1_1'];
  @ViewChild(DxTreeViewComponent, { static: false }) treeView!: DxTreeViewComponent;
  oldCategoryId = 0;

  constructor() {
    this.loadInitialData();
    this.treeDataSource =[
      {
        "ID": "1_1_1",
        "name": "Video Players"
      },
      {
        "ID": "1_1_1_1",
        "categoryId": "1_1_1",
        "name": "HD Video Player",
        "price": 220
      },
      {
        "ID": "1_1_1_2",
        "categoryId": "1_1_1",
        "name": "SuperHD Video Player",
        "price": 270
      },
      {
        "ID": "1_1_2",
        "name": "Televisions",
        "expanded": true
      },
      {
        "ID": "1_1_2_1",
        "categoryId": "1_1_2",
        "name": "SuperLCD 42",
        "price": 1200
      },
      {
        "ID": "1_1_2_2",
        "categoryId": "1_1_2",
        "name": "SuperLED 42",
        "price": 1450
      },
      {
        "ID": "1_1_2_3",
        "categoryId": "1_1_2",
        "name": "SuperLED 50",
        "price": 1600
      },
      {
        "ID": "1_1_2_4",
        "categoryId": "1_1_2",
        "name": "SuperLCD 55",
        "price": 1750
      },
      {
        "ID": "1_1_2_5",
        "categoryId": "1_1_2",
        "name": "SuperLCD 70",
        "price": 4000
      },
      {
        "ID": "1_1_3",
        "name": "Monitors"
      },
      {
        "ID": "1_1_3_1",
        "categoryId": "1_1_3",
        "name": "19\""
      },
      {
        "ID": "1_1_4",
        "categoryId": "1_1",
        "name": "Projectors"
      },
      {
        "ID": "1_1_4_1",
        "categoryId": "1_1_4",
        "name": "Projector Plus",
        "price": 550
      },
      {
        "ID": "1_1_4_2",
        "categoryId": "1_1_4",
        "name": "Projector PlusHD",
        "price": 750
      }
    ];
  }

  // Load initial data into the autocomplete array
  loadInitialData() {
    for (let i = 0; i < 50000; i++) {
      this.autocompleteData.push({ item: "Item" + (i + 3) });
    }
    // Load the first batch of data into loadedData
    this.loadedData = this.autocompleteData.slice(0, this.pageSize);
  }
  onDropDownBoxValueChanged() {
    this.updateSelection(this.treeView?.instance);
  }

  onTreeViewReady(e: DxTreeViewTypes.ContentReadyEvent) {
    this.updateSelection(e.component);
  }

  onTreeViewSelectionChanged(e: DxTreeViewTypes.ItemSelectionChangedEvent) {
    console.log(e.component.getSelectedNodeKeys());
    console.log(e.itemData);
    debugger;
    if(this.treeBoxValue?.length){
    }else{
      this.oldCategoryId = 0; 
    }
    if(e.itemData && e.itemData!['categoryId']){
      debugger;
      let isNewId = false;
      if(this.oldCategoryId ==  e.itemData!['categoryId']){
        isNewId = true;
      }
      


      if(this.oldCategoryId == 0){
        this.oldCategoryId = e.itemData!['categoryId'];
        isNewId = true
      }
      

      if(isNewId){
        this.treeBoxValue = e.component.getSelectedNodeKeys();
      }else{
        e.component.unselectItem(e.itemData)
      }
    }
    if(e.itemData && !e.itemData!['categoryId']){
      e.component.unselectItem(e.itemData)
    }
  }

  updateSelection(treeView: DxTreeViewComponent['instance']) {
    if (!treeView) return;

    if (!this.treeBoxValue) {
      treeView.unselectAll();
    }

    this.treeBoxValue?.forEach(((value) => {
      treeView.selectItem(value);
    }));
  }

  // Event handler when the dropdown opens
  onDropdownOpened(e: any) {
    const dropdown = document.querySelector('.dx-scrollable-content');

    if (dropdown) {
      dropdown.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  // Event handler for scroll event
  onScroll(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const bottomReached = scrollTop + clientHeight >= scrollHeight;

    // If the user has scrolled to the bottom of the dropdown, load more items
    if (bottomReached) {
      this.loadMoreItems();
    }
  }

  // Load the next batch of items into the loadedData array
  loadMoreItems() {
    const nextItems = this.autocompleteData.slice(this.loadedData.length, this.loadedData.length + this.pageSize);
    this.loadedData = [...this.loadedData, ...nextItems];
  }
}



@NgModule({
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
     CommonModule


  ],
  declarations: [AppComponent,

    HelloComponent,
    Sib1Component, 
    Sib2Component,
    SiblingAComponent, 
    SiblingBComponent,
    LearnDirectiveComponent,
    BasicRedEleDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);