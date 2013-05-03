/* Funções Fancybox*/
$(document).ready(function(){
	// Templates
	$('a.fancybox').each(function(){
		var dWidth=parseInt($(this).attr('href').match(/width=[0-9]+/i)[0].replace('width=',''));  
		var dHeight=parseInt($(this).attr('href').match(/height=[0-9]+/i)[0].replace('height=',''));
		$(this).fancybox({
			'href':$(this).attr('href'),
			'type':'iframe',
			'width':dWidth,
			'height':dHeight,
			'autoScale':false,
			'transitionIn':'elastic',
			'transitionOut':'elastic',
			'title':$(this).attr('title'),
			'titlePosition':'inside',
			'centerOnScroll':true
		});
	});
	
	// Imagens
	$(".fancyboximg").each(function(){
		var img=new Image();
		img.src=$(this).attr('href');
		img.onload=function(){
			$(".fancyboximg").fancybox({
				'href':$(this).attr('href'),
				'type':'image',
				'width':img.width,
				'height':img.height,
				'autoScale':false,
				'showCloseButton':false,
				'titlePosition':'inside',
				'titleFormat':formatTitle,
				'centerOnScroll':true
			});
		}
	});
	
	//Fancybox para games
	$('a.fancyboxgames').each(function(){
		var dWidth=parseInt($(this).attr('href').match(/width=[0-9]+/i)[0].replace('width=',''));  
		var dHeight=parseInt($(this).attr('href').match(/height=[0-9]+/i)[0].replace('height=',''));
		$(this).fancybox({
			'href':$(this).attr('href'),
			'type':'iframe',
			'autoScale':true,
			'width':dWidth,
			'height':dHeight,
			'padding':10,
			'transitionIn':'elastic',
			'transitionOut':'elastic',
			'titlePosition':'inside',
			'centerOnScroll':true,
			'hideOnContentClick':false,
			'onClosed': function(){ location.reload(); }
		});
	});
	
});
function formatTitle(title, currentArray, currentIndex, currentOpts){
	return '<div style="padding-bottom:5px;"><span style="float:right;"><a href="javascript:;" onclick="$.fancybox.close();"><img src="/images/fancybox/fancy_close.png" /></a></span>' + (title && title.length ? '<b>' + title + '</b>' : '' ) + ' (' + (currentIndex + 1) + ' de ' + currentArray.length + ')</div>';
}

function doRefresh(){
	window.location.href=unescape(window.location.pathname+window.location.search);
}