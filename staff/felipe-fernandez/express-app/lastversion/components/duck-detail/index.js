const FavButton = require('../fav-button')
const literals = require('./i18n')

function DuckDetail(ducks, lang, query) {
    const  { id, favorite, title, imageUrl, price, description, link } = ducks
    const { goBack } = literals[lang]
    query ?  query=`/search?q=${query}` :  query=`/ducks` 



    return `<article class="duck-detail">
        <h3>${title}</h3>
        <img class="duck-detail__photo" src="${imageUrl}">
        <span class="duck-detail__price">${price}</span>
        <p>${description}</p>
        <a href="${link}" target="_blank">Go to store</a>
        ${FavButton(id, favorite)}
        <a href="${query}">${goBack}</a>
    </article>`
}

module.exports = DuckDetail