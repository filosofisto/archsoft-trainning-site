import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramaComponent } from './programa/programa.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { HomeComponent } from './home/home.component';
import { AulasComponent } from './aulas/aulas.component';
import { ListasComponent } from './listas/listas.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    ProgramaComponent,
    HighlightCardComponent,
    HomeComponent,
    AulasComponent,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
