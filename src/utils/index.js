/**Scroll to top */
export function scrollToTop() {
    if(!window) return;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}