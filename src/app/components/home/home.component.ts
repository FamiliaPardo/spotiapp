import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // paises: any = [];

  // constructor(private http: HttpClient) {

    constructor() {

    // console.log("Constrctor de Home");
    
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((respPaises: any) => {
    //   console.log(respPaises);
    //   this.paises = respPaises;
      
    // });

  }

  ngOnInit() {
  }

}
