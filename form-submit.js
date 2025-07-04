
const scriptURL = "https://script.google.com/macros/s/AKfycbxs-EJUDE427G4sHk0xuAqmfCBGoKdjPKGmUp6-lrM2moTwA-nMV1kTsd8llC8JO15V-Q/exec";

document.getElementById("profileForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    skills: document.getElementById("skills").value,
    resume: document.getElementById("resume").value,
  };

  const res = await fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  document.getElementById("status").innerText = await res.text();
});
