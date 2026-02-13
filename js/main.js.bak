$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            // 스크롤이 0보다 크면 fixed 클래스 추가
            $("#header").addClass("fixed");
            $("#cs_btn").addClass("on");
        } else {
            // 스크롤이 최상단이면 fixed 클래스 제거
            $("#header").removeClass("fixed");
            $("#cs_btn").removeClass("on");
        }
    });
 
	// Initialize Swiper
	var mv_swiper = new Swiper(".mv_swiper", {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		effect: "fade",
		navigation: {
			nextEl: ".mv_next",
			prevEl: ".mv_prev",
		},
		on: {
			slideChange: function () {
				$(".num_first span").text((this.realIndex + 1).toString().padStart(2, '0'));
			}
		}
	});

	// Pause Swiper autoplay and progress bar when input is focused
	$(".sch_stx").on("focus", function () {
		// Stop Swiper autoplay
		mv_swiper.autoplay.stop();

		// Add a class to pause the progress bar animation
		$(".mv_progress_bar").addClass("paused");
	});

	// Resume Swiper autoplay and progress bar when input loses focus
	$(".sch_stx").on("blur", function () {
		// Resume Swiper autoplay
		mv_swiper.autoplay.start();

		// Remove the class to resume the progress bar animation
		$(".mv_progress_bar").removeClass("paused");
	});





    // 초기 값 설정
    $(".num_first span").text("01");


    // gnb의 li 요소에 hover 이벤트 바인딩
    $(".gnb li").hover(
        function () {
            // 마우스를 올렸을 때
            $("#header").addClass("active"); // header에 active 클래스 추가
            $(".gnb_drop").stop().slideDown(300); // gnb_drop 슬라이드 다운
        },
        function () {
            // 마우스를 뗐을 때
            $("#header").removeClass("active"); // header에서 active 클래스 제거
            $(".gnb_drop").stop().slideUp(300); // gnb_drop 슬라이드 업
        }
    );

    // gnb_drop 영역에서도 유지되도록 hover 이벤트 추가
    $(".gnb_drop").hover(
        function () {
            $("#header").addClass("active");
            $(this).stop().slideDown(300);
        },
        function () {
            $("#header").removeClass("active");
            $(this).stop().slideUp(300);
        }
    );


    // gnb ul li에 hover 이벤트 연결
    $(".gnb ul li").hover(
        function () {
            var index = $(this).index();

            // gnb와 sub_gnb의 동일한 인덱스의 li에 active 클래스 추가
            $(".gnb ul li").eq(index).addClass("active");
            $(".sub_gnb ul li").eq(index).addClass("active");
        },
        function () {
            var index = $(this).index();

            // gnb와 sub_gnb의 동일한 인덱스의 li에서 active 클래스 제거
            $(".gnb ul li").eq(index).removeClass("active");
            $(".sub_gnb ul li").eq(index).removeClass("active");
        }
    );

    // sub_gnb ul li에 hover 이벤트 연결
    $(".sub_gnb ul li").hover(
        function () {
            var index = $(this).index();

            // sub_gnb와 gnb의 동일한 인덱스의 li에 active 클래스 추가
            $(".sub_gnb ul li").eq(index).addClass("active");
            $(".gnb ul li").eq(index).addClass("active");
        },
        function () {
            var index = $(this).index();

            // sub_gnb와 gnb의 동일한 인덱스의 li에서 active 클래스 제거
            $(".sub_gnb ul li").eq(index).removeClass("active");
            $(".gnb ul li").eq(index).removeClass("active");
        }
    );

    $("#langBtn, .langBtn").on("click", function () {

        // .dropdown 슬라이드 토글
        //$(".lang_box .dropdown").stop().slideToggle(300);        
        // 버튼에 on 클래스 토글
        //$(this).toggleClass("on");

		$(this).parent().find(".dropdown").stop().slideToggle(300);   
        $(this).toggleClass("on");  
    });


    function updateSwiperSlides() {
        let windowWidth = window.innerWidth;
        let $swiperWrapper = $(".mc_1_swiper .swiper-wrapper");
        let $items = $(".mc_1_swiper .item");
    
        // 기존 swiper-slide 초기화
        $swiperWrapper.empty();
    
        if (windowWidth <= 1024) {
            // 1024px 이하일 때 -> item을 개별 swiper-slide로 추가
            $items.each(function () {
                let slide = $("<div class='swiper-slide'></div>").append($(this).clone());
                $swiperWrapper.append(slide);
            });
        } else {
            // 1024px 초과일 때 -> item을 두 개씩 묶어 swiper-slide로 추가
            for (let i = 0; i < $items.length; i += 2) {
                let slide = $("<div class='swiper-slide'></div>");
                slide.append($items.eq(i).clone());
                if ($items.eq(i + 1).length) slide.append($items.eq(i + 1).clone());
                $swiperWrapper.append(slide);
            }
        }
    
        // 기존 Swiper 제거 후 다시 초기화
        if (window.mc_1_swiper) {
            window.mc_1_swiper.destroy(true, true);
        }
    
        window.mc_1_swiper = new Swiper(".mc_1_swiper", {
            slidesPerView: 'auto', // 기본적으로 auto 적용
            spaceBetween: 34,
            loop: true,
            pagination: {
                el: ".mc_1_pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".mc_1_next",
                prevEl: ".mc_1_prev",
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1025: { 
                    slidesPerView: 2, // 1024px 초과일 때 2개씩
                    spaceBetween: 34
                },
                0: { 
                    slidesPerView: 'auto', // 1024px 이하일 때 auto (개별 처리)
                    spaceBetween: 0,
                }
            }
        });
    }
    
    // 초기 실행 및 화면 크기 변경 시 적용
    $(document).ready(function () {
        updateSwiperSlides(); // 처음 실행
        $(window).on("resize", function () {
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(updateSwiperSlides, 200); // 성능 최적화 (디바운스)
        });
    });
    

    var mc_3_swiper = new Swiper(".mc_3_swiper", {
        slidesPerView: 1,
        loop: 'true',
        navigation: {
            nextEl: ".mc_3_next",
            prevEl: ".mc_3_prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
      });

    var mc_9_swiper = new Swiper(".mc_9_swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: 'true',
        navigation: {
            nextEl: ".mc_9 .btn_next",
            prevEl: ".mc_9 .btn_prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

      $(".acc_title").click(function() {
        var $row = $(this).closest(".acc_row");
        
        // 현재 클릭한 항목의 콘텐츠 토글
        $row.toggleClass("active").find(".acc_content").slideToggle(300);

        // 다른 열려있는 항목 닫기 (하나만 열리게)
        $(".acc_row").not($row).removeClass("active").find(".acc_content").slideUp(300);
    });

    var mc_8_swiper = new Swiper(".mc_8_swiper", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: ".mc_8_next",
            prevEl: ".mc_8_prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    $("#navBtn").click(function() {
        $('#sidebar').addClass('on');
        $('body').css('overflow', 'hidden');
    });

    $("#navClose").click(function() {
        $('#sidebar').removeClass('on');
        $('body').css('overflow-y', 'auto');
    });

    $(".side_gnb .has_drop > a").click(function (e) {
        e.preventDefault(); // 링크 기본 동작 방지

        var $parent = $(this).parent(); // 현재 클릭한 메뉴의 부모 li
        var $dropdown = $parent.find(".dropdown"); // 해당 메뉴의 dropdown

        // 현재 열려 있는 dropdown이 있다면 닫음 (하나만 열리도록)
        $(".side_gnb .has_drop").not($parent).removeClass("active").find(".dropdown").slideUp(300);

        // 현재 클릭한 dropdown을 토글
        $parent.toggleClass("active");
        $dropdown.stop(true, true).slideToggle(300);
    });

    $(".breadcrumb .nav_list > p").click(function (e) {
        e.stopPropagation(); // 이벤트 버블링 방지 (부모 요소로 전달 방지)

        var $parent = $(this).parent(); // 현재 클릭한 .nav_list
        var $dropdown = $parent.find(".dropdown"); // 해당 .dropdown

        // 다른 dropdown이 열려 있으면 닫기
        $(".breadcrumb .nav_list").not($parent).removeClass("on").find(".dropdown").slideUp(300);

        // 현재 클릭한 dropdown 토글
        $parent.toggleClass("on");
        $dropdown.stop(true, true).slideToggle(300);
    });

    // 문서(body) 영역 클릭 시 모든 dropdown 닫기
    $(document).click(function () {
        $(".breadcrumb .nav_list").removeClass("on").find(".dropdown").slideUp(300);
    });

    // dropdown 내부를 클릭해도 닫히지 않도록 설정
    $(".breadcrumb .nav_list .dropdown").click(function (e) {
        e.stopPropagation(); // 이벤트 버블링 방지
    });

    $(".view_more").each(function() {
        // 처음 로드될 때 숨겨진 li가 없는 경우 버튼 숨기기
        if ($(this).siblings("ul").find("li:hidden").length === 0) {
            $(this).hide();
        }
    });

    $(".view_more").click(function() {
        let $ul = $(this).siblings("ul"); // 현재 버튼과 같은 item_box 내의 ul 선택
        $ul.find("li:hidden").slideDown(); // 숨겨진 li 요소 표시

        // 모든 li가 보이면 버튼 숨기기
        if ($ul.find("li:hidden").length === 0) {
            $(this).hide();
        }
    });

    AOS.init();
});
