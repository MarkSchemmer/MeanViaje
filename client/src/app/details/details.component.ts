import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pet : any
  skills : any
  liked : any
  totalLikes : any

  constructor(
    private _http : HttpService,
    private _router : Router,
    private _route : ActivatedRoute
  ) {


    this.liked = false

    this.pet = {
      name : '',
      petType : ''
    }

    this.skills = [ ]

     this._route.params
     .subscribe((params : Params) => {
       this._http.getPetById(params['id'])
        .subscribe(data => {
          console.log(data)
          this.pet = data
          this.totalLikes = this.pet.likes
          this.skills = [
            this.pet.skills[0].skill_1,
            this.pet.skills[0].skill_2,
            this.pet.skills[0].skill_3
          ]
        })
     })

   }

   adopt(){
     this._http.deletePetById(this.pet._id)
      .subscribe(data =>{
        if('errors' in data){
            console.log('errors in delete', data)
        } else {
          console.log('this was delete', data)
          this._http.goHome()
        }
      })
   }

   Like(){
      this.liked = true
      this.pet.likes += 1
      this.totalLikes = this.pet.likes
      this._http.updatePetById(this.pet._id, this.pet)
        .subscribe(data => {
          this.pet = data
        })
   }

  ngOnInit() {
  }

}
