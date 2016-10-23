/*init.js*/
window.wHTML = (function($){

        /* Приватные переменные */

        var varSeoIframe = 'seoIframe',
            varSeoTxt = 'seoTxt',
            varSeoClone = 'cloneSeo',
            varSeoDelay = 200;
        /* Приватные функции */


        /* проверка типа данных на объект */
        var _isObject = function(data) {
                var flag = (typeof data == 'object') && (data+'' != 'null');
                return flag;
            },

        /* создание нового элемента элемента */
            _crtEl = function(tag, classes, attrs, jq) {
                var tagName = tag || 'div';
                var element = document.createElement(tagName);
                var jQueryElement = jq || true;
                // если классы объявлены - добавляем
                if (classes) {
                    var tagClasses = classes.split(' ');
                    for (var i = 0; i < tagClasses.length; i++) {
                        element.classList.add(tagClasses[i]);
                    }
                }
                // если атрибуты объявлены - добавляем
                if (_isObject(attrs)) {
                    for (var key in attrs) {
                        var val = attrs[key];
                        element[key] = val;
                    }
                }
                // возвращаем созданый елемент
                if (jQueryElement) {
                    return $(element);
                } else {
                    return element;
                }
            },

        /* создаем iframe для сео текста */
            _seoBuild = function(wrapper) {
                var seoTimer;
                // создаем iframe, который будет следить за resize'm окна
                var iframe = _crtEl('iframe', false, {id: varSeoIframe, name: varSeoIframe});
                iframe.css({
                    'position':'absolute',
                    'left':'0',
                    'top':'0',
                    'width':'100%',
                    'height':'100%',
                    'z-index':'-1'
                });
                // добавляем его в родитель сео текста
                wrapper.prepend(iframe);
                // "прослушка" ресайза
                seoIframe.onresize = function() {
                    clearTimeout(seoTimer);
                    seoTimer = setTimeout(function() {
                        wHTML.seoSet();
                    }, varSeoDelay);
                };
                // вызываем seoSet()
                wHTML.seoSet();
            };

        /* Публичные методы */

        function Methods(){}

        Methods.prototype = {

            /* установка cео текста на странице */
            seoSet: function() {
                if ($('#'+varSeoTxt).length) {
                    var seoText = $('#'+varSeoTxt);
                    var iframe = seoText.children('#'+varSeoIframe);
                    if (iframe.length) {
                        // если iframe сущствует устанавливаем на место сео текст
                        var seoClone = $('#'+varSeoClone);
                        if (seoClone.length) {
                            // клонеру задаем высоту
                            seoClone.height(seoText.outerHeight(true));
                            // тексту задаем позицию
                            seoText.css({
                                top: seoClone.offset().top
                            });
                        } else {
                            // клонера нету - бьем в колокола !!!
                            console.error('"'+varSeoClone+'" - не найден!');
                        }
                    } else {
                        // если iframe отсутствует, создаем его и устанавливаем на место сео текст
                        _seoBuild(seoText);
                    }
                }
            },

            /* magnificPopup ajax */
            mfiAjax: function() {
                $('body').magnificPopup({
                    delegate: '.popup-link',
                    callbacks: {
                        elementParse: function(item) {
                            this.st.ajax.settings = {
                                url: '/_HTML/dist/' + item.el.data('url'),
                                type: 'POST',
                                data: (typeof item.el.data('param') !== 'undefined') ? item.el.data('param') : ''
                            };
                        },
                        ajaxContentAdded: function(el) {
                            wHTML.validation();
                        }
                    },
                    type: 'ajax',
                    removalDelay: 300,
                    mainClass: 'zoom-in'
                });
            },

            mfi: function () {
                $('.mfi').magnificPopup({
                    type: 'inline',
                    closeBtnInside: true,
                    removalDelay: 300,
                    mainClass: 'zoom-in'
                });
            },
        };

        /* Объявление wHTML и базовые свойства */

        var wHTML = $.extend(true, Methods.prototype, {});

        return wHTML;

    })(jQuery);

jQuery(document).ready(function(){
    
    // $('.filter-button').on('click',function(){
    //     var el = $(this);
    //     var cl = el.data('block');
    //     $('.'+cl).stop().slideToggle();
    // });

    wHTML.mfi();
    wHTML.seoSet();
    
    $(window).resize(function(){
            if (Modernizr.mq("screen and (max-width:980px)")) {
                $('.universal-tabs li').matchHeight();
            } else{
                $('.universal-tabs li').removeAttr('style');
            }

            if (Modernizr.mq("screen and (min-width:979px)")) {
                $('.search-form-category').removeAttr('style');
            }
    });
    
    $(".search-form-category select").on("change",function () {
        if($(this).val() == "0") $(this).addClass("empty");
        else $(this).removeClass("empty")
    });
    
    $(".search-form-category select").change();
    
    function recount(){
        var totalPrice = 0;
        $('.up-variants .block input:checkbox:checked').each(function(index,el){
            if ($(el).closest('.block').find('.price span').text() != 'Бесплатно') {
                totalPrice += parseInt($(el).closest('.block').find('.price span').text());
            }
        });
        $('.up-variants .results .count').text(totalPrice);
    }
    
    recount();

    
    $('.fbb1Item4 select').select2({
        dropdownCssClass: "fbb1Item4Select"
    }).on('change', function() {  
    	if($(this).val()){
	    		$(this).parent().addClass('selectStyle')
	    	}else{
	    		$(this).parent().removeClass('selectStyle')
	    	}
        if ($(this).parents().hasClass('wForm')) {
            $(this).closest('.wForm').data('validator').element($(this));
        }
        if (this.id === 'periodSelect' && $('.type-top .price span').length) {
            console.log($(this).select2('data')[0].element.dataset.day);
            $('.type-top .price span').text($(this).select2('data')[0].element.dataset.day*$('#periodSelect').attr('data-perDay'));
            if (!$('.type-top input').attr('checked')) {
                $('.type-top input').prop('checked', true);
                $('.type-top input').closest('.block').addClass('checked');
            }
        }
        recount();
        });
    
    $('.setting-blocks .add_phone').on('click', function(e){
        $('.setting-blocks .flr').append('<div class="wFormRow"><label class="wLabel -warn">Контактный телефон</label><div class="wFormInput"><input type="tel" data-name="phone" class="wInput" name="phone2" data-msg-required="Это поле необходимо заполнить" data-msg-phone="Пожалуйста, введите корректный номер" data-rule-phone="true" value="" required="" aria-required="true"></div></div>');
        $('.setting-blocks .flr').find('.add_phone').remove();
    });
    
    $('.up-variants .block .main').matchHeight();
    
    $('.up-variants .head').on('change','input',function(){
        var el = $(this);
        if(this.checked) {
            el.closest('.block').addClass('checked');
            recount();
        } else{
            el.closest('.block').removeClass('checked');
            recount();
        }
    });
    
    $("#my-awesome-dropzone").dropzone({
	    url: "/",
        acceptedFiles: '.jpg, .png, .jpeg, .gif',
        maxFilesize: 16, //Mb
        maxFiles: 15,
        addRemoveLinks: true,
        thumbnailWidth: 25,
        thumbnailHeight: 20,
        dictDefaultMessage:"Прикрепить файл"
	  });
    

    
    if($('.my-type').length > 0) {
        $('.catalog-list_item.deleted').each(function(index,element){
            $(element).closest('.catalog-list_item').find('.removed').stop().show();
        });
    }
    
    $('body').on('click', '.remove-ad', function(e){
        e.preventDefault();
        var el = $(this);
        //ajax remove ad
        el.closest('.catalog-list_item').append('<div class="removed"><div class="r-inner"><div class="r-title">Это объявление удалено!</div><div class="r-desc">В течении 20 мин. Вы можете его</div><a href="#" class="gray-button">Востановить</a></div></div>');
        el.closest('.catalog-list_item').addClass('deleted');
        el.closest('.catalog-list_item').find('.removed').stop().fadeIn(400);
    });
    
    
    $('body').on('click', '.r-inner .gray-button', function(e){
        e.preventDefault();
        var el = $(this);
        //ajax release ad
        el.closest('.catalog-list_item').removeClass('deleted');
        el.closest('.catalog-list_item').find('.removed').stop().fadeOut(400, function(){
            el.closest('.catalog-list_item').find('.removed').remove();
        });
    });

    // magnificPopup ajax
    wHTML.mfiAjax();

    // валидация форм

    wHTML.validation();

    $('body').on('click', '.add_to_wish_list', function(e){
        e.preventDefault();
        $(this).find('.star').toggleClass('star--active');
    });
    
    $('body').on('click', '.add-favorite', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.search-form_location').on('click', function(e){
        e.preventDefault();

        $('.location-list').toggleClass('location-list--visible');
    });

    var isOffsetNavVisible = false;

    // $('.hamburger-button').on('click', function(){
    //     if(isOffsetNavVisible){
    //         isOffsetNavVisible = false;
    //         $('.offset-nav').removeClass('offset-nav--active');
    //         $('.offset-overlay').removeClass('offset-overlay--show');
    //     } else {
    //         isOffsetNavVisible = true;
    //         $('.offset-nav').addClass('offset-nav--active');
    //         $('.offset-overlay').addClass('offset-overlay--show');
    //     }
    // });

    $('.offset-overlay').on('click', function(){
        isOffsetNavVisible = false;
        $('.offset-nav').removeClass('offset-nav--active');
        $('.offset-overlay').removeClass('offset-overlay--show');
    });

    $('.offset-nav_list-item--has-child > a').on('click', function(e){
        e.preventDefault();

        $(this).next().slideToggle(200);
    });

    $("body").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if(direction == 'left') {
                $('.offset-nav').removeClass('offset-nav--active');
                $('.offset-overlay').removeClass('offset-overlay--show');
            }
        }
    });

    $('.tab-nav_link').on('click', function(e){
        e.preventDefault();
        var tabID = $(this).data('tab');
        $(this).addClass('tab-nav_link--current').siblings().removeClass('tab-nav_link--current');
        $('.tab-content[data-tab="'+tabID+'"]').addClass('tab-content--current').siblings().removeClass('tab-content--current');
    });

    $('body').on('click', '.phone-list_show', function(e){
        e.preventDefault();
        $(this).closest('.phone-list').find('a span').css('opacity', '1');
        $(this).hide(0);
    });

    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-preview'
    });

    $('.slider-preview').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        focusOnSelect: true,
        asNavFor: '.slider-main',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 720,
                settings: {
                    vertical: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 560,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            }
        ]
    });

    $('body').on('keyup', 'input.wInput', function(){
        var label = $(this).closest('.wFormRow').find('.wLabel');
        var value = $(this).val();

        if(label.hasClass('-warn')){
            if(value.length > 0) {
                label.removeClass('-warn').addClass('-success');
            }
        } else if(label.hasClass('-success')) {
            if(value.length < 1) {
                label.removeClass('-success').addClass('-warn');
            }
        }
    });

    $('body').on('click', '.double-button', function(e){
        e.preventDefault();
        var row = $(this).closest('.-double');
        var newRow = row.clone().removeClass('hint');

        newRow.find('.double-button').removeClass('double-button').addClass('dell-button');

        newRow.insertAfter(row);

        initInputMask();
    });

    $('body').on('click', '.dell-button', function(e){
        e.preventDefault();
       $(this).closest('.-double').remove();
    });

    // map

    var geocoder;
    var map;
    var plases = [];
    var markers = [];

    var mapTimeout;

    $('.map-field').on('keyup', function(e){
        var address = $(this).val();

        clearTimeout(mapTimeout);

        mapTimeout = window.setTimeout(function(){
            plases.length = 0;
            initialize();
            codeAddress(address);
        }, 1000);
    });

    function initialize() {
        geocoder = new google.maps.Geocoder();
        var lat;
        var long;
        if($('#latitude').val() != ''){
            lat = $('#latitude').val();
        } else{
            lat=46.658627;
        }
        if($('#longitude').val() != ''){
            long = $('#longitude').val();
        } else{
            long=32.60396;
        }
        var latlng = new google.maps.LatLng(lat,long);
        var myOptions = {
            disableDefaultUI: false,
            zoom: 12,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        if(lat != 46.658627 && long!=32.60396 && $('.map-field').val() != ''){
            var address = $('.map-field').val();
            geocoder.geocode( { 'address': address}, function(results, status) {
                clearMap();
                plases = results;

                if (status == google.maps.GeocoderStatus.OK) {
                    for (var i = 0; i < plases.length; i++) {
                        var marker = new google.maps.Marker({
                            map: map,
                            position: plases[i].geometry.location
                        });
                        markers.push(marker);
                    }
                }
            });
        }


        map = new google.maps.Map(document.getElementById("addition-map"), myOptions);
    }

    function codeAddress(address) {
        geocoder.geocode( { 'address': address}, function(results, status) {
            clearMap();
            plases = results;

            if (status == google.maps.GeocoderStatus.OK) {
                for (var i = 0; i < plases.length; i++) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: plases[i].geometry.location
                    });
                    $('#latitude').val( plases[i].geometry.location.lat() );
                    $('#longitude').val( plases[i].geometry.location.lng() );
                    markers.push(marker);
                }
            }
        });
    }

    function clearMap() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }

    if($('#addition-map').length) {
        initialize();
    }

    function initInputMask() {
        var date = [{
            "mask": "\+38\ \(###\)\ ###\-##\-##"
        }];

        $('.inputmask').inputmask({
            mask: date,
            definitions: {
                '#': {
                    validator: "[0-9]",
                    cardinality: 1
                }
            }
        });
    }

    if ($(".inputmask").length) {
        initInputMask();
    }

    $('body').on('click', '#forget_pass', function(event) {
        $('#entrForm').removeClass('visForm');
        $('#forgetForm').addClass('visForm');
    });

    $('body').on('click', '#remember_pass', function(event) {
        $('#forgetForm').removeClass('visForm');
        $('#entrForm').addClass('visForm');
    });

    $('body').on('click', '#enterReg .erTitle', function(event) {
        event.preventDefault();
        if($(window).width() < 720) {
            if(!$(this).parent().hasClass('wCur')) {
                $('#enterReg .popupBlock').removeClass('wCur').filter($(this).parent()).addClass('wCur');
            }
        }
    });


    //----------------------------------------------------------
    function asyncLoop(iterations, func, callback) {
        var index = 0;
        var done = false;
        var loop = {
            next: function() {
                if (done) {
                    return;
                }

                if (index < iterations) {
                    index++;
                    func(loop);

                } else {
                    done = true;
                    if (typeof callback == 'function') {
                        callback();
                    }
                }
            },

            iteration: function() {
                return index - 1;
            },

            break: function() {
                done = true;
                if (typeof callback == 'function') {
                    callback();
                }
            }
        };
        loop.next();
        return loop;
    }

    function fileToBase(obj) {
        filesImage = [];
        var reader = new FileReader();
        asyncLoop(obj.length, function(loop) {
            reader.readAsDataURL(obj[loop.iteration()]);
            reader.onloadend = function() {
                filesImage.push(reader.result);
                loop.next();
            };
        });
    }

    $("#dropzone").dropzone({
        url: "/",
        acceptedFiles: '.jpg, .png, .jpeg, .gif',
        maxFilesize: 16, //Mb
        maxFiles: 15,
        addRemoveLinks: true,
        thumbnailWidth: 152,
        thumbnailHeight: 120,

        init: function() {
            var self = this;
            this.on("maxfilesexceeded", function(file) {
                this.removeFile(file);
            });

            this.on("thumbnail", function(file) {
                var _self = this;
                if ($(this.element).closest('.wForm').length) {
                    var flag = true;
                    $('.dz-preview').each(function(){
                        if($(this).hasClass('main')){
                            flag=false;
                        }
                    });

                    if(flag){
                        $('.dz-preview').eq(0).addClass('main');
                    }

                    var form = $(this.element).closest('.wForm');

                    jQuery.data(form[0], 'file', {
                        files: this.getQueuedFiles()
                    });

                    fileToBase(_self.getQueuedFiles());
                }
            });

            this.on("removedfile", function(file) {
                var _self = this;
                if ($(this.element).closest('.wForm').length) {
                    var flag = true;
                    $('.dz-preview').each(function(){
                        if($(this).hasClass('main')){
                            flag=false;
                        }
                    });
                    if(flag){
                        $('.dz-preview').eq(0).addClass('main');
                    }
                    var form = $(this.element).closest('.wForm');
                    jQuery.data(form[0], 'file', {
                        files: this.getQueuedFiles()
                    });
                    fileToBase(_self.getQueuedFiles());
                }
                if (file.status !== 'queued' ) {
                    $.ajax({
                        url: '/ajax/removeImageAds',
                        type: 'POST',
                        data: {
                            name: file.name
                        },
                        success: function(data) {

                            //console.log('File remove');
                        }
                    });
                }
            });

            if ($('.editPhoto').length) {
                var id = $('.editPhoto').data('id');

                $.ajax({
                    url: '/ajax/getImageAds',
                    type: 'POST',
                    dataType: 'JSON',
                    data: {
                        id: id
                    },
                    success: function(data) {
                        for (key in data) {
                            var nameFile = data[key].url.split('/').pop();
                            var moc = {
                                name: nameFile,
                                size: 12345
                            };
                            self.emit("addedfile", moc);
                            self.createThumbnailFromUrl(moc, data[key].url);
                            self.emit("complete", moc);
                            if (data[key].main) {
                                moc.previewElement.className = moc.previewElement.className + ' main';
                                mainImage = nameFile;
                            }
                        }
                    }
                });
            }
        }
    });

    $(document).on('click', '.dz-preview', function() {
        $('.dz-preview').removeClass('main');
        $(this).addClass('main');
    });

    function setAddressData(data){
        $('.address-list').html('');
        for(var i=0; i < data.length; i++){
            var item = $('<li data-id="' + data[i].id + '"><span>' + data[i].title + '</span></li>');

            if(data[i].child) {
                if(data[i].child.length){
                    var subList = $('<ul class="address-sublist"></ul>');

                    for(var j=0; j < data[i].child.length; j++){
                        var subItem = $('<li data-id="' + data[i].child[j].id + '"><span>' + data[i].child[j].title + '</span></li>');
                        subItem.appendTo(subList);
                    }

                    subList.appendTo(item);
                    item.addClass('has-child');
                }
            }

            item.appendTo('.address-list');
        }

        $('.address-list').addClass('address-list--visible');
    }

    $('.address-field').on('keyup', function(e){
        if($(this).val().length > 2) {
                var query = $(this).val();
            $.ajax({
                url: '/ajax/get_regions_to_add_edit',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    query: query
                },
                success: function(data){
                    if(data.resp) {
                        setAddressData(data.resp);
                    }
                }
            });

           /* var response = [
                {
                    "id": "1",
                    "title": "Город 1",
                    "child": [
                        {"id": "2", "title": "Район 2"},
                        {"id": "3", "title": "Район 3"},
                        {"id": "4", "title": "Район 4"},
                        {"id": "5", "title": "Район 5"},
                        {"id": "6", "title": "Район 6"},
                        {"id": "7", "title": "Район 7"}
                    ]
                },
                {
                    "id": "2",
                    "title": "Город 2"
                },
                {
                    "id": "3",
                    "title": "Город 3"
                },
                {
                    "id": "4",
                    "title": "Город 4",
                    "child": [
                        {"id": "2", "title": "Район 8"},
                        {"id": "3", "title": "Район 9"},
                        {"id": "4", "title": "Район 10"},
                        {"id": "5", "title": "Район 11"},
                        {"id": "6", "title": "Район 12"},
                        {"id": "7", "title": "Район 13"}
                    ]
                },
                {
                    "id": "5",
                    "title": "Город 5"
                },
                {
                    "id": "6",
                    "title": "Город 6"
                },
                {
                    "id": "7",
                    "title": "Город 7"
                },
                {
                    "id": "8",
                    "title": "Город 8"
                },
                {
                    "id": "9",
                    "title": "Город 9"
                }
            ];

            if(response) {
                setAddressData(response);
            }*/
        }
    });

    $('.address-list').on('click', 'li', function(){
       if(!$(this).hasClass('has-child')){
           var vl = $(this).text();
           var id = $(this).attr('data-id');

           if($(this).closest('.has-child').length) {
               vl = $(this).closest('.has-child').children('span').text() + ', ' + vl;
           }

           $('.address-field').val(vl);
           $('#parent_id').val(id);

           $('.address-list').removeClass('address-list--visible');

           $.ajax({
               url: '/ajax/get_metro',
               type: 'POST',
               dataType: 'JSON',
               data: {
                   region_id: id
               },
               success: function(data){
                   if(data.success){
                       $('.metro-list').slideUp(500, function(){
                           if(data.count > 0){
                               $('#metro_id').html(data.tpl);
                               $('.metro-list').slideDown(500);
                           }
                       });

                   }
               }
           });
       }
    });

    $(window).load(function(){
        wHTML.seoSet();
        $('.news-item').matchHeight();
    });


    ///

    $('.search-form_link').on('click',function(){
        var el = $(this);
        if(el.hasClass('is-active')){
            el.removeClass('is-active');
            $('.categories-menu > ul').hide();
            $('#overlay-hide').hide();
            wHTML.seoSet();
        } else{
            el.addClass('is-active');
            $('.categories-menu > ul').show();
            $('#overlay-hide').show();

        }
    });

    $('#overlay-hide').on('click',function(){
        if($('.categories-menu > ul').is(':visible')){
            $('.search-form_link').trigger('click');
        }
        if($('.live-results').is(':visible')) {
            $('.live-results').slideUp();
            $('#overlay-hide').hide();
        }
    });

    $('.categories-menu li').on('mouseover',function(){
        setTimeout(function(){
            wHTML.seoSet();
        },100);
    });

    $('.categories-menu li').on('mouseout',function(){
        setTimeout(function(){
            wHTML.seoSet();
        },100);
    });

    $('.js-live').on('keyup',function(){
        var el = $(this);
        if(el.val().length > 3){
            el.closest('.wFormRow').find('.live-results').slideDown();
            $('#overlay-hide').show();
        } else{
            el.closest('.wFormRow').find('.live-results').slideUp();
            $('#overlay-hide').hide();
        }
    });

    $('.js-close').on('click',function(){
        var el = $(this);
        el.closest('.fixed-money').fadeOut();
        $.cookie('hidden-money', 'true');
    });

        $('.js-Mcat').on('click',function(e){
            e.preventDefault();
            var el = $(this);
            var razd = el.find('.cat-name').text();
            el.addClass('AMCat');
            el.closest('.jmain-cats').stop().slideUp(400,function(){
                $('.js-razd').text(razd);
                $('.jsub-cats').stop().slideDown();
            });
        });

        $('.js-Scat').on('click',function(e){
            e.preventDefault();
            var el = $(this);
            el.addClass('ASCat');
            el.closest('.jsub-cats').stop().slideUp(400,function(){

                $('.addForm').stop().slideDown(400,function(){
                    $('.up-variants .block .main').matchHeight();
                });
            });
        });

        $('.js-return').on('click',function(){
            var el = $(this);
            $('.jsub-cats').find('.AMCat').removeClass('AMCat');
            el.closest('.jsub-cats').stop().slideUp(400,function(){
                $('.jmain-cats').stop().slideDown();
            });
        });

    $('.js-status').on('click', function(){
        var el = $(this);
        var inp = el.find('input');
        var price = parseInt(inp.data('price'));
        if(price > 0) {
            var text = inp.data('text');
            $('.add-info-window_text span').text(text+" ");
            $('.add-info-window_text i').text(price);
            $('.add-info-window').show();
        } else{
            $('.add-info-window').hide();
        }
    });

    $('body').on('click','.js-hidden',function(){
        $(this).hide();
    });

    $('body').on('click', '.js-skype',function(e){
        e.preventDefault();
        var el = $(this);
        var number = el.data('skype');
        el.attr('href','call:'+number);
        el.find('span').text(number);
    });

    $('body').on('click','.js-writeAdmin',function(){
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();
        $('html, body').animate({
            scrollTop: $("#feedback").offset().top
        }, 1000);
    });


    $('body').on('click','.js-problem-popup',function(){
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();
        setTimeout(function(){
            $('.js-problem').trigger('click');
        },300);
    });

    $('body').on('click','.js-add-phone',function(){
        var el = $(this);
        var max = el.data('max');
        var count = $('.jsTel').length;

        if(count < max) {
            var row = el.closest('.jsTel');
            var nrow = row.clone();
            nrow.find('.-warn').removeClass('-warn');
            nrow.find('.js-add-phone').removeClass('js-add-phone').addClass('js-remove-phone -remove');
            nrow.insertAfter(row);
        }
    });


    $('body').on('click','.js-add-skype',function(){
        var el = $(this);
        var max = el.data('max');
        var count = $('.jsSkype').length;

        if(count < max) {
            var row = el.closest('.jsSkype');
            var nrow = row.clone();
            nrow.find('.-warn').removeClass('-warn');
            nrow.find('.js-add-skype').removeClass('js-add-skype').addClass('js-remove-skype -remove');
            nrow.insertAfter(row);
        }
    });

    $('body').on('click','.js-remove-phone',function(){
        var el = $(this);
        el.closest('.js-add').remove();
    });

    $('body').on('click','.js-remove-skype',function(){
        var el = $(this);
        el.closest('.js-add').remove();
    });

    Dropzone.autoDiscover = false;



    $('#myId').dropzone({
        url: "/file/post",
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 1,
        paramName: "uploadfile",
        maxFiles: 8,
        previewsContainer: '.visualizacao',
        maxFilesize:16,
        acceptedFiles: ".jpeg,.jpg,.png,.gif",
        clickable:'#pickfiles',
        addRemoveLinks: true,
        previewTemplate : $('.preview').html(),
        init: function() {

            this.on('removedfile', function(file, json) {
                if (this.files.length < 1) {
                    $('.upload-info').show();
                }
            });
                $('.dropzone').removeClass('dz-clickable'); // remove cursor
                $('.dropzone')[0].removeEventListener('click', this.listeners[1].events.click);

            this.on('addedfile', function(file, json) {
                $('.upload-info').hide();
                $("#items").sortable({
                    items:'.dz-image-preview',
                    cursor: 'move',
                    opacity: 0.5,
                    containment: '#items',
                    distance: 20,
                    tolerance: 'pointer'
                });

                if (this.files.length > 8) {
                    return false;
                }

                $('#items').children('li').eq(0).find('.dz-preview').trigger('click');


            });
            this.on('success', function(file, json) {
                alert('aa');
            });

            this.on('drop', function(file) {
                console.log('File',file)
            });

            $(".submitPhoto").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                myDropzone.processQueue();
            });
        }
    });


    $("#mmenu").mmenu({
        "extensions": [
            "pagedim-black"
        ],
        navbar: {
            title: "Меню"
        },
        "navbars": [
            {
                "position": "bottom",
                "content": [
                    "<div class='currency-list'><span>Валюта:</span><a href='#' class='currency-list_currency is-active'>UAH</a><a href='#' class='currency-list_currency'>RUB</a><a href='#' class='currency-list_currency'>USD</a></div>"
                ]
            }
        ]
    });

    $(window).resize(function(){
        wHTML.seoSet();
    });

    if($.cookie('hidden-money')) {
        $('.fixed-money').hide();
    }


});
/*my.js*/
var closePopup = function( it ) {
    it.fadeOut(650);
    setTimeout(function(){
        it.remove();
    }, 700);
};
var generate = function( message, type, time ) {
    var mainBlock = $('#fPopUp');
    var current;
    if(!mainBlock.length) {
        $('<div id="fPopUp"></div>').appendTo('body');
        mainBlock = $('#fPopUp');
    }
    var i = 1;
    var count = 0;
    mainBlock.find('.content').each(function(){
        current = parseInt($(this).data('i'));
        if(current + 1 > i) {
            i = current + 1;
        }
        count++;
    });
    if(count >= 5) {
        mainBlock.find('div.content:first-child').remove();
    }
    $('<div class="content ' + type + '" data-i="' + i + '" style="display: none;">' + message + '</div>').appendTo(mainBlock);
    mainBlock.find('div.content[data-i="' + i + '"]').fadeIn(200);
    if(time) {
        setTimeout(function(){
            closePopup(mainBlock.find('div.content[data-i="' + i + '"]'));
        }, time);
    }
};

$(function(){
    $('body').on('click', '#fPopUp div.content', function(){ closePopup($(this)); });

    if( $('ul.color_c').length ) {
        $('ul.color_c input').each(function(){
            if ($(this).prop('disabled')) {
                $(this).closest('li').css('opacity', '0.2');
                $(this).closest('li').find('ins').css('border', '0');
                $(this).css('cursor', 'auto');
            }
        });
        $('ul.color_c a').on('click', function(){
            window.location.href = $(this).attr('href');
        });
    }

    var v1 = parseInt($("#amount").val(),10);
    var v2 = parseInt($("#amount2").val(),10);
    var min = parseInt($("#amount").data('cost'),10);
    var max = parseInt($("#amount2").data('cost'),10);

    if ($(".price_ui").length) {
        
        var slider = $("#slider-range").slider({
            range: true,
            min: min,
            max: max,
            step: 1,
            values: [v1, v2],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0]);
                $("#amount2").val(ui.values[1]);
            }
        });
        $("#amount").val($("#slider-range").slider("values", 0));
        $("#amount2").val($("#slider-range").slider("values", 1));

        $("#amount").ForceNumericOnly();
        $("#amount2").ForceNumericOnly();

        $("#amount").keyup(function() {
            if ($("#amount2").val().length < 1) {
                slider.slider("values", [$(this).val(), min]);
            } else {
                if (parseInt($("#amount2").val()) < parseInt($(this).val())) {
                    return false;
                } else {
                    slider.slider("values", [$(this).val(), $("#amount2").val()]);
                }
            }
        });

        $("#amount2").keyup(function() {
            if ($("#amount").val().length < 1) {
                slider.slider("values", [0, $(this).val()]);
            } else {
                if (parseInt($("#amount").val()) > parseInt($(this).val())) {
                    return false;
                } else {
                    slider.slider("values", [$("#amount").val(), $(this).val()]);
                }
            }
        });

        $("#amount2").blur(function(){
            if($("#amount2").val() < $("#amount").val()) {
               $("#amount2").val($("#amount").val());
                slider.slider("values", [$("#amount").val(), $("#amount").val()]);
            }
        });

        $("#amount").blur(function(){
            if($("#amount").val() < min) {
               $("#amount").val(min);
                slider.slider("values", [min, $("#amount2").val()]);
            }
        });

        $("input[type='reset']").on('click', function() {
            slider.slider("values", [min, max]);
        });

        $("input[type='reset']").on('mouseenter', function() {
            $(".reset_but span").css('border-bottom','1px dotted #ccc');
        });

        $("input[type='reset']").on('mouseleave', function() {
            $(".reset_but span").css('border-bottom','transparent');
        });

    }

    $('.enterReg5').on('click', function(){
        var id = $(this).data('id');
        $('#idFastOrder').val(id);
    });

    if($(".prevue_block").length) {
        $(".prevue_block").on('click', '.img_prevue', function() {
            var src_img = $(this).attr('data-img-src');
            var src_img_original = $(this).attr('data-img-src-original');
            $(".big_prevue").find("img").attr('src',src_img);
            $(".big_prevue").attr('href',src_img_original);
        });
    }

    if( $('.lk_menu').length ) {
        var h1 = $('.lk_menu').height();
        var h2 = $('.lk_content').height();
        if( h1 > h2 ) {
            $('.lk_content').height( h1 );
        }
        if( h2 > h1 ) {
            $('.lk_menu').height( h2 );
        }
    }

    /// CART START
    var setTopCartCount = function(count){
        $('#topCartCount').text(count);
    };
    $('.addToCart').on('click', function(e){
        e.preventDefault();
        var it = $(this);
        var id = it.data('id');
        $.ajax({
            url: '/ajax/addToCart',
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id
            },
            success: function(data){
                if( data.success ) {
                    var html = '';
                    var item;
                    var count = 0;
                    var amt;
                    var amount = 0;
                    for( var i = 0; i < data.cart.length; i++ ) {
                        item = data.cart[i];
                        amt = parseInt( item.count ) * parseInt( item.cost );
                        html += '<li class="wb_item" data-id="'+item.id+'" data-count="'+item.count+'" data-price="'+item.cost+'">';
                        html += '<div class="wb_li">';
                        if ( item.image ) {
                            html += '<div class="wb_side"><div class="wb_img">';
                            html += '<a href="/'+item.alias+'/p'+item.id+'" class="wbLeave"><img src="'+item.image+'" /></a>';
                            html += '</div></div>';
                        }
                        html += '<div class="wb_content">';
                        html += '<div class="wb_row">';
                        html += '<div class="wb_del"><span title="Удалить товар">Удалить товар</span></div>';
                        html += '<div class="wb_ttl"><a href="/'+item.alias+'/p'+item.id+'" class="wbLeave">'+item.name+'</a></div>';
                        html += '</div>';
                        html += '<div class="wb_cntrl">';
                        html += '<div class="wb_price_one"><p><span>'+item.cost+'</span> грн.</p></div>';
                        html += '<div class="wb_amount_wrapp">';
                        html += '<div class="wb_amount">';
                        html += '<input type="text" value="'+item.count+'">';
                        html += '<span data-spin="plus"></span>';
                        html += '<span data-spin="minus"></span>';
                        html += '</div>';
                        html += '</div>';
                        html += '<div class="wb_price_totl"><p><span>'+amt+'</span> грн.</p></div>';
                        html += '</div>';
                        html += '</div>';
                        html += '</div>';
                        html += '</li>';
                        amount += amt;
                        count += parseInt( item.count );
                    }
                    $('#topCartList').html(html);
                    $('#topCartAmount').html(amount);
                    setTopCartCount(count);
                }
                $('.wb_edit_init').click();
            }
        });
    });
    /// CART END

    /// Remove social netqork from pc
    $('.deleteConnection').on('click', function(){
        var id = $(this).data('id');
        $.ajax({
            url: '/ajax/removeConnection',
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id
            },
            complete: function(data){
                window.location.reload();
            }
        });
    });

    $('body').on('click','.all_ukraine', function(event){
        event.preventDefault();
        $('.search-form_location').text('Выберите регион');
        $.cookie('region_id', null);
        $('.location-list').removeClass('location-list--visible');
        $('#region_id').val('');
    });

    $('body').on('click','.to_regions', function(event){
        event.preventDefault();
        $('.search-form_location').text('Выберите регион');
        $.cookie('region_id', null);
        $('#region_id').val('');
        $.ajax({
            url: '/ajax/getRegionsToSearch',
            type: 'POST',
            dataType: 'JSON',
            data: {
                type: 1,
            },
            success: function(data){
                if(data.success) {
                    setLocationData(data.result,data.type, data.top_text,data.top_class,data.last_id);
                } else {
                    $('.location-list').removeClass('location-list--visible');
                }
            }
        });
        $('.location-list').removeClass('location-list--visible');
    });

    $('body').on('click','.to_cities', function(event){
        event.preventDefault();
        $('.search-form_location').text($('.location-list_title').text().substring(4,$('.location-list_title').text().length));
        var id = $(this).attr('data-last_id');
        $.cookie('region_id', id);
        $('#region_id').val(id);
        $.ajax({
            url: '/ajax/getRegionsToSearch',
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id,
            },
            success: function(data){
                if(data.success) {
                    setLocationData(data.result,data.type, data.top_text,data.top_class,data.last_id);
                } else {
                    $('.location-list').removeClass('location-list--visible');
                }
            }
        });
        $('.location-list').removeClass('location-list--visible');
    });

    function setLocationData(data, type, top_text, top_class, last_id){
        $('.location-list_wrap').html('');

        $('.location-list_title').text(top_text);
        $('.location-list_title').closest('.top_text').removeClass('all_ukraine');
        $('.location-list_title').closest('.top_text').removeClass('to_regions');
        $('.location-list_title').closest('.top_text').removeClass('to_cities');
        $('.location-list_title').closest('a').addClass(top_class);
        $('.location-list_title').closest('a').attr('data-type', type);
        $('.location-list_title').closest('a').attr('data-last_id', last_id);

        for(var i=0; i < data.length; i++){
            var cl = '';
            if(data[i].count_childs > 0){
                cl = 'has_childs';
            }
            var item = $('<div class="location-list_item '+cl+'" data-id="' + data[i].id + '">' + data[i].name + '</div>');
            item.appendTo('.location-list_wrap');
        }

        $('.location-list').addClass('location-list--visible');
    }

    $('body').on('click', '.location-list_item', function(){
        var id = $(this).data('id');
        var title = $(this).text();
        $('.search-form_location').text(title);
        $.cookie('region_id', id);
        $('#region_id').val(id);
        if(!$(this).hasClass('has_childs')){
            $('.location-list').removeClass('location-list--visible');
            return false;
        }

        $.ajax({
            url: '/ajax/getRegionsToSearch',
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id
            },
            success: function(data){
                if(data.success) {
                    setLocationData(data.result,data.type, data.top_text,data.top_class,data.last_id);
                } else {
                    $('.location-list').removeClass('location-list--visible');
                }
            }
        });

        $('.location-list').removeClass('location-list--visible');


    });

    $('body').on('click', '.add_to_wish_list',function(event){
        event.preventDefault();
        var id= $(this).attr('data-id');
        $.ajax({
            url: '/ajax/add_to_wish_list_base',
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id
            },
            success: function(data){
                if(data.success){
                    generate(data.response,'success');
                } else {
                    generate(data.response,'warning');
                }
            }
        });
    });

    $('.base_review_pager').on('click',function(event){
        event.preventDefault();
       var page = $(this).attr('data-page');
        var id = $('#base_id').val();
        var t = $(this);
        $.ajax({
            url: '/ajax/get_reviews',
            type: 'POST',
            dataType: 'JSON',
            data: {
                page: page,
                id: id
            },
            success: function(data){
                if(data.success){
                    $('.comments').slideUp(500,function(){
                        $('.comments').html(data.tpl);
                        $('.comments').slideDown(500);
                        $('.base_review_pager').removeClass('curr');
                        t.addClass('curr');
                    });
                } else {
                    generate(data.response,'warning');
                }
            }
        });
    });
});
//# sourceMappingURL=maps/inits.js.map
