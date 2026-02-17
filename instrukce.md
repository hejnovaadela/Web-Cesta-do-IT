# Instrukce pro tvorbu webu "Cesta do IT"

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Dbej na bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
- Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

**Základní SEO**
- Strukturuj nadpisy H1-H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
- Urči kanonickou url
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

**Optimalizace obrázků**
- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
- Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

**Vizuální hierarchie a čitelnost**
- Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
- Čitelné fonty s českou diakritikou
- Správné řádkování (line-height 1.5-1.8 pro odstavce)
- Nikdy nezarovnávej text do bloku
- Optimální šířka řádku pro text (max 70% obrazovky)

**Layout**
- Šířku celého webu dej na 85% obrazovky
- Jasné oddělení sekcí a obsahových celků
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
- Dej si záležet na patičce webu
- Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
- Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
- Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka (místo „404“ dej ikonu <i class="bi bi-emoji-frown"></i> a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html)
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie
- Stíny karet pouze velmi jemné
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
- Omezený počet barev (2-3 hlavní + neutrální)
- Primární barva pro CTA (call-to-action) tlačítka
- Neutrální jemné barvy pro pozadí
- Pro text #333333
- Brand barvy (HEX) - je to pouze inspirace, můžeš použít i podobné barvy
    - primární: #174f4d
    - sekundární: #ef5f55
    - tlačítka: vyber vhodnou barvu
    - pozadí: #fef3d7
    - text: #333333

**Fonty**
- Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
- Pokud není jasné, zvol moderní sans-serif font (př. Outfit)

**Struktura**
- Jednostránkový (Single Page Application style or Single Landing Page)
- Položky menu:
    - Pro koho
    - Jak vám pomohu
    - Kudy vece cesta
    - FAQ
    - O mně
    - Reference
    - Ceník, rezervace
    - Kontakt

**Další prvky na webu**
- Vytvoř rezervační systém včetně antispamu (honeypot), doporuč mi službu

**Design**
- Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu png.

**Obrázky**
- Na webu použij fotky (př. přílohy), které najdeš ve složce
    - Obrazky/Hero – pro Hlavní stranu (hero sekce atd.)
    - Obrazky/road – pro Kudy vede cesta
- Na ostatní sekce použij placeholder, nebo doporuč vhodnou fotku - negeneruj!

**Texty**
Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky.

*Hero sekce*
Získejte svou první práci v IT, i když váš životopis zatím zeje prázdnotou. Většina začínajících programátorů narazí na začarovaný kruh: k práci potřebujete praxi a k praxi potřebujete práci. Ukážu vám, jak tento kruh rozbít, jak postavit portfolio, které zaujme, a jak suverénně projít pohovorem, i když za sebou nemáte roky v oboru.

Fotka kruhu

*Pro koho*
Pomohu vám, pokud:
- měníte kariéru a míříte do IT
- dokončili jste kurz nebo rekvalifikaci
- učíte se sami a nevíte, co dál
- posíláte životopisy a nikdo neodpovídá

*Jak vám pomohu*
Společně:
- sestavíme studijní plán na míru
- vytvoříme portfolio odpovídající firemním standardům
- připravíme životopis podle aktuálních požadavků trhu
- vytvoříme motivační dopis, který nezapadne
- vybereme vhodné pracovní nabídky
- připravíme se na konkrétní pohovory

*Kudy vede cesta*
1. Úvodní konzultace zdarma
Poznáme se a načrtneme cestu k vaší nové kariéře.
2. Analýza vaší situace
Zhodnotíme znalosti, zkušenosti a cíle.
3. Plán postupu
Domluvíme konkrétní kroky a priority.
4. Pravidelný mentoring
Práce na portfoliu, CV, pohovorech.
5. Aktivní hledání práce
Reakce na nabídky + příprava na konkrétní výběrová řízení.

*FAQ*
- Je správná doba stát se programátorem?
Ano. Umělá inteligence není náhrada programátorů, ale nástroj. Díky ní vzniká více softwaru a poptávka po IT lidech dlouhodobě roste.
- Proč jsem správná osoba, která vám pomůže?
Díky své specifické kariérní cestě mám opakované zkušenosti, jak uspět u pohovoru na programátora i bez silného CV nebo dlouhé praxe.
- Jak se mi povedlo uspět u pohovorů bez dlouhé praxe?
Díky cílené přípravě, silnému portfoliu a schopnosti ukázat reálné dovednosti místo jen formální praxe.
- Je potřeba závazně objednat určitý počet hodin?
Ne. Délka spolupráce čistě závisí na přání klienta. Od cílené přípravy v jednotkách hodin například například na určitý pohovor po dlouhodobou spolupráci a postupnému se přibližování k úspěšnému získání pracovní nabídky.
- Hodí se mých základní úroveň programovacích schopností?
Ano. Tato služba je cílená jako přemostění od samostudia k získání první práce programátora. Každopádně Vás i nasměruji, co by se hodilo si ještě dostudovat, můžeme konzultovat i technická témata a pomohu s tvorbou portfolia.

*O mně*
Jmenuji se Petr Fiala.
Původně jsem vystudovaný strojní inženýr, nyní pracuji jako programátor ve firmě Oracle.
Během 15 let jsem opakovaně úspěšně absolvoval výběrová řízení na pozici programátora, i když jsem neměl dlouhodobou praxi, která by mi pohovory výrazně usnadnila.
Výuce programování se věnuji dlouhodobě.
V rámci mentoringu jsem své klienty často provázel i procesem hledání práce a pomáhal jim uspět u pohovorů.

*Reference*
Honza
Na pana Fialu jsem narazil díky inzerátu ve chvíli, kdy jsem potřeboval pomoci s dokončením studia na ČVUT. Jeho konzultace pro mě byly natolik přínosné, že se mi podařilo školu úspěšně dostudovat. Naše spolupráce následně pokračovala úspěšnou přípravou na pohovory do mého prvního zaměstnání.

Jiří
Petr mi velmi srozumitelně mi vysvětlil, jak se na pohovoru chovat, naučil mě vyjednávací taktiky a zkrátka to, jak se nejlépe „prodat“. Výsledkem bylo přijetí do tří firem současně, takže jsem si mohl vybírat. Bez Petrových zkušeností by moje úspěšnost byla nepochybně nižší. V kontaktu zůstáváme dodnes i během mého nynějšího zaměstnání, kde mi Petr dál radí v cestě za osobním růstem jako specialisty na AI.

Zdeněk
Petra vřele doporučuji jako profesionálního konzultanta pro kariérní rozhodování. Sám jsem nečekal, jaký vliv na můj profesní posun bude mít člověk, na kterého jsem narazil v podstatě náhodou na internetu.

*cena - nabídka*
Přestože je tento projekt nový a nabízím zaváděcí ceny, výuce programování se věnuji dlouhodobě.
2200 Kč / hod
660 Kč / hod (zaváděcí cena)
✅ Úvodní 30minutová konzultace zdarma
Poznáme se a společně načrtneme cestu k vaší nové kariéře.
👉 Rezervační formulář
Chcete získat první práci v IT rychleji a s jasným plánem?
👉 Domluvte si úvodní konzultaci zdarma

*Patička na každé stránce*
*Kontakt*
Petr Fiala
info@cestadoit.cz
Tel: 734 828 782
IČO: 74544811, zapsán v živnostenském rejstříku
Sídlo: Fanderlíkova 588/32, 616 00 Brno - Žabovřesky
Vytvoř kontaktní formulář včetně antispamu (honeypot), doporuč mi službu - https://formspree.io/
