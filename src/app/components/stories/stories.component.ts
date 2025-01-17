import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent {
  stories = [
    {
      imgSrc: 'https://picsum.photos/seed/1/200',
      testimonial:
        'Awesome developers, Very responsive, PixelSqueeze has the best developer experience of all image compressors I have ever used. Their support is reliable. Always listening to their community and fixing bugs.',
      name: 'John Doe',
      occupation: 'Software Developer',
    },
    {
      imgSrc: 'https://picsum.photos/seed/2/200',
      testimonial:
        'PixelSqueeze is a game changer! The compression quality is unmatched, and it saves us so much time.',
      name: 'Jane Smith',
      occupation: 'UI/UX Designer',
    },
    {
      imgSrc: 'https://picsum.photos/seed/3/200',
      testimonial:
        'Great tool! Our team relies on PixelSqueeze for fast and high-quality image compression. It’s an essential part of our workflow.',
      name: 'Alice Johnson',
      occupation: 'Photographer',
    },
    {
      imgSrc: 'https://picsum.photos/seed/4/200',
      testimonial:
        'I love how easy it is to use PixelSqueeze. The interface is intuitive, and the results are fantastic.',
      name: 'Michael Brown',
      occupation: 'Digital Marketer',
    },
    {
      imgSrc: 'https://picsum.photos/seed/5/200',
      testimonial:
        'PixelSqueeze has saved us a lot of time and storage space. The quality of compressed images is excellent!',
      name: 'Sarah Williams',
      occupation: 'Content Creator',
    },
  ];

  currentIndex = 0;

  showPrevious() {
    this.currentIndex =
      (this.currentIndex - 1 + this.stories.length) % this.stories.length;
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.stories.length;
  }
}
