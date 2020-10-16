import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatternsComponent } from './patterns/patterns.component';
import { SettingsComponent } from './settings/settings.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorPaletteDirective } from './color-palette.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatternsComponent,
    SettingsComponent,
    ColorPaletteComponent,
    ColorPaletteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
