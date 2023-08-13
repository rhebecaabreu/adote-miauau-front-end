class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    @user = User.find_for_database_authentication(email: session_params[:email])
    is_valid = @user.valid_password?(session_params[:password]) if @user.present?

    if is_valid
      sign_in response.result, store: false
      token = response.result.refresh_token
      respond_with response.result, location: '', scope: token
    else
      render_unprocessable_entity_error(response.error)
    end
  end

  private

  def session_params
    params.permit(:email, :password)
  end

end