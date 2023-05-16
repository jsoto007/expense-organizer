class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :uniq_users

  def uniq_users
    object.users.distinct
  end 

end
