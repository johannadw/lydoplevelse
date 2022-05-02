import { useEffect, useState } from 'react';
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
      readLoud: true,
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
      readLoud: true,
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
      readLoud: true,
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
      readLoud: true,
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
      readLoud: true,
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
      readLoud: true,
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
      readLoud: true,
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
      readLoud: true,
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
  const [navigation, setNavigation] = useState(false)
  const [profileNav, setProfileNav] = useState(false)

  let audio = document.getElementById("audio")

  function playAudio() {
    audio.current.play()
  }
  function pauseAudio() {
    audio.current.pause()
  }
  function addToQueue( item )  {
      setQueue( ( queue ) => ( [...queue, item] ) )
      setShowToaster(true)
  }
  function removeFromQueue( item ) {
    let newQueue = queue.filter( newQueueItem => newQueueItem.id !== item.id );
    setQueue(newQueue);
  }
  function resetQueue() {
    setQueue([])
  }
  function playFromQueue( item ) {
    onPlay( item )
    removeFromQueue( item )
  }
  function removeLastPlayed () {
    let newPrevPlayed = previouslyPlayed.filter( (element, index) => index < previouslyPlayed.length - 1);
    setPreviouslyPlayed(newPrevPlayed)
  }
  function resetCurrentlyPlaying() {
    setCurrentlyPlaying([])
    return currentlyPlaying
  }
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
  function playPrev () {
    if (previouslyPlayed.length >= 1) {
      onPlay( previouslyPlayed[previouslyPlayed.length - 1] )
      removeLastPlayed();
    } else {
      console.log("TBA: restart current audio")
    }
  }
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
  function togglePlayingSpeed ( clickedItem ) {
    if (clickedItem.selected == true ) {
      console.log("already selected")
    } else {
      // reset current to false
      let id = playingSpeed.findIndex( item => item.selected === true )
      if (id > -1) {
        let resetSpeed = [...playingSpeed];
        resetSpeed[id] = {
          ...resetSpeed[id],
          selected: false
        }

        // set new to true
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
  function checkInQueue(item) {
    const isInQueue = queue.some( queueItem => {
      if(queueItem.id == item.id) {
        return true
      }
      return ""
    } )
    return isInQueue
  }

  let currentSpeed = playingSpeed.filter(speed => speed.selected === true)

  return (
    <div className="App">
      <Header navigation={ navigation } setNavigation={ setNavigation } profileNav={ profileNav } setProfileNav={ setProfileNav } />
      { isPlaying 
        ? <audio  id="audio"  
                  src={ currentlyPlaying[0].src }   
                  controls={false}   
                  preload="auto"   
                  muted={false}   
                  autoPlay={true}  onEnded={ () => playNext() } ></audio>  : '' }

          <Routes>
            <Route path="/" element={ <Home articles={ articles } /> } />
            <Route path="/article/:id" element={ 
                    <Article  articles={ articles } 
                              onShowPlayer={ () => setShowPlayer(true) } 
                              onShowToaster={ () => setShowToaster(true) }
                              queue={ queue } 
                              onPlay={ onPlay }
                              addToQueue={ addToQueue }
                              checkInQueue={ checkInQueue } /> } />
            <Route path="oplaeste-artikler" element={ 
                    <ReadArticles articles={ articles } 
                                  onShowPlayer={ () => setShowPlayer(true) } 
                                  onShowToaster={ () => setShowToaster(true) }
                                  addToQueue={ addToQueue }
                                  queue={ queue } 
                                  onPlay={ onPlay }
                                  checkInQueue={ checkInQueue } /> } />
            <Route path="podcasts" element={ 
                    <Podcasts podcasts={ podcasts } 
                              queue={ queue } /> } />
            <Route path="podcasts/:id" element={ 
                    <PodcastList  podcasts={ podcasts } 
                                  onShowPlayer={ () => setShowPlayer(true) }
                                  onShowToaster={ () => setShowToaster(true) }
                                  addToQueue={ addToQueue }
                                  queue={ queue }
                                  onPlay={ onPlay }
                                  checkInQueue={ checkInQueue } /> } />
            <Route path="ko" element={ 
                    <Queue  currentlyPlaying={ currentlyPlaying[0] } 
                            isPlaying={ isPlaying } 
                            setIsPlaying={ setIsPlaying } 
                            removeFromQueue={ removeFromQueue }
                            resetQueue={ resetQueue }
                            queue={ queue }
                            playFromQueue={ playFromQueue }
                            setQueue={ setQueue } /> } />
          </Routes>

      { showToaster && 
        <CSSTransition in={ showToaster } timeout={500} classNames="toaster-queue" >
          <QueueToaster onShowToaster={ () => setShowToaster(false) } showPlayer={ showPlayer } />
        </CSSTransition>
      }

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


// {
//   id: 5,
//   title: "Usynlige naboer",
//   writer: "Anne Katrine Harders",
//   theme: "Kronik",
//   date: "24. Marts. 2022",
//   teaser: "Hvorfor er vi danskere så dårlige til at tale med vores naboer? ",
//   content: "Vores underbo døde for nylig. Han havde levet et langt liv som en del af den danske revyscene og som en efter sigende eminent imitator af store danske politikere på Danmarks Radio tilbage i 1960erne. Med ham døde et lille nabofællesskab, som burde have været meget mere, end det blev. Men den slags uformelle fællesskaber har åndenød. Det er kommet snigende efterhånden, som vi har fået mere travlt. Travlt med hverdagen og ikke mindst travlt med os selv. Børnene mødes ikke bare på vejen. De har i stedet arrangerede legeaftaler i haver med hække og egne trampoliner. I opgangen støder vi kun på hinanden dér, hvor elevatorer ikke allerede har mindsket risikoen for den slags spontane møder. Vi vil ikke trænge os på, men jeg ville faktisk ønske, at nogen turde gøre det. ",
//   image: "/assets/images/article5.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Samfund",
//   type: "artikel"
// },
// {
//   id: 6,
//   title: "Alternativet til Scholz",
//   writer: "Jesper Vind",
//   theme: "Bürgerlich",
//   date: "24. Marts. 2022",
//   teaser: "Efter 16 år som kanslerparti er CDU forvist til oppositionsbænkene i Berlin, hvor den nye tyske regering har sat sig på det, der kunne have været en stor borgerlig dagsorden: Genrejsningen af Tyskland som militærmagt. Weekendavisen har talt med Karin Prien, næstformand i CDU og en af dets »rising stars«, om de borgerliges chancer for et comeback.      ",
//   content: "KIEL – Ukrainekrigen har undermineret den hidtidige sikkerhedspolitiske ordning i Europa, og ikke mindst i Tyskland er der kommet andre boller på den militære suppe. Den nye kansler, Olaf Scholz, vil opruste det semipacifistiske land til en seriøs militærmagt igen. Samtidig prøver han at omstille dets energiforsyning, så man kan vinke bye-bye til ikke bare atomkraft, men også russisk gas. At undgå en kæmpe økonomisk krise for Tysklands vitale storindustri ligner en herkulesopgave for socialdemokraten, som mange også tvivler på vil lykkes – også fordi Scholz skal holde sammen på en umage regering med SPD, De Grønne og det liberalistiske FDP. ",
//   image: "/assets/images/article6.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Samfund",
//   type: "artikel"
// },
// {
//   id: 7,
//   title: "Akademisk chokkur",
//   writer: "HENRIK DØRGE",
//   theme: "Kandidater",
//   date: "24. Marts. 2022",
//   teaser: "Uddannelserne på universiteterne skal ændres gennemgribende for at matche arbejdsmarkedets behov ",
//   content: "De højere læreanstalters bevægelse fra at være elitestudier for et fåtal af kvikke til at blive et masseuniversitet kan fortælles med enkelte tal. I midten af 1990erne havde seks procent af den voksne befolkning en universitetsgrad. I dag er det 16 procent. Og i 2050 forventes næsten 30 procent at have fuldført en universitetsuddannelse. Ambitionen om at få en bedre uddannet befolkning er kort sagt en succeshistorie. Skal man tro Reformkommissionen, nedsat af regeringen i 2020, er problemet, at uddannelsernes struktur ikke er gearet til udviklingen. Den gængse model med tre år på bachelordelen efterfulgt af to år på kandidatoverbygningen matcher ikke arbejdsmarkedets behov på længere sigt. Samtidig er der brug for, at danskerne ikke kun uddanner sig, mens de er unge, men også tilegner sig kompetencer gennem arbejdslivet. ",
//   image: "/assets/images/article7.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Samfund",
//   type: "artikel"
// },
// {
//   id: 8,
//   title: "Billige demagogiske tricks",
//   writer: "MICHAEL PREHN",
//   theme: "Opgør",
//   date: "24. Marts. 2022",
//   teaser: "Sammenligningerne mellem NATO og Rusland er useriøse. ",
//   content: "Under overskriften »Vesten er ikke altid de gode« og med temaet »historieløshed« skriver Emil Vatani i sidste uge, at »Ruslands præsident Vladimir Putin nu er presset op i en krog, i vert (sic) fald hvis Rusland vil bevare sit image som stormagt. Derfor ser Putin sig nødsaget til at reagere«. Læserbrevet udviser en mangel på proportionssans og brug af dobbelte standarder, som ellers er netop det, der – på overfladen – er artiklens hovedkritik. »Vi« kritiseres for på dobbeltmoralsk vis at fordømme Rusland, men ikke USA, Saudi-Arabien, Israel og EU. »Vi« lægges i munden, at NATO skulle være »et hyggeligt fællesskab«, mens Rusland/Putin skulle være »en skør aggressor«. Det er billige demagogiske tricks at latterliggøre synspunkter ved omformuleringer og at samle modstandere i grupper, der kan behandles over en kam, uanset hvor lidt de ligner hinanden. ",
//   image: "",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Samfund",
//   type: "artikel"
// },
// {
//   id: 13,
//   title: "En lang og lykkelig rejse",
//   writer: "Bo Green Jensen",
//   theme: "Morricone",
//   date: "24. Marts. 2022",
//   teaser: "Filmen om filmkomponisten er gavmild, nøjagtig og kongenial. ",
//   content: "Det var et fyrtårn og et fikspunkt, som forsvandt, da Ennio Morricone døde i 2020. Få komponister har sat deres mærke og præget en kunstart så dybt. Morricone gjorde det gennem 60 år og var stadig unik og urørlig. 12 af 500 soundtracks blev skrevet til Giuseppe Tornatore. Morricone følte selv noget særligt for musikken til Mine aftener i Paradis (1988), og han kunne se sin egen rejse i Legenden om pianisten på havet (1998). Tornatore havde optaget sin portrætfilm, da komponisten gik bort. Den er derfor et kærligt arbejdsportræt, snarere end en rugende gravskrift. ",
//   image: "/assets/images/article13.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Kultur",
//   type: "artikel"
// },
// {
//   id: 14,
//   title: "Midnat i Shinjuku",
//   writer: "Markus Bernsen",
//   theme: "Yakuza",
//   date: "24. Marts. 2022",
//   teaser: "Ny HBO-serie viser undersiden af det japanske samfund og styrer uden om de værste klicheer. ",
//   content: "I 1999 lykkedes det den amerikanske universitetsstuderende Jake Adelstein at få en jobsamtale på Japans største dagblad, Yomiuri Shimbun. Avisen med verdens største oplag havde aldrig ansat en udlænding før, og han trådte ind i en lukket og hierarkisk verden, som var præget af vennetjenester og dyb mistro over for fremmedelementer – lidt som det japanske samfund i det hele taget. Jobsamtalen bliver gengivet i første afsnit af Tokyo Vice, som er løst baseret på Adelsteins stærkt underholdende erindringer om sin tid som krimireporter på avisen. Og ligesom bogen skåner den nye HBO-serie ikke japanernes følelser. »Mange mener, at jøder kontrollerer verdens økonomi – hvad mener du selv?« spørger en af redaktørerne for eksempel den jødiske amerikaner. »Spiser jøder overhovedet sushi?« vil en anden vide. ",
//   image: "/assets/images/article14.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Kultur",
//   type: "artikel"
// },
// {
//   id: 15,
//   title: "Den korte og den lange død",
//   writer: "ASKER HEDEGAARD BOYE",
//   theme: "Bazar",
//   date: "24. Marts. 2022",
//   teaser: "Midt i krigens rædsler i den ukrainske havneby Mariupol er hundredvis af kostbare computere og videospil fra fortiden gået tabt. ",
//   content: "Den sydkoreanske hovedstad, Seoul, har i årtier været berygtet for en udmarvende arbejdskultur præget af lange dage på kontoret, usikre ansættelsesforhold, stress og alt for lidt søvn – og en repræsentativ undersøgelse foretaget for bystyret giver nu syn for sagn. Nye data viser, at indbyggere i aldersgruppen 20-39 år sover mindre, jo mere usikker deres jobsituation er. Det rapporterer tv-stationen Arirang. Kontraktansatte sover i gennemsnit ti minutter mindre i døgnet end lønmodtagere, mens praktikanter sover godt en halv time mindre end fastansatte. Undersøgelsen, der bygger på en rundspørge blandt 48.000 arbejdende Seoul-borgere, viser desuden, at en gennemsnitlig indbygger i storbyen (i den nævnte aldersgruppe) blot sover seks timer og 43 minutter. Dermed er sydkoreanerne placeret helt i bunden på det internationale søvnbarometer. ",
//   image: "/assets/images/article15.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Kultur",
//   type: "artikel"
// },
// {
//   id: 16,
//   title: "Ind i sindets labyrint",
//   writer: "Erik Steffensen",
//   theme: "Drømmetydning",
//   date: "24. Marts. 2022",
//   teaser: "Psykoanalysens far, Sigmund Freud, levede ikke forgæves: Vi er mellem drøm og virkelighed, forstår man øjeblikkeligt i mødet med aktuel Edvard Munch-udstilling om den øjensygdom, der gjorde maleren blind. ",
//   content: "I villskapens øye hedder en udstilling på godt norsk på det nye Munch-museum i bunden af Oslofjorden. Udstillingen er blevet til som et dansk-norsk samarbejde mellem to kuratorer og handler om forholdet mellem Edvard Munch (1863-1944) og et par af de mange »ismer« i kunsten, han gennemlevede i sit livsværk; symbolismen, som han havde et udgangspunkt i ved begyndelsen af karrieren, og surrealismen, som senere hen lå nær hans interesser. »Jeg maler ikke det, jeg ser, men det jeg så,« lyder et af Edvard Munchs kendte bonmots. I museumsshoppen kan man se citatet trykt på stofposer og bogomslag. Og citatet er et vigtigt kunsthistorisk udsagn, fordi det viser, at Edvard Munch interesserede sig for, hvad der foregik inden i ham i lige så høj grad som den virkelighed, der omgav ham. Psykologien spillede en rolle, den analyserende, følende, tænksomme del af selvet skulle med i billedet, og derfor fik verden billeder af melankoli, angst og sygdom, når kunstneren greb penslen og udmalede sindets strukturer, så selv børn kunne forstå eller opleve tilstandene. ",
//   image: "/assets/images/article16.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Kultur",
//   type: "artikel"
// },
// {
//   id: 21,
//   title: "Bogholderiet",
//   writer: "Bogredaktionen",
//   theme: "Bøgernes verden",
//   date: "24. Marts. 2022",
//   teaser: "Nyt fra andedammen. ",
//   content: "En af verdens største fagforeninger for forfattere, Society of Authors, skal have ny præsident. Det sker, efter at forfatteren Sir Philip Pullman, der har været medlem af foreningen i 35 år og præsident for den siden 2013, trækker sig fra sin post. Pullmans fratrædelse sker efter en episode tilbage i august sidste år. Her forsvarede Philip Pullman forfatteren Kate Clanchy, efter at hun var blevet anklaget for racistiske udtalelser i sin erindringsbog Some Kids I Taught and What They Taught Me (2019), som handler om hendes tid som underviser i det britiske skolesystem. Pullman blev kritiseret af forfatterkolleger for at tage Clanchys parti, mens det også faldt bestyrelsen i Society of Authors for brystet, at Pullman egenrådigt valgte at involvere sig i enkeltsager som præsident for fagforeningen. ",
//   image: "/assets/images/article21.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Bøger",
//   type: "artikel"
// },
// {
//   id: 22,
//   title: "En menneskelig plet",
//   writer: "Klaus Rothstein",
//   theme: "Kommentar",
//   date: "24. Marts. 2022",
//   teaser: "Selv i et åbent samfund med fri ret til at skrive og tale kan der herske social kontrol og selvbegrænsning. ",
//   content: "I sidste uge bragte Politiken et fødselsdagsportræt af forfatteren Line-Maria Lång, der fyldte 40 år. Jeg læste det, fordi den småpinlige overskrift fangede mit øje: »Hun lykkedes med at gøre Jan Sonnergaard nuttet«. Ugen inden var Politikens skribent Erik Jensen gerådet i gevaldig shitstorm, fordi Twitter og omegn mente, at hans portræt af en kvindelig sanger var mandschauvinistisk. Som jeg forstod det havde artiklen haft en lidt hoven tone og belyst kvindens karriere via samarbejder med diverse mandlige kærester. Jeg skal ikke gøre mig klog på det, jeg følger ikke med i den slags musik og ved intet om fødselaren. Men irettesættelsen var voldsom, og Politikens chefredaktør tog et strategisk tilbagetog. Men tilsyneladende havde navneredaktionen intet lært. ",
//   image: "",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Bøger",
//   type: "artikel"
// },
// {
//   id: 23,
//   title: "Staunings linje",
//   writer: "Henrik Jensen",
//   theme: "Nyttige Danskere",
//   date: "24. Marts. 2022",
//   teaser: "Hvorfor beholde planløshed, når man kan få planøkonomi? Arne Hardis har skrevet en velfortalt bog om arbejderbevægelsen og samarbejdspolitikken. ",
//   content: "Besættelsens historie bliver vi aldrig færdige med, og slet ikke samarbejdspolitikken, som man næsten kunne kalde Den Danske Model, eftersom den ikke minder om, hvordan det gik i andre besatte lande under Anden Verdenskrig. Arne Hardis bevæger sig i sin nye bog ned i selve samarbejdspolitikkens maskinrum, for nu at bruge en metafor. Det er en bog med masser af metaforer, forfatterens egne og andres. Det er, som om politisk stof kræver metaforer. Hardis' fokus er her på en række i bredere kredse sandsynligvis ret ukendte aktører, befindende sig »i den politiske gråzone, som er denne bogs hovedarena: Den uformelle scene, hvor der groede gensidigt nyttige relationer frem mellem besættelsesmagten og den danske arbejderbevægelse«. ",
//   image: "/assets/images/article23.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Bøger",
//   type: "artikel"
// },
// {
//   id: 24,
//   title: "Veritabel pariser",
//   writer: "Niels Lillelund",
//   theme: "Kærlig slentren",
//   date: "24. Marts. 2022",
//   teaser: "Aske Munck sværmer unødigt for naturvin, men har et godt blik for middagsselskaber og andre vigtige institutioner i den franske kultur. Hans nye pariserbog er en let og velskreven rejsefører. ",
//   content: "Aske Munck deler sin tilværelse mellem København og Paris, og denne bog handler om Paris og dens indvånere, dens vaner. Om Paris, ikke om Frankrig, og der er forskel, også stor forskel, men det er også rigtigt, at Paris er Frankrig, punktum, indtil De Gule Veste kommer og minder os om noget andet. Paris er scenen, som altid fascinerer og dog kan ende med at føles hjemlig. Gennem 21 slentrende kapitler kredser Munck om franske særheder, lyder og dyder, og han gør det med stor kærlighed, stedvis også blind kærlighed. Man forelsker sig i Frankrig, det er en skæbne, og derfor er Aske Munck mildt sagt ikke den første, der har skrevet en bog som denne, anekdotisk, undrende og draget – og trods talrige (fine) referencer også med en undertone af, at han så hende først. ",
//   image: "/assets/images/article24.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Bøger",
//   type: "artikel"
// },
// {
//   id: 29,
//   title: "Kort nyt",
//   writer: "Kristoffer Lottrup",
//   theme: "Heureka",
//   date: "24. Marts. 2022",
//   teaser: "Nyheder fra videnskabens verden. I denne uge: nuttede hundeøjne, universelle dufte og civilister på vej i rummet. ",
//   content: "Der er sket meget med hunden, siden den for mellem 27.000 og 41.500 år siden brød op fra den grå ulv og med tiden blev tæmmet af mennesket. Et af de umiskendelige træk ved de domesticerede vovser er de bedende og troskyldige hundeøjne, som virker dragende på de fleste og har kastet mangen en godbid af sig. Forskning har endda vist, at den nære øjenkontakt udløser kærlighedshormonet oxytocin hos både hund og menneske. Det er i forvejen kendt, at de fleste hunde er udstyret med en særlig muskel i øjenbrynene, som gør dem mere udtryksfulde og får deres øjne til at se større ud. Nu kaster biologer fra amerikanske Duquesne University yderligere lys over de firbenedes levende ansigter. Forskerne finder, at hunde har udviklet mimiske muskler, der minder om menneskets, og som i mindre grad findes hos ulve. ",
//   image: "/assets/images/article29.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Ideer",
//   type: "artikel"
// },
// {
//   id: 30,
//   title: "Kongeboaens snedige løsning",
//   writer: "Kristoffer Lottrup",
//   theme: "Forklaret",
//   date: "24. Marts. 2022",
//   teaser: "Kongeboaen nedlægger byttedyr større end sig selv og sluger dem hele. Nyt studie viser hvordan slangens anatomi kan give et svar på fænomenet. ",
//   content: "? Hvordan trækker kongeboaen vejret, når den lige har slugt en hel pungrotte? ! Kongeboaen er en af verdens store kvælerslanger. Den lever i Syd- og Mellemamerika og bruger sin over fire meter lange krop til at klemme livet ud af byttedyr som gnavere, leguaner og aber. Byttet presses så hårdt sammen, at blodomløbet blokeres, og hjertet går i stå. Når slangen har gjort det af med sit offer, slår den munden op på vid gab og sluger det fuldt og helt. Det drabelige kram og den enorme mundfuld stiller store krav til slangens vejrtrækning. Mens kongeboaen knuser sit bytte, mases slangens lunger helt flade. Det samme sker, når byttet efterfølgende spiler dele af boaens lange krop fuldstændig ud. Hele optrinnet varer fra ti til 45 minutter. Hvordan i alverden undgår slangen at blive kvalt undervejs? ",
//   image: "/assets/images/article30.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Ideer",
//   type: "artikel"
// },
// {
//   id: 31,
//   title: "Hvordan Mælkevejen blev til",
//   writer: "Sarah Pearson",
//   theme: "Forskerklumme",
//   date: "24. Marts. 2022",
//   teaser: "Hvordan vokser galakser? Ved at studere stjernestrømme kan astronomer regne ud, hvordan stjernehobene udvikler sig over milliarder af år. ",
//   content: "Forskere elsker at beskrive naturens udvikling. Vi har kortlagt alt fra dyrearters bevægelsesmønstre på Jordens kontinenter til kontinenternes udvikling i kappen af Jorden og selv Jordens bane om Solen. Men hvor stopper legen? Hvad er det vildeste, vi kan beskrive? Mit eget, meget biased, bud er dette: Hvordan udvikler Solens hjem sig, eller rettere: Hvordan vokser galakser? Lige meget hvorhen i rummet vi peger vores teleskoper, så observerer vi tusindvis af klumper af lys. Disse klumper er samlinger af milliarder af stjerner som Solen og milliarder af planeter som Jorden, samt gas, sorte huller, hvide dværge og alverdens andre rumfænomener. Disse fænomener roterer i kolossale objekter, der er holdt sammen af tyngdekraften. Vi kalder dem for galakser. ",
//   image: "/assets/images/article31.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Ideer",
//   type: "artikel"
// },
// {
//   id: 32,
//   title: "Falsificeret",
//   writer: "Ideerredaktionen",
//   theme: "Modbevist",
//   date: "24. Marts. 2022",
//   teaser: "Hver uge udrydder vi myter og misforståelser og ser på fusk og fejl i forskningens verden. I denne uge: vampyrflagermus, der opfører sig som efterskoleelever, og kræftstudier, der ikke kan gentages. ",
//   content: "Det er ikke kun mennesker, der er i stand til at knytte tætte bånd til tilfældige fremmede. Også vampyrflagermus danner længerevarende venskabelige relationer til hinanden, hvis de tvinges til at være sammen i en kortere periode. Det viser et nyt studie udført af forskere fra Ohio State University og Smithsonian Tropical Research Institute i Panama. 21 vampyrflagermus deltog i studiet. Nogle af dem kendte hinanden i forvejen, andre mødtes for første gang. I de første seks uger kunne dyrene frit blande sig med hinanden. I næste fase af forsøget delte forskerne flagermusene op i syv mindre grupper, hvor ingen af flagermusene kendte hinanden. De nye grupper skulle dele rede i en uge, herefter fik de igen lov til at mingle frit i de næste ni uger. ",
//   image: "/assets/images/article32.jpeg",
//   src: "",
//   readLoud: false,
//   size: "small",
//   category: "Ideer",
//   type: "artikel"
// },