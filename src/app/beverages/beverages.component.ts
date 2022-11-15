import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent implements OnInit {
  @Input() beverages = 'tea'
  @Output() newBeverageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  //create a method
  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }

}
