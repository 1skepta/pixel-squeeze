import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { Router } from '@angular/router';
import { StoriesComponent } from '../stories/stories.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-body',
  imports: [StoriesComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init();
  }

  sendEmail(email: string): void {
    window.location.href = `mailto:${email}`;
  }

  goToUpload() {
    this.router.navigate(['/upload']);
  }
}
