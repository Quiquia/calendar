const $searchPerson = document.querySelector(".searchPerson-input");
const $iconUsers = document.querySelector("#iconUsers");

$searchPerson.addEventListener("keyup", (event) => {
  const value = event.target.value;
  if (value.length > 0) {
    $iconUsers.style.setProperty("display", "none");
  } else {
    $iconUsers.style.setProperty("display", "block");
  }
});

// document.querySelector(".modal").showModal();
