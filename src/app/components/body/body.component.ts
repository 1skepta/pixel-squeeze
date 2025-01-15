import { Component } from '@angular/core';
import { StoriesComponent } from '../stories/stories.component';

@Component({
  selector: 'app-body',
  imports: [StoriesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
