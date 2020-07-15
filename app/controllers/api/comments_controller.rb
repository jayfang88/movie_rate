class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
    end

    def show
        @comment = Comment.find_by(id: params[:id])
    end

    def create
        @comment = Comment.new(comment_params)
        @comment[:user_id] = current_user.id
        @comment[:movie_id] = params[:comment][:movie_id]

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:comment][:id])
        if @commment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:user_id, :movie_id, :body)
    end
end
