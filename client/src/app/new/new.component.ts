import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  pet : any
  skills : any
  errors : any

  constructor(private _http : HttpService) {

    this.pet = {
        name : '',
        petType : '',
        desc : '',
        skills : {}
    }

    this.skills = {
      skill_1 : '',
      skill_2 : '',
      skill_3 : ''
    }

   }

   goHome(){
      this._http.goHome()
   }

   reset(){
    this.pet = {
      name : '',
      petType : '',
      desc : '',
      skillz : ''
  }

  this.skills = {
    skill_1 : '',
    skill_2 : '',
    skill_3 : ''
  }
   }

   addPet(){
     this.errors = {}
     this.pet.skills = this.skills
     this._http.createPet(this.pet)

      .subscribe(data => {
        if('errors' in data){
          console.log('errors in ', data)

          for(let er in data['errors']){
              this.errors[er] = data['errors'][er]['message']
          }

        } else {
          console.log('success in ', data)
          this.goHome()
          this.reset()
        }

      })
   }

  ngOnInit() {
  }

}
