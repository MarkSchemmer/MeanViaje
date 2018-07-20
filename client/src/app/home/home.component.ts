import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '../../../node_modules/@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pets : any

  constructor(
    private _http : HttpService,
    private _router : Router
  ) {
      this._http.pets()
        .subscribe(data => {
          let ar = []
          for(let dt in data){
            ar.push(data[dt])
          }
          console.log(ar)
          let sorted = ar.sort(this.compare)
          this.pets = sorted
        })
   }


   goEdit(id){
      this._router.navigate(['pets', id, 'edit'])
   }

   compare(a,b){
      if(a.petType > b.petType)
        return 1
      if(a.petType < b.petType)
        return -1
      return 0
   }



   goDets(id){
     this._http.goDetails(id)
   }

  ngOnInit() {
  }

}
