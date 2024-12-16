import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any;
  constructor(private apiService: ApiService) { }

  makeApiCall() {
    this.apiService.makeApiCall().subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }

}