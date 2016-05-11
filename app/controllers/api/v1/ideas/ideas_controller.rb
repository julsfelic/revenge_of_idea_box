module Api
  module V1
    module Ideas
      class IdeasController < ApiController
        def create
          idea = Idea.create(idea_params)
          respond_with :api, :v1, idea
        end

        private

        def idea_params
          params.require(:idea).permit(:title, :body)
        end
      end
    end
  end
end
