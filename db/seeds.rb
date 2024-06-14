# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Product.destroy_all

20.times do
  Product.create(
    product_name: Faker::Commerce.product_name,
    description: Faker::Lorem.paragraph(sentence_count: 5),
    price: Faker::Commerce.price,
    image_url: Faker::LoremFlickr.image(search_terms: ['product']),
    brand: Faker::Commerce.brand,
    color: [Faker::Color.color_name], #store one color; TODO: modify for multiple colors
    material: Faker::Commerce.material,
    size: %w[small medium large].sample,
    product_code: Faker::Number.number(digits: 9),
    in_stock: Faker::Boolean.boolean
  )
end
