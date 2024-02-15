// returns random card data from a lis of cards
const getRandomCard = (cards) => {
  const length = cards.length - 1;
  let index = Math.floor(Math.random() * length);

  return cards[index];
};

export default getRandomCard;
