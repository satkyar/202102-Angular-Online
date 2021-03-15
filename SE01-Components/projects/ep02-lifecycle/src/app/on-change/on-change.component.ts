import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change',
  template: `
    <p>
      on-change works!
    </p>
  `,
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
