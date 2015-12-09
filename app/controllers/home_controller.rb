class HomeController < ApplicationController

	def index
		respond_to do |format|
			format.html
			format.json{
				per_page = APP_CONFIG["betterdoctor"]["per_page"]
				query = params[:query]
				page = params[:page] || 1
				resp  = ApiHelpers::getDoctors(query,page.to_i) rescue {}
				# format data
				@doctors = resp["data"].map.with_index do |d,index|
					{
						id: per_page * (page.to_i - 1) + index + 1,
						firstname: d["profile"]["first_name"],
						lastname: d["profile"]["last_name"],
						image_url: d["profile"]["image_url"],
						gender: d["profile"]["gender"],
						title: d["profile"]["title"],
						language: d["profile"]["languages"].map{|m| m["name"]}.join(","),
						rating: (d["ratings"].first["rating"] rescue ""),
						specialties: d["specialties"].map{|m| m["actor"]},
						bio: d["profile"]["bio"]
					}
				end rescue []
				# cache 3 min
				expires_in 3.minutes, :public => true
				render :json => {doctors: @doctors},:status => resp.status_code
			}
		end
	end
end
