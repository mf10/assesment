import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EditUserComponent } from './modals/edit-user/edit-user.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from 'src/app/state/app.state';
import { loadUsers } from 'src/app/state/users.actions';
import { selectAllUsers } from 'src/app/state/users.selectors';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  // public usersList$ = this.store.select(selectAllUsers);
  constructor(private store: Store<AppState>, private modalService: NgbModal) {}
  public usersList$ = this.store.select(selectAllUsers);
  public todo = '';

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }

  public async openModal(user: User): Promise<void> {
    let modalRef: NgbModalRef;

    modalRef = this.modalService.open(EditUserComponent, {
      windowClass: 'animated fadeInDown',
      size: 'lg',
    });
    modalRef.componentInstance.user = user;
  }
}
