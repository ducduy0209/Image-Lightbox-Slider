const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const gallery = $$('.gallery .image');
const previewBox = $('.preview-box');
const previewImg = $('.image-box img');
const prevBtn = $('.prev');
const nextBtn = $('.next');
const closeBtn = $('.details .icon');
const currentImg = $('.current-img');
const totalImg = $('.total-img');
const shadow = $('.shadow');

const showPreview = () => {
    previewBox.style.opacity = '1';
    previewBox.style.pointerEvents = 'all';
    shadow.style.display = 'block';
}

const hidePreview = () => {
    previewBox.style.opacity = '0';
    previewBox.style.pointerEvents = 'none';
    shadow.style.display = 'none';
}

const checkPrevBtn = (index) => {
    if (index == 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
}

const checkNextBtn = (index) => {
    if (index == gallery.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

for (let i = 0; i < gallery.length; i++) {
    totalImg.innerText = gallery.length;
    let newIndex = i;

    gallery[i].onclick = function() {
        const preview = () => {
            let imgUrl = gallery[newIndex].querySelector('img').src;
            previewImg.src = imgUrl;
            currentImg.innerText = newIndex + 1;
        }
        showPreview();
        preview();
        prevBtn.onclick = () => {
            newIndex--;
            checkPrevBtn(newIndex);
            checkNextBtn(newIndex);
            preview();
        }
        nextBtn.onclick = () => {
            newIndex++;
            checkNextBtn(newIndex);
            checkPrevBtn(newIndex);
            preview();
        }
        checkPrevBtn(i);
        checkNextBtn(i);
    }
}


closeBtn.addEventListener('click', hidePreview);
shadow.addEventListener('click', hidePreview);