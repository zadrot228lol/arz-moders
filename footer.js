const init = () => {
    const footerDomain = document.querySelector('footer .footer__container .footer__domain');
    const domain = "az-surpise.ru" || location.host;

    const footerYear = document.querySelector('footer .footer__container .footer__logo-year');

    footerYear.textContent = new Date().getFullYear();
    footerDomain.textContent = domain;
}

init();