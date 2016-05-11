class Idea {
  newIdea(data) {
    return $('<li><h1>' + data.title + '</h1><h2>' + data.body + '</h2><h3>' + data.quality + '</h3></li>');
  }

  postData(form) {
    $.post("/api/v1/ideas", form.data(), (data) => {
      let idea = this.newIdea(data);
      $('.ideas').prepend(idea);
      form.clearFields();
    });
  }
}

module.exports = Idea;
