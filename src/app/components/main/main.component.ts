import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  city: string = "Toronto";
  country: string = "CA";
  key: string = "371d4e84f04f4e6eafe38174f3de11e5";

  readonly ROOT_URL = "http://api.weatherbit.io/v2.0/forecast/daily?city=";

  constructor(private http: HttpClient) {}
  weather: string[];
  information: string[];

  getPosts() {
    this.http
      .get(
        this.ROOT_URL +
          this.city +
          "&country=" +
          this.country +
          "&key=" +
          this.key
      )
      .subscribe(
        data => {
          this.weather = data as any[];
          this.information = this.weather.data as string[];
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
  }

  ngOnInit() {
    this.getPosts();
  }
}
