class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def update 
    @user = User.find_by(id: params[:id])
    if @user.update(update_user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def show
    @user = User.find_by(id: params[:id])
    if @user 
      render :show
    else 
      render json: @user.errors.full_messages, status: 404
    end
    
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_photo)
  end

  def update_user_params
    params.require(:user).permit(:profile_photo)
  end


end
