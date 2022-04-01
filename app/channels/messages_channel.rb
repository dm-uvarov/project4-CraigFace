class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    chat = Chat.find(params[chat_id:])
    stream_for conservation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
