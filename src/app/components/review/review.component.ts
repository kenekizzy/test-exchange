import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  remainingTime: string = '29:43';
  walletAddress: string = '0x30f6094d73f2beb45df1dfb1454...';
  network: string = 'ETH';

  constructor() {}
  
  ngOnInit() {
    this.startTimer();
  }

  startTimer() {

  }
  
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
  
  cancelPayment() {

  }

}
