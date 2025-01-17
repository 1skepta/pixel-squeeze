import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  sendEmail(email: string): void {
    window.location.href = `mailto:${email}`;
  }

  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
