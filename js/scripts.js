




//User Interface Logic
function handleFormSubmission() {
  event.preventDefault();
}


  window.addEventListener("load", function() {
    document.querySelector("form#roboger-responds").addEventListener("submit", handleFormSubmission);
  });