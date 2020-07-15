class Api::MoviesController < ApplicationController
    def index
        @movies = Movie.all
    end

    def show
        @movies = Movie.find_by(id: params[:id])
    end

    def create
        @movie = Movie.new(movie_params)
        if @movie.save
            render :show
        else
            render json: @movie.errors.full_messages, status: 422
        end
    end

    def update
        @movie = Movie.find_by(id:params[:movie][:id])
        if @movie.update(movie_params)
            render :show
        else
            render json: @movie.errors.full_messages, status:422
        end
    end

    def destroy
        @movie = Movie.find_by(id: params[:id])
        @movie.destroy
        render :show
    end

    private
    def movie_params
        params.require(:movie).permit(:title, :year_released, :score, :description, :photo)
    end
end
