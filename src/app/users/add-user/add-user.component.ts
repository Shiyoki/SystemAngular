import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService, private _sncakBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'name': new FormControl(''),
      'phone': new FormControl('')
    })
  }

  createUser(){
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      this._sncakBar.open("Usuario registrado exitosamente")
    }, err => {
      this._sncakBar.open("Ha surgido un error")
    })
  }

}
