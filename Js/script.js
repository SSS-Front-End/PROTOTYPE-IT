const labels = document.querySelectorAll('.cours__tabs label');
labels.forEach(item => item.children[0].addEventListener('change', () => {
    for (const iterator of labels) {
        if (iterator.children[0].checked) {
            iterator.classList.add('coursActive');
        } else {
            iterator.classList.remove('coursActive');
        }
    }
}))