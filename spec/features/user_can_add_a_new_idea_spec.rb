require 'rails_helper'

RSpec.feature 'User can add a new idea' do
  scenario 'they see the newely created idea', js: true do
    create(:idea)
    title = 'Sample Title'
    body = 'Sample Body'

    visit root_path
    fill_in 'idea_title', with: title
    fill_in 'idea_body',  with: body
    click_button('Save')

    within('.ideas li:first-of-type') do
      expect(page).to have_content(title)
      expect(page).to have_content(body)
    end

    saved_database_idea = Idea.first

    expect(saved_database_idea.title).to eq(title)
    expect(saved_database_idea.body).to eq(body)

    # Idea is still present on reload
    visit root_path

    within('.ideas li:first-of-type') do
      expect(page).to have_content(title)
      expect(page).to have_content(body)
    end
  end
end
