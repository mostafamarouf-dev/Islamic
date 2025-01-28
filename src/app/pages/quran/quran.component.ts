import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import here



@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.css',
})


export class QuranComponent implements OnInit {
  surahs: any[] = []; // Store the data here

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.alquran.cloud/v1/surah') // API URL
      .subscribe((response: any) => {
        this.surahs = response.data; // Get the "data" part from the response
        console.log(this.surahs); // Check the data in the console
      });
  }

}

