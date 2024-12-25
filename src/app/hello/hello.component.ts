import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { SService } from '../s.service';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello {{name}}!</h1><h1>Hello {{name2}}!</h1>',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements DoCheck {
  name: string = "";
  name2: string = "";

  constructor(private sService: SService) {

  }
  // normal variable value we need to defined inside ngDoCheck then its value update in real time 
  ngDoCheck(): void {
    this.name2 = this.sService.stringNormal;
  }

  ngOnInit() {
    this.sService.stringSubject.subscribe(
      data => 
      {
        console.log('next subscribed value: ' + data);
        this.name = data;
      }
    );
    
  }


  
}
