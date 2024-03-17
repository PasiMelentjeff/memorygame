const cardArray =[

{
    name: 'fries',
    img: 'images/fries.png'
},

{
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
},



{

name: 'hotdog',
img: 'images/hotdog.png'


},

{

    name: 'ice-cream',
    img: 'images/ice-cream.png'
    
    
    },
    {

        name: 'milkshake',
        img: 'images/milshake.png'
        
        
        },

        {

            name: 'pizza',
            img: 'images/pizza.png'
            
            
            },

            {
                name: 'fries',
                img: 'images/fries.png'
            },
            
            {
                name: 'cheeseburger',
                img: 'images/cheeseburger.png'
            },
            
           
            
            {
            
            name: 'hotdog',
            img: 'images/hotdog.png'
            
            
            },
            
            {
            
                name: 'ice-cream',
                img: 'images/ice-cream.png'
                
                
                },
                {
            
                    name: 'milkshake',
                    img: 'images/milshake.png'
                    
                    
                    },
            
                    {
            
                        name: 'pizza',
                        img: 'images/pizza.png'
                        
                        
                        }

]

cardArray.sort(()=>0.5-Math.random())

const gridDisplay=document.querySelector('#grid')

let scoreDisplay=document.getElementById('result')

let j=0

let maara=0

let nimi11=''

const cardsShosen=[]

let blankId=[]

function createBoard(){


for (i=0;i<cardArray.length;i++){


const card=document.createElement('img')

card.setAttribute('src','images/blank.png')

card.setAttribute('data-id', i)

card.addEventListener('click', flipCard)

gridDisplay.appendChild(card)



}





}


createBoard()


function flipCard(){

if (maara<2){


maara++


  const  cardId =this.getAttribute('data-id')

 console.log(cardArray[cardId])

console.log('klikattu',cardId)

cardsShosen.push(cardArray[cardId].name)

console.log(cardsShosen)






if(cardsShosen.length===1){

 nimi11 =cardsShosen[0]

blankId[0]=cardId

}

if(cardsShosen.length===2){

     nimi11 =cardsShosen[1]

     blankId[1]=cardId
    }


let valinta='images/'

let lahde=valinta+nimi11+'.png'

this.setAttribute('src',lahde)


if (cardsShosen.length>1){

let nimi1=cardsShosen[0]

let nimi2 =cardsShosen[1]

if(nimi1===nimi2){

j++

scoreDisplay.innerHTML=j

cardsShosen.length=0

maara=0


}
if (nimi1!=nimi2){

   setTimeout(() => {
       
    
    
    
    
    
    Piilota()
    
    
    
    
    
    console.log("World");
      }, 5000);

function Piilota(){


      
 let xx =document.querySelectorAll('img')



for (let i=0;i<blankId.length;i++){



let numero2=blankId[i]


for (let j=0;j<xx.length;j++){
let kuva=xx[j]

let numero=kuva.getAttribute('data-id')

if(numero===numero2){


kuva.setAttribute('src','images/blank.png')

}
}


}

    maara=0

    cardsShosen.length=0


} //eka iffi
}
}

 

}

}
