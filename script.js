var icon = document.querySelector('.icon1');
var icon2 = document.querySelector('.icon2');
var input = document.querySelector('.input2');
var imp = input.value;


function hidepass(){
    icon2.style.display = "none";
    icon.style.display = "inline-block"
    icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'; 
    input.setAttribute('type', 'password');  
    
    
};

function showPass(){
    icon.style.display = "none";
    icon2.style.display = "inline-block";
    icon2.innerHTML = '<i class="fa-regular fa-eye"></i>';
    input.setAttribute('type','text');
}


    

input.addEventListener('input', hidepass,{once:true});

icon.addEventListener('click', showPass);

icon2.addEventListener('click', hidepass);



