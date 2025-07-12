# PARKIRAJ.ME README

**Peer-to-peer Croatian parking marketplace inspired by BlaBlaCar and Vinted.**

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## Overview

**PARKIRAJ.ME** is a modern web application that connects people seeking parking with private owners willing to rent out their parking spaces, garages, driveways, or yards. The platform is built for the Croatian market, featuring a sky blue theme, JetBrains Mono font, smooth animations, and a mobile-first responsive design.

---

## Features

- **Dual User Interfaces:**  
  - *Seeker* – Find and filter parking spaces by location, price, size, and availability.
  - *Provider* – Register and list your parking spot with details, price, and contact info.

- **Registration:**  
  Simple forms for both seekers and providers, collecting essential information.

- **Parking Listings:**  
  Add or browse parking spots with detailed descriptions and location markers.

- **Interactive Map:**  
  View available parking spots on a map (mock markers for demo).

- **Filtering & Search:**  
  Filter by distance, price, neighborhood, and parking size.

- **Contact Exchange:**  
  Contact information is revealed only after a booking agreement.

- **Commission System:**  
  7% platform commission transparently calculated on each transaction.

- **Modern UI:**  
  - Sky blue color palette and parking-themed background
  - JetBrains Mono font for a technical, clean look
  - Bold titles, italic subtitles, and smooth page transitions
  - Centered popup notifications and animated modals

- **Validation & Accessibility:**  
  - Date/time inputs restricted to valid years (1900–2030)
  - Mobile-friendly and accessible

---

## Screenshots

In progress
---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Python, Node.js, or PHP for running a local server

### Installation

1. **Clone or download the repository.**
2. **Place the following files in the same directory:**
   - `index.html`
   - `style.css`
   - `app.js`
3. **Start the application:**
   - **Quick preview:** Double-click `index.html` (limited location support)
   - **Recommended:** Run a local server for full functionality:
     - Python 3:  
       `python -m http.server 8000`
     - Node.js:  
       `npx http-server`
     - PHP:  
       `php -S localhost:8000`
   - Open your browser at `http://localhost:8000`

---

## Project Structure

| File         | Purpose                                  |
|--------------|------------------------------------------|
| index.html   | Main HTML structure and UI               |
| style.css    | Application styling and animations       |
| app.js       | Functionality, logic, and data handling  |

---

## Usage

### For Parking Seekers

1. Click "Tražim parking" and complete registration.
2. Enter search criteria and filter results.
3. Browse available parking spaces and view on map.
4. Click "Kontaktiraj korisnika" to get the owner's contact.

### For Parking Providers

1. Click "Rentam parking" and register as a provider.
2. Fill in your parking spot details and submit.
3. Your listing appears for seekers to find and contact you.

---

## Customization

- **Theme:**  
  Adjust colors in `style.css` by changing CSS variables.
- **Font:**  
  Swap JetBrains Mono for any other monospace font in the CSS.
- **Background:**  
  Replace the background image URL in the `body` selector of `style.css`.
- **Sample Data:**  
  Edit or expand the `parkingData` array in `app.js` for more demo entries.

---

## Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – Responsive design, animations, theming
- **JavaScript (ES6+)** – UI logic, data handling
- **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** – Monospace font

---

## License

This project is provided for educational and demonstration purposes.  
For commercial use or further development, please consult local regulations and ensure GDPR compliance.

*Made with ❤️ for the Croatian parking community.*
