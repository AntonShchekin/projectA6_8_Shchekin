let width = 0;

function progressBar() {
	if (width >= 100) {
		$("#ProgressBarTotal").width(100 + '%');
		$("#ProgressBarTotal").text(100 + '%');
	}
	else {
		$("#ProgressBarTotal").width(width + '%');
		$("#ProgressBarTotal").text(width + '%');
	}
};

progressBar();

$(".btn-1").click(function(){
    width = (width + 1);
    console.log("currentProgress", width);
    progressBar();

});


$(".btn-3").click(function(){
    width = (width + 3);
    console.log("currentProgress", width);
    progressBar();


});

$(".btn-7").click(function(){
    width = (width + 7);
    console.log("currentProgress", width);
    progressBar();

});

