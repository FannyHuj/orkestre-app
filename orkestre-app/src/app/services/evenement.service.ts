import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../shared/models/evenement';
import { Observable } from 'rxjs';
import { EvenementFilters } from '../shared/models/evenement-filters';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) {}

  addEvenement(evenement:Evenement):Observable<Evenement>{
    return this.http.post<Evenement>('http://localhost:8000/api/createEvenement',evenement);
  }

  getAllEvenements():Observable<Evenement[]>{
    return this.http.get<Evenement[]>('http://localhost:8000/api/getAllEvenements');
  }

  getFilteredEvenements(filteredEvenement: EvenementFilters): Observable<Evenement[]> {
    return this.http.get<Evenement[]>('http://localhost:8000/api/getFilteredEvenements',

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
    return this.http.get<Evenement>(`http://localhost:8000/api/findEvenementById/${id}`);
  }

  evenementRegistrationByUser(id:number, userId:number):Observable<any>{
    return this.http.post<any>(`http://localhost:8000/api/evenementRegistrationByUser/${id}/user/${userId}`,{});
  }

  cancelEvenementByOrganizer(id:number, userId:number):Observable<Evenement>{
    return this.http.delete<Evenement>(`http://localhost:8000/api/cancelEvenementByOrganizer/${id}/user/${userId}`,{});

}

  cancelRegistrationByParticipants(id:number, userId:number):Observable<Evenement>{
    return this.http.delete<Evenement>(`http://localhost:8000/api/cancelRegistrationByUser/evenement/${id}/user/${userId}`,{});

}

  findEvenementByUserId(userId: number): Observable<Evenement[]> {
  return this.http.get<Evenement[]>(`http://localhost:8000/api/findEvenementByUserId/${userId}`);
}
}
