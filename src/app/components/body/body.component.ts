import { Component } from '@angular/core';
import { StoriesComponent } from '../stories/stories.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-body',
  imports: [StoriesComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
