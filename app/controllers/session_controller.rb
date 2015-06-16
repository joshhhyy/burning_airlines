class SessionController < ApplicationController
  def new
  end

  def create
   user = User.find_by :email => params[:email]
   if user.present? && user.authenticate(params[:password])
     session[:user_id] = user.id
     redirect_to user_path( user )

   else
     flash[:notice] = "Invalid login, please try again."
     redirect_to login_path
   end
 end

  def destroy
  end
end
