import { Injectable } from "@angular/core";
import { IPost } from "../domain/ipost";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {}

  getAllPosts(): Observable <IPost[]> {
    // tslint:disable-next-line:no-unused-expression
    return this._http.get<IPost[]>(this.url);
  }
}
