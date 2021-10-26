const statusListJS = document.querySelector('.js-status-list');
const orderStatusList = document.querySelector('.order__status-list');

statusListJS.addEventListener('click', function() {
    orderStatusList.style = 'display: block';
});

// statusListJS.addEventListener('click', function(event) {
//     event.stopPropagation();
// });