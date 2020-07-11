class Api::MediaController < ApplicationController
    def index
        @media = Medium.all
    end

    def show
        @media = Medium.find_by(id: params[:id])
    end

    def create
        @medium = Medium.new(medium_params)
        if @medium.save
            render :show
        else
            render json: @medium.errors.full_messages, status: 422
        end
    end

    def update
        @medium = Medium.find_by(id:params[:medium][:id])
        if @medium.update(medium_params)
            render :show
        else
            render json: @medium.errors.full_messages, status:422
        end
    end

    def destroy
        @medium = Medium.find_by(id: params[:id])
        @medium.destroy
        render :show
    end

    private
    def medium_params
        params.require(:medium).permit(:title, :year_released, :type_of, :score, :description)
    end
end
