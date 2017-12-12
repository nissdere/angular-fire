import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NewsComponent } from './news.component';
import { NewsadminComponent } from './newsadmin.component';
import { NewsService } from './news.service';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsadminComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
