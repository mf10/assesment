import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user.component';


@NgModule({
  declarations: [EditUserComponent],
  imports: [CommonModule, NgbModule, NgbModalModule, ReactiveFormsModule],
  exports: [EditUserComponent]
})
export class EditUserModule { }
