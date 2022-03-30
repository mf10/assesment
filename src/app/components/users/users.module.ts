import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserModule } from './modals/edit-user/edit-user.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, NgbModalModule, EditUserModule],
})
export class UsersModule {}
