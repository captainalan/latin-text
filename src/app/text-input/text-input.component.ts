import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  @Input() textInput: string;
  @Output() textInputChange = new EventEmitter<string>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  transformed = "";
  onKey(event: any) {
    this.textInput = event.target.value;

    // Apply transformation here
    this.transformed = event.target.value + "!!!!"; // add excitement!

    this.textInputChange.emit(this.transformed);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
