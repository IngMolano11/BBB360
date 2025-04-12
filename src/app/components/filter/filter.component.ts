import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  // Variables para controlar la visibilidad de cada sección
  showRanges = false;
  showBrand = false;
  showCategories = false;
  showFreeShipping = false;

  // Variables para selecciones
  selectedPriceRange: string | null = null;
  selectedBrand: string | null = null;
  selectedCategory: string | null = null;
  freeShipping: boolean | null = null;

  // Variable para controlar comportamiento en móvil
  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    // Puedes abrir automáticamente alguna sección al iniciar si lo deseas
    // Por ejemplo: this.showBrand = true;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 576;

    // En dispositivos móviles podemos cerrar acordeones automáticamente
    // para ahorrar espacio vertical, descomenta si quieres este comportamiento
    /*
    if (this.isMobile) {
      this.showRanges = false;
      this.showBrand = false;
      this.showCategories = false;
      this.showFreeShipping = false;
    }
    */
  }

  // Toggle para cada filtro
  toggleFilter1() {
    this.showRanges = !this.showRanges;

    // Opcional: cerrar otros filtros en móvil al abrir uno nuevo
    if (this.isMobile && this.showRanges) {
      this.showBrand = false;
      this.showCategories = false;
      this.showFreeShipping = false;
    }
  }

  toggleFilter2() {
    this.showBrand = !this.showBrand;

    // Opcional: cerrar otros filtros en móvil al abrir uno nuevo
    if (this.isMobile && this.showBrand) {
      this.showRanges = false;
      this.showCategories = false;
      this.showFreeShipping = false;
    }
  }

  toggleFilter3() {
    this.showCategories = !this.showCategories;

    // Opcional: cerrar otros filtros en móvil al abrir uno nuevo
    if (this.isMobile && this.showCategories) {
      this.showRanges = false;
      this.showBrand = false;
      this.showFreeShipping = false;
    }
  }

  toggleFilter4() {
    this.showFreeShipping = !this.showFreeShipping;

    // Opcional: cerrar otros filtros en móvil al abrir uno nuevo
    if (this.isMobile && this.showFreeShipping) {
      this.showRanges = false;
      this.showBrand = false;
      this.showCategories = false;
    }
  }

  // Métodos para seleccionar opciones
  selectPriceRange(range: string) {
    if (this.selectedPriceRange === range) {
      this.selectedPriceRange = null; // Deseleccionar si ya estaba seleccionado
    } else {
      this.selectedPriceRange = range;
    }
    // Aquí podrías emitir un evento para notificar al componente padre
  }

  selectBrand(brand: string) {
    if (this.selectedBrand === brand) {
      this.selectedBrand = null; // Deseleccionar si ya estaba seleccionado
    } else {
      this.selectedBrand = brand;
    }
    // Aquí podrías emitir un evento para notificar al componente padre
  }

  selectCategory(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = null; // Deseleccionar si ya estaba seleccionado
    } else {
      this.selectedCategory = category;
    }
    // Aquí podrías emitir un evento para notificar al componente padre
  }

  selectFreeShipping(isFree: boolean) {
    if (this.freeShipping === isFree) {
      this.freeShipping = null; // Deseleccionar si ya estaba seleccionado
    } else {
      this.freeShipping = isFree;
    }
    // Aquí podrías emitir un evento para notificar al componente padre
  }
}
