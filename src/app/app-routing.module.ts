import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Error404Component } from './component/error404/error404.component';
import { ButtonComponent } from './component/general/button/button.component';
import { IconComponent } from './component/general/icon/icon.component';
import {GridComponent} from './component/layout/grid/grid.component';
import {LayoutComponent} from './component/layout/layout/layout.component';
import {AffixComponent} from './component/navigation/affix/affix.component';
import {LifecycleComponent} from './component/angular/lifecycle/lifecycle.component';
import {RouteComponent} from './component/angular/route/route.component';
import {Routechild1Component} from './component/angular/route/routechild-1/routechild-1.component';
import {Routechild2Component} from './component/angular/route/routechild-2/routechild-2.component';
import {DynamicComponent} from './component/angular/dynamic/dynamic.component';
import {DirectiveComponent} from './component/angular/directive/directive.component';
import {BreadcrumbComponent} from './component/navigation/breadcrumb/breadcrumb.component';
import {PipeComponent} from './component/angular/pipe/pipe.component';
import {AnimateComponent} from './component/angular/animate/animate.component';
import {BasicFormComponent} from './component/angular/basic-form/basic-form.component';
import {RichFormComponent} from './component/angular/rich-form/rich-form.component';
import {EchartsComponent} from './component/angular/echarts/echarts.component';

/**
 * pathMatch用来规定重定向的时候，path匹配规则
 * pathMatch的值有两个分别为full、prefix
 * full表示path匹配的时候  URL中剩下的、未匹配的部分必须等于''
 * prefix表示path匹配的时候 URL中剩下的、未匹配的部分开头部分能够匹配上就可以
 */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: ButtonComponent },
    { path: 'lifecycle', component: LifecycleComponent },
    { path: 'route', component: RouteComponent, children: [
      { path: '', component: Routechild1Component },
      { path: 'routeChild2/:name', component: Routechild2Component, data: [{desc: '我是猪!'}] },
      { path: '**', component: Routechild1Component }
    ] },
    { path: 'dynamic', component: DynamicComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'pipe', component: PipeComponent },
    { path: 'animate', component: AnimateComponent },
    { path: 'basicForm', component: BasicFormComponent },
    { path: 'richForm', component: RichFormComponent },
    { path: 'echarts', component: EchartsComponent },
    { path: 'breadcrumb', component: BreadcrumbComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'icon', component: IconComponent },
    { path: 'grid', component: GridComponent },
    { path: 'layout', component: LayoutComponent },
    { path: 'affix', component: AffixComponent }
  ] },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
