import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { latinMode } from './modes/latin';
import { pinyinMode } from './modes/pinyin';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() textInput: string;
  @Input() transformedText: string;
  @Input() mode: string; // e.g. latin, pinyin
  @Output() textInputChange = new EventEmitter<string>();

  // New modes can be added by name here
  modes = {
    latin: latinMode,
    pinyin: pinyinMode,
    echo: function() {
      return {
        transformer: (s: string) => s, // Just returns same thing back
        info: "Echos back what you typed."
      }
    }
  }

  transformer: (fn: string) => string;
  info: string;

  transformed = "";

  ngOnChanges(changes) {
    let mode = changes['mode'].currentValue;
    if (!this.modes[mode]) return; // If no mode selected yet, do nothing.

    this.transformer = this.modes[mode]().transformer;
    this.info = this.modes[mode]().info;

    this.onClear(); // Clear current input
  }

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
    this.transformer = latinMode().transformer;
    this.info = latinMode().info;
  }

}
