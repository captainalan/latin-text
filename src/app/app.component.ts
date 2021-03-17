import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'latin-input';

  transformedText = ""; // Text to copy/paste
  textInputMode = "";

  changeMode(e) {
    this.textInputMode = e.target.value;
  }

}
