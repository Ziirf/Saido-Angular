import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatternsComponent } from './patterns/patterns.component';
import { SettingsComponent } from './settings/settings.component';
import { RebootComponent } from './settings/reboot/reboot.component';
import { WifiComponent } from './settings/wifi/wifi.component';
import { LedCountComponent } from './settings/led-count/led-count.component';
import { ApperanceComponent } from './settings/apperance/apperance.component';
import { EditPaletteComponent } from './settings/edit-palette/edit-palette.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatternsComponent,
    SettingsComponent,
    RebootComponent,
    WifiComponent,
    LedCountComponent,
    ApperanceComponent,
    EditPaletteComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
