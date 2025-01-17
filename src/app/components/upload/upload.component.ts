import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TinyPngService } from '../../tiny-png.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  compressedImageUrl: string | null = null;
  uploadedFileName: string | null = null;
  constructor(
    private tinyPngService: TinyPngService,
    private httpClient: HttpClient
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type.startsWith('image/')) {
        this.uploadedFileName = file.name;
        console.log('Selected file: ', file.name);

        this.tinyPngService.compressImage(file).subscribe({
          next: (response) => {
            this.compressedImageUrl = response.output.url;
            console.log('Compressed image URL:', this.compressedImageUrl);
          },
          error: (err) => {
            console.error('Failed to compress image:', err);
          },
        });
      } else {
        console.error('Selected file is not an image.');
      }
    }
  }
}
