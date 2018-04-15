import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { User, Users } from '../extend/from';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  delayMs: number;

  constructor() {
    this.delayMs = 500;
  }

  getUsers(): Observable<User[]> {
    return of(Users).delay(this.delayMs);
  }

  updateUser(user: User): Observable<User>  {
    const oldUser = Users.find(u => u.id === user.id);
    /**
     * Object.assign 这个方法会改变目标对象oldUser实例，并且返回改变后的目标对象
     */
    const newUser = Object.assign(oldUser, user); // Demo: 改变缓存的user
    return of(newUser).delay(this.delayMs); // simulate latency with delay
  }

}
