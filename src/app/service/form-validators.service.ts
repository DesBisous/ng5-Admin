import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class FormValidatorsService {

  constructor() { }

  public static ageValid( control: FormControl ): any {
    let valid = control.value >= 18;
    return valid ? null : { age: '年龄必须要大于18岁!' };
  }

  mobileValid( control: FormControl ): any {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    let valid = reg.test(control.value);
    return valid ? null : { mobile: '请输入合法的号码!' };
  }

  nameAsyncValid( control: FormControl ): any {
    let value = control.value;
    if ( value ) {
      /**
       * RxJS: map, flatMap和flatMapLatest的区别，flatMapLatest在RxJS 5.x中已更名为switchMap。
       * 详解：https://segmentfault.com/a/1190000011070872
       */
      return control.valueChanges
        // 去抖
        .debounceTime(1000)
        // 抑制重复值
        .distinctUntilChanged()
        // 进行远程校验，打平源Observable，取最新的源Observable
        .switchMap((item) => {
        //  这里进行请求接口，请求完成进行返回
          console.log('item:' + item);
          let reg = '邝晓滨';
          let valid = reg !== item;
          return Observable.of(valid ? null : { name: {dec: '用户名已存在!'} }).delay(5000);
      }).first();
    } else {
      return Observable.of(null);
    }
  }

  passwordValid( group: FormGroup ): any {
    let password = group.get('password') as FormControl;
    let pConfirm = group.get('rePassword') as FormControl;
    let valid: boolean =  password.value === pConfirm.value && password.value.length > 0 && pConfirm.value.length > 0;
    return valid ? null : { pw: {dec: '密码和确认密码不一致'} };
  }

}
