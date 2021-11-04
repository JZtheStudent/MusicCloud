class Api::LikesController < ApplicationController

  def index 
    @likes = Like.where(track_id: params[:track_id]);
    render :index
  end

  def create

  end

  def destroy 

  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :track_id)
  end
end
