import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { Error404Component } from './component/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './component/general/button/button.component';
import { IconComponent } from './component/general/icon/icon.component';
import { GridComponent } from './component/layout/grid/grid.component';
import { LayoutComponent } from './component/layout/layout/layout.component';
import { AffixComponent } from './component/navigation/affix/affix.component';
import { LifecycleComponent } from './component/angular/lifecycle/lifecycle.component';
import { LifecyclechildComponent } from './component/angular/lifecycle/lifecyclechild/lifecyclechild.component';
import { RouteComponent } from './component/angular/route/route.component';
import { Routechild1Component } from './component/angular/route/routechild-1/routechild-1.component';
import { Routechild2Component } from './component/angular/route/routechild-2/routechild-2.component';
import { DynamicComponent } from './component/angular/dynamic/dynamic.component';
import { AdDirective } from './directive/ad.directive';
import { Ad1Component } from './component/angular/dynamic/dynamic-child/ad-1/ad-1.component';
import { Ad2Component } from './component/angular/dynamic/dynamic-child/ad-2/ad-2.component';
import { AdService } from './service/ad.service';
import { DirectiveComponent } from './component/angular/directive/directive.component';
import { AttrDirective } from './directive/attr.directive';
import { BreadcrumbComponent } from './component/navigation/breadcrumb/breadcrumb.component';
import { UnlessDirective } from './directive/unless.directive';
import { PipeComponent } from './component/angular/pipe/pipe.component';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipe/flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './pipe/flying-heroes-impure.pipe';
import { AnimateComponent } from './component/angular/animate/animate.component';
import { BasicFormComponent } from './component/angular/basic-form/basic-form.component';
import { RichFormComponent } from './component/angular/rich-form/rich-form.component';
import { UserService } from './service/user.service';
import { UserDetailFormComponent } from './component/angular/rich-form/user-detail-form/user-detail-form.component';
import { FormValidatorsService } from './service/form-validators.service';
import { FormValidatorsDirective } from './directive/form-validators.directive';
import { EchartsComponent } from './component/angular/echarts/echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ButtonComponent,
    IconComponent,
    GridComponent,
    LayoutComponent,
    AffixComponent,
    LifecycleComponent,
    LifecyclechildComponent,
    RouteComponent,
    Routechild1Component,
    Routechild2Component,
    DynamicComponent,
    AdDirective,
    Ad1Component,
    Ad2Component,
    DirectiveComponent,
    AttrDirective,
    BreadcrumbComponent,
    UnlessDirective,
    PipeComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    AnimateComponent,
    BasicFormComponent,
    RichFormComponent,
    UserDetailFormComponent,
    FormValidatorsDirective,
    EchartsComponent
  ],
  entryComponents: [
    Ad1Component,
    Ad2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgxEchartsModule
  ],
  providers: [ AdService, UserService, FormValidatorsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
