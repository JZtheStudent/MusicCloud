class Api::TracksController < ApplicationController
  
  def index 
    @tracks = Track.all 
    render :index
  end

  def show 
    
  end

  def create 
    @track = Track.new(track_params)
    if @track.save
      render :show 
    else 
      render json:  @track.errors.full_messages, status: 401
    end
  end
  
  def update
    @track = Track.find_by(id: params[:id])
    if @track.update(update_track_params)
      render :show
    else  
      render json: @track.errors.full_messages, status: 401
    end
  end
  
  def destroy 
    @track = Track.find_by(id: params[:id])
    if @track.delete
      render json: {message: 'delete successful'}
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  private
  def track_params 
    params.require(:track).permit(:title, :artist_id, :album_art, :music_file)
  end

  def update_track_params
    params.require(:track).permit(:title)
  end

end



