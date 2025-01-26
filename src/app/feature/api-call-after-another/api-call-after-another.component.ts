import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-api-call-after-another',
  templateUrl: './api-call-after-another.component.html',
  styleUrl: './api-call-after-another.component.css'
})
export class ApiCallAfterAnotherComponent {
  // Sample data to iterate over
  arr = [
    { visitTime: '16:00', reportId: 1 , response: false},
    { visitTime: '15:00', reportId: 2 , response: false},
    { visitTime: '17:00', reportId: 3 , response: false},
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.iterateAndCallApi();
  }

  // Method to iterate and make API calls
  iterateAndCallApi(): void {
    let i = 0;

    const makeRequest = () => {
      if (i < this.arr.length) {
        const data = this.arr[i];

        this.apiService.postTestEndpoint(data).subscribe(
          
          (response) => {
            debugger;
            if (response.response === false) {
              alert(`Check For Next`);
            } else {
              alert(`Show Error for visitTime: ${data.visitTime}, reportId: ${data.reportId}. Continue.`);
              // If response is true, stop the iteration
              return;
            }
            i++;  // Move to the next iteration
            makeRequest();  // Call the next API request
          },
          (error) => {
            console.error('API Error:', error);
            alert('Something went wrong while making API request!');
          }
        );
      } else {
        this.everythingFine();  // All API calls finished
      }
    };

    makeRequest();  // Start the first request
  }

  // Function to be called if all API calls return false
  everythingFine(): void {
    alert('All API calls returned false. Everything is fine.');
  }
}
