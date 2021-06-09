import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() items:any={};

  ngOnInit(): void {
    console.log("This is a movie Object ", this.items);
  }
  
}
