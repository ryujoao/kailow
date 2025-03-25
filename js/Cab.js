document.querySelector('.profile').addEventListener('mouseover', function() {
    this.querySelector('.dropdown').style.display = 'block';
});

document.querySelector('.profile').addEventListener('mouseout', function() {
    this.querySelector('.dropdown').style.display = 'none';
});