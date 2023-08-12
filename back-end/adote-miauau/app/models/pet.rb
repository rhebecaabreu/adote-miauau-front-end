class Pet < ApplicationRecord
  extend Enumerize

  belongs_to :publication

  enumerize :status, in: [:looking_home, :found_home], default: :looking_home

end
