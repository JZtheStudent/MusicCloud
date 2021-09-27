class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Incorrect Login'], status: 401
    else 
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user.nil?
      render json: {message: 'You are not logged in'}, status: 401
    else
      logout!
      render json: {}
    end
  end

end
