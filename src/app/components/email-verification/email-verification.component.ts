import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { ExchangeServiceService } from '../../services/exchange-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css'
})
export class EmailVerificationComponent {
  emailForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private exchangeService: ExchangeServiceService,
  ) {
    this.emailForm = this.fb.group({
      email: ['dominic@honeycoin.app', [Validators.required, Validators.email]]
    });
  }
  
  ngOnInit(): void {
    this.exchangeService.updateStep(3);
    
    const data = this.exchangeService.getCurrentData();
    if (data.email) {
      this.emailForm.patchValue({
        email: data.email
      });
    }
  }
  
  nextStep(): void {
    if (this.emailForm.valid) {
      this.exchangeService.updateExchangeData({
        email: this.emailForm.value.email
      })
    }
    this.exchangeService.nextStep();
  }
  
  goBack(): void {
    this.exchangeService.prevStep();
  }
}
