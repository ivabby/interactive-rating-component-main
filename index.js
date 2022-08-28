const onOptionClickHandler = (toggledElement) => {
  for (let i = 1; i <= 5; i++) {
    const optionElement = document.getElementById(optionString + i);
    if (optionElement.classList.contains("active"))
      optionElement.classList.remove("active");
  }

  toggledElement.classList.add("active");
};

const optionString = "option_";

for (let i = 1; i <= 5; i++) {
  const optionElement = document.getElementById(optionString + i);
  optionElement.onclick = () => onOptionClickHandler(optionElement);
}
const onSubmitHandler = () => {
  let selectedOption = null;
  for (let i = 1; i <= 5; i++) {
    const optionElement = document.getElementById(optionString + i);
    if (optionElement.classList.contains("active")) {
      selectedOption = optionElement.innerHTML;
    }
  }

  if (selectedOption === null) {
    alert("Please select a rating!");
  } else {
    document.getElementById("feedback_form").classList.add("deactivate");
    document.getElementById("submit_state").classList.remove("deactivate");
    document.getElementById(
      "submit_state_rating"
    ).innerHTML = `You selected ${selectedOption} out of 5`;
  }
};
