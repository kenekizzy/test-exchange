import { Component, OnInit } from '@angular/core';
import { ExchangeServiceService } from '../../services/exchange-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit {
  currentStep = 1;
  steps = [1, 2, 3, 4, 5, 6];
  
  constructor(private exchangeService: ExchangeServiceService) {}
  
  ngOnInit(): void {
    this.exchangeService.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }
}
