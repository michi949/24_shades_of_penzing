import {Injectable} from "@angular/core";
import {ICompany} from "./interfaces";

@Injectable({
  providedIn: 'root',
})
export class CompanyConstructor {
  public companies: ICompany[] = []

  constructor() {
    this.setupCompanies();
    this.randomCompaniesShuffle(this.companies)
  }

  private randomCompaniesShuffle(companies: ICompany[]) {
    var currentIndex = companies.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = companies[currentIndex];
      companies[currentIndex] = companies[randomIndex];
      companies[randomIndex] = temporaryValue;
    }
    return companies;
  }

  private setupCompanies() {
    this.companies = [
      {
        name: "Test",
        pos: 1,
        showDate: new Date(2021, 11, 2),
        description: "dbla",
        images: ["https://images.unsplash.com/photo-1545153599-04d92985fe97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
        lat: "",
        long: ""
      },
      {
        name: "Test",
        pos: 2,
        showDate: new Date(),
        description: "dbla",
        images: ["bla"],
        lat: "",
        long: ""
      },
      {
        name: "Test",
        pos: 3,
        showDate: new Date(),
        description: "dbla",
        images: ["bla"],
        lat: "",
        long: ""
      },
      {
        name: "Test",
        pos: 4,
        showDate: new Date(),
        description: "dbla",
        images: ["bla"],
        lat: "",
        long: ""
      },
      {
        name: "Test",
        pos: 5,
        showDate: new Date(),
        description: "dbla",
        images: ["bla"],
        lat: "",
        long: ""
      }
    ]
  }
}
