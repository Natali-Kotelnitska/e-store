require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post products_url, params: { product: { brand: @product.brand, color: @product.color, description: @product.description, image_url: @product.image_url, in_stock: @product.in_stock, material: @product.material, price: @product.price, product_code: @product.product_code, product_name: @product.product_name, size: @product.size } }, as: :json
    end

    assert_response :created
  end

  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { brand: @product.brand, color: @product.color, description: @product.description, image_url: @product.image_url, in_stock: @product.in_stock, material: @product.material, price: @product.price, product_code: @product.product_code, product_name: @product.product_name, size: @product.size } }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product), as: :json
    end

    assert_response :no_content
  end
end
