function cta() {
  alert("Welcome to our SaaS!");
}

// load FAQ from JSON
if (document.getElementById("faq")) {
  fetch("data/faq.json")
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(item => {
        html += `<p><b>${item.q}</b><br>${item.a}</p>`;
      });
      document.getElementById("faq").innerHTML = html;
    });
}

// load navbar
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    let nav = document.getElementById("navbar");
    if (nav) nav.innerHTML = data;
  });
