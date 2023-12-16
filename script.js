let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

// converting nodelist to array
let buttonsArray = Array.from(buttons);

let string = '';
// converting array to variable using forEach loop
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) =>{

        if ( e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
            display.value = string;
        }
        else if (e.target.innerHTML == 'AC'){
            string =  '';
            display.value= string;
        }
        else if (e.target.innerHTML == '='){
            // eval is a javascript keyword whole calculation is based in this.
            string =  eval(string);
            var equal = string 
            display.value= equal;
        }
        else if (e.target.innerHTML == 'Ans'){
            string =  eval(string);
            display.value= string;
        }
        else{
            string += e.target.innerHTML;
            display.value = string;
        }
    })
        
})

