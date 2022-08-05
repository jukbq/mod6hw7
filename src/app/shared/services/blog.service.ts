import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogRequest, BlogResponse} from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blog: Array<BlogResponse> = [];


private url = environment.BACKEND_URL;
private api = {blogs: `${this.url}/posts`}


  constructor( private http:HttpClient) { }


  getAll(): Observable<BlogResponse[]>{
    return this.http.get<BlogResponse[]>(this.api.blogs)
  }


  addPOst(post: BlogRequest): Observable<BlogResponse>{
    return this.http.post<BlogResponse>(this.api.blogs, post)
  }
}
