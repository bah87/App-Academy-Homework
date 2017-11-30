class UserMailer < ApplicationMailer
  default from: 'App Academy <everybody@appacademy.io>'

  def welcome_email(user)
    @user = user
    @url  = 'example.com/session/new'
    mail(to: user.username, subject: 'Welcome to 99Cats!')
  end
end
