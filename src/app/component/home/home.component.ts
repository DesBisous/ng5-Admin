import { Component, OnInit } from '@angular/core';
import { searchAnimate } from '../../animate/animate';
import { NzNotificationService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [searchAnimate]
})
export class HomeComponent implements OnInit {
  isCollapsed: boolean;
  count: number;
  popVisible: boolean;
  tabs: any;
  tabBodyloading: boolean;
  searchView: boolean;
  navLeftDatas: Array<Object>;
  mainHeader: any;


  constructor(private _notification: NzNotificationService, private http: HttpClient) {
    this.isCollapsed = false;
    this.count = 10;
    this.tabs = [
      {
        active: true,
        name  : '通知',
        icon  : 'anticon anticon-notification',
        data  : [
          {
            img: './assets/images/金所炫3.jpg',
            context: '金所炫戳了一下你...',
            desc: '好腻害的样子哦',
            date: '2018-02-01'
          },
          {
            img: './assets/images/朴宝英1.jpg',
            context: '朴宝英戳了一下你...',
            desc: '好神奇的样子哦',
            date: '2018-02-02'
          },
          {
            img: './assets/images/刘在石1.jpg',
            context: '刘在石戳了一下你...',
            desc: '不知道为什么戳一下你',
            date: '2018-02-03'
          },
          {
            img: './assets/images/李光洙1.jpg',
            context: '李光洙戳了一下你...',
            desc: '哈哈...哈哈...傻瓜',
            date: '2018-02-03'
          }
        ]
      },
      {
        active: false,
        name  : '消息',
        icon  : 'anticon anticon-mail',
        data  : [
          {
            img: './assets/images/金所炫4.jpg',
            context: '金所炫邮件了你...',
            desc: '好腻害的样子哦',
            date: '2018-02-01'
          },
          {
            img: './assets/images/朴宝英2.jpg',
            context: '朴宝英邮件了你...',
            desc: '好神奇的样子哦',
            date: '2018-02-02'
          },
          {
            img: './assets/images/孔刘1.jpg',
            context: '孔刘邮件了你...',
            desc: '鬼怪来了！',
            date: '2018-02-03'
          },
          {
            img: './assets/images/李光洙1.jpg',
            context: '李光洙邮件了你...',
            desc: '哈哈...哈哈...傻瓜',
            date: '2018-02-03'
          }
        ]
      },
      {
        active: false,
        name  : '待办',
        icon  : 'anticon anticon-paper-clip',
        data  : [
          {
            img: './assets/images/金所炫1.jpg',
            context: '金所炫通知了你...',
            desc: '好腻害的样子哦',
            date: '2018-02-01'
          },
          {
            img: './assets/images/宋智孝1.jpg',
            context: '宋智孝通知了你...',
            desc: '给我好好干，听到没有!',
            date: '2018-02-02'
          },
          {
            img: './assets/images/孔刘1.jpg',
            context: '孔刘通知了你...',
            desc: '鬼怪来了！',
            date: '2018-02-03'
          },
          {
            img: './assets/images/李光洙1.jpg',
            context: '李光洙通知了你...',
            desc: '哈哈...哈哈...傻瓜',
            date: '2018-02-03'
          }
        ]
      }
    ];
    this.tabBodyloading = true;
    this.searchView = true;
    this.mainHeader = {list: [], desx: ''};
  }

  ngOnInit() {
    this.getNavLeft();
  }

  /**
   * 顶部导航消息弹出框状态改变
   */
  popVisibleChange() {
    if ( !this.popVisible ) {
      this.tabBodyloading = true;
    }
    console.log(this.popVisible);
  }
  /**
   * 顶部导航消息弹出框状态设置
   */
  setPopVisible(event: Event) {
    if ( event.target['className'] === 'message' ) {
      this.popVisible = !this.popVisible;
    }
    setTimeout( () => {
      this.tabBodyloading = false;
    }, 2000 );
  }
  /**
   * 顶部导航消息弹出框加载中状态刷新
   */
  refreshMessage(index) {
    this.tabBodyloading = true;
    setTimeout( () => {
      this.tabBodyloading = false;
    }, 2000 );
  }
  /**
   * 顶部导航搜索框状态变化
   */
  setSearchView(value) {
    this.searchView = value;
    console.log(this.searchView);
  }
  /**
   * 顶部导航搜索事件
   */
  onSearch(event) {
    this.searchView = false;
    setTimeout(() => {
      this._notification.create('success', '搜索', `搜索关键词：${event ? event : ''}`);
    }, 500);
  }
  /**
   * 获取左侧导航数据
   */
  getNavLeft() {
    this.http.get('./assets/json/Navigation.json', {observe: 'response'})
      .subscribe((resp) => {
        this.navLeftDatas = <Array<Object>>resp.body;
        this.navEvent(this.navLeftDatas[0], 0); // 初始化
    });
  }
  /**
   * 递归nav数据
   * @param nav 递归数组
   * @param {Array} list 存放数据数组，默认 []
   * @param indexs  接收剩余参数，递归数组的元素索引
   * @returns {list:Array, desc: string}
   */
  navRecursion(nav, list = [], ...indexs) {
    list = [...list, nav.name];
    if ( nav.sub && nav.sub instanceof Array ) {
      return this.navRecursion(nav.sub[indexs[0]], list, indexs.splice(0, 1));
    } else {
      return {list, desc: nav.desc};
    }
  }
  /**
   * 获取nav数据
   * @param nav
   * @param index
   */
  navEvent(nav, ...index) {
    this.mainHeader = this.navRecursion(nav, [], index);
  }

  /**
   * 更新Content主页导航信息
   * @param index
   */
  setContentNav(...index) {
    let i = index[0];
    index.splice(0, 1);
    this.navEvent(this.navLeftDatas[i], ...index);
  }
}
