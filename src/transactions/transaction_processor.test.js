import processTransactions from './transaction_processor';
 
test('check transaction processing when empty', () => {
    expect(processTransactions([])).toEqual([]);
});

test('check transaction processing exception thrown when null passed', () => {
    expect(() => processTransactions(null)).toThrow();
});

test('check single transaction', () => {
    expect(processTransactions(['jumper'])).toEqual(['jumper 1']);
});

test('check multiple transactions same item', () => {
    expect(processTransactions(['jumper', 'jumper'])).toEqual(['jumper 2']);
});

test('check multiple transactions multiple items', () => {
    expect(processTransactions(['jumper', 'jeans', 'jeans'])).toEqual(['jeans 2', 'jumper 1']);
});

test('check multiple transactions alphabetical ordering correct', () => {
    expect(processTransactions(['jumper', 'jeans'])).toEqual(['jeans 1', 'jumper 1']);
});

test('check multiple transactions numerical order correct', () => {
    expect(processTransactions(['hoody', 'jeans', 'jeans'])).toEqual(['jeans 2', 'hoody 1']);
});

test('notebook example from the readme', () => {
    expect(processTransactions(['notebook', 'notebook', 'mouse', 'keyboard', 'mouse'])).toEqual(['mouse 2', 'notebook 2', 'keyboard 1']);
});