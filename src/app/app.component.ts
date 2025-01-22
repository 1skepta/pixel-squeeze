import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pixel-squeeze';

  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle(
      'Pixel Squeeze - Your First Stop For Image Compression'
    );
  }

  showBody = true;

  toggleComponent() {
    this.showBody = !this.showBody;
  }
}
