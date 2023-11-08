import { Component } from '@angular/core';

@Component({
  selector: 'app-fontsize',
  templateUrl: './fontsize.component.html',
  styleUrls: ['./fontsize.component.css']
})
export class FontsizeComponent {
  fontSize: number = 16; // Initial font size

  increaseFontSize(): void {
    this.fontSize += 2; // Increase font size by 2 pixels
  }

  decreaseFontSize(): void {
    this.fontSize -= 2; // Decrease font size by 2 pixels
    if (this.fontSize < 2) {
      this.fontSize = 2; // Ensure minimum font size is 2 pixels
}
  }}
