class Publication < ApplicationRecord
  extend Enumerize

  belongs_to :user.
  belongs_to :category

  enumerize :status, in: [:waiting_approval, :approved, :denied], default: :waiting_approval

end
