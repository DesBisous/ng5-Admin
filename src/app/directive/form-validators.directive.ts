import { Directive } from '@angular/core';
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS} from '@angular/forms';
import {FormValidatorsService} from '../service/form-validators.service';

/**
 * 目前这里是模板驱动表单的自定义非异步校验器，如果要制定异步校验器，
 * 只需要将provide的只替换为：NG_ASYNC_VALIDATORS，useValue：使用和响应式表单那样写的校验器即可
 */

@Directive({
  selector: '[appAgeValidators]',
  providers: [{provide: NG_VALIDATORS, useValue: FormValidatorsService.ageValid, multi: true}]
})
export class FormValidatorsDirective {

  constructor() { }

}
