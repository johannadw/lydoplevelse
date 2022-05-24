import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Player from './components/Player/Player';
import QueueToaster from './components/Player/QueueToaster';
import Home from "./components/Home"
import Article from './components/Article';
import ReadArticles from './components/ReadArticles';
import Podcasts from './components/Player/Podcasts';
import Queue from './components/Player/Queue';
import PodcastList from './components/Player/PodcastList';
import { CSSTransition } from 'react-transition-group';
import './App.scss';


function App() {
  let [isPlaying, setIsPlaying] = useState( false )
  let [showPlayer, setShowPlayer] = useState( false )
  let [showToaster, setShowToaster] = useState( false )
  let [queue, setQueue] = useState([{
    id: 9,
    title: "Den bedste skomager i Hollywood",
    writer: "Lasse Winther Jensen",
    theme: "Arbejdsmand",
    date: "24. Marts. 2022",
    teaser: "Den amerikanske filminstruktør Steven Soderbergh har været på forkant med mainstreamfilmens udvikling i tre årtier: fra indiefilm, over Oscar-vindere til Netflix. Trods spillefilmens krise i streamingens tidsalder laver han i dag mere relevante film end nogensinde. ",
    content: "Dn legendariske instruktør Robert Altman havde et fast bonmot til at beskrive det modsætningsfyldte forhold mellem filmbranchen og hans egne kunstneriske visioner: »Jeg laver handsker, de laver sko.« Med en videreførelse af Altmans billede er ingen moderne instruktør så ferm til at lave sko som Steven Soderbergh. Hans vigtigste evne som filmskaber er hans talent for at tilpasse sig branchens produktionsvilkår, så han i et rasende tempo kan lave film, der registrerer verdens og filmmediets hastige forandringer. Soderbergh har lavet film fra slut-80erne og frem til i dag – en periode hvor distributions- og produktionsforholdene har ændret sig mere end på noget andet tidspunkt i moderne filmhistorie. I takt med at Hollywood er blevet revolutioneret af streaming, superhelteuniverser og implosionen af det 20. århundredes monokultur, har han gang på gang genopfundet sig selv og sit forhold til filmmediet. ",
    image: "/assets/images/article9.jpeg",
    src: "/assets/sound/article9.mp3",
    readLoud: true,
    size: "large",
    category: "Kultur",
    type: "oplæst artikel",
    duration: "2 min"
  },
  {
    id: 10,
    title: "De grotesk umage og skummelt identiske",
    writer: "Caroline Albertine Minor",
    theme: "Fotograferet",
    date: "24. Marts. 2022",
    teaser: "Den totale sammensmeltning er en illusion, men en illusion, som mennesket vil gå langt for at opretholde. Mesterfotografen Diane Arbus gennemskuede dette og forsøgte alligevel at nærme sig verden gennem sin linse. ",
    content: "Det første fotografi, der møder én, når man træder ind i udstillingen med den ædruelige titel Diane Arbus: Fotografier 1956-1971, er et selvportræt – udstillingens eneste. I modsætning til den amerikanske fotograf Vivian Maier, der i sine gadefotografier ofte søgte sin egen spejling eller lod sin skygge falde halvt drillende, halvt truende, ind over motivet, holdt Arbus sig helst uden for rammen. Det var i sidste ende de andre, hun var interesseret i. Selvportrættet er taget i 1945, altså 11 år før hun med et symbolsk 1-tal (som et selvindstiftet år 0) nedkradset på et kontaktark beslutter sig for, at hun ikke længere er modefotograf, men kunstner i egen ret. På fotografiet ser vi en ung, gravid Arbus, nøgen, bortset fra et par praktiske underbukser, stå foran en seng med hovedet koket på skrå og den ene hånd løst lukket omkring stativet på det kamera, der i samme nu foreviger hende. Fotografiet er roligt og smukt, men også præget af foruroligende uoverensstemmelse mellem Arbus’ bedøvede ansigtsudtryk og maven, der strutter som et symbol på sundhed og den kontrakt, hun har indgået med fremtiden. ",
    image: "/assets/images/article10.jpeg",
    src: "/assets/sound/article10.mp3",
    readLoud: true,
    size: "small",
    category: "Kultur",
    type: "automatisk oplæst artikel",
    duration: "2 min"
  },
  {
    id: 43,
    title: "Stress",
    teaser: "24 spørgsmål til professoren. Biolog og stressforsker Karen Johanne Pallesen taler om den moderne folkesygdomme med Lone Frank, der i dagens anledning har hjertebanken og åndenød.",
    date: "20. marts 2022",
    duration: "44:09",
    image: "/assets/images/podcast3episode3.jpeg",
    src: "/assets/sound/podcast3episode3.mp3",
    podcast: "24 spørgsmål til professoren",
    type: "podcast"
  },
  ])
  let [currentlyPlaying, setCurrentlyPlaying] = useState([])
  let [previouslyPlayed, setPreviouslyPlayed] = useState([])
  let [playingSpeed, setPlayingSpeed] = useState([
    { id: 0, speed: "0.5 x", selected: false, }, { id: 1, speed: "0.8 x", selected: false, }, { id: 2, speed: "1 x", selected: true, }, { id: 3, speed: "1.2 x", selected: false, }, { id: 4, speed: "1.5 x", selected: false, }, { id: 5, speed: "1.8 x", selected: false, }, { id: 6, speed: "2 x", selected: false, }, { id: 7, speed: "2.5 x", selected: false, }
  ])
  const [articles] = useState( [
    {
      id: 2,
      title: "Valgtæsk i Normandiet",
      writer: "Aske Munck",
      theme: "Reportage",
      date: "24. Marts. 2022",
      teaser: "Et stort flertal stemte på præsident Macron i 2017. Men hans komfortable flertal er forsvundet i tågerne efter De Gule Veste, pandeminedlukninger og kolossale prisstigninger på benzin, el og dagligvarer. Ikke mindst i Normandiet, hvor De Gule Vestes oprør begyndte. ",
      content: "EVREUX – »Macron? Det er ikke engang værd at tale om ham. For mange af os eksisterer han ikke længere.«Gabriel – en trind og godmodig gadefejer i midten af 50erne – skutter sig i den fugtige normanniske forårskulde, lukker den øverste knap i sin orange refleksdragt og peger over mod hegnet foran den lille skole i rue Victor Hugo i hjertet af de normanniske by Evreux. Her hænger plakaterne med de 12 kandidater, der stiller op til søndagens første runde af det franske præsidentvalg på de obligate metalstandere. De fleste ansigter og slogans er stadig intakte. Undtagen præsident Macrons. Hans ansigt er møjsommeligt kradset væk, så der kun er nogle flossede striber tilbage. ",
      image: "/assets/images/article2.jpeg",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "large",
      category: "Samfund",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },
    {
      id: 1,
      title: "Det finske vindue",
      writer: "Arne Hardis",
      theme: "NATO-medlemskab",
      date: "24. Marts. 2022",
      teaser: "Efter mere end 100 år i spændingsfeltet mellem russiske og tyske interesser tager Finland formentlig det afgørende skridt mod vest. ",
      content: "Det er en sand hundredeårshændelse i finsk historie, hvis landet som ventet søger optagelse i NATO dette forår. Statsminister Sanna Marin har bebudet en hurtig afgørelse, og det rummer sin egen dybere pointe. Ingen folkeafstemning eller anden risikabel forsinkelse. Hvis ansøgningen sendes afsted, skal Finland hurtigst muligt have beskyttelse af Alliancens musketered med tilhørende atomparaply. Optagelse af Finland vil også være historisk i europæisk sammenhæng og kan indskrives i det opgør om nationer og folkeslag placeret i den livsfarlige zone mellem det tsaristiske Rusland og det kejserlige Tyskland, som var en vigtig, men lidt forglemt del af Første Verdenskrig. ",
      image: "/assets/images/article1.jpeg",
      src: "/assets/sound/article1.mp3",
      readLoud: true,
      size: "small",
      category: "Samfund",
      type: "oplæst artikel",
      duration: "2 min",
    },
    {
      id: 4,
      title: "Europa sætter foden ned",
      writer: "Ole Nyeng",
      theme: "Opgør",
      date: "24. Marts. 2022",
      teaser: "To dage efter at Viktor Orbán vandt en kæmpesejr ved det ungarske valg, smækker EU pengekassen i over for »Putins bedste ven i Europa«. En årelang strid om retssamfund og værdier nærmer sig sit klimaks. ",
      content: "På selvsamme dag som de frygtelige billeder af russiske styrkers massakrer mod civile i Butja, Ukraine, begyndte at strømme ud til en chokeret verden, vandt Viktor Orbán, af mange kaldt »Putins bedste ven i Europa«, en knusende valgsejr og sikrede sig endnu en periode, sin femte, som Ungarns leder. I et opgør med en samlet opposition på seks partier – fra socialister til konservative – sikrede Orbáns Fidesz-parti sig 53 procent af stemmerne mod oppositionens 35. Og på grund af de skævvredne valgregler vil Orbán og hans parti fortsat have de to tredjedele af sæderne i parlamentet, der gør dem i stand til at ændre forfatningen på en eftermiddag, hvis de ønsker det – altså uindskrænket magt i de næste fire år. ",
      image: "/assets/images/article4.jpeg",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "small",
      category: "Samfund",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },
    {
      id: 3,
      title: "Man må gøre noget!",
      writer: "Martin Krasnik",
      theme: "Nekrolog",
      date: "24. Marts. 2022",
      teaser: "Anne Knudsen var et overdådigt, livskraftigt og udfordrende menneske. Hun skrev og lavede avis, som hun var: umiskendeligt original og helt sin egen. ",
      content: "ANNE Knudsens aftryk er alle vegne i Weekendavisen. Et af de mest konkrete kan hver uge ses i lederartiklen, som formes efter det knudsenske akrostikon. Dette retoriske greb forklarer ikke, hvordan hun formåede at lave to ledere så hurtigt: Første leder skrev hun på omkring tre kvarter torsdag formiddag efterfulgt af frokost bestående af to retter medbragt hjemmefra i en treetagers madkasse plus et stykke chokolade, og så leder nummer to på en halv times tid. Hun gjorde det ikke nemmere for sig selv ved at forme sine ledere, så første ord i hvert afsnit tilsammen danner en sætning. Hendes sidste leder som chefredaktør fra nytåret 2016/17 handlede om, at vi ikke må bilde os ind, at krigen aldrig vil komme tilbage. Begyndelsesordene dannede sætningen FREDEN ER IKKE EN SELVFØLGELIGHED GODT NYTÅR. ",
      image: "/assets/images/article3.jpeg",
      src: "/assets/sound/article3.mp3",
      readLoud: true,
      size: "large",
      category: "Samfund",
      type: "oplæst artikel",
      duration: "2 min"
    },
    {
      id: 9,
      title: "Den bedste skomager i Hollywood",
      writer: "Lasse Winther Jensen",
      theme: "Arbejdsmand",
      date: "24. Marts. 2022",
      teaser: "Den amerikanske filminstruktør Steven Soderbergh har været på forkant med mainstreamfilmens udvikling i tre årtier: fra indiefilm, over Oscar-vindere til Netflix. Trods spillefilmens krise i streamingens tidsalder laver han i dag mere relevante film end nogensinde. ",
      content: "Dn legendariske instruktør Robert Altman havde et fast bonmot til at beskrive det modsætningsfyldte forhold mellem filmbranchen og hans egne kunstneriske visioner: »Jeg laver handsker, de laver sko.« Med en videreførelse af Altmans billede er ingen moderne instruktør så ferm til at lave sko som Steven Soderbergh. Hans vigtigste evne som filmskaber er hans talent for at tilpasse sig branchens produktionsvilkår, så han i et rasende tempo kan lave film, der registrerer verdens og filmmediets hastige forandringer. Soderbergh har lavet film fra slut-80erne og frem til i dag – en periode hvor distributions- og produktionsforholdene har ændret sig mere end på noget andet tidspunkt i moderne filmhistorie. I takt med at Hollywood er blevet revolutioneret af streaming, superhelteuniverser og implosionen af det 20. århundredes monokultur, har han gang på gang genopfundet sig selv og sit forhold til filmmediet. ",
      image: "/assets/images/article9.jpeg",
      src: "/assets/sound/article9.mp3",
      readLoud: true,
      size: "small",
      category: "Kultur",
      type: "oplæst artikel",
      duration: "2 min"
    },
    {
      id: 10,
      title: "De grotesk umage og skummelt identiske",
      writer: "Caroline Albertine Minor",
      theme: "Fotograferet",
      date: "24. Marts. 2022",
      teaser: "Den totale sammensmeltning er en illusion, men en illusion, som mennesket vil gå langt for at opretholde. Mesterfotografen Diane Arbus gennemskuede dette og forsøgte alligevel at nærme sig verden gennem sin linse. ",
      content: "Det første fotografi, der møder én, når man træder ind i udstillingen med den ædruelige titel Diane Arbus: Fotografier 1956-1971, er et selvportræt – udstillingens eneste. I modsætning til den amerikanske fotograf Vivian Maier, der i sine gadefotografier ofte søgte sin egen spejling eller lod sin skygge falde halvt drillende, halvt truende, ind over motivet, holdt Arbus sig helst uden for rammen. Det var i sidste ende de andre, hun var interesseret i. Selvportrættet er taget i 1945, altså 11 år før hun med et symbolsk 1-tal (som et selvindstiftet år 0) nedkradset på et kontaktark beslutter sig for, at hun ikke længere er modefotograf, men kunstner i egen ret. På fotografiet ser vi en ung, gravid Arbus, nøgen, bortset fra et par praktiske underbukser, stå foran en seng med hovedet koket på skrå og den ene hånd løst lukket omkring stativet på det kamera, der i samme nu foreviger hende. Fotografiet er roligt og smukt, men også præget af foruroligende uoverensstemmelse mellem Arbus’ bedøvede ansigtsudtryk og maven, der strutter som et symbol på sundhed og den kontrakt, hun har indgået med fremtiden. ",
      image: "/assets/images/article10.jpeg",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "small",
      category: "Kultur",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },
    {
      id: 11,
      title: "Det danske festritual",
      writer: "Anne Knudsen",
      theme: "Festformer",
      date: "24. Marts. 2022",
      teaser: "»Danskerne holder efter min bedste overbevisning hverken flere eller færre fester end de fleste andre folkeslag. Men vi har nok et større repertoire af helt forskellige fester end de fleste andre.« Kort før sin død skrev Anne Knudsen om de måder, danskerne fester på. Vi bringer essayet her. ",
      content: "Det er nemt at få den tanke, at fest i Danmark kan sammenfattes som den mest berømte danske film fra 2020: Druk. Der findes en dansk morsomhed, der lyder sådan her: »Man kan skam godt feste uden alkohol.« Stilhed. »Men det bliver ikke det samme.« Latter. I danskernes egen bevidsthed skal der drikkes alkohol, hvis det skal være festligt, og vi tror selv, at vi er blandt de mest alkoholiserede folkeslag i verden. Den overraskende sandhed er, at de 9,5 liter ren alkohol, hver voksen dansker statistisk set hælder ned hvert år, kun gør os til nummer 16 i rækken af drikfældige europæiske befolkninger. Vi drikker mindre end både franskmændene, briterne, hollænderne, østrigerne og spanierne. ",
      image: "/assets/images/article11.jpeg",
      src: "/assets/sound/article11.mp3",
      readLoud: true,
      size: "large",
      category: "Kultur",
      type: "oplæst artikel",
      duration: "2 min"
    },
    {
      id: 12,
      title: "Geniets forpligtelser",
      writer: "Brian Nygaard",
      theme: "Umættelig",
      date: "24. Marts. 2022",
      teaser: "Specialisternes tid er ved at være forbi, fordi den bedste rytter i verden ikke lader sig begrænse. Tadej Pogačar er cykelsportens svar på Mozart. ",
      content: "På en måde så det forkert ud, selvom det uden skyggen af berettiget tvivl indrammede situationen helt tydeligt. På de mest krævende meter af brostensmuren ved Paterberg i Flandern Rundt sad den unge vinder af de seneste to års Tour de France og pinte, hvad der må være de første smerterynker ind i det unge ansigt på et af de mest lysende klassikertalenter i nyere tid. Der er en usynlig tråd mellem to cykelryttere, når et løb bliver afgjort. Det er besnærende at tro, at den blot er et spørgsmål om afstand – få meter, måske, og dermed øjensynligt ingenting i et løb på over 250 kilometer. Men den er en udmåling af rytternes yderste grænser og på den måde ekstrem og lige så afgrundsdyb som forskellen på et funklende resultat og et knusende nederlag. Vinderen kapper snoren, taberen slipper og falder bort. Pogačar har med et genis lethed ført kniven så ofte, at hans legendestatus i sporten allerede er blevet stadfæstet, til trods for at han kun er 23 år gammel. ",
      image: "",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "small",
      category: "Kultur",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },
    {
      id: 17,
      title: "De troløse",
      writer: "Marta Sørensen",
      theme: "Besindelse",
      date: "24. Marts. 2022",
      teaser: "Gud står for alt det gode i vestlig civilisation, men tro på ham? Det kan vi ikke, siger de konservative forfattere Mikael Jalving og Rasmus Ulstrup. ",
      content: "Alvorlige mænd, der står over for en alvorlig tro. Sådan lød titlen på en artikel fra det canadiske religiøst-konservative medie Convivium, der sidste år samlede en række tænkere, næsten alle konservative, om deres manglende tro på Gud. Altså, den kristne. Den alvorlige gruppe var enige om – lige fra historikeren Tom Holland over psykologiprofessoren Jordan Peterson til den kontroversielle politolog Charles Murray – at kristendommen var en uundværlig moralsk ramme, moder til den exceptionelle forestilling om tilgivelse, sjælen i den vestlige civilisation. Men ligefrem tro på, at Jesus var Guds søn, der genopstod for vores synder? Her stod de fleste af. De var i hvert fald ubekvemme og forlegne ved at tage en personlig frelser til sig. Som Convivium skrev, kunne de konservative godt sige, at vi har brug for Kristus, men ikke, at jeg har brug for ham. ",
      image: "/assets/images/article17.jpeg",
      src: "/assets/sound/article17.mp3",
      readLoud: true,
      size: "large",
      category: "Bøger",
      type: "oplæst artikel",
      duration: "2 min"
    },
    {
      id: 18,
      title: "Lige i ansigtet",
      writer: "Marta Sørensen",
      theme: "Kontroversen",
      date: "24. Marts. 2022",
      teaser: "Hvorfor reagerede Will Smith med en lussing, da Chris Rock fornærmede hans kone? Måske rummer Smiths selvbiografi svaret. ",
      content: "Nogle mennesker kan bare ikke tage en joke. Men når man læser de første par kapitler af Will Smiths selvbiografi, der udkom i november, skulle man ikke tro, at den 53-årige skuespiller, musiker og producer var en af dem. I begyndelsen kredser Smiths historie, med den dobbeltbundede titel Will, om hans konstante trang til at underholde, få folk til at grine, skabe god stemning, holde facaden, være en pleaser. Sådan klarede Smith sig gennem en barndom med en voldelig far, sådan blev han populær i skolen og nabolaget på trods af fysisk akavethed, sådan har han tjent millioner af dollar på hitsingler og blockbusterfilm. ",
      image: "/assets/images/article18.jpeg",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "small",
      category: "Bøger",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },
    {
      id: 19,
      title: "Tavshedens magt, stumhedens øjeblik",
      writer: "Elisabeth Skou Pedersen",
      theme: "Togsproget stilhed",
      date: "24. Marts. 2022",
      teaser: "Den, der fortæller historien, har også magten over dem, der optræder i den. Den, der ikke har magt, må tie. Men Monika Fagerholm og Marisha Rasi-Koskinen lader tavsheden tale i deres romaner. Weekendavisen har mødt de to finske forfattere ved et historisk vendepunkt for det nordiske land med den lange grænse mod Rusland. ",
      content: "Der er noget, der nager den finlandssvenske forfatter Monika Fagerholm. »Jeg har en sang af Mikael Wiehe på hjernen, hvor en linje lyder 'med freden kommer stilheden'. Og den irriterer mig så forbandet netop nu!« siger hun, da Weekendavisen møder hende i Dansk Forfatterforenings lokaler på Christianshavn. Da Rusland angreb Ukraine 24. februar, var hun i gang med at skrive et radioprogram om stilhed og tavshed – tystnad, som de siger på svensk. Nu er præmissen forandret. »Alt det kommer til at blive vendt på hovedet. Hvad vi burde have talt om, og hvad vi nu ikke kan tale om. Hvordan bliver tavshedens kultur?« ",
      image: "/assets/images/article19.jpeg",
      src: "/assets/sound/article19.mp3",
      readLoud: true,
      size: "small",
      category: "Bøger",
      type: "oplæst artikel",
      duration: "2 min"
    },

    {
      id: 20,
      title: "Når feberen falder",
      writer: "Arne Hardis",
      theme: "Hordemenneske",
      date: "24. Marts. 2022",
      teaser: "En mand af folket blev udstødt af folket, da den folkekære digter skiftede partibog. Harald Bergstedts sidste, upublicerede digt er et passende punktum i historien om en af dansk litteraturs særeste skæbner og hans ensomme livsaften. ",
      content: "n sommerdag i 1965 opsøgte den unge militærnægter Henning Sørensen Harald Bergstedt i hans hjem, få uger før forfatteren døde knap 87 år gammel. De to havde mødtes én gang tidligere, Bergstedt havde siddet ensom på soldækket på Storebæltsfærgen og læst i modstandsavisen Information. Den gamle mand havde dengang på færgen været meget glad for, at den unge mand ikke bare havde genkendt ham, men ligefrem henvendt sig med et høfligt »God dag, er De ikke Hr. Harald Bergstedt?« Digteren, partipennen, provinsens og folkelighedens besynger, den socialdemokratiske institution Harald Bergstedt havde i den gode tid været en af nationens mest elskede digtere. Alene børnesangene. »Solen er så rød, mor« fra 1915. »Jeg ved en lærkerede«, 1921. »Hør den lille stær«, 1927. Alle digtet længe før den fatale omvendelse, der slugte Bergstedts eftermæle og med ét slag gjorde ham til en meget ensom mand, men jo ikke kunne gøre det af med sangene. ",
      image: "/assets/images/article20.jpeg",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "large",
      category: "Bøger",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },
    {
      id: 25,
      title: "Atomkrig 2.0",
      writer: "Peter Harmsen",
      theme: "Koldkrigshistorie",
      date: "24. Marts. 2022",
      teaser: "Kriser var der mange af, dengang Rusland hed Sovjetunionen, og ingen af dem endte med dommedag. Det kan give anledning til håb i det aktuelle opgør om Ukraine, men måske er det en falsk tryghedsfornemmelse. ",
      content: "Atomkrig mellem Rusland og NATO er en af de skræmmende muligheder, der spøger i debatten om potentielle konsekvenser af konflikten i Ukraine. Spørgsmålet er, om det overhovedet er et realistisk scenarie? Griber man tilbage i historien efter svar, er der umiddelbart anledning til håb. Fra Anden Verdenskrigs afslutning frem til omkring 1990 var kriser mellem øst og vest et regelmæssigt tilbagevendende fænomen, og hver eneste gang blev det nukleare ragnarok afværget. Det var nervepirrende, men det endte trods alt godt. Så skal vi slå koldt vandt i blodet? Skal vi regne med, at russerne og de vestlige kernevåbenmagter vil være drevet af den samme logik og nok skal sørge for at undgå gensidig tilintetgørelse? ",
      image: "/assets/images/article25.jpeg",
      src: "/assets/sound/article25.mp3",
      readLoud: true,
      size: "large",
      category: "Ideer",
      type: "oplæst artikel",
      duration: "2 min"
    },
    {
      id: 26,
      title: "Vandets fortælling om os",
      writer: "Tine Eiby",
      theme: "Elementært",
      date: "24. Marts. 2022",
      teaser: "Mennesket har sat sig på Jorden, siger vi, men glemmer ofte, at vi selv er formet af naturen. Vi er havvæsner, der er gået på land, og vand glider stadig som en understrøm gennem menneskers liv. ",
      content: "Lægen kiggede ned på mig, forskanset bag operationsmaske, hårnet og briller. Jeg var bedøvet fra lige under hjertet og ned og ellers anspændt og vågen med den del af kroppen, der stadig var under min kontrol. »Nu tager vi vandet,« sagde han og nikkede rundt til det hvidkitlede hold omkring ham. Og det skal jeg love for. Der lød en voldsom sprutten af vand, der har travlt med at komme af sted. »Det lyder som et vandrør, der er sprunget,« gispede jeg. »Netop,« svarede lægen. Og så gik de i gang med at forløse min baby ved kejsersnit. Stål, tang, vand, pakninger – og blod. Det forekom mig alt sammen overraskende basalt, når man tænker på, at de var ved at forløse det komplicerede, elegante stykke liv, som et øjeblik senere blev plantet i mine arme og i dag er en af mine granvoksne sønner. ",
      image: "/assets/images/article26.jpeg",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "large",
      category: "Ideer",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },
    {
      id: 27,
      title: "Den grimme sandhed",
      writer: "Anders Boas",
      theme: "Tabu",
      date: "24. Marts. 2022",
      teaser: "Vi taler helst ikke om det, men udseendet spiller en stor rolle for folks muligheder i livet. Er det på tide at behandle skønhed som en kilde til ulighed på linje med køn og race? ",
      content: "Fra tid til anden eksploderer den offentlige debat i forargelse, fordi nogen har kommenteret en kendt persons søde smil eller kønne øjne. På en måde forstår man godt opstandelsen, for hvem har lyst til at blive reduceret til sin krop eller sit ansigt? Men der er også noget paradoksalt i, at vi taler så lidt om, hvordan vi ser ud, når vores sanseapparat ser ud til at være overordentligt optaget af netop dét. Vi danner instinktivt et indtryk af en persons udseende, så snart vi møder dem. Og selvom vi har vores egen personlige smag, når det gælder skønhed, så er der også nogle klare mønstre i, hvem der generelt opfattes som mere eller mindre attraktive. Ved at bede en række mennesker om at vurdere en persons udseende kan man således nå frem til en slags gennemsnitlig skønhedsrating, som ser ud til at spille en rolle i et væld af ganske afgørende beslutninger. Udseendet ser blandt andet ud til at påvirke, hvem der ansættes i en stilling, hvilke politikere der vælges til vigtige poster, og om en person findes skyldig i en forbrydelse. ",
      image: "/assets/images/article27.jpeg",
      src: "/assets/sound/article27.mp3",
      readLoud: true,
      size: "large",
      category: "Ideer",
      type: "oplæst artikel",
      duration: "2 min"
    },
    {
      id: 28,
      title: "Diktatorfælden",
      writer: "Anders Haubart Madsen",
      theme: "Unaturligt",
      date: "24. Marts. 2022",
      teaser: "På længere sigt accepterer vores stenalderhjerner ikke magtsyge ledere, argumenterer politolog Brian Klaas i en ny bog om magtens natur. Derfor vil Putin næppe overleve sine fejlslutninger i Ukraine. ",
      content: "Demokrater har ikke en chance mod autokrater. Mens ledere i transparente systemer konstant står til ansvar over for vælgerne, kan diktatorer fremstå som stærke og fremsynede, fordi de ikke skal bekymre sig om det næste valg. Sådan lyder en sejlivet myte, der er ved at blive aflivet under krigen i Ukraine, siger den amerikanske politolog Brian Klaas. Putin er faldet i »diktatorfælden«, skrev han i det amerikanske magasin The Atlantic i sidste måned. I mere end et årti har Klaas interviewet despoter over hele verden, og i en ny bog uddyber han sine teorier om korrupte ledere med forskning i magtens natur. Han er professor i global politik ved University College London, og i bogen Corruptible: Who Gets Power and How It Changes Us kortlægger han menneskehedens komplicerede forhold til ledelse – og hvorfor det ofte ender galt for de mest egenrådige på de ledende poster. ",
      image: "/assets/images/article28.jpeg",
      src: "/assets/sound/automatisk_oplaest.mp3",
      readLoud: false,
      size: "large",
      category: "Ideer",
      type: "automatisk oplæst artikel",
      duration: "2 min"
    },

  ])
  const [podcasts] = useState( [
    {
      id: 32,
      name: "Avistid",
      theme: "Podcast",
      teaser: "I podcasten Avistid, vender Martin Krasnik ugens mest presserende problemstillinger. Det er lyden af Weekendavisen. Lyt med hver fredag",
      image: "/assets/images/podcast1.png",
      episodes: [
        {
          id: 33,
          title: "Kristian Leth: 'Jeg har forsøgt ikke at skrive denne her historie i rigtig lang tid'",
          teaser: "Kristian Leth er gået ind i erindringens tåge for at finde sin barndom, hvor noget manglede. Hans far.",
          date: "31. Marts 2022",
          duration: "32:05",
          image: "/assets/images/podcast1episode1.jpeg",
          src: "/assets/sound/podcast1episode1.mp3",
          podcast: "Avistid",
          type: "podcast"
        },
        {
          id: 34,
          title: "Politisk brug af paragraf om landsforræderi",
          teaser: "Da Claus Hjort Frederiksen gæstede Avistid i september 2020, blev hans udtalelser halvandet år senere en del af en alvorlig anklage om landsforræderi. Nu er han tilbage i studiet.",
          date: "24. Marts. 2022",
          duration: "27:09",
          image: "/assets/images/podcast1episode2.jpeg",
          src: "/assets/sound/podcast1episode2.mp3",
          podcast: "Avistid",
          type: "podcast"
        },
        {
          id: 35,
          title: "'Kyiv er i mit hjerte'",
          teaser: "Ukraines hovedstad er ved at blive omringet af Rusland. Mens andre ukrainske byer bombarderes voldsomt, tænker de fleste på, hvad der nu skal ske med Kyiv.",
          date: "18. Marts 2022",
          duration: "32:01",
          image: "/assets/images/podcast1episode3.jpeg",
          src: "/assets/sound/podcast1episode3.mp3",
          podcast: "Avistid",
          type: "podcast"
        },
      ],
    },
    {
      id: 36,
      name: "Røverhistorier",
      theme: "Ny sæson",
      teaser: "Mafiaen er ikke Marlon Brando og missekatte, som vi det kender fra The Godfather-filmene. Mafiaen er meget vildere, mere kedelig, voldsom og altopslugende. Journalist Morten Beiter har brugt meste af sit liv på at forstå fænomenet. Anden sæson af Røverhistorier går tæt på de gamle italienske mafiaers myter, opståen og udvikling from til i dag.",
      image: "/assets/images/podcast2.png",
      episodes: [
        {
          id: 37,
          title: "Kapitel I: Ymer",
          teaser: "Alle organisationer med respekt for sig selv har en skabelsesmyter. De italienske mafiaer har endda flere at vælge imellem. Men alle handler de om at nedstamme fra noget ædelt.",
          date: "21. december 2021",
          duration: "44:14",
          image: "/assets/images/podcast2episode1.jpeg",
          src: "/assets/sound/podcast2episode1.mp3",
          podcast: "Røverhistorier",
          type: "podcast"
        },
        {
          id: 38,
          title: "Kapitel II: De Smukke",
          teaser: "Den første mafia opstod i sprækkerne mellem den nye og gamle verden, da feudalsamfundet gik i opløsning, og fremtiden lod vente på sig.",
          date: "21. december 2021",
          duration: "42:16",
          image: "/assets/images/podcast2episode2.jpeg",
          src: "/assets/sound/podcast2episode2.mp3",
          podcast: "Røverhistorier",
          type: "podcast"
        },
        {
          id: 39,
          title: "Kapitel III; Blæksprutter",
          teaser: "Den sicilianske mafia, vi kender i dag, begyndte for alvor at blive synlig i tiden mellem Italiens samling og Anden Verdenskrig. Men først blev den erklæret for udryddet af Mussolini.",
          date: "21. december 2021",
          duration: "1:00:17",
          image: "/assets/images/podcast2episode3.jpeg",
          src: "/assets/sound/podcast2episode3.mp3",
          podcast: "Røverhistorier",
          type: "podcast"
        },
      ]
    },
    {
      id: 40,
      name: "24 spørgsmål til professoren",
      theme: "Podcast",
      teaser: "Videnskabsjournalist og ph.d. Lone Frank har hver uge en førende dansk forsker i studiet til samtale og videnskabelig debat. Nyt afsnit hver mandag.",
      image: "/assets/images/podcast3.png",
      episodes: [
        {
          id: 41,
          title: "Verden bliver den samme, bare værre",
          teaser: "24 spørgsmål classic. Hvad ved vi egentil om, hvordan katastrofer påvirker samfundet? Antropolog Kristoffer Albris fortæller om hundrede års katastrofeforskning.",
          date: "4. april 2022",
          duration: "46:20",
          image: "/assets/images/podcast3episode1.jpeg",
          src: "/assets/sound/podcast3episode1.mp3",
          podcast: "24 spørgsmål til professoren",
          type: "podcast"
        },
        {
          id: 42,
          title: "Livet er data",
          teaser: "24 spørgsmål classic. Fysiker Sune Lehmann drømmer om at kortlægge Danmarks sociale opdeling i mange parallelle samfund - via Facebook.",
          date: "28. marts 2022",
          duration: "53:34",
          image: "/assets/images/podcast3episode2.jpeg",
          src: "/assets/sound/podcast3episode2.mp3",
          podcast: "24 spørgsmål til professoren",
          type: "podcast"
        },
        {
          id: 43,
          title: "Stress",
          teaser: "24 spørgsmål til professoren. Biolog og stressforsker Karen Johanne Pallesen taler om den moderne folkesygdomme med Lone Frank, der i dagens anledning har hjertebanken og åndenød.",
          date: "20. marts 2022",
          duration: "44:09",
          image: "/assets/images/podcast3episode3.jpeg",
          src: "/assets/sound/podcast3episode3.mp3",
          podcast: "24 spørgsmål til professoren",
          type: "podcast"
        },
      ]
    },
  ])
  const [navigation, setNavigation] = useState( false )
  const [profileNav, setProfileNav] = useState( false )

  let audio = document.getElementById("audio")

  // Play the audio
  function playAudio() {
    audio.current.play()
  }

  // Pause the audio
  function pauseAudio() {
    audio.current.pause()
  }

  // Add item to queue state and show QueueToaser
  function addToQueue( item )  {
      setQueue( ( queue ) => ( [...queue, item] ) )
      setShowToaster(true)
  }

  // Remove 1 item from queue
  function removeFromQueue( item ) {
    let newQueue = queue.filter( newQueueItem => newQueueItem.id !== item.id );
    setQueue(newQueue);
  }
  
  // Remove all items from queue
  function resetQueue() {
    setQueue([])
  }

  // On click, play item from queue by removing it from the queue array and saving it as the currently playing
  function playFromQueue( item ) {
    onPlay( item )
    removeFromQueue( item )
  }

  // When playing the previous audio file, remove that item from the previouslyPlayed array
  function removeLastPlayed () {
    let newPrevPlayed = previouslyPlayed.filter( (element, index) => index < previouslyPlayed.length - 1);
    setPreviouslyPlayed(newPrevPlayed)
  }

  // When playing the next audio file, remove the item that was currently playing
  function resetCurrentlyPlaying() {
    setCurrentlyPlaying([])
    return currentlyPlaying
  }

  // If some thing is already playing, empty the currentlyPlaying array and push the new item to that array
  // If nothing was playing before, push the item to the currentlyPlaying array, show the player and start playing the audio
  function onPlay( item ) {
    if (currentlyPlaying[0]) {
     let emptyCurrentlyPlaying = []
     setCurrentlyPlaying([...emptyCurrentlyPlaying, item])
     setShowPlayer(true)
     setIsPlaying(true)
    } else {
      setCurrentlyPlaying([...currentlyPlaying, item])
      setShowPlayer(true)
      setIsPlaying(true)
    }
  }

  // On click, play the last item form the previouslyPlayed array and remove from that array
  function playPrev () {
    if (previouslyPlayed.length >= 1) {
      onPlay( previouslyPlayed[previouslyPlayed.length - 1] )
      removeLastPlayed();
    } else {
      console.log("TODO - restart current audio")
    }
  }

  // If the queue array is not empty: on click, play the first item from the queue array, push it to the previouslyPlayed array and remove from the queue array
  // If the queue array is empty: reset the audio player and the currently playing state
  function playNext ( item ) {
    setPreviouslyPlayed([...previouslyPlayed, item])
    if (queue.length >= 1) {
      resetCurrentlyPlaying()
      onPlay( queue[0] )
      removeFromQueue( queue[0] )
    }
    if (queue.length == 0) {
      setShowPlayer(false)
      setIsPlaying(false)
      resetCurrentlyPlaying()
    }
  }

  // Change the current selected playing speed on click
  function togglePlayingSpeed ( clickedItem ) {
    if (clickedItem.selected == true ) {
      // nothing happens
      console.log("already selected")
    } else {
      // reset currently selected playing speed to false (update playingSpeed state)
      let id = playingSpeed.findIndex( item => item.selected === true )
      if (id > -1) {
        let resetSpeed = [...playingSpeed];
        resetSpeed[id] = {
          ...resetSpeed[id],
          selected: false
        }
        // set newly selected playing speed to true (update playingSpeed state)
        let index = resetSpeed.findIndex( item => item.id === clickedItem.id)
        if (index > -1) {
          let newSpeed = [...resetSpeed]
          newSpeed[index] = {
            ...newSpeed[index],
            selected: true
          }
          setPlayingSpeed(newSpeed)
        }
      }
    }
  }

  // Check if an audio item is part of the queue array
  // If true, the added to queue icon is being shown
  function checkInQueue( item ) {
    const isInQueue = queue.some( queueItem => {
      if(queueItem.id == item.id) {
        return true
      }
      return ""
    } )
    return isInQueue
  }

  // Find the current playingSpeed (initial is 1x)
  let currentSpeed = playingSpeed.filter(speed => speed.selected === true)

  return (
    <div className="App">
      <Header navigation={ navigation } setNavigation={ setNavigation } profileNav={ profileNav } setProfileNav={ setProfileNav } />
      { isPlaying 
        ? <audio  id="audio"  
                  src={ currentlyPlaying[0].src }   
                  controls={ false }   
                  preload="auto"   
                  muted={ false }   
                  autoPlay={ true }  onEnded={ () => playNext() } ></audio>  
        : '' }

      <Routes>
          <Route path="/" element={ <Home articles={ articles } /> } />
          <Route path="/article/:id" element={ <Article articles={ articles } 
                                                        onShowPlayer={ () => setShowPlayer( true ) } 
                                                        onShowToaster={ () => setShowToaster( true ) }
                                                        queue={ queue } 
                                                        onPlay={ onPlay }
                                                        addToQueue={ addToQueue }
                                                        checkInQueue={ checkInQueue } /> } />
          <Route path="oplaeste-artikler" element={ <ReadArticles articles={ articles } 
                                                                  onShowPlayer={ () => setShowPlayer( true ) } 
                                                                  onShowToaster={ () => setShowToaster( true ) }
                                                                  addToQueue={ addToQueue }
                                                                  queue={ queue } 
                                                                  onPlay={ onPlay }
                                                                  checkInQueue={ checkInQueue } /> } />
          <Route path="podcasts" element={ <Podcasts podcasts={ podcasts } queue={ queue } /> } />
          <Route path="podcasts/:id" element={ <PodcastList podcasts={ podcasts } 
                                                            onShowPlayer={ () => setShowPlayer( true ) }
                                                            onShowToaster={ () => setShowToaster( true ) }
                                                            addToQueue={ addToQueue }
                                                            queue={ queue }
                                                            onPlay={ onPlay }
                                                            checkInQueue={ checkInQueue } /> } />
          <Route path="ko" element={ <Queue currentlyPlaying={ currentlyPlaying[0] } 
                                            isPlaying={ isPlaying } 
                                            setIsPlaying={ setIsPlaying } 
                                            removeFromQueue={ removeFromQueue }
                                            resetQueue={ resetQueue }
                                            queue={ queue }
                                            playFromQueue={ playFromQueue }
                                            setQueue={ setQueue } /> } />
      </Routes>

      {/* Show toaster when item is added to queue */}
      { showToaster &&  <CSSTransition in={ showToaster } timeout={500} classNames="toaster-queue" >
                          <QueueToaster onShowToaster={ () => setShowToaster(false) } showPlayer={ showPlayer } />
                        </CSSTransition> }

      {/* Show player when an audio file is started */}
      { showPlayer && !navigation && !profileNav 
          ? <CSSTransition in={ showPlayer } timeout={200} classNames="toaster-player" >
              <Player isPlaying={ isPlaying } 
                      onTogglePlaying= { () => setIsPlaying(!isPlaying) }
                      articles={ articles } 
                      onHidePlayer={ () => {setShowPlayer(false); pauseAudio()} }
                      currentlyPlaying={ currentlyPlaying[0] }
                      playNext={ playNext }
                      playPrev={ playPrev }
                      playingSpeed={ playingSpeed }
                      togglePlayingSpeed={ togglePlayingSpeed }
                      audio={ audio } 
                      playAudio={playAudio}
                      pauseAudio={pauseAudio}
                      currentSpeed={ currentSpeed[0] } /> 
            </CSSTransition>
        : "" }
    </div>
  )
}

export default App;