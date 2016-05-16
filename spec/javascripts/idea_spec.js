describe('Idea', function() {

  xit('can be created with image paths', function() {
    var idea = new Idea('/path/1', '/path/2');

    expect(idea.thumbsUpPath).to.eq('/path/1');
    expect(idea.thumbsDownPath).to.eq('/path/2');
  });
});
