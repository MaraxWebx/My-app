import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>This is {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; color:red;}`]
})
export class HelloComponent  {
  @Input() name: string;
}
