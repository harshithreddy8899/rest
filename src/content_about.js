const contabout=()=>{
    let contents=document.createElement('div');
    contents.style.display='flex';
    contents.style.flexDirection='row';
    contents.style.justifyContent="center"
    contents.style.alignItems="center"
    let h11=document.createElement('h1');
    h11.textContent="About The Breakfast Club"
    let p1=document.createElement('p');
    p1.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    p1.style.width="900px";
    contents.appendChild(h11);
    contents.appendChild(p1);
    return contents;
}
export {contabout};