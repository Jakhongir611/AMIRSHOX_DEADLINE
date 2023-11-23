let doc = document;
let body = doc.body;
let main = doc.querySelector('.main');
let btn_tel = doc.querySelector('.tel');
let btn_pc = doc.querySelector('.pc');
let market_phone = doc.querySelector('.market_phone');
let market_pc = doc.querySelector('.market_pc');
let catalog = doc.querySelector('.catalog');
let vibor = doc.querySelector('.vibor');
let tel = doc.querySelector('.tel');
let pc = doc.querySelector('.pc');
let izbr = doc.querySelector('.izbr');
let like = doc.querySelector('.like');
let like_fovarite = doc.querySelector('.like_fovarite');


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
catalog.addEventListener('click', () => {
    vibor.classList.remove('none');
})
tel.addEventListener('click', () => {
    vibor.classList.add('none');
})
pc.addEventListener('click', () => {
    vibor.classList.add('none');
})
like.addEventListener('click', () => {
    main.classList.add('none');
    izbr.classList.remove('none');
})