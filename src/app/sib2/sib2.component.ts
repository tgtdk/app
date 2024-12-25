import { Component } from '@angular/core';
import { CommonSvcService } from '../common-svc.service';

@Component({
  selector: 'app-sib2',
  standalone: true,
  imports: [],
  templateUrl: './sib2.component.html',
  styles: ``
})
export class Sib2Component {
  count: number = 0

  constructor(private svc: CommonSvcService){
      this.svc.mySub.subscribe(
        (val) => this.count = val
      )
    } 
  increase(){
    this.svc.increaseCounter();
  }
}
