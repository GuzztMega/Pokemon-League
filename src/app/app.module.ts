import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { TreinadorService as TreinadorService } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador.service';
import { AppComponent } from './app.component';
import { TreinadoresComponent } from '@angular/cli/bin/angular-pokemon-league/src/app/treinadores/treinadores.component';
import { TreinadorDetailComponent } from '@angular/cli/bin/angular-pokemon-league/src/app/treinadores-detail/treinadores-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TreinadoresComponent,
    TreinadorDetailComponent,
    MessagesComponent,
    DashboardComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    HttpModule
  ],
  providers: [TreinadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
