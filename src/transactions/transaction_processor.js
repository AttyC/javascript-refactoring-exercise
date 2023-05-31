const processTransactions = (transactions) => {
  if (transactions === undefined || transactions === null) {
    throw new Error("Undefined collection of transactions");
  }

  const sortedTransctionsArr = [];
  let transactionCountObj = {};

  transactions.forEach((transaction) =>
    transactionCountObj[transaction]
      ? (transactionCountObj[transaction] += 1)
      : (transactionCountObj[transaction] = 1)
  );

  transactionCountObj = sortByAmountThenName(transactionCountObj);

  Object.keys(transactionCountObj).forEach((key, index) => 
    sortedTransctionsArr[index] = `${key} ${transactionCountObj[key]}`
  );

  return sortedTransctionsArr;
}

const sortByAmountThenName = (transactionCountObj) => {
  let sortedKeys = Object.keys(transactionCountObj).sort((a, b) => {
    return (
      transactionCountObj[b] - transactionCountObj[a] ||
      a > b ||
      - (a < b)
    );
  });

  const sortedResults = sortedKeys.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: transactionCountObj[curr],
    }
  }, {});
  
  return sortedResults;
};

export default processTransactions