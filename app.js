// --- Language System ---
const translations = {
  hr: {
    'nav-home': 'Početna',
    'nav-seeker': 'Tražim parking',
    'nav-provider': 'Rentam parking',
    'nav-about': 'O nama',
    'nav-contact': 'Kontakt',
    'main-title': 'Pronađi ili iznajmi parking mjesto u Hrvatskoj',
    'subtitle': 'Povezujemo vlasnike parking mjesta s onima koji ih trebaju',
    'cta-seeker': 'Tražim parking',
    'cta-provider': 'Rentam parking',
    'seeker-registration': 'Registracija korisnika',
    'provider-registration': 'Registracija iznajmljivača',
    'search-parking': 'Traži parking',
    'add-parking': 'Dodaj parking mjesto',
    'placeholder-name': 'Ime',
    'placeholder-surname': 'Prezime',
    'placeholder-email': 'Email',
    'placeholder-dob': 'Datum rođenja',
    'placeholder-contact': 'Kontakt broj',
    'placeholder-location': 'Lokacija',
    'placeholder-parking-location': 'Lokacija parkinga',
    'placeholder-vehicle': 'Detalji vozila',
    'placeholder-max-price': 'Maks. cijena (EUR)',
    'placeholder-access': 'Pristup (garaža, dvorište...)',
    'placeholder-price-per-day': 'Cijena (EUR/dan)',
    'placeholder-rental-duration': 'Duljina najma (dana)',
    'placeholder-subject': 'Naslov poruke',
    'placeholder-message': 'Vaša poruka...',
    'btn-register': 'Registriraj se',
    'btn-find-parking': 'Pronađi parking',
    'btn-add-parking': 'Dodaj parking',
    'btn-send-message': 'Pošaljite poruku',
    'select-size': 'Veličina',
    'size-small': 'Malo',
    'size-medium': 'Srednje',
    'size-large': 'Veliko',
    'contact-user': 'Kontaktiraj korisnika',
    'success-registration': 'Uspješna registracija! Sada možete tražiti parking.',
    'success-provider-registration': 'Uspješna registracija! Sada možete dodati parking.',
    'success-parking-added': 'Parking uspješno dodan!',
    'message-sent': 'Poruka je uspješno poslana!',
    'error-invalid-year': 'Godina mora biti između 1900 i 2030!',
    'error-date-too-long': 'Datum/vrijeme predugo!',
    'no-results': 'Nema rezultata za tražene kriterije.',
    'linkedin-redirect': 'Preusmjeravamo vas na LinkedIn stranicu...',
    'instagram-redirect': 'Preusmjeravamo vas na Instagram profil...',
    'facebook-redirect': 'Preusmjeravamo vas na Facebook stranicu...',
    'discord-redirect': 'Preusmjeravamo vas na Discord zajednicu...',
    'available-locations': 'Dostupne lokacije: ',
    'price-per-day': 'EUR/dan',
    'available-days': 'dana',
    'description': 'Opis',
    'contact': 'Kontakt',
    'about-title': 'O PARKIRAJ.ME',
    'about-intro': 'PARKIRAJ.ME je inovativna platforma koja povezuje vlasnike parking mjesta s onima koji ih trebaju širom Hrvatske.',
    'about-mission': 'Naša misija je jednostavna - učiniti pronalaženje i iznajmljivanje parking mjesta lakšim, sigurnijim i dostupnijim za sve.',
    'about-features': 'Ključne značajke:',
    'feature-1': 'Jednostavna registracija i korištenje',
    'feature-2': 'Sigurna platforma za transakcije',
    'feature-3': 'Interaktivne karte i filtriranje',
    'feature-4': 'Podrška za različite tipove parking mjesta',
    'feature-5': 'Mobilno optimizirana aplikacija',
    'contact-title': 'Kontaktirajte nas',
    'privacy-title': 'Pravila privatnosti i uvjeti korištenja',
    'privacy-policy': 'Pravila privatnosti',
    'privacy-intro': 'Vaša privatnost je važna za nas. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše podatke.',
    'data-collection': 'Prikupljanje podataka',
    'data-collection-text': 'Prikupljamo samo podatke potrebne za pružanje naših usluga, uključujući ime, email, kontakt broj i lokaciju.',
    'terms-service': 'Uvjeti korištenja',
    'terms-intro': 'Korištenjem PARKIRAJ.ME platforme, slažete se s našim uvjetima korištenja.',
    'user-responsibilities': 'Odgovornosti korisnika',
    'user-responsibilities-text': 'Korisnici su odgovorni za točnost podataka i poštovanje dogovorenih uvjeta najma.',
    'copyright-title': 'Autorska prava',
    'copyright-notice': '© 2025 PARKIRAJ.ME. Sva prava pridržana.',
    'copyright-text': 'Sav sadržaj na ovoj platformi, uključujući dizajn, logotip, tekst i funkcionalnost, zaštićen je autorskim pravima.',
    'intellectual-property': 'Intelektualno vlasništvo',
    'ip-text': 'PARKIRAJ.ME je registrirana trgovačka marka. Neovlašteno korištenje bilo kojeg dijela platforme strogo je zabranjeno.',
    'footer-follow': 'Pratite nas',
    'footer-links': 'Korisni linkovi',
    'footer-legal': 'Pravne informacije',
    'footer-about-link': 'O nama',
    'footer-contact-link': 'Kontakt',
    'footer-community-link': 'Pridružite se zajednici',
    'footer-privacy-link': 'Privatnost i uvjeti',
    'footer-copyright-link': 'Autorska prava',
    'footer-copyright': '© 2025 PARKIRAJ.ME. Sva prava pridržana.'
  },
  en: {
    'nav-home': 'Home',
    'nav-seeker': 'Find Parking',
    'nav-provider': 'Rent Parking',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'main-title': 'Find or rent parking spaces in Croatia',
    'subtitle': 'Connecting parking space owners with those who need them',
    'cta-seeker': 'Find Parking',
    'cta-provider': 'Rent Parking',
    'seeker-registration': 'User Registration',
    'provider-registration': 'Provider Registration',
    'search-parking': 'Search Parking',
    'add-parking': 'Add Parking Space',
    'placeholder-name': 'First Name',
    'placeholder-surname': 'Last Name',
    'placeholder-email': 'Email',
    'placeholder-dob': 'Date of Birth',
    'placeholder-contact': 'Contact Number',
    'placeholder-location': 'Location',
    'placeholder-parking-location': 'Parking Location',
    'placeholder-vehicle': 'Vehicle Details',
    'placeholder-max-price': 'Max Price (EUR)',
    'placeholder-access': 'Access (garage, yard...)',
    'placeholder-price-per-day': 'Price (EUR/day)',
    'placeholder-rental-duration': 'Rental Duration (days)',
    'placeholder-subject': 'Message Subject',
    'placeholder-message': 'Your message...',
    'btn-register': 'Register',
    'btn-find-parking': 'Find Parking',
    'btn-add-parking': 'Add Parking',
    'btn-send-message': 'Send Message',
    'select-size': 'Size',
    'size-small': 'Small',
    'size-medium': 'Medium',
    'size-large': 'Large',
    'contact-user': 'Contact User',
    'success-registration': 'Registration successful! You can now search for parking.',
    'success-provider-registration': 'Registration successful! You can now add parking spaces.',
    'success-parking-added': 'Parking space added successfully!',
    'message-sent': 'Message sent successfully!',
    'error-invalid-year': 'Year must be between 1900 and 2030!',
    'error-date-too-long': 'Date/time too long!',
    'no-results': 'No results found for the search criteria.',
    'linkedin-redirect': 'Redirecting you to LinkedIn page...',
    'instagram-redirect': 'Redirecting you to Instagram profile...',
    'facebook-redirect': 'Redirecting you to Facebook page...',
    'discord-redirect': 'Redirecting you to Discord community...',
    'available-locations': 'Available locations: ',
    'price-per-day': 'EUR/day',
    'available-days': 'days',
    'description': 'Description',
    'contact': 'Contact',
    'about-title': 'About PARKIRAJ.ME',
    'about-intro': 'PARKIRAJ.ME is an innovative platform connecting parking space owners with those who need them across Croatia.',
    'about-mission': 'Our mission is simple - to make finding and renting parking spaces easier, safer, and more accessible for everyone.',
    'about-features': 'Key Features:',
    'feature-1': 'Simple registration and usage',
    'feature-2': 'Secure transaction platform',
    'feature-3': 'Interactive maps and filtering',
    'feature-4': 'Support for various parking types',
    'feature-5': 'Mobile-optimized application',
    'contact-title': 'Contact Us',
    'privacy-title': 'Privacy Policy and Terms of Service',
    'privacy-policy': 'Privacy Policy',
    'privacy-intro': 'Your privacy is important to us. This privacy policy explains how we collect, use, and protect your data.',
    'data-collection': 'Data Collection',
    'data-collection-text': 'We only collect data necessary to provide our services, including name, email, contact number, and location.',
    'terms-service': 'Terms of Service',
    'terms-intro': 'By using the PARKIRAJ.ME platform, you agree to our terms of service.',
    'user-responsibilities': 'User Responsibilities',
    'user-responsibilities-text': 'Users are responsible for data accuracy and compliance with agreed rental terms.',
    'copyright-title': 'Copyright Information',
    'copyright-notice': '© 2025 PARKIRAJ.ME. All rights reserved.',
    'copyright-text': 'All content on this platform, including design, logo, text, and functionality, is protected by copyright.',
    'intellectual-property': 'Intellectual Property',
    'ip-text': 'PARKIRAJ.ME is a registered trademark. Unauthorized use of any part of the platform is strictly prohibited.',
    'footer-follow': 'Follow Us',
    'footer-links': 'Useful Links',
    'footer-legal': 'Legal Information',
    'footer-about-link': 'About Us',
    'footer-contact-link': 'Contact',
    'footer-community-link': 'Join Our Community',
    'footer-privacy-link': 'Privacy & Terms',
    'footer-copyright-link': 'Copyright',
    'footer-copyright': '© 2025 PARKIRAJ.ME. All rights reserved.'
  }
};

let currentLanguage = 'hr'; // Default to Croatian

// --- Language Functions ---
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  
  // Update all elements with data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const langBtn = document.getElementById(`lang-${lang}`);
  if (langBtn) {
    langBtn.classList.add('active');
  }
  
  // Store language preference
  localStorage.setItem('parkiraj-language', lang);
}

function initializeLanguage() {
  // Check for stored language preference, default to Croatian
  const storedLang = localStorage.getItem('parkiraj-language') || 'hr';
  setLanguage(storedLang);
}

// --- Utility Functions ---
function showSection(sectionId) {
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = 'none';
  });
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
    section.style.display = 'block';
  }
}

function showPopup(msgKey, type = 'info') {
  const popup = document.getElementById('popup-message');
  if (!popup) return;
  
  const message = (translations[currentLanguage] && translations[currentLanguage][msgKey]) ? translations[currentLanguage][msgKey] : msgKey;
  popup.textContent = message;
  popup.className = 'popup-message active ' + type;
  setTimeout(() => {
    popup.classList.remove('active');
  }, 3000);
}

function validateYear(input) {
  if (!input.value) return true;
  const val = input.value;
  const year = parseInt(val.slice(0, 4), 10);
  if (isNaN(year) || year < 1900 || year > 2030 || val.length < 10) {
    showPopup('error-invalid-year', 'error');
    input.value = '';
    input.focus();
    return false;
  }
  if (val.length > 16) {
    showPopup('error-date-too-long', 'error');
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
  lokacija: 'Varaždin, Kralja Petra Krešimira IV 10',
  velicina: 'srednje',
  pristup: 'dvorište',
  cijena: 14,
  kontakt: '0955072289',
  trajanje: 1,
  lat: 42.7601,
  lng: 19.4382,
  opis: {
    hr: 'Mirno dvorište u srcu baroknog Varaždina, 5 minuta hoda do glavnog trga.',
    en: 'Quiet courtyard in the heart of baroque Varaždin, 5 minutes walk to main square.'
  }
},
{
  id: 2,
  lokacija: 'Dubrovnik, Zvonimirova 2',
  velicina: 'veliko',
  pristup: 'garaža',
  cijena: 11,
  kontakt: '0953428764',
  trajanje: 2,
  lat: 42.7611,
  lng: 15.522,
  opis: {
    hr: 'Sigurna garaža s pogledom na Jadransko more, idealna za veće vozilo.',
    en: 'Secure garage with Adriatic Sea view, perfect for larger vehicles.'
  }
},
{
  id: 3,
  lokacija: 'Zagreb, Trg bana Jelačića 26',
  velicina: 'srednje',
  pristup: 'prilaz',
  cijena: 4,
  kontakt: '0991249904',
  trajanje: 5,
  lat: 45.5155,
  lng: 16.0688,
  opis: {
    hr: 'U samom centru Zagreba, 2 minute do katedrale i glavnog trga.',
    en: 'Right in Zagreb center, 2 minutes to cathedral and main square.'
  }
},
{
  id: 4,
  lokacija: 'Split, Vukovarska 15',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 6,
  kontakt: '0967834521',
  trajanje: 4,
  lat: 43.5081,
  lng: 16.4402,
  opis: {
    hr: 'Tiho dvorište blizu Dioklecijanove palače, savršeno za kompaktni auto.',
    en: 'Quiet courtyard near Diocletian\'s Palace, perfect for compact car.'
  }
},
{
  id: 5,
  lokacija: 'Rijeka, Mihanovićeva 8',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 12,
  kontakt: '0923456789',
  trajanje: 3,
  lat: 45.3271,
  lng: 14.4422,
  opis: {
    hr: 'Prostrano mjesto s pogledom na Kvarner, pogodno za 2 vozila.',
    en: 'Spacious spot with Kvarner Bay view, suitable for 2 vehicles.'
  }
},
{
  id: 6,
  lokacija: 'Osijek, Ulica Ivana Gundulića 33',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 9,
  kontakt: '0945678123',
  trajanje: 6,
  lat: 45.5550,
  lng: 18.6955,
  opis: {
    hr: 'Zaštićena garaža u slavonskom stilu, blizu Drave.',
    en: 'Protected garage in Slavonian style, close to Drava river.'
  }
},
{
  id: 7,
  lokacija: 'Zadar, Ulica Stjepana Radića 19',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 7,
  kontakt: '0912345678',
  trajanje: 2,
  lat: 44.1194,
  lng: 15.2314,
  opis: {
    hr: 'Šarmantno dvorište 10 minuta hoda do Morskih orgulja.',
    en: 'Charming courtyard 10 minutes walk to Sea Organ.'
  }
},
{
  id: 8,
  lokacija: 'Pula, Ilica 41',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 13,
  kontakt: '0987123456',
  trajanje: 1,
  lat: 44.8666,
  lng: 13.8496,
  opis: {
    hr: 'Prostran prilaz s pogledom na rimski amfiteatar, za više vozila.',
    en: 'Spacious driveway with Roman amphitheater view, for multiple vehicles.'
  }
},
{
  id: 9,
  lokacija: 'Šibenik, Ulica kralja Tomislava 7',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 10,
  kontakt: '0934567890',
  trajanje: 4,
  lat: 43.7350,
  lng: 15.8952,
  opis: {
    hr: 'Sigurna garaža blizu katedrale sv. Jakova, UNESCO spomenik.',
    en: 'Secure garage near St. James Cathedral, UNESCO monument.'
  }
},
{
  id: 10,
  lokacija: 'Karlovac, Poljička cesta 28',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 5,
  kontakt: '0956789012',
  trajanje: 7,
  lat: 45.4870,
  lng: 15.5378,
  opis: {
    hr: 'Mirno dvorište u gradu na četiri rijeke, idealno za mali auto.',
    en: 'Peaceful courtyard in the city of four rivers, ideal for small car.'
  }
},
{
  id: 11,
  lokacija: 'Zagreb, Vukovarska 44',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 15,
  kontakt: '0978901234',
  trajanje: 3,
  lat: 45.8150,
  lng: 15.9819,
  opis: {
    hr: 'Luksuzni prilaz u elitnom dijelu grada, pogodan za više obitelji.',
    en: 'Luxury driveway in elite part of city, suitable for multiple families.'
  }
},
{
  id: 12,
  lokacija: 'Split, Mihanovićeva 12',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 8,
  kontakt: '0923456781',
  trajanje: 5,
  lat: 43.5081,
  lng: 16.4402,
  opis: {
    hr: 'Moderna garaža s klimatizacijom, 15 minuta do plaže Bačvice.',
    en: 'Modern air-conditioned garage, 15 minutes to Bačvice beach.'
  }
},
{
  id: 13,
  lokacija: 'Rijeka, Ulica Ivana Gundulića 6',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 6,
  kontakt: '0945678901',
  trajanje: 2,
  lat: 45.3271,
  lng: 14.4422,
  opis: {
    hr: 'Intimno dvorište s mediteranskim biljem, blizu Korza.',
    en: 'Intimate courtyard with Mediterranean plants, close to Korzo.'
  }
},
{
  id: 14,
  lokacija: 'Osijek, Zvonimirova 37',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 11,
  kontakt: '0967890123',
  trajanje: 4,
  lat: 45.5550,
  lng: 18.6955,
  opis: {
    hr: 'Prostran prilaz s pogledom na Tvrđu, može stati kamper.',
    en: 'Spacious driveway with Tvrđa view, can fit a camper.'
  }
},
{
  id: 15,
  lokacija: 'Zadar, Trg bana Jelačića 14',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 9,
  kontakt: '0912345679',
  trajanje: 6,
  lat: 44.1194,
  lng: 15.2314,
  opis: {
    hr: 'Podzemna garaža s direktnim pristupom staroj jezgri.',
    en: 'Underground garage with direct access to old town.'
  }
},
{
  id: 16,
  lokacija: 'Pula, Ulica Stjepana Radića 22',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 4,
  kontakt: '0934567891',
  trajanje: 1,
  lat: 44.8666,
  lng: 13.8496,
  opis: {
    hr: 'Skriveno dvorište u istarskom stilu, blizu lokalnih konoba.',
    en: 'Hidden courtyard in Istrian style, close to local taverns.'
  }
},
{
  id: 17,
  lokacija: 'Dubrovnik, Kralja Petra Krešimira IV 35',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 14,
  kontakt: '0956789013',
  trajanje: 3,
  lat: 42.6507,
  lng: 18.0944,
  opis: {
    hr: 'Ekskluzivni prilaz s pogledom na gradske zidine, premium lokacija.',
    en: 'Exclusive driveway with city walls view, premium location.'
  }
},
{
  id: 18,
  lokacija: 'Šibenik, Ilica 18',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 7,
  kontakt: '0978901235',
  trajanje: 5,
  lat: 43.7350,
  lng: 15.8952,
  opis: {
    hr: 'Garaža s pogledom na Krka nacionalni park, priroda na dohvat ruke.',
    en: 'Garage with Krka National Park view, nature at your fingertips.'
  }
},
{
  id: 19,
  lokacija: 'Karlovac, Ulica kralja Tomislava 29',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 5,
  kontakt: '0923456782',
  trajanje: 7,
  lat: 45.4870,
  lng: 15.5378,
  opis: {
    hr: 'Romantično dvorište uz rijeku Kupu, zvuk vode uključen.',
    en: 'Romantic courtyard by Kupa river, sound of water included.'
  }
},
{
  id: 20,
  lokacija: 'Varaždin, Poljička cesta 11',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 12,
  kontakt: '0945678902',
  trajanje: 2,
  lat: 46.3059,
  lng: 16.3366,
  opis: {
    hr: 'Veliki prilaz s pogledom na Zagorje, idealan za obiteljska okupljanja.',
    en: 'Large driveway with Zagorje view, ideal for family gatherings.'
  }
},
{
  id: 21,
  lokacija: 'Zagreb, Mihanovićeva 45',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 10,
  kontakt: '0967890124',
  trajanje: 4,
  lat: 45.8150,
  lng: 15.9819,
  opis: {
    hr: 'Moderna garaža s električnim punjenjem, eko-friendly opcija.',
    en: 'Modern garage with electric charging, eco-friendly option.'
  }
},
{
  id: 22,
  lokacija: 'Split, Ulica Ivana Gundulića 31',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 6,
  kontakt: '0912345680',
  trajanje: 3,
  lat: 43.5081,
  lng: 16.4402,
  opis: {
    hr: 'Dalmatinsko dvorište s lavandom, miris Mediterana.',
    en: 'Dalmatian courtyard with lavender, scent of Mediterranean.'
  }
},
{
  id: 23,
  lokacija: 'Rijeka, Zvonimirova 17',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 13,
  kontakt: '0934567892',
  trajanje: 1,
  lat: 45.3271,
  lng: 14.4422,
  opis: {
    hr: 'Prostran prilaz blizu lučke kapije, idealno za nautičare.',
    en: 'Spacious driveway near port gate, ideal for sailors.'
  }
},
{
  id: 24,
  lokacija: 'Osijek, Trg bana Jelačića 9',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 8,
  kontakt: '0956789014',
  trajanje: 6,
  lat: 45.5550,
  lng: 18.6955,
  opis: {
    hr: 'Garaža u austro-ugarskom stilu, povijesni šarm uključen.',
    en: 'Austro-Hungarian style garage, historical charm included.'
  }
},
{
  id: 25,
  lokacija: 'Zadar, Ulica Stjepana Radića 42',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 4,
  kontakt: '0978901236',
  trajanje: 5,
  lat: 44.1194,
  lng: 15.2314,
  opis: {
    hr: 'Dvorište s pogledom na zalazak sunca, romantična atmosfera.',
    en: 'Courtyard with sunset view, romantic atmosphere.'
  }
},
{
  id: 26,
  lokacija: 'Pula, Kralja Petra Krešimira IV 16',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 15,
  kontakt: '0923456783',
  trajanje: 2,
  lat: 44.8666,
  lng: 13.8496,
  opis: {
    hr: 'Premium prilaz blizu rimskog foruma, luksuz i povijest.',
    en: 'Premium driveway near Roman forum, luxury and history.'
  }
},
{
  id: 27,
  lokacija: 'Dubrovnik, Ilica 38',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 11,
  kontakt: '0945678903',
  trajanje: 4,
  lat: 42.6507,
  lng: 18.0944,
  opis: {
    hr: 'Garaža s klimom blizu Straduna, hladovina u vrućim danima.',
    en: 'Air-conditioned garage near Stradun, cool shade on hot days.'
  }
},
{
  id: 28,
  lokacija: 'Šibenik, Ulica kralja Tomislava 25',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 7,
  kontakt: '0967890125',
  trajanje: 7,
  lat: 43.7350,
  lng: 15.8952,
  opis: {
    hr: 'Kamenito dvorište s mediteranskim čarom, autentična Dalmacija.',
    en: 'Stone courtyard with Mediterranean charm, authentic Dalmatia.'
  }
},
{
  id: 29,
  lokacija: 'Karlovac, Vukovarska 13',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 9,
  kontakt: '0912345681',
  trajanje: 3,
  lat: 45.4870,
  lng: 15.5378,
  opis: {
    hr: 'Veliki prilaz uz park Dubovac, priroda i grad u jednom.',
    en: 'Large driveway by Dubovac park, nature and city in one.'
  }
},
{
  id: 30,
  lokacija: 'Varaždin, Mihanovićeva 20',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 6,
  kontakt: '0934567893',
  trajanje: 1,
  lat: 46.3059,
  lng: 16.3366,
  opis: {
    hr: 'Garaža u baroknom dvorcu, osjećaj kraljevske povijesti.',
    en: 'Garage in baroque palace, feel of royal history.'
  }
},
{
  id: 31,
  lokacija: 'Zagreb, Ulica Ivana Gundulića 47',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 5,
  kontakt: '0956789015',
  trajanje: 5,
  lat: 45.8150,
  lng: 15.9819,
  opis: {
    hr: 'Skriveno dvorište u Gornjem gradu, srednjovjekovni šarm.',
    en: 'Hidden courtyard in Upper Town, medieval charm.'
  }
},
{
  id: 32,
  lokacija: 'Split, Zvonimirova 24',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 12,
  kontakt: '0978901237',
  trajanje: 2,
  lat: 43.5081,
  lng: 16.4402,
  opis: {
    hr: 'Prostran prilaz s pogledom na Marjan, zelena oaza grada.',
    en: 'Spacious driveway with Marjan view, green oasis of the city.'
  }
},
{
  id: 33,
  lokacija: 'Rijeka, Trg bana Jelačića 36',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 8,
  kontakt: '0923456784',
  trajanje: 6,
  lat: 45.3271,
  lng: 14.4422,
  opis: {
    hr: 'Garaža s pogledom na Učku, planine i more na dohvat ruke.',
    en: 'Garage with Učka view, mountains and sea within reach.'
  }
},
{
  id: 34,
  lokacija: 'Osijek, Ulica Stjepana Radića 4',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 3,
  kontakt: '0945678904',
  trajanje: 4,
  lat: 45.5550,
  lng: 18.6955,
  opis: {
    hr: 'Dvorište s pogledom na Kopački rit, raj za ljubitelje prirode.',
    en: 'Courtyard with Kopački rit view, paradise for nature lovers.'
  }
},
{
  id: 35,
  lokacija: 'Zadar, Kralja Petra Krešimira IV 39',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 14,
  kontakt: '0967890126',
  trajanje: 1,
  lat: 44.1194,
  lng: 15.2314,
  opis: {
    hr: 'Luksuzni prilaz blizu Pozdrava suncu, umjetnost i funkcionalnost.',
    en: 'Luxury driveway near Greeting to the Sun, art and functionality.'
  }
},
{
  id: 36,
  lokacija: 'Pula, Ilica 27',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 10,
  kontakt: '0912345682',
  trajanje: 3,
  lat: 44.8666,
  lng: 13.8496,
  opis: {
    hr: 'Garaža s pogledom na Brijunski arhipelag, otočni mir.',
    en: 'Garage with Brijuni archipelago view, island peace.'
  }
},
{
  id: 37,
  lokacija: 'Dubrovnik, Ulica kralja Tomislava 48',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 7,
  kontakt: '0934567894',
  trajanje: 7,
  lat: 42.6507,
  lng: 18.0944,
  opis: {
    hr: 'Dvorište s pogledom na Lokrum, mistični otok u blizini.',
    en: 'Courtyard with Lokrum view, mystical island nearby.'
  }
},
{
  id: 38,
  lokacija: 'Šibenik, Poljička cesta 21',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 13,
  kontakt: '0956789016',
  trajanje: 5,
  lat: 43.7350,
  lng: 15.8952,
  opis: {
    hr: 'Veliki prilaz blizu Kornata, vrata u najljepši arhipelag.',
    en: 'Large driveway near Kornati, gateway to most beautiful archipelago.'
  }
},
{
  id: 39,
  lokacija: 'Karlovac, Mihanovićeva 32',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 9,
  kontakt: '0978901238',
  trajanje: 2,
  lat: 45.4870,
  lng: 15.5378,
  opis: {
    hr: 'Garaža blizu Plitvica, prirodno čudo na sat vožnje.',
    en: 'Garage near Plitvice, natural wonder one hour drive away.'
  }
},
{
  id: 40,
  lokacija: 'Varaždin, Ulica Ivana Gundulića 5',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 4,
  kontakt: '0923456785',
  trajanje: 4,
  lat: 46.3059,
  lng: 16.3366,
  opis: {
    hr: 'Dvorište s pogledom na Trakošćan, bajkoviti dvorac u blizini.',
    en: 'Courtyard with Trakošćan view, fairytale castle nearby.'
  }
},
{
  id: 41,
  lokacija: 'Zagreb, Zvonimirova 40',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 15,
  kontakt: '0945678905',
  trajanje: 6,
  lat: 45.8150,
  lng: 15.9819,
  opis: {
    hr: 'Ekskluzivni prilaz s pogledom na Sljeme, skijanje u gradu.',
    en: 'Exclusive driveway with Sljeme view, skiing in the city.'
  }
},
{
  id: 42,
  lokacija: 'Split, Trg bana Jelačića 3',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 8,
  kontakt: '0967890127',
  trajanje: 1,
  lat: 43.5081,
  lng: 16.4402,
  opis: {
    hr: 'Garaža blizu Rive, šetnica uz more na korak.',
    en: 'Garage near Riva, seaside promenade at your doorstep.'
  }
},
{
  id: 43,
  lokacija: 'Rijeka, Ulica Stjepana Radića 46',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 6,
  kontakt: '0912345683',
  trajanje: 3,
  lat: 45.3271,
  lng: 14.4422,
  opis: {
    hr: 'Dvorište s pogledom na Opatiju, rivijera na dohvat ruke.',
    en: 'Courtyard with Opatija view, riviera within reach.'
  }
},
{
  id: 44,
  lokacija: 'Osijek, Kralja Petra Krešimira IV 1',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 11,
  kontakt: '0934567895',
  trajanje: 5,
  lat: 45.5550,
  lng: 18.6955,
  opis: {
    hr: 'Prostran prilaz uz Dravu, riječni mir u urbanom okruženju.',
    en: 'Spacious driveway by Drava, river peace in urban setting.'
  }
},
{
  id: 45,
  lokacija: 'Zadar, Ilica 34',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 7,
  kontakt: '0956789017',
  trajanje: 7,
  lat: 44.1194,
  lng: 15.2314,
  opis: {
    hr: 'Garaža s pogledom na Velebit, planinski masiv kao pozadina.',
    en: 'Garage with Velebit view, mountain massif as backdrop.'
  }
},
{
  id: 46,
  lokacija: 'Pula, Ulica kralja Tomislava 49',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 5,
  kontakt: '0978901239',
  trajanje: 2,
  lat: 44.8666,
  lng: 13.8496,
  opis: {
    hr: 'Dvorište s pogledom na Kamenjak, divljina poluotoka.',
    en: 'Courtyard with Kamenjak view, peninsula wilderness.'
  }
},
{
  id: 47,
  lokacija: 'Dubrovnik, Poljička cesta 30',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 12,
  kontakt: '0923456786',
  trajanje: 4,
  lat: 42.6507,
  lng: 18.0944,
  opis: {
    hr: 'Veliki prilaz s pogledom na Elafite, otočje za bijeg od svega.',
    en: 'Large driveway with Elaphiti view, archipelago to escape everything.'
  }
},
{
  id: 48,
  lokacija: 'Šibenik, Vukovarska 43',
  velicina: 'srednje',
  pristup: 'garaža',
  cijena: 10,
  kontakt: '0945678906',
  trajanje: 6,
  lat: 43.7350,
  lng: 15.8952,
  opis: {
    hr: 'Garaža blizu Skradina, vrata u Krka nacionalni park.',
    en: 'Garage near Skradin, gateway to Krka National Park.'
  }
},
{
  id: 49,
  lokacija: 'Karlovac, Ulica Ivana Gundulića 50',
  velicina: 'malo',
  pristup: 'dvorište',
  cijena: 3,
  kontakt: '0967890128',
  trajanje: 1,
  lat: 45.4870,
  lng: 15.5378,
  opis: {
    hr: 'Dvorište uz Koranu, rijeka pjeva uspavanke.',
    en: 'Courtyard by Korana, river sings lullabies.'
  }
},
{
  id: 50,
  lokacija: 'Varaždin, Zvonimirova 37',
  velicina: 'veliko',
  pristup: 'prilaz',
  cijena: 14,
  kontakt: '0912345684',
  trajanje: 3,
  lat: 46.3059,
  lng: 16.3366,
  opis: {
    hr: 'Prostran prilaz s pogledom na Hrvatsko zagorje, zeleni brežuljci.',
    en: 'Spacious driveway with Croatian Zagorje view, green hills.'
  }
}
];

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Language Toggle Event Listeners
  const langHr = document.getElementById('lang-hr');
  const langEn = document.getElementById('lang-en');
  if (langHr) langHr.addEventListener('click', () => setLanguage('hr'));
  if (langEn) langEn.addEventListener('click', () => setLanguage('en'));

  // Navigation Event Listeners
  const btnHome = document.getElementById('btn-home');
  const btnSeeker = document.getElementById('btn-seeker');
  const btnProvider = document.getElementById('btn-provider');
  const btnAbout = document.getElementById('btn-about');
  const btnContact = document.getElementById('btn-contact');
  const ctaSeeker = document.getElementById('cta-seeker');
  const ctaProvider = document.getElementById('cta-provider');

  if (btnHome) btnHome.onclick = () => showSection('home-section');
  if (btnSeeker) btnSeeker.onclick = () => showSection('seeker-section');
  if (btnProvider) btnProvider.onclick = () => showSection('provider-section');
  if (btnAbout) btnAbout.onclick = () => showSection('about-section');
  if (btnContact) btnContact.onclick = () => showSection('contact-section');
  if (ctaSeeker) ctaSeeker.onclick = () => showSection('seeker-section');
  if (ctaProvider) ctaProvider.onclick = () => showSection('provider-section');

  // Footer Navigation Event Listeners
  const footerAbout = document.getElementById('footer-about');
  const footerContact = document.getElementById('footer-contact');
  const footerPrivacy = document.getElementById('footer-privacy');
  const footerCopyright = document.getElementById('footer-copyright');
  const footerCommunity = document.getElementById('footer-community');

  if (footerAbout) footerAbout.onclick = () => showSection('about-section');
  if (footerContact) footerContact.onclick = () => showSection('contact-section');
  if (footerPrivacy) footerPrivacy.onclick = () => showSection('privacy-section');
  if (footerCopyright) footerCopyright.onclick = () => showSection('copyright-section');
  
  if (footerCommunity) {
    footerCommunity.onclick = () => {
      showPopup('discord-redirect', 'info');
      setTimeout(() => {
        window.open('https://discord.gg/parkiraj-me', '_blank');
      }, 1500);
    };
  }

  // Social Media Event Listeners with Popup Notifications
  const linkedinLink = document.querySelector('a[title="LinkedIn"]');
  const instagramLink = document.querySelector('a[title="Instagram"]');
  const facebookLink = document.querySelector('a[title="Facebook"]');
  const discordLink = document.getElementById('discord-link');

  if (linkedinLink) {
    linkedinLink.onclick = (e) => {
      e.preventDefault();
      showPopup('linkedin-redirect', 'info');
      setTimeout(() => {
        window.open('https://www.linkedin.com/company/parkiraj-me', '_blank');
      }, 1500);
    };
  }

  if (instagramLink) {
    instagramLink.onclick = (e) => {
      e.preventDefault();
      showPopup('instagram-redirect', 'info');
      setTimeout(() => {
        window.open('https://www.instagram.com/parkiraj.me', '_blank');
      }, 1500);
    };
  }

  if (facebookLink) {
    facebookLink.onclick = (e) => {
      e.preventDefault();
      showPopup('facebook-redirect', 'info');
      setTimeout(() => {
        window.open('https://www.facebook.com/parkiraj.me', '_blank');
      }, 1500);
    };
  }

  if (discordLink) {
    discordLink.onclick = (e) => {
      e.preventDefault();
      showPopup('discord-redirect', 'info');
      setTimeout(() => {
        window.open('https://discord.gg/parkiraj-me', '_blank');
      }, 1500);
    };
  }

  // Contact Form Event Listener
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showPopup('message-sent', 'success');
      this.reset();
    });
  }

  // DateTime Validation Event Listeners
  document.querySelectorAll('input[type="datetime-local"]').forEach(input => {
    input.addEventListener('change', () => validateYear(input));
  });
}

// --- Seeker Registration ---
function setupSeekerFunctionality() {
  const seekerForm = document.getElementById('seeker-form');
  const seekerSearchForm = document.getElementById('parking-search-form');
  const seekerResults = document.getElementById('search-results');
  const seekerMap = document.getElementById('seeker-map');

  if (seekerForm) {
    seekerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      seekerForm.classList.add('hidden');
      if (seekerSearchForm) seekerSearchForm.classList.remove('hidden');
      showPopup('success-registration', 'success');
    });
  }

  if (seekerSearchForm) {
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
  }
}

// --- Provider Registration ---
function setupProviderFunctionality() {
  const providerForm = document.getElementById('provider-form');
  const providerUploadForm = document.getElementById('parking-upload-form');
  const providerListings = document.getElementById('provider-listings');
  const providerMap = document.getElementById('provider-map');

  if (providerForm) {
    providerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      providerForm.classList.add('hidden');
      if (providerUploadForm) providerUploadForm.classList.remove('hidden');
      showPopup('success-provider-registration', 'success');
    });
  }

  if (providerUploadForm) {
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
        lat: 45.0 + Math.random(),
        lng: 15.0 + Math.random(),
        opis: {
          hr: 'Novo parking mjesto. Zaradiš 7% manje zbog provizije.',
          en: 'New parking space. You earn 7% less due to commission.'
        }
      };
      parkingData.push(novi);
      showPopup('success-parking-added', 'success');
      renderResults([novi], providerListings);
      renderMap([novi], providerMap);
      f.reset();
    });
  }
}

// --- Render Functions ---
function renderResults(data, container, isSeeker = false) {
  if (!container) return;
  
  container.innerHTML = '';
  if (!data.length) {
    const noResultsMsg = translations[currentLanguage]['no-results'];
    container.innerHTML = `<div class="result-card">${noResultsMsg}</div>`;
    return;
  }
  
  data.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = `${idx * 0.08}s`;
    
    const sizeText = translations[currentLanguage][`size-${p.velicina}`] || p.velicina;
    const priceText = translations[currentLanguage]['price-per-day'];
    const daysText = translations[currentLanguage]['available-days'];
    const descText = translations[currentLanguage]['description'];
    const contactText = translations[currentLanguage]['contact-user'];
    
    card.innerHTML = `
      <div class="result-title">${p.lokacija} (${sizeText}, ${p.pristup})</div>
      <div class="result-details">
        ${translations[currentLanguage]['price-per-day'].replace('EUR/dan', '')}: <b>${p.cijena} ${priceText}</b> <br>
        ${translations[currentLanguage]['available-days'].replace('dana', '')}: ${p.trajanje} ${daysText} <br>
        ${descText}: ${p.opis[currentLanguage]}
      </div>
      <div class="result-actions">
        <button class="result-btn" data-id="${p.id}">${contactText}</button>
      </div>
    `;
    card.querySelector('.result-btn').onclick = () => {
      const contactMsg = `${translations[currentLanguage]['contact']}: ${p.kontakt}`;
      showPopup(contactMsg, 'info');
    };
    container.appendChild(card);
  });
  
  const mapContainer = container.parentElement.querySelector('.map-container');
  if (mapContainer) mapContainer.classList.remove('hidden');
}

function renderMap(data, mapContainer) {
  if (!mapContainer) return;
  
  mapContainer.classList.remove('hidden');
  const availableText = translations[currentLanguage]['available-locations'];
  mapContainer.innerHTML = availableText;
  data.forEach(p => {
    const marker = document.createElement('span');
    marker.textContent = `📍 ${p.lokacija} `;
    marker.style.color = 'var(--sky-blue-active)';
    marker.style.marginRight = '10px';
    mapContainer.appendChild(marker);
  });
}

// --- Initialize Application ---
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
  setupEventListeners();
  setupSeekerFunctionality();
  setupProviderFunctionality();
  showSection('home-section');
});
