import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

declare var bootstrap: any; // Para utilizar la API de Bootstrap

@Component({
  selector: 'app-pop-up-credito',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './pop-up-credito.component.html',
  styleUrl: './pop-up-credito.component.css'
})
export class PopUpCreditoComponent implements OnInit {
  creditoForm!: FormGroup;

  // Opciones de financiamiento actuales en Mercado Libre Colombia
  financiamientoOptions: string[] = [
    'Addi',
    'Davivienda',
    'Bancolombia',
    'Banco de Bogotá',
    'Nequi',
    'Banco Popular'
  ];

  // Opciones de plazos en meses
  plazoOptions: number[] = [2, 3, 6, 12, 18, 24, 36, 48];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Configuración del formulario con validaciones:
    // - 'financiamiento' y 'plazo' son campos obligatorios.
    // - 'interes' debe ser entero y mayor o igual a cero.
    this.creditoForm = this.fb.group({
      financiamiento: ['', Validators.required],
      interes: [0, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]+$")]],
      ea: [false],
      na: [false],
      plazo: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.creditoForm.valid) {
      console.log('Búsqueda disparada con los parámetros:', this.creditoForm.value);
      // Aquí se integra la lógica para realizar la búsqueda según los parámetros.
      this.closeModal();
    } else {
      console.log('El formulario contiene errores.');
    }
  }

  // Método para abrir el modal (usando la API de Bootstrap 5)
  openModal(): void {
    const modalElement = document.getElementById('creditoModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Método para cerrar el modal
  closeModal(): void {
    const modalElement = document.getElementById('creditoModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }
}
