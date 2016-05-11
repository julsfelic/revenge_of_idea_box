class Idea {
  newIdea(data) {
    return $(`<li data-id="${data.id}">
        <h1>${data.title}</h1>
        <h2>${data.body}</h2>
        <h3>${data.quality}</h3>
        <a href="#" class="delete-idea">Delete</a>
      </li>`);
  }

  postData(form) {
    $.post("/api/v1/ideas", form.data(), (data) => {
      let idea = this.newIdea(data);
      $('.ideas').prepend(idea);
      form.clearFields();
    });
  }

  deleteData($idea) {
    $.ajax({
      dataType: 'json',
      method: 'DELETE',
      url: `/api/v1/ideas/${$idea.data('id')}`,
      success: (data) => {
        $idea.hide();
      }
    });
  }
}

module.exports = Idea;
