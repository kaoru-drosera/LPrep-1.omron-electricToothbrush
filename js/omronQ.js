// 大鬼門・スクロールアニメーション（コピペッた）
// スクロールアニメーション（ヘッダー）
$(window).on('load', function () {

	$('.Q1').each(function(i) {
		$(this).css('transition-delay', 0.1 * i + 's')
	});

	$('.Q1').addClass('Qshow');

// スクロールアニメーション（メイン）
	var winh = $(window).height();

	$('.JQ').each(function() {
		$(this).data('top', $(this).offset().top - (winh * 0.75))
	});

	$(window).on('scroll', function () {
		var myTop = $(window).scrollTop();

		$('.JQ').each(function() {
			if( myTop >= $(this).data('top') ) {
				$(this).addClass('fire');
				if ($(this).hasClass('num-wrapper') ) {
					$(this).closest('.content').find('.JQ').addClass('fire');
				}
			}
		});
	});
});


// h-linksスムーズスクロール
$(function(){
	$('.btn').click(function(){
		var id = $(this).attr('href');
		var pos = $(id).offset().top;
		$('html,body').animate({
			scrollTop:pos
		},250);
	});
});


// トップページボタン
$(function(){
	// 基本的な関数
	var topBtn = $('#topBtn');
	// トップへスムーズスクロール
	topBtn.click(function(){
		var id = $(this).attr('href');
		var hpos = $(id).offset().top;
		$('html,body').animate({
			scrollTop:hpos
		},250);
	});

	// スクロールでボタン出現
	topBtn.hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 750){
			topBtn.fadeIn();
		}else{
			topBtn.fadeOut();
		}
	});
});

// ここまでトップページボタン
