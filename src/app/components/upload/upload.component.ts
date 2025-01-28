import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { TinyPngService } from '../../tiny-png.service';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  compressedImageUrl: string | null = null;
  uploadedFileName: string | null = null;
  uploadedFile: File | null = null;
  readyToCompress = false;
  isCompressing = false;

  constructor(private tinyPngService: TinyPngService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type.startsWith('image/')) {
        this.uploadedFileName = file.name;
        this.uploadedFile = file;
        this.readyToCompress = true;
      } else {
        alert('Please select a valid image file.');
      }
    }
  }

  compressImage(): void {
    if (this.uploadedFile) {
      this.isCompressing = true;
      this.tinyPngService.compressImage(this.uploadedFile).subscribe({
        next: (response) => {
          this.compressedImageUrl = response.output.url;
          this.isCompressing = false;
        },
        error: (err) => {
          console.error('Failed to compress image:', err);
          this.isCompressing = false;
          alert(
            'An error occurred while compressing the image. Please try again.'
          );
        },
      });
    }
  }
}
