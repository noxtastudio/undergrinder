/* releases.js — Undergrinder Records Limited archive
   --------------------------------------------------------------
   EDIT THE CATALOGUE HERE. Each release is one object in RELEASES.
     code    catalogue number, e.g. "URL091" (lights up its ledger stamp)
     title   release title (label voice, lowercase + ellipses)
     artist  project / artist name
     genre   drives the filter chips (see GENRES)
     year    release year (number)
     cover   square cover art in images/releases/
     zip     full-album download — R2 base + the ORIGINAL zip filename
     preview optional MP3 preview URL (R2) — add to show a ▶ play button
   --------------------------------------------------------------
   Data + covers are the real catalogue pulled from the original site.
   ZIP names match the originals: upload those files to R2 at the
   media.undergrinder.studio base below and the links resolve.
   No per-release preview MP3s exist yet, so there are no play buttons;
   add `preview:R2+'…mp3'` to any release once a clip is uploaded. */

var GENRES = ["gorenoise", "goregrind", "8bitcore", "harshnoise", "porngrind", "death metal", "dark ambient", "noisecore", "deathgrind", "cybergrind", "grindcore", "mental noise", "polishcore", "horrorcore", "black metal", "power violence"];

var R2 = 'https://media.undergrinder.studio/';   // ← Cloudflare R2 base; upload the original ZIPs here

var RELEASES = [
  {"code": "URL102", "title": "…singles collection 2019-2025…", "artist": "…skadegladje…", "genre": "harshnoise", "genreFull": "harshnoise", "country": "poland", "date": "2 october 2025", "year": 2025, "cover": "images/releases/url102.jpg", "cdr": true},
  {"code": "URL101", "title": "…the dark poets…", "artist": "…mean flow , {an} ael , mati pirsztuk , hairy carrie , rdkpl , debepom ghosh must be killed , terbeschikkingstelling , ultrabit , the ide of earth , absurd reality , no future (21) , chrup , specimen…", "genre": "harshnoise", "genreFull": "harshnoise, hnw, dark ambient, atmospheric, drone, power electronics", "country": "greece, canada, argentina, usa, czech republic, bangladesh, netherlands, poland, indonesia, france", "date": "6 may 2025", "year": 2025, "cover": "images/releases/url101.jpg", "cdr": true},
  {"code": "URL100", "title": "…anti human…", "artist": "…the whisper among the legion…", "genre": "mental noise", "genreFull": "mental noise", "country": "poland", "date": "18 march 2025", "year": 2025, "cover": "images/releases/url100.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2025__url100_anti_human.zip"},
  {"code": "URL098", "title": "…noise inside…", "artist": "…noise inside…", "genre": "noise", "genreFull": "", "country": "", "date": "", "year": null, "cover": "images/releases/url098.png", "cdr": false, "zip": "https://media.undergrinder.studio/_2024__url098_noise_inside.zip"},
  {"code": "URL097", "title": "…putrefaxxxion…", "artist": "…vulvaxxx…", "genre": "goregrind", "genreFull": "goregrind", "country": "colombia", "date": "1 july 2024", "year": 2024, "cover": "images/releases/url097.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2024__url097_putrefaxxxion.zip"},
  {"code": "URL096", "title": "…gangrene/ustel/nucleus/extreme vulvar skin…", "artist": "…gangrene, ustel, nucleus, extreme vulvar putrefaction…", "genre": "goregrind", "genreFull": "goregrind, gorenoise", "country": "philippines, basque country, bulgaria, germany", "date": "3 june 2024", "year": 2024, "cover": "images/releases/url096.jpg", "cdr": true, "zip": "https://media.undergrinder.studio/_2024__url096_gangrene_ustel_nucleus_extreme_vulvar_putrefaction.zip"},
  {"code": "URL095", "title": "…gott mit uns - the early years (2009-2010)…", "artist": "…aktion gnadentod…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "germany", "date": "8 may 2024", "year": 2024, "cover": "images/releases/url095.jpg", "cdr": true, "zip": "https://media.undergrinder.studio/_2024__url095_gott_mit_uns.zip"},
  {"code": "URL094", "title": "…coruptolol…", "artist": "…nekronz…", "genre": "deathgrind", "genreFull": "deathgrind", "country": "indonesia", "date": "14 april 2024", "year": 2024, "cover": "images/releases/url094.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2024__url094_coruptolol.zip"},
  {"code": "URL093", "title": "…latex whore compilation…", "artist": "…tu culo…", "genre": "porngrind", "genreFull": "porngrind", "country": "mexico", "date": "6 april 2024", "year": 2024, "cover": "images/releases/url093.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2024__url093_latex_whore_compilation.zip"},
  {"code": "URL092", "title": "…demo culona…", "artist": "…tu culo…", "genre": "porngrind", "genreFull": "porngrind", "country": "mexico", "date": "23 march 2024", "year": 2024, "cover": "images/releases/url092.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2024__url092_demo_culona.zip"},
  {"code": "URL091", "title": "…way to disembowel (singles 2011-2024)…", "artist": "…spirits way…", "genre": "death metal", "genreFull": "death metal", "country": "poland", "date": "3 march 2024", "year": 2024, "cover": "images/releases/url091.jpg", "cdr": true, "zip": "https://media.undergrinder.studio/_2024__url091_way_to_disembowel.zip"},
  {"code": "URL090", "title": "…diabolic 69…", "artist": "…tu culo, vulvaxxx…", "genre": "porngrind", "genreFull": "porngrind", "country": "mexico, colombia", "date": "18 february 2024", "year": 2024, "cover": "images/releases/url090.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2024__url090_diabolic_69.zip"},
  {"code": "URL089", "title": "…9 ways to be executed with utter contempt vol.5…", "artist": "…rotten martyrs, nekron, mondo podre, painburn, daily molecules, failure trace to human race, frenulum anesthesia ketamine episiotomy, hardcore de garage, phylloctomiasma oxynogetics mutants…", "genre": "death metal", "genreFull": "death metal, deathgrind, grindcore, cybergrind, goregrind, nihilistic crust grindcore, sadistic 8bit goregrind, noisecore, cyber harshnoise", "country": "france, indonesia, spain, italy, china, thailand, poland, brazil", "date": "13 february 2024", "year": 2024, "cover": "images/releases/url089.jpg", "cdr": true},
  {"code": "URL088", "title": "…unstable factors in life…", "artist": "…daily molecules…", "genre": "goregrind", "genreFull": "goregrind", "country": "china", "date": "10 january 2024", "year": 2024, "cover": "images/releases/url088.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2024__url088_unstable_factors_in_life.zip"},
  {"code": "URL087", "title": "…jugetes de puta…", "artist": "…tu culo…", "genre": "porngrind", "genreFull": "porngrind", "country": "mexico", "date": "16 november 2023", "year": 2023, "cover": "images/releases/url087.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2023__url087_jugetes_de_puta.zip"},
  {"code": "URL086", "title": "…alcanzando un orgasmo descomunal…", "artist": "…obsceno…", "genre": "porngrind", "genreFull": "porngrind", "country": "mexico", "date": "14 november 2023", "year": 2023, "cover": "images/releases/url086.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2023__url086_alcanzando_un_orgasmo_descomunal.zip"},
  {"code": "URL085", "title": "…pervertida…", "artist": "…tu culo…", "genre": "porngrind", "genreFull": "porngrind", "country": "mexico", "date": "13 november 2023", "year": 2023, "cover": "images/releases/url085.png", "cdr": false, "zip": "https://media.undergrinder.studio/_2023__url085_pervetida.zip"},
  {"code": "URL084", "title": "…shadow in a paradise…", "artist": "…noxious stimuli…", "genre": "dark ambient", "genreFull": "dark ambient", "country": "poland", "date": "7 november 2023", "year": 2023, "cover": "images/releases/url084.jpg", "cdr": false},
  {"code": "URL083", "title": "…harvest of the implicit holocaust…", "artist": "…noxious stimuli…", "genre": "dark ambient", "genreFull": "dark ambient", "country": "poland", "date": "6 november 2023", "year": 2023, "cover": "images/releases/url083.jpg", "cdr": false},
  {"code": "URL082", "title": "…exhumation…", "artist": "…rotting vomit…", "genre": "goregrind", "genreFull": "goregrind", "country": "brazil", "date": "5 november 2023", "year": 2023, "cover": "images/releases/url082.png", "cdr": false},
  {"code": "URL081", "title": "…the bitterness that collect us…", "artist": "…noxious stimuli…", "genre": "dark ambient", "genreFull": "dark ambient", "country": "poland", "date": "1 november 2023", "year": 2023, "cover": "images/releases/url081.jpg", "cdr": false},
  {"code": "URL080", "title": "…petrified heart time lapse…", "artist": "…noxious stimuli…", "genre": "dark ambient", "genreFull": "dark ambient", "country": "poland", "date": "22 october 2023", "year": 2023, "cover": "images/releases/url080.jpg", "cdr": false},
  {"code": "URL077", "title": "…the killer pizza delivery man…", "artist": "…waste disaster…", "genre": "noisecore", "genreFull": "noisecore", "country": "brazil", "date": "10 september 2023", "year": 2023, "cover": "images/releases/url077.jpg", "cdr": false},
  {"code": "URL076", "title": "…lymphangioleiomyomatosis multifocal lymphangioendotheliomatosis…", "artist": "…lymphangioleiomyomatosis multifocal lymphangioendotheliomatosis…", "genre": "cybergrind", "genreFull": "vomited cybergore poetry", "country": "poland", "date": "5 september 2023", "year": 2023, "cover": "images/releases/url076.jpg", "cdr": false},
  {"code": "URL075", "title": "…subconscious sobriety…", "artist": "…e-drops…", "genre": "noise", "genreFull": "", "country": "", "date": "", "year": null, "cover": "images/releases/url075.jpg", "cdr": true},
  {"code": "URL074", "title": "…o tempo fantasma…", "artist": "…hardcore de garage…", "genre": "noisecore", "genreFull": "noisecore", "country": "brazil", "date": "12 march 2023", "year": 2023, "cover": "images/releases/url074.png", "cdr": false},
  {"code": "URL073", "title": "…halfway to insanity…", "artist": "…hardcore de garage…", "genre": "noisecore", "genreFull": "noisecore", "country": "brazil", "date": "29 january 2023", "year": 2023, "cover": "images/releases/url073.jpg", "cdr": false},
  {"code": "URL072", "title": "…inner darkness…", "artist": "…ephemeral matter…", "genre": "dark ambient", "genreFull": "drone, noise, dark ambient", "country": "poland", "date": "7 november 2022", "year": 2022, "cover": "images/releases/url072.jpg", "cdr": false},
  {"code": "URL071", "title": "…ytlance…", "artist": "…ephemeral matter…", "genre": "dark ambient", "genreFull": "drone, noise, dark ambient", "country": "poland", "date": "6 november 2022", "year": 2022, "cover": "images/releases/url071.jpg", "cdr": false},
  {"code": "URL070", "title": "…mind conflagration…", "artist": "…ear blood dripper…", "genre": "polishcore", "genreFull": "polishcore", "country": "poland", "date": "27 september 2022", "year": 2022, "cover": "images/releases/url070.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2022__url070_mind_conflagration.zip"},
  {"code": "URL069", "title": "…symphonie of carnage…", "artist": "…traumatic headache…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "germany", "date": "25 september 2022", "year": 2022, "cover": "images/releases/url069.jpg", "cdr": true, "zip": "https://media.undergrinder.studio/_2022__url069_symphonie_of_carnage.zip"},
  {"code": "URL068", "title": "…rather noise punk than russian tank…", "artist": "…rdkpl…", "genre": "harshnoise", "genreFull": "harshnoise", "country": "czech republic", "date": "24 september 2022", "year": 2022, "cover": "images/releases/url068.jpg", "cdr": false, "zip": "https://media.undergrinder.studio/_2022__url068_better_noise_punk_than_russian_tank.zip"},
  {"code": "URL065", "title": "…splatter noise…", "artist": "…hardcore de garage…", "genre": "noisecore", "genreFull": "noisecore", "country": "brazil", "date": "4 march 2022", "year": 2022, "cover": "images/releases/url065.jpg", "cdr": false},
  {"code": "URL064", "title": "…une nuit de larmes rouges et de levres gercees…", "artist": "…une nuit de larmes rouges et de levres gercees…", "genre": "harshnoise", "genreFull": "harshnoise", "country": "poland", "date": "14 november 2021", "year": 2021, "cover": "images/releases/url064.jpg", "cdr": false},
  {"code": "URL063", "title": "…the room number two…", "artist": "…stainless words, viczi, bondageboy…", "genre": "horrorcore", "genreFull": "horrorcore", "country": "poland", "date": "22 september 2021", "year": 2021, "cover": "images/releases/url063.jpg", "cdr": false},
  {"code": "URL062", "title": "…hanging whores on a gallows that were made of their own intestines nailed to their severed limbs…", "artist": "…decayed secretion of clit from gagged sluts…", "genre": "gorenoise", "genreFull": "experimental gorenoise", "country": "poland", "date": "15 september 2021", "year": 2021, "cover": "images/releases/url062.jpg", "cdr": false},
  {"code": "URL061", "title": "…mourir pour un cimetiere…", "artist": "…cacator…", "genre": "harshnoise", "genreFull": "hnw", "country": "france", "date": "30 august 2021", "year": 2021, "cover": "images/releases/url061.png", "cdr": false},
  {"code": "URL060", "title": "…ephemeral matter…", "artist": "…ephemeral matter…", "genre": "dark ambient", "genreFull": "drone, noise, dark ambient", "country": "poland", "date": "16 august 2021", "year": 2021, "cover": "images/releases/url060.jpg", "cdr": false},
  {"code": "URL059", "title": "…voroth…", "artist": "…voroth…", "genre": "death metal", "genreFull": "death metal", "country": "russia", "date": "30 july 2021", "year": 2021, "cover": "images/releases/url059.png", "cdr": true},
  {"code": "URL058", "title": "…what's that noise?…", "artist": "…new york against the belzebu, hardcore de garage…", "genre": "noisecore", "genreFull": "noisecore", "country": "brazil", "date": "12 may 2021", "year": 2021, "cover": "images/releases/url058.jpg", "cdr": false},
  {"code": "URL057", "title": "…inconceivable hatred of the simple behavior of low-intelligent minds corrupted by social evolution…", "artist": "…pigeonoise…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "poland", "date": "11 may 2021", "year": 2021, "cover": "images/releases/url057.jpg", "cdr": false},
  {"code": "URL056", "title": "…promo 2021…", "artist": "…neoplasm…", "genre": "death metal", "genreFull": "blasting brutal death metal", "country": "india", "date": "30 april 2021", "year": 2021, "cover": "images/releases/url056.jpg", "cdr": false},
  {"code": "URL055", "title": "…coffinbirther…", "artist": "…coffinbirther…", "genre": "goregrind", "genreFull": "goregrind", "country": "uk", "date": "29 april 2021", "year": 2021, "cover": "images/releases/url055.png", "cdr": false},
  {"code": "URL054", "title": "…made to suffer…", "artist": "…ghoulhouse, dead animal…", "genre": "death metal", "genreFull": "death metal", "country": "sweden, canada, usa, uk", "date": "22 april 2021", "year": 2021, "cover": "images/releases/url054.png", "cdr": true},
  {"code": "URL053", "title": "…fuck your reality…", "artist": "…the dead cold…", "genre": "death metal", "genreFull": "death metal", "country": "sweden, canada, uk", "date": "16 april 2021", "year": 2021, "cover": "images/releases/url053.png", "cdr": false},
  {"code": "URL052", "title": "…god cries/starless night…", "artist": "…god cries, starless night…", "genre": "black metal", "genreFull": "black metal, dsbm", "country": "sweden, canada, usa, uk", "date": "16 april 2021", "year": 2021, "cover": "images/releases/url052.jpg", "cdr": false},
  {"code": "URL051", "title": "…9 ways to be executed with utter contempt vol.4…", "artist": "…depreciation, bloody sadism, gravecore, violent cop, coffinbirther, conforming to survive, lxbxsxmxbxsx, 86/621, rdkpl…", "genre": "death metal", "genreFull": "death metal, brutal death metal, oldschool death metal, goregrind, gorenoise, electronic harshnoise", "country": "iran, italy, uk, france, poland, czech republic", "date": "5 april 2021", "year": 2021, "cover": "images/releases/url051.jpg", "cdr": false},
  {"code": "URL050", "title": "…9 ways to be executed with utter contempt vol.3…", "artist": "…dearstreet, inferms, dead corcoras, bombsack, hypersensitivity pneumonitis, gosma branca da pachacha, war og, body spillage kit, inverted scrotum…", "genre": "grindcore", "genreFull": "grindcore, death metal, mincecore, goregrind, gorenoise, cybershitgrind", "country": "usa, brazil, slovenia, belgium, portugal, indonesia, uk, poland, india", "date": "4 april 2021", "year": 2021, "cover": "images/releases/url050.jpg", "cdr": false},
  {"code": "URL049", "title": "…the powers of suggestion compilation…", "artist": "…omnipotence…", "genre": "deathgrind", "genreFull": "deathgrind", "country": "canada, usa, uk", "date": "3 april 2021", "year": 2021, "cover": "images/releases/url049.jpg", "cdr": false},
  {"code": "URL048", "title": "…9 ways to be executed with utter contempt vol.2…", "artist": "…afterpill, slapendehonden, dead animal, omnipotence, dismembered pig, shemale penetration, penis vacuated in bloody anal creek, lymphangioleiomyomatosis multifocal lymphangioendotheliomatosis, mal aliento…", "genre": "power violence", "genreFull": "power violence, hardcore sludge punk, modern grind, deathgrind, porngrind, highspeed goregrind, vomited cybergore poetry, noisecore", "country": "canada, netherlands, uk, usa, mexico, ecuador, czech republic, poland, spain", "date": "2 april 2021", "year": 2021, "cover": "images/releases/url048.jpg", "cdr": false},
  {"code": "URL047", "title": "…mass extermination of hippies…", "artist": "…dranken scums…", "genre": "noisecore", "genreFull": "noisecore", "country": "greece", "date": "14 march 2021", "year": 2021, "cover": "images/releases/url047.jpg", "cdr": false},
  {"code": "URL046", "title": "…yasuyuki uesugi…", "artist": "…yasuyuki uesugi…", "genre": "harshnoise", "genreFull": "hnw", "country": "japan", "date": "10 march 2021", "year": 2021, "cover": "images/releases/url046.jpg", "cdr": false},
  {"code": "URL045", "title": "…imponderabilia…", "artist": "…86/621…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "poland", "date": "9 march 2021", "year": 2021, "cover": "images/releases/url045.jpg", "cdr": false},
  {"code": "URL044", "title": "…9 ways to be executed with utter contempt…", "artist": "…demonio tallan, desgarramiento, duress to be dung, savage steve, decayed secretion of clit from gagged sluts, rectal fissure hemorrhoid, blenncardichromodacryexgenitohaemgene, cuntectomy, overflowed toilet clogged with infected shit…", "genre": "grindcore", "genreFull": "crustgrind, goregrind, groovy goregrind, cybergrind, gorenoise, vomitnoise, offensive grindcore, harshgorenoise", "country": "peru, cuba, poland, usa, philippines, indonesia, india, canada", "date": "28 february 2021", "year": 2021, "cover": "images/releases/url044.jpg", "cdr": false},
  {"code": "URL043", "title": "…lumpenproletariat…", "artist": "…86/621…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "poland", "date": "15 february 2021", "year": 2021, "cover": "images/releases/url043.jpg", "cdr": false},
  {"code": "URL042", "title": "…multifarious dysfunctions of human body…", "artist": "…hypersensitivity pneumonitis…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "poland/india", "date": "21 january 2021", "year": 2021, "cover": "images/releases/url042.jpg", "cdr": false},
  {"code": "URL041", "title": "…necrotic purulent drainage…", "artist": "…cerebromeningitis…", "genre": "death metal", "genreFull": "slamming brutal death metal", "country": "india", "date": "17 december 2020", "year": 2020, "cover": "images/releases/url041.png", "cdr": false},
  {"code": "URL040", "title": "…argulantahipotrontalfracorteniawalianostericiantonia…", "artist": "…lymphangioleiomyomatosis multifocal lymphangioendotheliomatosis…", "genre": "noise", "genreFull": "", "country": "", "date": "", "year": null, "cover": "images/releases/url040.jpg", "cdr": false},
  {"code": "URL038", "title": "…surreptitiously vituperation…", "artist": "…surreptitiously vituperation…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "poland", "date": "23 september 2020", "year": 2020, "cover": "images/releases/url038.jpg", "cdr": false},
  {"code": "URL037", "title": "…plethora of reprobates…", "artist": "…harmony of inexorable inimicality to malodorous flesh…", "genre": "harshnoise", "genreFull": "field harshnoise", "country": "poland", "date": "16 september 2020", "year": 2020, "cover": "images/releases/url037.jpg", "cdr": false},
  {"code": "URL036", "title": "…incontrovertible intruders…", "artist": "…bestiasl pokemonophile, spoooky steve…", "genre": "goregrind", "genreFull": "goregrind, cybergrind", "country": "poland, usa", "date": "15 september 2020", "year": 2020, "cover": "images/releases/url036.jpg", "cdr": false},
  {"code": "URL035", "title": "…the mental sickness intensivity…", "artist": "…pervasive developmental disorder not otherwise specified…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "poland", "date": "9 march 2020", "year": 2020, "cover": "images/releases/url035.jpg", "cdr": false},
  {"code": "URL034", "title": "…leave them dead and bleeding…", "artist": "…decayed secretion of clit from gagged sluts…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "poland", "date": "29 february 2020", "year": 2020, "cover": "images/releases/url034.jpg", "cdr": false},
  {"code": "URL033", "title": "…krokta skuggor…", "artist": "…varldsbrand…", "genre": "harshnoise", "genreFull": "harshnoise", "country": "sweden", "date": "28 february 2020", "year": 2020, "cover": "images/releases/url033.jpg", "cdr": false},
  {"code": "URL032", "title": "…little death…", "artist": "…little death…", "genre": "dark ambient", "genreFull": "dark ambient, harshnoise", "country": "greece", "date": "16 february 2020", "year": 2020, "cover": "images/releases/url032.png", "cdr": false},
  {"code": "URL031", "title": "…crushed face fetishism…", "artist": "…osteosarcoma, lymphangioleiomyomatosis multifocal lymphangioendotheliomatosis…", "genre": "noise", "genreFull": "", "country": "", "date": "", "year": null, "cover": "images/releases/url031.jpg", "cdr": false},
  {"code": "URL030", "title": "…nasyniazamoes…", "artist": "…paweł gigant, ultrabit…", "genre": "harshnoise", "genreFull": "harshnoise, ultrahz noise", "country": "poland", "date": "31 december 2019", "year": 2019, "cover": "images/releases/url030.png", "cdr": false},
  {"code": "URL029", "title": "…promo 2019…", "artist": "…fermented anal nectar…", "genre": "death metal", "genreFull": "slamming brutal death metal", "country": "austria, india", "date": "13 november 2019", "year": 2019, "cover": "images/releases/url029.jpg", "cdr": false},
  {"code": "URL028", "title": "…karbi snuff…", "artist": "…cystadenocarcinoma…", "genre": "gorenoise", "genreFull": "gorenoise", "country": "india", "date": "13 november 2019", "year": 2019, "cover": "images/releases/url028.jpg", "cdr": false},
  {"code": "URL027", "title": "…pozdepconapoznowyniprepospatomylejewcinasektastesnenibylepozperwipysimibownamy…", "artist": "…lymphangioleiomyomatosis multifocal lymphangioendotheliomatosis…", "genre": "cybergrind", "genreFull": "vomited cybergore poetry", "country": "poland", "date": "21 june 2019", "year": 2019, "cover": "images/releases/url027.jpg", "cdr": false},
  {"code": "URL026", "title": "…terminated tongue torture and testicles terror…", "artist": "…cymothoa exigua…", "genre": "gorenoise", "genreFull": "anti human horror gore", "country": "poland", "date": "20 june 2019", "year": 2019, "cover": "images/releases/url026.jpg", "cdr": false},
  {"code": "URL025", "title": "…devolution of humanity…", "artist": "…e-drops, bestial pokemonophile, taste the feeling of face peeling, paweł gigant…", "genre": "8bitcore", "genreFull": "8bitcore, goregrind, cybergore, harshnoise", "country": "poland", "date": "21 february 2018", "year": 2018, "cover": "images/releases/url025.jpg", "cdr": false},
  {"code": "URL024", "title": "…naga saga…", "artist": "…paweł gigant…", "genre": "harshnoise", "genreFull": "harshnoise", "country": "poland", "date": "11 august 2017", "year": 2017, "cover": "images/releases/url024.jpg", "cdr": false},
  {"code": "URL023", "title": "…zaproszenie specjalne…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "psychedelic electro", "country": "poland", "date": "26 july 2017", "year": 2017, "cover": "images/releases/url023.jpg", "cdr": false},
  {"code": "URL022", "title": "…4 ways to abuse your daughter…", "artist": "…bestial pokemonophile, moszniak, pornmormastro, moczniak…", "genre": "goregrind", "genreFull": "goregrind, cyberporno, cybergrind", "country": "poland", "date": "13 march 2017", "year": 2017, "cover": "images/releases/url022.jpg", "cdr": false},
  {"code": "URL021", "title": "…rotting thoughts…", "artist": "…bestial pokemonophile…", "genre": "goregrind", "genreFull": "goregrind", "country": "poland", "date": "8 march 2017", "year": 2017, "cover": "images/releases/url021.jpg", "cdr": false},
  {"code": "URL020", "title": "…pokemon gore…", "artist": "…e-drops, bestial pokemonophile…", "genre": "8bitcore", "genreFull": "8bitcore, porngrind", "country": "poland", "date": "18 august 2016", "year": 2016, "cover": "images/releases/url020.jpg", "cdr": false},
  {"code": "URL018", "title": "…dot matrix with stereo sound…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "8bitcore", "country": "poland", "date": "28 july 2016", "year": 2016, "cover": "images/releases/url018.png", "cdr": false},
  {"code": "URL015", "title": "…don't fuckle with shuckle…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "8bitcore", "country": "poland", "date": "23 april 2016", "year": 2016, "cover": "images/releases/url015.jpg", "cdr": false},
  {"code": "URL014", "title": "…infuck…", "artist": "…bestial pokemonophile…", "genre": "goregrind", "genreFull": "goregrind", "country": "poland", "date": "12 february 2016", "year": 2016, "cover": "images/releases/url014.jpg", "cdr": false},
  {"code": "URL013", "title": "…keep calm and become a nintendo fan…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "8bitcore", "country": "poland", "date": "5 april 2015", "year": 2015, "cover": "images/releases/url013.jpg", "cdr": false},
  {"code": "URL012", "title": "…pain…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "psychedelic electro", "country": "poland", "date": "21 february 2015", "year": 2015, "cover": "images/releases/url012.jpg", "cdr": false},
  {"code": "URL011", "title": "…sunflora gore party…", "artist": "…bestial pokemonophile…", "genre": "goregrind", "genreFull": "goregrind", "country": "poland", "date": "1 january 2015", "year": 2015, "cover": "images/releases/url011.jpg", "cdr": false},
  {"code": "URL010", "title": "…never forever…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "psychedelic electro", "country": "poland", "date": "20 december 2014", "year": 2014, "cover": "images/releases/url010.jpg", "cdr": false},
  {"code": "URL009", "title": "…say hello to my little friend…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "8bitcore", "country": "poland", "date": "26 november 2014", "year": 2014, "cover": "images/releases/url009.jpg", "cdr": false},
  {"code": "URL008", "title": "…ebola…", "artist": "…bestial pokemonophile…", "genre": "goregrind", "genreFull": "goregrind", "country": "poland", "date": "17 november 2014", "year": 2014, "cover": "images/releases/url008.jpg", "cdr": false},
  {"code": "URL007", "title": "…girls, tits, pussies…", "artist": "…bestial pokemonophile…", "genre": "porngrind", "genreFull": "porngrind", "country": "poland", "date": "15 november 2014", "year": 2014, "cover": "images/releases/url007.jpg", "cdr": false},
  {"code": "URL005", "title": "…death alone…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "psychedelic electro", "country": "poland", "date": "16 august 2014", "year": 2014, "cover": "images/releases/url005.jpg", "cdr": false},
  {"code": "URL004", "title": "…pokemonophilia v.2…", "artist": "…bestial pokemonophile…", "genre": "porngrind", "genreFull": "cyberporno", "country": "poland", "date": "29 june 2014", "year": 2014, "cover": "images/releases/url004.jpg", "cdr": false},
  {"code": "URL003", "title": "…pokemonophilia…", "artist": "…bestial pokemonophile…", "genre": "porngrind", "genreFull": "cyberporno", "country": "poland", "date": "23 december 2013", "year": 2013, "cover": "images/releases/url003.png", "cdr": false},
  {"code": "URL002", "title": "…8bit massacre…", "artist": "…e-drops…", "genre": "8bitcore", "genreFull": "8bitcore", "country": "poland", "date": "20 october 2013", "year": 2013, "cover": "images/releases/url002.jpg", "cdr": false}
];

(function(){
  'use strict';
  var grid   = document.getElementById('grid');
  var ledger = document.getElementById('ledger');
  var empty  = document.getElementById('empty');
  var countN = document.getElementById('countN');
  var search = document.getElementById('search');
  var chipBox= document.getElementById('genreChips');
  var yearSel= document.getElementById('yearSel');
  var sortSel= document.getElementById('sortSel');
  if(!grid) return;

  var ICON_PLAY='<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg>';
  var ICON_PAUSE='<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  var DL='<svg viewBox="0 0 24 24"><path d="M12 3v10m0 0l4-4m-4 4l-4-4M5 19h14" stroke="currentColor" stroke-width="2" fill="none"/></svg>';

  /* ---- build year options ---- */
  var years = RELEASES.map(function(r){return r.year;}).filter(function(v,i,a){return v && a.indexOf(v)===i;}).sort(function(a,b){return b-a;});
  years.forEach(function(y){ var o=document.createElement('option'); o.value=y; o.textContent=y; yearSel.appendChild(o); });

  /* ---- build genre chips ---- */
  var present = GENRES.filter(function(g){ return RELEASES.some(function(r){return r.genre===g;}); });
  present.forEach(function(g){
    var b=document.createElement('button'); b.className='fchip'; b.type='button';
    b.setAttribute('data-genre',g); b.setAttribute('aria-pressed','false'); b.textContent=g;
    chipBox.appendChild(b);
  });

  /* ---- one shared audio element ---- */
  var audio=new Audio(); audio.preload='none'; var current=null;
  audio.addEventListener('timeupdate', function(){
    if(!current) return; var pf=current.querySelector('.pf');
    if(pf && audio.duration) pf.style.width=(audio.currentTime/audio.duration*100)+'%';
  });
  audio.addEventListener('ended', stopPlay);
  function stopPlay(){
    if(!current) return;
    current.classList.remove('playing');
    var btn=current.querySelector('.pbtn'); if(btn){ btn.classList.remove('pause'); btn.innerHTML=ICON_PLAY; }
    current=null;
  }
  function playCard(card,src){
    if(current===card){ if(audio.paused){audio.play();} else {audio.pause(); card.querySelector('.pbtn').innerHTML=ICON_PLAY; card.classList.remove('playing'); return;} }
    if(current && current!==card) stopPlay();
    current=card; audio.src=src;
    var p=audio.play();
    card.classList.add('playing');
    var btn=card.querySelector('.pbtn'); btn.classList.add('pause'); btn.innerHTML=ICON_PAUSE;
    if(p&&p.catch) p.catch(function(){ var pf=card.querySelector('.pf'); if(pf) pf.style.width='0'; });
  }

  /* ---- render cards ---- */
  function cardHTML(r){
    var hasZip = !!r.zip;
    var pbtn   = r.preview ? '<button class="pbtn" aria-label="preview '+r.code+'" data-src="'+r.preview+'">'+ICON_PLAY+'</button>' : '';
    var gtag   = r.genre ? '<span class="gtag">'+r.genre+'</span>' : '';
    var yr     = r.year  ? '<span class="yr">'+r.year+'</span>' : '';
    var title  = r.title || r.code;
    var artist = r.artist ? '<div class="artist">'+r.artist+'</div>' : '<div class="artist arc">…cdr · physical archive…</div>';
    var action = hasZip
      ? '<a class="dl" href="'+r.zip+'" download>'+DL+' download · zip</a>'
      : '<span class="dl nozip" aria-disabled="true">…no digital yet…</span>';
    return '<article class="rcard'+(hasZip?'':' archived')+'" role="button" tabindex="0" data-code="'+r.code+'" data-genre="'+(r.genre||'')+'" data-year="'+(r.year||'')+'" '+
      'data-text="'+((title+' '+(r.artist||'')+' '+r.code+' '+(r.genre||'')+' '+(r.genreFull||'')+' '+(r.country||'')).toLowerCase().replace(/"/g,''))+'">'+
      '<div class="art">'+
        '<img src="'+r.cover+'" alt="'+r.code+(r.title?' — '+r.title:'')+'" loading="lazy" />'+
        '<span class="code">'+r.code+'</span>'+
        gtag + yr + pbtn +
        '<div class="pbar"><div class="pf"></div></div>'+
      '</div>'+
      '<div class="body">'+
        '<div class="ttl">'+title+'</div>'+
        artist +
        action +
      '</div>'+
    '</article>';
  }

  function currentSorted(){
    var arr=RELEASES.slice();
    var mode=sortSel.value;
    function num(r){ return parseInt(r.code.replace(/\D/g,''),10)||0; }
    if(mode==='new') arr.sort(function(a,b){ return (b.year||0)-(a.year||0) || num(b)-num(a); });
    else if(mode==='old') arr.sort(function(a,b){ return (a.year||9999)-(b.year||9999) || num(a)-num(b); });
    else arr.sort(function(a,b){ return num(b)-num(a); }); // by catalogue № — default, newest first
    return arr;
  }
  function renderGrid(){
    grid.innerHTML=currentSorted().map(cardHTML).join('');
    grid.querySelectorAll('.pbtn').forEach(function(btn){
      btn.addEventListener('click', function(e){ e.preventDefault(); playCard(btn.closest('.rcard'), btn.getAttribute('data-src')); });
    });
    applyFilters();
  }

  /* ---- filters ---- */
  var activeGenres={};
  function applyFilters(){
    var q=(search.value||'').trim().toLowerCase();
    var yr=yearSel.value;
    var gOn=Object.keys(activeGenres).filter(function(k){return activeGenres[k];});
    var shown=0;
    grid.querySelectorAll('.rcard').forEach(function(c){
      var ok=true;
      if(q && c.getAttribute('data-text').indexOf(q)===-1) ok=false;
      if(ok && yr!=='all' && c.getAttribute('data-year')!==yr) ok=false;
      if(ok && gOn.length && gOn.indexOf(c.getAttribute('data-genre'))===-1) ok=false;
      c.classList.toggle('hide',!ok);
      if(ok) shown++;
    });
    countN.textContent=shown;
    empty.classList.toggle('show', shown===0);
  }

  search.addEventListener('input', applyFilters);
  yearSel.addEventListener('change', applyFilters);
  sortSel.addEventListener('change', renderGrid);
  chipBox.addEventListener('click', function(e){
    var b=e.target.closest('.fchip'); if(!b) return;
    var g=b.getAttribute('data-genre'); activeGenres[g]=!activeGenres[g];
    b.setAttribute('aria-pressed', String(!!activeGenres[g]));
    applyFilters();
  });
  document.getElementById('clearFilters').addEventListener('click', function(){
    search.value=''; yearSel.value='all'; activeGenres={};
    chipBox.querySelectorAll('.fchip').forEach(function(b){b.setAttribute('aria-pressed','false');});
    applyFilters();
  });

  /* ---- ledger: URL001 → URL104 ---- */
  var have={}; RELEASES.forEach(function(r){ have[r.code]=true; });
  var lh='';
  for(var i=1;i<=104;i++){
    var code='URL'+('00'+i).slice(-3);
    if(have[code]) lh+='<a class="cstamp live" href="#'+code+'" data-jump="'+code+'">'+code+'</a>';
    else lh+='<span class="cstamp">'+code+'</span>';
  }
  ledger.innerHTML=lh;
  ledger.addEventListener('click', function(e){
    var a=e.target.closest('[data-jump]'); if(!a) return; e.preventDefault();
    var code=a.getAttribute('data-jump');
    // make sure it's visible: clear filters first
    document.getElementById('clearFilters').click();
    var card=grid.querySelector('.rcard[data-code="'+code+'"]');
    if(card){
      var y=card.getBoundingClientRect().top+window.scrollY-110;
      window.scrollTo({top:y, behavior:'smooth'});
      card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash');
    }
  });

  /* ---- quick view (click a card) ---- */
  var byCode={}; RELEASES.forEach(function(r){ byCode[r.code]=r; });
  var qv=document.getElementById('qv');
  function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function openQV(r){
    if(!qv||!r) return;
    var cov=document.getElementById('qvCover');
    cov.src=r.cover; cov.alt=r.code+(r.title?' — '+r.title:'');
    document.getElementById('qvCode').textContent=r.code;
    document.getElementById('qvTitle').textContent=r.title||r.code;
    var a=document.getElementById('qvArtist'); a.textContent=r.artist||''; a.style.display=r.artist?'':'none';
    var rows='';
    function row(k,v){ if(v) rows+='<div class="qv-row"><dt>'+k+'</dt><dd>'+esc(v)+'</dd></div>'; }
    row('genre', r.genreFull||r.genre);
    row('origin', r.country);
    row('released', r.date || (r.year?String(r.year):''));
    row('catalogue', r.code);
    /* CDr status — bone/white = available, red = gone. never green. */
    rows+='<div class="qv-row"><dt>physical</dt><dd>'+(r.cdr
      ? '<span class="qv-cdr yes">cdr — available</span>'
      : '<span class="qv-cdr no">cdr — sold out</span>')+'</dd></div>';
    document.getElementById('qvMeta').innerHTML=rows;
    document.getElementById('qvActions').innerHTML = r.zip
      ? '<a class="btn blood" href="'+r.zip+'" download>download — full ▸</a>'
      : '<span class="qv-nozip">…no digital yet… · <b>cdr / physical</b></span>';
    qv.classList.add('open'); qv.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeQV(){ if(!qv) return; qv.classList.remove('open'); qv.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
  if(qv){
    qv.querySelectorAll('[data-qclose]').forEach(function(el){ el.addEventListener('click', closeQV); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeQV(); });
  }
  function cardFromEvent(e){ return e.target.closest('.rcard'); }
  grid.addEventListener('click', function(e){
    if(e.target.closest('a.dl') || e.target.closest('.pbtn')) return;  // let download / play work
    var c=cardFromEvent(e); if(c) openQV(byCode[c.getAttribute('data-code')]);
  });
  grid.addEventListener('keydown', function(e){
    if(e.key!=='Enter' && e.key!==' ') return;
    var c=cardFromEvent(e); if(c){ e.preventDefault(); openQV(byCode[c.getAttribute('data-code')]); }
  });

  renderGrid();
})();
