import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ExchangeData {
  exchangeType: 'buy' | 'sell';
  inputAmount: number;
  outputAmount: number;
  fee: number;
  inputCurrency: string;
  outputCurrency: string;
  accountName?: string;
  phoneNumber?: string;
  countryCode?: string;
  email?: string;
  walletAddress?: string;
  network?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ExchangeServiceService {
  private currentStep = new BehaviorSubject<number>(6);
  private totalSteps = 6;

  private exchangeData: ExchangeData = {
    exchangeType: 'buy',
    inputAmount: 1000,
    outputAmount: 128152.26,
    fee: 5.00,
    inputCurrency: 'USDT',
    outputCurrency: 'KES'
  };

  private exchangeDataSubject = new BehaviorSubject<ExchangeData>(this.exchangeData);
  exchangeData$ = this.exchangeDataSubject.asObservable();

  currentStep$ = this.currentStep.asObservable();

  constructor() {}

  getCurrentStep(): number {
    return this.currentStep.getValue();
  }

  getTotalSteps(): number {
    return this.totalSteps;
  }

  nextStep(): void {
    const current = this.currentStep.getValue();
    if (current < this.totalSteps) {
      this.currentStep.next(current + 1);
    }
  }

  prevStep(): void {
    const current = this.currentStep.getValue();
    if (current > 1) {
      this.currentStep.next(current - 1);
    }
  }

  resetSteps(): void {
    this.currentStep.next(1);
  }

  updateExchangeData(data: Partial<ExchangeData>): void {
    this.exchangeData = { ...this.exchangeData, ...data };
    this.exchangeDataSubject.next(this.exchangeData);
  }

  getCurrentData(): ExchangeData {
    return this.exchangeData;
  }

  updateStep(step: number): void {
    this.currentStep.next(step);
  }

  getExchangeRate(): number {
    return 128.152; 
  }
}
