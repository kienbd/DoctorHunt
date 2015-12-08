function formatRepo (repo) {
	window.meme = repo

	if(repo.loading) return "Searching .. ";

	var markup = "<div class='select2-result-repository clearfix'>" +
		"<div class='select2-result-repository__avatar'><img src='" + repo.image_url + "' /></div>" +
			"<div class='select2-result-repository__meta'>" +
				"<div class='select2-result-repository__title'>" + repo.firstname + " " + repo.lastname +  "</div>";


				markup += "<div class='select2-result-repository__statistics'>" +
					"<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.gender + " Forks</div>" +
						"<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> "  + " Stars</div>" +
							"<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> "  + " Watchers</div>" +
								"</div>" +
									"</div></div>";

									return markup;
}

function formatRepoSelection (repo) {
	return repo.firstname + " " + repo.lastname;
}

