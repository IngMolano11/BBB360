import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { FilterComponent } from './components/filter/filter.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    SearchBoxComponent,
    ResultBoxComponent,
    FilterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Compara a tu estilo';

  showFilter = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
