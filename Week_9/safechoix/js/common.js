$(function() {
	$("a.show_brands").click(function(e) { e.preventDefault(); showSubPage("brands"); });
	$("a.show_uses").click(function(e) { e.preventDefault(); showSubPage("uses"); });
	$("a.show_models").click(function(e) { e.preventDefault(); showSubPage("models"); });
	$(".use_button").click(function(e) { e.preventDefault(); $(this).toggleClass("active"); showUseCheck(); });
	$(window).resize(function() { subPageHeight(); });
});

var curSubPage = null;
function showSubPage(pageid) {
	var wh = $(window).height();
	if (curSubPage == null) {
		$("#"+pageid).css("left","0");
		$("#"+pageid+".subpage,#subpages").show(0);
		subPageHeight();
	} else if (pageid != curSubPage) {
		var newH = Math.max($("#"+pageid).height(), wh);
		$("#"+pageid).css({ "left":"100%", "display":"block" });
		subPageHeight();
		$("#"+curSubPage).animate({ "left":"-100%" }, 800);
		$("#"+pageid).animate({ "left":"0%" }, 800);
	}
	$("html,body").animate({ "scrollTop":wh+"px" }, 800);
	curSubPage = pageid;
}
function subPageHeight() {
	var mh = $(window).height();
	$(".subpage").each(function(ind,el) {
		var h = $(el).height();
		mh = Math.max((h+20), mh);
	});
	$("#subpages").css("height", mh+"px");
}
function showUseCheck() {
	if ($(".use_button.active").length > 0) {
		$("#use_next").hide();
		$("#use_checkmark").show();
	} else {
		$("#use_next").show();
		$("#use_checkmark").hide();
	}
}