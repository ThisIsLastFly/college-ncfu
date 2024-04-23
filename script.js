document.querySelectorAll('.flip-cards__card').forEach(function(card) {
    card.addEventListener('click', function() {
        var cardInner = this.querySelector('.flip-cards__card-inner');
        if (getComputedStyle(cardInner).transform === 'none') {
            cardInner.style.transform = 'rotateY(180deg)';
        } else {
            cardInner.style.transform = '';
        }
    });
});