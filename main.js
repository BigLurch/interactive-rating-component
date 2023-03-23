const cardRatingSystem = () => {
    
    const ratingNr = document.querySelectorAll('.rating-card__list span')
    const submitButton = document.querySelector('.rating-card__button')
    const selectedScore = document.getElementById('select')
    const ratingCard = document.querySelector('.rating-card')
    const thankCard = document.querySelector('.ty-card')
    let rate = null
    
    ratingNr.forEach((rating) => {
        rating.addEventListener('click', (e) => {
            const active = document.querySelector('.checked')
            if (active) {
                active.classList.remove('checked')
            }
            const card = e.target
            card.classList.add('checked')
            rate = e.target.innerText
            console.log(rate)
        })
    })

    submitButton.addEventListener('click', () => {
        if (rate) {
            selectedScore.innerText = rate
            ratingCard.classList.add('hidden')
            thankCard.classList.remove('hidden')
        }
    })

}

cardRatingSystem()