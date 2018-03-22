import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {zoom} from '../../../animate/animate';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.less'],
  animations: [ zoom ]
})
export class RouteComponent implements OnInit {

  desc: any;

  constructor(private sanitizer: DomSanitizer) {
    this.desc = `1、在查询参数中传递数据：/product?id=1&name=2 => ActivatedRoute.queryParams[id]
      <br>2、在路由路径中传递数据：{path: /product/:id} => /product/1 => ActivatedRoute.params[id]
      <br>3、在查询参数中传递数据：{path: /product, component: ProductComponent, data: [{isProd:true}]} => ActivatedRoute.data[0][isProd]`;
    this.desc = this.sanitizer.bypassSecurityTrustHtml(this.desc);
  }

  ngOnInit() {
  }

}
