class PostsController < ApplicationController


    def index 
        render json: Post.all
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        post = Post.create!(post_params)
        render json: post
    end

    def destroy
        post = Post.find(params[:id])
        post.destory
        head :no_content
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post
    end




    private

    def post_params
        params.permit(:name, :description, :category, :image_url, :user_id, :price)
    end


end
