import { Component, OnInit } from '@angular/core';
import { ExchangeServiceService } from '../../services/exchange-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exchange-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exchange-form.component.html',
  styleUrl: './exchange-form.component.css'
})
export class ExchangeFormComponent implements OnInit {
  inputAmount: number = 1000;
  outputAmount: number = 128152.26;
  exchangeRate: number = 128.152;
  fee: number = 5.00;
  estimatedTime: number = 1;
  
  inputCurrency: string = 'USDT';
  outputCurrency: string = 'KES';
  
  constructor(
    private exchangeService: ExchangeServiceService,
  ) {}
  
  ngOnInit(): void {
    this.exchangeService.updateStep(1);
    this.exchangeService.exchangeData$.subscribe(data => {
      this.inputAmount = data.inputAmount;
      this.outputAmount = data.outputAmount;
      this.fee = data.fee;
      this.inputCurrency = data.inputCurrency;
      this.outputCurrency = data.outputCurrency;
    });
  }
  
  updateOutputAmount(): void {
    this.outputAmount = this.inputAmount * this.exchangeRate;
    this.exchangeService.updateExchangeData({
      inputAmount: this.inputAmount,
      outputAmount: this.outputAmount
    });
  }
  
  nextStep(): void {
    this.exchangeService.nextStep();
  }
}
