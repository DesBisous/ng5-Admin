import {
  AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import { AdDirective } from '../../../directive/ad.directive';
import { AdInterface } from '../../../interface/ad-interface';
import { zoom } from '../../../animate/animate';
import { AdService } from '../../../service/ad.service';
import { AdItem } from '../../../extend/ad-item';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.less'],
  animations: [zoom]
})
export class DynamicComponent implements OnInit, AfterViewInit, OnDestroy {
  ads: AdItem[];
  currentAddIndex: number;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private adService: AdService, private cdr: ChangeDetectorRef) {
    this.currentAddIndex = -1;
  }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    this.cdr.detach(); // 停止检测,脱离变化检测树
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdInterface>componentRef.instance).data = adItem.data;
    setTimeout(() => this.cdr.reattach()); // 待组件动态加载完之后重新 attach,加入变化检测树
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 5000);
  }
}
