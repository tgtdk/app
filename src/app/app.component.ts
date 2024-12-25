import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HelloComponent, Sib1Component, Sib2Component, CommonModule, SiblingAComponent, SiblingBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myTextVal: string = "";
  count: number = 0;

  constructor(private sService: SService,private svc: CommonSvcService, public store: StoreServiceService){
    this.svc.mySub.subscribe(
      (val: number) => this.count = val
    )
    

    // example  3
    this.isAuthenticated$
        .subscribe((res: boolean) => this.isLogged = res);
  }

  sendTextValue(){
    this.sService.passValue(this.myTextVal);
  }
  sendTextValueStr(){
    this.sService.passValuStr(this.myTextVal);
  }

  // example 3
  isAuthenticated$: Subject<boolean> = new Subject();
  isLogged = false;

  // constructor(public store: StoreService) { 
  //   this.isAuthenticated$
  //     .subscribe(res => this.isLogged = res);
        
  // }

  
}  