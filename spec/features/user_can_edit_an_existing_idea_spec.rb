require 'rails_helper'

RSpec.feature 'User can edit an existing idea' do
  scenario 'the title is updated in the browser and persisted', js: true do
    create(:idea)

    visit root_path
    title = find('.idea-title')
    title.set('JS is the BEST')
    title.native.send_keys(:return)

    expect(page).to have_content('JS is the BEST')

    visit root_path

    expect(page).to have_content('JS is the BEST')
  end

  scenario 'the body is updated in the browser and persisted', js: true do
    create(:idea)

    visit root_path
    title = find('.idea-body')
    title.set('JS is the SUPER BEST')
    title.native.send_keys(:return)

    expect(page).to have_content('JS is the SUPER BEST')

    visit root_path

    expect(page).to have_content('JS is the SUPER BEST')
  end
end
