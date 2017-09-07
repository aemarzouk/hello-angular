import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JumbtronComponent } from './components/jumbtron/jumbtron.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GithubViewerComponent } from "./components/github-viewer/github-viewer.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch:'full'
    },
    {
      path: 'github',
      component: GithubViewerComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
