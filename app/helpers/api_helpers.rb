module ApiHelpers

	def self.getDoctors query,page
		per_page = APP_CONFIG["betterdoctor"]["per_page"]
		uri = APP_CONFIG["betterdoctor"]["uri"] + "doctors"
		data = {
			name: query,
			user_key: APP_CONFIG["betterdoctor"]["user_key"],
			skip: (page-1) * per_page,
			limit: per_page
		}
		resp = Resthttp::Response.new Resthttp::get_request(uri,data)
		resp
	end

end
