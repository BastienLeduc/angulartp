import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NewComponent } from "./new/new.component";
import { YtService } from "./yt.service";
import { AddComponent } from './add/add.component';
import { SalaireComponent } from './salaire/salaire.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "youtubers", component: NewComponent },
      { path: "add", component: AddComponent },
      { path: "salaires", component: SalaireComponent },
      { path: "**", redirectTo: "", pathMatch: "full" }
    ]),
    ReactiveFormsModule
  ],
  declarations: [AppComponent, HelloComponent, NewComponent, AddComponent, SalaireComponent],
  bootstrap: [AppComponent],
  providers: [YtService]
})
export class AppModule {}
