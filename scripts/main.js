/**
 * Created by wesley on 5/25/16.
 */

((d, w) => {
    // Create home anchor depending on viewport
    let home = d.createElement('div'),
        anchor;
    home.id = 'home';
    if (w.innerWidth > 1023) {
        anchor = d.querySelector('main');

    } else {
        anchor = d.querySelector('body');
    }
    anchor.insertBefore(home, anchor.firstElementChild);

    // Make external links open in new tabs
    let urls = d.querySelectorAll('a'),
        regex = new RegExp('/' + w.location.host + '/');
    for (let key in urls) {
        if (urls.hasOwnProperty(key)) {
            let url = urls[key];
            if (!regex.test(url.href)) {
                //console.log(url.href, 'Will open externally');
                url.addEventListener('click', e => {
                    e.preventDefault();
                    e.stopPropagation();
                    w.open(url.href, '_blank');
                });
            }
        }
    }

})(document, window);
