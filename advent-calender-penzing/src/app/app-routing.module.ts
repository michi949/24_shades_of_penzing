import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TeamComponent} from "./team/team.component";
import {AboutComponent} from "./about/about.component";
import {LegalNoticeComponent} from "./legal-notice/legal-notice.component";
import {CompanyOverviewComponent} from "./company-overview/company-overview.component";

const routes: Routes = [
  { path: "", pathMatch: "full",redirectTo: "overview"},
  { path: "overview", component: OverviewComponent},
  { path: "team", component: TeamComponent},
  { path: "about", component: AboutComponent},
  { path: "legal", component: LegalNoticeComponent},
  { path: "company/:id", component: CompanyOverviewComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
