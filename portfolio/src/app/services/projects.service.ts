import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  URL ='https://api.github.com/users/lucashenriquecss/repos'
  constructor(private http: HttpClient) { }
  public getProjects(){
    return this.http.get(`${this.URL}`);
  }
  // public getProjectId(id:number){
  //   return this.http.get(`${this.URL}`);
  // }
}
