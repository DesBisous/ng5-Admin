import { Component, OnInit } from '@angular/core';
import { zoom } from '../../../animate/animate';
import { Hero, User } from '../../../extend/from';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../service/user.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-rich-form',
  templateUrl: './rich-form.component.html',
  styleUrls: ['./rich-form.component.less'],
  animations: [ zoom ]
})
export class RichFormComponent implements OnInit {

  // 模板驱动表单
  powers: Array<string>;
  model: Hero;
  submitted: boolean;

  // 响应式表单
  users: Observable<User[]>;
  isLoading: boolean;
  selectedUser: User;

  constructor(private userService: UserService) {
    // 模板驱动表单
    this.powers = ['Really Smart', 'Super Flexible',
      'Super Hot', 'Weather Changer'];
    this.model = new Hero(0, 'Dr IQ', this.powers[0], '');
    this.submitted = false;

    // 响应式表单
    this.isLoading = false;
  }

  ngOnInit() {
    this.getUsers();
  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  getUsers() {
    this.isLoading = true;
    /**
     * 注意：
     *  finally的解析：需要对可观察对象进行订阅 subscribe 或者使用 async 处理走完后，才会执行finally这个方法。
     */
    this.users = this.userService.getUsers()
      .finally(() => { console.log(this.users); console.log(this.isLoading); this.isLoading = false; });
    this.selectedUser = undefined;
  }

  select(user: User) { this.selectedUser = user; }











}
