const Form = require('./form.js.es6');
const form = new Form;

const Idea = require('./idea.js.es6');
const idea = new Idea;

const $formEl = $('form');

$formEl.on('submit', (e) => {
  e.preventDefault();
  idea.postData(form);
});
