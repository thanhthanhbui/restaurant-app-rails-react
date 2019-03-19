class Api::DishesController < ApplicationController
  before_action :set_menu
  before_action :set_dish, only: [:update, :destroy]

  def index
    render json: @menu.dishes
  end

  def create
    dish = @menu.dishes.new(dish_params)
    if dish.save
      render json: [@menu, dish]
    else
      render json: { errors: dish.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @dish.update
      render json: @dish
    else
      render json: { errors: @dish.errors }, status: :unprocessable_entity
    end

  end

  def destroy
    @dish.destroy
    render json: { message: "Dish deleted" }
  end

  private
    def set_menu
      @menu = Menu.find(params[:menu_id])
    end

    def set_dish
      @dish = @menu.dishes.find(params[:id])
    end

    def dish_params
      params.require(:dish).permit(:title, :price)
    end

end
