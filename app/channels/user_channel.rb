class UserChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    puts "subscribed"
    p @current_user

    stream_from "user_channel"
    @current_user.update(is_active: true)

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
