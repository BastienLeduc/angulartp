import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { YtService } from "../yt.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private ytService: YtService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      followers: "",
      description: ""
    });
  }

  onSubmit(data) {
    console.warn("Data submit", data);
    this.ytService.addYt(data);
    this.checkoutForm.reset();
    this.router.navigate(['/youtubers']);
  }

  ngOnInit() {}
}
