import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SpotifyAPIService } from './spotify-api.service'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [SpotifyAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
