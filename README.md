# Pantry System

A fully responsive and high-fidelity pantry system, similar to a POS (Point of Sale) system. Built using Next.js, Tailwind CSS, and Firebase as the primary database, this project allows users to manage pantry items effectively and efficiently.

## Features

- **Item Management**: Add items with name, price, and quantity.
- **Display Entries**: View a list of registered items with their details.
- **Edit/Delete Options**: Modify or remove existing entries.
- **Total Price Calculation**: Automatically calculates the total price of all items.
- **Responsive Design**: Fully optimized for all screen sizes.
- **High-Fidelity UI**: Modern and intuitive interface.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend/Database**: [Firebase](https://firebase.google.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pantry-system.git
   cd pantry-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration details to a `.env.local` file:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Add items by entering their name, price, and quantity.
3. View the list of registered items.
4. Edit or delete items as needed.
5. Check the total price of all items at the bottom of the list.

## Deployment

To deploy the project:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform (e.g., Vercel, Firebase Hosting).

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute to this project by submitting issues or pull requests!
