# Frontend Assignment - CodeAnt AI

## Project Overview

This project is the frontend assignment for CodeAnt AI. It demonstrates a responsive and dynamic web application built using modern tools and frameworks.

## Tech Stack

- **Frontend Framework**: React with Vite
- **CSS Framework**: Tailwind CSS
- **Icons**: React Icons
- **Authentication**: Clerk
- **Routing**: React Router
- **Data**: Dummy data for repository display

## Features

1. **Authentication**:
   - Used Clerk for user authentication.
   - If authentication is not required, a conditional setup is provided in `App.jsx` to disable authentication.
2. **Responsive Design**:
   - Tailwind CSS ensures a responsive and visually appealing design.
3. **Icon Usage**:
   - Integrated React Icons for consistent and scalable iconography.
4. **Routing**:
   - Implemented React Router for smooth navigation between pages.
5. **Dummy Data**:
   - Utilized dummy data to display repository information dynamically.

## Getting Started

### Prerequisites

- Node.js (version 14 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables for Clerk:

```env
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
```

If you do not have authentication requirements, you can disable it by modifying the `App.jsx` file as follows:

```javascript
const login = false;
```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

To create a production build:

```bash
npm run build
```

The build will be available in the `dist` folder.

## Folder Structure

```plaintext
src/
├── assets/         # Static assets like images or icons
├── components/     # Reusable React components
├── pages/          # Page components for routing
├── constant/       # For Dummy Data and other Stuff
├── App.jsx         # Main application file
├── main.jsx        # Entry point
├── index.css       # Universal CSS
```

## Additional Notes

- **Customization**:
  - Tailwind CSS can be customized in the `tailwind.config.js` file.
  - Dummy data is stored in a separate file for easy modification.


