const titles = {
  index: { en: "Welcome", af: "Welkom", xh: "Wamkelekile" },
  flood: { en: "Flood Safety", af: "Vloed Veiligheid", xh: "Ukhuseleko loQuqu" },
  wildfire: { en: "Fire Safety", af: "Brand Veiligheid", xh: "Ukhuseleko loMlilo" },
  earthquake: { en: "Earthquake Safety", af: "Aardbewing Veiligheid", xh: "Ukhuseleko lweNyikima" },
  drought: { en: "Drought Safety", af: "Droogte Veiligheid", xh: "Ukhuseleko loKoma" },
  storm: { en: "Storm Safety", af: "Storm Veiligheid", xh: "Ukhuseleko lweNtsokolo" },
  "first-aid": { en: "First Aid Tips", af: "Eerstehulp Wenke", xh: "Iingcebiso zoNcedo Lokuqala" },
  contacts: { en: "Emergency Contacts", af: "Noodkontakte", xh: "Amaqhagamshelo Ongxamisekileyo" }
};

function updateTitle(lang) {
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const titleEl = document.getElementById('pageTitle');
  if (titles[page] && titleEl) {
    titleEl.textContent = titles[page][lang];
  }

  document.querySelectorAll('[data-lang-en]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-lang-${lang}`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateTitle("en");
});
