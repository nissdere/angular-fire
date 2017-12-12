import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsadminComponent } from './newsadmin.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  {path: 'news', component: NewsComponent},
  {path: 'newsadmin', component: NewsadminComponent},
  {path: 'demo', component: DemoComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
