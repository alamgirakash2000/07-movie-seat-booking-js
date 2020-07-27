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

// Getting the items
function getItem(key){
  try{
     return JSON.parse(localStorage.getItem(key))
  }catch{
     return []
  }
}

// Populate the UI
function populatedUI(){
  const getSelectedSeats= getItem('selectedSeats')
  const getIndex= getItem('setIndex')
  const getValue= getItem('setValue')

  getSelectedSeats.forEach(index =>{
      seats[index].classList.add('selected')
  })
   price= getValue
   if (getIndex !== null) {
    ticketPrice.selectedIndex = getIndex;
  }
  updateData()
}