
<div class="enterRegPopup zoomAnim">
	<div id="enterReg">
		<div class="enterReg_top">
			<div class="popupBlock enterBlock wCur">
				<div class="erTitle">Вход на сайт</div>
				<div class="popupContent">
					<div id="entrForm" data-form="true" data-ajax="login" novalidate="novalidate" class="wForm wFormDef enterBlock_form visForm">
						<div class="wFormRow">
							<label class="wLabel -warn">E-mail</label>
							<div class="wFormInput">
								<input type="email" data-name="email" name="enter_email" data-msg-required="Это поле необходимо заполнить" data-msg-email="Пожалуйста, введите корректный Email" placeholder="E-mail" required="" aria-required="true" class="wInput"/>
							</div>
						</div>
						<!-- .wFormRow-->
						<div class="wFormRow">
							<label class="wLabel -warn">Пароль</label>
							<input type="password" data-name="password" name="enter_pass" data-msg-required="Это поле необходимо заполнить" data-msg-minlength="Пожалуйста, введите не меньше 4 символов" data-rule-minlength="4" placeholder="Пароль" required="" aria-required="true" class="wInput"/>
							<div class="wFormInput"></div>
						</div>
						<!-- .wFormRow-->
						<div class="wFormRow">
							<label class="wLabel">Запомнить данные</label>
							<label class="wCheck">
								<input data-name="remember" type="checkbox" checked="checked"/><ins><span></span></ins>
							</label>
						</div>
						<input type="hidden" data-name="token" value="eODmSLASHOSLASHOSLASHOgzudmoC0Uyno7OOmi3ulQvs6n6T1y7+dt9B9P4GAuj8IXLgt9Dx6htvjjI6isL2o9d0S1N1jiwLdAQVJsxs7VYRZb50g0YJTM="/>
						<div id="forget_pass" class="passLink">Забыли пароль?</div>
						<div class="tar">
							<button class="wSubmit button button--red">войти</button>
						</div>
					</div>
					<div id="forgetForm" data-form="true" data-ajax="forgot_password" novalidate="novalidate" class="wForm enterBlock_form">
						<div class="wFormRow">
							<input type="email" data-name="email" name="forget_email" data-msg-required="Это поле необходимо заполнить" data-msg-email="Пожалуйста, введите корректный Email" placeholder="E-mail" required="" aria-required="true" class="wInput"/>
						</div>
						<!-- .wFormRow-->
						<div class="forgetInf">После отправления, в течении 5 минут к Вам на почту придут инструкции по восстановлению пароля.</div>
						<input type="hidden" data-name="token" value="eODmSLASHOSLASHOSLASHOgzudmoC0Uyno7OOmi3ulQvs6n6T1y7+dt9B9P4GAuj8IXLgt9Dx6htvjjI6isL2o9d0S1N1jiwLdAQVJsxs7VYRZb50g0YJTM="/>
						<!-- .forgetInf-->
						<div id="remember_pass" class="passLink">Вернуться</div>
						<div class="tar">
							<button class="wSubmit button button--red">отправить</button>
						</div>
					</div>
				</div>
			</div>
			<!-- .enterBlock-->
			<div data-form="true" data-ajax="registration" novalidate="novalidate" class="popupBlock wForm regBlock">
				<div class="erTitle">Новый пользователь</div>
				<div class="popupContent">
					<div class="wFormRow">
						<label class="wLabel -warn">E-mail</label>
						<div class="wFormInput">
							<input type="email" data-name="email" name="reg_email" data-msg-required="Это поле необходимо заполнить" data-msg-email="Пожалуйста, введите корректный Email" placeholder="E-mail" required="" aria-required="true" class="wInput"/>
						</div>
					</div>
					<!-- .wFormRow-->
					<div class="wFormRow">
						<label class="wLabel -warn">Пароль</label>
						<div class="wFormInput">
							<input type="password" data-name="password" name="reg_pass" data-msg-required="Это поле необходимо заполнить" data-msg-minlength="Пожалуйста, введите не меньше 4 символов" data-rule-minlength="4" placeholder="Пароль" required="" aria-required="true" class="wInput"/>
						</div>
					</div>
					<!-- .wFormRow-->
					<div class="wFormRow">
						<label class="wLabel">Я согласен с условиями использования</label>
						<label class="wCheck">
							<input type="checkbox" data-name="agree" name="reg_agree" data-msg-required="Это поле нужно отметить" required="" aria-required="true"/><ins><span></span></ins>
						</label>
					</div>
					<input type="hidden" data-name="token" value="eODmSLASHOSLASHOSLASHOgzudmoC0Uyno7OOmi3ulQvs6n6T1y7+dt9B9P4GAuj8IXLgt9Dx6htvjjI6isL2o9d0S1N1jiwLdAQVJsxs7VYRZb50g0YJTM="/>
					<!-- .checkBlock-->
					<div class="tar">
						<button class="wSubmit button button--red">зарегистрироваться</button>
					</div>
				</div>
				<!-- .popupContent-->
			</div>
			<!-- .regBlock-->
		</div>
		<!-- .enterReg_top-->
		<div class="popupBlock socEnter">
			<div class="erTitle">Вход через соц. сети</div>
			<div class="popupContent socLinkEnter">
				<button title="Вконтакте" class="eVk"></button>
				<button title="Facebook" class="eFb"></button>
			</div>
			<!-- .socLinkEnter-->
			<div class="clear"></div>
		</div>
		<!-- .socEnter-->
	</div>
	<button title="Закрыть (ESC)" type="button" class="mfp-close">×</button>
</div>