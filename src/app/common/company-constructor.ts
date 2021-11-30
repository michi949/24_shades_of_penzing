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
      // -------------------------- DAY 1
      {
        name: "Doggerie Hundesalon & Boutique",
        pos: 1,
        showDate: new Date(2021, 11, 1),
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
            title: "Adventkalender für Hunde -20%",
            description: "Adventkalender für Hunde mit 8 köstlichen Snacks aus Österreich",
            path: "https://www.doggerie.at/shop/canini-adventkalender-200g.html"
          },
          {
            title: "Doggerie Hundeseife 9,90 statt 12,90",
            description: "Die „smell good“ Seife entstand in Zusammenarbeit mit\n" +
              "der Wiener Seifenmanufaktur in traditioneller Handarbeit -\n" +
              "made in Vienna - und sorgt für ein glänzendes Fell und\n" +
              "duftend-gesunde Haut dank der natürlichen Inhaltsstoffe",
            path: "https://www.doggerie.at/shop/Tierseife--Smell-Good-Seife--Hundeseife--Hundeshampoo--Pflegeseife--milde-Seife-fuer-hunde--Hundeseife-mild--Seife-gegen-Insekten--Katzenseife--Seife-fuer-Katze--Pferdeseife.html"
          },
          {
            title: "BIO Wintermenü -10%",
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
      },
      // -------------------------- DAY 2
      {
        name: "Bier Keissler / Gasthaus Peschta",
        pos: 2,
        showDate: new Date(2021, 11, 2),
        description: "Der Bier Keissler wurde mitte November 2021 eröffnet und ist die neue Bier-& Weinhandlung bzw. Bier-& Weinschank vis-a-vis vom Bahnhof Hütteldorf. Auch im Lockdown kann bei uns bestes Bier der Marken Hütteldorfer Bräu, Gablitzer & Schremser sowie ausgewählte Weine abholen, jeweils von Mittwoch-Samstag, 15h-19h. Außerdem kann man bequem im Webshop per Click & Collect bestellen.\n" +
            "Das Gasthaus wurde 1930 eröffnet und wird seit mittlerweile 4 Generationen als Familienbetrieb geführt und verwöhnt seine Gäste mit besten Wiener Schmankerl, saisonalen Spezialitäten, gepflegten Bieren von Gösser und Hütteldorfer Bräu sowie mit ausgewählten Weinspezialitäten heimischer Winzer.\n" +
            "Auch im Lockdown verwöhnen wir unsere Gäste mit Menüs und Schmankerl zum Abholen - jeweils Mittwoch-Sonntag von 11h-14h sowie von 17h-19h. Außerdem kann man im Webshop per Click & Collect bestellen.\n",
        images: [
            "assets/images/calendar-data/02/02-01.jpeg",
            "assets/images/calendar-data/02/02-02.jpeg",
            "assets/images/calendar-data/02/02-03.jpeg",
            "assets/images/calendar-data/02/02-04.jpeg"
        ],
        socialMedia: [{
          path: "https://gasthaus-peschta.at/speis-und-trank",
          icon: "globe",
          iconPrefix: "fas",
          title: "Gasthaus Peschta"
        },
          {
            path: "https://bierkeissler.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Bier Keissler"
          },
          {
            path: "https://www.facebook.com/Gasthaus-Peschta-115207331893640/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          }
        ],
        offers: [{
          title: "Hütteldorfer Geschenkset",
          description: "Das Hütteldorfer Geschenkset, bestehend aus einer Fl. 0,33l Bernstein Lager & einem Bierglas oder unser Hütteldorfer Bräu Weihnachtsbock in der eleganten 0,5l Bügelverschluss-Flasche.",
          path: ""
        },
          {
            title: "Hausgemachtes",
            description: "Auswahl unserer hausgemachten Marmelade, Pestos oder Pasteten im Glas oder unser hausgemachter Eierlikör- und natürlich unsere beliebten Geschenkgutscheine.",
            path: ""
          }
        ],
        lat: 48.198176246886476,
        long: 16.262203404592128
      },
      // -------------------------- DAY 3
      {
        name: "Regina Arnold Beauty & Wellness",
        pos: 3,
        showDate: new Date(2021, 11, 3),
        description: "Meine Leidenschaft ist es Frauen zu unterstützen Ihre persönliche Schönheit zu unterstreichen! Aber auch Männerhaut braucht Pflege! Hat Sie nicht schon das eine oder andere Fältchen beunruhigt? Oder leiden Sie unter trockener Haut? An Unreinheiten durch das Tragen der Maske? Ich kann helfen! Ich biete Ihnen kompetente Beratung mit einer der besten und innovativsten Kosmetiklinien weltweit: ARTISTRY Pflegeserie SKIN NUTRITION steht für CLEAN BEAUTY, ist vegan, frei von Parabene und Mineralölen, natürlich ohne Tierversuche! Ich helfe Ihnen, sich natürlich schön zu zeigen – OHNE KOMPROMISSE!\n" +
            "Ich besitze mehr als 15 Jahre Erfahrung in Beratung und Verkauf von ARTISTRY Pflegekosmetik und dekorativer Kosmetik. Biete Lieferservice, als auch die Möglichkeit die Produkte selbst online zu bestellen, den Preisvorteil der Kundenkarte zu nutzen.\n" +
            "Trendig online mit Smartphone shoppen und trotzdem immer persönliche Beratung genießen? Ist das denn möglich? JA bei Regina Arnold, Beauty & Wellness gibt es das! Ich freue mich auf Sie! Genießen Sie doch meine persönlich Pflegeberatung –NATÜRLICH auch ONLINE!\n",
        images: [
          "assets/images/calendar-data/03/03-01.JPG",
          "assets/images/calendar-data/03/03-02.jpeg",
          "assets/images/calendar-data/03/03-02.jpeg"
        ],
        socialMedia: [
          {
            path: "www.regina-arnold.com",
            icon: "globe",
            iconPrefix: "fas",
            title: "Regina Arnold"
          },
          {
            path: "https://www.facebook.com/profile.php?id=100008384250928",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          }
        ],
        offers: [
          {
            title: "Gutschein",
            description: "Ein Gutschein für eine persönliche oder online Kosmetik-Pflegeberatung",
            path: " assets/images/calendar-data/03/Gutschein_03.pdf"
          }
        ],
        lat: 0,
        long: 0
      },
      // -------------------------- DAY 4
      {
        name: "Empty- TODO",
        pos: 4,
        showDate: new Date(2021, 11, 4),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 5,
        showDate: new Date(2021, 11, 5),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 6,
        showDate: new Date(2021, 11, 6),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 7,
        showDate: new Date(2021, 11, 7),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 8,
        showDate: new Date(2021, 11, 8),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 9,
        showDate: new Date(2021, 11, 9),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 10,
        showDate: new Date(2021, 11, 10),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 11,
        showDate: new Date(2021, 11, 11),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 12,
        showDate: new Date(2021, 11, 12),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 13,
        showDate: new Date(2021, 11, 13),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 14,
        showDate: new Date(2021, 11, 14),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 15,
        showDate: new Date(2021, 11, 15),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 16,
        showDate: new Date(2021, 11, 16),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 17,
        showDate: new Date(2021, 11, 17),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 18,
        showDate: new Date(2021, 11, 18),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 19,
        showDate: new Date(2021, 11, 19),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 20,
        showDate: new Date(2021, 11, 20),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 21,
        showDate: new Date(2021, 11, 21),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 22,
        showDate: new Date(2021, 11, 22),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 23,
        showDate: new Date(2021, 11, 23),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      },
      {
        name: "Empty- TODO",
        pos: 24,
        showDate: new Date(2021, 11, 24),
        description: "",
        images: [],
        socialMedia: [],
        offers: [],
        lat: 0,
        long: 0
      }
    ]
  }
}
