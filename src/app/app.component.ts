import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [
    {
      value: 1,
      flag: false
    },
    {
      value: 2,
      flag: false
    },
    {
      value: 4,
      flag: false
    },
    {
      value: 8,
      flag: false
    },
    {
      value: 16,
      flag: false
    },
    {
      value: 32,
      flag: false
    },
    {
      value: 64,
      flag: false
    }
  ]
  enterNum: number;
  lsitedNumber = [];
  focusFunction() {
    this.setFlag('false');
  }
  submitNum() {
    if (this.enterNum == 127) {
      this.setFlag('all');
    }
    else {
      let num = 0;
      if (this.enterNum > 0 && this.enterNum < 127) {
        for (let i = 0; i < this.list.length; i++) {
          num = this.checkNumber(this.enterNum);
          this.enterNum = num;
        }
      } else {
        alert("Enter numbers between 0 to 127!");
      }
    }
  }
  setFlag(index) {
    if (index == 'all') {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].flag = true;
      }
    } else if (index == 'false') {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].flag = false;
      }
    } else {
      this.list[index].flag = true;
    }

  }
  checkNumber(number) {
    switch (true) {
      case number >= 64:
        this.setFlag(6);
        return number - 64;


      case number >= 32 && number < 64:
        this.setFlag(5);
        return number - 32;

      case number >= 16 && number < 33:
        this.setFlag(4);
        return number - 16;

      case number >= 8 && number < 16:
        this.setFlag(3);
        return number - 8;

      case number >= 4 && number < 8:
        this.setFlag(2);
        return number - 4;

      case number >= 2 && number < 4:
        this.setFlag(1);
        return number - 2;

      case number == 1:
        this.setFlag(0);
        return number - 1;

    }

  }

}
