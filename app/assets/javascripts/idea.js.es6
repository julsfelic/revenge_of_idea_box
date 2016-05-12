class Idea {
  newIdea(data) {
    return $(`<li data-id="${data.id}">
        <h1 class="idea-title" contenteditable="true">${data.title}</h1>
        <h2 class="idea-body" contenteditable="true">${data.body}</h2>
        <h3>${data.quality}</h3>
        <a href="#" class="delete-idea">Delete</a>
        <a href="#" class="thumbs_up"><img src="/assets/thumbs_up.png"></a>
        <a href="#" class="thumbs_down"><img src="/assets/thumbs_down.png"></a>
      </li>`);
  }

  postData(form) {
    $.post("/api/v1/ideas", form.data(), (data) => {
      let idea = this.newIdea(data);
      $('.ideas').prepend(idea);
      form.clearFields();
    });
  }

  updateData($quality) {
    $.ajax({
      data: { idea: { quality: $quality.html() } },
      dataType: 'json',
      method: 'PUT',
      url: `/api/v1/ideas/${$quality.parent().data('id')}`
    });
  }

  updateTitle($title) {
    let ideaId = $title.parent().data('id');
    $.ajax({
      data: { idea: { title: $title.text() } },
      dataType: 'json',
      method: 'PUT',
      url: `/api/v1/ideas/${ideaId}`
    });
  }

  updateBody($body) {
    let ideaId = $body.parent().data('id');
    $.ajax({
      data: { idea: { body: $body.text() } },
      dataType: 'json',
      method: 'PUT',
      url: `/api/v1/ideas/${ideaId}`
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
