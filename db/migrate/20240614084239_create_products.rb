class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :description
      t.decimal :price
      t.string :image_url
      t.string :brand
      t.text :color
      t.string :material
      t.string :size
      t.integer :product_code
      t.boolean :in_stock

      t.timestamps
    end
  end
end
