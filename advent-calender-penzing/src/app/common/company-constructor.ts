import {Injectable} from "@angular/core";
import {ICompany} from "./interfaces";

@Injectable({
  providedIn: 'root',
})
export class CompanyConstructor {
  public companies: ICompany[] = []

  constructor() {
    this.setupCompanies()
  }

  private setupCompanies() {
    this.companies = [

    ]
  }
}
