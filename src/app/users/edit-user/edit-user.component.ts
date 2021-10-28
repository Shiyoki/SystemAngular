import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId : any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false
 constructor(private activateRoute: ActivatedRoute, private userServices: UserService,
            private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.dataLoaded = false;
    this.activateRoute.params.subscribe( data => {
      this.userId = data.id
    });
    if (this.userId !== ''){
      this.userServices.viewuser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
       // Object.assign(this.userDetails, data);
        console.log(this.userDetails);
        //Formulario
        this.editUserForm = this.formBuilder.group({
          'name': new FormGroup(this.userDetails.name),
          'phone': new FormGroup(this.userDetails.phone)
        })

        this.dataLoaded = true;

      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  updateUser(){
    console.log(this.editUserForm.value);
  }

}
