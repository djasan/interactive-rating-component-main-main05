document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.querySelector('.rating-container');
    const ratingStars = document.querySelectorAll('.rating-star');
    const submitButton = document.querySelector('.submit-button');
    const thankYouCard = document.querySelector('.ThankYouCard');
    const selectedRatingElement = document.querySelector('.selected-rating');
    
    thankYouCard.classList.add('hidden');

    let selectedRating = null;

    ratingStars.forEach(star => {
        star.addEventListener('click', handleStarClick);
    });

    submitButton.addEventListener('click', handleSubmit);

    function handleStarClick(event) {
        ratingStars.forEach(star => {
            star.classList.remove('selected');
        });

        const selectedStar = event.target;
        selectedStar.classList.add('selected');

        selectedRating = selectedStar.dataset.rating;
    }

    function handleSubmit() {
        if (selectedRating !== null) {
            showThankYouCard(selectedRating);
        }
    }

    function showThankYouCard(rating) {
        ratingContainer.style.display = 'none';
        thankYouCard.classList.remove('hidden');
        selectedRatingElement.textContent = rating;
    }
});




