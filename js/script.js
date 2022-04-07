document.body.style.overflowY = "hidden";

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // document ready
    // hide loading screen
    $(".loader").fadeOut(500);
    $("nav").css({ display: "flex" });
    document.body.style.overflowY = "unset";

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000,
              function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });

    //Mobile Menu
    const mobileBtn = document.querySelector(".mobileBtnContainer");
    const nav = document.querySelector("nav");
    mobileBtn.addEventListener("click", () => {
      nav.classList.toggle("navToggle");
    });

    //Top page

    const topDigitsDiv = document.querySelector(".topDigits");
    setInterval(topDigitsFunction, 200);

    function topDigitsFunction() {
      const newDigit = document.createElement("div");
      let randomNumber = Math.floor(Math.random() * 2);
      let randomPosition = Math.floor(Math.random() * topDigitsDiv.clientWidth);
      newDigit.setAttribute("class", "topDigitsAnimation");
      newDigit.style = `margin-left: ${randomPosition}px`;
      newDigit.innerHTML = `${randomNumber}`;
      topDigitsDiv.appendChild(newDigit);

      let countCreatedDivs = topDigitsDiv.getElementsByTagName("div").length;

      if (countCreatedDivs > 40) {
        topDigitsDiv.removeChild(topDigitsDiv.firstChild);
      }
    }
  }
};
