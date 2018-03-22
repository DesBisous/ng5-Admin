import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';
import {zoom} from '../../../animate/animate';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less'],
  animations: [zoom]
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  title: string;
  html:  SafeHtml;

  constructor(private sanitizer: DomSanitizer ) {
    this.title = '使用ng-content';
    // 这里的脚本内容等不安全的内容，不会被Angular执行，
    // 如果要告诉Angular这些需要执行，并且是安全的需要使用DomSanitizer，ng1中的 $sce.trustAsHtml()功能类似
    this.html = this.sanitizer.bypassSecurityTrustHtml('<h2>这是使用[innerHTML]进行插值的</h2><script></script><style></style>');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

}
