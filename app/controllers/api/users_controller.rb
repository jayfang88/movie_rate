class Api::UsersController < ApplicationController
    def index
        name = params[:name]
        @users = User.where(name: name)
        render json: @users
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :name, :password)
    end
end
