import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonSvcService {

  public mySub = new Subject<number>();
  public counter: number = 0;

  increaseCounter(){
    this.counter++;
    this.mySub.next(this.counter);
  }

}
