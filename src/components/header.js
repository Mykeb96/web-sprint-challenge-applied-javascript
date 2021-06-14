const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const newCard = document.createElement('div')
  newCard.classList.add('header')

  const newSpan = document.createElement('span')
  newSpan.classList.add('date')
  newSpan.textContent = date
  newCard.appendChild(newSpan)

  const newH1 = document.createElement('h1')
  newH1.textContent = title
  newCard.appendChild(newH1)

  const newSpan2 = document.createElement('span')
  newSpan2.classList.add('temp')
  newSpan2.textContent = temp
  newCard.appendChild(newSpan2)

  return newCard

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const newHeader = Header('new Title', 'August 13', '51')
  const findSelector = document.querySelector(selector)
  findSelector.appendChild(newHeader)
}

export { Header, headerAppender }
