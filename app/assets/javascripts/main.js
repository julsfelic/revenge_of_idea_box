var $form = $('form');

function ideaData() {
  return {
    idea: {
      title: $('#idea_title').val(),
      body: $('#idea_body').val()
    }
  };
}

function newIdea(data) {
  return $('<li><h1>' + data.title + '</h1><h2>' + data.body + '</h2><h3>' + data.quality + '</h3></li>');
}

function clearFormFields() {
  $('#idea_title').val('');
  $('#idea_body').val('');
}

$form.on('submit', function(e) {
  e.preventDefault();
  $.post("/api/v1/ideas", ideaData(), function(data) {
    console.log(data);
    var idea = newIdea(data);
    $('.ideas').prepend(idea);
    clearFormFields();
  });
});
