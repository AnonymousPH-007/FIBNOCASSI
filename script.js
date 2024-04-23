const numTermsInput = document.getElementById('num-terms');
const generateBtn = document.getElementById('generate-btn');
const resultDiv = document.getElementById('result');

generateBtn.addEventListener('click', () => {
    const numTerms = parseInt(numTermsInput.value);
    const fibSeries = generateFibSeries(numTerms);
    resultDiv.innerText = `Fibonacci Series: ${fibSeries.join(', ')}`;
});

function generateFibSeries(n) {
    const fibSeries = [0, 1];
    let nextTerm = 0;

    while (fibSeries[fibSeries.length - 1] <= n) {
        nextTerm = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        fibSeries.push(nextTerm);
    }

    return fibSeries;
}