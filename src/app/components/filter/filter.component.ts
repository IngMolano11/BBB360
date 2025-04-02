import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  showRanges = false;

  toggleFilter(): void {
    this.showRanges = !this.showRanges;
  }
}
