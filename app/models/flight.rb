# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  flight_no   :integer
#  departure   :string
#  destination :string
#  date        :string
#  plane_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :reservations
end
