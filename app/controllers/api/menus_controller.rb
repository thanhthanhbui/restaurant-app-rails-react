class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:update, :destroy]

  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @menu.update
      render json: @menu
    else
      render json: { errors: @menu.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @menu.destroy
    render json: { message: "Menu deleted"}
  end

  private
   def set_menu
    @menu = Menu.find(params[:id])
   end

   def menu_params
    params.require(:menu).permit(:title)
   end

end

