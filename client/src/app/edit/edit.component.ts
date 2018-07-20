import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pet : any
  skills : any
  errors : any

  constructor(
    private _http : HttpService,
    private _router : Router,
    private _route : ActivatedRoute)

    {

    this.pet = {
      name : '',
      petType : '',
      desc : '',
      skills : [{
        skill_1 :'',
        skill_2 :'',
        skill_3 : ''
      }]
  }

    this._route.params
    .subscribe((params: Params) => {
       this._http.getPetById(params['id'])
        .subscribe(data => {
          this.pet = data
          console.log(this.pet)
        })
    })

   }

  editPet(){
    this.errors = {}
    this._http.updatePetById(this.pet._id, this.pet)
    .subscribe(data => {
      if('errors' in data){
          console.log('errors in the data', data)
          for(let er in data['errors']){
            this.errors[er] = data['errors'][er]['message']
         }
      } else {
          console.log('success we have updated baby', data)
         this.goHome()
      }
    })
  }

  goHome(){
    this._http.goHome()
  }

  ngOnInit() {
  }

}
