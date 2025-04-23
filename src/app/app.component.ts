import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ExchangeFormComponent } from "./components/exchange-form/exchange-form.component";
import { EmailVerificationComponent } from "./components/email-verification/email-verification.component";
import { TransferDetailsComponent } from "./components/transfer-details/transfer-details.component";
import { ExchangeServiceService } from './services/exchange-service.service';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { ReviewComponent } from './components/review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, ExchangeFormComponent, EmailVerificationComponent, TransferDetailsComponent, PaymentDetailsComponent, ReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public exchangeService: ExchangeServiceService) {
  }
}
