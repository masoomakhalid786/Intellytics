jQuery(function($) {
    "use strict";
    // Author code here
    $('.comment-reply-link').addClass('btn-rep');
    $('.search_box .btn_search_box').click(function(){
        $(this).closest('form').submit();
    });
    $('.widget_recent_entries').find('ul').addClass('category');

    var html_date  = $('.widget_recent_entries').find('.post-date').html();
    $('.widget_recent_entries').find('.post-date').html('');
    $('.widget_recent_entries').find('li a').append('<span class="date">'+html_date+'</span>');

    $('.widget_categories').find('ul').addClass('category2');
    $('.jPushMenuBtn').click(function(){
        $(window).trigger('resize');
        setTimeout(function(){
            $(window).trigger('resize');
        },500)
    });

    if($('#navigation').hasClass('enable_affix')){
        jQuery(".logo > img").attr("src", bizone_params.url_logo);
    }

    if($( window ).width() < 1024){
        $('html').attr('style','margin-top: 0px !important;');
    }

});
//change img to gif on hover by Sheraz bhai and masooma khalid
jQuery('.item_about img').each(function(){
	console.log(jQuery(this).attr('src'));
	jQuery(this).data('onHover', jQuery(this).attr('src') + '.gif');
	jQuery(this).data('onHoverOut', jQuery(this).attr('src'));

	jQuery(this).hover(function(){
		//IN
		console.log('Hover');
		jQuery(this).attr('src', jQuery(this).data('onHover'));
	}, function(){
		//OUT
		console.log('Hover out');
		jQuery(this).attr('src', jQuery(this).data('onHoverOut'));

	});
});

// image loader as a placeholder
//jQuery(window).on('load', function() {
//jQuery(".inteelitics-dialog-background-desktop").fadeOut(100);
//});
