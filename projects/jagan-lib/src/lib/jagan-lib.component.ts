import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-jagan-lib',
  template: `
  <h1>
  <ng-content></ng-content>
  </h1>
  `,
  styles: [
    `h1{
      color: red;
    }`
  ]
})
export class JaganLibComponent implements OnInit {
  @Input() jaganInput: string;

  constructor() { }

  ngOnInit(): void {
    console.warn('Received input::' + this.jaganInput)
  }

}
