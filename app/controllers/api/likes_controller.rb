class Api::LikesController < ApplicationController

  def index 
    @likes = Like.where(track_id: params[:track_id]);
    render :index
  end

  def create
    @like = Like.new(like_params)
    if @like.save 
    else  
      render json: ['Invalid params for like'], status: 422
    end
  end

  def destroy 
    @like = Like.find(params[:id])
    if @like.destroy 
    else  
      render json: @like.errors.full_messages, status: 401
    end
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :track_id)
  end
end
