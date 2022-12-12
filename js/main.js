const APP = {
  // Entry Point
  init: function () {
    // Add event listeners
    const userSearch = document.getElementById('userSearch');
    userSearch.addEventListener('submit', SEARCH.searchHandler);
    window.addEventListener('popstate', NAV.popstateHandler);
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

    console.log(mediaType, userInput);
  },
};

const NAV = {
  updateURL: function (path) {
    history.pushState({}, '', '#' + path);
  },
  popstateHandler: function (ev) {
    console.log('we are in popstate!');
    console.log(window.location);
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
