let checkBox = document.querySelector('form input[type="checkbox"]');
let scheduleInput = document.querySelector('input[type="date"]');
const schedule = () => {
  scheduleInput.disabled = !scheduleInput.disabled;
};
checkBox.addEventListener("click", schedule);
