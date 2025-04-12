import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { FilterComponent } from './components/filter/filter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    SearchBoxComponent,
    ResultBoxComponent,
    FilterComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showFilter = false;
  isHidingFilter = false;
  isMobile = false;

  constructor() {
    // Inicializar isMobile en el constructor
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;

    // Si cambia de móvil a desktop y el filtro está cerrado
    if (!this.isMobile && !this.showFilter) {
      this.showFilter = true;
    }

    // Si cambia de desktop a móvil y el filtro está abierto
    if (this.isMobile && this.showFilter) {
      this.showFilter = false;
    }

  }

  toggleFilter() {
    if (this.showFilter) {
      this.isHidingFilter = true;
      setTimeout(() => {
        this.showFilter = false;
        this.isHidingFilter = false;
      }, 400); // Tiempo de la animación
    } else {
      this.showFilter = true;
    }
  }

  closeFilter() {
    if (this.isMobile && this.showFilter) {
      this.toggleFilter();
    }
  }
}
