# Tolkien Quiz - Websovellusten perusteet-kurssin harjoitustyö

## :grey_question: Harjoitustyön kuvaus

Tämä harjoitustyö on osa websovellusten kurssia. Projektin aihe oli vapaasti valittavissa, joten toteutin Tolkien-aiheisen tietovisan websovelluksena.


## :clipboard: Harjoitustyön tavoitellut ominaisuudet

### Arvosanaan 5 sovelluksessa on pyritty toteuttamaan seuraavat ominaisuudet
- Tehtävä on palautettu oikein git-repositorioon
- Sivun/sovelluksen idea on järkevä ja sopiva web-sovellukseksi
- Sivu(t) ovat responsiivisia
- Sivun ulkoasu on sopiva valittuun aiheeseen nähden
- Sivu(t)/sovellus sisältää JavaScriptillä toteutettua toiminnallisuutta
- Palautetussa repossa on ohjeiden mukaisesti toteutettu readme-tiedosto
- Tehtävä on palautettu annettuun määräpäivään mennessä
- Sivuja on useita ja käyttäjä pystyy navigoimaan sivujen välillä
- Tallentaa tietoa localstorageen/sessionstorageen
- Sisältää monimutkaisempaa sovelluslogiikkaa kuin yksinkertainen laskuri
tms.


## :mag: Websovelluksen rakenne

- **HTML:** index.html sisältää websovelluksen rakenteen
- **CSS:** Sovelluksen ulkoasu on määritelty .css-tiedostossa
- **functions:** Sisältää käyttöliittymän toiminnot
- **questions:** Sisältää tietovisan kysymykset
- **Quiz:** Sisältää pelilogiikkaa

## :magic_wand: Sovelluksen toiminta

Aloitussivulla valitaan joko tietovisan aloitus tai aiempien tuloksien tarkastelu. 

"Start game" käynnistää tietovisan. Visassa on viisi vaikeusastetta ja jokaisen viiden kysymyksen jälkeen vaikeustaso nousee. Maksimissaan kysymyksiä on 25, mutta mikäli pelaaja vastaa väärin, peli päättyy ja hän näkee saavuttamansa pistemäärän. Kysymykset arvotaan satunnaisesti questions.js-tiedostosta, joka sisältää kullekin vaikeustasolle ~10 mahdollista kysymystä. Myös vastausvaihtoehtojen järjestys arvotaan. Oikea vastaus korostetaan vihreällä ja väärä punaisella. Seuraavaan kysymykseen siirrytään "Next question"-painikkeella.

Kun peli päättyy, pisteet tallennetaan localStorageen. Aloitussivulta pelaaja voi tarkastella aiempia tuloksiaan "Show previous scores"-painikkeesta. Aiemmat tulokset listataan aikajärjestyksessä viimeisimmästä pelikerrasta alkaen.



