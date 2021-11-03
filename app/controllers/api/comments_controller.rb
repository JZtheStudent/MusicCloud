class Api::CommentsController < ApplicationController

  def index 
    @comments = Comment.where(track_id: params[:track_id]);
    render :index
  end

  def create 
    @comment = Comment.new(comment_params)
    if @comment.save
    else 
      render json: ['Invalid params for comment'], status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy 
    else 
      render json: @comment.errors.full_messages, status: 401
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:commenter_id, :track_id, :body)
  end

end