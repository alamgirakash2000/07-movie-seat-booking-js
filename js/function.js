// Update data
function updateData(){
    const selected= document.querySelectorAll('.row .selected')
 
    const selectedSeats=[...selected].map(seat => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeats',JSON.stringify(selectedSeats))
   
    count.innerText= selected.length
    totalPrice.innerText= selected.length*price
}

// Set movie data
function setMovieData(index,value){
    localStorage.setItem('setIndex',index)
    localStorage.setItem('setValue',value)
}

// Populate the UI
function populatedUI(){
  const getSelectedSeats= JSON.parse(localStorage.getItem('selectedSeats'))
  const getIndex= JSON.parse(localStorage.getItem('setIndex'))
  const getValue= JSON.parse(localStorage.getItem('setValue'))

  getSelectedSeats.forEach(index =>{
      seats[index].classList.add('selected')
  })
   price= getValue
   if (getIndex !== null) {
    ticketPrice.selectedIndex = getIndex;
  }
  updateData()
}