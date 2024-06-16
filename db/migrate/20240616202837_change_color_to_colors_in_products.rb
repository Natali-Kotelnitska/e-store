class ChangeColorToColorsInProducts < ActiveRecord::Migration[7.1]
  def change
    rename_column :products, :color, :colors
    change_column :products, :colors, :string, array: true, default: [], using: "(string_to_array(colors, ','))"
  end
end
