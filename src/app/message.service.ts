import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject$ = new Subject<any>();

  onLike(count: number){
    this.subject$.next(count);
  }

  getLikesCount() {
    return this.subject$.asObservable();
  }

  constructor() { }
}
