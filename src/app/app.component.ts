import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {  
  constructor() {}

  getBestYt(param) {
    return param + " est le meilleur youtuber!";
  }

  like() {
    console.log(" Like !");
  }
}
