String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/* format data on search result */
function formatRepo (repo) {
	window.meme = repo

	if(repo.loading) return "Searching .. ";

	var markup = "<div class='select2-result-repository clearfix'>" +
		"<div class='select2-result-repository__avatar'><img src='" + repo.image_url + "' /></div>" +
			"<div class='select2-result-repository__meta'>" +
				"<div class='select2-result-repository__title'>" + repo.firstname + " " + repo.lastname +  "</div>";


				markup += "<div class='select2-result-repository__statistics'>" +
					"<div class='select2-result-repository__forks'><i class='fa fa-user'></i> " + repo.gender.capitalizeFirstLetter() + " </div>" +
						"<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.rating + " Stars</div>" +
							"<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> "  + repo.title +  "</div>" +
								"</div>" +
									"</div></div>";

									return markup;
}

function formatRepoSelection (repo) {
	window.testo = repo;
	return repo.firstname + " " + repo.lastname;
}


/* print data to single show */
function popInfo(data) {
	$(".bs-img-holder").html("<img src='" + data.image_url + "'>'");
	$("#bs-name").html(data.firstname + " " + data.lastname);
	$("#bs-gender").html(data.gender.capitalizeFirstLetter());
	$("#bs-title").html(data.title);
	$("#bs-bio").html(data.bio);
	$("#bs-language").html(data.language);
	var specialties = "";
	data.specialties.forEach(function(e) {
		specialties += "<li><b>" + e + "</b></li>";
	})
	$("#bs-specialties").html(specialties);
	$("#bs-rating").html("");
	for(var i=0;i<data.rating;i++ ) {
		$("#bs-rating").append(" " + "<i class='fa fa-star'></i>");
	}
	$("#single-rs-holder").show();
	$(".select2-selection__choice").html(data.firstname + " " + data.lastname);
	$(".bs-result").addClass("bor");
}

