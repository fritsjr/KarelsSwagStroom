import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {DogCard} from "./cardtest/dogcard.component";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {LineChartDemoComponent} from "./linechartexample/linechartexample.component";

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    DogCard,
    LineChartDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
