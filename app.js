//------------Save Changes in Local Storage-----------

jQuery(document).ready(function ($) {
  if (localStorage.getItem("highlihtLinksTokenState") === "on") {
    $("a").addClass("highlight-links");
    $("#accessibilityway").find("a").removeClass("highlight-links");
    document.getElementById("highlightlinks").style.display = "none";
    document.getElementById("highlightlinks2").style.display = "block";
  }
  if (localStorage.getItem("invertColorsTokenState") === "on") {
    $("div").addClass("invert-colors");
    $("#accessibilityway").removeClass("invert-colors");
    $("#accessibilityway").find("div").removeClass("invert-colors");
    document.getElementById("contrast_light").style.display = "none";
    document.getElementById("contrast_light_2").style.display = "block";
  }
  if (localStorage.getItem("darkContrastTokenState") === "on") {
    $("div").removeClass("invert-colors");
    //$("div").addClass("dark-contrast");
    $("div").addClass("dark-contrast");
    $("#accessibilityway").removeClass("dark-contrast");
    $("#accessibilityway").find("div").removeClass("dark-contrast");
    document.getElementById("contrast_light_2").style.display = "none";
    document.getElementById("contrast_light").style.display = "none";
    document.getElementById("contrast_light_3").style.display = "block";
  }
  if (localStorage.getItem("desaturateTokenState") === "on") {
    $("body").removeClass("dark-contrast");
    $("div").removeClass("dark-contrast");
    $("div").addClass("desaturate");
    $("#accessibilityway").find("div").removeClass("desaturate");
    $("#accessibilityway").removeClass("desaturate");
    document.getElementById("contrast_light_3").style.display = "none";
    document.getElementById("contrast_light_2").style.display = "none";
    document.getElementById("contrast_light").style.display = "none";
    document.getElementById("contrast_light_4").style.display = "block";
  }
  if (localStorage.getItem("textSpacing1TokenState") === "on") {
    $("div").addClass("text-spacing1");
    $("#accessibilityway").removeClass("text-spacing1");
    $("#accessibilityway").find("div").removeClass("text-spacing1");
    document.getElementById("textSpacing1").style.display = "none";
    document.getElementById("textSpacing2").style.display = "block";
  }
  if (localStorage.getItem("textSpacing2TokenState") === "on") {
    $("div").addClass("text-spacing2");
    $("#accessibilityway").removeClass("text-spacing2");
    $("#accessibilityway").find("div").removeClass("text-spacing2");
    document.getElementById("textSpacing2").style.display = "none";
    document.getElementById("textSpacing1").style.display = "none";
    document.getElementById("textSpacing3").style.display = "block";
  }
  if (localStorage.getItem("textSpacing3TokenState") === "on") {
    $("div").addClass("text-spacing3");
    $("#accessibilityway").removeClass("text-spacing3");
    $("#accessibilityway").find("div").removeClass("text-spacing3");
    document.getElementById("textSpacing3").style.display = "none";
    document.getElementById("textSpacing1").style.display = "none";
    document.getElementById("textSpacing2").style.display = "none";
    document.getElementById("textSpacing4").style.display = "block";
  }
  if (localStorage.getItem("biggerText1TokenState") === "on") {
    $(document).ready(function () {
      $("*").each(function () {
        var k = parseInt($(this).css("font-size"));
        var redSize = (k * 105) / 100; //here, you can give the percentage(now it is increased to 105%)
        $(this).css("font-size", redSize);
      });
    });
    document.getElementById("biggerText1").style.display = "none";
    document.getElementById("biggerText2").style.display = "block";
  }
  if (localStorage.getItem("biggerText2TokenState") === "on") {
    $(document).ready(function () {
      $("*").each(function () {
        var k = parseInt($(this).css("font-size"));
        var redSize = (k * 110) / 100; //here, you can give the percentage(now it is increased to 110%)
        $(this).css("font-size", redSize);
      });
    });
    document.getElementById("biggerText2").style.display = "none";
    document.getElementById("biggerText1").style.display = "none";
    document.getElementById("biggerText3").style.display = "block";
  }
  if (localStorage.getItem("biggerText3TokenState") === "on") {
    $(document).ready(function () {
      $("*").each(function () {
        var k = parseInt($(this).css("font-size"));
        var redSize = (k * 110) / 100; //here, you can give the percentage(now it is increased to 110%)
        $(this).css("font-size", redSize);
      });
    });
    document.getElementById("biggerText3").style.display = "none";
    document.getElementById("biggerText1").style.display = "none";
    document.getElementById("biggerText2").style.display = "none";
    document.getElementById("biggerText4").style.display = "block";
  }
  if (localStorage.getItem("dyslexiaFriendlyTokenState") === "on") {
    $("body").addClass("dyslexia-friendly");
    document.getElementById("dyslexiaFriendly").style.display = "none";
    document.getElementById("dyslexiaFriendly2").style.display = "block";
  }
  if (localStorage.getItem("dyslexiaFriendly2TokenState") === "on") {
    $("body").addClass("legible-font");
    document.getElementById("legibleFonts").style.display = "block";
    document.getElementById("dyslexiaFriendly2").style.display = "none";
  }
  if (localStorage.getItem("cursor1TokenState") === "on") {
    $("body").addClass("big-cursor");
    document.getElementById("cursor1").style.display = "none";
    document.getElementById("cursor2").style.display = "block";
  }
  if (localStorage.getItem("cursor2TokenState") === "on") {
    $("body").removeClass("big-cursor");

    $("#uwexceptionclass2").removeClass("d-none");
    $("#uwexceptionclass1").removeClass("d-none");

    var section1 = document.getElementById("uwexceptionclass1");
    var section2 = document.getElementById("uwexceptionclass2");

    document.onmousemove = function (event) {
      section1.style.height = event.clientY - 37 + "px";
      section2.style.height = "calc(90% - " + event.clientY + "px";
    };
    document.getElementById("cursor2").style.display = "none";
    document.getElementById("cursor1").style.display = "none";
    document.getElementById("cursor3").style.display = "block";
  }
  if (localStorage.getItem("cursor3TokenState") === "on") {
    $("#uwexceptionclass2").addClass("d-none");
    $("#uwexceptionclass1").addClass("d-none");

    $(".uw-s10-reading-guide").removeClass("d-none");
    $(".uw-s10-reading-guide").addClass("d-block");
    $(document).on("mousemove", function (e) {
      $(".uw-s10-reading-guide").css("top", e.pageY - 15);
      $(".uw-s10-reading-guide").css("left", e.pageX);
    });
    document.getElementById("cursor3").style.display = "none";
    document.getElementById("cursor1").style.display = "none";
    document.getElementById("cursor2").style.display = "none";
    document.getElementById("cursor4").style.display = "block";
  }
  if (localStorage.getItem("lineHeight1TokenState") === "on") {
    $("body").addClass("line-height1");
    document.getElementById("lineHeight1").style.display = "none";
    document.getElementById("lineHeight2").style.display = "block";
  }

  if (localStorage.getItem("lineHeight2TokenState") === "on") {
    $("body").addClass("line-height2");
    document.getElementById("lineHeight2").style.display = "none";
    document.getElementById("lineHeight3").style.display = "block";
  }
  if (localStorage.getItem("lineHeight3TokenState") === "on") {
    $("body").addClass("line-height3");
    document.getElementById("lineHeight3").style.display = "none";
    document.getElementById("lineHeight2").style.display = "none";
    document.getElementById("lineHeight1").style.display = "none";
    document.getElementById("lineHeight4").style.display = "block";
  }

  if (localStorage.getItem("textAlign1TokenState") === "on") {
    $("body").addClass("text-align2");
    document.getElementById("textAlign1").style.display = "none";
    document.getElementById("textAlign2").style.display = "block";
  }

  if (localStorage.getItem("textAlign2TokenState") === "on") {
    $("body").removeClass("text-align2");
    $("body").addClass("text-align1");
    document.getElementById("textAlign2").style.display = "none";
    document.getElementById("textAlign3").style.display = "block";
  }

  if (localStorage.getItem("textAlign3TokenState") === "on") {
    $("body").addClass("text-align3");
    document.getElementById("textAlign3").style.display = "none";
    document.getElementById("textAlign2").style.display = "none";
    document.getElementById("textAlign1").style.display = "none";
    document.getElementById("textAlign4").style.display = "block";
  }
  if (localStorage.getItem("textAlign4TokenState") === "on") {
    $("body").removeClass("text-align1");
    $("body").removeClass("text-align2");
    $("body").removeClass("text-align3");
    $("body").addClass("text-align4");
    document.getElementById("textAlign1").style.display = "none";
    document.getElementById("textAlign2").style.display = "none";
    document.getElementById("textAlign5").style.display = "block";
    document.getElementById("textAlign3").style.display = "none";
    document.getElementById("textAlign4").style.display = "none";
  }
  if (localStorage.getItem("readSpeakerTokenState") === "on") {
    document.getElementById("readSpeaker").style.display = "none";
    document.getElementById("readSpeaker1").style.display = "block";
    document.getElementById("speechDiv").style.display = "block";
  }

  localStorage.removeItem("signLanguageTokenStateGetScript", "on");
  //if (localStorage.getItem('signLanguageTokenState') === 'on') {

  //    document.getElementById('signLanguage').style.display = 'none';
  //    document.getElementById('signLanguage1').style.display = 'block';
  //    document.getElementById('DeafServicePlace').style.display = 'block';

  //}

  //if (localStorage.getItem('pauseAnimationsTokenState') === 'on') {
  //    $('body').find('*').toggleClass("pause");
  //    if ($('body').find('*').hasClass("pause")) {
  //        document.getElementById('imgPuase').style.display = 'none';
  //        document.getElementById('imgPlay').style.display = 'block';
  //    }
  //    else {
  //        document.getElementById('imgPuase').style.display = 'block';
  //        document.getElementById('imgPlay').style.display = 'none';
  //    }
  //    if (localStorage.getItem("counter") === null) {

  //        localStorage.setItem("counter", counter);
  //        $('.carousel').carousel({
  //            interval: false,
  //            pause: "true"
  //        });
  //    }
  //    else {
  //        var counterresult = localStorage.getItem("counter")
  //        localStorage.setItem("counter", counter + 1);
  //        if (counterresult < 1) {
  //            //alert("interval true");
  //            $('.carousel').carousel({
  //                interval: true
  //            });

  //        }
  //        else if (counterresult >= 1) {
  //            //alert("interval false");
  //            $('.carousel').carousel({
  //                interval: false,
  //                pause: "true"
  //            });
  //            localStorage.setItem("counter", 0);
  //        }

  //    }
  //    let appAllEls = stopAnimationsWrap.querySelectorAll('*');
  //    let allElsAr = Array.prototype.slice.call(appAllEls);
  //    allElsAr.forEach((thisEl) => {

  //        let elClass = thisEl.classList[0];
  //        //if (elClass.hasAttribute('data-ride') === true) {
  //        //}

  //        let cs = getComputedStyle(thisEl, null);
  //        let thisAnimation = cs.getPropertyValue('animation-name');
  //        if (thisAnimation !== 'none') {

  //            stoppedAnims.push([elClass, {
  //                'animationName': thisAnimation,
  //            }]);

  //            thisEl.style.animationName = 'none';
  //            thisEl.style.transition = "none"

  //        }
  //    });
  //}
});

//------------End Save Changes in Local Storage-----------

var counter = 0;
//document.querySelector('#pauseAnimations').addEventListener('click', (e) => {
//    e.preventDefault()
//    $('body').find('*').toggleClass("pause");
//    localStorage.setItem('pauseAnimationsTokenState', 'on');
//    if ($('body').find('*').hasClass("pause")) {
//        document.getElementById('imgPuase').style.display = 'none';
//        document.getElementById('imgPlay').style.display = 'block';
//    }
//    else {
//        localStorage.removeItem('pauseAnimationsTokenState');
//        document.getElementById('imgPuase').style.display = 'block';
//        document.getElementById('imgPlay').style.display = 'none';
//    }
//    if (localStorage.getItem("counter") === null) {

//        localStorage.setItem("counter", counter);
//        $('.carousel').carousel({
//            interval: false,
//            pause: "true"
//        });
//    }
//    else {
//        var counterresult = localStorage.getItem("counter")
//        localStorage.setItem("counter", counter + 1);
//        if (counterresult < 1) {
//            //alert("interval true");
//            $('.carousel').carousel({
//                interval: true,

//            });

//        }
//        else if (counterresult >= 1) {
//            //alert("interval false");
//            $('.carousel').carousel({
//                interval: false,
//                pause: "true"
//            });
//            localStorage.setItem("counter", 0);
//        }

//    }
//    let appAllEls = stopAnimationsWrap.querySelectorAll('*');
//    let allElsAr = Array.prototype.slice.call(appAllEls);
//    allElsAr.forEach((thisEl) => {

//        let elClass = thisEl.classList[0];
//        //if (elClass.hasAttribute('data-ride') == true) {

//        //}

//        let cs = getComputedStyle(thisEl, null);
//        let thisAnimation = cs.getPropertyValue('animation-name');
//        if (thisAnimation !== 'none') {

//            stoppedAnims.push([elClass, {
//                'animationName': thisAnimation,
//            }]);

//            thisEl.style.animationName = 'none';
//            thisEl.style.transition = "none"

//        }
//    });
//});

onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
    e.preventDefault();
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  }
};

var modal = document.getElementById("accessibilityMenu");
var btn = document.getElementById("accessibilityBtn");
var span = document.getElementsByClassName("widget-close-btn")[0];
btn.onclick = function () {
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};
span.onclick = function () {
  modal.style.display = "none";
};

function addHighlightLink() {
  $("a").addClass("highlight-links");
  $("#accessibilityway").find("a").removeClass("highlight-links");
  if (document.getElementById("highlightlinks").style.display === "block") {
    document.getElementById("highlightlinks").style.display = "none";
    document.getElementById("highlightlinks2").style.display = "block";
    localStorage.setItem("highlihtLinksTokenState", "on");
  }
}

function addHighlightLink2() {
  $("a").removeClass("highlight-links");

  if (document.getElementById("highlightlinks2").style.display === "block") {
    document.getElementById("highlightlinks").style.display = "block";
    document.getElementById("highlightlinks2").style.display = "none";
    localStorage.removeItem("highlihtLinksTokenState");
  }
}

function switchVisible() {
  $("div").addClass("invert-colors");
  $("#accessibilityway").removeClass("invert-colors");
  $("#accessibilityway").find("div").removeClass("invert-colors");

  if (document.getElementById("contrast_light").style.display === "block") {
    document.getElementById("contrast_light").style.display = "none";
    document.getElementById("contrast_light_2").style.display = "block";
    localStorage.setItem("invertColorsTokenState", "on");
  }
}

function invertColors() {
  $("div").removeClass("invert-colors");
  //$("div").addClass("dark-contrast");
  $("div").addClass("dark-contrast");
  $("#accessibilityway").removeClass("dark-contrast");
  localStorage.removeItem("invertColorsTokenState");
  $("#accessibilityway").find("div").removeClass("dark-contrast");

  if (document.getElementById("contrast_light_2").style.display === "block") {
    document.getElementById("contrast_light_2").style.display = "none";
    document.getElementById("contrast_light").style.display = "none";
    document.getElementById("contrast_light_3").style.display = "block";
    localStorage.setItem("darkContrastTokenState", "on");
  }
}

function darkcontrast() {
  $("body").removeClass("dark-contrast");
  $("div").removeClass("dark-contrast");
  $("div").addClass("desaturate");
  $("#accessibilityway").find("div").removeClass("desaturate");
  $("#accessibilityway").removeClass("desaturate");
  localStorage.removeItem("darkContrastTokenState");
  if (document.getElementById("contrast_light_3").style.display === "block") {
    document.getElementById("contrast_light_3").style.display = "none";
    document.getElementById("contrast_light_2").style.display = "none";
    document.getElementById("contrast_light").style.display = "none";
    document.getElementById("contrast_light_4").style.display = "block";
    localStorage.setItem("desaturateTokenState", "on");
  }
}

function desaturate() {
  $("body").removeClass("desaturate");
  $("div").removeClass("desaturate");
  localStorage.removeItem("desaturateTokenState");
  if (document.getElementById("contrast_light_4").style.display === "block") {
    document.getElementById("contrast_light_4").style.display = "none";
    document.getElementById("contrast_light").style.display = "block";
    document.getElementById("contrast_light_2").style.display = "none";
    document.getElementById("contrast_light_3").style.display = "none";
  }
}

function textSpacing1() {
  $("div").addClass("text-spacing1");
  $("#accessibilityway").removeClass("text-spacing1");
  $("#accessibilityway").find("div").removeClass("text-spacing1");

  if (document.getElementById("textSpacing1").style.display === "block") {
    document.getElementById("textSpacing1").style.display = "none";
    document.getElementById("textSpacing2").style.display = "block";
    localStorage.setItem("textSpacing1TokenState", "on");
  }
}

function textSpacing2() {
  $("div").addClass("text-spacing2");
  $("#accessibilityway").removeClass("text-spacing2");
  $("#accessibilityway").find("div").removeClass("text-spacing2");
  if (document.getElementById("textSpacing2").style.display === "block") {
    document.getElementById("textSpacing2").style.display = "none";
    document.getElementById("textSpacing1").style.display = "none";
    document.getElementById("textSpacing3").style.display = "block";
    localStorage.setItem("textSpacing2TokenState", "on");
  }
}

function textSpacing3() {
  $("div").addClass("text-spacing3");
  $("#accessibilityway").removeClass("text-spacing3");
  $("#accessibilityway").find("div").removeClass("text-spacing3");
  if (document.getElementById("textSpacing3").style.display === "block") {
    document.getElementById("textSpacing3").style.display = "none";
    document.getElementById("textSpacing1").style.display = "none";
    document.getElementById("textSpacing2").style.display = "none";
    document.getElementById("textSpacing4").style.display = "block";
    localStorage.setItem("textSpacing3TokenState", "on");
  }
}

function textSpacing4() {
  $("div").removeClass("text-spacing1");
  $("div").removeClass("text-spacing2");
  $("div").removeClass("text-spacing3");
  $("div").removeClass("text-spacing4");
  if (document.getElementById("textSpacing4").style.display === "block") {
    document.getElementById("textSpacing1").style.display = "block";
    document.getElementById("textSpacing2").style.display = "none";
    document.getElementById("textSpacing3").style.display = "none";
    document.getElementById("textSpacing4").style.display = "none";
    localStorage.setItem("textSpacing4TokenState", "on");
    localStorage.removeItem("textSpacing1TokenState");
    localStorage.removeItem("textSpacing2TokenState");
    localStorage.removeItem("textSpacing3TokenState");
  }
}

function biggerText1() {
  $(document).ready(function () {
    $("*").each(function () {
      var k = parseInt($(this).css("font-size"));
      var redSize = (k * 105) / 100; //here, you can give the percentage(now it is increased to 105%)
      $(this).css("font-size", redSize);
    });
  });
  if (document.getElementById("biggerText1").style.display === "block") {
    document.getElementById("biggerText1").style.display = "none";
    document.getElementById("biggerText2").style.display = "block";
    localStorage.setItem("biggerText1TokenState", "on");
  }
}

function biggerText2() {
  $(document).ready(function () {
    $("*").each(function () {
      var k = parseInt($(this).css("font-size"));
      var redSize = (k * 110) / 100; //here, you can give the percentage(now it is increased to 110%)
      $(this).css("font-size", redSize);
    });
  });
  if (document.getElementById("biggerText2").style.display === "block") {
    document.getElementById("biggerText2").style.display = "none";
    document.getElementById("biggerText1").style.display = "none";
    document.getElementById("biggerText3").style.display = "block";
    localStorage.setItem("biggerText2TokenState", "on");
  }
}

function biggerText3() {
  $(document).ready(function () {
    $("*").each(function () {
      var k = parseInt($(this).css("font-size"));
      var redSize = (k * 115) / 100; //here, you can give the percentage( now it is increased to 115%)
      $(this).css("font-size", redSize);
    });
  });
  if (document.getElementById("biggerText3").style.display === "block") {
    document.getElementById("biggerText3").style.display = "none";
    document.getElementById("biggerText1").style.display = "none";
    document.getElementById("biggerText2").style.display = "none";
    document.getElementById("biggerText4").style.display = "block";
    localStorage.setItem("biggerText3TokenState", "on");
  }
}

function biggerText4() {
  //$(document).ready(function () {
  //    $('*').each(function () {
  //        var k = parseInt($(this).css('font-size'));
  //        var redSize = ((k * 77) / 100); //here, you can give the percentage( now it is reduced to 70%)
  //        $(this).css('font-size', redSize);

  //    });
  //});

  $("*").css({ "font-size": "" });
  localStorage.removeItem("biggerText1TokenState");
  localStorage.removeItem("biggerText2TokenState");
  localStorage.removeItem("biggerText3TokenState");
  if (document.getElementById("biggerText4").style.display === "block") {
    document.getElementById("biggerText1").style.display = "block";
    document.getElementById("biggerText2").style.display = "none";
    document.getElementById("biggerText3").style.display = "none";
    document.getElementById("biggerText4").style.display = "none";
  }
}

function dyslexiaFriendly() {
  $("body").addClass("dyslexia-friendly");
  if (document.getElementById("dyslexiaFriendly").style.display === "block") {
    document.getElementById("dyslexiaFriendly").style.display = "none";
    document.getElementById("dyslexiaFriendly2").style.display = "block";
    localStorage.setItem("dyslexiaFriendlyTokenState", "on");
  }
}

function dyslexiaFriendly2() {
  $("body").removeClass("dyslexia-friendly");
  $("body").addClass("legible-font");
  if (document.getElementById("dyslexiaFriendly2").style.display === "block") {
    document.getElementById("legibleFonts").style.display = "block";
    document.getElementById("dyslexiaFriendly2").style.display = "none";
    localStorage.setItem("dyslexiaFriendly2TokenState", "on");
  }
}

function legibleFonts() {
  $("body").removeClass("legible-font");
  $("body").removeClass("dyslexia-friendly");
  localStorage.removeItem("dyslexiaFriendlyTokenState");
  localStorage.removeItem("dyslexiaFriendly2TokenState");
  if (document.getElementById("legibleFonts").style.display === "block") {
    document.getElementById("legibleFonts").style.display = "none";
    document.getElementById("dyslexiaFriendly").style.display = "block";
  }
}

function cursor1() {
  $("body").addClass("big-cursor");
  if (document.getElementById("cursor1").style.display === "block") {
    document.getElementById("cursor1").style.display = "none";
    document.getElementById("cursor2").style.display = "block";
    localStorage.setItem("cursor1TokenState", "on");
  }
}

function cursor2() {
  $("body").removeClass("big-cursor");

  $("#uwexceptionclass2").removeClass("d-none");
  $("#uwexceptionclass1").removeClass("d-none");

  var section1 = document.getElementById("uwexceptionclass1");
  var section2 = document.getElementById("uwexceptionclass2");

  document.onmousemove = function (event) {
    section1.style.height = event.clientY - 37 + "px";
    section2.style.height = "calc(90% - " + event.clientY + "px";
  };

  if (document.getElementById("cursor2").style.display === "block") {
    document.getElementById("cursor2").style.display = "none";
    document.getElementById("cursor1").style.display = "none";
    document.getElementById("cursor3").style.display = "block";
    localStorage.setItem("cursor2TokenState", "on");
  }
}

function cursor3() {
  $("#uwexceptionclass2").addClass("d-none");
  $("#uwexceptionclass1").addClass("d-none");

  $(".uw-s10-reading-guide").removeClass("d-none");
  $(".uw-s10-reading-guide").addClass("d-block");
  $(document).on("mousemove", function (e) {
    $(".uw-s10-reading-guide").css("top", e.pageY - 15);
    $(".uw-s10-reading-guide").css("left", e.pageX);
  });
  if (document.getElementById("cursor3").style.display === "block") {
    document.getElementById("cursor3").style.display = "none";
    document.getElementById("cursor1").style.display = "none";
    document.getElementById("cursor2").style.display = "none";
    document.getElementById("cursor4").style.display = "block";
    localStorage.setItem("cursor3TokenState", "on");
  }
}

function cursor4() {
  $(".uw-s10-reading-guide").removeClass("d-block");
  $(".uw-s10-reading-guide").addClass("d-none");
  localStorage.removeItem("cursor1TokenState");
  localStorage.removeItem("cursor2TokenState");
  localStorage.removeItem("cursor3TokenState");
  if (document.getElementById("cursor4").style.display === "block") {
    document.getElementById("cursor1").style.display = "block";
    document.getElementById("cursor2").style.display = "none";
    document.getElementById("cursor3").style.display = "none";
    document.getElementById("cursor4").style.display = "none";
  }
}

function lineHeight1() {
  $("body").addClass("line-height1");
  if (document.getElementById("lineHeight1").style.display === "block") {
    document.getElementById("lineHeight1").style.display = "none";
    document.getElementById("lineHeight2").style.display = "block";
    localStorage.setItem("lineHeight1TokenState", "on");
  }
}

function lineHeight2() {
  $("body").addClass("line-height2");
  if (document.getElementById("lineHeight2").style.display === "block") {
    document.getElementById("lineHeight2").style.display = "none";
    document.getElementById("lineHeight3").style.display = "block";
    localStorage.setItem("lineHeight1TokenState", "on");
  }
}

function lineHeight3() {
  $("body").addClass("line-height3");
  if (document.getElementById("lineHeight3").style.display === "block") {
    document.getElementById("lineHeight3").style.display = "none";
    document.getElementById("lineHeight2").style.display = "none";
    document.getElementById("lineHeight1").style.display = "none";
    document.getElementById("lineHeight4").style.display = "block";
    localStorage.setItem("lineHeight3TokenState", "on");
  }
}

function lineHeight4() {
  $("body").removeClass("line-height1");
  $("body").removeClass("line-height2");
  $("body").removeClass("line-height3");
  localStorage.removeItem("lineHeight1TokenState");
  localStorage.removeItem("lineHeight2TokenState");
  localStorage.removeItem("lineHeight3TokenState");
  if (document.getElementById("lineHeight4").style.display === "block") {
    document.getElementById("lineHeight1").style.display = "block";
    document.getElementById("lineHeight2").style.display = "none";
    document.getElementById("lineHeight4").style.display = "none";
    document.getElementById("lineHeight3").style.display = "none";
  }
}

function textAlign1() {
  $("body").addClass("text-align2");
  if (document.getElementById("textAlign1").style.display === "block") {
    document.getElementById("textAlign1").style.display = "none";
    document.getElementById("textAlign2").style.display = "block";
    localStorage.setItem("textAlign1TokenState", "on");
  }
}

function textAlign2() {
  $("body").removeClass("text-align2");
  $("body").addClass("text-align1");
  if (document.getElementById("textAlign2").style.display === "block") {
    document.getElementById("textAlign2").style.display = "none";
    document.getElementById("textAlign3").style.display = "block";
    localStorage.setItem("textAlign2TokenState", "on");
  }
}

function textAlign3() {
  $("body").addClass("text-align3");
  if (document.getElementById("textAlign3").style.display === "block") {
    document.getElementById("textAlign3").style.display = "none";
    document.getElementById("textAlign2").style.display = "none";
    document.getElementById("textAlign1").style.display = "none";
    document.getElementById("textAlign4").style.display = "block";
    localStorage.setItem("textAlign3TokenState", "on");
  }
}

function textAlign4() {
  $("body").removeClass("text-align1");
  $("body").removeClass("text-align2");
  $("body").removeClass("text-align3");
  $("body").addClass("text-align4");
  if (document.getElementById("textAlign4").style.display === "block") {
    document.getElementById("textAlign1").style.display = "none";
    document.getElementById("textAlign2").style.display = "none";
    document.getElementById("textAlign5").style.display = "block";
    document.getElementById("textAlign3").style.display = "none";
    document.getElementById("textAlign4").style.display = "none";
    localStorage.setItem("textAlign4TokenState", "on");
  }
}

function textAlign5() {
  $("body").removeClass("text-align1");
  $("body").removeClass("text-align2");
  $("body").removeClass("text-align3");
  $("body").removeClass("text-align4");
  localStorage.removeItem("textAlign1TokenState");
  localStorage.removeItem("textAlign2TokenState");
  localStorage.removeItem("textAlign3TokenState");
  localStorage.removeItem("textAlign4TokenState");
  if (document.getElementById("textAlign5").style.display === "block") {
    document.getElementById("textAlign1").style.display = "block";
    document.getElementById("textAlign2").style.display = "none";
    document.getElementById("textAlign4").style.display = "none";
    document.getElementById("textAlign3").style.display = "none";
    document.getElementById("textAlign5").style.display = "none";
  }
}

function readSpeaker() {
  if (document.getElementById("readSpeaker").style.display === "block") {
    document.getElementById("readSpeaker").style.display = "none";
    document.getElementById("readSpeaker1").style.display = "block";
    document.getElementById("speechDiv").style.display = "block";
    localStorage.setItem("readSpeakerTokenState", "on");
  }
}

function readSpeaker1() {
  localStorage.removeItem("readSpeakerTokenState");
  if (document.getElementById("readSpeaker1").style.display === "block") {
    document.getElementById("readSpeaker1").style.display = "none";
    document.getElementById("readSpeaker").style.display = "block";
    document.getElementById("speechDiv").style.display = "none";
  }
}

function signLanguage() {
  if (document.getElementById("signLanguage").style.display === "block") {
    if (localStorage.getItem("signLanguageTokenStateGetScript") !== "on") {
      $.getScript("https://cdn.mindrocketsapis.com/client/Latest/toolkit.js");
      $.getScript(
        "https://cdn.mindrocketsapis.com/client/Latest/signsplayer.js"
      );
      $.getScript(
        "https://cdn.mindrocketsapis.com/client/Latest/tooltip_add.js"
      );
      $.getScript(
        "https://cdn.mindrocketsapis.com/client/echo-tech/integrator.js"
      );
      localStorage.setItem("signLanguageTokenStateGetScript", "on");
    }
    document.getElementById("signLanguage").style.display = "none";
    document.getElementById("signLanguage1").style.display = "block";
    document.getElementById("DeafServicePlace").style.display = "block";
    $(".mr-cont-tooltip-window").css("display", "block");
    localStorage.setItem("signLanguageTokenState", "on");
    localStorage.setItem("signLanguageTokenStateGetScript", "on");
  }
}

function signLanguage1() {
  localStorage.removeItem("signLanguageTokenState");
  if (document.getElementById("signLanguage1").style.display === "block") {
    document.getElementById("signLanguage1").style.display = "none";
    document.getElementById("signLanguage").style.display = "block";

    document.getElementById("DeafServicePlace").style.display = "none";
    $(".mr-cont-tooltip-window").css("display", "none");
  }
}

function ResetAll() {
  $("div").removeClass("invert-colors");
  document.getElementById("contrast_light").style.display = "block";
  document.getElementById("contrast_light_2").style.display = "none";
  document.getElementById("contrast_light_3").style.display = "none";
  document.getElementById("contrast_light_4").style.display = "none";
  document.getElementById("highlightlinks").style.display = "block";
  document.getElementById("highlightlinks2").style.display = "none";
  document.getElementById("textSpacing1").style.display = "block";
  document.getElementById("textSpacing2").style.display = "none";
  document.getElementById("textSpacing3").style.display = "none";
  document.getElementById("textSpacing4").style.display = "none";
  document.getElementById("biggerText1").style.display = "block";
  document.getElementById("biggerText2").style.display = "none";
  document.getElementById("biggerText3").style.display = "none";
  document.getElementById("biggerText4").style.display = "none";
  //document.getElementById('pauseAnimations').style.display = 'block';
  //document.getElementById('imgPuase').style.display = 'block';
  //document.getElementById('imgPlay').style.display = 'none';
  //document.getElementById('playAnimations').style.display = 'none';
  document.getElementById("dyslexiaFriendly").style.display = "block";
  document.getElementById("dyslexiaFriendly2").style.display = "none";
  document.getElementById("legibleFonts").style.display = "none";
  document.getElementById("cursor1").style.display = "block";
  document.getElementById("cursor2").style.display = "none";
  document.getElementById("cursor3").style.display = "none";
  document.getElementById("cursor4").style.display = "none";
  document.getElementById("lineHeight1").style.display = "block";
  document.getElementById("lineHeight2").style.display = "none";
  document.getElementById("lineHeight3").style.display = "none";
  document.getElementById("lineHeight4").style.display = "none";
  document.getElementById("textAlign1").style.display = "block";
  document.getElementById("textAlign2").style.display = "none";
  document.getElementById("textAlign3").style.display = "none";
  document.getElementById("textAlign4").style.display = "none";
  document.getElementById("textAlign5").style.display = "none";
  //document.getElementById('readSpeaker').style.display = 'block';
  //document.getElementById('readSpeaker1').style.display = 'none';
  //document.getElementById('signLanguage').style.display = 'block';
  //document.getElementById('signLanguage1').style.display = 'none';
  $("#uwexceptionclass2").addClass("d-none");
  $("#uwexceptionclass1").addClass("d-none");
  $("a").removeClass("highlight-links");
  $("div").removeClass("invert-colors");
  $("body").removeClass("dark-contrast");
  $("div").removeClass("dark-contrast");
  $("body").removeClass("dark-contrast");
  $("div").removeClass("dark-contrast");
  $("body").removeClass("desaturate");
  $("div").removeClass("desaturate");
  $("div").removeClass("text-spacing1");
  $("div").removeClass("text-spacing2");
  $("div").removeClass("text-spacing3");
  $("div").removeClass("text-spacing4");
  $("*").css({ "font-size": "" });
  $("body").removeClass("legible-font");
  $("body").removeClass("dyslexia-friendly");
  $("body").removeClass("big-cursor");
  $(".uw-exception1-class").addClass("d-none");
  $(".uw-exception2-class").addClass("d-none");
  $(".uw-s10-reading-guide").removeClass("d-block");
  $(".uw-s10-reading-guide").addClass("d-none");
  $("body").removeClass("line-height1");
  $("body").removeClass("line-height2");
  $("body").removeClass("line-height3");
  $("body").removeClass("text-align1");
  $("body").removeClass("text-align2");
  $("body").removeClass("text-align3");
  $("body").removeClass("text-align4");
  //$('body').find('*').removeClass("pause");

  localStorage.removeItem("highlihtLinksTokenState");
  localStorage.removeItem("invertColorsTokenState");
  localStorage.removeItem("darkContrastTokenState");
  localStorage.removeItem("desaturateTokenState");
  localStorage.removeItem("textSpacing1TokenState");
  localStorage.removeItem("textSpacing2TokenState");
  localStorage.removeItem("textSpacing3TokenState");
  localStorage.removeItem("biggerText1TokenState");
  localStorage.removeItem("biggerText2TokenState");
  localStorage.removeItem("biggerText3TokenState");
  localStorage.removeItem("dyslexiaFriendlyTokenState");
  localStorage.removeItem("dyslexiaFriendly2TokenState");
  localStorage.removeItem("cursor1TokenState");
  localStorage.removeItem("cursor2TokenState");
  localStorage.removeItem("cursor3TokenState");
  localStorage.removeItem("lineHeight1TokenState");
  localStorage.removeItem("lineHeight2TokenState");
  localStorage.removeItem("lineHeight3TokenState");
  localStorage.removeItem("textAlign1TokenState");
  localStorage.removeItem("textAlign2TokenState");
  localStorage.removeItem("textAlign3TokenState");
  localStorage.removeItem("textAlign4TokenState");
  localStorage.removeItem("readSpeakerTokenState");
  localStorage.removeItem("signLanguageTokenState");
  //localStorage.removeItem('pauseAnimationsTokenState');
}
