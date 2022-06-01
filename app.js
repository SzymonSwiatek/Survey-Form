const container = document.querySelector('.ratingStar');

const items = container.querySelectorAll('.ratingStar-item');

container.onclick = star => {
    const elementOfClass = star.target.classList;

    if (!elementOfClass.contains('active')) {
        items.forEach (
            item => item.classList.remove('active')
        );
        
        console.log(star.target.getAttribute("data-rating"));
        elementOfClass.add('active');
    }
};