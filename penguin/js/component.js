class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <header class="not-home main-nav sticky-top w-100 d-inline-flex flex-fill bg-trans">
        <div class="container-xl d-flex justify-content-end align-items-center">
            <div class="logo4 d-flex align-self-start">
                <a href="index.html">
                    <img src="./img/logo.svg" width="150px">
                </a>
            </div>
            <div class="header-nav justify-content-between align-items-center d-lg-inline-flex">
                <nav class="py-2 d-inline-flex align-items-center flex-fill">
                    <a class="nav-link" href="index.html">Нүүр</a>
                    <a class="nav-link" href="about.html">Бидний тухай</a>
                    <a class="nav-link" href="services.html">Үйлчилгээ</a>
                    <a class="nav-link" href="works.html">Ажлууд</a>
                    <a class="nav-link" href="contact.html">Холбоо барих</a>
                    <nav class="nav-footer d-inline-flex align-self-center justify-content-center d-xl-none d-lg-none mx-auto flex-wrap flex-row">
                        <a target="_blank" href="https://www.facebook.com/Penguin-Agency-1509929059291912">facebook</i></a>
                    </nav>
                </nav>

            </div>

        </div>
        <div class="collapse-button d-flex align-self-center ml-auto mr-5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
        `
    }
}

window.customElements.define('header-component', HeaderComponent);


class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer class="mt-5 foot d-flex align-items-center text-light flex-row">
        <div id="contact" class="container-xl">
            <div class="row">
                <div class="col-6 col-md-4 small fw-300">
                    <span class="bold">Copyright © 2022 Penguin.</span><br>
                    <span class="desc-small">Mанай компани нь 2007 оноос эхлэн Хулдаасан хэвлэл, Фото хэвлэл, Офсэт хэвлэл, Меню хэвлэл, Про фото хэвлэл, Түргэн хэвлэлийн үйлчилгээг үзүүлж байна.</span>
                </div>

                <div class="offset-md-2 offset-0 col-md-6 col-6">
                    <h4 class="mb-4">Холбоо барих</h4>
                    <div class="row">
                        <div class="col-md-2 col-3 d-flex justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
                        </div>
                        <div class="col-9">
                            <p class="small">Улаанбаатар хот, Кёкошү тауэр 1</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-3 d-flex justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" class="bi bi-telephone" viewBox="0 0 16 16">
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
                        </div>
                        <div class="col-9">
                            <p class="small">+976 9999 9999</p>
                        </div>
                    </div>

                </div>
            </div>
    </footer>
        `
    }
}

window.customElements.define('footer-component', FooterComponent);


$('.collapse-button').click(function () {
    $(this).toggleClass('open');
    $('header').toggleClass('open', 200, "swing");
  });
