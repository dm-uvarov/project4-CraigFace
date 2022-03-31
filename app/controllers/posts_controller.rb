class PostsController < ApplicationController


    def index 
        render json: Post.all.order(:id), status: :ok
    end

    def show
        post = Post.find_by!(id: params[:id])
        render json: post, status: :ok
    end

    def create
        # post = @current_user.posts.create!(post_params)
        # render json: post, status: :created
        current_user = User.find_by(id: session[:user_id])
        if current_user 
            newPost = Post.create(name: params[:name],description: params[:description],category: params[:category],image_url: params[:image_url],price: params[:price],user_id: current_user.id)
            if newPost.valid?
                render json: newPost, status: :created
            else
                render json: {errors: ["Unprocessable entity"]}, status: 422
            end
        else
            render json: {errors: ["Unauthorized user"]}, status: 401
        end
    end


    
    def destroy
        post =  Post.find(params[:id])  
        post.destroy
        head :no_content
    end

    def update


        post =  Post.find(params[:id])
        # byebug
        post.update(post_params)
        render json: post,status: :ok
    end




    private

    def post_params
        params.permit(:name, :description, :category, :image_url, :user_id, :price,:likes)
    end


end
