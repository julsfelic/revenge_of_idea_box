require 'rails_helper'

RSpec.feature 'User can filter ideas dynamically' do
  scenario 'they only see the matching ideas', js: true do
    idea1 = create(:idea, title: 'Love')
    idea2 = create(:idea, title: 'Hate')

    visit root_path
    fill_in 'search_form_search', with: 'Love'

    expect(page).to have_content 'Love'
    expect(page).to_not have_content 'Hate'
  end
end
