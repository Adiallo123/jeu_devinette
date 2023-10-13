let message = document.getElementById("message");
let form = document.getElementById("form");
let button = document.getElementById("button");
let link = document.getElementById("link");

const secretNumber = Math.floor(Math.random() *100);
let attempts =3;
button.onclick = function(){
    const input = document.getElementById('input');
    if(input.value != ""){
        if(input.value > secretNumber){
            message.innerText="le nombre est inferieur à "+ input.value;
            message.style.color= "orange";
        }
        else if(input.value < secretNumber){
            message.innerText="le nombre est supérieur à "+ input.value;
            message.style.color= "orange";
        }

        if(attempts == 0){
            message.innerText="oufs vous avez perdu, le nombre attendu était "+secretNumber;
            message.style.color="red";
            form.style.display="none";
            link.style.display="flex";
        }

        attempts--;

        if(input.value == secretNumber){
            message.innerText="Bravo vous avez trouvez le nombre secret "+ input.value;
            message.style.color="green";
            form.style.display="none";
            link.style.display="flex";
        }
        
           
            
    }else{
        message.innerText ="le champ ne doit pas etre vide!";
        message.style.color = "red";
    }
}