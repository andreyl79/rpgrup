(function($){
	function indexbg (){
		var $wH, $headerContentBg, $headerBgH, $addressBar;
		$addressBar = $('.header__address-bar');
		$addresBarH = $addressBar.outerHeight();
		console.log($addresBarH);
		$wH = $(window).height();
		$headerContentBg = $('.header-content');
		$headerBgH = $headerContentBg.height($wH - $addresBarH);
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
			$sectionElements = $sectionAboutContent.children(':not(.more)');
			$sectionElements.each(function(){
			totalHeigth += $(this).outerHeight(true);
			console.log(outerHeight);
		});
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
			var aboutStart = $('#about-start');
			var destination = $(aboutStart).offset().top;
            $('html,body').animate({scrollTop: destination}, 300, function () {
                $sectionAboutContent
                    .animate({
                        "height": $sectionAboutH
                    }, 300);
            });


			$closeButt.fadeOut(100, function(){
				$readMoreButt.fadeIn();
			});
			$pMore.fadeIn();
			return false;
		})
	}
    function projDescr(){
        var item;
        item = $('.item');
        item.on('click', function (evt) {
            var $this, $items, $target;
            $this = $(this);
            $items = $('.item');
            $target = $(evt.target);

            evt.preventDefault();
            evt.stopPropagation();
            $this.parent().toggleClass('active');
            $this.toggleClass('js--show');
            $items.not(this).removeClass('js--show').parent().removeClass('active');
        })
    }

    function nav() {
        var $menuButton, $sideNav, $sideNavMask;

        $menuButton = $('#menu-reveal');
        $sideNav = $('#mobile-header-menu__contacts');
        $sideNavMask = $('#side-nav-mask');

        $menuButton.on('click', function() {
            $sideNav.addClass('visible');
            $sideNavMask.addClass('visible');
			$("html, body").css('position','fixed');
        });

        $sideNavMask.on('click', function() {
            $sideNav.removeClass('visible');
            $sideNavMask.removeClass('visible');
			$("html, body").css('position','');
        });
    }


$(document).ready(function(){
	indexbg();
	readmore();
	projDescr();
    nav();
})
})(jQuery)