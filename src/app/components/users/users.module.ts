import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserModule } from './modals/edit-user/edit-user.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoubleClickDirective } from 'src/app/shared/libraries/directives/double-click.directive';

@NgModule({
  declarations: [UsersComponent, DoubleClickDirective],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, NgbModalModule, EditUserModule],
})
export class UsersModule {}
