
# Vefforritun 1, 2021: Verkefni 4, CSS #2

[Kynning í fyrirlestri](https://youtu.be/).

Setja skal upp viðmót fyrir Vefforritunarfréttir, fréttamiðil sem færir vefforriturum mikilvægar fréttir af faginu.

Haldið verður áfram með verkefnið:

* [Verkefni 5](https://github.com/vefforritun/vef1-2021-v5/) gerir vefinn skalanlegann og setur upp grid.
* [Verkefni 6](https://github.com/vefforritun/vef1-2021-v6/) setur upp tæki og tól: Sass, Stylelint, og browser-sync. Verkefnið verður „refactorað“ til að nota þetta.

## Útlit

Fyrirmynd að útliti er í `fyrirmynd/` möppu. Skjáskot er tekið í `1500px` breiðum Firefox vafra.

### HTML

Gefið er grunn HTML þar sem búið er að velja merkingfræðileg element m.v. efnið. Vísað er í myndir innan úr efni, fyrir utan mynd sem á að vera bakvið auglýsingu og `clock.svg` sem skal birta við hliðina á dagstíma frétta.

Gera má ráð fyrir að það **verði** að bæta við `class` attributes og auka elementum við lausn/sýnilausn til að geta náð fram útliti.

### Almennt

Þar sem allt útlit skal útfæra í einni CSS skrá, skal huga að cascade og erfðum, þó er fullkomlega eðlilegt að endurtaka eigindi, en t.d. fyrir málsgreinar (`<p>`) þarf aðeins að taka fram einu sinni hvert margin þeirra er.

Gefið er „reset“ þ.a. allt `margin` og `padding` frá vafra sé sett í `0`, einnig er `box-sizing: border-box` sett fyrir öll element.

CSS skal vera án villna og **viðvarana** þegar keyrt í gegnum [CSS validator](https://jigsaw.w3.org/css-validator/).

Allar síður skulu vera villulausar ef prófaðar með HTML validator.

### Gildi og stærðir

* Heildar breidd efnis skal vera `1400px`, miðjað á skjánum
* Grunnletur stærð skal vera `16px` þ.a. `1rem == 16px`
* Allt bil í fyrirmynd er hálf, eitt, eða tvöfalt margfeldi af grunnletur stærð
* Gildi fyrir liti eru gefin sem breytur settar í `:root`
* Leturgerðir:
  * Fyrir meginmál: [Inter](https://fonts.google.com/specimen/Inter), Helvetica, Arial, sans-serif
  * Fyrir fyrirsagnir: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), Georgia, serif
  * Leturþyngdir (e. font weights):
    * Tengill í auglýsingu skal nota þyngd `700`
    * Aðalfyrirsögn skal nota þyngd `600`
    * Tenglar í flokkum skal nota þyngd `400`
    * Birting á dagstíma skal nota þyngd `300`
* Almennt skal aðeins nota hlutfallslegar einingar í breiddir, nema nota þarf `px` gildi til að útfæra birtingu á dagstíma icon

### Takmarkanir

Aðeins skal nota flexbox til að setja upp útlit, þ.e.a.s. **aðeins** `display: flex`.

Ekki skal nota önnur gildi fyrir `display` eða `position` eigindi _nema_ til að setja upp texta yfir mynd í auglýsingu.

Í sýnilausn er eftirfarandi notað:

* `@font-face` til að færa inn leturgerðir og tengd eigindi til að eiga við leturgerðir
  * `src`
  * `font-display: swap`
  * `font-family`
  * `font-size`
  * `font-variation-settings`
  * `line-height`
  * `text-decoration`
* CSS breytur, sjá gefnar breytur innan `:root` og `var()` fall
* Flexbox eigindi, t.d.
  * `align-items`
  * `flex-direction`
  * `flex`
  * `justify-content`
  * `order`
* Bakgrunnseigindi:
  * `background-color`
  * `background-image`
  * `background-position`
  * `background-repeat`
  * `background-size`
  * eða shorthand `background`
* Box model eigindi
  * `margin`
  * `border`
  * `padding`
  * `width`, með hlutfallslegum einingum
  * `height`, til að fastsetja hæðir á myndum sem síðan nota `object-fit`
  * `max-width`

Ekki þarf að huga að skalanleika (síðan þarf ekki að líta vel út í undir `1400px` skjá, athugið að þar sem hámarksbreidd er `1400px` mun efnið liggja alveg utan í vafraglugga í nákvæmlega `1400px`).

## Heimasvæði

Setja skal síður upp á [heimasvæði ykkar hjá HÍ](https://uts.hi.is/node/155) undir möppu `.public_html/vefforritun/verkefni4` svo verkefnið verði aðgengilegt á `https://notendur.hi.is/<notendanafn>/vefforritun/verkefni4` þar sem `<notendnafn>` er notendanafnið þitt (t.d. `osk`).

## Mat

* 15% – Snyrtilega uppsett og gilt CSS
* 15% – Flexbox notað fyrir útlit og takmarkanir virtar
* 30% – Nýjustu fréttir og mest lesið
* 10% – Útlit fyrir auglýsingu
* 30% – Flokkar, skipting og innihald

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 13. september 2021.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags þriðjudaginn 21. september 2021.

Skilaboð skulu innihalda:

* slóð á verkefni
* zip skjali með lausn

Hver dagur eftir skil dregur verkefni niður um 10%, allt að 20% ef skilað fimmtudaginn 23. september 2021 en þá lokar fyrir skil.

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

## Myndir

Myndir frá [Unsplash](https://unsplash.com/):

* [Max Duzij](https://unsplash.com/@max_duz)
* [Emma Dau](https://unsplash.com/@daugirl)
* [Mika Baumeister](https://unsplash.com/@mbaumi)
* [Alex Kotliarskyi](https://unsplash.com/@frantic)
* [Dzmitry Tselabionak](https://unsplash.com/@tsellobenok)
* [LinkedIn Sales Solutions](https://unsplash.com/@linkedinsalesnavigator)
* [Kyle Hanson](https://unsplash.com/@kyledarrenhanson)
* [Mathew Schwartz](https://unsplash.com/@cadop)

> Útgáfa 0.1
