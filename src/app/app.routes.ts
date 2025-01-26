import { Routes } from '@angular/router';
import { QuranComponent } from './pages/quran/quran.component';
import { AzkarComponent } from './pages/azkar/azkar.component';
import { AdieComponent } from './pages/adie/adie.component';

export const routes: Routes = [
  { path: '', component: QuranComponent },
  { path: 'quran', component: QuranComponent }, 
  { path: 'azkar', component: AzkarComponent },
  { path: 'duas', component: AdieComponent }
];
