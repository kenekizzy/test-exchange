import { Component } from '@angular/core';
import { ExchangeServiceService } from '../../services/exchange-service.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  exchangeType: 'buy' | 'sell' = 'buy';
  
  constructor(private exchangeService: ExchangeServiceService) {
    this.exchangeService.exchangeData$.subscribe(data => {
      this.exchangeType = data.exchangeType;
    });
  }
  
  toggleExchangeType(type: 'buy' | 'sell'): void {
    if (this.exchangeType !== type) {
      this.exchangeService.updateExchangeData({ exchangeType: type });
      
      // Reset to first step when switching modes
      this.exchangeService.updateStep(1);
    }
  }
}
