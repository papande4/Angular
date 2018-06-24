import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x: number;
  i: number;
  b = [];
  a = [1, 2, 4, 8, 16, 32, 64, 127];
  y: number;
  j: number = 0;
  c = [false, false, false, false, false, false, false,];
  correct: boolean = true;
  findDigit(e): any {
    this.x = e.digit;
    this.j = 0;
    if (this.x == 127) {
      this.c = [true, true, true, true, true, true, true];
    }
    else {
      if (this.x > 0 && this.x < 127) {
        for (this.i = 0; this.i < this.a.length; this.i++) {
          if (this.x < this.a[this.i]) {
            this.y = this.a[this.i - 1];
            this.x = this.x - this.a[this.i - 1];
            this.i = 0;
            this.b[this.j++] = this.y;
          }
          if (this.x == this.a[this.i]) {
            this.b[this.j++] = this.x;
          }
        }
      }
      for (this.i = 0; this.i < this.b.length; this.i++) {
        for (this.j = 0; this.j < this.a.length; this.j++) {
          if (this.b[this.i] == this.a[this.j]) {
            this.c[this.j] = true;
          }
        }
      }
    }
  }
}
