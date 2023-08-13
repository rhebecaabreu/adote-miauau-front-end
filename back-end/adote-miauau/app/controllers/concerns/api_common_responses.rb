# Esse arquivo e padrao do time WEB, portanto foi apenas trazido de outros lugares

module ApiCommonResponses
  extend ActiveSupport::Concern

  def render_success(data = {})
    render json: data, status: :ok
  end

  def render_created
    render json: { status: 201 }, status: :created
  end

  def render_unprocessable_entity_error(resource = nil)
    data = verify_errors(resource)
    render json: data, status: :unprocessable_entity
  end

  def render_not_found_error
    render json: { status: 404 }, status: :not_found
  end

  def render_unauthorized_error(resource = nil)
    data = verify_errors(resource)
    render json: data, status: :unauthorized
  end

  def render_no_content
    render json: { status: 204 }, status: :no_content
  end

  def render_forbidden_error(resource = nil)
    data = verify_errors(resource)
    render json: data, status: :forbidden
  end

  private

  def verify_errors(resource)
    { errors: resource }
  end
end
