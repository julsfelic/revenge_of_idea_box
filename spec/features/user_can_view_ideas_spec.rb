require "rails_helper"

RSpec.feature "User can view ideas" do
  context "with ideas" do
    scenario "they see a chronologically descending list of ideas" do
      oldest_idea = create(:idea)
      newest_idea = create(:idea)

      visit root_path
      ideas = find(".ideas").all("li")

      [oldest_idea, newest_idea].each do |idea|
        expect(page).to have_content(idea.title)
        expect(page).to have_content(idea.body)
        expect(page).to have_content(idea.quality)
      end

      expect(ideas.first).to have_content(newest_idea.title)
      expect(ideas.last).to have_content(oldest_idea.title)
    end
  end

  context "with no ideas" do
  end

  context "with an idea that has more than 100 characters" do
  end
end
