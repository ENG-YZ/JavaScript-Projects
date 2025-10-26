var shoes = document.querySelectorAll('.shoes');
var bigShoes = document.querySelector('.bigShoes'); // Added a dot for class selector
for(let i = 0 ; i < shoes.length ; i++ ){
    shoes[i].addEventListener('click',function(){
        bigShoes.src = `imgs/shoes (${i}).png`
        console.log(shoes[i])
        bigShoes.style.transition = '.5s'
    })

}
