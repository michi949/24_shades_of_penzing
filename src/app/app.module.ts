import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import {HttpClientModule} from "@angular/common/http";
import {GoogleMapsModule} from "@angular/google-maps";
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PageNotFoundComponent,
    AboutComponent,
    LegalNoticeComponent,
    CompanyOverviewComponent,
    DataPrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

