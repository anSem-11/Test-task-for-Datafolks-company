const saha = {
    url: './img/Saha.jpg',
    title: 'РЕСПУБЛИКА САХА',
    text: 'Респу́блика Саха́ (Яку́тия) — самый большой по площади субъект Российской Федерации, республика в её составе, а также самая большая административно-территориальная единица в мире. По размеру территории Якутия превосходит Аргентину — восьмое государство в мире по площади. Однако население республики меньше одного миллиона человек, что делает плотность населения в ней одной из самых низких в России (меньшую плотность имеют только Чукотский и Ненецкий автономные округа и Магаданская область).',
}

const gazprom = {
    url: './img/Gazprom.jpg',
    title: 'ГАЗПРОМ',
    text: 'Публичное акционерное общество «Газпром» — российская транснациональная энергетическая компания, более 50 % акций которой принадлежит государству. Является холдинговой компанией Группы «Газпром». Непосредственно ПАО «Газпром» осуществляет только продажу природного газа и сдаёт в аренду свою газотранспортную систему.',
}

const nokia = {
    url: './img/Nokia.jpg',
    title: 'NOKIA',
    text: 'Nokia Corporation — финская транснациональная компания, производитель телекоммуникационного оборудования для мобильных, фиксированных, широкополосных и IP-сетей. В 2000-е годы доминировала на мировом рынке мобильных телефонов.',
}

function showModal(url, title, text) {

    let modalImage = document.querySelector('.modal-image');
    let modalTitle = document.querySelector('.modal-title');
    let modalText = document.querySelector('.modal-text');

    modalImage.src = url
    modalTitle.innerHTML = title
    modalText.innerHTML = text

    let modalBg = document.querySelector('.modal-bg');
    let modalClose = document.querySelector('.close-button');
    modalBg.classList.add('bg-active');

    modalClose.addEventListener('click', function () {
        modalBg.classList.remove('bg-active');
        document.body.style.overflow = 'inherit';

    })
    document.body.style.overflow = 'hidden';
}
