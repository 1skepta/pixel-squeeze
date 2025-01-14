import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
