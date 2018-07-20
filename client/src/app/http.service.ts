import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Router, ActivatedRoute, Params } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }

  goHome(){
    this._router.navigate([''])
  }

  goDetails(id){
    this._router.navigate(['pets', id])
  }

  pets(){
    return this._http.get('/api/pets')
  }

  getPetById(id){
    return this._http.get('/api/pets/'+id)
  }

  updatePetById(id, obj){
    return this._http.patch('/api/pets/'+id, obj)
  }

  createPet(obj){
    return this._http.post('/api/pets', obj)
  }

  deletePetById(id){
    return this._http.delete('/api/pets/'+id)
  }

}
