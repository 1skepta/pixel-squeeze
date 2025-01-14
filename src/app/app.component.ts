import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CommonModule],
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
}
