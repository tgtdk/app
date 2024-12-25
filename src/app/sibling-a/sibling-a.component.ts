import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sibling-a',
  standalone: true,
  imports: [],
  templateUrl: './sibling-a.component.html',
  styles: ``
})
export class SiblingAComponent {
  count:number = 0;

  constructor( private messageService: MessageService) { }

  ngOnInit() {
  }

  onClick() {
    this.count+=1;
    return this.count++;
  }

  sendCount() {
    this.messageService.onLike(this.onClick());
  }
}
