import { Component, OnInit } from '@angular/core';
import { ExchangeServiceService } from '../../services/exchange-service.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './transfer-details.component.html',
  styleUrl: './transfer-details.component.css'
})
export class TransferDetailsComponent implements OnInit {
  detailsForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private exchangeService: ExchangeServiceService,
  ) {
    this.detailsForm = this.fb.group({
      accountName: ['Nduka Kene', Validators.required],
      phoneNumber: ['713210124', [Validators.required, Validators.pattern('^[0-9]{9}$')]]
    });
  }
  
  ngOnInit(): void {
    this.exchangeService.updateStep(2);
    
    const data = this.exchangeService.getCurrentData();
    if (data.accountName) {
      this.detailsForm.patchValue({
        accountName: data.accountName,
        phoneNumber: data.phoneNumber
      });
    }
  }
  
  nextStep(): void {
    if (this.detailsForm.valid) {
      this.exchangeService.updateExchangeData({
        accountName: this.detailsForm.value.accountName,
        phoneNumber: this.detailsForm.value.phoneNumber,
        countryCode: '+254'
      });
      
      this.exchangeService.nextStep();
    }
  }
  
  goBack(): void {
    this.exchangeService.prevStep();
  }
}
