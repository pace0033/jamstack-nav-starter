const APP = {
  // Entry Point
  init: function () {
    // Add event listeners
    const userSearch = document.getElementById('userSearch');
    userSearch.addEventListener('submit', SEARCH.searchHandler);
    window.addEventListener('popstate', NAV.popstateHandler);

    const splitArray = location.hash.split('/');

    // Determine which page is loaded
    if (document.body.id === 'index') {
      // console.log("we're on index.html");
      const [, type, query] = splitArray;

      console.log(type, query);
      console.log(decodeURIComponent(query));

      API.fetchIndex(type, decodeURIComponent(query));
    } else {
      // THIS FIRES ON CREDITS.HTML
      const [, type, id, title] = splitArray;
      console.log(type, id, title);
      API.fetchCredits(type, id);
    }
  },
};

const API = {
  fetchIndex(type, query) {
    console.log('We are fetching...');
    console.log(`Finding results for media type ${type}`);
    console.log(`Finding results for user input ${query}`);

    // After data comes back from fetch
    // in your .then()
    // Build the DOM
  },
  fetchCredits(type, id) {
    console.log('We are fetching...');
    console.log(`Finding results for media type ${type}`);
    console.log(`Finding results for credits id ${id}`);

    // After data comes back from fetch
    // in your .then()
    // Build the DOM
  },
};

const SEARCH = {
  searchHandler: function (ev) {
    ev.preventDefault();
    const input = document.getElementById('searchInput');
    const select = document.getElementById('mediaType');

    // need values of select and text input
    const mediaType = select.value;
    const userInput = input.value.toLowerCase().trim();

    if (userInput) {
      NAV.updateURL(`/${mediaType}/${userInput}`);
    }

    API.fetchIndex(mediaType, userInput);

    console.log(mediaType, userInput);
  },
};

const NAV = {
  updateURL: function (path) {
    history.pushState({}, '', '#' + path);
  },
  popstateHandler: function (ev) {
    console.log('we are in popstate!');
    console.log(location);

    const splitArray = location.hash.split('/');
    if (document.body.id === 'index') {
      // console.log("we're on index.html");
      const [, type, query] = splitArray;

      console.log(type, query);
      console.log(decodeURIComponent(query));

      API.fetchIndex(type, decodeURIComponent(query));
    } else {
      // THIS FIRES ON CREDITS.HTML
      const [, type, id, title] = splitArray;
      console.log(type, id, title);
      API.fetchCredits(type, id);
    }
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
