let doc = document;
let body = doc.body;
let btn_tel = doc.querySelector('.tel');
let btn_pc = doc.querySelector('.pc');
let market_phone = doc.querySelector('.market_phone');
let market_pc = doc.querySelector('.market_pc');

btn_tel.addEventListener('click', () => {
    market_pc.classList.add('none');
    market_phone.classList.remove('none');
    btn_tel.classList.add('lol');
    btn_pc.classList.remove('lol');
})
btn_pc.addEventListener('click', () => {
    market_phone.classList.add('none');
    market_pc.classList.remove('none');
    btn_pc.classList.add('lol');
    btn_tel.classList.remove('lol');
})