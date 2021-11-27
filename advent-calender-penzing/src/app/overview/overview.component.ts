import { Component, OnInit } from '@angular/core';
import {TimeService} from "../services/time-service";
import {CompanyConstructor} from "../common/company-constructor";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public readonly timeService: TimeService,
              public readonly companyConstructor: CompanyConstructor) { }

  ngOnInit(): void {

  }

}
