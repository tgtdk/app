import { Component } from '@angular/core';
import { CommonSvcService } from '../common-svc.service';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styles: ``
})
export class Sib1Component {
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
