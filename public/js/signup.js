async function signupFormHandler(event) {
    event.preventDefault();
  const username = document.querySelector("#sign-upUsername").value.trim();
  const password = document.querySelector("#sign-upPassword").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // after signing up, it takes you to the dashboard
        document.location.replace("/dashboard/");
      } else {
        // if something doesn't work, it raises an error
        alert(response.statusText);
      }
    }
  }

document
.querySelector(".sign-up-form")
.addEventListener("submit", signupFormHandler);