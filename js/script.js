(function($){
	function indexbg (){
			var $wH, $headerContentBg, $headerBgH, $addressBar, $addressBarH;
			$addressBar = $('.header__address-bar');
			$addressBarH = $addressBar.outerHeight();
			$wH = $(window).height();
			$headerContentBg = $('.header-content');
			$headerBgH = $headerContentBg.height($wH - $addressBarH);
		function resize (){
			var $wH, $headerContentBg, $headerBgH, $addressBar, $addressBarH;
			$addressBar = $('.header__address-bar');
			$addressBarH = $addressBar.outerHeight();
			$wH = $(window).height();
			$headerContentBg = $('.header-content');
			$headerBgH = $headerContentBg.height($wH - $addressBarH);			
		}

	var resizeTimer;
	$(window).resize(function() {
	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(resize, 100);
	});

	}

	function readmore (){
		var totalHeight, $sectionAboutContent, $readMoreButt, $pMore, $sectionElements, $closeButt, $sectionAboutH;
		$readMoreButt = $('.readmore-open');
		$closeButt = $('.readmore-close');
		$pMore = $('.more');
		$sectionAboutContent = $('.about').find('.section-content');
		$sectionAboutH = $sectionAboutContent.height();
		$readMoreButt.on('click', function(){
			totalHeight = 0;
			$sectionElements = $sectionAboutContent.children(':not(.more)');
			$sectionElements.each(function(){
			totalHeight += $(this).outerHeight(true);
			console.log(totalHeight);
		});
		$sectionAboutContent
			.css({
				"height": $sectionAboutContent.height(),
				"max-height": 9999
			})
			.animate({
				"height":totalHeight
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
        var $menuButton, $sideNav, $sideNavMask, $mainMenuButton, $sideMainNav, $closeButton;

        $menuButton = $('#menu-reveal');
        $mainMenuButton = $('#menu-main');
        $sideNav = $('#mobile-header-menu__contacts');
        $sideMainNav = $('#mobile-header-menu__main');
        $sideNavMask = $('#side-nav-mask');
        $closeButton = $('.btn-close');


        $menuButton.on('click', function() {
            $sideNav.addClass('visible');
            $sideNavMask.addClass('visible');
			$("html, body").css('position','fixed');
        });

        $mainMenuButton.on('click', function(){
        	$sideMainNav.addClass('visible');
        	$sideNavMask.addClass('visible');
        	$('html,body').css('position','fixed');
        });

        $sideNavMask.add($closeButton).on('click', function() {
            $sideNav.removeClass('visible');
            $sideMainNav.removeClass('visible');
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
})(jQuery);