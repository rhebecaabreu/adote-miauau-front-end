class Pet < ApplicationRecord
  extend Enumerize

  has_many :pictures, as: :imageable

  belongs_to :publication

  enumerize :status, in: [:looking_home, :found_home], default: :looking_home
  enumerize :kind, in: [:dog, :cat], default: :cat

end
