document.querySelector('#btn-1').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
});
document.querySelector('#btn-2').addEventListener('click',()=>{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
})

let btn3=document.querySelector('#btn-3');
btn3.addEventListener('click',()=>{
    document.querySelector('body').style.backgroundColor = '#232b2b';
    document.querySelector('body').style.color = 'white';
});
