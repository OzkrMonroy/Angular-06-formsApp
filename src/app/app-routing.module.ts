import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import(/*webpackChunkName: "Template"*/'./template/template.module').then(m => m.TemplateModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import(/*webpackChunkName: "Reactive"*/'./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren: () => import(/*webpackChunkName: "Auth" */'./auth/auth.module').then(m => m.AuthModule)
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
