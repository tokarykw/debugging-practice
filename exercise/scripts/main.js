window.addEventListener('DOMContentLoaded', function() {

  var cards = document.querySelectorAll('.card');
  var selectedCards = [];
  var matchedCards = [];

  console.log('Printing the cards', cards);
  console.log('Printing the selectedCards', selectedCards);
  console.log('Printing the matchedCards', matchedCards);

  cards.forEach(function(card) {
    console.log('Printing the card', card);

    card.addEventListener('click', function() {
      console.log('Clicked the card', card);

      // If the card has already been matched, ignore it.
      if (card.classList.contains('is-matched')) {
        return;
      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length < 2) { 
        console.log('Selecting the card', card);
        card.classList.add('is-selected');
        selectedCards.push(card);
      }

      console.log('Printing the selected cards', selectedCards);

      // If we have selected two cards, see if they match.
      if (selectedCards.length === 2) {
        console.log('The length of the selected cards array is 2');
        var card1 = selectedCards[0];
        var card2 = selectedCards[1]; //corrected the array number from 0 to 1

        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1.innerText === card2.innerText) {
          console.log('Card 1 and Card 2 match'); // confirmed the code runs when cards match
          matchedCards.push(card1, card2);
          card1.classList.add('is-matched');
          card2.classList.add('is-matched');
        }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
        card1.classList.remove('is-selected');
        card2.classList.remove('is-selected'); // corrected the typo (changed it from card3 to card2)
        selectedCards = [];
      }

      // If we've matched all the cards, display a message.
      if (matchedCards.length === cards.length) { // the mathced card length must exactly equal the number of cards
        alert('You matched all the cards, nice job!');
      }
    });
  });
});
