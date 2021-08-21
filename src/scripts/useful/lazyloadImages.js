import LazyLoad from 'vanilla-lazyload';

const lazyloadImages = () => {
    
    const lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazy',
      callback_error: function (el) {
        el.parentNode.classList.add('lazyload-error');
      },
      callback_finish: function () {
        //allLoaded = true;
      }
    });
    return lazyLoadInstance;
}
export default lazyloadImages