import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-result-box',
  imports: [],
  templateUrl: './result-box.component.html',
  styleUrl: './result-box.component.css'
})
export class ResultBoxComponent implements OnInit, AfterViewInit {
  // Referencia opcional al contenedor de scroll para manipulación
  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;

  // Variables para detección de dispositivo
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    // Inicialización
  }

  ngAfterViewInit(): void {
    // Si quieres realizar alguna acción después de que la vista se ha inicializado
    // Por ejemplo, mostrar un indicador de scroll en móviles
  }

  openCreditoModal(): void {
    const modalElement = document.getElementById('creditoModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 576;
    this.isTablet = width >= 576 && width < 992;
    this.isDesktop = width >= 992;

    // Puedes ajustar el comportamiento basado en el tamaño de pantalla
    // Por ejemplo, limitar el número de tarjetas visibles en móvil
  }

  // Método opcional: desplazamiento programático
  scrollRight() {
    if (this.scrollContainer && this.scrollContainer.nativeElement) {
      const container = this.scrollContainer.nativeElement;
      container.scrollLeft += 200; // Desplazamiento suave hacia la derecha
    }
  }

  scrollLeft() {
    if (this.scrollContainer && this.scrollContainer.nativeElement) {
      const container = this.scrollContainer.nativeElement;
      container.scrollLeft -= 200; // Desplazamiento suave hacia la izquierda
    }
  }

  // Otros métodos según necesidad
}
