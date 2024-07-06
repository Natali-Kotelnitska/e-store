class Product < ApplicationRecord
  scope :filter_by_brand, ->(brand) { where(brand: brand) if brand.present? }
  scope :filter_by_size, ->(size) { where(size: size) if size.present? }
  scope :filter_by_material, ->(material) { where(material: material) if material.present? }
end
