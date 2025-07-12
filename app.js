// --- Utility Functions ---
function showSection(sectionId) {
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = 'none';
  });
  const section = document.getElementById(sectionId);
  section.classList.add('active');
  section.style.display = 'block';
}

function showPopup(msg, type = 'info') {
  const popup = document.getElementById('popup-message');
  popup.textContent = msg;
  popup.className = 'popup-message active ' + type;
  setTimeout(() => {
    popup.classList.remove('active');
  }, 3000);
}

function validateYear(input) {
  if (!input.value) return;
  const val = input.value;
  const year = parseInt(val.slice(0, 4), 10);
  if (isNaN(year) || year < 1900 || year > 2030 || val.length < 10) {
    showPopup('Godina mora biti između 1900 i 2030!', 'error');
    input.value = '';
    input.focus();
    return false;
  }
  if (val.length > 16) {
    showPopup('Datum/vrijeme predugo!', 'error');
    input.value = '';
    input.focus();
    return false;
  }
  return true;
}

// --- Sample Data ---
const parkingData = [
  {
    id: 1,
    lokacija: 'Zagreb, Ilica 45',
    velicina: 'veliko',
    pristup: 'garaža',
    cijena: 12,
    kontakt: '0912345678',
    trajanje: 7,
    lat: 45.8132, lng: 15.9770,
    opis: 'Veliko garažno mjesto u centru Zagreba. Pristup 0-24.'
  },
  {
    id: 2,
    lokacija: 'Split, Poljička cesta 23',
    velicina: 'srednje',
    pristup: 'dvorište',
    cijena: 8,
    kontakt: '0987654321',
    trajanje: 3,
    lat: 43.5081, lng: 16.4402,
    opis: 'Dvorišno mjesto, blizu centra Splita.'
  },
  {
    id: 3,
    lokacija: 'Rijeka, Zvonimirova 5',
    velicina: 'malo',
    pristup: 'prilaz',
    cijena: 5,
    kontakt: '0951122334',
    trajanje: 5,
    lat: 45.3271, lng: 14.4422,
    opis: 'Malo mjesto, idealno za manji auto.'
  }
];

// --- Navigation ---
document.getElementById('btn-home').onclick = () => showSection('home-section');
document.getElementById('btn-seeker').onclick = () => showSection('seeker-section');
document.getElementById('btn-provider').onclick = () => showSection('provider-section');
document.getElementById('cta-seeker').onclick = () => showSection('seeker-section');
document.getElementById('cta-provider').onclick = () => showSection('provider-section');

// --- Seeker Registration ---
const seekerForm = document.getElementById('seeker-form');
const seekerSearchForm = document.getElementById('parking-search-form');
const seekerResults = document.getElementById('search-results');
const seekerMap = document.getElementById('seeker-map');

seekerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  seekerForm.classList.add('hidden');
  seekerSearchForm.classList.remove('hidden');
  showPopup('Uspješna registracija! Sada možete tražiti parking.', 'success');
});

seekerSearchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const lokacija = form.lokacija.value.toLowerCase();
  const cijena = form.cijena.value ? parseFloat(form.cijena.value) : Infinity;
  const od = form.od.value, doD = form.do.value;

  if (!validateYear(form.od) || !validateYear(form.do)) return;

  const filtered = parkingData.filter(p =>
    p.lokacija.toLowerCase().includes(lokacija) &&
    p.cijena <= cijena
  );
  renderResults(filtered, seekerResults, true);
  renderMap(filtered, seekerMap);
});

function renderResults(data, container, isSeeker = false) {
  container.innerHTML = '';
  if (!data.length) {
    container.innerHTML = '<div class="result-card">Nema rezultata za tražene kriterije.</div>';
    return;
  }
  data.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = `${idx * 0.08}s`;
    card.innerHTML = `
      <div class="result-title">${p.lokacija} (${p.velicina}, ${p.pristup})</div>
      <div class="result-details">
        Cijena: <b>${p.cijena} EUR/dan</b> <br>
        Dostupno: ${p.trajanje} dana <br>
        Opis: ${p.opis}
      </div>
      <div class="result-actions">
        <button class="result-btn" data-id="${p.id}">Kontaktiraj korisnika</button>
      </div>
    `;
    card.querySelector('.result-btn').onclick = () => {
      showPopup(`Kontakt: ${p.kontakt}`, 'info');
    };
    container.appendChild(card);
  });
  container.parentElement.querySelector('.map-container').classList.remove('hidden');
}

function renderMap(data, mapContainer) {
  mapContainer.classList.remove('hidden');
  mapContainer.innerHTML = 'Dostupne lokacije: ';
  data.forEach(p => {
    const marker = document.createElement('span');
    marker.textContent = `📍 ${p.lokacija} `;
    marker.style.color = 'var(--sky-blue-active)';
    marker.style.marginRight = '10px';
    mapContainer.appendChild(marker);
  });
}

// --- Provider Registration ---
const providerForm = document.getElementById('provider-form');
const providerUploadForm = document.getElementById('parking-upload-form');
const providerListings = document.getElementById('provider-listings');
const providerMap = document.getElementById('provider-map');

providerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  providerForm.classList.add('hidden');
  providerUploadForm.classList.remove('hidden');
  showPopup('Uspješna registracija! Sada možete dodati parking.', 'success');
});

providerUploadForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const f = e.target;
  const novi = {
    id: parkingData.length + 1,
    lokacija: f.lokacija.value,
    velicina: f.velicina.value,
    pristup: f.pristup.value,
    cijena: parseFloat(f.cijena.value),
    kontakt: f.kontakt.value,
    trajanje: parseInt(f.trajanje.value, 10),
    lat: 45.0 + Math.random(), // Mock
    lng: 15.0 + Math.random(),
    opis: 'Novo parking mjesto. Zaradiš 7% manje zbog provizije.'
  };
  parkingData.push(novi);
  showPopup('Parking uspješno dodan!', 'success');
  renderResults([novi], providerListings);
  renderMap([novi], providerMap);
  f.reset();
});

// --- DateTime Validation ---
document.querySelectorAll('input[type="datetime-local"]').forEach(input => {
  input.addEventListener('change', () => validateYear(input));
});

// --- Initial State ---
showSection('home-section');
