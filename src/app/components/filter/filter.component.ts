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
  showBrand = false;
  showCategories = false;
  showFreeShipping = false;

  toggleFilter1(): void {
    this.showRanges = !this.showRanges;
  }

  toggleFilter2(): void {
    this.showBrand = !this.showBrand;
  }

  toggleFilter3(): void {
    this.showCategories = !this.showCategories;
  }

  toggleFilter4(): void {
    this.showFreeShipping = !this.showFreeShipping;
  }
}
