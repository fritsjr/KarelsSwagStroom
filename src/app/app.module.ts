import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {InfoPage} from "./Info/info.component";
import {DashboardPage} from "./Dashboard/dashboard.component"
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {LineChartDemoComponent} from "./linechartexample/linechartexample.component";

import 'hammerjs';
import {LineChart24hComponent} from "./linechartexample/linechart24h.component";
import {LineChart1mntComponent} from "./linechartexample/linechart1mnt.component";
import {LineChart1wkComponent} from "./linechartexample/linechart1wk.component";
import {LineChartcostComponent} from "./linechartexample/linechartcost.component";
import {CostsPage} from "./costs/costs.component";
import {BarChartComponent} from "./barchartexample/barchart.component";
import {LineChartCost24hComponent} from "./linechartexample/linechartcost24h.component";
import {LineChartCost1mntComponent} from "./linechartexample/linechartcost1mnt.component";
import {BarChartCostComponent} from "./barchartexample/barchartcost.component";


@NgModule({
  declarations: [
    AppComponent,
    InfoPage,
    DashboardPage,
    LineChartDemoComponent,
    LineChart24hComponent,
    LineChart1mntComponent,
    LineChart1wkComponent,
    LineChartcostComponent,
    CostsPage,
    BarChartComponent,
    LineChartCost24hComponent,
    LineChartCost1mntComponent,
    BarChartCostComponent
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

