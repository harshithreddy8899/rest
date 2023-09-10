const conthome=()=>{
    let contents=document.createElement('div');
    let h41=document.createElement('h4');
    let h42=document.createElement('h4');
    let h11=document.createElement('h1');
    h41.textContent="Welcome to";
    h11.textContent="The Breakfast Club";
    h42.textContent="Best breakfast in town!";
    contents.appendChild(h41);
    contents.appendChild(h11);
    contents.appendChild(h42);
    return contents;
}
export {conthome};