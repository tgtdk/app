import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SService {

    public stringSubject = new Subject<string>();
    public stringNormal: string = "" ;

  passValue(data: string) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }

  passValuStr(str: string){
    this.stringNormal = str;
  }
}
