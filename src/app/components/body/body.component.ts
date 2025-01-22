import { Component, EventEmitter, Output } from '@angular/core';
import { StoriesComponent } from '../stories/stories.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [StoriesComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  sendEmail(email: string): void {
    window.location.href = `mailto:${email}`;
  }

  constructor(private router: Router) {}

  goToUpload() {
    this.router.navigate(['/upload']);
  }
}
