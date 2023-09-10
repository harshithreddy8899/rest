const contcontact=()=>{
    let contents=document.createElement('div');
    contents.style.display='flex';
    contents.style.flexDirection='column';
    contents.style.justifyContent="center"
    contents.style.alignItems="center"
    let h11=document.createElement('h1');
    h11.textContent="Contact Us"
    contents.appendChild(h11);
    let h41=document.createElement('h4');
    h41.textContent="100 Water St, New York, NY"
    contents.appendChild(h41);
    return contents;
}
export {contcontact};