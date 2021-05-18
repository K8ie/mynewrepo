import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { KundenPortalComponent } from './kunden-portal/kunden-portal.component';
import { BeraterPortalComponent } from './berater-portal/berater-portal.component';

import { LineChartComponent } from './line-chart/line-chart.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChatBotPopUpComponent } from './chat-bot-pop-up/chat-bot-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    KundenPortalComponent,
    BeraterPortalComponent,
    LineChartComponent,
    MessageViewComponent,
    PieChartComponent,
    ChatBotPopUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
