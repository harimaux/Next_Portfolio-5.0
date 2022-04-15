document.body.style.overflowY = "hidden";

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // document ready
    // hide loading screen
    $(".loader").fadeOut(500);
    $("nav").css({
      display: "flex",
    });
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

    //Hides and show mobile menu
    mobileBtn.addEventListener("click", () => {
      nav.classList.toggle("navToggle");

      //Applies animation on button when clicked
      const menuLine1 = document.getElementById("mobileBtnLine1");
      const menuLine2 = document.getElementById("mobileBtnLine2");
      const menuLine3 = document.getElementById("mobileBtnLine3");

      menuLine1.classList.toggle("mobileBtnLine1X");
      menuLine2.classList.toggle("mobileBtnLine2X");
      menuLine3.classList.toggle("mobileBtnLine3X");
    });

    //Top page

    const topDigitsDiv = document.querySelector(".topDigits");
    const topDigitsDiv2 = document.querySelector(".topDigits2");
    setInterval(topDigitsFunction, 200);

    //Generates red digits and displays them on screen
    function topDigitsFunction() {
      const newDigit = document.createElement("div");
      const newDigit2 = document.createElement("div");
      let randomNumber = Math.floor(Math.random() * 2);
      let randomPosition = Math.floor(Math.random() * topDigitsDiv.clientWidth);
      let randomPosition2 = Math.floor(
        Math.random() * topDigitsDiv2.clientWidth
      );
      newDigit.setAttribute("class", "topDigitsAnimation");
      newDigit.style = `margin-left: ${randomPosition}px`;
      newDigit.innerHTML = `${randomNumber}`;
      newDigit2.setAttribute("class", "topDigitsAnimation");
      newDigit2.style = `margin-left: ${randomPosition2}px`;
      newDigit2.innerHTML = `${randomNumber}`;
      topDigitsDiv.appendChild(newDigit);
      topDigitsDiv2.appendChild(newDigit2);

      let countCreatedDivs = topDigitsDiv.getElementsByTagName("div").length;
      let countCreatedDivs2 = topDigitsDiv2.getElementsByTagName("div").length;

      //Removes created divs with digits
      if (countCreatedDivs > 40) {
        topDigitsDiv.removeChild(topDigitsDiv.firstChild);
      }
      if (countCreatedDivs2 > 40) {
        topDigitsDiv2.removeChild(topDigitsDiv2.firstChild);
      }
    }

    //Projects

    //Trgiggers card animation
    $(".cards").hover(function () {
      $(this).toggleClass("cardsAnimate");
      $(this).find(".cardShadow").toggleClass("cardShadowAnime");
    });

    /*     $(".cards").click(function () {
      $(".projectsPoitingHand").fadeTo("fast", 0);
    }); */

    const mobileHand = document.querySelector(".projectsPoitingHand");
    mobileHand.addEventListener("click", () => {
      mobileHand.style.opacity = "0";
    });
  }
};
