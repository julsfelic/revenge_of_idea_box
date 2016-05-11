class Form {
  data() {
    return {
      idea: {
        title: $('#idea_title').val(),
        body: $('#idea_body').val()
      }
    };
  }

  clearFields() {
    $('#idea_title').val('');
    $('#idea_body').val('');
  }
}

module.exports = Form;
