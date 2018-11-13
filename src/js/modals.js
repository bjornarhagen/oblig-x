const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(modalTrigger => {
  modalTrigger.addEventListener("click", openModal);
});

function openModal(evt) {
  evt.preventDefault();
  const modal = document.querySelector(this.getAttribute("data-target"));

  if (modal) {
    // Create a backdrop
    let backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    backdrop.modal = modal;
    backdrop.backdrop = backdrop;
    backdrop.addEventListener("click", closeModal);

    // Close modal when clicking an element with the modal-close class
    const modalClosers = modal.querySelectorAll(".modal-close");
    modalClosers.forEach(modalCloser => {
      modalCloser.modal = modal;
      modalCloser.backdrop = backdrop;
      modalCloser.addEventListener("click", closeModal);
    });

    // Show the modal
    modal.classList.add("show");
    document.documentElement.appendChild(backdrop);
    document.documentElement.classList.add("modal-active");

    return true;
  }

  return false;
}

function closeModal(evt) {
  evt.preventDefault();

  if (this.modal) {
    // Hide the modal
    this.modal.classList.remove("show");
    document.documentElement.classList.remove("modal-active");

    // Delete the backdrop
    if (this.backdrop) {
      this.backdrop.removeEventListener("click", closeModal);
      this.backdrop.parentElement.removeChild(this);
    }

    // Remove event listeners for the close modal buttons
    const modalClosers = this.modal.querySelectorAll("modal-close");
    modalClosers.forEach(modalCloser => {
      modalCloser.removeEventListener("click", closeModal);
    });

    return true;
  }

  return false;
}
