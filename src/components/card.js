const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const newCard = document.createElement('div')
  newCard.classList.add('card')

  const newheadline = document.createElement('div')
  newheadline.classList.add('headline')
  newheadline.textContent = article.headline
  newCard.appendChild(newheadline)

  const newAuthor = document.createElement('div')
  newAuthor.classList.add('author')
  newCard.appendChild(newAuthor)

  const imgDiv = document.createElement('div')
  imgDiv.classList.add('img-container')
  newAuthor.appendChild(imgDiv)

  const newImg = document.createElement('img')
  newImg.setAttribute('src', article.authorPhoto)
  imgDiv.appendChild(newImg)

  const newSpan = document.createElement('span')
  newSpan.textContent = `By ${article.authorName}`
  newAuthor.appendChild(newSpan)

  console.log(newCard)
  return newCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const findSelector = document.querySelector(selector)
  const articleFinder = 'https://lambda-times-api.herokuapp.com/articles'

  axios.get(articleFinder)
    .then(res => {
      console.log(res)
      findSelector.appendChild(Card(res.data.articles.javascript[0]))
      findSelector.appendChild(Card(res.data.articles.javascript[1]))
      findSelector.appendChild(Card(res.data.articles.javascript[2]))
      findSelector.appendChild(Card(res.data.articles.javascript[3]))

      findSelector.appendChild(Card(res.data.articles.bootstrap[0]))
      findSelector.appendChild(Card(res.data.articles.bootstrap[1]))
      findSelector.appendChild(Card(res.data.articles.bootstrap[2]))

      findSelector.appendChild(Card(res.data.articles.jquery[0]))
      findSelector.appendChild(Card(res.data.articles.jquery[1]))
      findSelector.appendChild(Card(res.data.articles.jquery[2]))

      findSelector.appendChild(Card(res.data.articles.node[0]))
      findSelector.appendChild(Card(res.data.articles.node[1]))

      findSelector.appendChild(Card(res.data.articles.technology[0]))
      findSelector.appendChild(Card(res.data.articles.technology[1]))
      findSelector.appendChild(Card(res.data.articles.technology[2]))

      //console.log(Card(res.data.articles))

    })
    .catch(res => {
      console.log(res)
    })
}

export { Card, cardAppender }
