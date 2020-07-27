const container= document.querySelector('.seats')
const seats= document.querySelectorAll('.row .seat:not(.occupied)')
const ticketPrice= document.querySelector('#movie')
const count= document.querySelector('.count')
const totalPrice=document.querySelector('.price')


var price= +ticketPrice.value
populatedUI()
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateData()
    }
})

ticketPrice.addEventListener('change', e =>{
   price= +e.target.value
   setMovieData(e.target.selectedIndex, e.target.value)
   updateData()
   populatedUI()
}) 

