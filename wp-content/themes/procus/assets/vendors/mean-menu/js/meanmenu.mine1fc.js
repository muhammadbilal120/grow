!function (e) { "use strict"; e.fn.meanmenu = function (n) { var a = { meanMenuTarget: jQuery(this), meanMenuContainer: "body", meanMenuClose: "X", meanMenuCloseSize: "18px", meanMenuOpen: "<span /><span /><span />", meanRevealPosition: "right", meanRevealPositionDistance: "0", meanRevealColour: "", meanScreenWidth: "480", meanNavPush: "", meanShowChildren: !0, meanExpandableChildren: !0, meanExpand: "+", meanContract: "-", meanRemoveAttrs: !1, onePage: !1, meanDisplay: "block", removeElements: "", parentClickExpands: !0 }; n = e.extend(a, n); var t = window.innerWidth || document.documentElement.clientWidth; return this.each(function () { var e = n.meanMenuTarget, a = n.meanMenuContainer, r = n.meanMenuClose, i = n.meanMenuCloseSize, s = n.meanMenuOpen, m = n.meanRevealPosition, l = n.meanRevealPositionDistance, u = n.meanRevealColour, o = n.meanScreenWidth, c = n.meanNavPush, d = n.meanShowChildren, h = n.meanExpandableChildren, v = n.meanExpand, y = n.meanContract, j = n.meanRemoveAttrs, Q = n.onePage, p = n.meanDisplay, f = n.removeElements, g = n.parentClickExpands, C = !1; (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll"); var w = "", x = function () { if ("center" === m) { var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px"; w = "left:" + e + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({ left: e }) : jQuery(".meanmenu-reveal").css("left", e) } }, E = !1, A = !1; "right" === m && (w = "right:" + l + ";left:auto;"), "left" === m && (w = "left:" + l + ";right:auto;"), x(); var k = "", M = function () { jQuery(".mean-bar,.mean-push").remove(), jQuery(a).removeClass("mean-container"), jQuery(e).css("display", p), E = !1, A = !1, jQuery(f).removeClass("mean-remove") }, P = function () { var n = "background:" + u + ";color:" + u + ";" + w; if (t <= o) { jQuery(f).addClass("mean-remove"), A = !0, jQuery(a).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>'); var m = jQuery(e).html(); jQuery(".mean-nav").html(m), j && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () { jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id") }), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(".meanmenu-reveal").html(s), k = jQuery(".meanmenu-reveal"), jQuery(".mean-nav ul").hide(), d ? h ? (jQuery(".mean-nav ul ul").each(function () { if (jQuery(this).children().length) { let e = jQuery(this, "li:first").parent(); e.append('<a class="mean-expand" style="font-size: ' + i + '">' + v + "</a>"), !0 === g && e.children("a").first().addClass("mean-expand-cpy") } }), jQuery(".mean-expand-cpy").on("click", function (e) { e.preventDefault(), jQuery(this).parent().children(".mean-expand").trigger("click") }), jQuery(".mean-expand").on("click", function (e) { e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).html(v), jQuery(this).prev("ul").slideUp(300, function () { })) : (jQuery(this).html(y), jQuery(this).prev("ul").slideDown(300, function () { })), jQuery(this).toggleClass("mean-clicked") })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), k.removeClass("meanclose"), jQuery(k).click(function (e) { e.preventDefault(), !1 === E ? (k.css("text-align", "center"), k.css("text-indent", "0"), k.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), E = !0) : (jQuery(".mean-nav ul:first").slideUp(), E = !1), k.toggleClass("meanclose"), jQuery(k).is(".meanmenu-reveal.meanclose") ? k.html(r) : k.html(s), jQuery(f).addClass("mean-remove") }), Q && jQuery(".mean-nav ul > li > a:first-child").on("click", function () { jQuery(".mean-nav ul:first").slideUp(), E = !1, jQuery(k).toggleClass("meanclose").html(s) }) } else M() }; C || jQuery(window).resize(function () { t = window.innerWidth || document.documentElement.clientWidth, M(), t <= o ? (P(), x()) : M() }), jQuery(window).resize(function () { t = window.innerWidth || document.documentElement.clientWidth, C ? (x(), t <= o ? !1 === A && P() : M()) : (M(), t <= o && (P(), x())) }), P() }) } }(jQuery);