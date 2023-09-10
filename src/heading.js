import { contcontact } from "./content_content";
import { conthome } from "./content_home";
import { contmenu } from "./content_menu";
import { contabout } from "./content_about";
import { images } from "./images";
const heading = ()=>{
    
    let bodi=document.getElementById('maini');
    let heads=document.createElement("div");
    let button1=document.createElement('button');
    button1.textContent='HOME';
    button1.id="button1";
    button1.style.height='50px';
    button1.style.width='200px';
    button1.style.borderRadius='10px';
    button1.style.boxShadow='none';
    button1.style.backgroundColor='brown';
    button1.style.border='0px';
    button1.style.color='yellow';
    button1.addEventListener('click',()=>{
        
        bodi.innerHTML="";
        let main=document.createElement('div');
        main.appendChild(heading());
        bodi.appendChild(main);
        bodi.appendChild(conthome());
        bodi.appendChild(images());
    });
    heads.appendChild(button1);
    let button2=document.createElement('button');
    button2.id="button2";
    button2.textContent='Menu';
    button2.style.height='50px';
    button2.style.width='200px';
    button2.style.borderRadius='10px';
    button2.style.boxShadow='none';
    button2.style.backgroundColor='brown';
    button2.style.border='0px';
    button2.style.color='yellow';
    button2.addEventListener('click',()=>{
        
        bodi.innerHTML="";
        let main=document.createElement('div');
        main.appendChild(heading());
        bodi.appendChild(main);
        bodi.appendChild(contmenu());
        bodi.appendChild(images());
    });
    heads.appendChild(button2);
    let button3=document.createElement('button');
    button3.id="button3";
    button3.textContent='ABOUT';
    button3.style.height='50px';
    button3.style.width='200px';
    button3.style.borderRadius='10px';
    button3.style.boxShadow='none';
    button3.style.backgroundColor='brown';
    button3.style.border='0px';
    button3.style.color='yellow';
    button3.addEventListener('click',()=>{
        
        bodi.innerHTML="";
        let main=document.createElement('div');
        main.appendChild(heading());
        bodi.appendChild(main);
        bodi.appendChild(contabout());
        bodi.appendChild(images());
    });
    heads.appendChild(button3);
    let button4=document.createElement('button');
    button4.id="button4";
    button4.textContent='CONTACT';
    button4.style.height='50px';
    button4.style.width='200px';
    button4.style.borderRadius='10px';
    button4.style.boxShadow='none';
    button4.style.backgroundColor='brown';
    button4.style.border='0px';
    button4.style.color='yellow';
    button4.addEventListener('click',()=>{
        
        bodi.innerHTML="";
        let main=document.createElement('div');
        main.appendChild(heading());
        bodi.appendChild(main);
        bodi.appendChild(contcontact());
        bodi.appendChild(images());
    });
    heads.appendChild(button4);
    heads.style.display='flex';
    heads.style.flexDirection = 'columns';
    heads.style.justifyContent='space-between'
    heads.style.backgroundColor = ' brown';
    heads.style.height='50px';
    heads.style.width = '900px';
    return heads;
}

export {heading};