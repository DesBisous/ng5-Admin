import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Address, states, User} from '../../../../extend/from';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.less']
})
export class UserDetailFormComponent implements OnInit, OnChanges {

  @Input()
  user: User;

  userForm: FormGroup;
  nameChangeLog: string[];
  states: string[];

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.states = states;
    this.nameChangeLog = [];
    this.createForm();
    this.logNameChange();
  }

  ngOnChanges(): void {
    this.userForm.reset({
      name: this.user.name,
      pass: {
        password: this.user.password,
        rePassword: this.user.rePassword,
      }
    });
    this.setAddresses(this.user.addresses);
  }

  ngOnInit() { 
  }

  // 创建表单模板
  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      pass: this.fb.group({
        password: '',
        rePassword: '',
      }),
      power: '',
      sidekick: ''
    });
  }

  // 保存name改变的历史记录
  logNameChange() {
    const  nameControl = this.userForm.get('name');
    nameControl.valueChanges.subscribe((value: string) => this.nameChangeLog.push(value));
  }

  // 设置表单模板的地址信息
  setAddresses( addresses: Address[] ) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.userForm.setControl('secretLairs', addressFormArray);
  }

  // 增加新地址
  addLair() {
    this.secretLairs.push(this.fb.group( new Address('', '', '', 512114) ));
  }

  // 重置
  revert() { this.ngOnChanges(); }

  get secretLairs(): FormArray {
    return this.userForm.get('secretLairs') as FormArray;
  }

  // 提交
  onSubmit() {
    this.user = this.prepareSaveUser();
    this.userService.updateUser(this.user).subscribe(() => console.log('提交成功!'));
    this.ngOnChanges();
  }

  // 拷贝 表单模板数据
  prepareSaveUser(): User {
    const formModel = this.userForm.value;

    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    const saveUser: User = new User(
      this.user.id,
      formModel.name,
      formModel.pass.password,
      formModel.pass.rePassword,
      secretLairsDeepCopy
    );

    return saveUser;
  }

}
