/*components.js*/
window.wLang = function (window, document, undefined) {
        var names = ["ru", "ua", "pl", "en"],
            miss = !0,
            def = "ru",
            navi = window.navigator,
            lang = document.documentElement.getAttribute("lang") || navi.language || navi.browserLanguage || w.userLanguage || def;
        lang = lang.toLowerCase().substr(0, 2);
        for (var i = 0; i < names.length; i++)
            if (lang === names[i]) {
                miss = !1;
                break
            }
        return miss && (lang = def), lang
    }(this, this.document), window.wLocalize = function (window, document, undefined) {
        var localize = {};
        return localize.Magnific = {
            ru: {
                tClose: "Закрыть (ESC)",
                tLoading: "Загрузка контента ...",
                tNotFound: "Контент не найден",
                tError: 'Невозможно загрузить <a href="%url%" target="_blank">Контент</a>.',
                tErrorImage: 'Невозможно загрузить <a href="%url%" target="_blank">Изображение #%curr%</a>.',
                tPrev: "Предыдущая (клавиша Left)",
                tNext: "Следующая (клавиша Right)",
                tCounter: "%curr% из %total%"
            },
            ua: {
                tClose: "Закрити (ESC)",
                tLoading: "Завантаження контенту ...",
                tNotFound: "Контент не знайдено",
                tError: 'Неможливо завантажити <a href="%url%" target="_blank">контент</a>.',
                tErrorImage: 'Неможливо завантажити <a href="%url%" target="_blank">Зображенння #%curr%</a>.',
                tPrev: "Попередня (клавіша Left)",
                tNext: "Наступна (клавіша Right)",
                tCounter: "%curr% з %total%"
            },
            pl: {
                tClose: "Zamknąć (ESC)",
                tLoading: "Zawartość do treści ...",
                tNotFound: "Nie znaleziono treści",
                tError: 'Niemożliwe do ściągnięcia <a href="%url%" target="_blank">treści</a>.',
                tErrorImage: 'Niemożliwe do ściągnięcia <a href="%url%" target="_blank">Obrazów #%curr%</a>.',
                tPrev: "Poprzednia (klucz Left)",
                tNext: "Następna (klucz Right)",
                tCounter: "%curr% z %total%"
            },
            en: {
                tClose: "Close (ESC)",
                tLoading: "Loading ...",
                tNotFound: "Content not found",
                tError: '<a href="%url%" target="_blank">The content</a> could not be loaded.',
                tErrorImage: '<a href="%url%" target="_blank">The image #%curr%</a> could not be loaded.',
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            }
        }, localize.Validate = {
            ru: {
                required: "Это поле необходимо заполнить!",
                password: "Укажите корректный пароль!",
                remote: "Пожалуйста, введите правильное значение!",
                email: "Пожалуйста, введите корректный адрес электронной почты!",
                url: "Пожалуйста, введите корректный URL!",
                date: "Пожалуйста, введите корректную дату!",
                dateISO: "Пожалуйста, введите корректную дату в формате ISO!",
                number: "Пожалуйста, введите число!",
                digits: "Пожалуйста, вводите только цифры!",
                creditcard: "Пожалуйста, введите правильный номер кредитной карты!",
                equalTo: "Пожалуйста, введите такое же значение ещё раз!",
                maxlength: "Пожалуйста, введите не больше {0} символов!",
                minlength: "Пожалуйста, введите не меньше {0} символов!",
                rangelength: "Пожалуйста, введите значение длиной от {0} до {1} символов!",
                range: "Пожалуйста, введите число от {0} до {1}!",
                filetype: "Допустимые расширения файлов: {0}!",
                filesize: "Максимальный размер {0} KB!",
                filesizeEach: "Максимальный размер каждого файла {0} KB!",
                max: "Пожалуйста, введите число, меньшее или равное {0}!",
                min: "Пожалуйста, введите число, большее или равное {0}!",
                word: "Введите корректное словестное значение!",
                login: "Введите корректный логин!",
                phoneUA: "Укажите корректный номер +38ХХХХХХХХХХ"
            },
            ua: {
                required: "Це поле необхідно заповнити!",
                password: "Вкажіть корректний пароль!",
                remote: "Будь ласка, введіть правильне значення!",
                email: "Будь ласка, введіть коректну адресу електронної пошти!",
                url: "Будь ласка, введіть коректний URL!",
                date: "Будь ласка, введіть коректну дату!",
                dateISO: "Будь ласка, введіть коректну дату у форматі ISO!",
                number: "Будь ласка, введіть число!",
                digits: "Будь ласка, вводите тільки цифри!",
                creditcard: "Будь ласка, введіть правильний номер кредитної картки!",
                equalTo: "Будь ласка, введіть таке ж значення ще раз!",
                maxlength: "Будь ласка, введіть не більш {0} символів!",
                minlength: "Будь ласка, введіть не менш {0} символів!",
                rangelength: "Будь ласка , введіть значення довжиною від {0} до {1} символів!",
                range: "Будь ласка, введіть число від {0} до {1}!",
                filetype: "Допустимые расширения файлов: {0}!",
                filesize: "Максимальный размер {0} KB!",
                filesizeEach: "Максимальный размер каждого файла {0} KB!",
                max: "Будь ласка, введіть число, менше або рівне {0}!",
                min: "Будь ласка, введіть число, більше або рівне {0}!.",
                word: "Введіть коректне ім'я!",
                login: "Введіть коректний логін!",
                phoneUA: "Введіть корректний номер +38ХХХХХХХХХХ"
            },
            pl: {
                required: "To pole należy wypełnić!",
                password: "Określ paroll!",
                remote: "Proszę, wprowadźcie prawidłowe znaczenie!",
                email: "Proszę wpisać poprawny adres e-mail!",
                url: "Proszę podać poprawny adres URL!",
                date: "Wpisz poprawną datę!",
                dateISO: "Proszę podać poprawną datę w formacie ISO!",
                number: "Proszę wpisać numery!",
                digits: "Proszę wpisać tylko liczby!",
                creditcard: "Proszę podać poprawny numer karty kredytowej!",
                equalTo: "Proszę ponownie wprowadzić wartość!",
                maxlength: "Proszę wpisać nie więcej niż {0} znaków!",
                minlength: "Proszę podać co najmniej {0} znaków!",
                rangelength: "Prosimy podać wartość pomiędzy {0} {1} znaków!",
                range: "Wprowadź liczbę między {0} - {1}!",
                filetype: "Dopuszczalne rozszerzenia plików: {0}!",
                filesize: "Maksymalny rozmiar {0} KB!",
                filesizeEach: "Maksymalny rozmiar każdego plika {0} KB!",
                max: "Podaj numer mniejsza lub równa {0}!",
                min: "Wprowadź liczbę większą lub równą {0}!",
                word: "Wprowadź poprawne znaczenie słów!",
                login: "Proszę podać poprawną nazwę użytkownika!",
                phoneUA: "Proszę podać poprawny numer +38ХХХХХХХХХХ"
            },
            en: {
                required: "This field is required!",
                password: "Specify paroll!",
                remote: "Please fix this field!",
                email: "Please enter a valid email address!",
                url: "Please enter a valid URL!",
                date: "Please enter a valid date!",
                dateISO: "Please enter a valid date ISO!",
                number: "Please enter a valid number!",
                digits: "Please enter only digits!",
                creditcard: "Please enter a valid credit card number!",
                equalTo: "Please enter the same value again!",
                maxlength: "Please enter no more than {0} characters!",
                minlength: "Please enter at least {0} characters!",
                rangelength: "Please enter a value between {0} and {1} characters long!",
                range: "Please enter a value between {0} and {1}!",
                filetype: "Допустимые расширения файлов: {0}!",
                filesize: "Максимальный размер {0} KB!",
                filesizeEach: "Максимальный размер каждого файла {0} KB!",
                max: "Please enter a value less than or equal to {0}!",
                min: "Please enter a value greater than or equal to {0}!",
                word: "Please enter the correct word meanings!",
                login: "Please enter a valid username!",
                phoneUA: "Please enter a valid number +38ХХХХХХХХХХ"
            }
        }, window.wLocalizeValidate = localize.Validate[wLang], localize
    }(this, this.document),
    function (factory) {
        "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function ($) {
        var wLocalizeMagnific = {
            tClose: "Закрыть (ESC)",
            tLoading: "Загрузка контента ...",
            tNotFound: "Контент не найден",
            tError: 'Невозможно загрузить <a href="%url%" target="_blank">Контент</a>.',
            tErrorImage: 'Невозможно загрузить <a href="%url%" target="_blank">Изображение #%curr%</a>.',
            tPrev: "Предыдущая (клавиша Left)",
            tNext: "Следующая (клавиша Right)",
            tCounter: "%curr% из %total%"
        };
        wLocalize && wLocalize.hasOwnProperty("Magnific") && $.extend(!0, wLocalizeMagnific, wLocalize.Magnific[wLang]);
        var mfp, _prevStatus, _document, _prevContentType, _wrapClasses, _currPopupType, CLOSE_EVENT = "Close",
            BEFORE_CLOSE_EVENT = "BeforeClose",
            AFTER_CLOSE_EVENT = "AfterClose",
            BEFORE_APPEND_EVENT = "BeforeAppend",
            MARKUP_PARSE_EVENT = "MarkupParse",
            OPEN_EVENT = "Open",
            CHANGE_EVENT = "Change",
            NS = "mfp",
            EVENT_NS = "." + NS,
            READY_CLASS = "mfp-ready",
            REMOVING_CLASS = "mfp-removing",
            PREVENT_CLOSE_CLASS = "mfp-prevent-close",
            MagnificPopup = function () {},
            _isJQ = !!window.jQuery,
            _window = $(window),
            _mfpOn = function (name, f) {
                mfp.ev.on(NS + name + EVENT_NS, f)
            },
            _getEl = function (className, appendTo, html, raw) {
                var el = document.createElement("div");
                return el.className = "mfp-" + className, html && (el.innerHTML = html), raw ? appendTo && appendTo.appendChild(el) : (el = $(el), appendTo && el.appendTo(appendTo)), el
            },
            _mfpTrigger = function (e, data) {
                mfp.ev.triggerHandler(NS + e, data), mfp.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), mfp.st.callbacks[e] && mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]))
            },
            _getCloseBtn = function (type) {
                return type === _currPopupType && mfp.currTemplate.closeBtn || (mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)), _currPopupType = type), mfp.currTemplate.closeBtn
            },
            _checkInstance = function () {
                $.magnificPopup.instance || (mfp = new MagnificPopup, mfp.init(), $.magnificPopup.instance = mfp)
            },
            supportsTransitions = function () {
                var s = document.createElement("p").style,
                    v = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== s.transition) return !0;
                for (; v.length;)
                    if (v.pop() + "Transition" in s) return !0;
                return !1
            };
        MagnificPopup.prototype = {
            constructor: MagnificPopup,
            init: function () {
                var appVersion = navigator.appVersion;
                mfp.isIE7 = -1 !== appVersion.indexOf("MSIE 7."), mfp.isIE8 = -1 !== appVersion.indexOf("MSIE 8."), mfp.isLowIE = mfp.isIE7 || mfp.isIE8, mfp.isAndroid = /android/gi.test(appVersion), mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion), mfp.supportsTransition = supportsTransitions(), mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), _document = $(document), mfp.popupsCache = {}
            },
            open: function (data) {
                var i;
                if (data.isObj === !1) {
                    mfp.items = data.items.toArray(), mfp.index = 0;
                    var item, items = data.items;
                    for (i = 0; i < items.length; i++)
                        if (item = items[i], item.parsed && (item = item.el[0]), item === data.el[0]) {
                            mfp.index = i;
                            break
                        }
                } else mfp.items = $.isArray(data.items) ? data.items : [data.items], mfp.index = data.index || 0;
                if (mfp.isOpen) return void mfp.updateItemHTML();
                mfp.types = [], _wrapClasses = "", data.mainEl && data.mainEl.length ? mfp.ev = data.mainEl.eq(0) : mfp.ev = _document, data.key ? (mfp.popupsCache[data.key] || (mfp.popupsCache[data.key] = {}), mfp.currTemplate = mfp.popupsCache[data.key]) : mfp.currTemplate = {}, mfp.st = $.extend(!0, {}, $.magnificPopup.defaults, data), mfp.fixedContentPos = "auto" === mfp.st.fixedContentPos ? !mfp.probablyMobile : mfp.st.fixedContentPos, mfp.st.modal && (mfp.st.closeOnContentClick = !1, mfp.st.closeOnBgClick = !1, mfp.st.showCloseBtn = !1, mfp.st.enableEscapeKey = !1), mfp.bgOverlay || (mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function () {
                    mfp.close()
                }), mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click" + EVENT_NS, function (e) {
                    mfp._checkIfClose(e.target) && mfp.close()
                }), mfp.container = _getEl("container", mfp.wrap)), mfp.contentContainer = _getEl("content"), mfp.st.preloader && (mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading));
                var modules = $.magnificPopup.modules;
                for (i = 0; i < modules.length; i++) {
                    var n = modules[i];
                    n = n.charAt(0).toUpperCase() + n.slice(1), mfp["init" + n].call(mfp)
                }
                _mfpTrigger("BeforeOpen"), mfp.st.showCloseBtn && (mfp.st.closeBtnInside ? (_mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
                    values.close_replaceWith = _getCloseBtn(item.type)
                }), _wrapClasses += " mfp-close-btn-in") : mfp.wrap.append(_getCloseBtn())), mfp.st.alignTop && (_wrapClasses += " mfp-align-top"), mfp.fixedContentPos ? mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: "hidden",
                    overflowY: mfp.st.overflowY
                }) : mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: "absolute"
                }), (mfp.st.fixedBgPos === !1 || "auto" === mfp.st.fixedBgPos && !mfp.fixedContentPos) && mfp.bgOverlay.css({
                    height: _document.height(),
                    position: "absolute"
                }), mfp.st.enableEscapeKey && _document.on("keyup" + EVENT_NS, function (e) {
                    27 === e.keyCode && mfp.close()
                }), _window.on("resize" + EVENT_NS, function () {
                    mfp.updateSize()
                }), mfp.st.closeOnContentClick || (_wrapClasses += " mfp-auto-cursor"), _wrapClasses && mfp.wrap.addClass(_wrapClasses);
                var windowHeight = mfp.wH = _window.height(),
                    windowStyles = {};
                if (mfp.fixedContentPos && mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    s && (windowStyles.marginRight = s)
                }
                mfp.fixedContentPos && (mfp.isIE7 ? $("body, html").css("overflow", "hidden") : windowStyles.overflow = "hidden");
                var classesToadd = mfp.st.mainClass;
                return mfp.isIE7 && (classesToadd += " mfp-ie7"), classesToadd && mfp._addClassToMFP(classesToadd), mfp.updateItemHTML(), _mfpTrigger("BuildControls"), $("html").css(windowStyles), mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body)), mfp._lastFocusedEl = document.activeElement, setTimeout(function () {
                    mfp.content ? (mfp._addClassToMFP(READY_CLASS), mfp._setFocus()) : mfp.bgOverlay.addClass(READY_CLASS), _document.on("focusin" + EVENT_NS, mfp._onFocusIn)
                }, 16), mfp.isOpen = !0, mfp.updateSize(windowHeight), _mfpTrigger(OPEN_EVENT), data
            },
            close: function () {
                mfp.isOpen && (_mfpTrigger(BEFORE_CLOSE_EVENT), mfp.isOpen = !1, mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition ? (mfp._addClassToMFP(REMOVING_CLASS), setTimeout(function () {
                    mfp._close()
                }, mfp.st.removalDelay)) : mfp._close())
            },
            _close: function () {
                _mfpTrigger(CLOSE_EVENT);
                var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
                if (mfp.bgOverlay.detach(), mfp.wrap.detach(), mfp.container.empty(), mfp.st.mainClass && (classesToRemove += mfp.st.mainClass + " "), mfp._removeClassFromMFP(classesToRemove), mfp.fixedContentPos) {
                    var windowStyles = {
                        marginRight: ""
                    };
                    mfp.isIE7 ? $("body, html").css("overflow", "") : windowStyles.overflow = "", $("html").css(windowStyles)
                }
                _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS), mfp.ev.off(EVENT_NS), mfp.wrap.attr("class", "mfp-wrap").removeAttr("style"), mfp.bgOverlay.attr("class", "mfp-bg"), mfp.container.attr("class", "mfp-container"), !mfp.st.showCloseBtn || mfp.st.closeBtnInside && mfp.currTemplate[mfp.currItem.type] !== !0 || mfp.currTemplate.closeBtn && mfp.currTemplate.closeBtn.detach(), mfp._lastFocusedEl && $(mfp._lastFocusedEl).focus(), mfp.currItem = null, mfp.content = null, mfp.currTemplate = null, mfp.prevHeight = 0, _mfpTrigger(AFTER_CLOSE_EVENT)
            },
            updateSize: function (winHeight) {
                if (mfp.isIOS) {
                    var zoomLevel = document.documentElement.clientWidth / window.innerWidth,
                        height = window.innerHeight * zoomLevel;
                    mfp.wrap.css("height", height), mfp.wH = height
                } else mfp.wH = winHeight || _window.height();
                mfp.fixedContentPos || mfp.wrap.css("height", mfp.wH), _mfpTrigger("Resize")
            },
            updateItemHTML: function () {
                var item = mfp.items[mfp.index];
                mfp.contentContainer.detach(), mfp.content && mfp.content.detach(), item.parsed || (item = mfp.parseEl(mfp.index));
                var type = item.type;
                if (_mfpTrigger("BeforeChange", [mfp.currItem ? mfp.currItem.type : "", type]), mfp.currItem = item, !mfp.currTemplate[type]) {
                    var markup = mfp.st[type] ? mfp.st[type].markup : !1;
                    _mfpTrigger("FirstMarkupParse", markup), markup ? mfp.currTemplate[type] = $(markup) : mfp.currTemplate[type] = !0
                }
                _prevContentType && _prevContentType !== item.type && mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
                var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
                mfp.appendContent(newContent, type), item.preloaded = !0, _mfpTrigger(CHANGE_EVENT, item), _prevContentType = item.type, mfp.container.prepend(mfp.contentContainer), _mfpTrigger("AfterChange")
            },
            appendContent: function (newContent, type) {
                mfp.content = newContent, newContent ? mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === !0 ? mfp.content.find(".mfp-close").length || mfp.content.append(_getCloseBtn()) : mfp.content = newContent : mfp.content = "", _mfpTrigger(BEFORE_APPEND_EVENT), mfp.container.addClass("mfp-" + type + "-holder"), mfp.contentContainer.append(mfp.content)
            },
            parseEl: function (index) {
                var type, item = mfp.items[index];
                if (item.tagName ? item = {
                        el: $(item)
                    } : (type = item.type, item = {
                        data: item,
                        src: item.src
                    }), item.el) {
                    for (var types = mfp.types, i = 0; i < types.length; i++)
                        if (item.el.hasClass("mfp-" + types[i])) {
                            type = types[i];
                            break
                        }
                    item.src = item.el.attr("data-mfp-src"), item.src || (item.src = item.el.attr("href"))
                }
                return item.type = type || mfp.st.type || "inline", item.index = index, item.parsed = !0, mfp.items[index] = item, _mfpTrigger("ElementParse", item), mfp.items[index]
            },
            addGroup: function (el, options) {
                var eHandler = function (e) {
                    e.mfpEl = this, mfp._openClick(e, el, options)
                };
                options || (options = {});
                var eName = "click.magnificPopup";
                options.mainEl = el, options.items ? (options.isObj = !0, el.off(eName).on(eName, eHandler)) : (options.isObj = !1, options.delegate ? el.off(eName).on(eName, options.delegate, eHandler) : (options.items = el, el.off(eName).on(eName, eHandler)))
            },
            _openClick: function (e, el, options) {
                var midClick = void 0 !== options.midClick ? options.midClick : $.magnificPopup.defaults.midClick;
                if (midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                    var disableOn = void 0 !== options.disableOn ? options.disableOn : $.magnificPopup.defaults.disableOn;
                    if (disableOn)
                        if ($.isFunction(disableOn)) {
                            if (!disableOn.call(mfp)) return !0
                        } else if (_window.width() < disableOn) return !0;
                    e.type && (e.preventDefault(), mfp.isOpen && e.stopPropagation()), options.el = $(e.mfpEl), options.delegate && (options.items = el.find(options.delegate)), mfp.open(options)
                }
            },
            updateStatus: function (status, text) {
                if (mfp.preloader) {
                    _prevStatus !== status && mfp.container.removeClass("mfp-s-" + _prevStatus), text || "loading" !== status || (text = mfp.st.tLoading);
                    var data = {
                        status: status,
                        text: text
                    };
                    _mfpTrigger("UpdateStatus", data), status = data.status, text = data.text, mfp.preloader.html(text), mfp.preloader.find("a").on("click", function (e) {
                        e.stopImmediatePropagation()
                    }), mfp.container.addClass("mfp-s-" + status), _prevStatus = status
                }
            },
            _checkIfClose: function (target) {
                if (!$(target).hasClass(PREVENT_CLOSE_CLASS)) {
                    var closeOnContent = mfp.st.closeOnContentClick,
                        closeOnBg = mfp.st.closeOnBgClick;
                    if (closeOnContent && closeOnBg) return !0;
                    if (!mfp.content || $(target).hasClass("mfp-close") || mfp.preloader && target === mfp.preloader[0]) return !0;
                    if (target === mfp.content[0] || $.contains(mfp.content[0], target)) {
                        if (closeOnContent) return !0
                    } else if (closeOnBg && $.contains(document, target)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function (cName) {
                mfp.bgOverlay.addClass(cName), mfp.wrap.addClass(cName)
            },
            _removeClassFromMFP: function (cName) {
                this.bgOverlay.removeClass(cName), mfp.wrap.removeClass(cName)
            },
            _hasScrollBar: function (winHeight) {
                return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height())
            },
            _setFocus: function () {
                (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus()
            },
            _onFocusIn: function (e) {
                return e.target === mfp.wrap[0] || $.contains(mfp.wrap[0], e.target) ? void 0 : (mfp._setFocus(), !1)
            },
            _parseMarkup: function (template, values, item) {
                var arr;
                item.data && (values = $.extend(item.data, values)), _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]), $.each(values, function (key, value) {
                    if (void 0 === value || value === !1) return !0;
                    if (arr = key.split("_"), arr.length > 1) {
                        var el = template.find(EVENT_NS + "-" + arr[0]);
                        if (el.length > 0) {
                            var attr = arr[1];
                            "replaceWith" === attr ? el[0] !== value[0] && el.replaceWith(value) : "img" === attr ? el.is("img") ? el.attr("src", value) : el.replaceWith('<img src="' + value + '" class="' + el.attr("class") + '" />') : el.attr(arr[1], value)
                        }
                    } else template.find(EVENT_NS + "-" + key).html(value)
                })
            },
            _getScrollbarSize: function () {
                if (void 0 === mfp.scrollbarSize) {
                    var scrollDiv = document.createElement("div");
                    scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(scrollDiv), mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth, document.body.removeChild(scrollDiv)
                }
                return mfp.scrollbarSize
            }
        }, $.magnificPopup = {
            instance: null,
            proto: MagnificPopup.prototype,
            modules: [],
            open: function (options, index) {
                return _checkInstance(), options = options ? $.extend(!0, {}, options) : {}, options.isObj = !0, options.index = index || 0, this.instance.open(options)
            },
            close: function () {
                return $.magnificPopup.instance && $.magnificPopup.instance.close()
            },
            registerModule: function (name, module) {
                module.options && ($.magnificPopup.defaults[name] = module.options), $.extend(this.proto, module.proto), this.modules.push(name)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: wLocalizeMagnific.tClose,
                tLoading: wLocalizeMagnific.tLoading
            }
        }, $.fn.magnificPopup = function (options) {
            _checkInstance();
            var jqEl = $(this);
            if ("string" == typeof options)
                if ("open" === options) {
                    var items, itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup,
                        index = parseInt(arguments[1], 10) || 0;
                    itemOpts.items ? items = itemOpts.items[index] : (items = jqEl, itemOpts.delegate && (items = items.find(itemOpts.delegate)), items = items.eq(index)), mfp._openClick({
                        mfpEl: items
                    }, jqEl, itemOpts)
                } else mfp.isOpen && mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            else options = $.extend(!0, {}, options), _isJQ ? jqEl.data("magnificPopup", options) : jqEl[0].magnificPopup = options, mfp.addGroup(jqEl, options);
            return jqEl
        };
        var _hiddenClass, _inlinePlaceholder, _lastInlineElement, INLINE_NS = "inline",
            _putInlineElementsBack = function () {
                _lastInlineElement && (_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach(), _lastInlineElement = null)
            };
        $.magnificPopup.registerModule(INLINE_NS, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: wLocalizeMagnific.tNotFound
            },
            proto: {
                initInline: function () {
                    mfp.types.push(INLINE_NS), _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function () {
                        _putInlineElementsBack()
                    })
                },
                getInline: function (item, template) {
                    if (_putInlineElementsBack(), item.src) {
                        var inlineSt = mfp.st.inline,
                            el = $(item.src);
                        if (el.length) {
                            var parent = el[0].parentNode;
                            parent && parent.tagName && (_inlinePlaceholder || (_hiddenClass = inlineSt.hiddenClass, _inlinePlaceholder = _getEl(_hiddenClass), _hiddenClass = "mfp-" + _hiddenClass), _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)), mfp.updateStatus("ready")
                        } else mfp.updateStatus("error", inlineSt.tNotFound), el = $("<div>");
                        return item.inlineElement = el, el
                    }
                    return mfp.updateStatus("ready"), mfp._parseMarkup(template, {}, item), template
                }
            }
        });
        var _ajaxCur, AJAX_NS = "ajax",
            _removeAjaxCursor = function () {
                _ajaxCur && $(document.body).removeClass(_ajaxCur)
            },
            _destroyAjaxRequest = function () {
                _removeAjaxCursor(), mfp.req && mfp.req.abort()
            };
        $.magnificPopup.registerModule(AJAX_NS, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: wLocalizeMagnific.tError
            },
            proto: {
                initAjax: function () {
                    mfp.types.push(AJAX_NS), _ajaxCur = mfp.st.ajax.cursor, _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest), _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest)
                },
                getAjax: function (item) {
                    _ajaxCur && $(document.body).addClass(_ajaxCur), mfp.updateStatus("loading");
                    var opts = $.extend({
                        url: item.src,
                        success: function (data, textStatus, jqXHR) {
                            var temp = {
                                data: data,
                                xhr: jqXHR
                            };
                            _mfpTrigger("ParseAjax", temp), mfp.appendContent($(temp.data), AJAX_NS), item.finished = !0, _removeAjaxCursor(), mfp._setFocus(), setTimeout(function () {
                                mfp.wrap.addClass(READY_CLASS)
                            }, 16), mfp.updateStatus("ready"), _mfpTrigger("AjaxContentAdded")
                        },
                        error: function () {
                            _removeAjaxCursor(), item.finished = item.loadError = !0, mfp.updateStatus("error", mfp.st.ajax.tError.replace("%url%", item.src))
                        }
                    }, mfp.st.ajax.settings);
                    return mfp.req = $.ajax(opts), ""
                }
            }
        });
        var _imgInterval, _getTitle = function (item) {
            if (item.data && void 0 !== item.data.title) return item.data.title;
            var src = mfp.st.image.titleSrc;
            if (src) {
                if ($.isFunction(src)) return src.call(mfp, item);
                if (item.el) return item.el.attr(src) || ""
            }
            return ""
        };
        $.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: wLocalizeMagnific.tErrorImage
            },
            proto: {
                initImage: function () {
                    var imgSt = mfp.st.image,
                        ns = ".image";
                    mfp.types.push("image"), _mfpOn(OPEN_EVENT + ns, function () {
                        "image" === mfp.currItem.type && imgSt.cursor && $(document.body).addClass(imgSt.cursor)
                    }), _mfpOn(CLOSE_EVENT + ns, function () {
                        imgSt.cursor && $(document.body).removeClass(imgSt.cursor), _window.off("resize" + EVENT_NS)
                    }), _mfpOn("Resize" + ns, mfp.resizeImage), mfp.isLowIE && _mfpOn("AfterChange", mfp.resizeImage)
                },
                resizeImage: function () {
                    var item = mfp.currItem;
                    if (item && item.img && mfp.st.image.verticalFit) {
                        var decr = 0;
                        mfp.isLowIE && (decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10)), item.img.css("max-height", mfp.wH - decr)
                    }
                },
                _onImageHasSize: function (item) {
                    item.img && (item.hasSize = !0, _imgInterval && clearInterval(_imgInterval), item.isCheckingImgSize = !1, _mfpTrigger("ImageHasSize", item), item.imgHidden && (mfp.content && mfp.content.removeClass("mfp-loading"), item.imgHidden = !1))
                },
                findImageSize: function (item) {
                    var counter = 0,
                        img = item.img[0],
                        mfpSetInterval = function (delay) {
                            _imgInterval && clearInterval(_imgInterval), _imgInterval = setInterval(function () {
                                return img.naturalWidth > 0 ? void mfp._onImageHasSize(item) : (counter > 200 && clearInterval(_imgInterval), counter++, void(3 === counter ? mfpSetInterval(10) : 40 === counter ? mfpSetInterval(50) : 100 === counter && mfpSetInterval(500)))
                            }, delay)
                        };
                    mfpSetInterval(1)
                },
                getImage: function (item, template) {
                    var guard = 0,
                        onLoadComplete = function () {
                            item && (item.img[0].complete ? (item.img.off(".mfploader"), item === mfp.currItem && (mfp._onImageHasSize(item), mfp.updateStatus("ready")), item.hasSize = !0, item.loaded = !0, _mfpTrigger("ImageLoadComplete")) : (guard++, 200 > guard ? setTimeout(onLoadComplete, 100) : onLoadError()))
                        },
                        onLoadError = function () {
                            item && (item.img.off(".mfploader"), item === mfp.currItem && (mfp._onImageHasSize(item), mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src))), item.hasSize = !0, item.loaded = !0, item.loadError = !0)
                        },
                        imgSt = mfp.st.image,
                        el = template.find(".mfp-img");
                    if (el.length) {
                        var img = document.createElement("img");
                        img.className = "mfp-img", item.el && item.el.find("img").length && (img.alt = item.el.find("img").attr("alt")), item.img = $(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError), img.src = item.src, el.is("img") && (item.img = item.img.clone()), img = item.img[0], img.naturalWidth > 0 ? item.hasSize = !0 : img.width || (item.hasSize = !1)
                    }
                    return mfp._parseMarkup(template, {
                        title: _getTitle(item),
                        img_replaceWith: item.img
                    }, item), mfp.resizeImage(), item.hasSize ? (_imgInterval && clearInterval(_imgInterval), item.loadError ? (template.addClass("mfp-loading"), mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src))) : (template.removeClass("mfp-loading"), mfp.updateStatus("ready")), template) : (mfp.updateStatus("loading"), item.loading = !0, item.hasSize || (item.imgHidden = !0, template.addClass("mfp-loading"), mfp.findImageSize(item)), template)
                }
            }
        });
        var hasMozTransform, getHasMozTransform = function () {
            return void 0 === hasMozTransform && (hasMozTransform = void 0 !== document.createElement("p").style.MozTransform), hasMozTransform
        };
        $.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (element) {
                    return element.is("img") ? element : element.find("img")
                }
            },
            proto: {
                initZoom: function () {
                    var image, zoomSt = mfp.st.zoom,
                        ns = ".zoom";
                    if (zoomSt.enabled && mfp.supportsTransition) {
                        var openTimeout, animatedImg, duration = zoomSt.duration,
                            getElToAnimate = function (image) {
                                var newImg = image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    transition = "all " + zoomSt.duration / 1e3 + "s " + zoomSt.easing,
                                    cssObj = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    t = "transition";
                                return cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition, newImg.css(cssObj), newImg
                            },
                            showMainContent = function () {
                                mfp.content.css("visibility", "visible")
                            };
                        _mfpOn("BuildControls" + ns, function () {
                            if (mfp._allowZoom()) {
                                if (clearTimeout(openTimeout), mfp.content.css("visibility", "hidden"), image = mfp._getItemToZoom(), !image) return void showMainContent();
                                animatedImg = getElToAnimate(image), animatedImg.css(mfp._getOffset()), mfp.wrap.append(animatedImg), openTimeout = setTimeout(function () {
                                    animatedImg.css(mfp._getOffset(!0)), openTimeout = setTimeout(function () {
                                        showMainContent(), setTimeout(function () {
                                            animatedImg.remove(), image = animatedImg = null, _mfpTrigger("ZoomAnimationEnded")
                                        }, 16)
                                    }, duration)
                                }, 16)
                            }
                        }), _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
                            if (mfp._allowZoom()) {
                                if (clearTimeout(openTimeout), mfp.st.removalDelay = duration, !image) {
                                    if (image = mfp._getItemToZoom(), !image) return;
                                    animatedImg = getElToAnimate(image)
                                }
                                animatedImg.css(mfp._getOffset(!0)), mfp.wrap.append(animatedImg), mfp.content.css("visibility", "hidden"), setTimeout(function () {
                                    animatedImg.css(mfp._getOffset())
                                }, 16)
                            }
                        }), _mfpOn(CLOSE_EVENT + ns, function () {
                            mfp._allowZoom() && (showMainContent(), animatedImg && animatedImg.remove(), image = null)
                        })
                    }
                },
                _allowZoom: function () {
                    return "image" === mfp.currItem.type
                },
                _getItemToZoom: function () {
                    return mfp.currItem.hasSize ? mfp.currItem.img : !1
                },
                _getOffset: function (isLarge) {
                    var el;
                    el = isLarge ? mfp.currItem.img : mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                    var offset = el.offset(),
                        paddingTop = parseInt(el.css("padding-top"), 10),
                        paddingBottom = parseInt(el.css("padding-bottom"), 10);
                    offset.top -= $(window).scrollTop() - paddingTop;
                    var obj = {
                        width: el.width(),
                        height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                    };
                    return getHasMozTransform() ? obj["-moz-transform"] = obj.transform = "translate(" + offset.left + "px," + offset.top + "px)" : (obj.left = offset.left, obj.top = offset.top), obj
                }
            }
        });
        var IFRAME_NS = "iframe",
            _emptyPage = "//about:blank",
            _fixIframeBugs = function (isShowing) {
                if (mfp.currTemplate[IFRAME_NS]) {
                    var el = mfp.currTemplate[IFRAME_NS].find("iframe");
                    el.length && (isShowing || (el[0].src = _emptyPage), mfp.isIE8 && el.css("display", isShowing ? "block" : "none"))
                }
            };
        $.magnificPopup.registerModule(IFRAME_NS, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "http://test.bolshe.com.ua/Media/js/Bases/youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function () {
                    mfp.types.push(IFRAME_NS), _mfpOn("BeforeChange", function (e, prevType, newType) {
                        prevType !== newType && (prevType === IFRAME_NS ? _fixIframeBugs() : newType === IFRAME_NS && _fixIframeBugs(!0))
                    }), _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function () {
                        _fixIframeBugs()
                    })
                },
                getIframe: function (item, template) {
                    var embedSrc = item.src,
                        iframeSt = mfp.st.iframe;
                    $.each(iframeSt.patterns, function () {
                        return embedSrc.indexOf(this.index) > -1 ? (this.id && (embedSrc = "string" == typeof this.id ? embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length) : this.id.call(this, embedSrc)), embedSrc = this.src.replace("%id%", embedSrc), !1) : void 0
                    });
                    var dataObj = {};
                    return iframeSt.srcAction && (dataObj[iframeSt.srcAction] = embedSrc), mfp._parseMarkup(template, dataObj, item), mfp.updateStatus("ready"), template
                }
            }
        });
        var _getLoopedId = function (index) {
                var numSlides = mfp.items.length;
                return index > numSlides - 1 ? index - numSlides : 0 > index ? numSlides + index : index
            },
            _replaceCurrTotal = function (text, curr, total) {
                return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total)
            };
        $.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: wLocalizeMagnific.tPrev,
                tNext: wLocalizeMagnific.tNext,
                tCounter: wLocalizeMagnific.tCounter
            },
            proto: {
                initGallery: function () {
                    var gSt = mfp.st.gallery,
                        ns = ".mfp-gallery",
                        supportsFastClick = Boolean($.fn.mfpFastClick);
                    return mfp.direction = !0, gSt && gSt.enabled ? (_wrapClasses += " mfp-gallery", _mfpOn(OPEN_EVENT + ns, function () {
                        gSt.navigateByImgClick && mfp.wrap.on("click" + ns, ".mfp-img", function () {
                            return mfp.items.length > 1 ? (mfp.next(), !1) : void 0
                        }), _document.on("keydown" + ns, function (e) {
                            37 === e.keyCode ? mfp.prev() : 39 === e.keyCode && mfp.next()
                        })
                    }), _mfpOn("UpdateStatus" + ns, function (e, data) {
                        data.text && (data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length))
                    }), _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
                        var l = mfp.items.length;
                        values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : ""
                    }), _mfpOn("BuildControls" + ns, function () {
                        if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                            var markup = gSt.arrowMarkup,
                                arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, "left")).addClass(PREVENT_CLOSE_CLASS),
                                arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, "right")).addClass(PREVENT_CLOSE_CLASS),
                                eName = supportsFastClick ? "mfpFastClick" : "click";
                            arrowLeft[eName](function () {
                                mfp.prev()
                            }), arrowRight[eName](function () {
                                mfp.next()
                            }), mfp.isIE7 && (_getEl("b", arrowLeft[0], !1, !0), _getEl("a", arrowLeft[0], !1, !0), _getEl("b", arrowRight[0], !1, !0), _getEl("a", arrowRight[0], !1, !0)), mfp.container.append(arrowLeft.add(arrowRight))
                        }
                    }), _mfpOn(CHANGE_EVENT + ns, function () {
                        mfp._preloadTimeout && clearTimeout(mfp._preloadTimeout), mfp._preloadTimeout = setTimeout(function () {
                            mfp.preloadNearbyImages(), mfp._preloadTimeout = null
                        }, 16)
                    }), void _mfpOn(CLOSE_EVENT + ns, function () {
                        _document.off(ns), mfp.wrap.off("click" + ns), mfp.arrowLeft && supportsFastClick && mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick(), mfp.arrowRight = mfp.arrowLeft = null
                    })) : !1
                },
                next: function () {
                    mfp.direction = !0, mfp.index = _getLoopedId(mfp.index + 1), mfp.updateItemHTML()
                },
                prev: function () {
                    mfp.direction = !1, mfp.index = _getLoopedId(mfp.index - 1), mfp.updateItemHTML()
                },
                goTo: function (newIndex) {
                    mfp.direction = newIndex >= mfp.index, mfp.index = newIndex, mfp.updateItemHTML()
                },
                preloadNearbyImages: function () {
                    var i, p = mfp.st.gallery.preload,
                        preloadBefore = Math.min(p[0], mfp.items.length),
                        preloadAfter = Math.min(p[1], mfp.items.length);
                    for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) mfp._preloadItem(mfp.index + i);
                    for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) mfp._preloadItem(mfp.index - i)
                },
                _preloadItem: function (index) {
                    if (index = _getLoopedId(index), !mfp.items[index].preloaded) {
                        var item = mfp.items[index];
                        item.parsed || (item = mfp.parseEl(index)), _mfpTrigger("LazyLoad", item), "image" === item.type && (item.img = $('<img class="mfp-img" />').on("load.mfploader", function () {
                            item.hasSize = !0
                        }).on("error.mfploader", function () {
                            item.hasSize = !0, item.loadError = !0, _mfpTrigger("LazyLoadError", item)
                        }).attr("src", item.src)), item.preloaded = !0
                    }
                }
            }
        });
        var RETINA_NS = "retina";
        $.magnificPopup.registerModule(RETINA_NS, {
                options: {
                    replaceSrc: function (item) {
                        return item.src.replace(/\.\w+$/, function (m) {
                            return "@2x" + m
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function () {
                        if (window.devicePixelRatio > 1) {
                            var st = mfp.st.retina,
                                ratio = st.ratio;
                            ratio = isNaN(ratio) ? ratio() : ratio, ratio > 1 && (_mfpOn("ImageHasSize." + RETINA_NS, function (e, item) {
                                item.img.css({
                                    "max-width": item.img[0].naturalWidth / ratio,
                                    width: "100%"
                                })
                            }), _mfpOn("ElementParse." + RETINA_NS, function (e, item) {
                                item.src = st.replaceSrc(item, ratio)
                            }))
                        }
                    }
                }
            }),
            function () {
                var ghostClickDelay = 1e3,
                    supportsTouch = "ontouchstart" in window,
                    unbindTouchMove = function () {
                        _window.off("touchmove" + ns + " touchend" + ns)
                    },
                    eName = "mfpFastClick",
                    ns = "." + eName;
                $.fn.mfpFastClick = function (callback) {
                    return $(this).each(function () {
                        var lock, elem = $(this);
                        if (supportsTouch) {
                            var timeout, startX, startY, pointerMoved, point, numPointers;
                            elem.on("touchstart" + ns, function (e) {
                                pointerMoved = !1, numPointers = 1, point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], startX = point.clientX, startY = point.clientY, _window.on("touchmove" + ns, function (e) {
                                    point = e.originalEvent ? e.originalEvent.touches : e.touches, numPointers = point.length, point = point[0], (Math.abs(point.clientX - startX) > 10 || Math.abs(point.clientY - startY) > 10) && (pointerMoved = !0, unbindTouchMove())
                                }).on("touchend" + ns, function (e) {
                                    unbindTouchMove(), pointerMoved || numPointers > 1 || (lock = !0, e.preventDefault(), clearTimeout(timeout), timeout = setTimeout(function () {
                                        lock = !1
                                    }, ghostClickDelay), callback())
                                })
                            })
                        }
                        elem.on("click" + ns, function () {
                            lock || callback()
                        })
                    })
                }, $.fn.destroyMfpFastClick = function () {
                    $(this).off("touchstart" + ns + " click" + ns), supportsTouch && _window.off("touchmove" + ns + " touchend" + ns)
                }
            }(), _checkInstance()
    }), $.extend($.fn, {
        validateDelegate: function (delegate, type, handler) {
            return this.bind(type, function (event) {
                var target = $(event.target);
                return target.is(delegate) ? handler.apply(target, arguments) : void 0
            })
        }
    }), $.extend($.fn, {
        validate: function (options) {
            if (!this.length) return void(options && options.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing!"));
            var validator = $.data(this[0], "validator");
            return validator ? validator : (this.attr("novalidate", "novalidate"), validator = new $.validator(options, this[0]), $.data(this[0], "validator", validator), validator.settings.onsubmit && (this.validateDelegate(":submit", "click", function (event) {
                validator.settings.submitHandler && (validator.submitButton = event.target), $(event.target).hasClass("cancel") && (validator.cancelSubmit = !0), void 0 !== $(event.target).attr("formnovalidate") && (validator.cancelSubmit = !0)
            }), this.submit(function (event) {
                function handle() {
                    var hidden, result;
                    return validator.settings.submitHandler ? (validator.submitButton && (hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm)), result = validator.settings.submitHandler.call(validator, validator.currentForm, event), validator.submitButton && hidden.remove(), void 0 !== result ? result : !1) : !0
                }
                return validator.settings.debug && event.preventDefault(), validator.cancelSubmit ? (validator.cancelSubmit = !1, handle()) : validator.form() ? validator.pendingRequest ? (validator.formSubmitted = !0, !1) : handle() : (validator.focusInvalid(), !1)
            })), validator)
        },
        valid: function () {
            var valid, validator, errorList;
            return $(this[0]).is("form") ? valid = this.validate().form() : $(this[0]).is("div") ? valid = this.validate().form() : (errorList = [], valid = !0, validator = $(this[0]).validate(), this.each(function () {
                valid = validator.element(this) && valid, errorList = errorList.concat(validator.errorList)
            }), validator.errorList = errorList), valid
        },
        removeAttrs: function (attributes) {
            var result = {},
                $element = this;
            return $.each(attributes.split(/\s/), function (index, value) {
                result[value] = $element.attr(value), $element.removeAttr(value)
            }), result
        },
        rules: function (command, argument) {
            var settings, staticRules, existingRules, data, param, filtered, element = this[0];
            if (command) switch (settings = $.data(element.form, "validator").settings, staticRules = settings.rules, existingRules = $.validator.staticRules(element), command) {
            case "add":
                $.extend(existingRules, $.validator.normalizeRule(argument)), delete existingRules.messages, staticRules[element.name] = existingRules, argument.messages && (settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages));
                break;
            case "remove":
                return argument ? (filtered = {}, $.each(argument.split(/\s/), function (index, method) {
                    filtered[method] = existingRules[method], delete existingRules[method], "required" === method && $(element).removeAttr("aria-required")
                }), filtered) : (delete staticRules[element.name], existingRules)
            }
            return data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element), data.required && (param = data.required, delete data.required, data = $.extend({
                required: param
            }, data), $(element).attr("aria-required", "true")), data.remote && (param = data.remote, delete data.remote, data = $.extend(data, {
                remote: param
            })), data
        },
        validReset: function () {
            function reset_InTx(els) {
                for (var i = 0; i < els.length; i++) {
                    var t = els[i],
                        jt = $(t);
                    switch (t.type) {
                    case "radio":
                    case "checkbox":
                        t.checked = t.defaultChecked;
                        break;
                    case "file":
                        var fV = $(t).siblings(".wFileVal");
                        t.outerHTML = t.outerHTML, fV.html(fV.data("txt")[0]), jt = ths.find("#" + t.id);
                        break;
                    default:
                        t.value = t.defaultValue
                    }
                    jt.removeClass(sett.errorClass).trigger("change").siblings(sett.errorElement + "." + sett.errorClass).css("display", "none")
                }
            }

            function reset_Sel(els) {
                for (var i = 0; i < els.length; i++)[].forEach.call(els[i].options, function (el) {
                    el.selected = el.defaultSelected
                }), $(els[i]).removeClass(sett.errorClass).trigger("change").siblings(sett.errorElement + "." + sett.errorClass).css("display", "none")
            }
            var ths = $(this[0]),
                sett = ths.validate().settings;
            reset_InTx(ths.find("input")), reset_InTx(ths.find("textarea")), reset_Sel(ths.find("select"))
        }
    }), $.extend($.expr[":"], {
        blank: function (a) {
            return !$.trim("" + $(a).val())
        },
        filled: function (a) {
            return !!$.trim("" + $(a).val())
        },
        unchecked: function (a) {
            return !$(a).prop("checked")
        }
    }), $.validator = function (options, form) {
        this.settings = $.extend(!0, {}, $.validator.defaults, options), this.currentForm = form, this.init()
    }, $.validator.format = function (source, params) {
        return 1 === arguments.length ? function () {
            var args = $.makeArray(arguments);
            return args.unshift(source), $.validator.format.apply(this, args)
        } : (arguments.length > 2 && params.constructor !== Array && (params = $.makeArray(arguments).slice(1)), params.constructor !== Array && (params = [params]), $.each(params, function (i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
                return n
            })
        }), source)
    }, $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (element) {
                this.lastActive = element, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(element)))
            },
            onfocusout: function (element) {
                this.checkable(element) || !(element.name in this.submitted) && this.optional(element) || this.element(element)
            },
            onkeyup: function (element, event) {
                var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === event.which && "" === this.elementValue(element) || -1 !== $.inArray(event.keyCode, excludedKeys) || (13 === event.which && "TEXTAREA" !== element.tagName ? $(this.currentForm).data("validator").checkForm() && $(this.currentForm).submit() : (element.name in this.submitted || this.isValidElement(element)) && this.element(element))
            },
            onclick: function (element) {
                element.name in this.submitted ? this.element(element) : element.parentNode.name in this.submitted && this.element(element.parentNode)
            },
            highlight: function (element, errorClass, validClass) {
                "radio" === element.type ? this.findByName(element.name).addClass(errorClass).removeClass(validClass) : $(element).addClass(errorClass).removeClass(validClass)
            },
            unhighlight: function (element, errorClass, validClass) {
                "radio" === element.type ? this.findByName(element.name).removeClass(errorClass).addClass(validClass) : $(element).removeClass(errorClass).addClass(validClass)
            }
        },
        setDefaults: function (settings) {
            $.extend($.validator.defaults, settings)
        },
        messages: {
            required: wLocalizeValidate.required,
            password: wLocalizeValidate.password,
            remote: wLocalizeValidate.remote,
            email: wLocalizeValidate.email,
            url: wLocalizeValidate.url,
            date: wLocalizeValidate.date,
            dateISO: wLocalizeValidate.dateISO,
            number: wLocalizeValidate.number,
            digits: wLocalizeValidate.digits,
            creditcard: wLocalizeValidate.creditcard,
            equalTo: wLocalizeValidate.equalTo,
            maxlength: $.validator.format(wLocalizeValidate.maxlength),
            minlength: $.validator.format(wLocalizeValidate.minlength),
            rangelength: $.validator.format(wLocalizeValidate.rangelength),
            range: $.validator.format(wLocalizeValidate.range),
            filetype: $.validator.format(wLocalizeValidate.filetype),
            filesize: $.validator.format(wLocalizeValidate.filesize),
            filesizeEach: $.validator.format(wLocalizeValidate.filesizeEach),
            max: $.validator.format(wLocalizeValidate.max),
            min: $.validator.format(wLocalizeValidate.min),
            word: wLocalizeValidate.word,
            login: wLocalizeValidate.login,
            phoneUA: wLocalizeValidate.phoneUA,
            extension: wLocalizeValidate.extension
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function delegate(event) {
                    var validator, form, eventType;
                    form = this[0].form, form || (form = $(this).closest("div[data-form='true']").get(0)), validator = $.data(form, "validator"), eventType = "on" + event.type.replace(/^validate/, ""), this.settings = validator.settings, this.settings[eventType] && !this.is(this.settings.ignore) && this.settings[eventType].call(validator, this[0], event)
                }
                this.labelContainer = $(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm), this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var rules, groups = this.groups = {};
                $.each(this.settings.groups, function (key, value) {
                    "string" == typeof value && (value = value.split(/\s/)), $.each(value, function (index, name) {
                        groups[name] = key
                    })
                }), rules = this.settings.rules, $.each(rules, function (key, value) {
                    rules[key] = $.validator.normalizeRule(value)
                }), $(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", delegate).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate), this.settings.invalidHandler && $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function () {
                return this.checkForm(), $.extend(this.submitted, this.errorMap), this.invalid = $.extend({}, this.errorMap), this.valid() || $(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) this.check(elements[i]);
                return this.valid()
            },
            element: function (element) {
                var cleanElement = this.clean(element),
                    checkElement = this.validationTargetFor(cleanElement),
                    result = !0;
                return void 0 === checkElement ? delete this.invalid[cleanElement.name] : (this.prepareElement(checkElement), this.currentElements = $(checkElement), result = this.check(checkElement) !== !1, result ? this.invalid[checkElement.name] = !1 : this.invalid[checkElement.name] = !0), $(element).attr("aria-invalid", !result), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), result
            },
            showErrors: function (errors) {
                if (errors) {
                    $.extend(this.errorMap, errors), this.errorList = [];
                    for (var name in errors) this.errorList.push({
                        message: errors[name],
                        element: this.findByName(name)[0]
                    });
                    this.successList = $.grep(this.successList, function (element) {
                        return !(element.name in errors)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                $.fn.resetForm && $(this.currentForm).resetForm(), this.submitted = {}, this.prepareForm(), this.hideErrors();
                var i, elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (i = 0; elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
                else elements.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (obj) {
                var i, count = 0;
                for (i in obj) obj[i] && count++;
                return count
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (errors) {
                errors.not(this.containers).text(""), this.addWrapper(errors).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            isValidElement: function (element) {
                return void 0 === this.invalid[element.name] ? void 0 : !this.invalid[element.name]
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    $(this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function () {
                var lastActive = this.lastActive;
                return lastActive && 1 === $.grep(this.errorList, function (n) {
                    return n.element.name === lastActive.name
                }).length && lastActive
            },
            elements: function () {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    return !this.name && validator.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in rulesCache || !validator.objectLength($(this).rules()) ? !1 : (rulesCache[this.name] = !0, !0)
                })
            },
            clean: function (selector) {
                return $(selector)[0]
            },
            errors: function () {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext)
            },
            reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = $([]), this.toHide = $([]), this.currentElements = $([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (element) {
                this.reset(), this.toHide = this.errorsFor(element)
            },
            elementValue: function (element) {
                var val, $element = $(element),
                    type = element.type;
                return "radio" === type || "checkbox" === type ? this.findByName(element.name).filter(":checked").val() : "number" === type && "undefined" != typeof element.validity ? element.validity.badInput ? !1 : $element.val() : (val = $element.val(), "string" == typeof val ? val.replace(/\r/g, "") : val)
            },
            check: function (element) {
                element = this.validationTargetFor(this.clean(element));
                var result, method, rule, rules = $(element).rules(),
                    rulesCount = $.map(rules, function (n, i) {
                        return i
                    }).length,
                    dependencyMismatch = !1,
                    val = this.elementValue(element);
                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        if (result = $.validator.methods[method].call(this, val, element, rule.parameters), "dependency-mismatch" === result && 1 === rulesCount) {
                            dependencyMismatch = !0;
                            continue
                        }
                        if (dependencyMismatch = !1, "pending" === result) return void(this.toHide = this.toHide.not(this.errorsFor(element)));
                        if (!result) return this.formatAndAdd(element, rule), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method."), e
                    }
                }
                if (!dependencyMismatch) return this.objectLength(rules) && this.successList.push(element), !0
            },
            customDataMessage: function (element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg")
            },
            customMessage: function (name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method])
            },
            findDefined: function () {
                for (var i = 0; i < arguments.length; i++)
                    if (void 0 !== arguments[i]) return arguments[i]
            },
            defaultMessage: function (element, method) {
                return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), !this.settings.ignoreTitle && element.title || void 0, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>")
            },
            formatAndAdd: function (element, rule) {
                var message = this.defaultMessage(element, rule.method),
                    theregex = /\$?\{(\d+)\}/g;
                "function" == typeof message ? message = message.call(this, rule.parameters, element) : theregex.test(message) && (message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters)), this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                }), this.errorMap[element.name] = message, this.submitted[element.name] = message
            },
            addWrapper: function (toToggle) {
                return this.settings.wrapper && (toToggle = toToggle.add(toToggle.parent(this.settings.wrapper))), toToggle
            },
            defaultShowErrors: function () {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) error = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass), this.showLabel(error.element, error.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
                if (this.settings.unhighlight)
                    for (i = 0, elements = this.validElements(); elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return $(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (element, message) {
                var place, group, errorID, error = this.errorsFor(element),
                    elementID = this.idOrName(element),
                    describedBy = $(element).attr("aria-describedby");
                error.length ? (error.removeClass(this.settings.validClass).addClass(this.settings.errorClass), error.html(message)) : (error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || ""), place = error, this.settings.wrapper && (place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(place) : this.settings.errorPlacement ? this.settings.errorPlacement(place, $(element)) : place.insertAfter(element), error.is("label") ? error.attr("for", elementID) : 0 === error.parents("label[for='" + elementID + "']").length && (errorID = error.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), describedBy ? describedBy.match(new RegExp("\\b" + errorID + "\\b")) || (describedBy += " " + errorID) : describedBy = errorID, $(element).attr("aria-describedby", describedBy), group = this.groups[element.name], group && $.each(this.groups, function (name, testgroup) {
                    testgroup === group && $("[name='" + name + "']", this.currentForm).attr("aria-describedby", error.attr("id"))
                }))), !message && this.settings.success && (error.text(""), "string" == typeof this.settings.success ? error.addClass(this.settings.success) : this.settings.success(error, element)), this.toShow = this.toShow.add(error)
            },
            errorsFor: function (element) {
                var name = this.idOrName(element),
                    describer = $(element).attr("aria-describedby"),
                    selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                return describer && (selector = selector + ", #" + describer.replace(/\s+/g, ", #")), this.errors().filter(selector)
            },
            idOrName: function (element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name)
            },
            validationTargetFor: function (element) {
                return this.checkable(element) && (element = this.findByName(element.name)), $(element).not(this.settings.ignore)[0]
            },
            checkable: function (element) {
                return /radio|checkbox/i.test(element.type)
            },
            findByName: function (name) {
                return $(this.currentForm).find("[name='" + name + "']")
            },
            getLength: function (value, element) {
                switch (element.nodeName.toLowerCase()) {
                case "select":
                    return $("option:selected", element).length;
                case "input":
                    if (this.checkable(element)) return this.findByName(element.name).filter(":checked").length
                }
                return value.length
            },
            depend: function (param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : !0
            },
            dependTypes: {
                "boolean": function (param) {
                    return param
                },
                string: function (param, element) {
                    return !!$(param, element.form).length
                },
                "function": function (param, element) {
                    return param(element)
                }
            },
            optional: function (element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch"
            },
            startRequest: function (element) {
                this.pending[element.name] || (this.pendingRequest++, this.pending[element.name] = !0)
            },
            stopRequest: function (element, valid) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[element.name], valid && 0 === this.pendingRequest && this.formSubmitted && this.form() ? ($(this.currentForm).submit(), this.formSubmitted = !1) : !valid && 0 === this.pendingRequest && this.formSubmitted && ($(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(element, "remote")
                })
            },
            destroy: function () {
                this.resetForm(), $(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (className, rules) {
            className.constructor === String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className)
        },
        classRules: function (element) {
            var rules = {},
                classes = $(element).attr("class");
            return classes && $.each(classes.split(" "), function () {
                this in $.validator.classRuleSettings && $.extend(rules, $.validator.classRuleSettings[this])
            }), rules
        },
        normalizeAttributeRule: function (rules, type, method, value) {
            /min|max/.test(method) && (null === type || /number|range|text/.test(type)) && (value = Number(value), isNaN(value) && (value = void 0)), value || 0 === value ? rules[method] = value : type === method && "range" !== type && (rules[method] = !0)
        },
        attributeRules: function (element) {
            var method, value, rules = {},
                $element = $(element),
                type = element.getAttribute("type");
            for (method in $.validator.methods) "required" === method ? (value = element.getAttribute(method), "" === value && (value = !0), value = !!value) : value = $element.attr(method), this.normalizeAttributeRule(rules, type, method, value);
            return rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) && delete rules.maxlength, rules
        },
        dataRules: function (element) {
            var method, value, rules = {},
                $element = $(element),
                type = element.getAttribute("type");
            for (method in $.validator.methods) value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()), this.normalizeAttributeRule(rules, type, method, value);
            return rules
        },
        staticRules: function (element) {
            validator = element.form ? $.data(element.form, "validator") : $.data($(element).closest("div[data-form='true']").get(0), "validator");
            var rules = {},
                validator = validator;
            return validator.settings.rules && (rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {}), rules
        },
        normalizeRules: function (rules, element) {
            return $.each(rules, function (prop, val) {
                if (val === !1) return void delete rules[prop];
                if (val.param || val.depends) {
                    var keepRule = !0;
                    switch (typeof val.depends) {
                    case "string":
                        keepRule = !!$(val.depends, element.form).length;
                        break;
                    case "function":
                        keepRule = val.depends.call(element, element)
                    }
                    keepRule ? rules[prop] = void 0 !== val.param ? val.param : !0 : delete rules[prop]
                }
            }), $.each(rules, function (rule, parameter) {
                rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter
            }), $.each(["minlength", "maxlength"], function () {
                rules[this] && (rules[this] = Number(rules[this]))
            }), $.each(["rangelength", "range"], function () {
                var parts;
                rules[this] && ($.isArray(rules[this]) ? rules[this] = [Number(rules[this][0]), Number(rules[this][1])] : "string" == typeof rules[this] && (parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/), rules[this] = [Number(parts[0]), Number(parts[1])]))
            }), $.validator.autoCreateRanges && (null != rules.min && null != rules.max && (rules.range = [rules.min, rules.max], delete rules.min, delete rules.max), null != rules.minlength && null != rules.maxlength && (rules.rangelength = [rules.minlength, rules.maxlength], delete rules.minlength, delete rules.maxlength)), rules
        },
        normalizeRule: function (data) {
            if ("string" == typeof data) {
                var transformed = {};
                $.each(data.split(/\s/), function () {
                    transformed[this] = !0
                }), data = transformed
            }
            return data
        },
        addMethod: function (name, method, message) {
            $.validator.methods[name] = method, $.validator.messages[name] = void 0 !== message ? message : $.validator.messages[name], method.length < 3 && $.validator.addClassRules(name, $.validator.normalizeRule(name))
        },
        methods: {
            required: function (value, element, param) {
                if (!this.depend(param, element)) return "dependency-mismatch";
                if ("select" === element.nodeName.toLowerCase()) {
                    var val = $(element).val();
                    return val && val.length > 0
                }
                return this.checkable(element) ? this.getLength(value, element) > 0 : value.length > 0
            },
            phone: function (value, element, param) {
                return this.optional(element) || /^([+]?[0-9]{1,2})?([0-9]{3})([\d]{7})$/.test(value)
            },
            phoneUA: function (value, element, param) {
                return this.optional(element) || /^([+]?38)?\ \(([0-9]{3})\)\ ([\d]{3})\-([\d]{2})\-([\d]{2})$/.test(value)
            },
            validTrue: function (value, element, param) {
                return $(element).data("valid") === !0
            },
            password: function (value, element) {
                return this.optional(element) || /^\S.*$/.test(value)
            },
            filesize: function (value, element, param) {
                for (var kb = 0, i = 0; i < element.files.length; i++) kb += element.files[i].size;
                return this.optional(element) || param >= kb / 1024
            },
            filesizeEach: function (value, element, param) {
                for (var flag = !0, i = 0; i < element.files.length; i++) element.files[i].size / 1024 > param && (flag = !1);
                return this.optional(element) || flag
            },
            filetype: function (value, element, param) {
                return param = "string" == typeof param ? param.replace(/,/g, "|") : "png|jpe?g|doc|pdf|gif|zip|rar|tar|html|swf|txt|xls|docx|xlsx|odt", this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"))
            },
            word: function (value, element) {
                return this.optional(element) || /^[a-zA-Zа-яА-ЯіІїЇєёЁЄґҐ\'\`\- ]*$/.test(value)
            },
            login: function (value, element) {
                return this.optional(element) || /^[a-zA-Zа-яА-ЯіІїЇєЄёЁґҐ][0-9a-zA-Zа-яА-ЯіІїЇєЄґҐ\-\._| ]+$/.test(value)
            },
            email: function (value, element) {
                return this.optional(element) || /^([a-zA-Z0-9_\.\-]{2,})+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)
            },
            url: function (value, element) {
                return this.optional(element) || /^((https?|s?ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)
            },
            date: function (value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString())
            },
            dateISO: function (value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
            },
            number: function (value, element) {
                return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
            },
            digits: function (value, element) {
                return this.optional(element) || /^\d+$/.test(value)
            },
            or: function (value, element, param) {
                var $module = $(element).parents(".wForm");
                return $module.find("." + param + ":filled").length
            },
            creditcard: function (value, element) {
                if (this.optional(element)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(value)) return !1;
                var n, cDigit, nCheck = 0,
                    nDigit = 0,
                    bEven = !1;
                if (value = value.replace(/\D/g, ""), value.length < 13 || value.length > 19) return !1;
                for (n = value.length - 1; n >= 0; n--) cDigit = value.charAt(n), nDigit = parseInt(cDigit, 10), bEven && (nDigit *= 2) > 9 && (nDigit -= 9), nCheck += nDigit, bEven = !bEven;
                return nCheck % 10 === 0
            },
            minlength: function (value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param
            },
            maxlength: function (value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || param >= length
            },
            rangelength: function (value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param[0] && length <= param[1]
            },
            min: function (value, element, param) {
                return this.optional(element) || value >= param
            },
            max: function (value, element, param) {
                return this.optional(element) || param >= value
            },
            range: function (value, element, param) {
                return this.optional(element) || value >= param[0] && value <= param[1]
            },
            equalTo: function (value, element, param) {
                var target = $(param);
                return this.settings.onfocusout && target.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                    $(element).valid()
                }), value === target.val()
            },
            remote: function (value, element, param) {
                if (this.optional(element)) return "dependency-mismatch";
                var validator, data, optionDataString, previous = this.previousValue(element);
                return this.settings.messages[element.name] || (this.settings.messages[element.name] = {}), previous.originalMessage = this.settings.messages[element.name].remote, this.settings.messages[element.name].remote = previous.message, param = "string" == typeof param && {
                    url: param
                } || param, optionDataString = $.param($.extend({
                    data: value
                }, param.data)), previous.old === optionDataString ? previous.valid : (previous.old = optionDataString, validator = this, this.startRequest(element), data = {}, data[element.name] = value, $.ajax($.extend(!0, {
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function (response) {
                        var errors, message, submitted, valid = response === !0 || "true" === response;
                        validator.settings.messages[element.name].remote = previous.originalMessage, valid ? (submitted = validator.formSubmitted, validator.prepareElement(element), validator.formSubmitted = submitted, validator.successList.push(element), delete validator.invalid[element.name], validator.showErrors()) : (errors = {}, message = response || validator.defaultMessage(element, "remote"), errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message, validator.invalid[element.name] = !0, validator.showErrors(errors)), previous.valid = valid, validator.stopRequest(element, valid)
                    }
                }, param)), "pending")
            }
        }
    }), $.format = function () {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    }, ! function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        var e = -1,
            o = -1,
            i = function (t) {
                return parseFloat(t) || 0
            },
            a = function (e) {
                var o = 1,
                    a = t(e),
                    n = null,
                    r = [];
                return a.each(function () {
                    var e = t(this),
                        a = e.offset().top - i(e.css("margin-top")),
                        s = r.length > 0 ? r[r.length - 1] : null;
                    null === s ? r.push(e) : Math.floor(Math.abs(n - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), n = a
                }), r
            },
            n = function (e) {
                var o = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
            },
            r = t.fn.matchHeight = function (e) {
                var o = n(e);
                if (o.remove) {
                    var i = this;
                    return this.css(o.property, ""), t.each(r._groups, function (t, e) {
                        e.elements = e.elements.not(i)
                    }), this
                }
                return this.length <= 1 && !o.target ? this : (r._groups.push({
                    elements: this,
                    options: o
                }), r._apply(this, o), this)
            };
        r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = a, r._parse = i, r._parseOptions = n, r._apply = function (e, o) {
            var s = n(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                d = h.parents().filter(":hidden");
            return d.each(function () {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
            }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
                var e = t(this),
                    o = e.css("display");
                "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: o,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), l = a(h), h.each(function () {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
            })), t.each(l, function (e, o) {
                var a = t(o),
                    n = 0;
                if (s.target) n = s.target.outerHeight(!1);
                else {
                    if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                    a.each(function () {
                        var e = t(this),
                            o = e.attr("style"),
                            i = e.css("display");
                        "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                        var a = {
                            display: i
                        };
                        a[s.property] = "", e.css(a), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                    })
                }
                a.each(function () {
                    var e = t(this),
                        o = 0;
                    s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, n - o + "px"))
                })
            }), d.each(function () {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
            }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this
        }, r._applyDataApi = function () {
            var e = {};
            t("[data-match-height], [data-mh]").each(function () {
                var o = t(this),
                    i = o.attr("data-mh") || o.attr("data-match-height");
                i in e ? e[i] = e[i].add(o) : e[i] = o
            }), t.each(e, function () {
                this.matchHeight(!0)
            })
        };
        var s = function (e) {
            r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
                r._apply(this.elements, this.options)
            }), r._afterUpdate && r._afterUpdate(e, r._groups)
        };
        r._update = function (i, a) {
            if (a && "resize" === a.type) {
                var n = t(window).width();
                if (n === e) return;
                e = n
            }
            i ? -1 === o && (o = setTimeout(function () {
                s(a), o = -1
            }, r._throttle)) : s(a)
        }, t(r._applyDataApi), t(window).bind("load", function (t) {
            r._update(!1, t)
        }), t(window).bind("resize orientationchange", function (t) {
            r._update(!0, t)
        })
    }), ! function (a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function (a) {
        "use strict";
        var b = window.Slick || {};
        b = function () {
            function c(c, d) {
                var f, e = this;
                e.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(c),
                    appendDots: a(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (a, b) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !1,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
            }
            var b = 0;
            return c
        }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed)
            }
        }, b.prototype.animateSlide = function (b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function (a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function () {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.asNavFor = function (b) {
            var c = this,
                d = c.options.asNavFor;
            d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function (a) {
            var b = this,
                c = {};
            b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function () {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function () {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function () {
            var a = this;
            a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
        }, b.prototype.buildArrows = function () {
            var b = this;
            b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function () {
            var c, d, b = this;
            if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
                for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
                d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function () {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function () {
            var b, c, d, e, f, g, h, a = this;
            if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
                for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                    var i = document.createElement("div");
                    for (c = 0; c < a.options.rows; c++) {
                        var j = document.createElement("div");
                        for (d = 0; d < a.options.slidesPerRow; d++) {
                            var k = b * h + (c * a.options.slidesPerRow + d);
                            g.get(k) && j.appendChild(g.get(k))
                        }
                        i.appendChild(j)
                    }
                    e.appendChild(i)
                }
                a.$slider.html(e), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, b.prototype.checkResponsive = function (b, c) {
            var e, f, g, d = this,
                h = !1,
                i = d.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
                f = null;
                for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
                null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
            }
        }, b.prototype.changeSlide = function (b, c) {
            var f, g, h, d = this,
                e = a(b.target);
            switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
            }
        }, b.prototype.checkNavigable = function (a) {
            var c, d, b = this;
            if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
            else
                for (var e in c) {
                    if (a < c[e]) {
                        a = d;
                        break
                    }
                    d = c[e]
                }
            return a
        }, b.prototype.cleanUpEvents = function () {
            var b = this;
            b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpRows = function () {
            var b, a = this;
            a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
        }, b.prototype.clickHandler = function (a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function (b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function (a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function (a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function () {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function (a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function () {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (a.options.centerMode === !0) d = a.slideCount;
            else
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d - 1
        }, b.prototype.getLeft = function (a) {
            var c, d, f, b = this,
                e = 0;
            return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
        }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function () {
            var e, a = this,
                b = 0,
                c = 0,
                d = [];
            for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d
        }, b.prototype.getSlick = function () {
            return this
        }, b.prototype.getSlideCount = function () {
            var c, d, e, b = this;
            return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
                return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
            }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function (b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
        }, b.prototype.initArrowEvents = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function () {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
        }, b.prototype.initializeEvents = function () {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
        }, b.prototype.keyHandler = function (a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, b.prototype.lazyLoad = function () {
            function g(b) {
                a("img[data-lazy]", b).each(function () {
                    var b = a(this),
                        c = a(this).attr("data-lazy"),
                        d = document.createElement("img");
                    d.onload = function () {
                        b.animate({
                            opacity: 0
                        }, 100, function () {
                            b.attr("src", c).animate({
                                opacity: 1
                            }, 200, function () {
                                b.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, d.src = c
                })
            }
            var c, d, e, f, b = this;
            b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
        }, b.prototype.loadSlider = function () {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function () {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function () {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function () {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function () {
            var a = this;
            a.paused = !1, a.autoPlay()
        }, b.prototype.postSlide = function (a) {
            var b = this;
            b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
        }, b.prototype.prev = b.prototype.slickPrev = function () {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function (a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function () {
            var c, d, b = this;
            c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
                d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
            }).error(function () {
                d.removeAttr("data-lazy"), b.progressiveLazyLoad()
            }))
        }, b.prototype.refresh = function (b) {
            var d, e, c = this;
            e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
                currentSlide: d
            }), c.init(), b || c.changeSlide({
                data: {
                    message: "index",
                    index: d
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function () {
            var c, d, e, b = this,
                f = b.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                b.respondTo = b.options.respondTo || "window";
                for (c in f)
                    if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                        for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                        b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                    }
                b.breakpoints.sort(function (a, c) {
                    return b.options.mobileFirst ? a - c : c - a
                })
            }
        }, b.prototype.reinit = function () {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
        }, b.prototype.resize = function () {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function (a) {
            var d, e, b = this,
                c = {};
            b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
        }, b.prototype.setDimensions = function () {
            var a = this;
            a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function () {
            var c, b = this;
            b.$slides.each(function (d, e) {
                c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                    position: "relative",
                    right: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                })
            }), b.$slides.eq(b.currentSlide).css({
                zIndex: b.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
            var f, g, e = this;
            if ("responsive" === b && "array" === a.type(c))
                for (g in c)
                    if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];
                    else {
                        for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
                        e.options.responsive.push(c[g])
                    } else e.options[b] = c;
            d === !0 && (e.unload(), e.reinit())
        }, b.prototype.setPosition = function () {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function () {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform",
                a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function (a) {
            var c, d, e, f, b = this;
            d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
        }, b.prototype.setupInfinite = function () {
            var c, d, e, b = this;
            if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
                for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
                for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
                b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.setPaused = function (a) {
            var b = this;
            b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
        }, b.prototype.selectHandler = function (b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function (a, b, c) {
            var d, e, f, g, h = null,
                i = this;
            return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
                i.postSlide(d)
            }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
                i.postSlide(d)
            }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
                i.postSlide(e)
            })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
                i.postSlide(e)
            }) : i.postSlide(e))))
        }, b.prototype.startLoad = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function () {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
        }, b.prototype.swipeEnd = function (a) {
            var c, b = this;
            if (b.dragging = !1, b.shouldClick = !(b.touchObject.swipeLength > 10), void 0 === b.touchObject.curX) return !1;
            if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case "left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
            } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
        }, b.prototype.swipeHandler = function (a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function (a) {
            var d, e, f, g, h, b = this;
            return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
        }, b.prototype.swipeStart = function (a) {
            var c, b = this;
            return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function () {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function (a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function () {
            var b, a = this;
            b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function () {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function () {
            var a = this;
            document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
        }, b.prototype.initADA = function () {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                })
            }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
        }, b.prototype.activateADA = function () {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, b.prototype.focusHandler = function () {
            var b = this;
            b.$slider.on("focus.slick blur.slick", "*", function (c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function () {
                    b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
                }, 0)
            })
        }, a.fn.slick = function () {
            var f, g, a = this,
                c = arguments[0],
                d = Array.prototype.slice.call(arguments, 1),
                e = a.length;
            for (f = 0; e > f; f++)
                if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
            return a
        }
    })
    /*,
        function(){var Dropzone,Emitter,camelize,contentLoaded,detectVerticalSquash,drawImageIOSFix,noop,without,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child};noop=function(){},Emitter=function(){function Emitter(){}return Emitter.prototype.addEventListener=Emitter.prototype.on,Emitter.prototype.on=function(event,fn){return this._callbacks=this._callbacks||{},this._callbacks[event]||(this._callbacks[event]=[]),this._callbacks[event].push(fn),this},Emitter.prototype.emit=function(){var args,callback,callbacks,event,_i,_len;if(event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[],this._callbacks=this._callbacks||{},callbacks=this._callbacks[event])for(_i=0,_len=callbacks.length;_len>_i;_i++)callback=callbacks[_i],callback.apply(this,args);return this},Emitter.prototype.removeListener=Emitter.prototype.off,Emitter.prototype.removeAllListeners=Emitter.prototype.off,Emitter.prototype.removeEventListener=Emitter.prototype.off,Emitter.prototype.off=function(event,fn){var callback,callbacks,i,_i,_len;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(callbacks=this._callbacks[event],!callbacks)return this;if(1===arguments.length)return delete this._callbacks[event],this;for(i=_i=0,_len=callbacks.length;_len>_i;i=++_i)if(callback=callbacks[i],callback===fn){callbacks.splice(i,1);break}return this},Emitter}(),Dropzone=function(_super){function Dropzone(element,options){var elementOptions,fallback,_ref;if(this.element=element,this.version=Dropzone.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*!/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(Dropzone.instances.push(this),this.element.dropzone=this,elementOptions=null!=(_ref=Dropzone.optionsForElement(this.element))?_ref:{},this.options=extend({},this.defaultOptions,elementOptions,null!=options?options:{}),this.options.forceFallback||!Dropzone.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(fallback=this.getExistingFallback())&&fallback.parentNode&&fallback.parentNode.removeChild(fallback),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=Dropzone.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=Dropzone.getElements(this.options.clickable,"clickable")),this.init()}var extend,resolveOption;return __extends(Dropzone,_super),Dropzone.prototype.Emitter=Emitter,Dropzone.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],Dropzone.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(file,done){return done()},init:function(){return noop},forceFallback:!1,fallback:function(){var child,messageElement,span,_i,_len,_ref;for(this.element.className=""+this.element.className+" dz-browser-not-supported",_ref=this.element.getElementsByTagName("div"),_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],/(^| )dz-message($| )/.test(child.className)&&(messageElement=child,child.className="dz-message");return messageElement||(messageElement=Dropzone.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(messageElement)),span=messageElement.getElementsByTagName("span")[0],span&&(null!=span.textContent?span.textContent=this.options.dictFallbackMessage:null!=span.innerText&&(span.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(file){var info,srcRatio,trgRatio;return info={srcX:0,srcY:0,srcWidth:file.width,srcHeight:file.height},srcRatio=file.width/file.height,info.optWidth=this.options.thumbnailWidth,info.optHeight=this.options.thumbnailHeight,null==info.optWidth&&null==info.optHeight?(info.optWidth=info.srcWidth,info.optHeight=info.srcHeight):null==info.optWidth?info.optWidth=srcRatio*info.optHeight:null==info.optHeight&&(info.optHeight=1/srcRatio*info.optWidth),trgRatio=info.optWidth/info.optHeight,file.height<info.optHeight||file.width<info.optWidth?(info.trgHeight=info.srcHeight,info.trgWidth=info.srcWidth):srcRatio>trgRatio?(info.srcHeight=file.height,info.srcWidth=info.srcHeight*trgRatio):(info.srcWidth=file.width,info.srcHeight=info.srcWidth/trgRatio),info.srcX=(file.width-info.srcWidth)/2,info.srcY=(file.height-info.srcHeight)/2,info},drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:noop,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:noop,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(file){var node,removeFileEvent,removeLink,_i,_j,_k,_len,_len1,_len2,_ref,_ref1,_ref2,_results;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(file.previewElement=Dropzone.createElement(this.options.previewTemplate.trim()),file.previewTemplate=file.previewElement,this.previewsContainer.appendChild(file.previewElement),_ref=file.previewElement.querySelectorAll("[data-dz-name]"),_i=0,_len=_ref.length;_len>_i;_i++)node=_ref[_i],node.textContent=this._renameFilename(file.name);for(_ref1=file.previewElement.querySelectorAll("[data-dz-size]"),_j=0,_len1=_ref1.length;_len1>_j;_j++)node=_ref1[_j],node.innerHTML=this.filesize(file.size);for(this.options.addRemoveLinks&&(file._removeLink=Dropzone.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),file.previewElement.appendChild(file._removeLink)),removeFileEvent=function(_this){return function(e){return e.preventDefault(),e.stopPropagation(),file.status===Dropzone.UPLOADING?Dropzone.confirm(_this.options.dictCancelUploadConfirmation,function(){return _this.removeFile(file)}):_this.options.dictRemoveFileConfirmation?Dropzone.confirm(_this.options.dictRemoveFileConfirmation,function(){return _this.removeFile(file)}):_this.removeFile(file)}}(this),_ref2=file.previewElement.querySelectorAll("[data-dz-remove]"),_results=[],_k=0,_len2=_ref2.length;_len2>_k;_k++)removeLink=_ref2[_k],_results.push(removeLink.addEventListener("click",removeFileEvent));return _results}},removedfile:function(file){var _ref;return file.previewElement&&null!=(_ref=file.previewElement)&&_ref.parentNode.removeChild(file.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(file,dataUrl){var thumbnailElement,_i,_len,_ref;if(file.previewElement){for(file.previewElement.classList.remove("dz-file-preview"),_ref=file.previewElement.querySelectorAll("[data-dz-thumbnail]"),_i=0,_len=_ref.length;_len>_i;_i++)thumbnailElement=_ref[_i],thumbnailElement.alt=file.name,thumbnailElement.src=dataUrl;return setTimeout(function(_this){return function(){return file.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(file,message){var node,_i,_len,_ref,_results;if(file.previewElement){for(file.previewElement.classList.add("dz-error"),"String"!=typeof message&&message.error&&(message=message.error),_ref=file.previewElement.querySelectorAll("[data-dz-errormessage]"),_results=[],_i=0,_len=_ref.length;_len>_i;_i++)node=_ref[_i],_results.push(node.textContent=message);return _results}},errormultiple:noop,processing:function(file){return file.previewElement&&(file.previewElement.classList.add("dz-processing"),file._removeLink)?file._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:noop,uploadprogress:function(file,progress,bytesSent){var node,_i,_len,_ref,_results;if(file.previewElement){for(_ref=file.previewElement.querySelectorAll("[data-dz-uploadprogress]"),_results=[],_i=0,_len=_ref.length;_len>_i;_i++)node=_ref[_i],"PROGRESS"===node.nodeName?_results.push(node.value=progress):_results.push(node.style.width=""+progress+"%");return _results}},totaluploadprogress:noop,sending:noop,sendingmultiple:noop,success:function(file){return file.previewElement?file.previewElement.classList.add("dz-success"):void 0},successmultiple:noop,canceled:function(file){return this.emit("error",file,"Upload canceled.")},canceledmultiple:noop,complete:function(file){return file._removeLink&&(file._removeLink.textContent=this.options.dictRemoveFile),file.previewElement?file.previewElement.classList.add("dz-complete"):void 0},completemultiple:noop,maxfilesexceeded:noop,maxfilesreached:noop,queuecomplete:noop,addedfiles:noop,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},extend=function(){var key,object,objects,target,val,_i,_len;for(target=arguments[0],objects=2<=arguments.length?__slice.call(arguments,1):[],_i=0,_len=objects.length;_len>_i;_i++){object=objects[_i];for(key in object)val=object[key],target[key]=val}return target},Dropzone.prototype.getAcceptedFiles=function(){var file,_i,_len,_ref,_results;for(_ref=this.files,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],file.accepted&&_results.push(file);return _results},Dropzone.prototype.getRejectedFiles=function(){var file,_i,_len,_ref,_results;for(_ref=this.files,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],file.accepted||_results.push(file);return _results},Dropzone.prototype.getFilesWithStatus=function(status){var file,_i,_len,_ref,_results;for(_ref=this.files,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],file.status===status&&_results.push(file);return _results},Dropzone.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(Dropzone.QUEUED)},Dropzone.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(Dropzone.UPLOADING)},Dropzone.prototype.getAddedFiles=function(){return this.getFilesWithStatus(Dropzone.ADDED)},Dropzone.prototype.getActiveFiles=function(){var file,_i,_len,_ref,_results;for(_ref=this.files,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],file.status!==Dropzone.UPLOADING&&file.status!==Dropzone.QUEUED||_results.push(file);return _results},Dropzone.prototype.init=function(){var eventName,noPropagation,setupHiddenFileInput,_i,_len,_ref,_ref1;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(Dropzone.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(setupHiddenFileInput=function(_this){return function(){return _this.hiddenFileInput&&_this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput),_this.hiddenFileInput=document.createElement("input"),_this.hiddenFileInput.setAttribute("type","file"),(null==_this.options.maxFiles||_this.options.maxFiles>1)&&_this.hiddenFileInput.setAttribute("multiple","multiple"),_this.hiddenFileInput.className="dz-hidden-input",null!=_this.options.acceptedFiles&&_this.hiddenFileInput.setAttribute("accept",_this.options.acceptedFiles),null!=_this.options.capture&&_this.hiddenFileInput.setAttribute("capture",_this.options.capture),_this.hiddenFileInput.style.visibility="hidden",_this.hiddenFileInput.style.position="absolute",_this.hiddenFileInput.style.top="0",_this.hiddenFileInput.style.left="0",_this.hiddenFileInput.style.height="0",_this.hiddenFileInput.style.width="0",document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput),_this.hiddenFileInput.addEventListener("change",function(){var file,files,_i,_len;if(files=_this.hiddenFileInput.files,files.length)for(_i=0,_len=files.length;_len>_i;_i++)file=files[_i],_this.addFile(file);return _this.emit("addedfiles",files),setupHiddenFileInput()})}}(this))(),this.URL=null!=(_ref=window.URL)?_ref:window.webkitURL,_ref1=this.events,_i=0,_len=_ref1.length;_len>_i;_i++)eventName=_ref1[_i],this.on(eventName,this.options[eventName]);return this.on("uploadprogress",function(_this){return function(){return _this.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(_this){return function(){return _this.updateTotalUploadProgress()}}(this)),this.on("canceled",function(_this){return function(file){return _this.emit("complete",file)}}(this)),this.on("complete",function(_this){return function(file){return 0===_this.getAddedFiles().length&&0===_this.getUploadingFiles().length&&0===_this.getQueuedFiles().length?setTimeout(function(){return _this.emit("queuecomplete")},0):void 0}}(this)),noPropagation=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(_this){return function(e){return _this.emit("dragstart",e)}}(this),dragenter:function(_this){return function(e){return noPropagation(e),_this.emit("dragenter",e)}}(this),dragover:function(_this){return function(e){var efct;try{efct=e.dataTransfer.effectAllowed}catch(_error){}return e.dataTransfer.dropEffect="move"===efct||"linkMove"===efct?"move":"copy",noPropagation(e),_this.emit("dragover",e)}}(this),dragleave:function(_this){return function(e){return _this.emit("dragleave",e)}}(this),drop:function(_this){return function(e){return noPropagation(e),_this.drop(e)}}(this),dragend:function(_this){return function(e){return _this.emit("dragend",e)}}(this)}}],this.clickableElements.forEach(function(_this){return function(clickableElement){return _this.listeners.push({element:clickableElement,events:{click:function(evt){return(clickableElement!==_this.element||evt.target===_this.element||Dropzone.elementInside(evt.target,_this.element.querySelector(".dz-message")))&&_this.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},Dropzone.prototype.destroy=function(){var _ref;return this.disable(),this.removeAllFiles(!0),(null!=(_ref=this.hiddenFileInput)?_ref.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,Dropzone.instances.splice(Dropzone.instances.indexOf(this),1)},Dropzone.prototype.updateTotalUploadProgress=function(){var activeFiles,file,totalBytes,totalBytesSent,totalUploadProgress,_i,_len,_ref;if(totalBytesSent=0,totalBytes=0,activeFiles=this.getActiveFiles(),activeFiles.length){for(_ref=this.getActiveFiles(),_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],totalBytesSent+=file.upload.bytesSent,totalBytes+=file.upload.total;
    totalUploadProgress=100*totalBytesSent/totalBytes}else totalUploadProgress=100;return this.emit("totaluploadprogress",totalUploadProgress,totalBytes,totalBytesSent)},Dropzone.prototype._getParamName=function(n){return"function"==typeof this.options.paramName?this.options.paramName(n):""+this.options.paramName+(this.options.uploadMultiple?"["+n+"]":"")},Dropzone.prototype._renameFilename=function(name){return"function"!=typeof this.options.renameFilename?name:this.options.renameFilename(name)},Dropzone.prototype.getFallbackForm=function(){var existingFallback,fields,fieldsString,form;return(existingFallback=this.getExistingFallback())?existingFallback:(fieldsString='<div class="dz-fallback">',this.options.dictFallbackText&&(fieldsString+="<p>"+this.options.dictFallbackText+"</p>"),fieldsString+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',fields=Dropzone.createElement(fieldsString),"FORM"!==this.element.tagName?(form=Dropzone.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),form.appendChild(fields)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=form?form:fields)},Dropzone.prototype.getExistingFallback=function(){var fallback,getFallback,tagName,_i,_len,_ref;for(getFallback=function(elements){var el,_i,_len;for(_i=0,_len=elements.length;_len>_i;_i++)if(el=elements[_i],/(^| )fallback($| )/.test(el.className))return el},_ref=["div","form"],_i=0,_len=_ref.length;_len>_i;_i++)if(tagName=_ref[_i],fallback=getFallback(this.element.getElementsByTagName(tagName)))return fallback},Dropzone.prototype.setupEventListeners=function(){var elementListeners,event,listener,_i,_len,_ref,_results;for(_ref=this.listeners,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)elementListeners=_ref[_i],_results.push(function(){var _ref1,_results1;_ref1=elementListeners.events,_results1=[];for(event in _ref1)listener=_ref1[event],_results1.push(elementListeners.element.addEventListener(event,listener,!1));return _results1}());return _results},Dropzone.prototype.removeEventListeners=function(){var elementListeners,event,listener,_i,_len,_ref,_results;for(_ref=this.listeners,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)elementListeners=_ref[_i],_results.push(function(){var _ref1,_results1;_ref1=elementListeners.events,_results1=[];for(event in _ref1)listener=_ref1[event],_results1.push(elementListeners.element.removeEventListener(event,listener,!1));return _results1}());return _results},Dropzone.prototype.disable=function(){var file,_i,_len,_ref,_results;for(this.clickableElements.forEach(function(element){return element.classList.remove("dz-clickable")}),this.removeEventListeners(),_ref=this.files,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],_results.push(this.cancelUpload(file));return _results},Dropzone.prototype.enable=function(){return this.clickableElements.forEach(function(element){return element.classList.add("dz-clickable")}),this.setupEventListeners()},Dropzone.prototype.filesize=function(size){var cutoff,i,selectedSize,selectedUnit,unit,units,_i,_len;if(selectedSize=0,selectedUnit="b",size>0){for(units=["TB","GB","MB","KB","b"],i=_i=0,_len=units.length;_len>_i;i=++_i)if(unit=units[i],cutoff=Math.pow(this.options.filesizeBase,4-i)/10,size>=cutoff){selectedSize=size/Math.pow(this.options.filesizeBase,4-i),selectedUnit=unit;break}selectedSize=Math.round(10*selectedSize)/10}return"<strong>"+selectedSize+"</strong> "+selectedUnit},Dropzone.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},Dropzone.prototype.drop=function(e){var files,items;e.dataTransfer&&(this.emit("drop",e),files=e.dataTransfer.files,this.emit("addedfiles",files),files.length&&(items=e.dataTransfer.items,items&&items.length&&null!=items[0].webkitGetAsEntry?this._addFilesFromItems(items):this.handleFiles(files)))},Dropzone.prototype.paste=function(e){var items,_ref;if(null!=(null!=e&&null!=(_ref=e.clipboardData)?_ref.items:void 0))return this.emit("paste",e),items=e.clipboardData.items,items.length?this._addFilesFromItems(items):void 0},Dropzone.prototype.handleFiles=function(files){var file,_i,_len,_results;for(_results=[],_i=0,_len=files.length;_len>_i;_i++)file=files[_i],_results.push(this.addFile(file));return _results},Dropzone.prototype._addFilesFromItems=function(items){var entry,item,_i,_len,_results;for(_results=[],_i=0,_len=items.length;_len>_i;_i++)item=items[_i],null!=item.webkitGetAsEntry&&(entry=item.webkitGetAsEntry())?entry.isFile?_results.push(this.addFile(item.getAsFile())):entry.isDirectory?_results.push(this._addFilesFromDirectory(entry,entry.name)):_results.push(void 0):null!=item.getAsFile&&(null==item.kind||"file"===item.kind)?_results.push(this.addFile(item.getAsFile())):_results.push(void 0);return _results},Dropzone.prototype._addFilesFromDirectory=function(directory,path){var dirReader,errorHandler,readEntries;return dirReader=directory.createReader(),errorHandler=function(error){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(error):void 0},(readEntries=function(_this){return function(){return dirReader.readEntries(function(entries){var entry,_i,_len;if(entries.length>0){for(_i=0,_len=entries.length;_len>_i;_i++)entry=entries[_i],entry.isFile?entry.file(function(file){return _this.options.ignoreHiddenFiles&&"."===file.name.substring(0,1)?void 0:(file.fullPath=""+path+"/"+file.name,_this.addFile(file))}):entry.isDirectory&&_this._addFilesFromDirectory(entry,""+path+"/"+entry.name);readEntries()}return null},errorHandler)}}(this))()},Dropzone.prototype.accept=function(file,done){return file.size>1024*this.options.maxFilesize*1024?done(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(file.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):Dropzone.isValidFile(file,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",file)):this.options.accept.call(this,file,done):done(this.options.dictInvalidFileType)},Dropzone.prototype.addFile=function(file){return file.upload={progress:0,total:file.size,bytesSent:0},this.files.push(file),file.status=Dropzone.ADDED,this.emit("addedfile",file),this._enqueueThumbnail(file),this.accept(file,function(_this){return function(error){return error?(file.accepted=!1,_this._errorProcessing([file],error)):(file.accepted=!0,_this.options.autoQueue&&_this.enqueueFile(file)),_this._updateMaxFilesReachedClass()}}(this))},Dropzone.prototype.enqueueFiles=function(files){var file,_i,_len;for(_i=0,_len=files.length;_len>_i;_i++)file=files[_i],this.enqueueFile(file);return null},Dropzone.prototype.enqueueFile=function(file){if(file.status!==Dropzone.ADDED||file.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return file.status=Dropzone.QUEUED,this.options.autoProcessQueue?setTimeout(function(_this){return function(){return _this.processQueue()}}(this),0):void 0},Dropzone.prototype._thumbnailQueue=[],Dropzone.prototype._processingThumbnail=!1,Dropzone.prototype._enqueueThumbnail=function(file){return this.options.createImageThumbnails&&file.type.match(/image.*!/)&&file.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(file),setTimeout(function(_this){return function(){return _this._processThumbnailQueue()}}(this),0)):void 0},Dropzone.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(_this){return function(){return _this._processingThumbnail=!1,_this._processThumbnailQueue()}}(this)))},Dropzone.prototype.removeFile=function(file){return file.status===Dropzone.UPLOADING&&this.cancelUpload(file),this.files=without(this.files,file),this.emit("removedfile",file),0===this.files.length?this.emit("reset"):void 0},Dropzone.prototype.removeAllFiles=function(cancelIfNecessary){var file,_i,_len,_ref;for(null==cancelIfNecessary&&(cancelIfNecessary=!1),_ref=this.files.slice(),_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],(file.status!==Dropzone.UPLOADING||cancelIfNecessary)&&this.removeFile(file);return null},Dropzone.prototype.createThumbnail=function(file,callback){var fileReader;return fileReader=new FileReader,fileReader.onload=function(_this){return function(){return"image/svg+xml"===file.type?(_this.emit("thumbnail",file,fileReader.result),void(null!=callback&&callback())):_this.createThumbnailFromUrl(file,fileReader.result,callback)}}(this),fileReader.readAsDataURL(file)},Dropzone.prototype.createThumbnailFromUrl=function(file,imageUrl,callback,crossOrigin){var img;return img=document.createElement("img"),crossOrigin&&(img.crossOrigin=crossOrigin),img.onload=function(_this){return function(){var canvas,ctx,resizeInfo,thumbnail,_ref,_ref1,_ref2,_ref3;return file.width=img.width,file.height=img.height,resizeInfo=_this.options.resize.call(_this,file),null==resizeInfo.trgWidth&&(resizeInfo.trgWidth=resizeInfo.optWidth),null==resizeInfo.trgHeight&&(resizeInfo.trgHeight=resizeInfo.optHeight),canvas=document.createElement("canvas"),ctx=canvas.getContext("2d"),canvas.width=resizeInfo.trgWidth,canvas.height=resizeInfo.trgHeight,drawImageIOSFix(ctx,img,null!=(_ref=resizeInfo.srcX)?_ref:0,null!=(_ref1=resizeInfo.srcY)?_ref1:0,resizeInfo.srcWidth,resizeInfo.srcHeight,null!=(_ref2=resizeInfo.trgX)?_ref2:0,null!=(_ref3=resizeInfo.trgY)?_ref3:0,resizeInfo.trgWidth,resizeInfo.trgHeight),thumbnail=canvas.toDataURL("image/png"),_this.emit("thumbnail",file,thumbnail),null!=callback?callback():void 0}}(this),null!=callback&&(img.onerror=callback),img.src=imageUrl},Dropzone.prototype.processQueue=function(){var i,parallelUploads,processingLength,queuedFiles;if(parallelUploads=this.options.parallelUploads,processingLength=this.getUploadingFiles().length,i=processingLength,!(processingLength>=parallelUploads)&&(queuedFiles=this.getQueuedFiles(),queuedFiles.length>0)){if(this.options.uploadMultiple)return this.processFiles(queuedFiles.slice(0,parallelUploads-processingLength));for(;parallelUploads>i;){if(!queuedFiles.length)return;this.processFile(queuedFiles.shift()),i++}}},Dropzone.prototype.processFile=function(file){return this.processFiles([file])},Dropzone.prototype.processFiles=function(files){var file,_i,_len;for(_i=0,_len=files.length;_len>_i;_i++)file=files[_i],file.processing=!0,file.status=Dropzone.UPLOADING,this.emit("processing",file);return this.options.uploadMultiple&&this.emit("processingmultiple",files),this.uploadFiles(files)},Dropzone.prototype._getFilesWithXhr=function(xhr){var file,files;return files=function(){var _i,_len,_ref,_results;for(_ref=this.files,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)file=_ref[_i],file.xhr===xhr&&_results.push(file);return _results}.call(this)},Dropzone.prototype.cancelUpload=function(file){var groupedFile,groupedFiles,_i,_j,_len,_len1,_ref;if(file.status===Dropzone.UPLOADING){for(groupedFiles=this._getFilesWithXhr(file.xhr),_i=0,_len=groupedFiles.length;_len>_i;_i++)groupedFile=groupedFiles[_i],groupedFile.status=Dropzone.CANCELED;for(file.xhr.abort(),_j=0,_len1=groupedFiles.length;_len1>_j;_j++)groupedFile=groupedFiles[_j],this.emit("canceled",groupedFile);this.options.uploadMultiple&&this.emit("canceledmultiple",groupedFiles)}else(_ref=file.status)!==Dropzone.ADDED&&_ref!==Dropzone.QUEUED||(file.status=Dropzone.CANCELED,this.emit("canceled",file),this.options.uploadMultiple&&this.emit("canceledmultiple",[file]));return this.options.autoProcessQueue?this.processQueue():void 0},resolveOption=function(){var args,option;return option=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[],"function"==typeof option?option.apply(this,args):option},Dropzone.prototype.uploadFile=function(file){return this.uploadFiles([file])},Dropzone.prototype.uploadFiles=function(files){var file,formData,handleError,headerName,headerValue,headers,i,input,inputName,inputType,key,method,option,progressObj,response,updateProgress,url,value,xhr,_i,_j,_k,_l,_len,_len1,_len2,_len3,_m,_ref,_ref1,_ref2,_ref3,_ref4,_ref5;for(xhr=new XMLHttpRequest,_i=0,_len=files.length;_len>_i;_i++)file=files[_i],file.xhr=xhr;method=resolveOption(this.options.method,files),url=resolveOption(this.options.url,files),xhr.open(method,url,!0),xhr.withCredentials=!!this.options.withCredentials,response=null,handleError=function(_this){return function(){var _j,_len1,_results;for(_results=[],_j=0,_len1=files.length;_len1>_j;_j++)file=files[_j],_results.push(_this._errorProcessing(files,response||_this.options.dictResponseError.replace("{{statusCode}}",xhr.status),xhr));return _results}}(this),updateProgress=function(_this){return function(e){var allFilesFinished,progress,_j,_k,_l,_len1,_len2,_len3,_results;if(null!=e)for(progress=100*e.loaded/e.total,_j=0,_len1=files.length;_len1>_j;_j++)file=files[_j],file.upload={progress:progress,total:e.total,bytesSent:e.loaded};else{for(allFilesFinished=!0,progress=100,_k=0,_len2=files.length;_len2>_k;_k++)file=files[_k],100===file.upload.progress&&file.upload.bytesSent===file.upload.total||(allFilesFinished=!1),file.upload.progress=progress,file.upload.bytesSent=file.upload.total;if(allFilesFinished)return}for(_results=[],_l=0,_len3=files.length;_len3>_l;_l++)file=files[_l],_results.push(_this.emit("uploadprogress",file,progress,file.upload.bytesSent));return _results}}(this),xhr.onload=function(_this){return function(e){var _ref;if(files[0].status!==Dropzone.CANCELED&&4===xhr.readyState){if(response=xhr.responseText,xhr.getResponseHeader("content-type")&&~xhr.getResponseHeader("content-type").indexOf("application/json"))try{response=JSON.parse(response)}catch(_error){e=_error,response="Invalid JSON response from server."}return updateProgress(),200<=(_ref=xhr.status)&&300>_ref?_this._finished(files,response,e):handleError()}}}(this),xhr.onerror=function(_this){return function(){return files[0].status!==Dropzone.CANCELED?handleError():void 0}}(this),progressObj=null!=(_ref=xhr.upload)?_ref:xhr,progressObj.onprogress=updateProgress,headers={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&extend(headers,this.options.headers);for(headerName in headers)headerValue=headers[headerName],headerValue&&xhr.setRequestHeader(headerName,headerValue);if(formData=new FormData,this.options.params){_ref1=this.options.params;for(key in _ref1)value=_ref1[key],formData.append(key,value)}for(_j=0,_len1=files.length;_len1>_j;_j++)file=files[_j],this.emit("sending",file,xhr,formData);if(this.options.uploadMultiple&&this.emit("sendingmultiple",files,xhr,formData),"FORM"===this.element.tagName)for(_ref2=this.element.querySelectorAll("input, textarea, select, button"),_k=0,_len2=_ref2.length;_len2>_k;_k++)if(input=_ref2[_k],inputName=input.getAttribute("name"),inputType=input.getAttribute("type"),"SELECT"===input.tagName&&input.hasAttribute("multiple"))for(_ref3=input.options,_l=0,_len3=_ref3.length;_len3>_l;_l++)option=_ref3[_l],option.selected&&formData.append(inputName,option.value);else(!inputType||"checkbox"!==(_ref4=inputType.toLowerCase())&&"radio"!==_ref4||input.checked)&&formData.append(inputName,input.value);for(i=_m=0,_ref5=files.length-1;_ref5>=0?_ref5>=_m:_m>=_ref5;i=_ref5>=0?++_m:--_m)formData.append(this._getParamName(i),files[i],this._renameFilename(files[i].name));return this.submitRequest(xhr,formData,files)},Dropzone.prototype.submitRequest=function(xhr,formData,files){return xhr.send(formData)},Dropzone.prototype._finished=function(files,responseText,e){var file,_i,_len;for(_i=0,_len=files.length;_len>_i;_i++)file=files[_i],file.status=Dropzone.SUCCESS,this.emit("success",file,responseText,e),this.emit("complete",file);return this.options.uploadMultiple&&(this.emit("successmultiple",files,responseText,e),this.emit("completemultiple",files)),this.options.autoProcessQueue?this.processQueue():void 0},Dropzone.prototype._errorProcessing=function(files,message,xhr){var file,_i,_len;for(_i=0,_len=files.length;_len>_i;_i++)file=files[_i],file.status=Dropzone.ERROR,this.emit("error",file,message,xhr),this.emit("complete",file);return this.options.uploadMultiple&&(this.emit("errormultiple",files,message,xhr),this.emit("completemultiple",files)),this.options.autoProcessQueue?this.processQueue():void 0},Dropzone}(Emitter),Dropzone.version="4.3.0",Dropzone.options={},Dropzone.optionsForElement=function(element){return element.getAttribute("id")?Dropzone.options[camelize(element.getAttribute("id"))]:void 0},Dropzone.instances=[],Dropzone.forElement=function(element){if("string"==typeof element&&(element=document.querySelector(element)),null==(null!=element?element.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return element.dropzone},Dropzone.autoDiscover=!0,Dropzone.discover=function(){var checkElements,dropzone,dropzones,_i,_len,_results;for(document.querySelectorAll?dropzones=document.querySelectorAll(".dropzone"):(dropzones=[],checkElements=function(elements){var el,_i,_len,_results;for(_results=[],_i=0,_len=elements.length;_len>_i;_i++)el=elements[_i],/(^| )dropzone($| )/.test(el.className)?_results.push(dropzones.push(el)):_results.push(void 0);return _results},checkElements(document.getElementsByTagName("div")),checkElements(document.getElementsByTagName("form"))),_results=[],_i=0,_len=dropzones.length;_len>_i;_i++)dropzone=dropzones[_i],Dropzone.optionsForElement(dropzone)!==!1?_results.push(new Dropzone(dropzone)):_results.push(void 0);return _results},Dropzone.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],Dropzone.isBrowserSupported=function(){var capableBrowser,regex,_i,_len,_ref;if(capableBrowser=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(_ref=Dropzone.blacklistedBrowsers,_i=0,_len=_ref.length;_len>_i;_i++)regex=_ref[_i],regex.test(navigator.userAgent)&&(capableBrowser=!1);else capableBrowser=!1;else capableBrowser=!1;return capableBrowser},without=function(list,rejectedItem){var item,_i,_len,_results;for(_results=[],_i=0,_len=list.length;_len>_i;_i++)item=list[_i],item!==rejectedItem&&_results.push(item);return _results},camelize=function(str){return str.replace(/[\-_](\w)/g,function(match){return match.charAt(1).toUpperCase()})},Dropzone.createElement=function(string){var div;return div=document.createElement("div"),div.innerHTML=string,div.childNodes[0]},Dropzone.elementInside=function(element,container){if(element===container)return!0;for(;element=element.parentNode;)if(element===container)return!0;return!1},Dropzone.getElement=function(el,name){var element;if("string"==typeof el?element=document.querySelector(el):null!=el.nodeType&&(element=el),null==element)throw new Error("Invalid `"+name+"` option provided. Please provide a CSS selector or a plain HTML element.");return element},Dropzone.getElements=function(els,name){var e,el,elements,_i,_j,_len,_len1,_ref;if(els instanceof Array){elements=[];try{for(_i=0,_len=els.length;_len>_i;_i++)el=els[_i],elements.push(this.getElement(el,name))}catch(_error){e=_error,elements=null}}else if("string"==typeof els)for(elements=[],_ref=document.querySelectorAll(els),_j=0,_len1=_ref.length;_len1>_j;_j++)el=_ref[_j],elements.push(el);else null!=els.nodeType&&(elements=[els]);if(null==elements||!elements.length)throw new Error("Invalid `"+name+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return elements},Dropzone.confirm=function(question,accepted,rejected){return window.confirm(question)?accepted():null!=rejected?rejected():void 0},Dropzone.isValidFile=function(file,acceptedFiles){var baseMimeType,mimeType,validType,_i,_len;if(!acceptedFiles)return!0;for(acceptedFiles=acceptedFiles.split(","),mimeType=file.type,baseMimeType=mimeType.replace(/\/.*$/,""),_i=0,_len=acceptedFiles.length;_len>_i;_i++)if(validType=acceptedFiles[_i],validType=validType.trim(),"."===validType.charAt(0)){if(-1!==file.name.toLowerCase().indexOf(validType.toLowerCase(),file.name.length-validType.length))return!0}else if(/\/\*$/.test(validType)){if(baseMimeType===validType.replace(/\/.*$/,""))return!0}else if(mimeType===validType)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(options){return this.each(function(){return new Dropzone(this,options)})}),"undefined"!=typeof module&&null!==module?module.exports=Dropzone:window.Dropzone=Dropzone,Dropzone.ADDED="added",Dropzone.QUEUED="queued",Dropzone.ACCEPTED=Dropzone.QUEUED,Dropzone.UPLOADING="uploading",Dropzone.PROCESSING=Dropzone.UPLOADING,Dropzone.CANCELED="canceled",Dropzone.ERROR="error",Dropzone.SUCCESS="success",detectVerticalSquash=function(img){var alpha,canvas,ctx,data,ey,ih,iw,py,ratio,sy;for(iw=img.naturalWidth,ih=img.naturalHeight,canvas=document.createElement("canvas"),canvas.width=1,canvas.height=ih,ctx=canvas.getContext("2d"),ctx.drawImage(img,0,0),data=ctx.getImageData(0,0,1,ih).data,sy=0,ey=ih,py=ih;py>sy;)alpha=data[4*(py-1)+3],0===alpha?ey=py:sy=py,py=ey+sy>>1;return ratio=py/ih,0===ratio?1:ratio},drawImageIOSFix=function(ctx,img,sx,sy,sw,sh,dx,dy,dw,dh){var vertSquashRatio;return vertSquashRatio=detectVerticalSquash(img),ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh/vertSquashRatio)},contentLoaded=function(win,fn){var add,doc,done,init,poll,pre,rem,root,top;if(done=!1,top=!0,doc=win.document,root=doc.documentElement,add=doc.addEventListener?"addEventListener":"attachEvent",rem=doc.addEventListener?"removeEventListener":"detachEvent",pre=doc.addEventListener?"":"on",init=function(e){return"readystatechange"!==e.type||"complete"===doc.readyState?(("load"===e.type?win:doc)[rem](pre+e.type,init,!1),!done&&(done=!0)?fn.call(win,e.type||e):void 0):void 0},poll=function(){var e;try{root.doScroll("left")}catch(_error){return e=_error,void setTimeout(poll,50)}return init("poll")},"complete"!==doc.readyState){if(doc.createEventObject&&root.doScroll){try{top=!win.frameElement}catch(_error){}top&&poll()}return doc[add](pre+"DOMContentLoaded",init,!1),doc[add](pre+"readystatechange",init,!1),win[add](pre+"load",init,!1)}},Dropzone._autoDiscoverFunction=function(){return Dropzone.autoDiscover?Dropzone.discover():void 0},contentLoaded(window,Dropzone._autoDiscoverFunction)}.call(this)*/
    ,
    function ($) {
        function inputmask(options) {
            this.el = void 0, this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, resolveAlias(this.opts.alias, options, this.opts)
        }

        function isInputEventSupported(eventName) {
            var el = document.createElement("input"),
                evName = "on" + eventName,
                isSupported = evName in el;
            return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), el = null, isSupported
        }

        function isInputTypeSupported(inputType) {
            var isSupported = "text" == inputType || "tel" == inputType || "password" == inputType;
            if (!isSupported) {
                var el = document.createElement("input");
                el.setAttribute("type", inputType), isSupported = "text" === el.type, el = null
            }
            return isSupported
        }

        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = opts.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (void 0 == opts.mask && (opts.mask = aliasStr), !1)
        }

        function importAttributeOptions(npt, opts, userOptions) {
            function importOption(option) {
                var optionData = $npt.data("inputmask-" + option.toLowerCase());
                void 0 != optionData && (optionData = "boolean" == typeof optionData ? optionData : optionData.toString(), "mask" == option && 0 == optionData.indexOf("[") ? (userOptions[option] = optionData.replace(/[\s[\]]/g, "").split("','"), userOptions[option][0] = userOptions[option][0].replace("'", ""), userOptions[option][userOptions[option].length - 1] = userOptions[option][userOptions[option].length - 1].replace("'", "")) : userOptions[option] = optionData)
            }
            var $npt = $(npt),
                attrOptions = $npt.data("inputmask");
            if (attrOptions && "" != attrOptions) try {
                attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
                var dataoptions = $.parseJSON("{" + attrOptions + "}");
                $.extend(!0, userOptions, dataoptions)
            } catch (ex) {}
            for (var option in opts) importOption(option);
            if (userOptions.alias) {
                resolveAlias(userOptions.alias, userOptions, opts);
                for (var option in opts) importOption(option)
            }
            return $.extend(!0, opts, userOptions), opts
        }

        function generateMaskSet(opts, nocache) {
            function analyseMask(mask) {
                function maskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [], this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function insertTestDefinition(mtoken, element, position) {
                    var maskdef = opts.definitions[element],
                        newBlockMarker = 0 == mtoken.matches.length;
                    if (position = void 0 != position ? position : mtoken.matches.length, maskdef && !escaped) {
                        maskdef.placeholder = $.isFunction(maskdef.placeholder) ? maskdef.placeholder.call(this, opts) : maskdef.placeholder;
                        for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
                            var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
                                validator = prevalidator.validator,
                                cardinality = prevalidator.cardinality;
                            mtoken.matches.splice(position++, 0, {
                                fn: validator ? "string" == typeof validator ? new RegExp(validator) : new function () {
                                    this.test = validator
                                } : new RegExp("."),
                                cardinality: cardinality ? cardinality : 1,
                                optionality: mtoken.isOptional,
                                newBlockMarker: newBlockMarker,
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                mask: element
                            })
                        }
                        mtoken.matches.splice(position++, 0, {
                            fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator) : new function () {
                                this.test = maskdef.validator
                            } : new RegExp("."),
                            cardinality: maskdef.cardinality,
                            optionality: mtoken.isOptional,
                            newBlockMarker: newBlockMarker,
                            casing: maskdef.casing,
                            def: maskdef.definitionSymbol || element,
                            placeholder: maskdef.placeholder,
                            mask: element
                        })
                    } else mtoken.matches.splice(position++, 0, {
                        fn: null,
                        cardinality: 0,
                        optionality: mtoken.isOptional,
                        newBlockMarker: newBlockMarker,
                        casing: null,
                        def: element,
                        placeholder: void 0,
                        mask: element
                    }), escaped = !1
                }

                function verifyGroupMarker(lastMatch, isOpenGroup) {
                    lastMatch.isGroup && (lastMatch.isGroup = !1, insertTestDefinition(lastMatch, opts.groupmarker.start, 0), isOpenGroup !== !0 && insertTestDefinition(lastMatch, opts.groupmarker.end))
                }

                function maskCurrentToken(m, currentToken, lastMatch, extraCondition) {
                    currentToken.matches.length > 0 && (void 0 == extraCondition || extraCondition) && (lastMatch = currentToken.matches[currentToken.matches.length - 1], verifyGroupMarker(lastMatch)), insertTestDefinition(currentToken, m)
                }

                function defaultCase() {
                    if (openenings.length > 0) {
                        if (currentOpeningToken = openenings[openenings.length - 1], maskCurrentToken(m, currentOpeningToken, lastMatch, !currentOpeningToken.isAlternator), currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator)
                        }
                    } else maskCurrentToken(m, currentToken, lastMatch)
                }

                function reverseTokens(maskToken) {
                    function reverseStatic(st) {
                        return st == opts.optionalmarker.start ? st = opts.optionalmarker.end : st == opts.optionalmarker.end ? st = opts.optionalmarker.start : st == opts.groupmarker.start ? st = opts.groupmarker.end : st == opts.groupmarker.end && (st = opts.groupmarker.start), st
                    }
                    maskToken.matches = maskToken.matches.reverse();
                    for (var match in maskToken.matches) {
                        var intMatch = parseInt(match);
                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                            var qt = maskToken.matches[match];
                            maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt)
                        }
                        void 0 != maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match])
                    }
                    return maskToken
                }
                for (var match, m, openingToken, currentOpeningToken, alternator, lastMatch, tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g, escaped = !1, currentToken = new maskToken, openenings = [], maskTokens = []; match = tokenizer.exec(mask);)
                    if (m = match[0], escaped) defaultCase();
                    else switch (m.charAt(0)) {
                    case opts.escapeChar:
                        escaped = !0;
                        break;
                    case opts.optionalmarker.end:
                    case opts.groupmarker.end:
                        if (openingToken = openenings.pop(), void 0 != openingToken)
                            if (openenings.length > 0) {
                                if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                                    openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator)
                                }
                            } else currentToken.matches.push(openingToken);
                        else defaultCase();
                        break;
                    case opts.optionalmarker.start:
                        openenings.push(new maskToken(!1, !0));
                        break;
                    case opts.groupmarker.start:
                        openenings.push(new maskToken(!0));
                        break;
                    case opts.quantifiermarker.start:
                        var quantifier = new maskToken(!1, !1, !0);
                        m = m.replace(/[{}]/g, "");
                        var mq = m.split(","),
                            mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                            mq1 = 1 == mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        if ("*" != mq1 && "+" != mq1 || (mq0 = "*" == mq1 ? 0 : 1), quantifier.quantifier = {
                                min: mq0,
                                max: mq1
                            }, openenings.length > 0) {
                            var matches = openenings[openenings.length - 1].matches;
                            if (match = matches.pop(), !match.isGroup) {
                                var groupToken = new maskToken(!0);
                                groupToken.matches.push(match), match = groupToken
                            }
                            matches.push(match), matches.push(quantifier)
                        } else {
                            if (match = currentToken.matches.pop(), !match.isGroup) {
                                var groupToken = new maskToken(!0);
                                groupToken.matches.push(match), match = groupToken
                            }
                            currentToken.matches.push(match), currentToken.matches.push(quantifier)
                        }
                        break;
                    case opts.alternatormarker:
                        openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], lastMatch = currentOpeningToken.matches.pop()) : lastMatch = currentToken.matches.pop(), lastMatch.isAlternator ? openenings.push(lastMatch) : (alternator = new maskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator));
                        break;
                    default:
                        defaultCase()
                    }
                    for (; openenings.length > 0;) openingToken = openenings.pop(), verifyGroupMarker(openingToken, !0), currentToken.matches.push(openingToken);
                return currentToken.matches.length > 0 && (lastMatch = currentToken.matches[currentToken.matches.length - 1], verifyGroupMarker(lastMatch), maskTokens.push(currentToken)), opts.numericInput && reverseTokens(maskTokens[0]), maskTokens
            }

            function generateMask(mask, metadata) {
                if (void 0 != mask && "" != mask) {
                    if (1 == mask.length && 0 == opts.greedy && 0 != opts.repeat && (opts.placeholder = ""), opts.repeat > 0 || "*" == opts.repeat || "+" == opts.repeat) {
                        var repeatStart = "*" == opts.repeat ? 0 : "+" == opts.repeat ? 1 : opts.repeat;
                        mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end
                    }
                    var masksetDefinition;
                    return void 0 == inputmask.prototype.masksCache[mask] || nocache === !0 ? (masksetDefinition = {
                            mask: mask,
                            maskToken: analyseMask(mask),
                            validPositions: {},
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            metadata: metadata
                        }, nocache !== !0 && (inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask] = masksetDefinition)) : masksetDefinition = $.extend(!0, {}, inputmask.prototype.masksCache[mask]),
                        masksetDefinition
                }
            }

            function preProcessMask(mask) {
                return mask = mask.toString()
            }
            var ms = void 0;
            if ($.isFunction(opts.mask) && (opts.mask = opts.mask.call(this, opts)), $.isArray(opts.mask)) {
                if (opts.mask.length > 1) {
                    opts.keepStatic = void 0 == opts.keepStatic ? !0 : opts.keepStatic;
                    var altMask = "(";
                    return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                        altMask.length > 1 && (altMask += ")|("), altMask += preProcessMask(void 0 == msk.mask || $.isFunction(msk.mask) ? msk : msk.mask)
                    }), altMask += ")", generateMask(altMask, opts.mask)
                }
                opts.mask = opts.mask.pop()
            }
            return opts.mask && (ms = void 0 == opts.mask.mask || $.isFunction(opts.mask.mask) ? generateMask(preProcessMask(opts.mask), opts.mask) : generateMask(preProcessMask(opts.mask.mask), opts.mask)), ms
        }

        function maskScope(actionObj, maskset, opts) {
            function getMaskTemplate(baseOnInput, minimalPos, includeInput) {
                minimalPos = minimalPos || 0;
                var ndxIntlzr, test, testPos, maskTemplate = [],
                    pos = 0;
                do {
                    if (baseOnInput === !0 && getMaskSet().validPositions[pos]) {
                        var validPos = getMaskSet().validPositions[pos];
                        test = validPos.match, ndxIntlzr = validPos.locator.slice(), maskTemplate.push(includeInput === !0 ? validPos.input : getPlaceholder(pos, test))
                    } else testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(getPlaceholder(pos, test));
                    pos++
                } while ((void 0 == maxLength || maxLength > pos - 1) && null != test.fn || null == test.fn && "" != test.def || minimalPos >= pos);
                return maskTemplate.pop(), maskTemplate
            }

            function getMaskSet() {
                return maskset
            }

            function resetMaskSet(soft) {
                var maskset = getMaskSet();
                maskset.buffer = void 0, maskset.tests = {}, soft !== !0 && (maskset._buffer = void 0, maskset.validPositions = {}, maskset.p = 0)
            }

            function getLastValidPosition(closestTo, strict) {
                var maskset = getMaskSet(),
                    lastValidPosition = -1,
                    valids = maskset.validPositions;
                void 0 == closestTo && (closestTo = -1);
                var before = lastValidPosition,
                    after = lastValidPosition;
                for (var posNdx in valids) {
                    var psNdx = parseInt(posNdx);
                    valids[psNdx] && (strict || null != valids[psNdx].match.fn) && (closestTo >= psNdx && (before = psNdx), psNdx >= closestTo && (after = psNdx))
                }
                return lastValidPosition = -1 != before && closestTo - before > 1 || closestTo > after ? before : after
            }

            function setValidPosition(pos, validTest, fromSetValid) {
                if (opts.insertMode && void 0 != getMaskSet().validPositions[pos] && void 0 == fromSetValid) {
                    var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions),
                        lvp = getLastValidPosition();
                    for (i = pos; lvp >= i; i++) delete getMaskSet().validPositions[i];
                    getMaskSet().validPositions[pos] = validTest;
                    var j, valid = !0,
                        vps = getMaskSet().validPositions;
                    for (i = j = pos; lvp >= i; i++) {
                        var t = positionsClone[i];
                        if (void 0 != t)
                            for (var posMatch = j, prevPosMatch = -1; posMatch < getMaskLength() && (null == t.match.fn && vps[i] && (vps[i].match.optionalQuantifier === !0 || vps[i].match.optionality === !0) || null != t.match.fn);) {
                                if (null == t.match.fn || !opts.keepStatic && vps[i] && (void 0 != vps[i + 1] && getTests(i + 1, vps[i].locator.slice(), i).length > 1 || void 0 != vps[i].alternation) ? posMatch++ : posMatch = seekNext(j), positionCanMatchDefinition(posMatch, t.match.def)) {
                                    valid = isValid(posMatch, t.input, !0, !0) !== !1, j = posMatch;
                                    break
                                }
                                if (valid = null == t.match.fn, prevPosMatch == posMatch) break;
                                prevPosMatch = posMatch
                            }
                        if (!valid) break
                    }
                    if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), !1
                } else getMaskSet().validPositions[pos] = validTest;
                return !0
            }

            function stripValidPositions(start, end, nocheck, strict) {
                var i, startPos = start;
                getMaskSet().p = start;
                for (i = startPos; end > i; i++) void 0 != getMaskSet().validPositions[i] && (nocheck !== !0 && 0 == opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts) || delete getMaskSet().validPositions[i]);
                for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition();) {
                    for (; void 0 != getMaskSet().validPositions[startPos];) startPos++;
                    var s = getMaskSet().validPositions[startPos];
                    startPos > i && (i = startPos + 1);
                    var t = getMaskSet().validPositions[i];
                    void 0 != t && isMask(i) && void 0 == s ? (positionCanMatchDefinition(startPos, t.match.def) && isValid(startPos, t.input, !0) !== !1 && (delete getMaskSet().validPositions[i], i++), startPos++) : i++
                }
                var lvp = getLastValidPosition(),
                    ml = getMaskLength();
                for (nocheck !== !0 && void 0 != getMaskSet().validPositions[lvp] && getMaskSet().validPositions[lvp].input == opts.radixPoint && delete getMaskSet().validPositions[lvp], i = lvp + 1; ml >= i; i++) getMaskSet().validPositions[i] && delete getMaskSet().validPositions[i];
                resetMaskSet(!0)
            }

            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                var testPos = getMaskSet().validPositions[pos];
                if (void 0 == testPos)
                    for (var testPositions = getTests(pos, ndxIntlzr, tstPs), lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = void 0 != lvTest.alternation ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (testPos = testPositions[ndx], !(testPos.match && (opts.greedy && testPos.match.optionalQuantifier !== !0 || (testPos.match.optionality === !1 || testPos.match.newBlockMarker === !1) && testPos.match.optionalQuantifier !== !0) && (void 0 == lvTest.alternation || lvTest.alternation != testPos.alternation || void 0 != testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr)))); ndx++);
                return testPos
            }

            function getTest(pos) {
                return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos].match : getTests(pos)[0].match
            }

            function positionCanMatchDefinition(pos, def) {
                for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++)
                    if (tests[tndx].match && tests[tndx].match.def == def) {
                        valid = !0;
                        break
                    }
                return valid
            }

            function getTests(pos, ndxIntlzr, tstPs, cacheable) {
                function ResolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        if (testPos > 1e4) return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask), !0;
                        if (testPos == pos && void 0 == match.matches) return matches.push({
                            match: match,
                            locator: loopNdx.reverse()
                        }), !0;
                        if (void 0 != match.matches) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                if (match = handleMatch(maskToken.matches[tndx + 1], loopNdx)) return !0
                            } else if (match.isOptional) {
                                var optionalToken = match;
                                if (match = ResolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                    var latestMatch = matches[matches.length - 1].match,
                                        isFirstMatch = 0 == $.inArray(latestMatch, optionalToken.matches);
                                    if (!isFirstMatch) return !0;
                                    insertStop = !0, testPos = pos
                                }
                            } else if (match.isAlternator) {
                                var maltMatches, alternateToken = match,
                                    malternateMatches = [],
                                    currentMatches = matches.slice(),
                                    loopNdxCnt = loopNdx.length,
                                    altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                                if (-1 == altIndex || "string" == typeof altIndex) {
                                    var currentPos = testPos,
                                        ndxInitializerClone = ndxInitializer.slice(),
                                        altIndexArr = [];
                                    "string" == typeof altIndex && (altIndexArr = altIndex.split(","));
                                    for (var amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                                        if (matches = [], match = handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match, match !== !0 && void 0 != match && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {
                                            var ntndx = maskToken.matches.indexOf(match) + 1;
                                            maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse), match && (altIndexArr.push(ntndx.toString()), $.each(matches, function (ndx, lmnt) {
                                                lmnt.alternation = loopNdx.length - 1
                                            })))
                                        }
                                        maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                        for (var i = 0; i < ndxInitializerClone.length; i++) ndxInitializer[i] = ndxInitializerClone[i];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1];
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if (altMatch.match.mask == altMatch2.match.mask && ("string" != typeof altIndex || -1 != $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr))) {
                                                    maltMatches.splice(ndx1, 1), ndx1--, altMatch2.locator[altMatch.alternation] = altMatch2.locator[altMatch.alternation] + "," + altMatch.locator[altMatch.alternation], altMatch2.alternation = altMatch.alternation;
                                                    break
                                                }
                                            }
                                        }
                                        malternateMatches = malternateMatches.concat(maltMatches)
                                    }
                                    "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function (lmnt, ndx) {
                                        if (isFinite(ndx)) {
                                            var mamatch, alternation = lmnt.alternation,
                                                altLocArr = lmnt.locator[alternation].toString().split(",");
                                            lmnt.locator[alternation] = void 0, lmnt.alternation = void 0;
                                            for (var alndx = 0; alndx < altLocArr.length; alndx++) mamatch = -1 != $.inArray(altLocArr[alndx], altIndexArr), mamatch && (void 0 != lmnt.locator[alternation] ? (lmnt.locator[alternation] += ",", lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), lmnt.alternation = alternation);
                                            if (void 0 != lmnt.locator[alternation]) return lmnt
                                        }
                                    })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0
                                } else match = alternateToken.matches[altIndex] ? handleMatch(alternateToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse) : !1;
                                if (match) return !0
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1])
                                for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && pos >= testPos; qndx++) {
                                    var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                    if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)) {
                                        var latestMatch = matches[matches.length - 1].match;
                                        latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1;
                                        var isFirstMatch = 0 == $.inArray(latestMatch, tokenGroup.matches);
                                        if (isFirstMatch) {
                                            if (qndx > qt.quantifier.min - 1) {
                                                insertStop = !0, testPos = pos;
                                                break
                                            }
                                            return !0
                                        }
                                        return !0
                                    }
                                } else if (match = ResolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0
                        } else testPos++
                    }
                    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++)
                        if (maskToken.matches[tndx].isQuantifier !== !0) {
                            var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                            if (match && testPos == pos) return match;
                            if (testPos > pos) break
                        }
                }
                var maskTokens = getMaskSet().maskToken,
                    testPos = ndxIntlzr ? tstPs : 0,
                    ndxInitializer = ndxIntlzr || [0],
                    matches = [],
                    insertStop = !1;
                if (cacheable === !0 && getMaskSet().tests[pos]) return getMaskSet().tests[pos];
                if (void 0 == ndxIntlzr) {
                    for (var test, previousPos = pos - 1; void 0 == (test = getMaskSet().validPositions[previousPos]) && previousPos > -1 && (!getMaskSet().tests[previousPos] || void 0 == (test = getMaskSet().tests[previousPos][0]));) previousPos--;
                    void 0 != test && previousPos > -1 && (testPos = previousPos, ndxInitializer = test.locator.slice())
                }
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = ResolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                    if (match && testPos == pos || testPos > pos) break
                }
                return (0 == matches.length || insertStop) && matches.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: ""
                    },
                    locator: []
                }), getMaskSet().tests[pos] = $.extend(!0, [], matches), getMaskSet().tests[pos]
            }

            function getBufferTemplate() {
                return void 0 == getMaskSet()._buffer && (getMaskSet()._buffer = getMaskTemplate(!1, 1)), getMaskSet()._buffer
            }

            function getBuffer() {
                return void 0 == getMaskSet().buffer && (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), getMaskSet().buffer
            }

            function refreshFromBuffer(start, end, buffer) {
                if (buffer = buffer || getBuffer().slice(), start === !0) resetMaskSet(), start = 0, end = buffer.length;
                else
                    for (var i = start; end > i; i++) delete getMaskSet().validPositions[i], delete getMaskSet().tests[i];
                for (var i = start; end > i; i++) buffer[i] != opts.skipOptionalPartCharacter && isValid(i, buffer[i], !0, !0)
            }

            function casing(elem, test) {
                switch (test.casing) {
                case "upper":
                    elem = elem.toUpperCase();
                    break;
                case "lower":
                    elem = elem.toLowerCase()
                }
                return elem
            }

            function checkAlternationMatch(altArr1, altArr2) {
                for (var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, alndx = 0; alndx < altArr1.length; alndx++)
                    if (-1 != $.inArray(altArr1[alndx], altArrC)) {
                        isMatch = !0;
                        break
                    }
                return isMatch
            }

            function isValid(pos, c, strict, fromSetValid) {
                function _isValid(position, c, strict, fromSetValid) {
                    var rslt = !1;
                    return $.each(getTests(position), function (ndx, tst) {
                        for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = (getBuffer(), test.cardinality); i > loopend; i--) chrs += getBufferElement(position - (i - 1));
                        if (c && (chrs += c), rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts) : c != test.def && c != opts.skipOptionalPartCharacter || "" == test.def ? !1 : {
                                c: test.def,
                                pos: position
                            }, rslt !== !1) {
                            var elem = void 0 != rslt.c ? rslt.c : c;
                            elem = elem == opts.skipOptionalPartCharacter && null === test.fn ? test.def : elem;
                            var validatedPos = position,
                                possibleModifiedBuffer = getBuffer();
                            if (void 0 != rslt.remove && ($.isArray(rslt.remove) || (rslt.remove = [rslt.remove]), $.each(rslt.remove.sort(function (a, b) {
                                    return b - a
                                }), function (ndx, lmnt) {
                                    stripValidPositions(lmnt, lmnt + 1, !0)
                                })), void 0 != rslt.insert && ($.isArray(rslt.insert) || (rslt.insert = [rslt.insert]), $.each(rslt.insert.sort(function (a, b) {
                                    return a - b
                                }), function (ndx, lmnt) {
                                    isValid(lmnt.pos, lmnt.c, !0)
                                })), rslt.refreshFromBuffer) {
                                var refresh = rslt.refreshFromBuffer;
                                if (strict = !0, refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), void 0 == rslt.pos && void 0 == rslt.c) return rslt.pos = getLastValidPosition(), !1;
                                if (validatedPos = void 0 != rslt.pos ? rslt.pos : position, validatedPos != position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), !1
                            } else if (rslt !== !0 && void 0 != rslt.pos && rslt.pos != position && (validatedPos = rslt.pos, refreshFromBuffer(position, validatedPos), validatedPos != position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), !1;
                            return 1 != rslt && void 0 == rslt.pos && void 0 == rslt.c ? !1 : (ndx > 0 && resetMaskSet(!0), setValidPosition(validatedPos, $.extend({}, tst, {
                                input: casing(elem, test)
                            }), fromSetValid) || (rslt = !1), !1)
                        }
                    }), rslt
                }

                function alternate(pos, c, strict, fromSetValid) {
                    for (var lastAlt, alternation, isValidRslt, altPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), lAlt = getLastValidPosition(); lAlt >= 0 && (altPos = getMaskSet().validPositions[lAlt], !altPos || void 0 == altPos.alternation || (lastAlt = lAlt, alternation = getMaskSet().validPositions[lastAlt].alternation, getTestTemplate(lastAlt).locator[altPos.alternation] == altPos.locator[altPos.alternation])); lAlt--);
                    if (void 0 != alternation) {
                        lastAlt = parseInt(lastAlt);
                        for (var decisionPos in getMaskSet().validPositions)
                            if (decisionPos = parseInt(decisionPos), altPos = getMaskSet().validPositions[decisionPos], decisionPos >= lastAlt && void 0 != altPos.alternation) {
                                var altNdxs = getMaskSet().validPositions[lastAlt].locator[alternation].toString().split(","),
                                    decisionTaker = altPos.locator[alternation] || altNdxs[0];
                                decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);
                                for (var mndx = 0; mndx < altNdxs.length; mndx++)
                                    if (decisionTaker < altNdxs[mndx]) {
                                        for (var possibilityPos, possibilities, dp = decisionPos; dp >= 0; dp--)
                                            if (possibilityPos = getMaskSet().validPositions[dp], void 0 != possibilityPos) {
                                                possibilities = possibilityPos.locator[alternation], possibilityPos.locator[alternation] = parseInt(altNdxs[mndx]);
                                                break
                                            }
                                        if (decisionTaker != possibilityPos.locator[alternation]) {
                                            for (var validInputs = [], staticInputsBeforePos = 0, i = decisionPos + 1; i < getLastValidPosition() + 1; i++) {
                                                var validPos = getMaskSet().validPositions[i];
                                                validPos && (null != validPos.match.fn ? validInputs.push(validPos.input) : pos > i && staticInputsBeforePos++), delete getMaskSet().validPositions[i], delete getMaskSet().tests[i]
                                            }
                                            for (resetMaskSet(!0), opts.keepStatic = !opts.keepStatic, isValidRslt = !0; validInputs.length > 0;) {
                                                var input = validInputs.shift();
                                                if (input != opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition() + 1, input, !1, !0))) break
                                            }
                                            if (possibilityPos.alternation = alternation, possibilityPos.locator[alternation] = possibilities, isValidRslt) {
                                                for (var targetLvp = getLastValidPosition(pos) + 1, staticInputsBeforePosAlternate = 0, i = decisionPos + 1; i < getLastValidPosition() + 1; i++) {
                                                    var validPos = getMaskSet().validPositions[i];
                                                    validPos && null == validPos.match.fn && pos > i && staticInputsBeforePosAlternate++
                                                }
                                                pos += staticInputsBeforePosAlternate - staticInputsBeforePos, isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid)
                                            }
                                            if (opts.keepStatic = !opts.keepStatic, isValidRslt) return isValidRslt;
                                            resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone)
                                        }
                                    }
                                break
                            }
                    }
                    return !1
                }

                function trackbackAlternations(originalPos, newPos) {
                    for (var vp = getMaskSet().validPositions[newPos], targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; newPos > ps; ps++)
                        if (!isMask(ps)) {
                            var tests = getTests(ps),
                                bestMatch = tests[0],
                                equality = -1;
                            $.each(tests, function (ndx, tst) {
                                for (var i = 0; tll > i; i++) tst.locator[i] && checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(",")) && i > equality && (equality = i, bestMatch = tst)
                            }), setValidPosition(ps, $.extend({}, bestMatch, {
                                input: bestMatch.match.def
                            }), !0)
                        }
                }
                strict = strict === !0;
                for (var buffer = getBuffer(), pndx = pos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--);
                for (pndx++; pos > pndx; pndx++) void 0 == getMaskSet().validPositions[pndx] && ((!isMask(pndx) || buffer[pndx] != getPlaceholder(pndx)) && getTests(pndx).length > 1 || buffer[pndx] == opts.radixPoint || "0" == buffer[pndx] && $.inArray(opts.radixPoint, buffer) < pndx) && _isValid(pndx, buffer[pndx], !0);
                var maskPos = pos,
                    result = !1,
                    positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
                if (maskPos < getMaskLength() && (result = _isValid(maskPos, c, strict, fromSetValid), (!strict || fromSetValid) && result === !1)) {
                    var currentPosValid = getMaskSet().validPositions[maskPos];
                    if (!currentPosValid || null != currentPosValid.match.fn || currentPosValid.match.def != c && c != opts.skipOptionalPartCharacter) {
                        if ((opts.insertMode || void 0 == getMaskSet().validPositions[seekNext(maskPos)]) && !isMask(maskPos))
                            for (var nPos = maskPos + 1, snPos = seekNext(maskPos); snPos >= nPos; nPos++)
                                if (result = _isValid(nPos, c, strict, fromSetValid), result !== !1) {
                                    trackbackAlternations(maskPos, nPos), maskPos = nPos;
                                    break
                                }
                    } else result = {
                        caret: seekNext(maskPos)
                    }
                }
                if (result === !1 && opts.keepStatic && isComplete(buffer) && (result = alternate(pos, c, strict, fromSetValid)), result === !0 && (result = {
                        pos: maskPos
                    }), $.isFunction(opts.postValidation) && 0 != result && !strict) {
                    resetMaskSet(!0);
                    var postValidResult = opts.postValidation(getBuffer(), opts);
                    if (postValidResult) {
                        if (postValidResult.refreshFromBuffer) {
                            var refresh = postValidResult.refreshFromBuffer;
                            refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, postValidResult.buffer), resetMaskSet(!0), result = postValidResult
                        }
                    } else resetMaskSet(!0), getMaskSet().validPositions = $.extend(!0, {}, positionsClone), result = !1
                }
                return result
            }

            function isMask(pos) {
                var test = getTest(pos);
                if (null != test.fn) return test.fn;
                if (!opts.keepStatic && void 0 == getMaskSet().validPositions[pos]) {
                    for (var tests = getTests(pos), staticAlternations = !0, i = 0; i < tests.length; i++)
                        if ("" != tests[i].match.def && (void 0 == tests[i].alternation || tests[i].locator[tests[i].alternation].length > 1)) {
                            staticAlternations = !1;
                            break
                        }
                    return staticAlternations
                }
                return !1
            }

            function getMaskLength() {
                var maskLength;
                maxLength = $el.prop("maxLength"), -1 == maxLength && (maxLength = void 0);
                var pos, lvp = getLastValidPosition(),
                    testPos = getMaskSet().validPositions[lvp],
                    ndxIntlzr = void 0 != testPos ? testPos.locator.slice() : void 0;
                for (pos = lvp + 1; void 0 == testPos || null != testPos.match.fn || null == testPos.match.fn && "" != testPos.match.def; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice();
                var lastTest = getTest(pos - 1);
                return maskLength = "" != lastTest.def ? pos : pos - 1, void 0 == maxLength || maxLength > maskLength ? maskLength : maxLength
            }

            function seekNext(pos) {
                var maskL = getMaskLength();
                if (pos >= maskL) return maskL;
                for (var position = pos; ++position < maskL && !isMask(position) && (opts.nojumps !== !0 || opts.nojumpsThreshold > position););
                return position
            }

            function seekPrevious(pos) {
                var position = pos;
                if (0 >= position) return 0;
                for (; --position > 0 && !isMask(position););
                return position
            }

            function getBufferElement(position) {
                return void 0 == getMaskSet().validPositions[position] ? getPlaceholder(position) : getMaskSet().validPositions[position].input
            }

            function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(input, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, result.buffer || buffer), resetMaskSet(!0), buffer = getBuffer()
                        }
                        caretPos = void 0 != result.caret ? result.caret : caretPos
                    }
                }
                input._valueSet(buffer.join("")), void 0 != caretPos && caret(input, caretPos), triggerInputEvent === !0 && (skipInputEvent = !0, $(input).trigger("input"))
            }

            function getPlaceholder(pos, test) {
                if (test = test || getTest(pos), void 0 != test.placeholder) return test.placeholder;
                if (null == test.fn) {
                    if (!opts.keepStatic && void 0 == getMaskSet().validPositions[pos]) {
                        for (var prevTest, tests = getTests(pos), hasAlternations = !1, i = 0; i < tests.length; i++) {
                            if (prevTest && "" != tests[i].match.def && tests[i].match.def != prevTest.match.def && (void 0 == tests[i].alternation || tests[i].alternation == prevTest.alternation)) {
                                hasAlternations = !0;
                                break
                            }
                            1 != tests[i].match.optionality && 1 != tests[i].match.optionalQuantifier && (prevTest = tests[i])
                        }
                        if (hasAlternations) return opts.placeholder.charAt(pos % opts.placeholder.length)
                    }
                    return test.def
                }
                return opts.placeholder.charAt(pos % opts.placeholder.length)
            }

            function checkVal(input, writeOut, strict, nptvl) {
                function isTemplateMatch() {
                    var isMatch = !1,
                        charCodeNdx = getBufferTemplate().slice(initialNdx, seekNext(initialNdx)).join("").indexOf(charCodes);
                    if (-1 != charCodeNdx && !isMask(initialNdx)) {
                        isMatch = !0;
                        for (var bufferTemplateArr = getBufferTemplate().slice(initialNdx, initialNdx + charCodeNdx), i = 0; i < bufferTemplateArr.length; i++)
                            if (" " != bufferTemplateArr[i]) {
                                isMatch = !1;
                                break
                            }
                    }
                    return isMatch
                }
                var inputValue = void 0 != nptvl ? nptvl.slice() : input._valueGet().split(""),
                    charCodes = "",
                    initialNdx = 0;
                if (resetMaskSet(), getMaskSet().p = seekNext(-1), writeOut && input._valueSet(""), !strict)
                    if (1 != opts.autoUnmask) {
                        var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
                            matches = inputValue.join("").match(new RegExp("^" + inputmask.escapeRegex(staticInput), "g"));
                        matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), initialNdx = seekNext(initialNdx))
                    } else initialNdx = seekNext(initialNdx);
                $.each(inputValue, function (ndx, charCode) {
                    var keypress = $.Event("keypress");
                    keypress.which = charCode.charCodeAt(0), charCodes += charCode;
                    var lvp = getLastValidPosition(void 0, !0),
                        lvTest = getMaskSet().validPositions[lvp],
                        nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : void 0, lvp);
                    if (!isTemplateMatch() || strict || opts.autoUnmask) {
                        var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
                        keypressEvent.call(input, keypress, !0, !1, strict, pos), initialNdx = pos + 1, charCodes = ""
                    } else keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1)
                }), writeOut && writeBuffer(input, getBuffer(), $(input).is(":focus") ? seekNext(getLastValidPosition(0)) : void 0, $.Event("checkval"))
            }

            function unmaskedvalue($input) {
                if ($input[0].inputmask && !$input.hasClass("hasDatepicker")) {
                    var umValue = [],
                        vps = getMaskSet().validPositions;
                    for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
                    var unmaskedValue = (isRTL ? umValue.reverse() : umValue).join(""),
                        bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    return $.isFunction(opts.onUnMask) && (unmaskedValue = opts.onUnMask.call($input, bufferValue, unmaskedValue, opts) || unmaskedValue), unmaskedValue
                }
                return $input[0]._valueGet()
            }

            function caret(input, begin, end) {
                function TranslatePosition(pos) {
                    if (isRTL && "number" == typeof pos && (!opts.greedy || "" != opts.placeholder)) {
                        var bffrLght = getBuffer().join("").length;
                        pos = bffrLght - pos
                    }
                    return pos
                }
                var range, npt = input.jquery && input.length > 0 ? input[0] : input;
                if ("number" != typeof begin) return npt.setSelectionRange ? (begin = npt.selectionStart, end = npt.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), range.commonAncestorContainer.parentNode != npt && range.commonAncestorContainer != npt || (begin = range.startOffset, end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), {
                    begin: TranslatePosition(begin),
                    end: TranslatePosition(end)
                };
                if (begin = TranslatePosition(begin), end = TranslatePosition(end), end = "number" == typeof end ? end : begin, $(npt).is(":visible")) {
                    var scrollCalc = $(npt).css("font-size").replace("px", "") * end;
                    if (npt.scrollLeft = scrollCalc > npt.scrollWidth ? scrollCalc : 0, androidchrome || 0 != opts.insertMode || begin != end || end++, npt.setSelectionRange) npt.selectionStart = begin, npt.selectionEnd = end;
                    else if (window.getSelection) {
                        if (range = document.createRange(), void 0 == npt.firstChild) {
                            var textNode = document.createTextNode("");
                            npt.appendChild(textNode)
                        }
                        range.setStart(npt.firstChild, begin < npt._valueGet().length ? begin : npt._valueGet().length), range.setEnd(npt.firstChild, end < npt._valueGet().length ? end : npt._valueGet().length), range.collapse(!0);
                        var sel = window.getSelection();
                        sel.removeAllRanges(), sel.addRange(range)
                    } else npt.createTextRange && (range = npt.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select())
                }
            }

            function determineLastRequiredPosition(returnDefinition) {
                var pos, testPos, buffer = getBuffer(),
                    bl = buffer.length,
                    lvp = getLastValidPosition(),
                    positions = {},
                    lvTest = getMaskSet().validPositions[lvp],
                    ndxIntlzr = void 0 != lvTest ? lvTest.locator.slice() : void 0;
                for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
                var lvTestAlt = lvTest && void 0 != lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
                for (pos = bl - 1; pos > lvp && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier || lvTestAlt && (lvTestAlt != positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null == testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" != getTests(pos)[0].def)) && buffer[pos] == getPlaceholder(pos, testPos.match)); pos--) bl--;
                return returnDefinition ? {
                    l: bl,
                    def: positions[bl] ? positions[bl].match : void 0
                } : bl
            }

            function clearOptionalTail(buffer) {
                for (var rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--);
                return buffer.splice(rl, lmib + 1 - rl), buffer
            }

            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete)) return opts.isComplete.call($el, buffer, opts);
                if ("*" != opts.repeat) {
                    var complete = !1,
                        lrp = determineLastRequiredPosition(!0),
                        aml = seekPrevious(lrp.l);
                    getLastValidPosition();
                    if (void 0 == lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                        complete = !0;
                        for (var i = 0; aml >= i; i++) {
                            var test = getTestTemplate(i).match;
                            if (null != test.fn && void 0 == getMaskSet().validPositions[i] && test.optionality !== !0 && test.optionalQuantifier !== !0 || null == test.fn && buffer[i] != getPlaceholder(i, test)) {
                                complete = !1;
                                break
                            }
                        }
                    }
                    return complete
                }
            }

            function isSelection(begin, end) {
                return isRTL ? begin - end > 1 || begin - end == 1 && opts.insertMode : end - begin > 1 || end - begin == 1 && opts.insertMode
            }

            function installEventRuler(npt) {
                var events = $._data(npt).events,
                    inComposition = !1;
                $.each(events, function (eventType, eventHandlers) {
                    $.each(eventHandlers, function (ndx, eventHandler) {
                        if ("inputmask" == eventHandler.namespace && "setvalue" != eventHandler.type) {
                            var handler = eventHandler.handler;
                            eventHandler.handler = function (e) {
                                if (!(this.disabled || this.readOnly && !("keydown" == e.type && e.ctrlKey && 67 == e.keyCode || e.keyCode == inputmask.keyCode.TAB))) {
                                    switch (e.type) {
                                    case "input":
                                        if (skipInputEvent === !0 || inComposition === !0) return skipInputEvent = !1, e.preventDefault();
                                        break;
                                    case "keydown":
                                        skipKeyPressEvent = !1, inComposition = !1;
                                        break;
                                    case "keypress":
                                        if (skipKeyPressEvent === !0) return e.preventDefault();
                                        skipKeyPressEvent = !0;
                                        break;
                                    case "compositionstart":
                                        inComposition = !0;
                                        break;
                                    case "compositionupdate":
                                        skipInputEvent = !0;
                                        break;
                                    case "compositionend":
                                        inComposition = !1
                                    }
                                    return handler.apply(this, arguments)
                                }
                                e.preventDefault()
                            }
                        }
                    })
                })
            }

            function patchValueProperty(npt) {
                function PatchValhook(type) {
                    if (void 0 == $.valHooks[type] || 1 != $.valHooks[type].inputmaskpatch) {
                        var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                                return elem.value
                            },
                            valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                                return elem.value = value, elem
                            };
                        $.valHooks[type] = {
                            get: function (elem) {
                                $(elem);
                                if (elem.inputmask) {
                                    if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                    var result = valhookGet(elem),
                                        maskset = elem.inputmask.maskset,
                                        bufferTemplate = maskset._buffer;
                                    return bufferTemplate = bufferTemplate ? bufferTemplate.join("") : "", result != bufferTemplate ? result : ""
                                }
                                return valhookGet(elem)
                            },
                            set: function (elem, value) {
                                var result, $elem = $(elem);
                                return result = valhookSet(elem, value), elem.inputmask && $elem.triggerHandler("setvalue.inputmask"), result
                            },
                            inputmaskpatch: !0
                        }
                    }
                }

                function getter() {
                    $(this);
                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : valueGet.call(this) != getBufferTemplate().join("") ? valueGet.call(this) : "" : valueGet.call(this)
                }

                function setter(value) {
                    valueSet.call(this, value), this.inputmask && $(this).triggerHandler("setvalue.inputmask")
                }

                function InstallNativeValueSetFallback(npt) {
                    $(npt).bind("mouseenter.inputmask", function (event) {
                        var $input = $(this),
                            input = this,
                            value = input._valueGet();
                        "" != value && value != getBuffer().join("") && $input.triggerHandler("setvalue.inputmask")
                    });
                    var events = $._data(npt).events,
                        handlers = events.mouseover;
                    if (handlers) {
                        for (var ourHandler = handlers[handlers.length - 1], i = handlers.length - 1; i > 0; i--) handlers[i] = handlers[i - 1];
                        handlers[0] = ourHandler
                    }
                }
                var valueGet, valueSet;
                if (!npt._valueGet) {
                    var valueProperty;
                    Object.getOwnPropertyDescriptor && void 0 == npt.value ? (valueGet = function () {
                        return this.textContent
                    }, valueSet = function (value) {
                        this.textContent = value
                    }, Object.defineProperty(npt, "value", {
                        get: getter,
                        set: setter
                    })) : ((valueProperty = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(npt, "value")) && valueProperty.configurable, document.__lookupGetter__ && npt.__lookupGetter__("value") ? (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter)) : (valueGet = function () {
                        return npt.value
                    }, valueSet = function (value) {
                        npt.value = value
                    }, PatchValhook(npt.type), InstallNativeValueSetFallback(npt))), npt._valueGet = function (overruleRTL) {
                        return isRTL && overruleRTL !== !0 ? valueGet.call(this).split("").reverse().join("") : valueGet.call(this)
                    }, npt._valueSet = function (value) {
                        valueSet.call(this, isRTL ? value.split("").reverse().join("") : value)
                    }
                }
            }

            function handleRemove(input, k, pos, strict) {
                function generalize() {
                    if (opts.keepStatic) {
                        resetMaskSet(!0);
                        var lastAlt, validInputs = [],
                            positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
                        for (lastAlt = getLastValidPosition(); lastAlt >= 0; lastAlt--) {
                            var validPos = getMaskSet().validPositions[lastAlt];
                            if (validPos && (null != validPos.match.fn && validInputs.push(validPos.input), delete getMaskSet().validPositions[lastAlt], void 0 != validPos.alternation && validPos.locator[validPos.alternation] == getTestTemplate(lastAlt).locator[validPos.alternation])) break
                        }
                        if (lastAlt > -1)
                            for (; validInputs.length > 0;) {
                                getMaskSet().p = seekNext(getLastValidPosition());
                                var keypress = $.Event("keypress");
                                keypress.which = validInputs.pop().charCodeAt(0), keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p)
                            } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone)
                    }
                }
                if ((opts.numericInput || isRTL) && (k == inputmask.keyCode.BACKSPACE ? k = inputmask.keyCode.DELETE : k == inputmask.keyCode.DELETE && (k = inputmask.keyCode.BACKSPACE), isRTL)) {
                    var pend = pos.end;
                    pos.end = pos.begin, pos.begin = pend
                }
                if (k == inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || 0 == opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), void 0 == getMaskSet().validPositions[pos.begin] || getMaskSet().validPositions[pos.begin].input != opts.groupSeparator && getMaskSet().validPositions[pos.begin].input != opts.radixPoint || pos.begin--) : k == inputmask.keyCode.DELETE && pos.begin == pos.end && (pos.end = isMask(pos.end) ? pos.end + 1 : seekNext(pos.end) + 1, void 0 == getMaskSet().validPositions[pos.begin] || getMaskSet().validPositions[pos.begin].input != opts.groupSeparator && getMaskSet().validPositions[pos.begin].input != opts.radixPoint || pos.end++), stripValidPositions(pos.begin, pos.end, !1, strict), strict !== !0) {
                    generalize();
                    var lvp = getLastValidPosition(pos.begin);
                    lvp < pos.begin ? (-1 == lvp && resetMaskSet(), getMaskSet().p = seekNext(lvp)) : getMaskSet().p = pos.begin
                }
            }

            function keydownEvent(e) {
                var input = this,
                    $input = $(input),
                    k = e.keyCode,
                    pos = caret(input);
                k == inputmask.keyCode.BACKSPACE || k == inputmask.keyCode.DELETE || iphone && 127 == k || e.ctrlKey && 88 == k && !isInputEventSupported("cut") ? (e.preventDefault(), 88 == k && (undoValue = getBuffer().join("")), handleRemove(input, k, pos), writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue != getBuffer().join("")), input._valueGet() == getBufferTemplate().join("") ? $input.trigger("cleared") : isComplete(getBuffer()) === !0 && $input.trigger("complete"), opts.showTooltip && $input.prop("title", getMaskSet().mask)) : k == inputmask.keyCode.END || k == inputmask.keyCode.PAGE_DOWN ? setTimeout(function () {
                    var caretPos = seekNext(getLastValidPosition());
                    opts.insertMode || caretPos != getMaskLength() || e.shiftKey || caretPos--, caret(input, e.shiftKey ? pos.begin : caretPos, caretPos)
                }, 0) : k == inputmask.keyCode.HOME && !e.shiftKey || k == inputmask.keyCode.PAGE_UP ? caret(input, 0, e.shiftKey ? pos.begin : 0) : (opts.undoOnEscape && k == inputmask.keyCode.ESCAPE || 90 == k && e.ctrlKey) && e.altKey !== !0 ? (checkVal(input, !0, !1, undoValue.split("")), $input.click()) : k != inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? 0 != opts.insertMode || e.shiftKey || (k == inputmask.keyCode.RIGHT ? setTimeout(function () {
                    var caretPos = caret(input);
                    caret(input, caretPos.begin)
                }, 0) : k == inputmask.keyCode.LEFT && setTimeout(function () {
                    var caretPos = caret(input);
                    caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1)
                }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin != getMaskLength() ? pos.begin : pos.begin - 1)), opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 != $.inArray(k, opts.ignorables)
            }

            function keypressEvent(e, checkval, writeOut, strict, ndx) {
                var input = this,
                    $input = $(input),
                    k = e.which || e.charCode || e.keyCode;
                if (!(checkval === !0 || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return !0;
                if (k) {
                    46 == k && 0 == e.shiftKey && "," == opts.radixPoint && (k = 44);
                    var forwardPosition, pos = checkval ? {
                            begin: ndx,
                            end: ndx
                        } : caret(input),
                        c = String.fromCharCode(k),
                        isSlctn = isSelection(pos.begin, pos.end);
                    isSlctn && (getMaskSet().undoPositions = $.extend(!0, {}, getMaskSet().validPositions), handleRemove(input, inputmask.keyCode.DELETE, pos, !0), pos.begin = getMaskSet().p, opts.insertMode || (opts.insertMode = !opts.insertMode, setValidPosition(pos.begin, strict), opts.insertMode = !opts.insertMode), isSlctn = !opts.multi), getMaskSet().writeOutBuffer = !0;
                    var p = isRTL && !isSlctn ? pos.end : pos.begin,
                        valResult = isValid(p, c, strict);
                    if (valResult !== !1) {
                        if (valResult !== !0 && (p = void 0 != valResult.pos ? valResult.pos : p, c = void 0 != valResult.c ? valResult.c : c), resetMaskSet(!0), void 0 != valResult.caret) forwardPosition = valResult.caret;
                        else {
                            var vps = getMaskSet().validPositions;
                            forwardPosition = !opts.keepStatic && (void 0 != vps[p + 1] && getTests(p + 1, vps[p].locator.slice(), p).length > 1 || void 0 != vps[p].alternation) ? p + 1 : seekNext(p)
                        }
                        getMaskSet().p = forwardPosition
                    }
                    if (writeOut !== !1) {
                        var self = this;
                        if (setTimeout(function () {
                                opts.onKeyValidation.call(self, valResult, opts)
                            }, 0), getMaskSet().writeOutBuffer && valResult !== !1) {
                            var buffer = getBuffer();
                            writeBuffer(input, buffer, checkval ? void 0 : opts.numericInput ? seekPrevious(forwardPosition) : forwardPosition, e, checkval !== !0), checkval !== !0 && setTimeout(function () {
                                isComplete(buffer) === !0 && $input.trigger("complete")
                            }, 0)
                        } else isSlctn && (getMaskSet().buffer = void 0, getMaskSet().validPositions = getMaskSet().undoPositions)
                    } else isSlctn && (getMaskSet().buffer = void 0, getMaskSet().validPositions = getMaskSet().undoPositions);
                    if (opts.showTooltip && $input.prop("title", getMaskSet().mask), checkval && $.isFunction(opts.onBeforeWrite)) {
                        var result = opts.onBeforeWrite.call(this, e, getBuffer(), forwardPosition, opts);
                        if (result && result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, result.buffer), resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret)
                        }
                    }
                    if (e.preventDefault(), checkval) return valResult
                }
            }

            function pasteEvent(e) {
                var input = this,
                    $input = $(input),
                    inputValue = input._valueGet(!0),
                    caretPos = caret(input);
                if ("propertychange" == e.type && input._valueGet().length <= getMaskLength()) return !0;
                if ("paste" == e.type) {
                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                        valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                    valueBeforeCaret == getBufferTemplate().slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret == getBufferTemplate().slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData ? inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret : e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData && (inputValue = valueBeforeCaret + e.originalEvent.clipboardData.getData("text/plain") + valueAfterCaret)
                }
                var pasteValue = inputValue;
                if ($.isFunction(opts.onBeforePaste)) {
                    if (pasteValue = opts.onBeforePaste.call(input, inputValue, opts), pasteValue === !1) return e.preventDefault(), !1;
                    pasteValue || (pasteValue = inputValue)
                }
                return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.split("")), writeBuffer(input, getBuffer(), void 0, e, !0), $input.click(), isComplete(getBuffer()) === !0 && $input.trigger("complete"), !1
            }

            function inputFallBackEvent(e) {
                var input = this;
                checkVal(input, !0, !1), isComplete(getBuffer()) === !0 && $(input).trigger("complete"), e.preventDefault()
            }

            function compositionStartEvent(e) {
                var input = this;
                undoValue = getBuffer().join(""), "" != compositionData && 0 == e.originalEvent.data.indexOf(compositionData) || (compositionCaretPos = caret(input))
            }

            function compositionUpdateEvent(e) {
                var input = this,
                    caretPos = caret(input);
                0 == e.originalEvent.data.indexOf(compositionData) && (resetMaskSet(), caretPos = compositionCaretPos);
                var newData = e.originalEvent.data;
                caret(input, caretPos.begin, caretPos.end);
                for (var i = 0; i < newData.length; i++) {
                    var keypress = $.Event("keypress");
                    keypress.which = newData.charCodeAt(i), skipKeyPressEvent = !1, ignorable = !1, keypressEvent.call(input, keypress)
                }
                setTimeout(function () {
                    var forwardPosition = getMaskSet().p;
                    writeBuffer(input, getBuffer(), opts.numericInput ? seekPrevious(forwardPosition) : forwardPosition)
                }, 0), compositionData = e.originalEvent.data
            }

            function compositionEndEvent(e) {}

            function mask(el) {
                $el = $(el), opts.showTooltip && $el.prop("title", getMaskSet().mask), ("rtl" == el.dir || opts.rightAlign) && $el.css("text-align", "right"), ("rtl" == el.dir || opts.numericInput) && (el.dir = "ltr", $el.removeAttr("dir"), el.inputmask.isRTL = !0, isRTL = !0), $el.unbind(".inputmask"), ($el.is(":input") && isInputTypeSupported($el.attr("type")) || el.isContentEditable) && ($el.closest("form").bind("submit", function (e) {
                    undoValue != getBuffer().join("") && $el.change(), opts.clearMaskOnLostFocus && $el[0]._valueGet && $el[0]._valueGet() == getBufferTemplate().join("") && $el[0]._valueSet(""), opts.removeMaskOnSubmit && $el.inputmask("remove")
                }).bind("reset", function () {
                    setTimeout(function () {
                        $el.triggerHandler("setvalue.inputmask")
                    }, 0)
                }), $el.bind("mouseenter.inputmask", function () {
                    var $input = $(this),
                        input = this;
                    mouseEnter = !0, !$input.is(":focus") && opts.showMaskOnHover && input._valueGet() != getBuffer().join("") && writeBuffer(input, getBuffer())
                }).bind("blur.inputmask", function (e) {
                    var $input = $(this),
                        input = this;
                    if (input.inputmask) {
                        var nptValue = input._valueGet(),
                            buffer = getBuffer().slice();
                        firstClick = !0, undoValue != buffer.join("") && setTimeout(function () {
                            $input.change(), undoValue = buffer.join("")
                        }, 0), "" != nptValue && (opts.clearMaskOnLostFocus && (nptValue == getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), isComplete(buffer) === !1 && (setTimeout(function () {
                            $input.trigger("incomplete")
                        }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), writeBuffer(input, buffer, void 0, e))
                    }
                }).bind("focus.inputmask", function (e) {
                    var input = ($(this), this),
                        nptValue = input._valueGet();
                    opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" == nptValue) ? input._valueGet() != getBuffer().join("") && writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : mouseEnter === !1 && caret(input, seekNext(getLastValidPosition())), opts.positionCaretOnTab === !0 && setTimeout(function () {
                        caret(input, seekNext(getLastValidPosition()))
                    }, 0), undoValue = getBuffer().join("")
                }).bind("mouseleave.inputmask", function () {
                    var $input = $(this),
                        input = this;
                    if (mouseEnter = !1, opts.clearMaskOnLostFocus) {
                        var buffer = getBuffer().slice(),
                            nptValue = input._valueGet();
                        $input.is(":focus") || nptValue == $input.attr("placeholder") || "" == nptValue || (nptValue == getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), writeBuffer(input, buffer))
                    }
                }).bind("click.inputmask", function () {
                    var $input = $(this),
                        input = this;
                    if ($input.is(":focus")) {
                        var selectedCaret = caret(input);
                        if (selectedCaret.begin == selectedCaret.end)
                            if (opts.radixFocus && "" != opts.radixPoint && -1 != $.inArray(opts.radixPoint, getBuffer()) && (firstClick || getBuffer().join("") == getBufferTemplate().join(""))) caret(input, $.inArray(opts.radixPoint, getBuffer())), firstClick = !1;
                            else {
                                var clickPosition = selectedCaret.begin,
                                    lastPosition = seekNext(getLastValidPosition(clickPosition));
                                lastPosition > clickPosition ? caret(input, isMask(clickPosition) ? clickPosition : seekNext(clickPosition)) : caret(input, opts.numericInput ? 0 : lastPosition)
                            }
                    }
                }).bind("dblclick.inputmask", function () {
                    var input = this;
                    setTimeout(function () {
                        caret(input, 0, seekNext(getLastValidPosition()))
                    }, 0)
                }).bind(PasteEventType + ".inputmask dragdrop.inputmask drop.inputmask", pasteEvent).bind("cut.inputmask", function (e) {
                    skipInputEvent = !0;
                    var input = this,
                        $input = $(input),
                        pos = caret(input);
                    if (isRTL) {
                        var clipboardData = window.clipboardData || e.originalEvent.clipboardData,
                            clipData = clipboardData.getData("text").split("").reverse().join("");
                        clipboardData.setData("text", clipData)
                    }
                    handleRemove(input, inputmask.keyCode.DELETE, pos), writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue != getBuffer().join("")), input._valueGet() == getBufferTemplate().join("") && $input.trigger("cleared"), opts.showTooltip && $input.prop("title", getMaskSet().mask)
                }).bind("complete.inputmask", opts.oncomplete).bind("incomplete.inputmask", opts.onincomplete).bind("cleared.inputmask", opts.oncleared), $el.bind("keydown.inputmask", keydownEvent).bind("keypress.inputmask", keypressEvent), androidfirefox || $el.bind("compositionstart.inputmask", compositionStartEvent).bind("compositionupdate.inputmask", compositionUpdateEvent).bind("compositionend.inputmask", compositionEndEvent), "paste" === PasteEventType && $el.bind("input.inputmask", inputFallBackEvent)), $el.bind("setvalue.inputmask", function () {
                    var input = this,
                        value = input._valueGet();
                    input._valueSet($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(input, value, opts) || value : value), checkVal(input, !0, !1), undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input._valueGet() == getBufferTemplate().join("") && input._valueSet("")
                }), patchValueProperty(el);
                var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(el, el._valueGet(), opts) || el._valueGet() : el._valueGet();
                checkVal(el, !0, !1, initialValue.split(""));
                var buffer = getBuffer().slice();
                undoValue = buffer.join("");
                var activeElement;
                try {
                    activeElement = document.activeElement
                } catch (e) {}
                isComplete(buffer) === !1 && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && (buffer.join("") == getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), writeBuffer(el, buffer), activeElement === el && caret(el, seekNext(getLastValidPosition())), installEventRuler(el)
            }
            var undoValue, compositionCaretPos, compositionData, el, $el, maxLength, isRTL = !1,
                skipKeyPressEvent = !1,
                skipInputEvent = !1,
                ignorable = !1,
                firstClick = !0,
                mouseEnter = !0;
            if (void 0 != actionObj) switch (actionObj.action) {
            case "isComplete":
                return el = actionObj.el, $el = $(el), maskset = el.inputmask.maskset, opts = el.inputmask.opts, isComplete(actionObj.buffer);
            case "unmaskedvalue":
                if (el = actionObj.el, void 0 == el) {
                    $el = $({}), el = $el[0], el.inputmask = new inputmask, el.inputmask.opts = opts, el.inputmask.el = el, el.inputmask.maskset = maskset, el.inputmask.isRTL = opts.numericInput, opts.numericInput && (isRTL = !0);
                    var valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call($el, actionObj.value, opts) || actionObj.value : actionObj.value).split("");
                    checkVal($el, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(this, void 0, getBuffer(), 0, opts)
                } else $el = $(el);
                return maskset = el.inputmask.maskset, opts = el.inputmask.opts, isRTL = el.inputmask.isRTL, unmaskedvalue($el);
            case "mask":
                undoValue = getBuffer().join(""), mask(actionObj.el);
                break;
            case "format":
                $el = $({}), $el[0].inputmask = new inputmask, $el[0].inputmask.opts = opts, $el[0].inputmask.el = $el[0], $el[0].inputmask.maskset = maskset, $el[0].inputmask.isRTL = opts.numericInput, opts.numericInput && (isRTL = !0);
                var valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call($el, actionObj.value, opts) || actionObj.value : actionObj.value).split("");
                return checkVal($el, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(this, void 0, getBuffer(), 0, opts), actionObj.metadata ? {
                    value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                    metadata: $el.inputmask("getmetadata")
                } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
            case "isValid":
                $el = $({}), $el[0].inputmask = new inputmask, $el[0].inputmask.opts = opts, $el[0].inputmask.el = $el[0], $el[0].inputmask.maskset = maskset, $el[0].inputmask.isRTL = opts.numericInput, opts.numericInput && (isRTL = !0);
                var valueBuffer = actionObj.value.split("");
                checkVal($el, !1, !0, isRTL ? valueBuffer.reverse() : valueBuffer);
                for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--);
                return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value == buffer.join("");
            case "getemptymask":
                return el = actionObj.el, $el = $(el), maskset = el.inputmask.maskset, opts = el.inputmask.opts, getBufferTemplate();
            case "remove":
                el = actionObj.el, $el = $(el), maskset = el.inputmask.maskset, opts = el.inputmask.opts, el._valueSet(unmaskedvalue($el)), $el.unbind(".inputmask"), el.inputmask = void 0;
                var valueProperty;
                Object.getOwnPropertyDescriptor && (valueProperty = Object.getOwnPropertyDescriptor(el, "value")), valueProperty && valueProperty.get ? el._valueGet && Object.defineProperty(el, "value", {
                    get: el._valueGet,
                    set: el._valueSet
                }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el._valueGet && (el.__defineGetter__("value", el._valueGet), el.__defineSetter__("value", el._valueSet));
                try {
                    delete el._valueGet, delete el._valueSet
                } catch (e) {
                    el._valueGet = void 0, el._valueSet = void 0
                }
                break;
            case "getmetadata":
                if (el = actionObj.el, $el = $(el), maskset = el.inputmask.maskset, opts = el.inputmask.opts, $.isArray(maskset.metadata)) {
                    for (var alternation, lvp = getLastValidPosition(), firstAlt = lvp; firstAlt >= 0; firstAlt--)
                        if (getMaskSet().validPositions[firstAlt] && void 0 != getMaskSet().validPositions[firstAlt].alternation) {
                            alternation = getMaskSet().validPositions[firstAlt].alternation;
                            break
                        }
                    return void 0 != alternation ? maskset.metadata[getMaskSet().validPositions[lvp].locator[alternation]] : maskset.metadata[0]
                }
                return maskset.metadata
            }
        }
        inputmask.prototype = {
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                aliases: {},
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: void 0,
                onBeforePaste: void 0,
                onBeforeWrite: void 0,
                onUnMask: void 0,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                showTooltip: !1,
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                groupSeparator: "",
                radixFocus: !1,
                nojumps: !1,
                nojumpsThreshold: 0,
                keepStatic: void 0,
                positionCaretOnTab: !1,
                definitions: {
                    9: {
                        validator: "[0-9]",
                        cardinality: 1,
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                        cardinality: 1,
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                        cardinality: 1
                    }
                },
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                isComplete: void 0,
                canClearPosition: $.noop,
                postValidation: void 0
            },
            masksCache: {},
            mask: function (el) {
                var input = el.jquery && el.length > 0 ? el[0] : el,
                    scopedOpts = $.extend(!0, {}, this.opts);
                importAttributeOptions(el, scopedOpts, $.extend(!0, {}, this.userOptions));
                var maskset = generateMaskSet(scopedOpts, this.noMasksCache);
                return void 0 != maskset && (input.inputmask = new inputmask, input.inputmask.opts = scopedOpts, input.inputmask.noMasksCache = this.noMasksCache, input.inputmask.el = input, input.inputmask.maskset = maskset, input.inputmask.isRTL = !1, maskScope({
                    action: "mask",
                    el: input
                }, maskset, input.inputmask.opts)), el
            },
            unmaskedvalue: function () {
                return this.el ? maskScope({
                    action: "unmaskedvalue",
                    el: this.el
                }) : void 0
            },
            remove: function () {
                return this.el ? (maskScope({
                    action: "remove",
                    el: this.el
                }), this.el.inputmask = void 0, this.el) : void 0
            },
            getemptymask: function () {
                return this.el ? maskScope({
                    action: "getemptymask",
                    el: this.el
                }) : void 0
            },
            hasMaskedValue: function () {
                return !this.opts.autoUnmask
            },
            isComplete: function () {
                return this.el ? maskScope({
                    action: "isComplete",
                    buffer: this.el._valueGet().split(""),
                    el: this.el
                }) : void 0
            },
            getmetadata: function () {
                return this.el ? maskScope({
                    action: "getmetadata",
                    el: this.el
                }) : void 0
            }
        }, inputmask.extendDefaults = function (options) {
            $.extend(inputmask.prototype.defaults, options)
        }, inputmask.extendDefinitions = function (definition) {
            $.extend(inputmask.prototype.defaults.definitions, definition)
        }, inputmask.extendAliases = function (alias) {
            $.extend(inputmask.prototype.defaults.aliases, alias)
        }, inputmask.format = function (value, options, metadata) {
            var opts = $.extend(!0, {}, inputmask.prototype.defaults, options);
            return resolveAlias(opts.alias, options, opts), maskScope({
                action: "format",
                value: value,
                metadata: metadata
            }, generateMaskSet(opts, options && void 0 !== options.definitions), opts)
        }, inputmask.unmask = function (value, options) {
            var opts = $.extend(!0, {}, inputmask.prototype.defaults, options);
            return resolveAlias(opts.alias, options, opts), maskScope({
                action: "unmaskedvalue",
                value: value
            }, generateMaskSet(opts, options && void 0 !== options.definitions), opts)
        }, inputmask.isValid = function (value, options) {
            var opts = $.extend(!0, {}, inputmask.prototype.defaults, options);
            return resolveAlias(opts.alias, options, opts), maskScope({
                action: "isValid",
                value: value
            }, generateMaskSet(opts, options && void 0 !== options.definitions), opts)
        }, inputmask.escapeRegex = function (str) {
            var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1")
        }, inputmask.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        };
        var ua = navigator.userAgent,
            iphone = null !== ua.match(new RegExp("iphone", "i")),
            androidchrome = (null !== ua.match(new RegExp("android.*safari.*", "i")), null !== ua.match(new RegExp("android.*chrome.*", "i"))),
            androidfirefox = null !== ua.match(new RegExp("android.*firefox.*", "i")),
            PasteEventType = (/Kindle/i.test(ua) || /Silk/i.test(ua) || /KFTT/i.test(ua) || /KFOT/i.test(ua) || /KFJWA/i.test(ua) || /KFJWI/i.test(ua) || /KFSOWI/i.test(ua) || /KFTHWA/i.test(ua) || /KFTHWI/i.test(ua) || /KFAPWA/i.test(ua) || /KFAPWI/i.test(ua), isInputEventSupported("paste") ? "paste" : isInputEventSupported("input") ? "input" : "propertychange");
        return window.inputmask = inputmask, inputmask
    }(jQuery),
    function ($) {
        return void 0 === $.fn.inputmask && ($.fn.inputmask = function (fn, options) {
            var nptmask;
            if (options = options || {}, "string" == typeof fn) switch (fn) {
            case "mask":
                return nptmask = new inputmask(options), this.each(function () {
                    nptmask.mask(this)
                });
            case "unmaskedvalue":
                var input = this.jquery && this.length > 0 ? this[0] : this;
                return input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
            case "remove":
                return this.each(function () {
                    this.inputmask && this.inputmask.remove()
                });
            case "getemptymask":
                var input = this.jquery && this.length > 0 ? this[0] : this;
                return input.inputmask ? input.inputmask.getemptymask() : "";
            case "hasMaskedValue":
                var input = this.jquery && this.length > 0 ? this[0] : this;
                return input.inputmask ? input.inputmask.hasMaskedValue() : !1;
            case "isComplete":
                var input = this.jquery && this.length > 0 ? this[0] : this;
                return input.inputmask ? input.inputmask.isComplete() : !0;
            case "getmetadata":
                var input = this.jquery && this.length > 0 ? this[0] : this;
                return input.inputmask ? input.inputmask.getmetadata() : void 0;
            default:
                return options.alias = fn, nptmask = new inputmask(options), this.each(function () {
                    nptmask.mask(this)
                })
            } else {
                if ("object" == typeof fn) return nptmask = new inputmask(fn), this.each(function () {
                    nptmask.mask(this)
                });
                if (void 0 == fn) return this.each(function () {
                    nptmask = new inputmask(options), nptmask.mask(this)
                })
            }
        }), $.fn.inputmask
    }(jQuery),
    function (a) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
    }(function (f) {
        function w(F) {
            return !F || void 0 !== F.allowPageScroll || void 0 === F.swipe && void 0 === F.swipeStatus || (F.allowPageScroll = m), void 0 !== F.click && void 0 === F.tap && (F.tap = F.click), F || (F = {}), F = f.extend({}, f.fn.swipe.defaults, F), this.each(function () {
                var H = f(this),
                    G = H.data(C);
                G || (G = new D(this, F), H.data(C, G))
            })
        }

        function D(a5, au) {
            function aN(be) {
                if (!(aB() || f(be.target).closest(au.excludedElements, aR).length > 0)) {
                    var bd, bf = be.originalEvent ? be.originalEvent : be,
                        bg = bf.touches,
                        bc = bg ? bg[0] : bf;
                    return aa = g, bg ? X = bg.length : au.preventDefaultEvents !== !1 && be.preventDefault(), ag = 0, aP = null, a2 = null, aJ = null, ac = 0, a1 = 0, aZ = 0, H = 1, ap = 0, N = ab(), S(), ai(0, bc), !bg || X === au.fingers || au.fingers === i || aX() ? (U = ar(), 2 == X && (ai(1, bg[1]), a1 = aZ = at(aQ[0].start, aQ[1].start)), (au.swipeStatus || au.pinchStatus) && (bd = P(bf, aa))) : bd = !1, bd === !1 ? (aa = q, P(bf, aa), bd) : (au.hold && (af = setTimeout(f.proxy(function () {
                        aR.trigger("hold", [bf.target]), au.hold && (bd = au.hold.call(aR, bf, bf.target))
                    }, this), au.longTapThreshold)), an(!0), null)
                }
            }

            function a4(bf) {
                var bi = bf.originalEvent ? bf.originalEvent : bf;
                if (aa !== h && aa !== q && !al()) {
                    var be, bj = bi.touches,
                        bd = bj ? bj[0] : bi,
                        bg = aH(bd);
                    if (a3 = ar(), bj && (X = bj.length), au.hold && clearTimeout(af), aa = k, 2 == X && (0 == a1 ? (ai(1, bj[1]), a1 = aZ = at(aQ[0].start, aQ[1].start)) : (aH(bj[1]), aZ = at(aQ[0].end, aQ[1].end), aJ = aq(aQ[0].end, aQ[1].end)), H = a8(a1, aZ), ap = Math.abs(a1 - aZ)), X === au.fingers || au.fingers === i || !bj || aX()) {
                        if (aP = aL(bg.start, bg.end), a2 = aL(bg.last, bg.end), ak(bf, a2), ag = aS(bg.start, bg.end), ac = aM(), aI(aP, ag), be = P(bi, aa), !au.triggerOnTouchEnd || au.triggerOnTouchLeave) {
                            var bc = !0;
                            if (au.triggerOnTouchLeave) {
                                var bh = aY(this);
                                bc = F(bg.end, bh)
                            }!au.triggerOnTouchEnd && bc ? aa = aC(k) : au.triggerOnTouchLeave && !bc && (aa = aC(h)), aa != q && aa != h || P(bi, aa)
                        }
                    } else aa = q, P(bi, aa);
                    be === !1 && (aa = q, P(bi, aa))
                }
            }

            function M(bc) {
                var bd = bc.originalEvent ? bc.originalEvent : bc,
                    be = bd.touches;
                if (be) {
                    if (be.length && !al()) return G(bd), !0;
                    if (be.length && al()) return !0
                }
                return al() && (X = ay), a3 = ar(), ac = aM(), bb() || !am() ? (aa = q, P(bd, aa)) : au.triggerOnTouchEnd || 0 == au.triggerOnTouchEnd && aa === k ? (au.preventDefaultEvents !== !1 && bc.preventDefault(), aa = h, P(bd, aa)) : !au.triggerOnTouchEnd && a7() ? (aa = h, aF(bd, aa, B)) : aa === k && (aa = q, P(bd, aa)), an(!1), null
            }

            function ba() {
                X = 0, a3 = 0, U = 0, a1 = 0, aZ = 0, H = 1, S(), an(!1)
            }

            function L(bc) {
                var bd = bc.originalEvent ? bc.originalEvent : bc;
                au.triggerOnTouchLeave && (aa = aC(h), P(bd, aa))
            }

            function aK() {
                aR.unbind(K, aN), aR.unbind(aD, ba), aR.unbind(ax, a4), aR.unbind(V, M), T && aR.unbind(T, L), an(!1)
            }

            function aC(bg) {
                var bf = bg,
                    be = aA(),
                    bd = am(),
                    bc = bb();
                return !be || bc ? bf = q : !bd || bg != k || au.triggerOnTouchEnd && !au.triggerOnTouchLeave ? !bd && bg == h && au.triggerOnTouchLeave && (bf = q) : bf = h, bf
            }

            function P(be, bc) {
                var bd, bf = be.touches;
                return (J() || W()) && (bd = aF(be, bc, l)), (Q() || aX()) && bd !== !1 && (bd = aF(be, bc, t)), aG() && bd !== !1 ? bd = aF(be, bc, j) : ao() && bd !== !1 ? bd = aF(be, bc, b) : ah() && bd !== !1 && (bd = aF(be, bc, B)), bc === q && (W() && (bd = aF(be, bc, l)), aX() && (bd = aF(be, bc, t)), ba(be)), bc === h && (bf ? bf.length || ba(be) : ba(be)), bd
            }

            function aF(bf, bc, be) {
                var bd;
                if (be == l) {
                    if (aR.trigger("swipeStatus", [bc, aP || null, ag || 0, ac || 0, X, aQ, a2]), au.swipeStatus && (bd = au.swipeStatus.call(aR, bf, bc, aP || null, ag || 0, ac || 0, X, aQ, a2), bd === !1)) return !1;
                    if (bc == h && aV()) {
                        if (clearTimeout(aW), clearTimeout(af), aR.trigger("swipe", [aP, ag, ac, X, aQ, a2]), au.swipe && (bd = au.swipe.call(aR, bf, aP, ag, ac, X, aQ, a2), bd === !1)) return !1;
                        switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ac, X, aQ, a2]), au.swipeLeft && (bd = au.swipeLeft.call(aR, bf, aP, ag, ac, X, aQ, a2));
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ac, X, aQ, a2]), au.swipeRight && (bd = au.swipeRight.call(aR, bf, aP, ag, ac, X, aQ, a2));
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ac, X, aQ, a2]), au.swipeUp && (bd = au.swipeUp.call(aR, bf, aP, ag, ac, X, aQ, a2));
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ac, X, aQ, a2]), au.swipeDown && (bd = au.swipeDown.call(aR, bf, aP, ag, ac, X, aQ, a2))
                        }
                    }
                }
                if (be == t) {
                    if (aR.trigger("pinchStatus", [bc, aJ || null, ap || 0, ac || 0, X, H, aQ]), au.pinchStatus && (bd = au.pinchStatus.call(aR, bf, bc, aJ || null, ap || 0, ac || 0, X, H, aQ), bd === !1)) return !1;
                    if (bc == h && a9()) switch (aJ) {
                    case c:
                        aR.trigger("pinchIn", [aJ || null, ap || 0, ac || 0, X, H, aQ]), au.pinchIn && (bd = au.pinchIn.call(aR, bf, aJ || null, ap || 0, ac || 0, X, H, aQ));
                        break;
                    case A:
                        aR.trigger("pinchOut", [aJ || null, ap || 0, ac || 0, X, H, aQ]), au.pinchOut && (bd = au.pinchOut.call(aR, bf, aJ || null, ap || 0, ac || 0, X, H, aQ))
                    }
                }
                return be == B ? bc !== q && bc !== h || (clearTimeout(aW), clearTimeout(af), Z() && !I() ? (O = ar(), aW = setTimeout(f.proxy(function () {
                    O = null, aR.trigger("tap", [bf.target]), au.tap && (bd = au.tap.call(aR, bf, bf.target))
                }, this), au.doubleTapThreshold)) : (O = null, aR.trigger("tap", [bf.target]), au.tap && (bd = au.tap.call(aR, bf, bf.target)))) : be == j ? bc !== q && bc !== h || (clearTimeout(aW), clearTimeout(af), O = null, aR.trigger("doubletap", [bf.target]), au.doubleTap && (bd = au.doubleTap.call(aR, bf, bf.target))) : be == b && (bc !== q && bc !== h || (clearTimeout(aW), O = null, aR.trigger("longtap", [bf.target]), au.longTap && (bd = au.longTap.call(aR, bf, bf.target)))), bd
            }

            function am() {
                var bc = !0;
                return null !== au.threshold && (bc = ag >= au.threshold), bc
            }

            function bb() {
                var bc = !1;
                return null !== au.cancelThreshold && null !== aP && (bc = aT(aP) - ag >= au.cancelThreshold), bc
            }

            function ae() {
                return null !== au.pinchThreshold ? ap >= au.pinchThreshold : !0
            }

            function aA() {
                var bc;
                return bc = au.maxTimeThreshold ? !(ac >= au.maxTimeThreshold) : !0
            }

            function ak(bc, bd) {
                if (au.preventDefaultEvents !== !1)
                    if (au.allowPageScroll === m) bc.preventDefault();
                    else {
                        var be = au.allowPageScroll === s;
                        switch (bd) {
                        case p:
                            (au.swipeLeft && be || !be && au.allowPageScroll != E) && bc.preventDefault();
                            break;
                        case o:
                            (au.swipeRight && be || !be && au.allowPageScroll != E) && bc.preventDefault();
                            break;
                        case e:
                            (au.swipeUp && be || !be && au.allowPageScroll != u) && bc.preventDefault();
                            break;
                        case x:
                            (au.swipeDown && be || !be && au.allowPageScroll != u) && bc.preventDefault()
                        }
                    }
            }

            function a9() {
                var bd = aO(),
                    bc = Y(),
                    be = ae();
                return bd && bc && be
            }

            function aX() {
                return !!(au.pinchStatus || au.pinchIn || au.pinchOut)
            }

            function Q() {
                return !(!a9() || !aX())
            }

            function aV() {
                var bf = aA(),
                    bh = am(),
                    be = aO(),
                    bc = Y(),
                    bd = bb(),
                    bg = !bd && bc && be && bh && bf;
                return bg
            }

            function W() {
                return !!(au.swipe || au.swipeStatus || au.swipeLeft || au.swipeRight || au.swipeUp || au.swipeDown)
            }

            function J() {
                return !(!aV() || !W())
            }

            function aO() {
                return X === au.fingers || au.fingers === i || !a
            }

            function Y() {
                return 0 !== aQ[0].end.x
            }

            function a7() {
                return !!au.tap
            }

            function Z() {
                return !!au.doubleTap
            }

            function aU() {
                return !!au.longTap
            }

            function R() {
                if (null == O) return !1;
                var bc = ar();
                return Z() && bc - O <= au.doubleTapThreshold
            }

            function I() {
                return R()
            }

            function aw() {
                return (1 === X || !a) && (isNaN(ag) || ag < au.threshold)
            }

            function a0() {
                return ac > au.longTapThreshold && r > ag
            }

            function ah() {
                return !(!aw() || !a7())
            }

            function aG() {
                return !(!R() || !Z())
            }

            function ao() {
                return !(!a0() || !aU())
            }

            function G(bc) {
                a6 = ar(), ay = bc.touches.length + 1
            }

            function S() {
                a6 = 0, ay = 0
            }

            function al() {
                var bc = !1;
                if (a6) {
                    var bd = ar() - a6;
                    bd <= au.fingerReleaseThreshold && (bc = !0)
                }
                return bc
            }

            function aB() {
                return !(aR.data(C + "_intouch") !== !0)
            }

            function an(bc) {
                aR && (bc === !0 ? (aR.bind(ax, a4), aR.bind(V, M), T && aR.bind(T, L)) : (aR.unbind(ax, a4, !1), aR.unbind(V, M, !1), T && aR.unbind(T, L, !1)), aR.data(C + "_intouch", bc === !0))
            }

            function ai(be, bc) {
                var bd = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return bd.start.x = bd.last.x = bd.end.x = bc.pageX || bc.clientX, bd.start.y = bd.last.y = bd.end.y = bc.pageY || bc.clientY, aQ[be] = bd, bd
            }

            function aH(bc) {
                var be = void 0 !== bc.identifier ? bc.identifier : 0,
                    bd = ad(be);
                return null === bd && (bd = ai(be, bc)), bd.last.x = bd.end.x, bd.last.y = bd.end.y, bd.end.x = bc.pageX || bc.clientX, bd.end.y = bc.pageY || bc.clientY, bd
            }

            function ad(bc) {
                return aQ[bc] || null
            }

            function aI(bc, bd) {
                bd = Math.max(bd, aT(bc)), N[bc].distance = bd
            }

            function aT(bc) {
                return N[bc] ? N[bc].distance : void 0
            }

            function ab() {
                var bc = {};
                return bc[p] = av(p), bc[o] = av(o), bc[e] = av(e), bc[x] = av(x), bc
            }

            function av(bc) {
                return {
                    direction: bc,
                    distance: 0
                }
            }

            function aM() {
                return a3 - U
            }

            function at(bf, be) {
                var bd = Math.abs(bf.x - be.x),
                    bc = Math.abs(bf.y - be.y);
                return Math.round(Math.sqrt(bd * bd + bc * bc))
            }

            function a8(bc, bd) {
                var be = bd / bc * 1;
                return be.toFixed(2)
            }

            function aq() {
                return 1 > H ? A : c
            }

            function aS(bd, bc) {
                return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
            }

            function aE(bf, bd) {
                var bc = bf.x - bd.x,
                    bh = bd.y - bf.y,
                    be = Math.atan2(bh, bc),
                    bg = Math.round(180 * be / Math.PI);
                return 0 > bg && (bg = 360 - Math.abs(bg)), bg
            }

            function aL(bd, bc) {
                var be = aE(bd, bc);
                return 45 >= be && be >= 0 ? p : 360 >= be && be >= 315 ? p : be >= 135 && 225 >= be ? o : be > 45 && 135 > be ? x : e
            }

            function ar() {
                var bc = new Date;
                return bc.getTime()
            }

            function aY(bc) {
                bc = f(bc);
                var be = bc.offset(),
                    bd = {
                        left: be.left,
                        right: be.left + bc.outerWidth(),
                        top: be.top,
                        bottom: be.top + bc.outerHeight()
                    };
                return bd
            }

            function F(bc, bd) {
                return bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom
            }
            var au = f.extend({}, au),
                az = a || d || !au.fallbackToMouseEvents,
                K = az ? d ? v ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                ax = az ? d ? v ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                V = az ? d ? v ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                T = az ? d ? "mouseleave" : null : "mouseleave",
                aD = d ? v ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                ag = 0,
                aP = null,
                a2 = null,
                ac = 0,
                a1 = 0,
                aZ = 0,
                H = 1,
                ap = 0,
                aJ = 0,
                N = null,
                aR = f(a5),
                aa = "start",
                X = 0,
                aQ = {},
                U = 0,
                a3 = 0,
                a6 = 0,
                ay = 0,
                O = 0,
                aW = null,
                af = null;
            try {
                aR.bind(K, aN), aR.bind(aD, ba)
            } catch (aj) {
                f.error("events not supported " + K + "," + aD + " on jQuery.swipe")
            }
            this.enable = function () {
                return aR.bind(K, aN), aR.bind(aD, ba), aR
            }, this.disable = function () {
                return aK(), aR
            }, this.destroy = function () {
                aK(), aR.data(C, null), aR = null
            }, this.option = function (bd, bc) {
                if ("object" == typeof bd) au = f.extend(au, bd);
                else if (void 0 !== au[bd]) {
                    if (void 0 === bc) return au[bd];
                    au[bd] = bc
                } else {
                    if (!bd) return au;
                    f.error("Option " + bd + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        var y = "http://test.bolshe.com.ua/Media/js/Bases/1.6.15",
            p = "left",
            o = "right",
            e = "up",
            x = "down",
            c = "in",
            A = "out",
            m = "none",
            s = "auto",
            l = "swipe",
            t = "pinch",
            B = "tap",
            j = "doubletap",
            b = "longtap",
            E = "horizontal",
            u = "vertical",
            i = "all",
            r = 10,
            g = "start",
            k = "move",
            h = "end",
            q = "cancel",
            a = "ontouchstart" in window,
            v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !a,
            d = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !a,
            C = "TouchSwipe",
            n = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe",
                preventDefaultEvents: !0
            };
        f.fn.swipe = function (H) {
            var G = f(this),
                F = G.data(C);
            if (F && "string" == typeof H) {
                if (F[H]) return F[H].apply(this, Array.prototype.slice.call(arguments, 1));
                f.error("Method " + H + " does not exist on jQuery.swipe")
            } else if (F && "object" == typeof H) F.option.apply(this, arguments);
            else if (!(F || "object" != typeof H && H)) return w.apply(this, arguments);
            return G
        }, f.fn.swipe.version = y, f.fn.swipe.defaults = n, f.fn.swipe.phases = {
            PHASE_START: g,
            PHASE_MOVE: k,
            PHASE_END: h,
            PHASE_CANCEL: q
        }, f.fn.swipe.directions = {
            LEFT: p,
            RIGHT: o,
            UP: e,
            DOWN: x,
            IN: c,
            OUT: A
        }, f.fn.swipe.pageScroll = {
            NONE: m,
            HORIZONTAL: E,
            VERTICAL: u,
            AUTO: s
        }, f.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: i
        }
    });
//# sourceMappingURL=components.js.map

(function () {
    var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
        __slice = [].slice,
        __hasProp = {}.hasOwnProperty,
        __extends = function (child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };

    noop = function () {};

    Emitter = (function () {
        function Emitter() {}

        Emitter.prototype.addEventListener = Emitter.prototype.on;

        Emitter.prototype.on = function (event, fn) {
            this._callbacks = this._callbacks || {};
            if (!this._callbacks[event]) {
                this._callbacks[event] = [];
            }
            this._callbacks[event].push(fn);
            return this;
        };

        Emitter.prototype.emit = function () {
            var args, callback, callbacks, event, _i, _len;
            event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            this._callbacks = this._callbacks || {};
            callbacks = this._callbacks[event];
            if (callbacks) {
                for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
                    callback = callbacks[_i];
                    callback.apply(this, args);
                }
            }
            return this;
        };

        Emitter.prototype.removeListener = Emitter.prototype.off;

        Emitter.prototype.removeAllListeners = Emitter.prototype.off;

        Emitter.prototype.removeEventListener = Emitter.prototype.off;

        Emitter.prototype.off = function (event, fn) {
            var callback, callbacks, i, _i, _len;
            if (!this._callbacks || arguments.length === 0) {
                this._callbacks = {};
                return this;
            }
            callbacks = this._callbacks[event];
            if (!callbacks) {
                return this;
            }
            if (arguments.length === 1) {
                delete this._callbacks[event];
                return this;
            }
            for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
                callback = callbacks[i];
                if (callback === fn) {
                    callbacks.splice(i, 1);
                    break;
                }
            }
            return this;
        };

        return Emitter;

    })();

    Dropzone = (function (_super) {
        var extend, resolveOption;

        __extends(Dropzone, _super);

        Dropzone.prototype.Emitter = Emitter;


        /*
         This is a list of all available events you can register on a dropzone object.

         You can register an event handler like this:

         dropzone.on("dragEnter", function() { });
         */

        Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

        Dropzone.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: false,
            parallelUploads: 2,
            uploadMultiple: false,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: true,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1000,
            maxFiles: null,
            params: {},
            clickable: true,
            ignoreHiddenFiles: true,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: false,
            autoQueue: true,
            addRemoveLinks: false,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function (file, done) {
                return done();
            },
            init: function () {
                return noop;
            },
            forceFallback: false,
            fallback: function () {
                var child, messageElement, span, _i, _len, _ref;
                this.element.className = "" + this.element.className + " dz-browser-not-supported";
                _ref = this.element.getElementsByTagName("div");
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    child = _ref[_i];
                    if (/(^| )dz-message($| )/.test(child.className)) {
                        messageElement = child;
                        child.className = "dz-message";
                        continue;
                    }
                }
                if (!messageElement) {
                    messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
                    this.element.appendChild(messageElement);
                }
                span = messageElement.getElementsByTagName("span")[0];
                if (span) {
                    if (span.textContent != null) {
                        span.textContent = this.options.dictFallbackMessage;
                    } else if (span.innerText != null) {
                        span.innerText = this.options.dictFallbackMessage;
                    }
                }
                return this.element.appendChild(this.getFallbackForm());
            },
            resize: function (file) {
                var info, srcRatio, trgRatio;
                info = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: file.width,
                    srcHeight: file.height
                };
                srcRatio = file.width / file.height;
                info.optWidth = this.options.thumbnailWidth;
                info.optHeight = this.options.thumbnailHeight;
                if ((info.optWidth == null) && (info.optHeight == null)) {
                    info.optWidth = info.srcWidth;
                    info.optHeight = info.srcHeight;
                } else if (info.optWidth == null) {
                    info.optWidth = srcRatio * info.optHeight;
                } else if (info.optHeight == null) {
                    info.optHeight = (1 / srcRatio) * info.optWidth;
                }
                trgRatio = info.optWidth / info.optHeight;
                if (file.height < info.optHeight || file.width < info.optWidth) {
                    info.trgHeight = info.srcHeight;
                    info.trgWidth = info.srcWidth;
                } else {
                    if (srcRatio > trgRatio) {
                        info.srcHeight = file.height;
                        info.srcWidth = info.srcHeight * trgRatio;
                    } else {
                        info.srcWidth = file.width;
                        info.srcHeight = info.srcWidth / trgRatio;
                    }
                }
                info.srcX = (file.width - info.srcWidth) / 2;
                info.srcY = (file.height - info.srcHeight) / 2;
                return info;
            },

            /*
             Those functions register themselves to the events on init and handle all
             the user interface specific stuff. Overwriting them won't break the upload
             but can break the way it's displayed.
             You can overwrite them if you don't like the default behavior. If you just
             want to add an additional event handler, register it on the dropzone object
             and don't overwrite those options.
             */
            drop: function (e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragstart: noop,
            dragend: function (e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragenter: function (e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragover: function (e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragleave: function (e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            paste: noop,
            reset: function () {
                return this.element.classList.remove("dz-started");
            },
            addedfile: function (file) {
                var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
                if (this.element === this.previewsContainer) {
                    this.element.classList.add("dz-started");
                }
                if (this.previewsContainer) {
                    file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                    file.previewTemplate = file.previewElement;
                    this.previewsContainer.appendChild(file.previewElement);
                    _ref = file.previewElement.querySelectorAll("[data-dz-name]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        node.textContent = file.name;
                    }
                    _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
                    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                        node = _ref1[_j];
                        node.innerHTML = this.filesize(file.size);
                    }
                    if (this.options.addRemoveLinks) {
                        file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
                        file.previewElement.appendChild(file._removeLink);
                    }
                    removeFileEvent = (function (_this) {
                        return function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (file.status === Dropzone.UPLOADING) {
                                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function () {
                                    return _this.removeFile(file);
                                });
                            } else {
                                if (_this.options.dictRemoveFileConfirmation) {
                                    return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function () {
                                        return _this.removeFile(file);
                                    });
                                } else {
                                    return _this.removeFile(file);
                                }
                            }
                        };
                    })(this);
                    _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
                    _results = [];
                    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                        removeLink = _ref2[_k];
                        _results.push(removeLink.addEventListener("click", removeFileEvent));
                    }
                    return _results;
                }
            },
            removedfile: function (file) {
                var _ref;
                if (file.previewElement) {
                    if ((_ref = file.previewElement) != null) {
                        _ref.parentNode.removeChild(file.previewElement);
                    }
                }
                return this._updateMaxFilesReachedClass();
            },
            thumbnail: function (file, dataUrl) {
                var thumbnailElement, _i, _len, _ref;
                if (file.previewElement) {
                    file.previewElement.classList.remove("dz-file-preview");
                    _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        thumbnailElement = _ref[_i];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.src = dataUrl;
                    }
                    return setTimeout(((function (_this) {
                        return function () {
                            return file.previewElement.classList.add("dz-image-preview");
                        };
                    })(this)), 1);
                }
            },
            error: function (file, message) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-error");
                    if (typeof message !== "String" && message.error) {
                        message = message.error;
                    }
                    _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        _results.push(node.textContent = message);
                    }
                    return _results;
                }
            },
            errormultiple: noop,
            processing: function (file) {
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-processing");
                    if (file._removeLink) {
                        return file._removeLink.textContent = this.options.dictCancelUpload;
                    }
                }
            },
            processingmultiple: noop,
            uploadprogress: function (file, progress, bytesSent) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        if (node.nodeName === 'PROGRESS') {
                            _results.push(node.value = progress);
                        } else {
                            _results.push(node.style.width = "" + progress + "%");
                        }
                    }
                    return _results;
                }
            },
            totaluploadprogress: noop,
            sending: noop,
            sendingmultiple: noop,
            success: function (file) {
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-success");
                }
            },
            successmultiple: noop,
            canceled: function (file) {
                return this.emit("error", file, "Upload canceled.");
            },
            canceledmultiple: noop,
            complete: function (file) {
                if (file._removeLink) {
                    file._removeLink.textContent = this.options.dictRemoveFile;
                }
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-complete");
                }
            },
            completemultiple: noop,
            maxfilesexceeded: noop,
            maxfilesreached: noop,
            queuecomplete: noop,
            addedfiles: noop,
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
        };

        extend = function () {
            var key, object, objects, target, val, _i, _len;
            target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            for (_i = 0, _len = objects.length; _i < _len; _i++) {
                object = objects[_i];
                for (key in object) {
                    val = object[key];
                    target[key] = val;
                }
            }
            return target;
        };

        function Dropzone(element, options) {
            var elementOptions, fallback, _ref;
            this.element = element;
            this.version = Dropzone.version;
            this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
            this.clickableElements = [];
            this.listeners = [];
            this.files = [];
            if (typeof this.element === "string") {
                this.element = document.querySelector(this.element);
            }
            if (!(this.element && (this.element.nodeType != null))) {
                throw new Error("Invalid dropzone element.");
            }
            if (this.element.dropzone) {
                throw new Error("Dropzone already attached.");
            }
            Dropzone.instances.push(this);
            this.element.dropzone = this;
            elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
            this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
            if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
                return this.options.fallback.call(this);
            }
            if (this.options.url == null) {
                this.options.url = this.element.getAttribute("action");
            }
            if (!this.options.url) {
                throw new Error("No URL provided.");
            }
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
                throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            }
            if (this.options.acceptedMimeTypes) {
                this.options.acceptedFiles = this.options.acceptedMimeTypes;
                delete this.options.acceptedMimeTypes;
            }
            this.options.method = this.options.method.toUpperCase();
            if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
                fallback.parentNode.removeChild(fallback);
            }
            if (this.options.previewsContainer !== false) {
                if (this.options.previewsContainer) {
                    this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
                } else {
                    this.previewsContainer = this.element;
                }
            }
            if (this.options.clickable) {
                if (this.options.clickable === true) {
                    this.clickableElements = [this.element];
                } else {
                    this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
                }
            }
            this.init();
        }

        Dropzone.prototype.getAcceptedFiles = function () {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getRejectedFiles = function () {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (!file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getFilesWithStatus = function (status) {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === status) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getQueuedFiles = function () {
            return this.getFilesWithStatus(Dropzone.QUEUED);
        };

        Dropzone.prototype.getUploadingFiles = function () {
            return this.getFilesWithStatus(Dropzone.UPLOADING);
        };

        Dropzone.prototype.getAddedFiles = function () {
            return this.getFilesWithStatus(Dropzone.ADDED);
        };

        Dropzone.prototype.getActiveFiles = function () {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.init = function () {
            var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
            if (this.element.tagName === "form") {
                this.element.setAttribute("enctype", "multipart/form-data");
            }
            if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
            }
            console.log(this.clickableElements);
            if (this.clickableElements.length) {
                setupHiddenFileInput = (function (_this) {
                    return function () {
                        if (_this.hiddenFileInput) {
                            _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
                        }
                        _this.hiddenFileInput = document.createElement("input");
                        _this.hiddenFileInput.setAttribute("type", "file");
                        if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
                            _this.hiddenFileInput.setAttribute("multiple", "multiple");
                        }
                        _this.hiddenFileInput.className = "dz-hidden-input";
                        if (_this.options.acceptedFiles != null) {
                            _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
                        }
                        if (_this.options.capture != null) {
                            _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
                        }
                        _this.hiddenFileInput.style.visibility = "hidden";
                        _this.hiddenFileInput.style.position = "absolute";
                        _this.hiddenFileInput.style.top = "0";
                        _this.hiddenFileInput.style.left = "0";
                        _this.hiddenFileInput.style.height = "0";
                        _this.hiddenFileInput.style.width = "0";
                        document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
                        return _this.hiddenFileInput.addEventListener("change", function () {
                            var file, files, _i, _len;
                            files = _this.hiddenFileInput.files;
                            if (files.length) {
                                for (_i = 0, _len = files.length; _i < _len; _i++) {
                                    file = files[_i];
                                    _this.addFile(file);
                                }
                            }
                            _this.emit("addedfiles", files);
                            return setupHiddenFileInput();
                        });
                    };
                })(this);
                setupHiddenFileInput();
            }
            this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
            _ref1 = this.events;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                eventName = _ref1[_i];
                this.on(eventName, this.options[eventName]);
            }
            this.on("uploadprogress", (function (_this) {
                return function () {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("removedfile", (function (_this) {
                return function () {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("canceled", (function (_this) {
                return function (file) {
                    return _this.emit("complete", file);
                };
            })(this));
            this.on("complete", (function (_this) {
                return function (file) {
                    if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
                        return setTimeout((function () {
                            return _this.emit("queuecomplete");
                        }), 0);
                    }
                };
            })(this));
            noPropagation = function (e) {
                e.stopPropagation();
                if (e.preventDefault) {
                    return e.preventDefault();
                } else {
                    return e.returnValue = false;
                }
            };
            this.listeners = [
                {
                    element: this.element,
                    events: {
                        "dragstart": (function (_this) {
                            return function (e) {
                                return _this.emit("dragstart", e);
                            };
                        })(this),
                        "dragenter": (function (_this) {
                            return function (e) {
                                noPropagation(e);
                                return _this.emit("dragenter", e);
                            };
                        })(this),
                        "dragover": (function (_this) {
                            return function (e) {
                                var efct;
                                try {
                                    efct = e.dataTransfer.effectAllowed;
                                } catch (_error) {}
                                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                                noPropagation(e);
                                return _this.emit("dragover", e);
                            };
                        })(this),
                        "dragleave": (function (_this) {
                            return function (e) {
                                return _this.emit("dragleave", e);
                            };
                        })(this),
                        "drop": (function (_this) {
                            return function (e) {
                                noPropagation(e);
                                return _this.drop(e);
                            };
                        })(this),
                        "dragend": (function (_this) {
                            return function (e) {
                                return _this.emit("dragend", e);
                            };
                        })(this)
                    }
                }
            ];
            this.clickableElements.forEach((function (_this) {
                return function (clickableElement) {
                    return _this.listeners.push({
                        element: clickableElement,
                        events: {
                            "click": function (evt) {
                                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                                    _this.hiddenFileInput.click();
                                }
                                return true;
                            }
                        }
                    });
                };
            })(this));
            this.enable();
            return this.options.init.call(this);
        };

        Dropzone.prototype.destroy = function () {
            var _ref;
            this.disable();
            this.removeAllFiles(true);
            if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = null;
            }
            delete this.element.dropzone;
            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
        };

        Dropzone.prototype.updateTotalUploadProgress = function () {
            var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
            totalBytesSent = 0;
            totalBytes = 0;
            activeFiles = this.getActiveFiles();
            if (activeFiles.length) {
                _ref = this.getActiveFiles();
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    totalBytesSent += file.upload.bytesSent;
                    totalBytes += file.upload.total;
                }
                totalUploadProgress = 100 * totalBytesSent / totalBytes;
            } else {
                totalUploadProgress = 100;
            }
            return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
        };

        Dropzone.prototype._getParamName = function (n) {
            if (typeof this.options.paramName === "function") {
                return this.options.paramName(n);
            } else {
                return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
            }
        };

        Dropzone.prototype.getFallbackForm = function () {
            var existingFallback, fields, fieldsString, form;
            if (existingFallback = this.getExistingFallback()) {
                return existingFallback;
            }
            fieldsString = "<div class=\"dz-fallback\">";
            if (this.options.dictFallbackText) {
                fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
            }
            fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
            fields = Dropzone.createElement(fieldsString);
            if (this.element.tagName !== "FORM") {
                form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
                form.appendChild(fields);
            } else {
                this.element.setAttribute("enctype", "multipart/form-data");
                this.element.setAttribute("method", this.options.method);
            }
            return form != null ? form : fields;
        };

        Dropzone.prototype.getExistingFallback = function () {
            var fallback, getFallback, tagName, _i, _len, _ref;
            getFallback = function (elements) {
                var el, _i, _len;
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )fallback($| )/.test(el.className)) {
                        return el;
                    }
                }
            };
            _ref = ["div", "form"];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                tagName = _ref[_i];
                if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                    return fallback;
                }
            }
        };

        Dropzone.prototype.setupEventListeners = function () {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function () {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.addEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.removeEventListeners = function () {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function () {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.removeEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.disable = function () {
            var file, _i, _len, _ref, _results;
            this.clickableElements.forEach(function (element) {
                return element.classList.remove("dz-clickable");
            });
            this.removeEventListeners();
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                _results.push(this.cancelUpload(file));
            }
            return _results;
        };

        Dropzone.prototype.enable = function () {
            this.clickableElements.forEach(function (element) {
                return element.classList.add("dz-clickable");
            });
            return this.setupEventListeners();
        };

        Dropzone.prototype.filesize = function (size) {
            var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
            selectedSize = 0;
            selectedUnit = "b";
            if (size > 0) {
                units = ['TB', 'GB', 'MB', 'KB', 'b'];
                for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
                    unit = units[i];
                    cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                    if (size >= cutoff) {
                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                        selectedUnit = unit;
                        break;
                    }
                }
                selectedSize = Math.round(10 * selectedSize) / 10;
            }
            return "<strong>" + selectedSize + "</strong> " + selectedUnit;
        };

        Dropzone.prototype._updateMaxFilesReachedClass = function () {
            if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                if (this.getAcceptedFiles().length === this.options.maxFiles) {
                    this.emit('maxfilesreached', this.files);
                }
                return this.element.classList.add("dz-max-files-reached");
            } else {
                return this.element.classList.remove("dz-max-files-reached");
            }
        };

        Dropzone.prototype.drop = function (e) {
            var files, items;
            if (!e.dataTransfer) {
                return;
            }
            this.emit("drop", e);
            files = e.dataTransfer.files;
            this.emit("addedfiles", files);
            if (files.length) {
                items = e.dataTransfer.items;
                if (items && items.length && (items[0].webkitGetAsEntry != null)) {
                    this._addFilesFromItems(items);
                } else {
                    this.handleFiles(files);
                }
            }
        };

        Dropzone.prototype.paste = function (e) {
            var items, _ref;
            if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
                return;
            }
            this.emit("paste", e);
            items = e.clipboardData.items;
            if (items.length) {
                return this._addFilesFromItems(items);
            }
        };

        Dropzone.prototype.handleFiles = function (files) {
            var file, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                _results.push(this.addFile(file));
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromItems = function (items) {
            var entry, item, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = items.length; _i < _len; _i++) {
                item = items[_i];
                if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) {
                        _results.push(this.addFile(item.getAsFile()));
                    } else if (entry.isDirectory) {
                        _results.push(this._addFilesFromDirectory(entry, entry.name));
                    } else {
                        _results.push(void 0);
                    }
                } else if (item.getAsFile != null) {
                    if ((item.kind == null) || item.kind === "file") {
                        _results.push(this.addFile(item.getAsFile()));
                    } else {
                        _results.push(void 0);
                    }
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromDirectory = function (directory, path) {
            var dirReader, entriesReader;
            dirReader = directory.createReader();
            entriesReader = (function (_this) {
                return function (entries) {
                    var entry, _i, _len;
                    for (_i = 0, _len = entries.length; _i < _len; _i++) {
                        entry = entries[_i];
                        if (entry.isFile) {
                            entry.file(function (file) {
                                if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                                    return;
                                }
                                file.fullPath = "" + path + "/" + file.name;
                                return _this.addFile(file);
                            });
                        } else if (entry.isDirectory) {
                            _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                        }
                    }
                };
            })(this);
            return dirReader.readEntries(entriesReader, function (error) {
                return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
            });
        };

        Dropzone.prototype.accept = function (file, done) {
            if (file.size > this.options.maxFilesize * 1024 * 1024) {
                return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
            } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
                return done(this.options.dictInvalidFileType);
            } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                return this.emit("maxfilesexceeded", file);
            } else {
                return this.options.accept.call(this, file, done);
            }
        };

        Dropzone.prototype.addFile = function (file) {
            file.upload = {
                progress: 0,
                total: file.size,
                bytesSent: 0
            };
            this.files.push(file);
            file.status = Dropzone.ADDED;
            this.emit("addedfile", file);
            this._enqueueThumbnail(file);
            return this.accept(file, (function (_this) {
                return function (error) {
                    if (error) {
                        file.accepted = false;
                        _this._errorProcessing([file], error);
                    } else {
                        file.accepted = true;
                        if (_this.options.autoQueue) {
                            _this.enqueueFile(file);
                        }
                    }
                    return _this._updateMaxFilesReachedClass();
                };
            })(this));
        };

        Dropzone.prototype.enqueueFiles = function (files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                this.enqueueFile(file);
            }
            return null;
        };

        Dropzone.prototype.enqueueFile = function (file) {
            if (file.status === Dropzone.ADDED && file.accepted === true) {
                file.status = Dropzone.QUEUED;
                if (this.options.autoProcessQueue) {
                    return setTimeout(((function (_this) {
                        return function () {
                            return _this.processQueue();
                        };
                    })(this)), 0);
                }
            } else {
                throw new Error("This file can't be queued because it has already been processed or was rejected.");
            }
        };

        Dropzone.prototype._thumbnailQueue = [];

        Dropzone.prototype._processingThumbnail = false;

        Dropzone.prototype._enqueueThumbnail = function (file) {
            if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                this._thumbnailQueue.push(file);
                return setTimeout(((function (_this) {
                    return function () {
                        return _this._processThumbnailQueue();
                    };
                })(this)), 0);
            }
        };

        Dropzone.prototype._processThumbnailQueue = function () {
            if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                return;
            }
            this._processingThumbnail = true;
            return this.createThumbnail(this._thumbnailQueue.shift(), (function (_this) {
                return function () {
                    _this._processingThumbnail = false;
                    return _this._processThumbnailQueue();
                };
            })(this));
        };

        Dropzone.prototype.removeFile = function (file) {
            if (file.status === Dropzone.UPLOADING) {
                this.cancelUpload(file);
            }
            this.files = without(this.files, file);
            this.emit("removedfile", file);
            if (this.files.length === 0) {
                return this.emit("reset");
            }
        };

        Dropzone.prototype.removeAllFiles = function (cancelIfNecessary) {
            var file, _i, _len, _ref;
            if (cancelIfNecessary == null) {
                cancelIfNecessary = false;
            }
            _ref = this.files.slice();
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                    this.removeFile(file);
                }
            }
            return null;
        };

        Dropzone.prototype.createThumbnail = function (file, callback) {
            var fileReader;
            fileReader = new FileReader;
            fileReader.onload = (function (_this) {
                return function () {
                    if (file.type === "image/svg+xml") {
                        _this.emit("thumbnail", file, fileReader.result);
                        if (callback != null) {
                            callback();
                        }
                        return;
                    }
                    return _this.createThumbnailFromUrl(file, fileReader.result, callback);
                };
            })(this);
            return fileReader.readAsDataURL(file);
        };

        Dropzone.prototype.createThumbnailFromUrl = function (file, imageUrl, callback, crossOrigin) {
            var img;
            img = document.createElement("img");
            if (crossOrigin) {
                img.crossOrigin = crossOrigin;
            }
            img.onload = (function (_this) {
                return function () {
                    var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                    file.width = img.width;
                    file.height = img.height;
                    resizeInfo = _this.options.resize.call(_this, file);
                    if (resizeInfo.trgWidth == null) {
                        resizeInfo.trgWidth = resizeInfo.optWidth;
                    }
                    if (resizeInfo.trgHeight == null) {
                        resizeInfo.trgHeight = resizeInfo.optHeight;
                    }
                    canvas = document.createElement("canvas");
                    ctx = canvas.getContext("2d");
                    canvas.width = resizeInfo.trgWidth;
                    canvas.height = resizeInfo.trgHeight;
                    drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    thumbnail = canvas.toDataURL("image/png");
                    _this.emit("thumbnail", file, thumbnail);
                    if (callback != null) {
                        return callback();
                    }
                };
            })(this);
            if (callback != null) {
                img.onerror = callback;
            }
            return img.src = imageUrl;
        };

        Dropzone.prototype.processQueue = function () {
            var i, parallelUploads, processingLength, queuedFiles;
            parallelUploads = this.options.parallelUploads;
            processingLength = this.getUploadingFiles().length;
            i = processingLength;
            if (processingLength >= parallelUploads) {
                return;
            }
            queuedFiles = this.getQueuedFiles();
            if (!(queuedFiles.length > 0)) {
                return;
            }
            if (this.options.uploadMultiple) {
                return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
            } else {
                while (i < parallelUploads) {
                    if (!queuedFiles.length) {
                        return;
                    }
                    this.processFile(queuedFiles.shift());
                    i++;
                }
            }
        };

        Dropzone.prototype.processFile = function (file) {
            return this.processFiles([file]);
        };

        Dropzone.prototype.processFiles = function (files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.processing = true;
                file.status = Dropzone.UPLOADING;
                this.emit("processing", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("processingmultiple", files);
            }
            return this.uploadFiles(files);
        };

        Dropzone.prototype._getFilesWithXhr = function (xhr) {
            var file, files;
            return files = (function () {
                var _i, _len, _ref, _results;
                _ref = this.files;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    if (file.xhr === xhr) {
                        _results.push(file);
                    }
                }
                return _results;
            }).call(this);
        };

        Dropzone.prototype.cancelUpload = function (file) {
            var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
            if (file.status === Dropzone.UPLOADING) {
                groupedFiles = this._getFilesWithXhr(file.xhr);
                for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
                    groupedFile = groupedFiles[_i];
                    groupedFile.status = Dropzone.CANCELED;
                }
                file.xhr.abort();
                for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
                    groupedFile = groupedFiles[_j];
                    this.emit("canceled", groupedFile);
                }
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", groupedFiles);
                }
            } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
                file.status = Dropzone.CANCELED;
                this.emit("canceled", file);
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", [file]);
                }
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        resolveOption = function () {
            var args, option;
            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (typeof option === 'function') {
                return option.apply(this, args);
            }
            return option;
        };

        Dropzone.prototype.uploadFile = function (file) {
            return this.uploadFiles([file]);
        };

        Dropzone.prototype.uploadFiles = function (files) {
            var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
            xhr = new XMLHttpRequest();
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.xhr = xhr;
            }
            method = resolveOption(this.options.method, files);
            url = resolveOption(this.options.url, files);
            xhr.open(method, url, true);
            xhr.withCredentials = !!this.options.withCredentials;
            response = null;
            handleError = (function (_this) {
                return function () {
                    var _j, _len1, _results;
                    _results = [];
                    for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                        file = files[_j];
                        _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
                    }
                    return _results;
                };
            })(this);
            updateProgress = (function (_this) {
                return function (e) {
                    var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
                    if (e != null) {
                        progress = 100 * e.loaded / e.total;
                        for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                            file = files[_j];
                            file.upload = {
                                progress: progress,
                                total: e.total,
                                bytesSent: e.loaded
                            };
                        }
                    } else {
                        allFilesFinished = true;
                        progress = 100;
                        for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
                            file = files[_k];
                            if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                                allFilesFinished = false;
                            }
                            file.upload.progress = progress;
                            file.upload.bytesSent = file.upload.total;
                        }
                        if (allFilesFinished) {
                            return;
                        }
                    }
                    _results = [];
                    for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
                        file = files[_l];
                        _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
                    }
                    return _results;
                };
            })(this);
            xhr.onload = (function (_this) {
                return function (e) {
                    var _ref;
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    if (xhr.readyState !== 4) {
                        return;
                    }
                    response = xhr.responseText;
                    if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                        try {
                            response = JSON.parse(response);
                        } catch (_error) {
                            e = _error;
                            response = "Invalid JSON response from server.";
                        }
                    }
                    updateProgress();
                    if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
                        return handleError();
                    } else {
                        return _this._finished(files, response, e);
                    }
                };
            })(this);
            xhr.onerror = (function (_this) {
                return function () {
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    return handleError();
                };
            })(this);
            progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
            progressObj.onprogress = updateProgress;
            headers = {
                "Accept": "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            };
            if (this.options.headers) {
                extend(headers, this.options.headers);
            }
            for (headerName in headers) {
                headerValue = headers[headerName];
                if (headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                }
            }
            formData = new FormData();
            if (this.options.params) {
                _ref1 = this.options.params;
                for (key in _ref1) {
                    value = _ref1[key];
                    formData.append(key, value);
                }
            }
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                file = files[_j];
                this.emit("sending", file, xhr, formData);
            }
            if (this.options.uploadMultiple) {
                this.emit("sendingmultiple", files, xhr, formData);
            }
            if (this.element.tagName === "FORM") {
                _ref2 = this.element.querySelectorAll("input, textarea, select, button");
                for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                    input = _ref2[_k];
                    inputName = input.getAttribute("name");
                    inputType = input.getAttribute("type");
                    if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                        _ref3 = input.options;
                        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                            option = _ref3[_l];
                            if (option.selected) {
                                formData.append(inputName, option.value);
                            }
                        }
                    } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
                        formData.append(inputName, input.value);
                    }
                }
            }
            for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
                formData.append(this._getParamName(i), files[i], files[i].name);
            }
            return this.submitRequest(xhr, formData, files);
        };

        Dropzone.prototype.submitRequest = function (xhr, formData, files) {
            return xhr.send(formData);
        };

        Dropzone.prototype._finished = function (files, responseText, e) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.SUCCESS;
                this.emit("success", file, responseText, e);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("successmultiple", files, responseText, e);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        Dropzone.prototype._errorProcessing = function (files, message, xhr) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.ERROR;
                this.emit("error", file, message, xhr);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("errormultiple", files, message, xhr);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        return Dropzone;

    })(Emitter);

    Dropzone.version = "4.2.0";

    Dropzone.options = {};

    Dropzone.optionsForElement = function (element) {
        if (element.getAttribute("id")) {
            return Dropzone.options[camelize(element.getAttribute("id"))];
        } else {
            return void 0;
        }
    };

    Dropzone.instances = [];

    Dropzone.forElement = function (element) {
        if (typeof element === "string") {
            element = document.querySelector(element);
        }
        if ((element != null ? element.dropzone : void 0) == null) {
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        }
        return element.dropzone;
    };

    Dropzone.autoDiscover = true;

    Dropzone.discover = function () {
        var checkElements, dropzone, dropzones, _i, _len, _results;
        if (document.querySelectorAll) {
            dropzones = document.querySelectorAll(".dropzone");
        } else {
            dropzones = [];
            checkElements = function (elements) {
                var el, _i, _len, _results;
                _results = [];
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )dropzone($| )/.test(el.className)) {
                        _results.push(dropzones.push(el));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            };
            checkElements(document.getElementsByTagName("div"));
            checkElements(document.getElementsByTagName("form"));
        }
        _results = [];
        for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
            dropzone = dropzones[_i];
            if (Dropzone.optionsForElement(dropzone) !== false) {
                _results.push(new Dropzone(dropzone));
            } else {
                _results.push(void 0);
            }
        }
        return _results;
    };

    Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

    Dropzone.isBrowserSupported = function () {
        var capableBrowser, regex, _i, _len, _ref;
        capableBrowser = true;
        if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
            if (!("classList" in document.createElement("a"))) {
                capableBrowser = false;
            } else {
                _ref = Dropzone.blacklistedBrowsers;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    regex = _ref[_i];
                    if (regex.test(navigator.userAgent)) {
                        capableBrowser = false;
                        continue;
                    }
                }
            }
        } else {
            capableBrowser = false;
        }
        return capableBrowser;
    };

    without = function (list, rejectedItem) {
        var item, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = list.length; _i < _len; _i++) {
            item = list[_i];
            if (item !== rejectedItem) {
                _results.push(item);
            }
        }
        return _results;
    };

    camelize = function (str) {
        return str.replace(/[\-_](\w)/g, function (match) {
            return match.charAt(1).toUpperCase();
        });
    };

    Dropzone.createElement = function (string) {
        var div;
        div = document.createElement("div");
        div.innerHTML = string;
        return div.childNodes[0];
    };

    Dropzone.elementInside = function (element, container) {
        if (element === container) {
            return true;
        }
        while (element = element.parentNode) {
            if (element === container) {
                return true;
            }
        }
        return false;
    };

    Dropzone.getElement = function (el, name) {
        var element;
        if (typeof el === "string") {
            element = document.querySelector(el);
        } else if (el.nodeType != null) {
            element = el;
        }
        if (element == null) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
        }
        return element;
    };

    Dropzone.getElements = function (els, name) {
        var e, el, elements, _i, _j, _len, _len1, _ref;
        if (els instanceof Array) {
            elements = [];
            try {
                for (_i = 0, _len = els.length; _i < _len; _i++) {
                    el = els[_i];
                    elements.push(this.getElement(el, name));
                }
            } catch (_error) {
                e = _error;
                elements = null;
            }
        } else if (typeof els === "string") {
            elements = [];
            _ref = document.querySelectorAll(els);
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                el = _ref[_j];
                elements.push(el);
            }
        } else if (els.nodeType != null) {
            elements = [els];
        }
        if (!((elements != null) && elements.length)) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        }
        return elements;
    };

    Dropzone.confirm = function (question, accepted, rejected) {
        if (window.confirm(question)) {
            return accepted();
        } else if (rejected != null) {
            return rejected();
        }
    };

    Dropzone.isValidFile = function (file, acceptedFiles) {
        var baseMimeType, mimeType, validType, _i, _len;
        if (!acceptedFiles) {
            return true;
        }
        acceptedFiles = acceptedFiles.split(",");
        mimeType = file.type;
        baseMimeType = mimeType.replace(/\/.*$/, "");
        for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
            validType = acceptedFiles[_i];
            validType = validType.trim();
            if (validType.charAt(0) === ".") {
                if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                    return true;
                }
            } else if (/\/\*$/.test(validType)) {
                if (baseMimeType === validType.replace(/\/.*$/, "")) {
                    return true;
                }
            } else {
                if (mimeType === validType) {
                    return true;
                }
            }
        }
        return false;
    };

    if (typeof jQuery !== "undefined" && jQuery !== null) {
        jQuery.fn.dropzone = function (options) {
            return this.each(function () {
                return new Dropzone(this, options);
            });
        };
    }

    if (typeof module !== "undefined" && module !== null) {
        module.exports = Dropzone;
    } else {
        window.Dropzone = Dropzone;
    }

    Dropzone.ADDED = "added";

    Dropzone.QUEUED = "queued";

    Dropzone.ACCEPTED = Dropzone.QUEUED;

    Dropzone.UPLOADING = "uploading";

    Dropzone.PROCESSING = Dropzone.UPLOADING;

    Dropzone.CANCELED = "canceled";

    Dropzone.ERROR = "error";

    Dropzone.SUCCESS = "success";


    /*

     Bugfix for iOS 6 and 7
     Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
     based on the work of https://github.com/stomita/ios-imagefile-megapixel
     */

    detectVerticalSquash = function (img) {
        var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
        iw = img.naturalWidth;
        ih = img.naturalHeight;
        canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = ih;
        ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        data = ctx.getImageData(0, 0, 1, ih).data;
        sy = 0;
        ey = ih;
        py = ih;
        while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        ratio = py / ih;
        if (ratio === 0) {
            return 1;
        } else {
            return ratio;
        }
    };

    drawImageIOSFix = function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        var vertSquashRatio;
        vertSquashRatio = detectVerticalSquash(img);
        return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
    };


    /*
     * contentloaded.js
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     */

    contentLoaded = function (win, fn) {
        var add, doc, done, init, poll, pre, rem, root, top;
        done = false;
        top = true;
        doc = win.document;
        root = doc.documentElement;
        add = (doc.addEventListener ? "addEventListener" : "attachEvent");
        rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
        pre = (doc.addEventListener ? "" : "on");
        init = function (e) {
            if (e.type === "readystatechange" && doc.readyState !== "complete") {
                return;
            }
            (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
            if (!done && (done = true)) {
                return fn.call(win, e.type || e);
            }
        };
        poll = function () {
            var e;
            try {
                root.doScroll("left");
            } catch (_error) {
                e = _error;
                setTimeout(poll, 50);
                return;
            }
            return init("poll");
        };
        if (doc.readyState !== "complete") {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (_error) {}
                if (top) {
                    poll();
                }
            }
            doc[add](pre + "DOMContentLoaded", init, false);
            doc[add](pre + "readystatechange", init, false);
            return win[add](pre + "load", init, false);
        }
    };

    Dropzone._autoDiscoverFunction = function () {
        if (Dropzone.autoDiscover) {
            return Dropzone.discover();
        }
    };

    contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =
(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var checkText = option.text === params.term;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery'
], function ($) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return $.data($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
/*jquery.cookie.js*/
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
/*jquery.matchHeight.js*/
/**
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = '0.7.0';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});
/*modernizr.js*/
/* Modernizr 2.7.1 (Custom Build) | rePack WEZOM | Oleg Dutchenko | 18.05.2015 */

window.Modernizr = (function(window, document, undefined) {
    var version = '2.7.1', Modernizr = {}, enableClasses = true, docElement = document.documentElement, mod = 'modernizr', modElem = document.createElement(mod), mStyle = modElem.style, inputElem = document.createElement('input'), smile = ':)', toString = {}.toString, prefixes = ' -webkit- -moz- -o- -ms- '.split(' '), omPrefixes = 'Webkit Moz O ms', cssomPrefixes = omPrefixes.split(' '), domPrefixes = omPrefixes.toLowerCase().split(' '), ns = {'svg': 'http://www.w3.org/2000/svg'}, tests = {}, inputs = {}, attrs = {}, classes = [], slice = classes.slice, featureName, injectElementWithStyles = function(rule, callback, nodes, testnames) {var style, ret, node, docOverflow, div = document.createElement('div'), body = document.body, fakeBody = body || document.createElement('body'); if (parseInt(nodes, 10)) {while (nodes--) {node = document.createElement('div'); node.id = testnames ? testnames[nodes] : mod + (nodes + 1); div.appendChild(node); } } style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join(''); div.id = mod; (body ? div : fakeBody).innerHTML += style; fakeBody.appendChild(div); if (!body) {fakeBody.style.background = ''; fakeBody.style.overflow = 'hidden'; docOverflow = docElement.style.overflow; docElement.style.overflow = 'hidden'; docElement.appendChild(fakeBody); } ret = callback(div, rule); if (!body) {fakeBody.parentNode.removeChild(fakeBody); docElement.style.overflow = docOverflow; } else {div.parentNode.removeChild(div); } return !!ret; }, testMediaQuery = function(mq) {var matchMedia = window.matchMedia || window.msMatchMedia; if (matchMedia) {return matchMedia(mq).matches; } var bool; injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function(node) {bool = (window.getComputedStyle ? getComputedStyle(node, null) : node.currentStyle)['position'] == 'absolute'; }); return bool; }, isEventSupported = (function() {var TAGNAMES = {'select': 'input', 'change': 'input', 'submit': 'form', 'reset': 'form', 'error': 'img', 'load': 'img', 'abort': 'img'}; function isEventSupported(eventName, element) {element = element || document.createElement(TAGNAMES[eventName] || 'div'); eventName = 'on' + eventName; var isSupported = eventName in element; if (!isSupported) {if (!element.setAttribute) {element = document.createElement('div'); } if (element.setAttribute && element.removeAttribute) {element.setAttribute(eventName, ''); isSupported = is(element[eventName], 'function'); if (!is(element[eventName], 'undefined')) {element[eventName] = undefined; } element.removeAttribute(eventName); } } element = null; return isSupported; } return isEventSupported; })(), _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {hasOwnProp = function(object, property) {return _hasOwnProperty.call(object, property); }; } else {hasOwnProp = function(object, property) {return ((property in object) && is(object.constructor.prototype[property], 'undefined')); }; }
    if (!Function.prototype.bind) {Function.prototype.bind = function bind(that) {var target = this; if (typeof target != "function") {throw new TypeError(); } var args = slice.call(arguments, 1), bound = function() {if (this instanceof bound) {var F = function() {}; F.prototype = target.prototype; var self = new F(); var result = target.apply(self, args.concat(slice.call(arguments)) ); if (Object(result) === result) {return result; } return self; } else {return target.apply(that, args.concat(slice.call(arguments)) ); } }; return bound; }; }

    function setCss(str) {mStyle.cssText = str; }
    function setCssAll(str1, str2) {return setCss(prefixes.join(str1 + ';') + (str2 || '')); }
    function is(obj, type) {return typeof obj === type; }
    function contains(str, substr) {return !!~('' + str).indexOf(substr); }
    function testProps(props, prefixed) {for (var i in props) {var prop = props[i]; if (!contains(prop, "-") && mStyle[prop] !== undefined) {return prefixed == 'pfx' ? prop : true; } } return false; }
    function testDOMProps(props, obj, elem) {for (var i in props) {var item = obj[props[i]]; if (item !== undefined) {if (elem === false) return props[i]; if (is(item, 'function')) {return item.bind(elem || obj); } return item; } } return false; }
    function testPropsAll(prop, prefixed, elem) {var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' '); if (is(prefixed, "string") || is(prefixed, "undefined")) {return testProps(props, prefixed); } else {props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' '); return testDOMProps(props, prefixed, elem); } }

    tests['touch'] = function() {var bool; if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {bool = true; } else {injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function(node) {bool = node.offsetTop === 9; }); } return bool; };
    tests['mobile'] = function() {var mobile = navigator.userAgent.toLowerCase(); var bool = mobile.indexOf('mobile') > 0; return bool; };
    tests['flexbox'] = function() {return testPropsAll('flexWrap'); };
    tests['flexboxlegacy'] = function() {return testPropsAll('boxDirection'); };
    tests['canvas'] = function() {var elem = document.createElement('canvas'); return !!(elem.getContext && elem.getContext('2d')); };
    //tests['canvastext'] = function() {return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function')); };
    tests['webgl'] = function() {return !!window.WebGLRenderingContext; };
    //tests['geolocation'] = function() {return 'geolocation' in navigator; };
    //tests['postmessage'] = function() {return !!window.postMessage; };
    //tests['websqldatabase'] = function() {return !!window.openDatabase; };
    //tests['indexedDB'] = function() {return !!testPropsAll("indexedDB", window); };
    //tests['hashchange'] = function() {return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7); };
    //tests['history'] = function() {return !!(window.history && history.pushState); };
    //tests['draganddrop'] = function() {var div = document.createElement('div'); return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div); };
    tests['websockets'] = function() {return 'WebSocket' in window || 'MozWebSocket' in window; };
    //tests['rgba'] = function() {setCss('background-color:rgba(150,255,150,.5)'); return contains(mStyle.backgroundColor, 'rgba'); };
    //tests['hsla'] = function() {setCss('background-color:hsla(120,40%,100%,.5)'); return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla'); };
    //tests['multiplebgs'] = function() {setCss('background:url(https://),url(https://),red url(https://)'); return (/(url\s*\(.*?){3}/).test(mStyle.background); };
    //tests['backgroundsize'] = function() {return testPropsAll('backgroundSize'); };
    tests['borderimage'] = function() {return testPropsAll('borderImage'); };
    //tests['borderradius'] = function() {return testPropsAll('borderRadius'); };
    //tests['boxshadow'] = function() {return testPropsAll('boxShadow'); };
    //tests['textshadow'] = function() {return document.createElement('div').style.textShadow === ''; };
    //tests['opacity'] = function() {setCssAll('opacity:.55'); return (/^0.55$/).test(mStyle.opacity); };
    tests['cssanimations'] = function() {return testPropsAll('animationName'); };
    tests['csscolumns'] = function() {return testPropsAll('columnCount'); };
    //tests['cssgradients'] = function() {var str1 = 'background-image:', str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));', str3 = 'linear-gradient(left top,#9f9, white);'; setCss((str1 + '-webkit- '.split(' ').join(str2 + str1) + prefixes.join(str3 + str1)).slice(0, -str1.length) ); return contains(mStyle.backgroundImage, 'gradient'); };
    tests['cssreflections'] = function() {return testPropsAll('boxReflect'); };
    //tests['csstransforms'] = function() {return !!testPropsAll('transform'); };
    //tests['csstransforms3d'] = function() {var ret = !!testPropsAll('perspective'); if (ret && 'webkitPerspective' in docElement.style) {injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function(node, rule) {ret = node.offsetLeft === 9 && node.offsetHeight === 3; }); } return ret; };
    //tests['csstransitions'] = function() {return testPropsAll('transition'); };
    //tests['fontface'] = function() {var bool; injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {var style = document.getElementById('smodernizr'), sheet = style.sheet || style.styleSheet, cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : ''; bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0; }); return bool; };
    //tests['generatedcontent'] = function() {var bool; injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function(node) {bool = node.offsetHeight >= 3; }); return bool; };
    tests['video'] = function() {var elem = document.createElement('video'), bool = false; try {if (bool = !!elem.canPlayType) {bool = new Boolean(bool); bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''); bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''); bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''); } } catch (e) {} return bool; };
    tests['audio'] = function() {var elem = document.createElement('audio'), bool = false; try {if (bool = !!elem.canPlayType) {bool = new Boolean(bool); bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''); bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, ''); bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''); bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, ''); } } catch (e) {} return bool; };
    tests['localstorage'] = function() {try {localStorage.setItem(mod, mod); localStorage.removeItem(mod); return true; } catch (e) {return false; } };
    tests['sessionstorage'] = function() {try {sessionStorage.setItem(mod, mod); sessionStorage.removeItem(mod); return true; } catch (e) {return false; } };
    tests['webworkers'] = function() {return !!window.Worker; };
    //tests['applicationcache'] = function() {return !!window.applicationCache; };
    tests['svg'] = function() {return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect; };
    tests['inlinesvg'] = function() {var div = document.createElement('div'); div.innerHTML = '<svg/>'; return (div.firstChild && div.firstChild.namespaceURI) == ns.svg; };
    //tests['smil'] = function() {return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate'))); };
    //tests['svgclippaths'] = function() {return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath'))); };
    // retina test
    tests['retina'] = function() {var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1; var flag = dpr > 1;  return !!flag;};
    // @wezom browser test's
    tests['moz'] = function() {return typeof InstallTrigger !== 'undefined'; };
    tests['safari'] = function() {return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0; };
    tests['o'] = function() {return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; };
    tests['chrome'] = function() {return !!window.chrome && !window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; };
    tests['webkit'] = function() {return 'WebkitAppearance' in docElement.style; };
    tests['ie'] = function() {return /*@cc_on!@*/ false || document.documentMode; };
    tests['ie8'] = function() {return (document.all && !document.addEventListener); };
    tests['ie9'] = function() {return (document.all && !window.atob && !!document.addEventListener); };
    tests['ie10'] = function() {return (document.all && !!window.atob && !!document.addEventListener); };
    tests['ie11']=function(){return !!navigator.userAgent.match(/Trident.*rv[ :]*11\./); };
    // platform
    function returnPlatform(str){return navigator.platform.toLowerCase().indexOf(str)>=0;}
    tests['win']=function(){return returnPlatform('win');};
    tests['linux']=function(){return returnPlatform('linux');};
    tests['mac']=function(){return returnPlatform('mac');};
    tests['maclike']=function(){return navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;};
    tests['ios']=function(){return navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false; };
    // @wezom device tests
    var vendors = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tv|tablet|opera mini|nexus 7)/i);
    if (vendors !== null && vendors[0].length) {
        var vName = vendors[0];
        tests[vName] = function() {
            return true; //sdfsdfsdf
        };
        var vObj = {
            Android:[['Android 2.','2'],['Android 3.','3'],['Android 4.','4'],['Android 5.','5'],['Android 6.','6']],
            iPad:[['OS 4','2'],['OS 7','4']],
            iPhone:[['OS 4','4'],['OS 7', '5'],['OS 8','6']],
            Tablet:[['OS 1','1'],['OS 2', '2']],
            Mobi:[['Windows Phone','windows-phone']]
        };
        if (!!vObj[vName]) {
            for (var i = 0; i < vObj[vName].length; i++) {
                if (navigator.userAgent.match(vObj[vName][i][0])) {
                    if (vObj[vName][i][0] === 'Windows Phone') {
                        tests[vObj[vName][i][1]] = function() {
                            return true;
                        };
                    } else {
                        tests[vName + '' + vObj[vName][i][1]] = function() {
                            return true;
                        };
                    }
                }
            }
        }
    }

    function webforms() {Modernizr['input'] = (function(props) {for (var i = 0, len = props.length; i < len; i++) {attrs[props[i]] = !! (props[i] in inputElem); } if (attrs.list) {attrs.list = !! (document.createElement('datalist') && window.HTMLDataListElement); } return attrs; })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' ')); Modernizr['inputtypes'] = (function(props) {for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {inputElem.setAttribute('type', inputElemType = props[i]); bool = inputElem.type !== 'text'; if (bool) {inputElem.value = smile; inputElem.style.cssText = 'position:absolute;visibility:hidden;'; if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {docElement.appendChild(inputElem); defaultView = document.defaultView; bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' && (inputElem.offsetHeight !== 0); docElement.removeChild(inputElem); } else if (/^(search|tel)$/.test(inputElemType)) {} else if (/^(url|email)$/.test(inputElemType)) {bool = inputElem.checkValidity && inputElem.checkValidity() === false; } else {bool = inputElem.value != smile; } } inputs[props[i]] = !! bool; } return inputs; })('search tel url email datetime date month week time datetime-local number range color'.split(' ')); }
    for (var feature in tests) {if (hasOwnProp(tests, feature)) {featureName = feature.toLowerCase(); Modernizr[featureName] = tests[feature](); classes.push((Modernizr[featureName] ? '' : 'no-') + featureName); } }
    Modernizr.input || webforms();
    Modernizr.addTest = function(feature, test) {if (typeof feature == 'object') {for (var key in feature) {if (hasOwnProp(feature, key)) {Modernizr.addTest(key, feature[key]); } } } else {feature = feature.toLowerCase(); if (Modernizr[feature] !== undefined) {return Modernizr; } test = typeof test == 'function' ? test() : test; if (typeof enableClasses !== "undefined" && enableClasses) {docElement.className += ' ' + (test ? '' : 'no-') + feature; } Modernizr[feature] = test; } return Modernizr; };
    setCss('');
    modElem = inputElem = null;

    (function(window, document) {
        var version = '3.7.0';
        var options = window.html5 || {};
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
        var supportsHtml5Styles;
        var expando = '_html5shiv';
        var expanID = 0;
        var expandoData = {};
        var supportsUnknownElements;
        (function() {try {var a = document.createElement('a'); a.innerHTML = '<xyz></xyz>'; supportsHtml5Styles = ('hidden' in a); supportsUnknownElements = a.childNodes.length == 1 || (function() {(document.createElement)('a'); var frag = document.createDocumentFragment(); return (typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined'); }()); } catch (e) {supportsHtml5Styles = true; supportsUnknownElements = true; } }());
        function addStyleSheet(ownerDocument, cssText) {var p = ownerDocument.createElement('p'), parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement; p.innerHTML = 'x<style>' + cssText + '</style>'; return parent.insertBefore(p.lastChild, parent.firstChild); }
        function getElements() {var elements = html5.elements; return typeof elements == 'string' ? elements.split(' ') : elements; }
        function getExpandoData(ownerDocument) {var data = expandoData[ownerDocument[expando]]; if (!data) {data = {}; expanID++; ownerDocument[expando] = expanID; expandoData[expanID] = data; } return data; }
        function createElement(nodeName, ownerDocument, data) {if (!ownerDocument) {ownerDocument = document; } if (supportsUnknownElements) {return ownerDocument.createElement(nodeName); } if (!data) {data = getExpandoData(ownerDocument); } var node; if (data.cache[nodeName]) {node = data.cache[nodeName].cloneNode(); } else if (saveClones.test(nodeName)) {node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode(); } else {node = data.createElem(nodeName); } return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node; }
        function createDocumentFragment(ownerDocument, data) {if (!ownerDocument) {ownerDocument = document; } if (supportsUnknownElements) {return ownerDocument.createDocumentFragment(); } data = data || getExpandoData(ownerDocument); var clone = data.frag.cloneNode(), i = 0, elems = getElements(), l = elems.length; for (; i < l; i++) {clone.createElement(elems[i]); } return clone; }
        function shivMethods(ownerDocument, data) {if (!data.cache) {data.cache = {}; data.createElem = ownerDocument.createElement; data.createFrag = ownerDocument.createDocumentFragment; data.frag = data.createFrag(); } ownerDocument.createElement = function(nodeName) {if (!html5.shivMethods) {return data.createElem(nodeName); } return createElement(nodeName, ownerDocument, data); }; ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' + 'var n=f.cloneNode(),c=n.createElement;' + 'h.shivMethods&&(' + getElements().join().replace(/[\w\-]+/g, function(nodeName) {data.createElem(nodeName); data.frag.createElement(nodeName); return 'c("' + nodeName + '")'; }) + ');return n}')(html5, data.frag); }
        function shivDocument(ownerDocument) {if (!ownerDocument) {ownerDocument = document; } var data = getExpandoData(ownerDocument); if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {data.hasCSS = !! addStyleSheet(ownerDocument, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' + 'mark{background:#FF0;color:#000}' + 'template{display:none}'); } if (!supportsUnknownElements) {shivMethods(ownerDocument, data); } return ownerDocument; }
        var html5 = {'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video', 'version': version, 'shivCSS': (options.shivCSS !== false), 'supportsUnknownElements': supportsUnknownElements, 'shivMethods': (options.shivMethods !== false), 'type': 'default', 'shivDocument': shivDocument, createElement: createElement, createDocumentFragment: createDocumentFragment };
        window.html5 = html5;
        shivDocument(document);
    }(this, document));

    Modernizr._version = version;
    Modernizr._prefixes = prefixes;
    Modernizr._domPrefixes = domPrefixes;
    Modernizr._cssomPrefixes = cssomPrefixes;
    Modernizr.mq = testMediaQuery;
    Modernizr.hasEvent = isEventSupported;
    Modernizr.testProp = function(prop) {return testProps([prop]); };
    Modernizr.testAllProps = testPropsAll;
    Modernizr.testStyles = injectElementWithStyles;
    Modernizr.prefixed = function(prop, obj, elem) {if (!obj) {return testPropsAll(prop, 'pfx'); } else {return testPropsAll(prop, obj, elem); } };
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};

/*test add*/
    Modernizr.addTest("viewport",function(){var bool; Modernizr.testStyles("#modernizr { width: 50vw; }",function(elem,rule){var width=parseInt(window.innerWidth/2,10),compStyle=parseInt((window.getComputedStyle ? getComputedStyle(elem,null) : elem.currentStyle)["width"],10); bool=!!(compStyle==width);}); return bool; });
    Modernizr.addTest('csscalc', function() {var prop='width:',value='calc(10px);',el=document.createElement('div'); el.style.cssText=prop+Modernizr._prefixes.join(value+prop); return !!el.style.length; });;
    // windows OS
    var winOS=[['win2000','5.0'],['winxp','5.1'],['winvista','6.0'],['win7','6.1'],['win8','6.2'],['win10','10']];
    for (var i=0;i<winOS.length;i++){var tName=winOS[i][0]; var tVal=winOS[i][1]; Modernizr.addTest(tName,function(){var ua=navigator.userAgent.toLowerCase(); var wos=ua.indexOf('windows nt '+tVal)>0; if(tName==='win8'&&!wos){wos=ua.indexOf('windows nt 6.3')>0; } return wos; }); }
/*wpreloader.js*/
/*
    wPreloader v3.0 / core js file
    WEZOM Studio / Oleg Dutchenko
*/

window.wPreloader = (function(window, document, undefined) {

    /* Приватные переменные */

        var wpr = Object.create(null),
            _pref = 'wpreloader_',
            _timer,
            _array = ['wraper', 'holder', 'ready', 'show', 'block', 'removing'];
            _options = {
                delay: 300,
                block: false,
                mainClass: false,
                markup: '<div class="wpreloader_logo"><ul><li><span></span><span></span></li><li><span></span><span></span></li></ul></div>'
            };

    /* Приватные функции */

        var _getEl = function(where, who) {
                return where.getElementsByClassName(who);
            },

            _crtEl = function(className) {
                var div = document.createElement('div');
                if (className) {
                    div.classList.add(className);
                }
                return div;
            },

            _className = function(num) {
                return _pref + _array[num];
            },

            _showNow = function(wraper, options) {
                wraper.classList.add(_className(3));
                if (options.block) {
                    wraper.classList.add(_className(4));
                }
                if (options.mainClass) {
                    wraper.setAttribute('data-mainclass', options.mainClass);
                    wraper.classList.add(options.mainClass);
                }
                setTimeout(function() {
                    wraper.classList.add(_className(2));
                }, 10);
            },

            _findPreloader = function(wraper) {
                var preloader, elem = _getEl(wraper, _className(0));
                if (elem[0]) {
                    preloader = elem[0];
                } else {
                    preloader = false;
                }
                return preloader;
            },

            _cloneObj = function(object) {
                var newObj = {}, key;
                for (key in object) {
                    newObj[key] = object[key];
                }
                return newObj;
            },

            _extend = function(options) {
                var opts = _cloneObj(_options);
                if (typeof options === 'object') {
                    for (var key in options) {
                        if (_options.hasOwnProperty(key)) {
                            opts[key] = options[key];
                        }
                    }
                }
                return opts;
            },

            _build = function(wraper, options) {
                var holderWraper = _crtEl(_className(0));
                var holder = _crtEl(_className(1));
                holder.innerHTML = options.markup;
                holderWraper.setAttribute('data-delay', options.delay);
                holderWraper.appendChild(holder);
                wraper.appendChild(holderWraper);
                _showNow(wraper, options);
            },

            _remove = function(wraper, callback) {
                var preloader = _findPreloader(wraper);
                if (preloader) {
                    var out = preloader.getAttribute('data-delay');
                    var mClass = wraper.getAttribute('data-mainclass');
                    wraper.classList.add(_className(5));
                    clearTimeout(_timer);
                    _timer = setTimeout(function() {
                        if (typeof mClass != 'undefined') {
                            wraper.classList.remove(mClass);
                            wraper.removeAttribute('data-mainclass');
                        }
                        for (var i = 2; i < _array.length; i++) {
                            wraper.classList.remove(_className(i));
                        }
                        wpr.open = false;
                        preloader.remove();
                        if (typeof callback === 'function') {
                            callback.call();
                        }
                    }, out);
                }
            };


    /* методы */

        wpr.show = function(wraper, options) {
            if (wpr.open) {
                console.warn('wpreloader - is open');
                return false;
            } else {
                wpr.open = false;
                var opts = _extend(options);
                var wrapperElement;
                if (opts.block) {
                    wrapperElement = document.body;
                } else {
                    wrapperElement = wraper || document.body;
                }
                if (wrapperElement.length) {
                    for (var i = 0; i < wrapperElement.length; i++) {
                        _build(wrapperElement[i], opts);
                    }
                } else {
                    _build(wrapperElement, opts);
                }
            }
        };

        wpr.hide = function(wraper, callback) {
            var wrapperElement = wraper || document.body;
            if (wrapperElement.length) {
                for (var i = 0; i < wrapperElement.length; i++) {
                    _remove(wrapperElement[i], callback);
                }
            } else {
                _remove(wrapperElement, callback);
            }
        };

        wpr.config = function(obj) {
            for (var key in obj) {
                if (_options.hasOwnProperty(key)) {
                    _options[key] = obj[key];
                }
            }
        };

    return wpr;

})(this, this.document);
//# sourceMappingURL=maps/components.js.map
