angular.module('ngRottenTomatoesMocks')
.value('searchMock', {
  "total": 591,
  "movies": [{
    "title": "Jack and Jill",
    "year": 2011,
    "runtime": "",
    "release_dates": {"theater": "2011-11-11"},
    "ratings": {
      "critics_score": -1,
      "audience_score": 90
    },
    "synopsis": "",
    "posters": {
      "thumbnail": "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif",
      "profile": "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif",
      "detailed": "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif",
      "original": "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif"

    },
    "abridged_cast": [
      {
        "name": "Al Pacino",
        "characters": []
      },
      {
        "name": "Adam Sandler",
        "characters": []
      },
      {
        "name": "Katie Holmes",
        "characters": []
      }
    ],
    "links": {
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/771205893.json",
      "alternate": "http://www.rottentomatoes.com/m/jack_and_jill_2011/"

    }
  }],
  "links": {
    "self": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Jack&page_limit=1&page=1",
    "next": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Jack&page_limit=1&page=2"
  },
  "link_template": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q={search-term}&page={page-number}&page_limit={results-per-page}"
});
