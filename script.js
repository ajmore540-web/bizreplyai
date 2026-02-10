function generate() {
  let msg = document.getElementById("msg").value;

  let reply =
  "Thank you for reaching out.\n\n" +
  "Regarding your message: \"" + msg + "\"\n\n" +
  "I'd be happy to help you further. Please let me know how you'd like to proceed.";

  document.getElementById("output").innerText = reply;
}