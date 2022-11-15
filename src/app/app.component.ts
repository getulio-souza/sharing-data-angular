import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sharing-data';
  currentBeverage = 'coffee and bread';
  beverages = ['milk', 'tea', 'coffee', 'juice'];

  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
  }
}
