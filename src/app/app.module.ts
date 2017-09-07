import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbtronComponent } from './components/jumbtron/jumbtron.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule }     from './app-routing.module';
import { GithubViewerComponent } from './components/github-viewer/github-viewer.component'
import { GithubService } from "./services/github/github.service";

@NgModule({
    declarations: [
    AppComponent,
    NavbarComponent,
    JumbtronComponent,
    AboutComponent,
    HomeComponent,
    GithubViewerComponent
    ],
    imports: [
    BrowserModule,
    AppRoutingModule
    ],
    providers: [GithubService],
    bootstrap: [AppComponent]
})
export class AppModule { }
