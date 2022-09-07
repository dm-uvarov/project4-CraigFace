class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    user = User.find_by(username: params[:username])
    stream_for user
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
