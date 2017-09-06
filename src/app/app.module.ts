import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbtronComponent } from './components/jumbtron/jumbtron.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    declarations: [
    AppComponent,
    NavbarComponent,
    JumbtronComponent,
    AboutComponent,
    HomeComponent
    ],
    imports: [
    BrowserModule,
    AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
