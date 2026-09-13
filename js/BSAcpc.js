function drop_ad(data) {
	if (data.ads[0].description && data.ads[0].statlink) {
		$('.bsa-apiads').html('<a href="'+data.statlink+'" target="_blank">'+data.description+'</a>');
		if (data.pixel) {
			$('.bsa-apiads').append('<img height=1 width=1 src="'+data.pixel+'"');
		}
	}
}
