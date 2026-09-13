function toggleDarkMode() {
  $.post("/darkmode.php").done(function (data) {
      window.location.reload();    
  });  
}
 
function copyTextToClipboard(text, ele, copied) {
	var linktext = $(ele).html();
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    textArea.id = 'ta';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
				if(successful && ele){
					$(ele).html(copied).delay(800).queue(function(){ $(ele).html(linktext).dequeue(); });
				}
    } catch (err) {
         alert('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
    return successful;
}

$(window).resize(function () {
  if (this.innerWidth > 768) {
    $('.nav .ui.dropdown.listitems, .nav .ui.dropdown.language').show();
  } else {
    $('.nav .ui.dropdown.listitems, .nav .ui.dropdown.language').hide();
  }
});

$(document).ready(function () {
  if (window.innerWidth < 768) {
    $('.nav .ui.dropdown.listitems, .nav .ui.dropdown.language').hide();
  }  
  
  $('.ui.sticky')
    .sticky({
      offset: 75,
      context: '#main-segment',
      pushing: true
    });  
});