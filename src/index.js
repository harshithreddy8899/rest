import { heading } from "./heading.js";
import { conthome } from "./content_home.js";
import { images } from "./images.js";
    
    let bodi=document.getElementById('maini');
    bodi.style.display='flex';
    bodi.style.justifyContent='center';
    bodi.style.alignItems='center';
    bodi.style.backgroundColor='blanchedalmond';
    let main=document.getElementById('content');
    main.appendChild(heading());
    bodi.appendChild(main);
    bodi.appendChild(conthome());
    bodi.appendChild(images());
    let butt1=document.getElementById('button1');
    butt1.addEventListener('click',()=>{
        let main=document.getElementById('content');
        main.appendChild(heading());
        bodi.appendChild(main);
        bodi.appendChild(conthome());
        bodi.appendChild(images());
    });


// console.log("hi ra maws");
   
    


