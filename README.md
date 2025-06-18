# currency-converter
Currency Converter Application
# 🌍 Currency Converter

A simple, responsive web application that allows users to convert between 50+ global currencies in real time using live exchange rates.

## 🚀 Live Demo

[Live App URL](#) <!-- Replace with your deployed URL -->

---

## 📸 Screenshots

![Currency Converter Screenshot](screenshot.png) <!-- Add your screenshot file or update the path -->

---

## 📝 Overview

This Currency Converter lets you:
- Select a "From" and "To" currency from dropdowns
- Enter an amount to convert
- Instantly see the converted value using real-time exchange rates
- Swap currencies with a single click (if implemented)
- View the current exchange rate and last updated time (if implemented)

---

## 🛠 Tech Stack

- **HTML**: Markup for layout and structure
- **CSS**: Modern, responsive styling
- **JavaScript**: Fetches exchange rates, handles conversion logic, and updates the UI

---

## 🔗 API Used

- [ExchangeRate API](https://www.exchangerate-api.com/)  
  Example endpoint:  
  ```
  https://api.exchangerate-api.com/v4/latest/USD
  ```
  *(You can use any free currency API, such as exchangerate-api.com, exchangeratesapi.io, or openexchangerates.org)*

---

## ✨ Features

- 50+ global currencies supported
- Real-time conversion using live rates
- Responsive, clean UI
- Error handling for invalid input or API failures

---

## 📦 Project Structure

```
currency-converter/
│
├── currency.html
├── currency.css
├── currency.js
└── README.md
```

---

## ⚡️ Setup Guide

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Open `currency.html` in your browser**

3. **(Optional) Deploy**
   - Use GitHub Pages, Netlify, or Vercel for free hosting.

---

## 🧩 How It Works

- **Dropdowns**: Select currencies to convert between.
- **Input**: Enter the amount in the "From" currency.
- **Conversion**: JavaScript fetches the latest rates and calculates the converted amount instantly.
- **UI Update**: Results and rates are displayed dynamically.

---

## 🛡️ Error Handling

- Invalid input (e.g., negative or empty amounts) is ignored or reset to zero.
- API errors show a user-friendly message.

---

## 📈 Advanced Features (If Implemented)

- Swap button to quickly switch "From" and "To" currencies
- Last updated timestamp from the API
- Rate history chart (using Chart.js)
- Dark mode toggle

---

## 📱 Responsive Design

- Works on desktop, tablet, and mobile screens
- Clean, modern layout

---

## 🙌 Credits

- [ExchangeRate API](https://www.exchangerate-api.com/)
- [Font: (if any used)](https://fonts.google.com/)
- [Icons: (if any used)](https://fontawesome.com/)

---

## 📝 License

MIT License

---

## 💡 Author

- [Your Name](https://github.com/your-username)
