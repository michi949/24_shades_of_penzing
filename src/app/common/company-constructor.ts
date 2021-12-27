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
            path: "http://www.regina-arnold.com/",
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
        name: "Gärtnerei Jezik",
        pos: 4,
        showDate: new Date(2021, 11, 4),
        description: "In der Gärtnerei JEZIK finden Sie eine Riesenauswahl an Schnittblumen, Blumensträußen und Grünpflanzen. Auf 1.500m2 Freigelände und 300m2 Geschäftsfläche gibt es alles, was das Leben grüner und bunter macht.\n" +
            "Für die Überwinterung Ihrer Pflanzen stehen 1.000m2 Glashausfläche zur Verfügung. Unsere Floristinnen sind spezialisiert auf außergewöhnliche Hochzeitsdekoration und extravagante Event-Floristik. Für Grabpflege bieten wir fachmännische Beratung und liebevolle Grabgestaltung. Wir haben 7 Tage die Woche für Sie geöffnet.\n" +
            "Die Begeisterung für die Gärtnerei zieht sich bei der Familie Jezik seit Jahrzehnten durch mehrere Generationen.\n" +
            "Dass der Betrieb die harten Kriegs- und Aufbaujahre wirtschaftlich überstand, ist der Frau des Gründers Wilhelm Jezik sen. zu verdanken. Gemeinsam mit dessen Schwestern arbeiteten sie, um bei den Besatzern nicht aufzufallen, als Männer verkleidet in der Gärtnerei und am Friedhof.\n" +
            "Nach seiner Rückkehr widmete sich Wilhelm Jezik sen. nicht nur dem weiteren Aufbau, sondern auch seinem Steckenpferd, der Forschung. Um 1950 gelang es ihm und seinem Bruder, eine neue Begonien-Sorte zu züchten: die Kongressbegonie. Diese war über viele Jahre eine der marktführenden Begonien-Sorte. Die vier Schwestern arbeiteten ebenfalls in der Gärtnerei bzw. in der Verwaltung des Betriebes. Ein weiterer Bruder war Obergärtner in Schloss Halbturn im Burgenland.\n" +
            "1972 übergab Wilhelm Jezik sen. den Betrieb an seinen ältesten Sohn Wilhelm Jezik jun. Dieser führte den Betrieb im Sinne seines Vaters als auch die politische Agenda fort. Die Leidenschaft für die Gärtnerei setzte sich somit auch in der 2. Generation fort. Wilhelm Jezik sen. zweiter Sohn Fritz leitete bis zu seiner Pensionierung den Friedhof Maria Enzersdorf. Seine Schwester, Dr. Karoline Jezik, war/ist Professorin an der Universität für Bodenkultur in Wien.\n" +
            "Mittlerweile wird der Familienbetrieb von Ulrike und Christian Jezik-Osterbauer mit ihrem Sohn Alex bereits in 4. Generation weiter ausgebaut und auch durch die herausfordernde Corona-Zeit geführt. Die Gärtnerei Jezik ist ein Meisterbetrieb, bei dem Leidenschaft und Fachkönnen in der Familie liegen.\n",
        images: [
          "assets/images/calendar-data/04/04-02.jpeg",
          "assets/images/calendar-data/04/04-01.jpeg",
          "assets/images/calendar-data/04/04-03.jpeg",
        ],
        socialMedia: [
          {
            path: "https://www.jezik.at/de-at",
            icon: "globe",
            iconPrefix: "fas",
            title: "Gärtnerei Jezik"
          },
          {
            path: "https://www.facebook.com/Gaertnerei.Jezik/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
          {
            path: "https://www.instagram.com/gaertnerei_jezik/",
            icon: "instagram",
            iconPrefix: "fab",
            title: "Instagram"
          }
        ],
        offers: [
            {
          title: "Weihnachtsstern",
          description: "10% auf den Weihnachtsstern bis 24.12.2021 bei „Codewort“: JVP14",
          path: ""
        }],
        lat: 48.198048604407546,
        long: 16.28034112711956
      },
      {
        name: "it-steininger.com",
        pos: 5,
        showDate: new Date(2021, 11, 5),
        description: "Über 15 Jahre Erfahrung im Webhosting und Kundensupport garantieren Ihnen einen fachlich versierten Support! Unser Support-Team hilft Ihnen bei allen Fragen und Problemen!\n" +
            "Wir verstehen uns als Partner für kleine Webseiten sowie komplexe und anspruchsvolle Shop-Systeme. Gerne stellen wir mit Ihnen gemeinsam das passende Hosting-Wunschpaket zusammen.\n" +
            "Mittels unserer redudanten Anbindung unserer Systeme an unterschiedliche Backbone-Netze, können wir Ihnen eine überdurchschnittliche Erreichbarkeit der Server von 99,9 % garantieren!\n",
        images: [
          "assets/images/calendar-data/05/05-01.jpeg",
          "assets/images/calendar-data/05/05-03.png",
        ],
        socialMedia: [
          {
            path: "https://it-steininger.com/",
            icon: "globe",
            iconPrefix: "fas",
            title: "it-steininger.com"
          },
        ],
        offers: [
          {
            title: "Erstellen Ihres Onlineshops",
            description: "Inklusive 1 Jahr Hosting, 3 Stunden Support, Standard Shop Layout, Konfiguration, Anlage von 10 Artikel und 2 Stunden Onlineschulung für die Benutzung und Handhabung des Shops um einen Fixpreis von 5.190,- Euro exkl. MWSt. anbieten. Optional gibt es auch die Möglichkeit auf eine vorgelagertes Warenwirtschaftssystem zu erweitern.",
            path: ""
          }
        ],
        lat: 48.19827360660047,
        long:  16.282412526695126
      },
      {
        name: "Feinkost Aschauer",
        pos: 6,
        showDate: new Date(2021, 11, 6),
        description: "Gerade in Zeiten wie diesen ist die Regionalität und Herkunft unserer Lebensmittel besonders wichtig. \n" +
            "Wir sind ein Familienunternehmen, welches seit 1974 in Wien besteht. \n" +
            "\n" +
            "Unser Schwerpunkt liegt auf österreichischen, regionalen Spezialitäten und dem persönlichen Kontakt zu unseren Produzenten und Bauern. Somit werden wir direkt beliefert und unterstützen damit diese kleinen heimischen Betriebe. \n" +
            "Unser Sortiment ändert sich stetig und richtet sich verstärkt nach den saisonalen Produktangeboten. \n" +
            "\n" +
            "Wir stehen für ehrliche und authentische Produkte mit bewussten Genuss statt Massenkonsum und für einen wertvollen Umgang mit Lebensmitteln, damit unsere Produzenten weiterhin gut, sauber und fair erzeugen können!\n",
        images: [
          "assets/images/calendar-data/06/06-01.jpeg",
          "assets/images/calendar-data/06/06-02.jpeg",
          "assets/images/calendar-data/06/06-03.jpeg",
        ],
        socialMedia: [
          {
            path: "https://www.feinkost-aschauer.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Feinkost Aschauer"
          },
          {
            path: "https://www.facebook.com/Feinkost-Aschauer-152184384811782/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          }
        ],
        offers: [

        ],
        lat: 48.19581041347693,
        long: 16.281047769022365
      },
      {
        name: "Goldschmiede Mace",
        pos: 7,
        showDate: new Date(2021, 11, 7),
        description: "1928 gründete die Familie Mace eine Goldschmiedewerkstätte.\n" +
            "Seit 1989 führe nun ich, Angela Göschl, gelernte Gold- und Silberschmiedin, die Firma Mace GmbH. Mit innovativer Technik und kreativen Ideen verbinde ich die Jahrtausend alte Gold- und Silberschmiedekunst. Auf unserer Webseite finden Sie zahlreiche Schmuckstücke aus der hauseigenen Goldschmiede. Gerne fertigen wir für Sie, nach Ihren Ideen und Vorstellungen, Ihr persönliches Schmuckstück an. Oder lassen Sie einfach Ihr altes Schmuckstück bei uns. Wir kreieren ein Neues daraus. Unser Motto: „Aus Alt mach Neu. Bei uns sind Sie sicher gut beraten. Weitere Service finden Sie auf unserer Website. ",
        images: [
          "assets/images/calendar-data/07/07-01.jpg",
          "assets/images/calendar-data/07/07-02.jpg",
          "assets/images/calendar-data/07/07-03.jpg",
        ],
        socialMedia: [
          {
            path: "https://www.goldschmiede-mace.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Goldschmiede Mace"
          },
          {
            path: "https://www.facebook.com/Goldschmiede-Mace-110277821109017",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          }
        ],
        offers: [
          {
            title: "Geschenkgutschein",
            description: "Gratis Ring-Weitenänderung, oder eine Schmuckreinigung des persönlichen Lieblingsschmuckstückes. Ab 1 Tag nach Lockdown bis Weihnachten.",
            path: ""
          }
        ],
        lat: 48.188355167513414,
        long: 16.31053497068711
      },
      {
        name: "graphic to print",
        pos: 8,
        showDate: new Date(2021, 11, 8),
        description: "Die Werbeagentur „graphic to print“ ist ein junges Einzelunternehmen im 14. Wiener Gemeindebezirk. \n" +
            "Der Gründer, Thomas ist ausgebildeter Grafikdesigner und Printproducer.\n" +
            "Angeboten werden alle Leistungen aus einer Hand, von der Ideenfindung über die Gestaltung bis hin zur Produktion mit dem geeigneten Lieferanten.\n" +
            "Simple Flyer, komplexe Werbemittel, Kunststoff-, Karton- und Papiererzeugnisse.\n" +
            "graphic to print verwirklicht Ihre Wünsche!\n \n \n" +
            "Kontakt:\n" +
            "Thomas Soler \n" +
            "Tel.: 0664 881 995 27 \n" +
            "E-Mail.: thomas@graphic-to-print.com\n",
        images: [
          "assets/images/calendar-data/08/08-03.jpg",
          "assets/images/calendar-data/08/08-01.jpg",
          "assets/images/calendar-data/08/08-02.jpg",
        ],
        socialMedia: [],
        offers: [
            {
          title: "Gutschein",
          description: "15% Rabatt auf Grafikleistungen",
          path: "assets/images/calendar-data/08/08-03.jpg"
        }
      ],
        lat: 0,
        long: 0
      },
      {
        name: "GANS",
        pos: 9,
        showDate: new Date(2021, 11, 9),
        description: "Gegründet 1882 von A. Gans wurde das Unternehmen ursprünglich als Bettfedernfabrik geführt. In dieser Zeit entstanden die ersten Reinigungsmaschinen für Daunen und Federn und machten das Produkt äußerst beliebt als Füllmaterial für Bettwaren in der K.u.K. - Monarchie in Wien. So entstanden noch in der Vorkriegszeit, neben den Fabriken, nach und nach etwa ein Dutzend Filialen....\n" +
            "Nach dem 2. Weltkrieg wurde das Sortiment um Bettwäsche erweitert, in den späten 1970er Jahren von den neuen Besitzern komplett neu aufgestellt und mit exklusiven Produkten erweitert. Die \"Gans\" wird nun von der neuen Eigentümerfamilie in 3. Generation mit viel Liebe zum Detail und in bewährter Handarbeit weitergeführt. Eine Verbindung von Tradition und modernem Zeitgeist. Von neuen Qualitäten begeistert, zählten die Aristokratie, das gehobene Bürgertum und die Nobelhotellerie der österreichischen Monarchie bald zu den Stammkunden. Schon um die Jahrhundertwende stand der Name Gans für Daunendecken und Bettwäsche erster Güte. Und daran hat sich bis heute nichts geändert. Unsere edlen Bettwaren sind in der ganzen Welt begehrt und gefragt. Unser Wissen haben wir über mehr als ein Jahrhundert lang gesammelt und mit modernen Erkenntnissen der Schlafforschung kombiniert. Die richtigen Maße, persönliche Wärmebedürfnisse und unterschiedliche Schlafgewohnheiten stimmen wir mit Ihren Wünschen ab.\n" +
            "Am Ende stehen nicht nur höchste Qualität und Handwerkskunst, sondern Ihr Wohlbefinden. Jeden Tag und jede Nacht.\n",
        images: [
          "assets/images/calendar-data/09/09-01.jpeg",
          "assets/images/calendar-data/09/09-04.png",
          "assets/images/calendar-data/09/09-02.jpeg",
          "assets/images/calendar-data/09/09-03.jpeg",
        ],
        socialMedia: [
          {
            path: "https://www.gans.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "GANS"
          },
          {
            path: "https://www.facebook.com/ganswien",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
          {
            path: "https://www.instagram.com/gans_wien",
            icon: "instagram",
            iconPrefix: "fab",
            title: "Instagram"
          }
        ],
        offers: [
          {
            title: "Aktuelle Vergünstigungen",
            description: "Aktuell gibt es ein minus 10% mit dem Code GANS10 auf alles (außer auf MissoniHome). Ebenfalls gibt es  -30% auf Lacoste sowie einige Spezialangebote -20%.",
            path: ""
          },
          {
            title: "Frottiertücher",
            description: "Ein schönes Geschenk zu Weihnachten sind unsere GANS 1882-Frottiertücher, diese sind jetzt neu!",
            path: "https://www.gans.at/collections/frottiertucher-gans-1882"
          }
        ],
        lat: 48.197395464663316,
        long: 16.300725574389674
      },
      {
        name: "GN-Creations4U",
        pos: 10,
        showDate: new Date(2021, 11, 10),
        description: "GN-Creations4U ist eine kleine Firma für Textilien und Textilveredelung, Geschenk- und Merchandise Artikel. Hauptsächlich biete ich meine Dienste über die Sozialen Medien (z.B. Facebook) an und vor dem Lockdown habe ich mich auch gerne mit meinen Kunden getroffen. Ein Ladenlokal ist derzeit noch nicht vorhanden, jedoch werden Ihre Bestellungen gerne Digital aufgenommen. Besuchen Sie doch einmal meine Facebook seite für weitere Informationen. ",
        images: [
          "assets/images/calendar-data/10/10-01.jpeg",
          "assets/images/calendar-data/10/10-02.jpeg",
          "assets/images/calendar-data/10/10-03.jpeg",
        ],
        socialMedia: [{
          path: "https://www.facebook.com/GNCreations4U",
          icon: "facebook",
          iconPrefix: "fab",
          title: "Facebook"
        }],
        offers: [{
          title: "Rabattaktion",
          description: "Mit dem Code GNC4U21 einen Rabatt von 10% auf eine Bestellung von 01.12 bis 24.12 erhalten.",
          path: ""
        }],
        lat: 0,
        long: 0
      },
      {
        name: "Naturladen Miksa",
        pos: 11,
        showDate: new Date(2021, 11, 11),
        description: "Wir sind ein „Naturladen Miksa“ mit einem ausgesuchten Sortiment.\n" +
            "Wir legen Wert auf Freundlichkeit, Service und eine persönliche Beratung.\n" +
            "\n" +
            "Gesundheit ist das Wertvollste, das Du besitzt. Denn ein gesunder \n" +
            "Körper ist die Grundlage für das Leben, das wir uns alle wünschen…\n" +
            "\n" +
            "Das umfassende ökologische Wasch-Pflegeprogramm von „Ulrich natürlich“ \n" +
            "für Haushalt und Gewerbe sind unsere Kernprodukte.\n" +
            "\n" +
            "Besuchen Sie uns doch gerne auf unserer Website.\n",
        images: [
          "assets/images/calendar-data/11/11-01.jpeg",
        ],
        socialMedia: [{
          path: "https://www.shop.miksa.at/",
          icon: "globe",
          iconPrefix: "fas",
          title: "Shop"
        },{
          path: "https://www.miksa.at/",
          icon: "globe",
          iconPrefix: "fas",
          title: "Miksa"
        },{
          path: "https://www.facebook.com/mininaturabcmiksa/",
          icon: "facebook",
          iconPrefix: "fab",
          title: "Facebook"
        }],
        offers: [
          {
            title: "Versandkostenfrei",
            description: "Ab einem Bestellwert von € 49,- liefern wir Ihre Waren innerhalb von \n" +
                "Österreich versandkostenfrei.",
            path: ""
          }
        ],
        lat: 48.20219077274325,
        long: 16.306723173045253
      },
      {
        name: "Messerschmiede Stefan NAGL",
        pos: 12,
        showDate: new Date(2021, 11, 12),
        description: "Mein Weg zum Messermacher begann, als ich erfuhr, dass mein Onkel und Vorbesitzer der Schmiede, Franz Nagl, beschloss in Pension zu gehen. Bis dato war ich ursprünglich in der IT Branche tätig gewesen und wollte lediglich die Gelegenheit nutzen, um einen Workshop zu belegen, bevor mein Onkel sich zur Ruhe setzen würde. Wie das Leben so spielt, faszinierte mich das Handwerk des Messermachens vom ersten Moment an und wurde zur Leidenschaft. Von diesem Zeitpunkt an, wusste ich, dass ich meine IT-Karriere an den Nagel hängen würde und mich mit Leib und Seele dem Erhalt dieses faszinierenden Handwerks widmen wollte. So kam es, dass die Messerschmiede Nagl weiterhin ein Familienunternehmen blieb und im Jänner 2018 in meinen Besitz überging.\n" +
            "\n" +
            "In unserem neuen Shop biete ich ausschließlich hochwertige Messer von Top Marken – wie Victorinox, Wüsthof, Nesmuk, Yaxell, Spyderco, oder Viper – an. Egal ob Profi-Koch, Survival-Experten, oder einfache Bewunderer und Sammler schöner Klingen, bei uns ist für jeden etwas dabei. Sollte Sie das Handwerk des Messermachens genauso faszinieren wie mich, bieten wir Ihnen ebenfalls die Möglichkeit Ihr individuell gestaltetes Messer anfertigen zu lassen, oder sogar selbst in einem unserer Workshops Hand anzulegen.\n",
        images: [
          "assets/images/calendar-data/12/12-01.jpeg",
          "assets/images/calendar-data/12/12-02.jpeg",
          "assets/images/calendar-data/12/12-03.jpeg",
        ],
        socialMedia: [
          {
            path: "https://www.nagl-messer.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Nagl Messer"
          },{
            path: "https://www.facebook.com/MesserschmiedeNagl/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          }
        ],
        offers: [
          {
            title: "Workshops",
            description: "Egal ob Messer-Fans, Hobby-Schmiede, oder Abenteurer auf der Suche nach neuen Erlebnissen, unsere Messer-Workshops sind ein ganz besonderes Erlebnis für jeden! In einem dreitägigen Workshop bieten wir Ihnen die Möglichkeit unter professioneller Anleitung Ihr ganz persönliches Messer anzufertigen! Dabei entscheiden Sie selbst über Form, Funktion, Griffmaterial, Pins und Stahlsorte.",
            path: "https://www.nagl-messer.at/workshops"
          }
        ],
        lat: 48.18966833577987,
        long: 16.304696727768818
      },
      {
        name: "Betten Misner",
        pos: 13,
        showDate: new Date(2021, 11, 13),
        description: "Unser Unternehmen existiert bereits seit 1949 und befindet sich in der dritten Generation. Unser Produktsortiment und Dienstleistungen entwickelt sich mit den Anforderungen und wünschen unserer Kunden ständig weiter. Wir setzten auch hochwertige Qualität und vertrauen in uns und unser Unternehmen.\n" +
            "In den letzten Jahren sind für uns auch Kinder Produkte ganz wichtig geworden, da sie unsere zukünftige Generation bilden.\n" +
            "\n" +
            "Unser Ziel ist es unseren Kunden glücklich zu machen. Sei es mit einer Qualitativ hochwertigen Bettwäsche  oder von dem Wohlgefühl auf einer gemütlichen Matratze zu schlafen oder gar für seine kleinen nachhaltig Kinderbekleidung zu kaufen, wir setzten auf persönliche Beratung.\n" +
            "\n" +
            "Besuchen Sie doch auch Unseren Shop auf unserer Website.\n",
        images: [
            "assets/images/calendar-data/13/13-01.jpeg",
            "assets/images/calendar-data/13/13-02.png",
            "assets/images/calendar-data/13/13-03.jpeg",],
        socialMedia: [
          {
            path: "https://www.betten-misner.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Betten Misner"
          },{
            path: "https://www.facebook.com/bettenmisner/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },{
            path: "https://www.instagram.com/bettenmisner/",
            icon: "instagram",
            iconPrefix: "fab",
            title: "Instagram"
          }
        ],
        offers: [],
        lat: 48.20201345217515,
        long: 16.257587987292045
      },
      {
        name: "Einkaufskreis Wien West",
        pos: 14,
        showDate: new Date(2021, 11, 14),
        description: "Gemeinsam sind wir stärker! Nach diesem Motto haben sich die beiden Einkaufsstraßenvereine Linzer Straße und Einkaufskreis Hütteldorf zum EINKAUFSKREIS WIEN WEST zusammengeschlossen. Das bedeutet eine Vielzahl von Mitgliedsbetrieben, eine noch größere Branchenvielfalt und eine gelungene Vernetzung der Kaufleute und Dienstleister in Penzing, wovon unsere Kundinnen und Kunden profitieren. Bei uns werden Fachwissen, Kundenbetreuung und persönliche Beratung groß geschrieben. Bei unserem Weihnachts-Gewinnspiel gibt es Einkaufsgutscheine zu gewinnen, die bei allen Mitgliedsbetrieben eingelöst werden können. Teilnahmemöglichkeit online und Mitgliedsbetriebe auf unserer Website.",
        images: [
          "assets/images/calendar-data/14/14-03.jpeg",
          "assets/images/calendar-data/14/14-02.jpeg",
          "assets/images/calendar-data/14/14-01.jpeg",],
        socialMedia: [
          {
            path: "https://www.einkaufskreis.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Einkaufskreis"
          },
          {
            path: "https://www.facebook.com/einkaufskreiswienwest",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          }
        ],
        offers: [{
          title: "Gewinnspiel",
          description: "Bei unserem Weihnachts-Gewinnspiel gibt es Einkaufsgutscheine zu gewinnen, die bei allen Mitgliedsbetrieben eingelöst werden können",
          path: "https://www.einkaufskreis.at/"
        }],
        lat: 48.198995389464926,
        long: 16.309082753261762
      },
      {
        name: "„Deko-Platzerl“ by A.Grabner",
        pos: 15,
        showDate: new Date(2021, 11, 15),
        description: "Das wussten Sie, das wusstet Ihr bestimmt nicht, oder?\n" +
            " \n" +
            "2021 gibt es unseren A.Grabner Deko-Shop schon 60 Jahre! Was damals als Fachgeschäft für Schaufenster-Dekoration begann und von unseren Eltern aufgebaut wurde, wird nun in zweiter Generation von Anton und Andreas Grabner fortgeführt.  \n" +
            " \n" +
            "Die Bedürfnisse unserer Kunden sind dynamisch. Und dynamisch haben wir auch unser Sortiment über die vielen Jahre angepasst. Seit März 2021 NEU: das „Deko-Platzerl“ by A.Grabner für Deko mit Herz als perfekte Ergänzung des aktuellen Angebots. Und das ist vielseitig: Kreative und maßgeschneiderte Bildereinrahmung, alles rund um Künstlerbedarf und kreatives Malen sowie hochwertige Kunstblumen und -pflanzen in allen Größen, ein umfangreiches Sortiment für Hobby, Basteln, Spiele, Spielkarten. Und natürlich Deko-Artikel – jetzt gerade zur Advent- und Weihnachtszeit Strohkränze, Kugeln, Kerzen, Geschenkboxen und alles rund um schöne Verpackungsgestaltung. Und viele liebevolle Geschenke und Mitbringsel, Wohnaccessoires und Homedeko. Auch fertigen wir liebevoll gestaltete Kunstblumen-Arrangements und Gestecke für Sie – also entweder „ready-to-take“ oder auch auf Bestellung mit Farb- oder Blumen-Wunsch.\n" +
            " \n" +
            "Wir haben unser Geschäft mit vielen weihnachtlichen Artikeln aufgepimpt. Alles für ein weihnachtliches „Setting“ zuhause.\n" +
            "Oder für’s Büro, für indoor & outdoor. Stöbern im Deko-Shop soll Lust machen auf „mehr“.\n" +
            "Soll inspirieren. Soll Sie etwas Schönes entdecken lassen. Oder Sie haben einen speziellen Wunsch – sprechen Sie uns an.\n" +
            "Mehr gibt’s auch auf Instagram.\n",
        images: [
          "assets/images/calendar-data/15/15-01.jpeg",
          "assets/images/calendar-data/15/15-02.jpeg",
          "assets/images/calendar-data/15/15-03.png",
        ],
        socialMedia: [
          {
            path: "https://www.deko-grabner.at/deko-platzerl",
            icon: "globe",
            iconPrefix: "fas",
            title: "„Deko-Platzerl“ by A.Grabner"
          },
          {
            path: "https://www.facebook.com/Dekoblumen/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
          {
            path: "https://www.instagram.com/dekoplatzerl_wien/",
            icon: "instagram",
            iconPrefix: "fab",
            title: "Instagram"
          }
        ],
        offers: [
          {
            title: "Gutschein",
            description: "Hier finden Sie eine liebevoll und geschmackvoll zusammengestellte Auswahl mit den Schwerpunkten Kunst- und Seidenblumen, Gestecke und Arrangements sowie liebevolle Accessoires, Geschenkideen, Deko-Artikel, Home- und Wohnaccessoires sowie „herz“liche Mitbringsel und kleine Dinge, die das Interieur schöner machen.\n" +
                "\n" +
                " \n" +
                "\n" +
                "Kommen Sie vorbei, stöbern Sie in Ruhe in unseren weihnachtlichen Ambiente, es ist bestimmt etwas Schönes für Sie dabei. Und mit dem JVP14-Adenventkalender ab heute bis Weihnachten alles mit Rabatt. Dazu einfach den Gutschein ausdrucken oder im Geschäft am Handy vorzeigen.\n" +
                "\n" +
                "Wir freuen uns auf Sie!",
            path: "assets/images/calendar-data/15/gutschein.pdf"
          }
        ],
        lat: 48.196771185786766,
        long: 16.287182988422842
      },
      {
        name: "Elektro Chwapil GmbH",
        pos: 16,
        showDate: new Date(2021, 11, 16),
        description: "Gegründet vor mehr als 85 Jahren, konnten wir im Laufe der Jahrzehnte mehrere Gernerationen mit unseren Produkten begeistern. Waren es früher nicht ausschliesslich Haushaltsgeräte sondern auch z.B. Fahrräder und Nähmaschinen, so sind wir heute im Hausgerätebereich spezialisiert. Als regionaler Nahversorger bieten wir Ihnen mit unserem Expert Elektrofachhandelsgeschäft in Wien eine hervorragende Auswahl der neuesten Elektrogeräte, vom Fernseher bis zur Waschmaschine, aber auch Zubehör von der Glühbirne bis hin zu Ersatzteilen. Sozusagen alles, was Ihr Herz begehrt und in einem Haushalt nicht fehlen sollte. Dazu bieten wir Ihnen mit unseren bestens ausgebildeten Mitarbeitern auch Beratungen und Serviceleistungen.",
        images: [
            "assets/images/calendar-data/16/16-01.jpeg",
          "assets/images/calendar-data/16/16-02.jpeg",
          "assets/images/calendar-data/16/16-03.jpeg",
          "assets/images/calendar-data/16/16-04.jpeg"
        ],
        socialMedia: [
          {
            path: "https://www.expert.at/standorte/expert-chwapil-m35239",
            icon: "globe",
            iconPrefix: "fas",
            title: "Elektro Chwapil GmbH"
          },
        ],
        offers: [{
          title: "Das perfekte \"kleine\" Weihnachtsgeschenk",
          description: "KitchenAid KX403BX\n" +
              "4-teiliges Backset: Glaswaage, Teigrolle, Spatellöffel und 4 Ausstechformen\n" +
              "Euro 39,90\n",
          path: ""
        }],
        lat: 48.19923824769747,
        long: 16.30759359874205
      },
      {
        name: "Kaffeekontor Kolschitzky",
        pos: 17,
        showDate: new Date(2021, 11, 17),
        description: "Das Kaffeekontor Kolschitzky in Wien ist eine Rösterei und Handelshaus für erlesene Kaffeespezialitäten für Gastronomie-, Firmen- und Privatkunden. Im Sinne unseres Namensgebers fördern wir weiterhin die Wiener Kaffeekultur durch Kaffee- und Baristaseminare für private Kaffeegenießer und professionelle Kaffeezubereiter - oder die es werden möchten. Das Unternehmen wird von dem Wiener Kaffeespezialisten Rüdiger Eggers geführt, der auch autorisierter Trainer und Prüfer der SCA (Specialty Coffee Association) ist. Diese Organisation setzt sich weltweit für bessere Bedingungen in der Kaffeewelt ein und auch unsere Kaffees zeichnen sich durch außergewöhnliche Harmonie in der Tasse und durch-und-durch faire Bedingungen für unsere Lieferanten in den Anbauländern aus. Weitere Informationen zu unseren Produkten finden Sie auf unserer Website. ",
        images: [
            "assets/images/calendar-data/17/17-01.jpeg",
            "assets/images/calendar-data/17/17-02.jpeg",
            "assets/images/calendar-data/17/17-04.jpeg",],
        socialMedia: [
          {
            path: "https://kolschitzky.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Kaffeekontor Kolschitzky"
          },
          {
            path: "https://www.facebook.com/KaffeekontorKolschitzky",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          }
        ],
        offers: [],
        lat: 48.197045016728445,
        long: 16.313794790026602
      },
      {
        name: "Konopitzky / Kofferwelt",
        pos: 18,
        showDate: new Date(2021, 11, 18),
        description: "Das Familienunternehmen Konopitzky/Kofferwelt existiert bereits seit 70 Jahren und wurde damals 1948, vom Großvater, als Handtaschengeschäft Konopitzky in Wien gegründet. Seit 2014 wird nun auch der Online Shop Kofferwelt unter der führung des Geschäftsführer Michael Alexander Konopitzky betrieben. Dort konzentriert man sich auf den Schwerpunkt Reisegepäck & Schultaschen mit hochwertigen Marken. Welche Koffergröße kaufen? Die perfekte Schultasche für die Volkschule? Welches Gepäcksstück passt zu welcher Reise? Urlaub mit dem Auto, welches Reisegepäck? In einem eigenen Blog werden all diese Fragen mit Sorgfalt beantwortet. Auch sind wir Sonntags erreichbar für Sie.",
        images: [
          "assets/images/calendar-data/18/18-01.jpeg",
          "assets/images/calendar-data/18/18-02.jpeg",
        ],
        socialMedia: [ {
          path: "https://kofferwelt.at/",
          icon: "globe",
          iconPrefix: "fas",
          title: "Kofferwelt Shop"
        },
          {
            path: "https://www.facebook.com/kofferwelt",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
          {
            path: "https://www.instagram.com/kofferwelt/",
            icon: "instagram",
            iconPrefix: "fab",
            title: "Instagram"
          }],
        offers: [{
          title: "Samsonite Spark SNG Spinner",
          description: "Die neue Generation des Bestsellers Spark ist nun endlich erhältlich. Die Kollektion präsentiert sich in einem frischen Design, ist extrem geräumig und wesentlich leichter. Das bequem zugängliche Deckelfach wird druch einen starken Polypropylen-Rahmen geschützt. \n",
          path: "https://kofferwelt.at/Samsonite-SPARK-SNG-Spinner-55-20-black.html"
        }],
        lat: 48.19901715834948,
        long: 16.30898535660481
      },
      {
        name: "Modellbau Kichert",
        pos: 19,
        showDate: new Date(2021, 11, 19),
        description: "Es war einmal ein winzig kleines, nicht gerade ansehnliches Sportgeschäft in Wien-Penzing. Die Besitzerin, Frau Schlächter, eine alte Dame, die viele Jahre in ihren Beruf gesteckt hatte, wollte ihr geliebtes Geschäft nur an ein verheiratetes Paar übergeben ... und hier fängt unsere Geschichte an. Im Jänner 1964 heirateten Gerlinde und Gerd, um ein kleines Sportgeschäft samt Wohnung im 14. Bezirk in Wien zu übernehmen. Dass daraus einmal ein Familienbetrieb mit 56-jähriger Tradition werden würde, und wir uns heute das älteste Modellbaugeschäft in Wien nennen können, hätte keiner gedacht. Unser Schwerpunkt: Holzmodellbau war eigentlich von Beginn an da, aber erst durch die Entwicklung in den vergangenen 20 Jahren, hin zu Schaumwaffeln und schnell ein fertiges Modell kaufen, ist daraus eine eigene Firmenstrategie geworden. Wir wollen mit unseren Produkten in erster Linie den richtigen Modellbau in seiner Vielfalt fördern. Nachhaltig bauen lernen, verstehen, wie alles funktioniert, und ein paar Sprisserln (so nennen wir liebevoll die Holzleisten) zum Leben erwecken, daran haben wir ganz besondere Freude dran. Wir engagieren uns seit Beginn in der Förderung des Modellbau-Nachwuchses. Kinder und Jugendliche sollen den Modellbau von klein auf erlernen. Das ist uns als Familienbetrieb besonders wichtig.",
        images: [
          "assets/images/calendar-data/19/19-01.jpeg",
          "assets/images/calendar-data/19/19-02.jpeg",
          "assets/images/calendar-data/19/19-03.png",
        ],
        socialMedia: [
          {
            path: "https://www.kirchert.at/shop/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Modellbau Kichert"
          },
        ],
        offers: [
          {
            title: "Laserfish 1.6 Bausatz aus Balsaholz",
            description: "Unser Laserfish 1.6 Elektrosegler Bausatz mit lasergeschnittenen Teilen aus Balsa-, Linden- und Sperrholz ist für Einsteiger sowie für den ambitionierten Hobbymodellflieger geeignet.  Die Tragfläche ist in der Standard Jedelsky Bauweise aufgebaut. ",
            path: "https://www.kirchert.at/shop/2197/laserfish-16-bausatz-cpl"
          }
        ],
        lat: 48.19321454161904,
        long: 16.31230655719337
      },
      {
        name: "XServer.at",
        pos: 20,
        showDate: new Date(2021, 11, 20),
        description: "15 Jahre Erfahrungen im Webhosting\n" +
            "Wir stehen Ihnen bereits seit 2000 als verlässlicher und kompetenter Partner mit unseren Hosting-Produkten zur Seite. Wir verstehen uns als Partner für kleine Webseiten sowie komplexe und anspruchsvolle Shop-Systeme. Gerne stellen wir mit Ihnen gemeinsam das passende Hosting-Wunschpaket zusammen sowie stehen wir Ihnen mit unseren technisch versierten Mitarbeitern jederzeit für Rückfragen zur Verfügung.\n",
        images: [
          "assets/images/calendar-data/20/20-01.jpeg",
        ],
        socialMedia: [
          {
            path: "https://www.xserver.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "XServer.at"
          },
        ],
        offers: [
          {
            title: "Minus 20% Hosting",
            description: "Minus 20% Auf Hosting für ein Jahr bei www.xserver.at mit Gutschein XMAS",
            path: ""
          }
        ],
        lat: 48.19822878187853,
        long: 16.282402857066145
      },
      {
        name: "KFZ Osterbauer",
        pos: 21,
        showDate: new Date(2021, 11, 21),
        description: "In unserem Meisterbetrieb für Kfz-Reparaturen und Fachbetrieb für Autokarosserien ist Ihr Fahrzeug in den besten Händen. \n" +
            "Wir arbeiten in unserer Werkstatt mit modernster, innovativer Technik, die allen Ansprüchen gerecht wird. Bei uns erfährt Ihr KFZ eine kompetente Rundum-Betreuung Größten Wert legen wir zudem auf die persönliche Betreuung unserer Kunden und nehmen uns Zeit für all Ihre Fragen. \n" +
            "Gerne beraten wir Sie daher ausführlich in einem persönlichen Gespräch.\n" +
            "Seit über 40 Jahren stehen wir Ihnen als Familienbetrieb für alle Kfz-Fragen und Reparaturen zur Verfügung.\n" +
            "Kfz-Osterbauer wurde von Kurt Osterbauer im Jahr 1980 gegründet. Im Laufe der Jahre traten beide Söhne als Mechaniker bzw. Spengler in die Firma ein. Sohn, Christian Jezik-Osterbauer, schloss 1992 als jüngster Mechaniker-Meister Wiens seine Ausbildung ab und führt nun den Betrieb weiter. Unterstützt wird er dabei auch weiterhin von seinem Vater Kurt.\n" +
            "In unserem Meisterbetrieb für Kfz-Reparaturen kümmern wir uns zuverlässig und kompetent um alle Reparaturen Ihres KFZs. Dazu zählen auch jegliche Arten von Lack- und Karosseriereparaturen. Außerdem kümmern wir uns um alle Wartungsarbeiten Ihres Autos und sorgen für die gesetzliche §57a-Begutachtung (Pickerl).\n" +
            "Sie wünschen eine Karosserie-Erneuerung oder eine Lackierung Ihres Autos in Ihrer Wunschfarbe? Gerne beraten wir Sie zu allen möglichen Fahrzeugverkleidungen und zum richtigen Lack für Ihr Kfz. Ob Teil- oder Ganzlackierung, ob Airbrush-Technik oder Effektlack, Ihr Fahrzeug erhält professionell und schnell einen neuen Look.\n" +
            "Sie möchten Ihr Fahrzeug aufrüsten? Auch mit der Montage von Zubehör stehen wir Ihnen mit Rat und Tat kompetent zur Seite.\n" +
            "Unser Osterbauer-Team berät Sie gerne.\n",
        images: [
          "assets/images/calendar-data/21/21-01.jpg",
          "assets/images/calendar-data/21/21-02.jpeg",
          "assets/images/calendar-data/21/21-03.jpg",
        ],
        socialMedia: [
          {
            path: "https://www.kfz-osterbauer.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "KFZ Osterbauer"
          },
          {
            path: "https://www.facebook.com/kfzosterbauer/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
        ],
        offers: [
          {
            title: "Wintercheck",
            description: "Bei dem Codewort „JVP14“ -10% auf den Wintercheck, bis 07.01.2022.",
            path: ""
          }
        ],
        lat: 48.19822886365769,
        long: 16.280461957535195
      },
      {
        name: "Die Ameisapotheke",
        pos: 22,
        showDate: new Date(2021, 11, 22),
        description: "Die Ameisapotheke wurde im Juni 2008 als wichtiger Nahversorgungspunkt gegründet.\n" +
            "Der Name soll die Verbindung zum lokalen Standort (die Apotheke liegt direkt über dem Ameisbach) zeigen, aber auch einen Bezug auf den Fleiß und Nutzen der für die Natur wichtigen Ameise setzten.\n" +
            "Die moderne, barrierefrei erreichbare Apotheke setzt ihren Schwerpunkt auf freundliche und kompetente Beratung und Kundenservice.\n" +
            "Unser Motto: „Wir sind für Sie da“.\n" +
            "Ein breites Arzneimittelsortiment und top ausgebildete Fachkräfte runden das Angebot ab.\n",
        images: [
            "assets/images/calendar-data/22/22-01.jpeg",
          "assets/images/calendar-data/22/22-02.jpeg",
          "assets/images/calendar-data/22/22-03.jpg",],
        socialMedia: [
          {
            path: "https://www.ameisapotheke.at/",
            icon: "globe",
            iconPrefix: "fas",
            title: "Die Ameisapotheke"
          },
          {
            path: "https://www.facebook.com/Ameis-Apotheke-KG-402510839843717/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
        ],
        offers: [
          {
            title: "Ingwersirup",
            description:
                "Das perfekte Weihnachtsgeschenk:\n" +
                "Boostern Sie ihr Immunsystem mit unserem hochwertigen Ingwersirup!\n" +
                "Extrem gesund, elegantes Design und in dieser Form exklusiv bei uns in der Ameisapotheke  erhältlich!\n" +
                "\n" +
                "AVP: € 13,50\n",
            path: ""
          }
        ],
        lat: 48.19466532043964,
        long: 16.296939940004446
      },
      {
        name: "Gerst(e)l-Suppe Haus Jona",
        pos: 23,
        showDate: new Date(2021, 11, 23),
        description: "Weihnachten steht vor der Türe - umso schöner ist es, sich selbst und der Gemeinschaft eine Wohltat zu erweisen. Deshalb stellen wir Ihnen heute kein Unternehmen vor, sondern die Spendenaktion Gerst(e)l-Suppe Haus Jona. Dieses Projekt wurde von unserem Bezirksparteiobmann und Nationalratsabgeordneten Wolfgang Gerstl initiiert. Helfen Sie Menschen, die es nicht leicht im Leben haben, ein schönes Weihnachten zu erleben. Anstatt der Gerst(e)l-Suppe werden dieses Jahr Spenden für das in Penzing beheimatete Haus Jona, welches wohnungslosen Menschen hilft, gesammelt. Mit Ihrem Beitrag können Heilbehelfsmittel (beispielsweise spezielle Rollatoren), sowie aktivierende Gruppenunternehmungen und Freizeitgestaltungen zur Therapie finanziert werden. \n" +
            "\n" +
            "Schenken wir Hoffnung und Licht in diesen schwierigen Zeiten!\n",
        images: [
          "assets/images/calendar-data/23/23-01.jpeg",
        ],
        socialMedia: [
          {
            path: "https://www.facebook.com/donate/1140513600111323/",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
        ],
        offers: [],
        lat: 48.19905521181187,
        long: 16.312141010844623
      },
      {
        name: "Junge ÖVP Penzing",
        pos: 24,
        showDate: new Date(2021, 11, 24),
        description: "Wir von der Jungen ÖVP Penzing wünschen Ihnen ein frohes Weihnachtsfest und schöne Feiertage, sowie einen guten Start ins neue Jahr. Ein besonderes Dankeschön gilt den Betrieben, die sich an unserem Adventkalender beteiligt haben und Ihr Unternehmen und Ihre Geschichte mit uns geteilt haben. Wir möchten uns auch für das große Interesse am Adventkalender bedanken. Wir von der JVP Penzing sind überzeugt, auf die Notwendigkeit der Unterstützung des lokalen Handels aufmerksam gemacht zu haben. Gerne besuchen Sie uns weiterhin auf der Website für die idealen Geschenke aus Penzing. \n" +
            "Frohe Weihnachten.\n",
        images: [
            "assets/images/calendar-data/24/24-01.jpeg",
            "assets/images/calendar-data/24/24-02.jpeg",],
        socialMedia: [
          {
            path: "https://www.facebook.com/jvpwien14",
            icon: "facebook",
            iconPrefix: "fab",
            title: "Facebook"
          },
          {
            path: "https://www.instagram.com/jvpwien14",
            icon: "instagram",
            iconPrefix: "fab",
            title: "Instagram"
          }
        ],
        offers: [],
        lat: 48.19908053780457,
        long: 16.311571825386636
      }
    ]
  }
}
