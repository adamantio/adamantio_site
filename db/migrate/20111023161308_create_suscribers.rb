class CreateSuscribers < ActiveRecord::Migration
  def self.up
    create_table :suscribers do |t|
      t.string :email
      t.text :comment

      t.timestamps
    end
  end

  def self.down
    drop_table :suscribers
  end
end
