const Form = require('./form.js.es6');
const form = new Form;

const Idea = require('./idea.js.es6');
const idea = new Idea;

const Quality = require('./quality.js.es6');

const $formEl = $('form');

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
