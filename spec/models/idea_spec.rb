require "rails_helper"

RSpec.describe Idea do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:quality) }

  it "should have a default value of 'swill' for quality" do
    idea = Idea.new(title: "Example title", body: "Example body")

    expect(idea.quality).to eq("swill")
  end
end
