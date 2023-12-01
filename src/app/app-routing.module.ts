// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'tugas',
//     pathMatch: 'full'
//   },
//   {
//     path: 'folder/:id',
//     loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'dashboard',
//     loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
//   },
//   {
//     path: 'tugas',
//     loadChildren: () => import('./tugas/tugas.module').then( m => m.TugasPageModule)
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {
    path: 'tugas',
    loadChildren: () => import('./tugas/tugas.module').then( m => m.TugasPageModule),
    canLoad: [AuthGuard] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}