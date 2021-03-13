import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { latinMode } from './modes/latin';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() textInput: string;
  @Input() transformedText: string;
  @Output() textInputChange = new EventEmitter<string>();

  // TODO dynamically change mode
  transformer = latinMode().transformer;
  info = latinMode().info;

  transformed = "";

  onKey(event: any) {
    this.textInput = event.target.value;

    // Apply transformation here
    this.transformed = this.transformer(event.target.value); // add excitement!

    this.textInputChange.emit(this.transformed);
  }

  onClear() {
    this.textInput = "";
    this.transformed = "";
    this.textInputChange.emit(this.transformed);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
