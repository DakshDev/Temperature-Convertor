


// Varaibles
  let celInp = document.getElementById('cel');
  let fahInp = document.getElementById('fah');

// cel
        celInp.addEventListener('input',celFun);
        function celFun(){
              let c = this.value;
              let f = (c * 9/5) + 32;
              if(!Number.isInteger(f)){
                  f = f.toFixed(4);
              }
              fahInp.value = f;
        }

// fah
        fahInp.addEventListener('input',fahFun);
        function fahFun(){
             let f = this.value;
             let c =  (f - 32) * 5/9;
             if(!Number.isInteger(c)){
                  c = c.toFixed(4);
              }
             celInp.value = c;
        }


