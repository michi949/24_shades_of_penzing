import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICompany} from "../common/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CompanyConstructor} from "../common/company-constructor";

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit, OnDestroy {
  private subscriptions$: Subscription[] = []
  public company?: ICompany
  public mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    disableDefaultUI: true,
    zoom : 14
  }

  public marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  }

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly companyConstructor: CompanyConstructor) { }

  ngOnInit(): void {
    this.subscriptions$.push(
      this.activatedRoute.params.subscribe(params => {
      let id = params['id'] as number;
      this.company = this.companyConstructor.companies.find(c => id == c.pos);

      if (this.company === null || this.company === undefined) {
        this.router.navigate(["/error"]);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach( subscription => {
      subscription.unsubscribe();
    });
  }
}
