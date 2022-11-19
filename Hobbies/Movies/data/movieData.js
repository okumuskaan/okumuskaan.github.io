var directorData = {
    "Michelangelo Antonioni": {
        "artist-img": "antonioni",
        "movies": ["avventura", "eclisse", "notte", "desertorosso"]
    },
    "Wong Kar-Wai": {
        "artist-img": "karwai",
        "movies": ["chungking", "falangels"]
    },
    "Jean-Luc Godard": {
        "artist-img": "godard",
        "movies": ["aboutdesouffle", "vivresavie", "mascfem", "bandapart",
        "chinoise"]
    },
    "Ingmar Bergman": {
        "artist-img": "bergman",
        "movies": ["wildstraw", "persona", "höst", "wintlight"]
    },
    "Agnès Varda": {
        "artist-img": "varda",
        "movies": ["sanstoit", "cleo"]
    },
    "Krzysztof Kieślowski": {
        "artist-img": "kieslowski",
        "movies": ["dekalog", "veronique", "aboutlove", "aboutkilling",
        "blindchance", "amateur", "blue", "white", "red"]
    },
    "Krzysztof Zanussi": {
        "artist-img": "zanussi",
        "movies": ["struktura", "illum"]
    },
    "Éric Rohmer": {
        "artist-img": "rohmer",
        "movies": []
    },
    "Robert Bresson": {
        "artist-img": "bresson",
        "movies": []
    },
    "Joachim Trier": {
        "artist-img": "trier",
        "movies": []
    },
    "Luis Buñuel": {
        "artist-img": "bunuel",
        "movies": []
    },
    "Louis Malle": {
        "artist-img": "malle",
        "movies": []
    },
    "Metin Erksan": {
        "artist-img": "erksan",
        "movies": []
    },
    "Jia Zhangke": {
        "artist-img": "zhangke",
        "movies": []
    },
    "Sergei M. Eisenstein": {
        "artist-img": "eisenstein",
        "movies": []
    },
    "Andrey Zvyagintsev": {
        "artist-img": "zvyagintsev",
        "movies": []
    },
    "Andrey Tarkovsky": {
        "artist-img": "tarkovsky",
        "movies": []
    },
    "Jim Jarmusch": {
        "artist-img": "jarmusch",
        "movies": []
    },
    "Frank Capra": {
        "artist-img": "capra",
        "movies": []
    },
    "Jacques Demy": {
        "artist-img": "demy",
        "movies": []
    },
    "Ildikó Enyedi": {
        "artist-img": "enyedi",
        "movies": []
    },
    "Masaki Kobayashi": {
        "artist-img": "kobayashi",
        "movies": []
    },
    "Richard Linklater": {
        "artist-img": "linklater",
        "movies": []
    },
    "Roberto Rosellini": {
        "artist-img": "rosellini",
        "movies": []
    }
};
var movieData = {
    "avventura": {
        "name": "L'avventura",
        "img-code": "avv",
        "img-name": "avv_main.jpeg",
        "background-position": "center",
        "grade": 9.1,
        "extra-info": ["Cannes Jury Prize"],
        "director": "Michelangelo Antonioni",
        "country": ["Italy, France"],
        "year": 1960,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 4
    },
    "eclisse": {
        "name": "L'eclisse",
        "img-code": "ecc",
        "img-name": "ecc_main.jpeg",
        "background-position": "center",
        "grade": 9.4,
        "extra-info": ["Cannes Jury Special Prize"],
        "director": "Michelangelo Antonioni",
        "country": ["Italy, France"],
        "year": 1962,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 1,
         "photo-number": 7
    },
    "notte": {
        "name": "La notte",
        "img-code": "not",
        "img-name": "not_main.jpeg",
        "background-position": "top",
        "grade": 9.7,
        "extra-info": ["Golden Bear"],
        "director": "Michelangelo Antonioni",
        "country": ["Italy, France"],
        "year": 1961,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 8
    },
    "desertorosso": {
        "name": "Il deserto rosso",
        "img-code": "rd",
        "img-name": "rd_main.jpeg",
        "background-position": "center",
        "grade": 9.2,
        "extra-info": ["Golden Lion"],
        "director": "Michelangelo Antonioni",
        "country": ["Italy, France"],
        "year": 1964,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 1,
         "photo-number": 0
    },

    "chungking": {
        "name": "Chung Hing Sam Iam",
        "img-code": "chex",
        "img-name": "chex_main.jpeg",
        "background-position": "center",
        "grade": 9.6,
        "extra-info": [],
        "director": "Wong Kar-Wai",
        "country": ["Hong Kong"],
        "year": 1994,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 5,
         "photo-number": 12
    },
    "falangels": {
        "name": "Do Lok Tin Si",
        "img-code": "fang",
        "img-name": "fang_main.jpeg",
        "background-position": "top",
        "grade": 9.4,
        "extra-info": [],
        "director": "Wong Kar-Wai",
        "country": ["Hong Kong"],
        "year": 1995,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },

    "aboutdesouffle": {
        "name": "À Bout De Souffle",
        "img-code": "abousouf",
        "img-name": "abousouf_main.jpeg",
        "background-position": "top",
        "grade": 9.3,
        "extra-info": ["Silver Bear"],
        "director": "Jean-Luc Godard",
        "country": ["France"],
        "year": 1960,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "vivresavie": {
        "name": "Vivre Sa Vie: Film En Douze Tableaux",
        "img-code": "vsv",
        "img-name": "vsv_main.jpeg",
        "background-position": "top",
        "grade": 9.4,
        "extra-info": ["Venice Special Jury"],
        "director": "Jean-Luc Godard",
        "country": ["France"],
        "year": 1962,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "mascfem": {
        "name": "Masculin Féminin",
        "img-code": "mascfem",
        "img-name": "mascfem_main.jpeg",
        "background-position": "top",
        "grade": 8.9,
        "extra-info": [],
        "director": "Jean-Luc Godard",
        "country": ["France, Sweden"],
        "year": 1966,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "bandapart": {
        "name": "Bande À Part",
        "img-code": "bap",
        "img-name": "bap_main.jpeg",
        "background-position": "top",
        "grade": 8.7,
        "extra-info": [],
        "director": "Jean-Luc Godard",
        "country": ["France"],
        "year": 1964,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "chinoise": {
        "name": "La Chinoise",
        "img-code": "chin",
        "img-name": "chin_main.jpeg",
        "background-position": "top",
        "grade": 8.8,
        "extra-info": [],
        "director": "Jean-Luc Godard",
        "country": ["France"],
        "year": 1967,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },

    "wildstraw": {
        "name": "Smultronstället",
        "img-code": "wstrw",
        "img-name": "wstrw_main.jpeg",
        "background-position": "top",
        "grade": 9.7,
        "extra-info": [],
        "director": "Ingmar Bergman",
        "country": ["Sweden"],
        "year": 1957,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "persona": {
        "name": "Persona",
        "img-code": "pers",
        "img-name": "pers_main.jpeg",
        "background-position": "top",
        "grade": 9.1,
        "extra-info": [],
        "director": "Ingmar Bergman",
        "country": ["Sweden, Brazil"],
        "year": 1966,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "höst": {
        "name": "Höstsonaten",
        "img-code": "hst",
        "img-name": "hst_main.jpeg",
        "background-position": "top",
        "grade": 9.2,
        "extra-info": [],
        "director": "Ingmar Bergman",
        "country": ["Sweden"],
        "year": 1978,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "wintligt": {
        "name": "Nattvardsgästerna",
        "img-code": "wligt",
        "img-name": "wligt_main.jpeg",
        "background-position": "top",
        "grade": 9.7,
        "extra-info": ["Venice Film Critic", "Berlin Fipresci"],
        "director": "Ingmar Bergman",
        "country": ["Sweden"],
        "year": 1963,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },

    "sanstoit": {
        "name": "Sans Toit Ni Loi",
        "img-code": "stnl",
        "img-name": "stnl_main.jpeg",
        "background-position": "top",
        "grade": 8.4,
        "extra-info": [],
        "director": "Agnès Varda",
        "country": ["France"],
        "year": 1985,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "cleo": {
        "name": "Cléo De 5 À 7",
        "img-code": "cleo",
        "img-name": "cleo_main.jpeg",
        "background-position": "top",
        "grade": 9.0,
        "extra-info": ["Venice Film Critic", "Berlin Fipresci"],
        "director": "Agnès Varda",
        "country": ["France, Italy"],
        "year": 1962,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },

    "dekalog": {
        "name": "Dekalog",
        "img-code": "dklg",
        "img-name": "dklg_main.jpeg",
        "background-position": "top",
        "grade": 10,
        "extra-info": [],
        "director": "Krzysztof Kieślowski",
        "country": ["Poland"],
        "year": 1985,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "aboutlove": {
        "name": "Krótki Film O MiŁoŚci",
        "img-code": "ablove",
        "img-name": "ablove_main.jpeg",
        "background-position": "top",
        "grade": 9.6,
        "extra-info": [],
        "director": "Krzysztof Kieślowski",
        "country": ["Poland"],
        "year": 1988,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "aboutkilling": {
        "name": "Krótki Film O Zabijaniu",
        "img-code": "abkil",
        "img-name": "abkil_main.jpeg",
        "background-position": "top",
        "grade": 9.6,
        "extra-info": ["Cannes Jury Prize"],
        "director": "Krzysztof Kieślowski",
        "country": ["Poland"],
        "year": 1988,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "blindchance": {
        "name": "Przypadek",
        "img-code": "bchan",
        "img-name": "bchan_main.jpeg",
        "background-position": "top",
        "grade": 9.4,
        "extra-info": [],
        "director": "Krzysztof Kieślowski",
        "country": ["Poland"],
        "year": 1987,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "amateur": {
        "name": "Amator",
        "img-code": "amat",
        "img-name": "amat_main.jpeg",
        "background-position": "top",
        "grade": 8.8,
        "extra-info": [],
        "director": "Krzysztof Kieślowski",
        "country": ["France, Italy"],
        "year": 1979,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "veronique": {
        "name": "La Double Vie De Véronique",
        "img-code": "vrnq",
        "img-name": "vrnq_main.jpeg",
        "background-position": "top",
        "grade": 9.0,
        "extra-info": [],
        "director": "Krzysztof Kieślowski",
        "country": ["France, Poland"],
        "year": 1991,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "blue": {
        "name": "Trois Couleurs: Bleu",
        "img-code": "bleu",
        "img-name": "bleu_main.jpeg",
        "background-position": "top",
        "grade": 9.7,
        "extra-info": ["Golden Lion"],
        "director": "Krzysztof Kieślowski",
        "country": ["France, Poland"],
        "year": 1993,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "white": {
        "name": "Trois Couleurs: Blanc",
        "img-code": "blanc",
        "img-name": "blanc_main.jpeg",
        "background-position": "top",
        "grade": 8.9,
        "extra-info": [],
        "director": "Krzysztof Kieślowski",
        "country": ["France, Poland"],
        "year": 1994,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "red": {
        "name": "Trois Couleurs: Rouge",
        "img-code": "rouge",
        "img-name": "rouge_main.jpeg",
        "background-position": "top",
        "grade": 9.0,
        "extra-info": [],
        "director": "Krzysztof Kieślowski",
        "country": ["France, Switzerland"],
        "year": 1994,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },

    "struktura": {
        "name": "Struktura krysztalu",
        "img-code": "struk",
        "img-name": "struk_main.jpeg",
        "background-position": "top",
        "grade": 9.0,
        "extra-info": [],
        "director": "Krzysztof Zanussi",
        "country": ["Poland"],
        "year": 1969,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },
    "illum": {
        "name": "Iluminacja",
        "img-code": "illum",
        "img-name": "illum_main.jpeg",
        "background-position": "top",
        "grade": 8.9,
        "extra-info": ["Golden Leopard"],
        "director": "Krzysztof Zanussi",
        "country": ["Poland"],
        "year": 1973,
        "my-comments": `Easy to parody, impossible to replicate, what Andrew
        Sarris called "Antoniennui"—glamorous European movie stars composed in
        tableaux in front of brutalist architecture, speaking past each other in
         existential aphorisms—can be embraced as a Marxist-influence tract on
         the alienation of contemporary life or snorted at as chic pretention,
         equal and opposite visceral reactions to ambitious modern aesthetics
         which in either case and for better and worse say more about you than
         about the film.`,
         "poster-number": 3,
         "photo-number": 16
    },


};

export {directorData, movieData};
