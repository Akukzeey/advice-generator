const dice=document.querySelector('.dice-con')
const paragraph=document.querySelector('.p-tag')
const number=document.querySelector('#number')

dice.addEventListener('click',(e)=>{
        printAdvice()
})


function printAdvice(){
   axios.get("https://api.adviceslip.com/advice").then((resolve)=>{
         const {id,advice}=resolve.data.slip
        let ad=advice
        let num=id

    }).catch(err=>{
        console.log('an error thrown',err)
    })
}
