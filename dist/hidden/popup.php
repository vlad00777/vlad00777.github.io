
<div class="item-popup zoomAnim popup-dash">
	<div class="popup-title">Гитара Cort AC100 BKS</div>
	<div class="publish-date"><b>Опубликовано:&nbsp;</b><span>31.03.2016</span></div>
	<div class="clearfix">
		<div class="popup-sideright popup-sideright--dashboard">
			<div class="overview_info overview_info--dashboard">
				<div class="dashboard-priceFavorite">
					<div class="dashboard-priceFavorite_price"><b>18 542</b><span>&nbsp;грн.</span></div>
					<div class="dashboard-priceFavorite_favorite"><a href="#" class="add_to_wish_list"><span class="star"></span><span>Добавить в избранные</span></a></div>
				</div>
				<div class="dashboard-buttons"><a href="#" class="dashboard-buttons_toauthor js-writeAdmin">
						<div class="svgHolder">
							<svg>
								<use xlink:href="#message-icon"/>
							</svg>
						</div><span>Написать автору</span></a></div>
				<div class="flex flex--between"><a href="#" class="white-button to-improve">Улучшить</a><a href="#" class="dashboard-buttons_alert js-problem-popup">
						<div class="svgHolder">
							<svg>
								<use xlink:href="#smile-icon"/>
							</svg>
						</div><span>Пожаловаться</span></a></div>
				<div class="dashboard-about">
					<div class="about_contact">
						<div class="about_left"><img src="pic/contact-icon1.png"/></div>
						<div class="about_right">
							<div class="about_title">Контактное лицо:</div>
							<div class="about_desc">Сергеев Сергей Сергеевич</div><a href="#" class="about_link about_link--message"><span>Все объявления автора</span></a>
						</div>
					</div>
					<div class="about_phone">
						<div class="about_left"><img src="pic/contact-icon2.png"/></div>
						<div class="about_right">
							<div class="about_title">Контактный телефон:</div>
							<div class="about_desc about_desc--hidden">
								<p>+38 (095) 342 12 34</p>
								<p>+38 (095) 342 12 34</p>
								<p>+38 (095) 342 12 34</p>
								<div class="js-hidden"><span class="eye"></span><span>Показать</span></div>
							</div><a href="#" data-skype="0506540509" class="about_link about_link--skype js-skype"><span>Показать Skype автора</span></a>
						</div>
					</div>
				</div>
				<div class="rect-banner"><a href="#"><img src="images/banner big.jpg"/></a></div>
			</div>
		</div>
		<div class="popup-sideleft">
			<div class="popup-slider">
				<div class="popup-slider_item"><a href="pic/slider.jpg"><img src="pic/slider.jpg" alt=""/></a></div>
				<div class="popup-slider_item"><a href="pic/slider.jpg"><img src="pic/slider.jpg" alt=""/></a></div>
				<div class="popup-slider_item"><a href="pic/slider.jpg"><img src="pic/slider.jpg" alt=""/></a></div>
			</div>
			<div class="popup-slider-preview">
				<div class="popup-slider-preview_item"><img src="pic/slider-preview.jpg" alt=""/></div>
				<div class="popup-slider-preview_item"><img src="pic/slider-preview.jpg" alt=""/></div>
				<div class="popup-slider-preview_item"><img src="pic/slider-preview.jpg" alt=""/></div>
			</div>
		</div>
	</div>
</div>
<script>
	$('.popup-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.popup-slider-preview'
	});
	$('.popup-slider-preview').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.popup-slider',
		responsive: [
			{
				breakpoint: 600,
				settings: {
					vertical: false,
					slidesToShow: 3
				}
			}
		]
	});
</script>