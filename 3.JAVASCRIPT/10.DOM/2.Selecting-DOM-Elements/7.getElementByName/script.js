const languageProficiencyEl = document.getElementsByName("languageProficiency");
console.log(languageProficiencyEl);

// Loop through the NodeList to find the selected radio button
for (let i = 0; i < languageProficiencyEl.length; i++) {
  if (languageProficiencyEl[i].checked) {
    console.log(`Selected language is: ${languageProficiencyEl[i].value}`);
  }
}

function collectData() {
  const languageProficiencyEl = document.getElementsByName(
    "languageProficiency"
  );
  console.log(languageProficiencyEl);

  // Loop through the NodeList to find the selected radio button
  for (let i = 0; i < languageProficiencyEl.length; i++) {
    if (languageProficiencyEl[i].checked) {
      console.log(`Selected language is: ${languageProficiencyEl[i].value}`);
    }
  }

  // log all elements with the name 'email'
  const emailEls = document.getElementsByName("email");
  console.log(emailEls);
}
