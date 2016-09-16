(function($){
	function indexbg (){
		var $wH, $headerContentBg, $headerBgH;
		$wH = $(window).height();
		$headerContentBg = $('.header-content');
		$headerBgH = $headerContentBg.height($wH - 30);		
	};

	function readmore (){
		var $el, $ps, $up, totalHeigth, $sectionAboutContent, $readMoreButt, $pMore, $sectionElements, $closeButt, $sectionAboutH;
		$readMoreButt = $('.readmore-open');
		$closeButt = $('.readmore-close');
		$pMore = $('.more');
		$sectionAboutContent = $('.about').find('.section-content');
		$sectionAboutH = $sectionAboutContent.height();
		console.log($sectionAboutH);
		$readMoreButt.on('click', function(){
			totalHeigth = 0;
			$sectionElements = $sectionAboutContent.children(); 
			$sectionElements.each(function(){
			totalHeigth += $(this).outerHeight();
			console.log(outerHeight);
		})
		$sectionAboutContent
			.css({
				"height": $sectionAboutContent.height(),
				"max-height": 9999
			})
			.animate({
				"height":totalHeigth
			});
			$pMore.fadeOut();
			$readMoreButt.fadeOut();
			$closeButt.fadeIn().css('display','block');

			
			return false;

		});
		$closeButt.on('click', function(){
			
			
			$sectionAboutContent
				.animate({
					"height": $sectionAboutH
				})
			$closeButt.fadeOut(100, function(){
				$readMoreButt.fadeIn();
			});
			$pMore.fadeIn();
			return false;
		})
	}
			function projDescr(){
			var projElement, elementImg, elementDescr;
			projElement = $('.element');
			elementImg = $('.element-img');
			elementDescr = $('.element-descr');
			projElement.click(function(){
				projElement.not(this)
					.removeClass('element--active')
					.css('z-index','90')
					.find(elementDescr)
					.removeClass('descr-active');

				$(this).toggleClass('element--active')
					.css('z-index','')
					.find(elementDescr)
					.toggleClass('descr-active');
			});
		};


$(document).ready(function(){
	indexbg();
	readmore();
	projDescr();
})
})(jQuery)