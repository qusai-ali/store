
$(document).ready(function(){

	/* ======= Home Page ======= */

	/* -- Fixed Header -- */
	$(window).scroll(function(){
		if($(window).scrollTop() > 200) {
			$('header').addClass('fixed');
		} else {
		  $('header').removeClass('fixed');
		}
	});
	/* -- ./Fixed Header -- */

	/* -- Main Vertical Menus On Y Slide  -- */
	var swiper =new Swiper('.swiper-container', {
		freeMode:true,
		zoom : false,
		watchOverflow: false,
		noSwiping: true, 
		direction:'horizontal',
		allowTouchMove: false,
        speed: 1400,
        slidesPerView:'auto',
        autoResize: false,
		pagination: {
		  el:'.swiper-pagination',
		  hide:true,
		},
		navigation: {
		  nextEl:'.swiper-button-next',
		  prevEl:'.swiper-button-prev',
		  hide:true,
		},
		scrollbar: {
		  hide:true,
		},
		breakpoints: {  
			767: {       
				noSwiping: false, 
				allowTouchMove: true,
				zoom : true,
				watchOverflow: true,
			}  
		 } 
	});
	/* -- ./Main Vertical Menus On Y Slide-- */

	/* -- Go To Top -- */
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('.go-to-top').addClass('go');
		} else {
		  $('.go-to-top').removeClass('go');
		}
	});
	$('.go-to-top').on('click',function(){
		$('html,body').animate({
			scrollTop : '0'
		},1000);
	});
	/* -- ./Go To Top -- */

	/* -- Search -- */
	$('header form input').on('focus',function(){
		$('header form').addClass('focus');
	});
	$('header form input').on('focusout',function(){
		$('header form').removeClass('focus');
	});
	/* -- ./Search -- */

	/* -- Open & Close Login List -- */
	$(document).on('click',function(e){
        if ($(e.target).is('header .lists-btn, header .lists-btn *')) {
            $('header .login-dropdown').toggleClass('open');
        }
        else {
            $('header .login-dropdown').removeClass('open');
        }
		if($(e.target).is('header .login-dropdown, header .login-dropdown *')) {
			$('header .login-dropdown').addClass('open');
		}
    });
	/* -- ./Open & Close Login List -- */

	/* -- Show & Hide Inner menus -- */
	$('.side-main-menu .list-area li.sepatret').each(function(){
		var all_list_height =  $(this).parent().innerHeight(),
			top_height = 0,
			index_li = $(this).index();
		for (var i=1; i<=index_li; i++) {
			var temp = 'li:nth-child(' + i + ')';
			top_height += $(this).siblings(temp).innerHeight();
		}
		$(this).parent().css({
			'height' : top_height + 'px',
			'overflow' : 'hidden'
		});
		$(this).parent().attr('data-short-length',top_height);
		$(this).parent().attr('data-long-length',all_list_height);
	});
	$('.side-main-menu .show-more').on('click',function(){
		if (!$(this).siblings('ul').hasClass('open')) {
			var temp = $(this).siblings('ul').data('long-length');
			$(this).siblings('ul').css({
				'height': temp + 'px'
			});
			$(this).siblings('ul').addClass('open');
			$(this).addClass('open');
			$(this).children('span').text('عرض أقل');
		} else {
			var temp = $(this).siblings('ul').data('short-length'),
				el_height = $(this).siblings('ul').innerHeight();
			$(this).siblings('ul').css({
				'height': temp + 'px'
			});
			$(this).siblings('ul').removeClass('open');
			$(this).removeClass('open');
			$(this).children('span').text('عرض الكل');
		}
	});
	/* -- ./Show & Hide Inner menus -- */
	
	/* -- Open & Close Side Menu -- */
	$('header .main-btn').on('click',function(){
		$('.side-main-menu').addClass('open');
		$('.overlay-all').fadeIn(500);
	});
	$('.side-main-menu .close-all-btn').on('click',function(){
		$('.side-main-menu').removeClass('open');
		$('.overlay-all').fadeOut(500);
		$('.side-main-menu .sub-menu-cat.open').removeClass('open');
	});
	$('.overlay-all').on('click',function(){
		$('.side-main-menu').removeClass('open');
		$('.overlay-all').fadeOut(500);
		$('.side-main-menu .sub-menu-cat.open').removeClass('open');
	});
	/* -- ./Open & Close Side Menu -- */

	/* -- Open & Close Sub Menu -- */
	$('.side-main-menu .list-area ul li.sub-menu').on('click',function(){
		var sub_menu_name = $(this).data('value'),
			temp = '.side-main-menu .sub-menu-cat[data-value="' + sub_menu_name + '"]';
		$(temp).addClass('open');
	});
	$('.side-main-menu .sub-menu-cat .return-menu').on('click',function(){
		$(this).parent().removeClass('open');
	});
	/* -- ./Open & Close Sub Menu -- */

	/* -- Open & Close Search Form In Mobile -- */
	var top_position = $(window).scrollTop();
	$('header .search-btn').on('click',function(){
		$('header form').toggleClass('open');
	});
	
	if($(window).innerWidth() < 771) {
	    $('header form').addClass('open');
		$('header .search-btn').fadeOut(500);
	}
	$(window).on('resize',function(){
		if($(window).innerWidth() < 771) {
			$('header form').addClass('open');
			$('header .search-btn').fadeOut(500);
		}
	});
	if($(window).innerWidth() < 771) {
		if($(window).scrollTop() < 100) {
			$('header form').addClass('open');
			$('header .search-btn').fadeOut(500);
		} 
	}
	$(window).on('scroll',function(e){
		if($(window).innerWidth() < 771) {
			if($(window).scrollTop() < 100) {
				$('header form').addClass('open');
				$('header .search-btn').fadeOut(500);
			} else {
				$('header form').removeClass('open');
				$('header .search-btn').fadeIn(500);
			}
		}
	});
	/* -- ./Open & Close Search Form In Mobile -- */

	/* -- Style for Profile List -- */
	if ($(window).innerWidth() < 771) {
		var third_list = $('header .login-dropdown .inner-box-dropdown .col:nth-child(3)').html();
		$('header .login-dropdown .inner-box-dropdown .col:nth-child(2)').append('<div class="new-added"></div>');
		$('header .login-dropdown .inner-box-dropdown .col:nth-child(2) .new-added').append(third_list);
		$('header .login-dropdown .inner-box-dropdown .col:nth-child(3)').hide();
	}
	$(window).on('resize',function(){
		if ($(window).innerWidth() < 771) {
			if (!$('header .login-dropdown .inner-box-dropdown .col:nth-child(2) div').hasClass('new-added')) {
				third_list = $('header .login-dropdown .inner-box-dropdown .col:nth-child(3)').html();
				$('header .login-dropdown .inner-box-dropdown .col:nth-child(2)').append('<div class="new-added"></div>');
				$('header .login-dropdown .inner-box-dropdown .col:nth-child(2) .new-added').append(third_list);
				$('header .login-dropdown .inner-box-dropdown .col:nth-child(3)').hide();
			}
		} else {
			third_list = $('header .login-dropdown .inner-box-dropdown .col:nth-child(3)').html();
			$('header .login-dropdown .inner-box-dropdown .col:nth-child(2) .new-added').remove();
			$('header .login-dropdown .inner-box-dropdown .col:nth-child(3)').show();
		}
	});	
	/* -- ./Style for Profile List -- */

	/* -- All Section Menu Position -- */
	function subMenuPosition(el) {
		var menu_height = el.innerHeight(),
			menu_width = el.innerWidth(),
			menu_top_offset = el.position().top,
			link_offset = el.siblings('a').position().top,
			parent_cel_left = el.parents('.col').offset().left,
			menu_position = link_offset - (menu_height /2) + 10,
			arrow_position = link_offset - menu_top_offset;
		// Set Top For Menu
		if (menu_position > 0) {
			el.css({
				'top' : menu_position + 'px'
			});
			el.children('.arrow').css({
				'top' : (menu_height/2 - 7) + 'px' ,
			});
		} else {
			el.css({
				'top' : '-7px'
			});
			menu_top_offset = el.position().top;
			arrow_position = link_offset - menu_top_offset + 7;
			el.children('.arrow').css({
				'top' : arrow_position + 'px' ,
			});
		}
		// Set Left Or Right For Menu
		if ((parent_cel_left - menu_width - 20) > 0) {
			el.css({
				'right': '100%',
				'left' : 'auto'
			});
			el.children('.arrow').removeClass('left-arrow');
		} else {
			el.css({
				'right': 'auto',
				'left' : '100%'
			});
			el.children('.arrow').addClass('left-arrow');
		}
		
	}
	$('.all-sections-menu .main-sections .sub-sub-sections').each(function() {
		subMenuPosition($(this));
	});
	$(window).on('resize',function(){
		$('.all-sections-menu .main-sections .sub-sub-sections').each(function() {
			subMenuPosition($(this));
		});
	});
	/* -- ./All Section Menu Position -- */

	/* -- Open & Close All Sections Menu -- */
	$('.link-list .side-menu').on('click',function(){
		$().toggleClass('open');
	});
	$(document).on('click',function(e){
        if ($(e.target).is('.link-list .side-menu,.link-list .side-menu *')) {
            $('.all-sections-menu').toggleClass('open');
        }
        else {
            $('.all-sections-menu').removeClass('open');
        }
		if($(e.target).is('.all-sections-menun, .all-sections-menu *')) {
			$('.all-sections-menu').addClass('open');
		}
    });
	/* -- ./Open & Close All Sections Menu -- */

	/* -- Main Slider -- */
	$('.main-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});
	/* -- ./Main Slider -- */

	/* -- One Offer Slider -- */
	$('.one-offer-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
	});
	/* -- ./One Offer Slider -- */

	/* -- 3 Offers Slider -- */
	$('.three-offer-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 3,
  		slidesToScroll: 3,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				}
			}			
		]
	});
	/* -- ./3 Offers Slider -- */

	/* -- 4 Offers Slider -- */
	$('.four-offer-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 4,
  		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				}
			}			
		]
	});
	/* -- ./4 Offers Slider -- */

	/* -- Product Nav Tabs Slider -- */
	$('.product-slider .slider-box').slick({
		rtl: true,
		dots: true,
		autoplay: false,
	});
	$('.products-nave-tabs .sections-list .down-arrow').on('click',function(){
		$('.products-nave-tabs .sections-list').toggleClass('open');
		$('.products-nave-tabs .sections-list ul').slideToggle(500);
	});
	$(window).on('resize',function(){
		if($(window).innerWidth() > 992) {
			$('.products-nave-tabs .sections-list ul').css({
				'display' : 'block'
			});			
		} else {
			$('.products-nave-tabs .sections-list ul').css({
				'display' : 'none'
			});	
		}
	});
	$('.products-nave-tabs .sections-list ul li span').on('click',function(){
		var section_val = $(this).data('value');
		$('.products-nave-tabs .sections-list .img-name').each(function(){
			if ($(this).data('value') == section_val) {
				$(this).fadeIn(500);
			} else {
				$(this).fadeOut(1);
			}
		});
		$('.products-nave-tabs .slider-box').each(function(){
			if ($(this).data('value') == section_val) {
				$(this).addClass('open');
				$(this).fadeIn(500);
			} else {
				$(this).removeClass('open');
				$(this).fadeOut(1);
			}
		});
		$('.products-nave-tabs .products-box').each(function(){
			if ($(this).data('value') == section_val) {
				$(this).css({
					'display': 'flex'
				});
				$(this).fadeIn(500);
			} else {
				$(this).fadeOut(1);
				$(this).css({
					'display': 'none'
				});
			}
		});
	});
	
	/* -- ./Product Nav Tabs Slider -- */

	/* -- Just For You Slider -- */
	$('.just-for-you .just-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 1101,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: "unslick"
			}			
		]
	});
	/* -- ./Just For You Slider -- */

	/* -- Just For You .. Product Rate Style on Mobile -- */
	$('.just-for-you .product-block .rate').each(function(){
		var rate_num = $(this).children('.gold').index();
		$(this).append('<span>('+ rate_num +')</span>');
	});
	/* -- ./Just For You .. Product Rate Style on Mobile -- */

	/* -- Most Selled -- */
	$('.most-selled .most-selled-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 7,
  		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1101,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					arrows: false,
				}
			}, 
			{
				breakpoint: 768,
				settings: "unslick"
			}
		]
	});
	/* -- ./Most Selled -- */

	/* -- Navigation Record -- */
	$('.nav-record .record-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 10,
  		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 7,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: "unslick"
			}			
		]
	});
	/* -- ./Navigation Record -- */

	/* -- Product With Background -- */
	$('.products-bg .products-bg-slider').slick({
		rtl: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 6,
  		slidesToScroll: 6,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: "unslick"
			}			
		]
	});
	/* -- ./Product With Background -- */

	/* ====== ./Home Page ====== */

	/* ====== Terms & Consditions ====== */
	// Scroll To Spicifice Section
	$('.terms-page .content-box .inner-box ul li').on('click',function(){
		var list_value = $(this).data('value'),
			section_name = '.sub-content-block[data-value="' + list_value + '"]',
			scroll_to = $(section_name).offset().top - 70;
		$('html,body').animate({
			scrollTop: scroll_to
		}, 1000);
	});
	/* ====== ./Terms & Consditions ====== */

	/* ====== Login OR Signup Page ====== */ 
	$('.login-page .login-box .group input').on('change',function(){
		if ($(this).val()) {
			$(this).addClass('not-empty');
		} else {
			$(this).removeClass('not-empty');
		}
	});
	$('.show-password').on('click',function(){
		if ($(this).hasClass('shown')){
			$(this).removeClass('shown');
			$(this).siblings('input').attr('type','password');
		} else {
			$(this).addClass('shown');
			$(this).siblings('input').attr('type','text');
		}
	});
	$('.login-page .login-box .panel-header.selected').siblings('.panel-body').slideDown(500);
	$('.login-page .login-box .panel-header.selected')
	$('.login-page .login-box .panel-header').on('click',function(){
		$(this).parent().siblings().children('.panel-body').slideUp(500);
		$(this).parent().siblings().children('.panel-header').removeClass('selected');
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).siblings('.panel-body').slideUp(500);
		} else {
			$(this).addClass('selected');
			$(this).siblings('.panel-body').slideDown(500);
		}
	});
	$('.login-page .login-box .group label').on('click',function(){
		$(this).siblings('input').focus();
	});
	/* ====== ./Login OR Signup Page ====== */ 

	/* ====== Category Page ====== */ 
	if ($('div').hasClass('category-page') && $(window).innerWidth() > 991) {
		var category_box_height,
			category_box_offset_top,
			category_offset_top,
			side_menu_height,
			window_scroll_top, 
			window_scroll;

		setTimeout(() => {
			category_box_offset_top = $('.category-page .cat-box').offset().top;
			category_box_height = $('.category-page .cat-box').innerHeight();
			side_menu_height = $('.category-page .cat-box ul.cat-list').innerHeight();
			category_offset_top = $('.category-page .cat-box ul.cat-list').offset().top;
			window_scroll_top = $(window).scrollTop();
			window_scroll = window_scroll_top + 60;
			categoryMenuScroll();
		}, 200);
		function categoryMenuScroll () {
			var current_menu_top = $('.category-page .cat-box ul.cat-list').offset().top;
			window_scroll_top = $(window).scrollTop();
			window_scroll = window_scroll_top + 60;
			var new_top = window_scroll - category_offset_top;
			if (side_menu_height < category_box_height) {
				
				if (window_scroll > category_offset_top) {
					if((current_menu_top + side_menu_height) >= (category_box_height + category_box_offset_top)) {
						new_top = category_box_height - side_menu_height;
						$('.category-page .cat-box ul.cat-list').css({
							'top' : new_top + 'px'
						});
					} else {
						$('.category-page .cat-box ul.cat-list').css({
							'top' : new_top + 'px'
						});
					}
				} else {
					$('.category-page .cat-box ul.cat-list').css({
						'top' : '0'
					});
				} 
				new_top = window_scroll - category_offset_top;
				if (new_top > 0) {
					if (window_scroll < current_menu_top) {
						$('.category-page .cat-box ul.cat-list').css({
							'top' : new_top + 'px'
						});
					}
				} else {
					if (window_scroll < current_menu_top) {
						$('.category-page .cat-box ul.cat-list').css({
							'top' : '0'
						});
					}
				}
			}
		}

		$(window).scroll(function(){
			categoryMenuScroll();
		});
		
		$(window).on('resize',function(){
			setTimeout(() => {
				category_box_offset_top = $('.category-page .cat-box').offset().top;
				category_box_height = $('.category-page .cat-box').innerHeight();
				side_menu_height = $('.category-page .cat-box ul.cat-list').innerHeight();
				category_offset_top = $('.category-page .cat-box ul.cat-list').offset().top;
				window_scroll_top = $(window).scrollTop();
				window_scroll = window_scroll_top + 60;
				categoryMenuScroll();
			}, 200);
		});
	}

	$('.category-page .cat-box ul.cat-list li').on('click',function() {
		setTimeout(() => {
			category_box_offset_top = $('.category-page .cat-box').offset().top;
			category_box_height = $('.category-page .cat-box').innerHeight();
			side_menu_height = $('.category-page .cat-box ul.cat-list').innerHeight();
			category_offset_top = $('.category-page .cat-box ul.cat-list').offset().top;
			window_scroll_top = $(window).scrollTop();
			window_scroll = window_scroll_top + 60;
			categoryMenuScroll();
			console.log(category_box_height,side_menu_height);
			if (category_box_height <= side_menu_height) {
				var list_option = $(this).innerHeight(),
					option_position_top = list_option + $(this).position().top;
				if (option_position_top > side_menu_height) {
					$(this).parent('ul').scrollTop(option_position_top,1000);
				}
			}
		}, 200);
		if(!$(this).hasClass('selected')){
			var cat_val = $(this).data('value');
			$(this).addClass('selected');
			$(this).siblings().removeClass('selected');
			$('.category-page .cat-box .cat-area').each(function(){
				if ($(this).data('value') == cat_val) {
					$(this).addClass('selected');
				} else {
					$(this).removeClass('selected');
				}
			});
		}
	});
	if ($(window).innerWidth() <= 991) {
		var section_list_height = $('.category-page .cat-box ul.cat-list').innerHeight();
		if ($(window).innerHeight() > section_list_height) {
			$('.category-page .cat-box .cat-area').each(function(){
				$(this).css({
					'max-height' : 'calc(' + $(window).innerHeight() + 'px - 75px)'
				});
			});
		} else {
			$('.category-page .cat-box .cat-area').each(function(){
				$(this).css({
					'max-height' : section_list_height + 'px'
				});
			});
		}
	} else {
		$('.category-page .cat-box .cat-area').each(function(){
			$(this).css({
				'max-height' : 'none'
			});
		});
	}
	$(window).on('resize',function(){
		if ($(window).innerWidth() <= 991) {
			var section_list_height = $('.category-page .cat-box ul.cat-list').innerHeight();
			if ($(window).innerHeight() > section_list_height) {
				$('.category-page .cat-box .cat-area').each(function(){
					$(this).css({
						'max-height' : 'calc(' + $(window).innerHeight() + 'px - 75px)'
					});
				});
			} else {
				$('.category-page .cat-box .cat-area').each(function(){
					$(this).css({
						'max-height' : section_list_height + 'px'
					});
				});
			}
		} else {
			console.log($(window).innerWidth() <= 991);
			$('.category-page .cat-box .cat-area').each(function(){
				$(this).css({
					'max-height' : 'none'
				});
			});
		}
	});
	/* ====== ./Category Page ====== */ 

	/* -- Tracking Order -- */
	if($('.tracking-line ul li:nth-child(3)').hasClass('done')){
		$('.tracking-line ul li:nth-child(2)').addClass('active');
	}
	if($('.tracking-line ul li:nth-child(4)').hasClass('done')){
		$('.tracking-line ul li:nth-child(3)').addClass('active');
	}
	/* -- ./Tracking Order -- */

	/* -- Checkout Page -- */
	$('.sub-product .quantity .min-btn').each(function(){
		var input_val = $(this).siblings('.pro-num').children('input').val();
		if (input_val == 1) {
			$(this).addClass('none');
		}
	});
	$('.sub-product .quantity .plus-btn').on('click',function(){
		$(this).siblings('.min-btn').removeClass('none');
		var input_val = $(this).siblings('.pro-num').children('input').val(),
			one_price = parseInt($(this).parents('.quantity').siblings('.one-price').text());	
		input_val++;
		$(this).siblings('.pro-num').children('input').val(input_val);
		var temp_price = 0;
		$('.sub-product').each(function(){
			var pro_count = $(this).find('.pro-num').children('input').val(),
				one_item_price = parseInt($(this).find('.one-price').text()),
				price_for_one = one_item_price * pro_count;
			temp_price += price_for_one;
		});
		$('.checkout-page .summary-price .all-price span').text(temp_price);
	});
	$('.sub-product .quantity .min-btn').on('click',function(){
		var input_val = $(this).siblings('.pro-num').children('input').val(),
			one_price = parseInt($(this).parents('.quantity').siblings('.one-price').text());	
		if(input_val > 1) {
			input_val--;
			if (input_val == 1) {
				$(this).addClass('none');
			}
			$(this).siblings('.pro-num').children('input').val(input_val);var temp_price = 0;
			$('.sub-product').each(function(){
				var pro_count = $(this).find('.pro-num').children('input').val(),
					one_item_price = parseInt($(this).find('.one-price').text()),
					price_for_one = one_item_price * pro_count;
				temp_price += price_for_one;
			});
			$('.checkout-page .summary-price .all-price span').text(temp_price);
		}
	});
	/* -- ./Checkout Page -- */

	/* -- Shipping Page -- */
	$('.shipping-page .address-form .group input').each(function(){
		if($(this).val() != '') {
			$(this).addClass('not-empty');
		}
	});
	$('.shipping-page .address-form .group .select-value span').each(function(){
		if($(this).text() != '') {
			$(this).parent().addClass('not-empty');
		}		
	});
	$('.shipping-page .address-form .group input').on('change',function(){
		if ($(this).val()) {
			$(this).addClass('not-empty');
		} else {
			$(this).removeClass('not-empty');
		}
	});
	$('.shipping-page .address-form .group label').on('click',function(){
		$(this).siblings('input').focus();
		$(this).siblings('select').focus();
	});
	$('.shipping-page .address-form .group .select-value').on('click',function(){
		$('.shipping-page .address-form .group .select-value').each(function(){
			$(this).removeClass('clicked');
			$(this).removeClass('open');
		});
		$(this).addClass('clicked');
	});
	$('.shipping-page .address-form .group .select-value ~ label').on('click',function(){
		$('.shipping-page .address-form .group .select-value').each(function(){
			$(this).removeClass('clicked');
			$(this).removeClass('open');
		});
		$(this).siblings('.select-value').addClass('clicked');
	});
	$('.shipping-page .address-form .group .select-value span').on('click',function(){
		$('.shipping-page .address-form .group .select-value').each(function(){
			$(this).removeClass('clicked');
			$(this).removeClass('open');
		});
		$(this).siblings('.select-value').addClass('clicked');
	});
	$(document).on('click',function(e){
		if($(e.target).is('.shipping-page .address-form .group .select-value.clicked')) {
			$('.shipping-page .address-form .group .select-value.clicked').toggleClass('open');
		} else if($(e.target).is('.shipping-page .address-form .group .select-value.clicked ~ label')) {
			$('.shipping-page .address-form .group .select-value').toggleClass('open');
		} else if($(e.target).is('.shipping-page .address-form .group .select-value.clicked span')) {
			$('.shipping-page .address-form .group .select-value').toggleClass('open');
		} else {
			$('.shipping-page .address-form .group .select-value.clicked').removeClass('open');
			$('.shipping-page .address-form .group .select-value').removeClass('clicked');
		}
	});
	$('.shipping-page .address-form .group .select-options li').on('click',function(){
		var country_text = $(this).text();
		$(this).parent('.select-options').siblings('.select-value').addClass('not-empty');
		$(this).parent('.select-options').siblings('.select-value').children('span').text(country_text);
		$(this).parent('.select-options').siblings('input[type="hidden"]').val(country_text);
	});
	$('.shipping-page .main-line .options li .edit').on('click',function(){
		$(this).parents('.main-line').siblings('.address-form').slideToggle(500);
	});
	$('.shipping-page .address-form button[type="submit"]').on('click',function(){
		var valid_form = true;
		$(this).parents('.address-form').find('input').each(function(){
			if ($(this).val() == '') {
				valid_form = false;
			}
		});
		if(valid_form){
			$(this).parents('.address-form').slideUp(500);
			if($(this).parents('.address-form').hasClass('add-address-form')){
				$('.shipping-page .add-address').fadeIn(500);
			}
		}
	});
	$('.shipping-page .add-address').on('click',function(){
		$(this).fadeOut(500);
		$('.shipping-page .add-address-form').slideDown(500);
	});
	$('.add-address-form .close-form').on('click',function(){
		$('.shipping-page .add-address').fadeIn(500);
		$(this).parents('.add-address-form').slideUp(500);
		$(this).parents('.add-address-form').find('input').each(function(){
			$(this).val('');
			$(this).removeClass('not-empty');
		});
		$(this).siblings().find('.select-value').removeClass('not-empty');
		$(this).siblings().find('.select-value').children('span').text('');
	});
	$('.shipping-page .shipping-address .main-line p').on('click',function(){
		$(this).siblings('.checkbox').children('input').prop("checked", true);
	});
	/* -- ./Shipping Page -- */

	/* -- Search Results Page -- */
	function searchResultProduct() {
		$('.search-result .search-result-box .pro-box').each(function(){
			$(this).removeClass('no-border');
		});
		var win_width = $(window).innerWidth(),
			real_product_number = $('.search-result .search-result-box .pro-box').length,
			row_product_num = 0;
		if(win_width > 1400) {
			row_product_num = 5;
		} else if ((win_width <= 1400) && (win_width >= 1200)) {
			row_product_num = 4;
		} else if ((win_width <= 1199) && (win_width >= 992)) {
			row_product_num = 3;
		} else if ((win_width <= 991) && (win_width >= 768)) {
			row_product_num = 2;
		}

		if(real_product_number <= row_product_num) {
			$('.search-result .search-result-box .pro-box').each(function(){
				$(this).addClass('no-border');
			});
		} else {
			real_product_number = real_product_number % row_product_num;
			if(real_product_number == 0) {
				real_product_number = row_product_num;
			}
			for (var i = 1; i <= real_product_number; i++) {
				var temp = '.search-result .search-result-box .pro-box:nth-last-child(' + i + ')';
				$(temp).addClass('no-border');
			}
		}
	}
	searchResultProduct();
	$(window).on('resize',function(){
		searchResultProduct();
	});
	/* -- ./Search Results Page -- */

	/* -- Password Edit Page -- */
	$('.password-edit-page .group input').on('change',function(){
		if ($(this).val()) {
			$(this).addClass('not-empty');
		} else {
			$(this).removeClass('not-empty');
		}
	});
	$('.password-edit-page .group label').on('click',function(){
		$(this).siblings('input').focus();
	});
	/* -- ./Password Edit Page -- */

});


