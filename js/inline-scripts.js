// ============ Inline Script Block 1 ============
// 자바스크립트에서 사용하는 전역변수 선언
var g5_url       = "https://web.donginlaw.co.kr";
var g5_bbs_url   = "https://web.donginlaw.co.kr/bbs";
var g5_is_member = "";
var g5_is_admin  = "";
var g5_is_mobile = "";
var g5_bo_table  = "";
var g5_sca       = "";
var g5_editor    = "";
var g5_cookie_domain = "";

// ============ Inline Script Block 2 ============
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DKS1772NBL');

// ============ Inline Script Block 3 ============
$(function() {
    $(".hd_pops_reject").click(function() {
        var id = $(this).attr('class').split(' ');
        var ck_name = id[1];
        var exp_time = parseInt(id[2]);
        $("#"+id[1]).css("display", "none");
        set_cookie(ck_name, 1, exp_time, g5_cookie_domain);
    });
    $('.hd_pops_close').click(function() {
        var idb = $(this).attr('class').split(' ');
        $('#'+idb[1]).css('display','none');
    });
    $("#hd").css("z-index", 1000);
});

// ============ Inline Script Block 4 ============
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('fwrite_xx');
    const checkbox = document.getElementById('quick_term_agree');
    const recaptchaStatus = document.getElementById('recaptcha_verified');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            window.open(
                '/recaptcha_popup.html',
                'recaptchaPopup',
                'width=400,height=200,top=200,left=200'
            );
        } else {
            recaptchaStatus.value = '0';
        }
    });

    form.addEventListener('submit', function (e) {
        // ✅ 개인정보수집 체크 안 한 경우
        if (!checkbox.checked) {
            alert('개인정보수집 동의에 체크하여 주세요.');
            e.preventDefault();
            return;
        }

        // ✅ reCAPTCHA 완료 안 한 경우
        if (!recaptchaStatus || recaptchaStatus.value !== '1') {
            alert('로봇 인증을 완료해주세요.');
            e.preventDefault();
            return;
        }
    });
});

// ============ Inline Script Block 5 ============
function checkWindowSize() {
            if ($(window).width() >= 1200) {
                $('.float_form').css('display', 'flex');
            } else {
                $('.float_form').hide(); // 모바일에서는 기본적으로 숨김 처리
            }
        }

        // 초기 상태 설정
        $(document).ready(function() {
            checkWindowSize();

            $('.float_form_open').click(function() {
                if ($(window).width() < 1200) {
                    $('.float_form').css('display', 'flex');
                }
            });

            $('.float_form .btn_close').click(function() {
                if ($(window).width() < 1200) {
                    $('.float_form').hide();
                }
            });

          //  $(window).resize(function() {
           //     checkWindowSize();
            //});
        });

// ============ Inline Script Block 6 ============
function openAiPopup() {
    document.getElementById("aiPopup").classList.remove("hidden");
}

function onConfirmFromModal() {
    openAiPopup();

    const iframe = document.getElementById('confirmIframe');
    if (iframe) iframe.remove();
}

function closeConfirmModal() {
      const iframe = document.getElementById('confirmIframe');
      if (iframe) iframe.remove();
  }
document.addEventListener("DOMContentLoaded", function() {
 
  const phoneBtn = document.getElementById("phoneBtn");
  const introSelect = document.getElementById("introSelect");



const aiBtn = document.getElementById('aiChatBtn');

aiBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    openConfirmModal(); 
});

function openConfirmModal() {
    let iframe = document.createElement('iframe');
    iframe.src = 'ConfirmAtion.php';
    iframe.id = 'confirmIframe';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    document.body.appendChild(iframe);
}


document.getElementById("aiPopupClose").addEventListener("click", function() {
    const confirmClose = confirm("상담을 종료하시겠습니까?");
    if (confirmClose) {

        document.getElementById("aiPopup").classList.add("hidden");


        window.location.reload();
    }
});

phoneBtn.addEventListener("click", function() {
  const popup = document.getElementById("phonePopup");
  popup.classList.remove("hidden");

  const form = document.getElementById("phoneForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nameInput = form.querySelector('input[name="user_name"]');

        let name = nameInput.value.trim();

        if (!name.startsWith("(빠른전화)")) {
            name = `(빠른전화) ${name}`;
            nameInput.value = name; 
        }
        const phone = form.querySelector('input[name="user_phone"]').value.trim();
        const summary = form.querySelector('textarea[name="user_content"]').value.trim();
        
        const agree = document.getElementById("privacyAgree");

        if (!name || !phone || !summary) {
            alert("모든 필드를 입력해주세요.");
            return;  
        }

        if (!agree.checked) {
            alert("개인정보 수집 및 이용에 동의해야 상담 신청이 가능합니다.");
            return;  
        }

        const nameError = document.getElementById("nameError");
        const phoneError = document.getElementById("phoneError");
        const contentError = document.getElementById("contentError");

        if (nameError.style.display === "block" ||
            phoneError.style.display === "block" ||
            contentError.style.display === "block") {

            alert("입력값을 다시 확인해주세요.");
            return;  
        }

     
        const consultUrl = './bbs/write_update.php';
        const formEl = document.createElement('form');
        formEl.method = 'POST';
        formEl.action = consultUrl;

        const fields = {
            w: '',
            bo_table: 'online',
            ww: 'index',
            ca_name: '신청',
            wr_subject: '전화상담 신청',
            wr_1: name,
            wr_2: phone,
            wr_content: summary,
            ret: window.location.href
        };

        for (const [k, v] of Object.entries(fields)) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = k;
            input.value = v;
            formEl.appendChild(input);
        }

        document.body.appendChild(formEl);

      
        formEl.submit();
    });
});

document.getElementById("phonePopupClose").addEventListener("click", function () {
    const confirmClose = confirm("상담을 종료하시겠습니까?");
    if (confirmClose) {
        document.getElementById("phonePopup").classList.add("hidden");
        //window.location.reload();
        document.getElementById("phoneForm").reset();

        document.getElementById("nameError").style.display = "none";
        document.getElementById("phoneError").style.display = "none";
        document.getElementById("contentError").style.display = "none";

        document.getElementById("submitBtn").disabled = true;
    }
});

});

// ============ Inline Script Block 7 ============
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("sch_stx");
    const form = input.closest("form");

    input.addEventListener("mousemove", function(e) {
        const style = window.getComputedStyle(input);
        const paddingRight = parseInt(style.paddingRight);

        const rect = input.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const width = rect.width;

        if (mouseX > width - paddingRight) {
            input.classList.add("cursor-pointer");
        } else {
            input.classList.remove("cursor-pointer");
        }
    });

    input.addEventListener("click", function(e) {
        const style = window.getComputedStyle(input);
        const paddingRight = parseInt(style.paddingRight);

        const rect = input.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;

        if (clickX > width - paddingRight) {
            form.submit();
        }
    });
});

// ============ Inline Script Block 8 ============
const txtWrap = document.querySelector('.main_visual .text');
    const txtWrapmo = document.querySelector('.main_visual .text.mo');

    const txtStringPC = '정도를 걷는 프로집단, 동인';
    const txtStringMO = '정도를 걷는 \n프로집단, 동인';

    const txtSpeed = 200;

    if (window.innerWidth <= 768) {
    txtWrapmo.style.minHeight = '90px'; 
    txtWrapmo.style.visibility = 'visible'; 
}

function typingEvent(txtWrap, txtString, txtIndex = 0) {
    function type() {
        if (txtIndex < txtString.length) {
            let txtNow = txtString[txtIndex++];
            txtWrap.innerHTML += txtNow === "\n" ? "<br>" : txtNow;
            setTimeout(type, txtSpeed);
        } else {
   
            setTimeout(() => {
                txtWrap.innerHTML = ""; 
                typingEvent(txtWrap, txtString); 
            }, 2000);
        }
    }
    type();
}


setTimeout(() => typingEvent(txtWrap, txtStringPC), 2000);
setTimeout(() => typingEvent(txtWrapmo, txtStringMO), 2000);


    //엑스퍼트 그룹
    var tab = ['집단분쟁대응팀','다중피해사건 검경대응팀', '여성청소년범죄겅경대응팀'];

    var mc_2_swiper = new Swiper(".mc_2_swiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.mc_2_pagination',
            clickable: true,
            bulletActiveClass: 'on',
            renderBullet: function (index, className) {
                return '<p class="' + className + '"><span>' + (tab[index]) + '</span></p>';
            },
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

let composing = false;

document.addEventListener("compositionstart", () => composing = true);
document.addEventListener("compositionend", () => {
    composing = false;
    validateName();
    validateContent();
    updateSubmitState();
});


function showBubble(el, msg) {
    el.textContent = msg;
    el.style.display = "block";
}
function hideBubble(el) {
    el.style.display = "none";
}


const nameInput = document.querySelector("input[name='user_name']");
const nameError = document.getElementById("nameError");

function validateName() {
    let original = nameInput.value;


    let filtered = original.replace(/[^A-Za-z가-힣]/g, "");

    if (original !== filtered) {
        showBubble(nameError, "이름은 한글 또는 영문만 입력 가능합니다.");
        nameInput.value = filtered;
        return false;
    }

    const hangulOnly = /^[가-힣]+$/.test(filtered);
    const englishOnly = /^[A-Za-z]+$/.test(filtered);

    if (filtered.length === 0) {
        showBubble(nameError, "이름을 입력해주세요.");
        return false;
    }

    if (hangulOnly) {
        if (filtered.length < 2) {
            showBubble(nameError, "한글 이름은 최소 2자 이상 입력해야 합니다.");
            return false;
        }
        if (filtered.length > 10) {
            showBubble(nameError, "한글 이름은 최대 10자까지 가능합니다.");
            nameInput.value = filtered.slice(0, 10);
            return false;
        }
    } else if (englishOnly) {
        if (filtered.length < 2) {
            showBubble(nameError, "영문 이름은 최소 2자 이상 입력해야 합니다.");
            return false;
        }
        if (filtered.length > 20) {
            showBubble(nameError, "영문 이름은 최대 20자까지 가능합니다.");
            nameInput.value = filtered.slice(0, 20);
            return false;
        }
    } else {
        showBubble(nameError, "한글 또는 영문 이름만 입력 가능합니다.");
        return false;
    }

    hideBubble(nameError);
    return true;
}

nameInput.addEventListener("input", function () {
    if (!composing) {
        validateName();
        updateSubmitState();
    }
});


const phoneInput = document.getElementById("user_phone");
const phoneError = document.getElementById("phoneError");

function validatePhone() {
    let original = phoneInput.value;
    let filtered = original.replace(/[^0-9]/g, "");

    if (original !== filtered) {
        showBubble(phoneError, "전화번호는 숫자만 입력 가능합니다.");
        phoneInput.value = filtered;
        return false;
    }

    if (filtered.length === 0) {
        showBubble(phoneError, "전화번호를 입력해주세요.");
        return false;
    }

    if (filtered.length < 7) {
        showBubble(phoneError, "전화번호는 7자리 이상이어야 합니다.");
        return false;
    }

    if (filtered.length > 15) {
        showBubble(phoneError, "전화번호는 최대 15자리까지 입력 가능합니다.");
        phoneInput.value = filtered.slice(0, 15);
        return false;
    }

    hideBubble(phoneError);
    return true;
}

phoneInput.addEventListener("input", function () {
    validatePhone();
    updateSubmitState();
});


const contentInput = document.querySelector("textarea[name='user_content']");
const contentError = document.getElementById("contentError");

function validateContent() {
    const original = contentInput.value;


    const filtered = original.replace(/[^A-Za-z가-힣0-9\s!,~().?\-]/g, "");

    if (original !== filtered) {
        showBubble(contentError, "허용되지 않은 문자가 포함되어 있습니다.");
        contentInput.value = filtered;
        return false;
    }

    if (filtered.length === 0) {
        showBubble(contentError, "내용을 입력해주세요.");
        return false;
    }

    if (filtered.length > 500) {
        contentInput.value = filtered.substring(0, 500);
        showBubble(contentError, "500자 이내로 입력해야 합니다.");
        return false;
    }

    hideBubble(contentError);
    return true;
}

contentInput.addEventListener("input", function () {
    if (!composing) {
        validateContent();
        updateSubmitState();
    }
});

// ============ Inline Script Block 9 ============
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});

// ============ Inline Script Block 10 ============
$('.term_open').click(function() {
        $('body').addClass('no_scroll');
        $('.term_pop').css('display', 'flex');
    });
    $('.term_pop .btn_close').click(function() {
        $('body').removeClass('no_scroll');
        $('.term_pop').hide();
    });

// ============ External Script: js/main.js ============
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

