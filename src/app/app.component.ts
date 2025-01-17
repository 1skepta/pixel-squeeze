import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { UploadComponent } from './components/upload/upload.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BodyComponent, UploadComponent],
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
