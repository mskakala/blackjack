document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  //const deck = new Deck();

  let deck = new Deck(randint(1,52));

  deck.shuffle(); 
  let card=document.getElementById('card');
  let hit = document.getElementById('hit');
  hit.addEventListener('click', () => {
    deck.update();
  });
  



  //deck.shuffle();
  //cards.nextcard();s
  //console.log(deck);
})