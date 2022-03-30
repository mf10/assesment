import { editUserSuccess } from './../../../../state/users.actions';
import { User } from '../../../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { NumberValidator } from 'src/app/shared/libraries/validators/number.validator';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public form!: FormGroup;
  public loading = false;

  @Input() user!: User;

  constructor(public activeModal: NgbActiveModal, private store: Store<AppState>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.user.id],
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        city: [this.user.address.city, Validators.required],
        geo: this.user.address.geo,
        street: this.user.address.street,
        suite: this.user.address.suite,
        zipcode: this.user.address.zipcode,
      }),
      website: [this.user.website, Validators.required],
      phone: [this.user.phone, [Validators.required, NumberValidator()]],
      company: this.formBuilder.group({
        bs: this.user.company.bs,
        catchPhrase: this.user.company.catchPhrase,
        name: [this.user.company.name, Validators.required],
      }),
    });
  }

  /**
   * convenience getter
   * for easy access to form fields
   */
  public get f() {
    return this.form.controls;
  }

  /**
   * Submit User form
   */
  onSubmit(): void {
    this.loading = true;
    const user = this.form.value as User;
    this.store.dispatch(editUserSuccess({ user }));
    setTimeout(() => {
      this.activeModal.close();
      this.loading = false;
    }, 1100);
  }
}
