import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCreditoComponent } from './pop-up-credito.component';

describe('PopUpCreditoComponent', () => {
  let component: PopUpCreditoComponent;
  let fixture: ComponentFixture<PopUpCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
