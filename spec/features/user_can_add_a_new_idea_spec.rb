require "rails_helper"

RSpec.feature "User can add a new idea" do
  scenario "they see the newely created idea" do
    create(:idea)
    title = "Sample Title"
    body = "Sample Body"

    visit root_path
    fill_in "title", with: title
    fill_in "body",  with: body
    click_on "Save"
    saved_idea = find(".ideas").all("li").first

    expect(saved_idea).to have_content(title)
    expect(saved_idea).to have_content(body)

    savedDatabaseIdea = Idea.last

    expect(savedDatabaseIdea.title).to eq(title)
    expect(savedDatabaseIdea.body).to eq(body)

    # Idea is still present on reload
    visit root_path
    saved_idea = find(".ideas").all("li").first

    expect(saved_idea).to have_content(title)
    expect(saved_idea).to have_content(body)
  end
end
