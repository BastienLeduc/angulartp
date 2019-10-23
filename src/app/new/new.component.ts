import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { YtService } from "../yt.service";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  @Output() notify = new EventEmitter();
  youtubers = [];

  constructor(private ytService: YtService) {
    this.youtubers = this.ytService.getYt();
  }

  ngOnInit() {}
}
