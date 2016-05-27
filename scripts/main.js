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
    anchor.insertBefore(home, anchor.firstElementChild)

    
})(document, window);
