import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

declare var bootstrap: any; // Para utilizar la API de Bootstrap

@Component({
  selector: 'app-pop-up-credito',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pop-up-credito.component.html',
  styleUrl: './pop-up-credito.component.css'
})
export class PopUpCreditoComponent implements OnInit {
  creditoForm!: FormGroup;
  formSubmitted = false;

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
    // Configuración del formulario con validaciones mejoradas:
    this.creditoForm = this.fb.group({
      financiamiento: ['', Validators.required],
      interes: [null, [Validators.required, Validators.min(0)]],
      ea: [false],
      na: [false],
      plazo: [null, Validators.required]
    });
  }

  // Validar que al menos una opción de tipo de interés está seleccionada
  isValidInteresType(): boolean {
    const eaValue = this.creditoForm.get('ea')?.value;
    const naValue = this.creditoForm.get('na')?.value;
    return eaValue || naValue;
  }

  onSubmit(): void {
    this.formSubmitted = true;

    // Verificar todos los campos, incluida la validación personalizada para checkboxes
    if (this.creditoForm.valid && this.isValidInteresType()) {
      console.log('Búsqueda disparada con los parámetros:', this.creditoForm.value);
      // Aquí se integra la lógica para realizar la búsqueda según los parámetros.
      this.closeModal();
      // Reiniciar la flag de formulario enviado
      this.formSubmitted = false;
    } else {
      console.log('El formulario contiene errores.');

      // Marcar todos los campos como tocados para mostrar todos los errores
      Object.keys(this.creditoForm.controls).forEach(field => {
        const control = this.creditoForm.get(field);
        control?.markAsTouched();
      });
    }
  }

  // Método para abrir el modal (usando la API de Bootstrap 5)
  openModal(): void {
    // Reiniciar la flag de formulario enviado cuando se abre el modal
    this.formSubmitted = false;

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
