import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../shared/models/evenement';
import { Observable } from 'rxjs';
import { EvenementFilters } from '../shared/models/evenement-filters';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) {}

  addEvenement(evenement:Evenement):Observable<Evenement>{
    return this.http.post<Evenement>(environment.apiURL+'api/createEvenement',evenement);
  }

  getAllEvenements():Observable<Evenement[]>{
    return this.http.get<Evenement[]>(environment.apiURL+'api/getAllEvenements');
  }

  getFilteredEvenements(filteredEvenement: EvenementFilters): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(environment.apiURL+'api/getFilteredEvenements',

                                                                                    { params: 
                                                                                      { 
                                                                                        'date': filteredEvenement.date.toString(),
                                                                                        'priceMax': filteredEvenement.priceMax,
                                                                                        'category': filteredEvenement.category                                                                                  
                                                                                      }
                                                                                   }
                                                                                    );
  }


  findEvenementById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(environment.apiURL+`api/findEvenementById/${id}`);
  }

  evenementRegistrationByUser(id:number, userId:number):Observable<any>{
    return this.http.post<any>(environment.apiURL+`api/evenementRegistrationByUser/${id}/user/${userId}`,{});
  }

  cancelEvenementByOrganizer(id:number, userId:number):Observable<Evenement>{
    return this.http.delete<Evenement>(environment.apiURL+`api/cancelEvenementByOrganizer/${id}/user/${userId}`,{});

}

  cancelRegistrationByParticipants(id:number, userId:number):Observable<Evenement>{
    return this.http.delete<Evenement>(environment.apiURL+`api/cancelRegistrationByUser/evenement/${id}/user/${userId}`,{});

}

  findEvenementByUserId(userId: number): Observable<Evenement[]> {
  return this.http.get<Evenement[]>(environment.apiURL+`api/findEvenementByUserId/${userId}`);
}
}
