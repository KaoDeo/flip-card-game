document.addEventListener('DOMContentLoaded', () => {
    
    //card options
    const cardArray = [
      {
        name: 'bird',
        img: 'images/bird.png'
      },
      {
        name: 'bird',
        img: 'images/bird.png'
      },
      {
        name: 'cat',
        img: 'images/cat.png'
      },
      {
        name: 'cat',
        img: 'images/cat.png'
      },
      {
        name: 'donut',
        img: 'images/donut.png'
      },
      {
        name: 'donut',
        img: 'images/donut.png'
      },
      {
        name: 'duck',
        img: 'images/duck.png'
      },
      {
        name: 'duck',
        img: 'images/duck.png'
      },
      {
        name: 'monkey',
        img: 'images/monkey.png'
      },
      {
        name: 'monkey',
        img: 'images/monkey.png'
      },
      {
        name: 'shiba',
        img: 'images/shiba.png'
      },
      {
        name: 'shiba',
        img: 'images/shiba.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/heart.png')
        cards[optionTwoId].setAttribute('src', 'images/heart.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Srry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = '🥳'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })


  
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


openModalButtons.forEach(button =>{
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active') 
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button =>{
  button.addEventListener('click', () => {
    const modal = button.closest('.modal') 
    closeModal(modal)
  })
})

function openModal(modal){
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

}

function closeModal(modal){
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')

}