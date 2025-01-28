import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-azkar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './azkar.component.html',
  styleUrl: './azkar.component.css'
})
export class AzkarComponent {
  
  list = [
    { text: 'سبحان الله', counter: 0 },
    { text: 'الحمد لله', counter: 0 },
    { text: 'الله أكبر', counter: 0 },
    { text: 'لا إله إلا الله', counter: 0 },
    { text: 'استغفر الله', counter: 0 },
    { text: 'اللهم صلي علي سيدنا محمد', counter: 0 },
    { text: 'سبحان الله وبحمده', counter: 0 },
    { text: 'سبحان الله العظيم', counter: 0 },
    { text: 'لا حول ولا قوه الا بالله', counter: 0 },
    { text: 'أشْهَدُ أنَّ لا إلَهَ إلاَّ اللهُ', counter: 0 },
    { text: 'أشْهَدُ أنَّ مُحَمَّداً رَسُولُ اللهِ', counter: 0 },
    { text: 'تبارك الله', counter: 0 },
  ];
  
  counter(index : number){
    this.list[index].counter++;
  }
}
