import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import FILE from "./salaires.json";

@Component({
  selector: "app-salaire",
  templateUrl: "./salaire.component.html",
  styleUrls: ["./salaire.component.css"]
})
export class SalaireComponent implements OnInit {
  checkoutForm;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      salaire: ""
    });
  }

  ngOnInit() {}

  onSubmit(data) {
    console.warn("Data submit", data);
  }
}
