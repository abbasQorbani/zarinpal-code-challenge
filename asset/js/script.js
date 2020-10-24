// this logic will make deffrent style for search input and open search result box
function openSearchResult(event, type) {
    let searchValue = event.target.value;
    if (searchValue.length >= 2) {
        document.querySelector('.digi-header__top-row-search').classList.add('digi-header__top-row-search--active');
        document.querySelector('.digi-header__top-row-close-icon').classList.add('digi-header__top-row-close-icon--active');
        document.querySelector('.digi-header__top-row-search-result-holder').classList.add('digi-header__top-row-search-result-holder--active');
        document.querySelector('.digi-header__top-row-search-highlight').innerText = searchValue;
    } else if (searchValue.length < 2) {
        document.querySelector('.digi-header__top-row-search').classList.remove('digi-header__top-row-search--active');
        document.querySelector('.digi-header__top-row-close-icon').classList.remove('digi-header__top-row-close-icon--active');
        document.querySelector('.digi-header__top-row-search-result-holder').classList.remove('digi-header__top-row-search-result-holder--active');
    }
}

function closeSearchResult() {
    document.querySelector('.digi-header__top-row-search').classList.remove('digi-header__top-row-search--active');
    document.querySelector('.digi-header__top-row-close-icon').classList.remove('digi-header__top-row-close-icon--active');
    document.querySelector('.digi-header__top-row-search-result-holder').classList.remove('digi-header__top-row-search-result-holder--active');
    document.querySelector('.digi-header__top-row-search-highlight').innerText = '';
    document.querySelector('.digi-header__top-row-search').value = '';
}

