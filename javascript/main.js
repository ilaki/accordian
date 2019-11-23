var prev;

function showContent(e){ 
    e.target.parentElement.classList.toggle('show');
    if(prev && prev !== e.target.parentElement) prev.classList.remove('show');
    prev = e.target.parentElement;             
}