import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Output, EventEmitter, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-search-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit { // Agregar OnDestroy si se agrega simulación de reconocimiento de voz
  @Output() search = new EventEmitter<any>();

  // Variables para la búsqueda
  searchQuery: string = '';
  showError: boolean = false;
  isRecording: boolean = false;

  // Detección de dispositivo
  isMobile: boolean = false;

  // Filtros de búsqueda
  filters = {
    freeShipping: false,
    discount: false,
    bestSeller: false
  };

  // Variable para simular reconocimiento de voz (mock)
  // private recognitionTimeout: any;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    // Código de inicialización si se necesita
  }

  // ngOnDestroy(): void {
  //   // Limpieza de recursos
  //   if (this.recognitionTimeout) {
  //     clearTimeout(this.recognitionTimeout);
  //   }
  // }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 576;

    // Puedes ajustar el comportamiento basado en el tamaño de pantalla
    // Por ejemplo, mostrar/ocultar ciertos elementos
  }

  /**
   * Ejecuta la búsqueda cuando se envía el formulario
   */
  onSearch(): void {
    // Validación básica
    if (!this.searchQuery || this.searchQuery.trim() === '') {
      this.showError = true;
      setTimeout(() => this.showError = false, 3000);
      return;
    }

    // Ocultar mensaje de error si estaba visible
    this.showError = false;

    // Crear objeto con los datos de búsqueda
    const searchData = {
      query: this.searchQuery,
      filters: { ...this.filters }
    };

    // Emitir evento para que el componente padre procese la búsqueda
    this.search.emit(searchData);

    // Para una demostración, podrías limpiar el formulario o dejar el texto
    // this.searchQuery = '';
  }

  /**
   * Establece el término de búsqueda al hacer clic en una etiqueta popular
   */
  setSearchTerm(term: string): void {
    this.searchQuery = term;
    // Opcionalmente puedes ejecutar la búsqueda inmediatamente
    this.onSearch();
  }

  /**
   * Simula la funcionalidad de búsqueda por voz (como no hay acceso real al API,
   * esto es solo una simulación para UI)
   */
  // toggleVoiceSearch(): void {
  //   if (this.isRecording) {
  //     // Detener la grabación simulada
  //     this.isRecording = false;
  //     if (this.recognitionTimeout) {
  //       clearTimeout(this.recognitionTimeout);
  //     }
  //   } else {
  //     // Iniciar grabación simulada
  //     this.isRecording = true;

  //     // Simular que se está escuchando y después de 2 segundos obtener un resultado
  //     this.recognitionTimeout = setTimeout(() => {
  //       // Simulamos que se detectó algo
  //       const fakePhrases = [
  //         "iPhone 16",
  //         "Samsung Galaxy",
  //         "Laptop Gamer",
  //         "Smart TV",
  //         "Audífonos Bluetooth"
  //       ];

  //       // Seleccionar aleatoriamente una frase
  //       const randomIndex = Math.floor(Math.random() * fakePhrases.length);
  //       this.searchQuery = fakePhrases[randomIndex];

  //       // Detener la grabación
  //       this.isRecording = false;

  //       // Ejecutar la búsqueda automáticamente
  //       setTimeout(() => this.onSearch(), 300);
  //     }, 2000);
  //   }
  // }

  /**
   * Método para manejar scroll en dispositivos móviles pequeños
   * para que el usuario vea claramente los filtros
   */
  scrollToFilters() {
    if (this.isMobile) {
      // Encuentra el elemento y haz scroll hacia él
      const filtersElement = document.querySelector('.search-filters');
      if (filtersElement) {
        filtersElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  /**
   * Método para reiniciar todos los filtros
   */
  resetFilters() {
    this.filters = {
      freeShipping: false,
      discount: false,
      bestSeller: false
    };
  }
}
