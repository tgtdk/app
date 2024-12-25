import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sibling-b',
  templateUrl: './sibling-b.component.html',
  styles: ``
})
export class SiblingBComponent {
  totalCount: number = 0;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getLikesCount().subscribe(count => {
      console.log(count);
      this.totalCount = count;
    })
  }

}
