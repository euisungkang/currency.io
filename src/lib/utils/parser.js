const krwDenominations = ["", "만", "억", "조", "경", "해", "자", "겁"];
const usdDenominations = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion"];

export function parseExchangeEN(amount) {
    const amountString = Math.trunc(amount).toString();

    let index = 0;
    const chunks = [];
    for (let i = amountString.length; i > 0; i -= 3) {
        let substr = parseInt(amountString.substring(Math.max(i - 3, 0), i)).toString();
        chunks.unshift(substr + " " + usdDenominations[index]);
        index++;
    }

    return chunks;
}

export function parseExchangeKR(amount) {
    const amountString = Math.trunc(amount).toString();

    let index = 0;
    const chunks = [];
    for (let i = amountString.length; i > 0; i -= 4) {
        let substr = parseInt(amountString.substring(Math.max(i - 4, 0), i)).toString();
        chunks.unshift(substr + krwDenominations[index]);
        index++;
    }

    return chunks;
}

export function separateWithComma(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
