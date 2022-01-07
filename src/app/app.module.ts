import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { PixiImageParticleComponent } from "./pixi.component";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PixiImageParticleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
