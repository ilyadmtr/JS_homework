import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../task2/user";

@Injectable()
export class HttpPostService{
  constructor(private http:HttpClient) {}
  postData(user:User){
    const body ={login: user.login, password: user.password};
    return this.http.post('http://localhost:3000/postuser', body);
  }
}

