require 'rails_helper'

RSpec.feature 'User can change the quality of an idea' do
  context 'when clicking on thumbs up' do
    scenario 'the idea quality goes up', js: true do
      create(:idea)

      visit root_path
      find('.thumbs_up').click

      expect(page).to have_content('plausible')

      visit root_path

      expect(page).to have_content('plausible')
    end
  end

  context 'when clicking on thumbs down' do
    scenario 'the idea quality goes down', js: true do
      create(:idea, quality: 'genius')

      visit root_path
      find('.thumbs_down').click

      expect(page).to have_content('plausible')

      visit root_path

      expect(page).to have_content('plausible')
    end
  end

  context 'when quality is genius and the user clicks thumbs up' do
    scenario 'the idea stays the same quality', js: true do
      create(:idea, quality: 'genius')

      visit root_path
      find('.thumbs_up').click

      expect(page).to have_content('genius')
    end
  end

  context 'when quality is swill and the user clicks thumbs down' do
    scenario 'the idea stays the same quality', js: true do
      create(:idea)

      visit root_path
      find('.thumbs_down').click

      expect(page).to have_content('swill')
    end
  end
end
