$(document).ready(function () {
    $(".rating").each(function () {
        let startupId = $(this).data("id");
        let savedRating = localStorage.getItem("rating_" + startupId);
        if (savedRating) {
            setRating($(this), parseInt(savedRating));
        }
    });

    $(".rating span").on("click", function () {
        let selectedStar = $(this);
        let rating = selectedStar.index() + 1;
        let startupId = selectedStar.parent().data("id");

        localStorage.setItem("rating_" + startupId, rating);
        setRating(selectedStar.parent(), rating);
    });

    function setRating(ratingDiv, rating) {
        ratingDiv.children().each(function (index) {
            $(this).toggleClass("selected", index < rating);
        });

        let startupId = ratingDiv.data("id");
        let avgRatingElement = ratingDiv.siblings(".avg-rating").find("span");
        avgRatingElement.text(rating.toFixed(1));
    }
});
