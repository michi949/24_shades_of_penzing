import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICompany, IOffers, ISocialMediaInfo} from "../common/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CompanyConstructor} from "../common/company-constructor";
import {TimeService} from "../services/time-service";

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit, OnDestroy {
  private subscriptions$: Subscription[] = [];
  public company?: ICompany;
  public currentImagePos = 0;
  public mapOptions: google.maps.MapOptions = {};
  public marker = {
    position: { lat: this.company?.lat ?? 0, lng: this.company?.long ?? 0 }
  };

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly companyConstructor: CompanyConstructor,
              private readonly timeService: TimeService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.subscriptions$.push(
      this.activatedRoute.params.subscribe(params => {
      let id = params['id'] as number;
      this.company = this.companyConstructor.companies.find(c => id == c.pos);

      if (this.company === null || this.company === undefined || this.company.showDate >= this.timeService.currentDate) {
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
  public getImageCount(): number {
    return this.company?.images.length ?? 0;
  }

  public getImageStringToPos(pos: number): string {
    return this.company?.images[pos] ?? "";
  }

  public getNextImagePos(next: number) {
    if(next >= this.company?.images.length!) {
      this.currentImagePos = 0;
      return
    } else if ( next < 0) {
      this.currentImagePos = this.company?.images.length!-1;
      return;
    }
    this.currentImagePos = next;
  }

  public getSocialMediaInfo(): ISocialMediaInfo[] {
    return this.company?.socialMedia ?? [];
  }

  public getOffers(): IOffers[] {
    return this.company?.offers ?? [];
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
