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
        name: "Doggerie Hundesalon & Boutique",
        pos: 1,
        showDate: new Date(2021, 11, 2),
        description: "Wir sind ein kleines, familiengeführtes Unternehmen, welches nächstes Jahr sein 10jähriges Jubiläum feiern darf!\n" +
          "\n" +
          "Wir setzen unseren Schwerpunkt auf Kundenfreundlichkeit- und Betreuung, persönliche Beziehung zu unseren Kund- und HUNDschaften,\n" +
          "\n" +
          "sowie ein besonderes Augenmerk auf Nachhaltigkeit, Regionalität und professionelle Beratung für Heimtiere – spezialisiert\n" +
          "\n" +
          "auf Hunde und Katzen. Unser Kerngeschäft ist die Pflegedienstleistung (Hundesalon) wo wir auch Hundefriseure ausbilden,\n" +
          "\n" +
          "sowie der Verkauf von Hunde- und Katzenzubehör, sowie der Vertrieb von Hundesalon-Ausstattung (Werkzeugen, Arbeitsmaterialien, etc..)\n" +
          "\n" +
          "Wir sehen uns nicht als klassischer Zoofachhändler, sondern eher als Rundum-Boutique für ausgewählte, sinnvolle und\n" +
          "\n" +
          "und hochwertige Produkte rund um Hund und Katz. Auch betreiben wir einen mittlerweile sehr beliebten Online-Shop – unsere\n" +
          "\n" +
          "„Online-Boutique“ mit sehr schnellem Versand in alle deutschsprachigen Länder (AT, DE, Schweiz). Nachdem wir als Nahversorger vom\n" +
          "\n" +
          "Lockdown ausgenommen sind, können uns Kunden jederzeit während unserer regulären Geschäftsöffnungszeiten auch\n" +
          "\n" +
          "besuchen kommen, oder einfach bequem die wichtigste Versorgung für Ihre Vierbeiner im Online Shop rund um die Uhr\n" +
          "\n" +
          "bestellen – liefern lassen oder auch persönlich in unserer Boutique in 1140, Holzhausenplatz 1, abholen!\n" +
          "\n" +
          "\n" +
          "\n" +
          "Was wir am Advent schätzen ist, dass es die schönste Zeit im Jahr ist um sich auf die wesentlichen Dinge im Leben\n" +
          "\n" +
          "zu besinnen – Familie, Freunde, Zusammenhalt und gemeinsame Zeit. So stark kann kein Virus, der versucht uns zu spalten,\n" +
          "\n" +
          "keine Alltagshektik, kein Zwiespalt sein, dass wir im Advent nicht zueinander finden!",
        images: [
          "assets/images/calendar-data/01/Stammteam 2021.jpeg",
          "assets/images/calendar-data/01/Logo.jpeg",
          "assets/images/calendar-data/01/Team.jpeg"
        ],
        offers: [
          {
            title: "Adventkalender für Hunde",
            description: "Adventkalender für Hunde mit 8 köstlichen Snacks aus Österreich",
            path: "https://www.doggerie.at/shop/canini-adventkalender-200g.html"
          },
          {
            title: "Doggerie Hundeseife",
            description: "Die „smell good“ Seife entstand in Zusammenarbeit mit\n" +
              "der Wiener Seifenmanufaktur in traditioneller Handarbeit -\n" +
              "made in Vienna - und sorgt für ein glänzendes Fell und\n" +
              "duftend-gesunde Haut dank der natürlichen Inhaltsstoffe",
            path: "https://www.doggerie.at/shop/Tierseife--Smell-Good-Seife--Hundeseife--Hundeshampoo--Pflegeseife--milde-Seife-fuer-hunde--Hundeseife-mild--Seife-gegen-Insekten--Katzenseife--Seife-fuer-Katze--Pferdeseife.html"
          },
          {
            title: "BIO Wintermenü",
            description: "Hochqualitative BIO-Gans in einem Komplettmenü\n" +
              "verfeinert mit schmackhaften und gesunden Maroni\n" +
              "und wilder Preiselbeere!",
            path: "https://www.doggerie.at/shop/canini-wintermenue-bio-gans-mit-maroni-preiselbeere-limited-edition-400g.html"
          }
        ],
        socialMedia: [
          {
            path: "https://www.doggerie.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Website"
          },
          {
            path: "https://www.facebook.com/doggerie/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
          {
            path: "https://www.instagram.com/doggerievienna/?hl=de",
            icon: "instagram",
            iconPrefix: "fab",
            title: "Instagram"
          }
        ],
        lat: 48.205654185991435,
        long: 16.225320170949864
      }
      // TODO: Add further
    ]
  }
}
