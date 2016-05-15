const Form = require('./form.js.es6');
const form = new Form;

const Idea = require('./idea.js.es6');
const idea = new Idea;

const Quality = require('./quality.js.es6');

const $formEl = $('form');
const $searchBar = $('.search-form');

$formEl.on('submit', (e) => {
  e.preventDefault();
  idea.postData(form);
});

$(document).on('click', '.delete-idea', (e) => {
  e.preventDefault();
  let $idea = $(e.target).parent();
  idea.deleteData($idea);
});

$(document).on('click', '.thumbs_up', function(e) {
  e.preventDefault();
  let $quality = $(this).prev().prev();
  Quality.increment($quality);
  idea.updateData($quality);
});

$(document).on('click', '.thumbs_down', function(e) {
  e.preventDefault();
  let $quality = $(this).prev().prev().prev();
  Quality.decrement($quality);
  idea.updateData($quality);
});

$(document).on('keydown', '.idea-title', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    idea.updateTitle($(this));
  }
});

$(document).on('keydown', '.idea-body', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    idea.updateBody($(this));
  }
});

function fuzzyMatch(str, pattern) {
  pattern = pattern.split('').reduce((a, b) => `${a}.*${b}`);
  return (new RegExp(pattern)).test(str.toLowerCase());
}

function filterIdeas($ideas, term) {
  $ideas.each(function(index, idea) {
    let ideaText = $(idea).children('.idea-title, .idea-body');
    let ideaTitle = ideaText[0].innerText;
    let ideaBody = ideaText[1].innerText;

    if (term === '' || fuzzyMatch(ideaTitle, term) || fuzzyMatch(ideaBody, term) ) {
      $(idea).removeClass('hide');
    } else {
      $(idea).addClass('hide');
    }
  });
}

$searchBar.on('keyup', function(e) {
  let $ideas = $('.ideas li');
  let searchTerm = e.target.value;

  filterIdeas($ideas, searchTerm);
});
