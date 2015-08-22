/*!
 * My Accessible Website Skip Navigation Plugin
 * http://myaccessible.website
 *
 * Copyright 2015 Fiona Taylor Gorringe and other contributors
 * Released under the MIT license
 * https://github.com/FionaTG/my-accessible-website/blob/master/LICENSE
 */

(function ($) {

    $.fn.maw-skipnav = function (options) {

        var mainContent = $(this);

        var settings = $.extend({
            skipLinkText: "Skip to main content",
            linkAlwaysVisible: false
        }, options);

        // Give the main content element an ID if it doesn't have one
        var mainContentId = mainContent.attr("id");
        if (!mainContentId) {
            mainContentId = "maw-skipnav-mainContent";
            mainContent.attr("id", mainContentId);
        }

        // Give the main content element a tab index if it doesn't have one
        if (!mainContent.attr("tabindex")) {
            mainContent.attr("tabindex", "-1");
        }

        // Add a skip navigation link to the body, that focuses the main content element
        var skipLink = $("<a>", {
            href: "#" + mainContentId,
            class: "maw-skipnav-skiplink " + (settings.linkAlwaysVisible ? "" : " maw-skipnav-skiplink-hidden ")
        }).html(settings.skipLinkText).prependTo($("body"));

        // Show the link when focused
        if (!settings.linkAlwaysVisible) {
            skipLink.focusin(function () {
                skipLink.removeClass("maw-skipnav-skiplink-hidden");
            }).focusout(function () {
                skipLink.addClass("maw-skipnav-skiplink-hidden");
            });
        }

        return this;

    };

}(jQuery));