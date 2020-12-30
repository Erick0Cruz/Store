import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['Erick', 'Armando', 'Roberto'];

  // tslint:disable-next-line: typedef
  addItem(){
    this.items.push('nuevo item');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
