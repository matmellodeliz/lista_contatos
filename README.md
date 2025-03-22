# PWA Contact List

This project is a Progressive Web App (PWA) that allows users to manage a list of contacts using Web Components. The application provides features for searching and filtering contacts, and it works offline thanks to the service worker.

## Project Structure

```
pwa-contact-list
├── src
│   ├── css
│   │   └── styles.css        # Styles for the application
│   ├── js
│   │   ├── app.js            # Main JavaScript file integrating contact functionality
│   │   └── service-worker.js  # Service worker for offline capabilities
│   ├── index.html            # Main HTML file for the application
│   └── manifest.json         # Web App Manifest for PWA settings
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd pwa-contact-list
   ```

3. Install the necessary dependencies:
   ```
   npm install
   ```

## Usage

1. Open `src/index.html` in a web browser to view the application.
2. Use the search input to filter contacts by name.
3. Use the dropdown to filter contacts by state (UF).
4. Click on "Mostrar Detalhes" to view additional information about each contact.

## Offline Capabilities

The application is equipped with a service worker that caches essential assets, allowing it to function offline. Ensure that your browser supports service workers and that they are enabled.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.