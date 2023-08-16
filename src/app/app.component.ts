import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Primera apps';
  contador: number = 0;
  contar(numero: number) {
    this.contador += numero;
  }
}
