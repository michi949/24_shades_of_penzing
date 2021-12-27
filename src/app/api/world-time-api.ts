import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IWorldTimeApi} from "../common/interfaces";

@Injectable({
  providedIn: 'root',
})
export class WorldTimeApi {

  constructor(public readonly http: HttpClient) {}

  public getTimeForVienna(): Observable<IWorldTimeApi>{
    return this.http.get<IWorldTimeApi>("https://worldtimeapi.org/api/timezone/Europe/Vienna");
  }

}
