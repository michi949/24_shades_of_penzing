import {Injectable} from "@angular/core";
import {WorldTimeApi} from "../api/world-time-api";

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  public currentDate: Date = new Date();

  constructor(private readonly worldTimeAPi: WorldTimeApi) {}

  public loadFromWorldTimeApi() {
    this.worldTimeAPi.getTimeForVienna().subscribe( dateFormat => {
      this.currentDate = new Date(dateFormat.datetime)
    })
  }
}
