function searchText() {
    const keyword = document.getElementById('search').value.trim();
    const resultsContainer = document.getElementById('results');

    clearHighlight(document.body);
    resultsContainer.innerHTML = '';

    if (keyword === '') return;

    highlightText(document.body, keyword, resultsContainer);
}

function clearHighlight(element) {
    const highlightedElements = element.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
    });

    document.getElementById('results').innerHTML = '';
}

function highlightText(element, keyword, resultsContainer) {
    if (element.nodeType === Node.TEXT_NODE) {
        const text = element.nodeValue;
        const keywordRegex = new RegExp(keyword, 'gi');

        if (text.match(keywordRegex)) {
            const fragment = document.createDocumentFragment();
            let lastIndex = 0;

            text.replace(keywordRegex, (match, index) => {
                fragment.appendChild(document.createTextNode(text.substring(lastIndex, index)));

                const highlightSpan = document.createElement('span');
                highlightSpan.className = 'highlight';
                highlightSpan.textContent = match;
                fragment.appendChild(highlightSpan);

                lastIndex = index + match.length;
            });

            fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
            element.replaceWith(fragment);

            addResult(text, element, resultsContainer);
        }
    } else if (element.nodeType === Node.ELEMENT_NODE) {
        if (element.tagName !== 'INPUT' && element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
            Array.from(element.childNodes).forEach(child => highlightText(child, keyword, resultsContainer));
        }
    }
}

function addResult(text, element, resultsContainer) {
    const snippet = text.length > 50 ? text.substring(0, 50) + '...' : text;
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.textContent = snippet;
    resultItem.addEventListener('click', () => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    resultsContainer.appendChild(resultItem);
}