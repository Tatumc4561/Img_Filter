
const tabcontent1 = document.querySelector('.tabcontent1')
const tabcontent2 = document.querySelector('.tabcontent2')

const tabRadio = document.querySelectorAll('.tabradioz')

for(radio of tabRadio){
    radio.addEventListener('change',function(e){
        e.stopPropagation()
        console.log(e.target.value)
        if (e.target.value=="colorz"){
            tabcontent1.classList.toggle('active')
            tabcontent2.classList.remove('active')
        }
        else if(e.target.value=="mixz"){
            tabcontent2.classList.toggle('active')
            tabcontent1.classList.remove('active')
        }
    })
}
