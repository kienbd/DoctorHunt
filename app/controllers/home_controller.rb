class HomeController < ApplicationController

	def index
		respond_to do |format|
			format.html
			format.js {
			}
			format.json{
				query = params[:query]
				page = params[:page] || 1
				resp  = ApiHelpers::getDoctors(query,page.to_i) rescue {}
				@doctors = resp["data"].map.with_index do |d,index|
					{
						id: index + 1,
						firstname: d["profile"]["first_name"],
						lastname: d["profile"]["last_name"],
						image_url: d["profile"]["image_url"],
						gender: d["profile"]["gender"]
					}
				end rescue []
				render :json => {doctors: @doctors},:status => resp.status_code
			}
		end
	end
end
