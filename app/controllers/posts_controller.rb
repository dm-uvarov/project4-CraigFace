class PostsController < ApplicationController


    def index 
        render json: Post.all, status: :ok
    end

    def show
        post = Post.find(params[:id])
        render json: post, status: :ok
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post =  @current_user.posts.find(params[:id])
        post.destroy
        head :no_content
    end

    def update
        post =  @current_user.posts.find(params[:id])
        post.update!(post_params)
        render json: post
    end




    private

    def post_params
        params.permit(:name, :description, :category, :image_url, :user_id, :price)
    end


end
