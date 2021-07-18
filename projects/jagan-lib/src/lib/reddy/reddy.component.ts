import { Component, Input, OnInit } from '@angular/core';

@Component({selector: 'lib-reddy-lib',
template: `
<h1>
<ng-content></ng-content>
</h1>
`,
styles: [
  `h1{
    color: green;
  }`
]
})
export class ReddyComponent implements OnInit {

  @Input() reddyInput: string;

  constructor() { }

  ngOnInit(): void {
    console.warn('reddyInput::'+ this.reddyInput);
  }

}
