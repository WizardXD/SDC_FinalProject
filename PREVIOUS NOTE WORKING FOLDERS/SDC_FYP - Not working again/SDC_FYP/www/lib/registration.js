document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#push-button-1').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: '' } });  //title --> set the header for page 2
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;    //Header for page 2
        page.querySelector('#push-button-2').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page3.html', { data: { title: '' } });  //title --> set the header for page 3
        };
    } else if (page.id === 'page3') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;    //Header for page 3
    }
});