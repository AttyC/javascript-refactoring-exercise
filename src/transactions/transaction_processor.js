function processTransactions(transActions) {
  const txr = [];

  if (transActions === undefined || transActions === null) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = {};

  transActions.forEach((transaction) =>
    txCount[transaction]
      ? (txCount[transaction] += 1)
      : (txCount[transaction] = 1)
  );

  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning
  Object.keys(txCount).forEach(function (key, index) {
    txr[index] = `${key} ${txCount[key]}`;
  });

  return txr;
}

const sortByAmountThenName = (txCount) => {
  let sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
    return (
      txCount[itemTwo] - txCount[itemOne] ||
      itemOne > itemTwo ||
      - (itemOne < itemTwo)
    );
  });

  const sortedResults = sortedKeys.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: txCount[curr],
    }
  }, {});
  
  return sortedResults;
};

module.exports = processTransactions;