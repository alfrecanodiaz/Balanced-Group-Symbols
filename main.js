function isBalancedGroupOfSymbols(input) {
    const symbols = '()[]{}';
    let closersStack = [];

    for (let character of input) {

        let i = symbols.indexOf(character);

        if (i < 0) continue; // not an opener nor closer

        if (closersStack[closersStack.length - 1] === character) { // is closing
            closersStack.pop();
        } else if (i % 2 === 0) { // is opening
            closersStack.push(symbols[i + 1]); // push the expected closer
        } else return false; // mismatch: an unexpected closer

    }

    return !closersStack.length; // all openers should have been closed
}

console.log(isBalancedGroupOfSymbols("[()]{}{[()()]()}"));
console.log(isBalancedGroupOfSymbols("[(])"));
