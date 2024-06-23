import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  modalHTML = `<div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>

          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>

      </div>`;

  constructor() {
    this.elem = createElement(this.modalHTML);

    let modalCloseElem = this.elem.querySelector('.modal__close');
    modalCloseElem.addEventListener('click', this.close);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    document.addEventListener('keydown', this.escListener);
  }

  setTitle(titleText) {
    let titleElem = this.elem.querySelector('.modal__title');
    titleElem.innerHTML = titleText;
  }

  setBody(modalBody) {
    let modalBodyElem = this.elem.querySelector('.modal__body');
    modalBodyElem.innerHTML = '';
    modalBodyElem.append(modalBody);
  }

  close = () => {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.escListener);
  }

  escListener = (event) => {
    if (event.code !== 'Escape') return;

    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.escListener);
  }
}
