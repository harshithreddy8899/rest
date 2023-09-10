const contmenu=()=>{
    let contents=document.createElement('div');
    contents.style.display='flex';
    contents.style.flexDirection='column';
    contents.style.justifyContent="start"
    contents.style.alignItems="center"
    let h11=document.createElement('h1');
    h11.textContent="Our Menu"
    let h41=document.createElement('h4');
    h41.textContent="Breakfast Options";
    let ul1=document.createElement('ul');
    let ll11=document.createElement('ll');
    ll11.textContent="english";
    ul1.appendChild(ll11);
    let h42=document.createElement('h4');
    h42.textContent="Add-ons";
    let ul2=document.createElement('ul');
    let ll21=document.createElement('ll');
    ll11.textContent="banana";
    ul2.appendChild(ll21);
    let h43=document.createElement('h4');
    h43.textContent="Beverages";
    let ul3=document.createElement('ul');
    let ll31=document.createElement('ll');
    ll11.textContent="coffee";
    ul3.appendChild(ll31);
    contents.appendChild(h11);
    contents.appendChild(h41);
    contents.appendChild(ul1);
    contents.appendChild(h42);
    contents.appendChild(ul2);
    contents.appendChild(h43);
    contents.appendChild(ul3);
    return contents;
}
export {contmenu};