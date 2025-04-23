import { Component } from '@angular/core';
import { ExchangeServiceService } from '../../services/exchange-service.service';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {

  transactionDetails = {
    send: 1000.00,
    fee: 5.00,
    receive: 128152.26,
    estimatedArrival: '1 min'
  };

  constructor(private exchangeService: ExchangeServiceService) {}
  
  goBack() {
    this.exchangeService.prevStep();
  }
  
  proceedToPayment() {
    this.exchangeService.nextStep();
  }

}
