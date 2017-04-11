import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {DogCard} from "./cardtest/dogcard.component";
import {InfoPage} from "./Info/info.component";
import {DashboardPage} from "./Dashboard/dashboard.component"
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {LineChartDemoComponent} from "./linechartexample/linechartexample.component";

import 'hammerjs';
import {LineChart24hComponent} from "./linechartexample/linechart24h.component";


@NgModule({
  declarations: [
    AppComponent,
    DogCard,
    InfoPage,
    DashboardPage,
    LineChartDemoComponent,
    LineChart24hComponent
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
export class AppModule {}

