import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICompany, ISocialMediaInfo} from "../common/interfaces";
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
  public mapOptions: google.maps.MapOptions = {}
  public marker = {
    position: { lat: this.company?.lat ?? 0, lng: this.company?.long ?? 0 }
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
        return;
      }
      this.setUpMap();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach( subscription => {
      subscription.unsubscribe();
    });
  }

  // #region Utility

  public getImageUrl(next: number): string {
    return this.company?.images[next] ?? ""
  }

  public getSocialMediaInfo(): ISocialMediaInfo[] {
    return this.company?.socialMedia ?? []
  }

  // #endregion

  // #region Helper
  private setUpMap() {
    this.mapOptions  = {
      center: { lat: this.company?.lat ?? 0, lng: this.company?.long ?? 0},
      disableDefaultUI: true,
      zoom : 14
    }

    this.marker = {
      position: { lat: this.company?.lat ?? 0, lng: this.company?.long ?? 0 },
    }
  }

  // #endregion
}
