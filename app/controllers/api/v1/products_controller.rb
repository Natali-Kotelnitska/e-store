class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: %i[ show update destroy ]

  # GET /products
  def index
    # Simulate a delay
    sleep 1

    @products = Product.all
                       .filter_by_brand(params[:brand])
                       .filter_by_size(params[:size])
                       .filter_by_material(params[:material])
    render json: @products
  end

  # GET /products/1
  def show

    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:product_name, :description, :price, :image_url, :brand, :color, :material, :size, :product_code, :in_stock)
    end
end
