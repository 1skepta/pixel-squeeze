import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { UploadComponent } from './components/upload/upload.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'upload', component: UploadComponent },
];
