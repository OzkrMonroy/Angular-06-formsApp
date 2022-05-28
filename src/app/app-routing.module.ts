import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import(/*webpackChunkName: "Template"*/'./template/template-routing.module').then(m => m.TemplateRoutingModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import(/*webpackChunkName: "Reactive"*/'./reactive/reactive-routing.module').then(m => m.ReactiveRoutingModule)
  },
  {
    path: '**', redirectTo: 'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
