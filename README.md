# E-commerce Store with React

## Project Overview
This is a fully functional e-commerce store built using React. The project aims to reinforce core React concepts and provide hands-on experience with state management, component reusability, form handling, event propagation, and more. It serves as a great resource for brushing up on essential React skills while building a practical application.

## Key Features
- **Product Listing**: Display a list of products dynamically, with each product featuring an image, name, and an "Add to Cart" button.
- **State Management**: Manage the cart's state, allowing users to add, remove, and update items in the cart.
- **Reusable Components**: Modular components for better organization and maintainability (e.g., `Product`, `Cart`, `Modal` components).
- **Form Handling**: Implement both `useRef` and `useState` hooks to handle form inputs and perform 2-way data binding.
- **React Fragments**: Use React Fragments to avoid unnecessary wrapper elements in the DOM, keeping the structure clean.
- **React Portals**: Leverage React Portals to render modals and other components outside the root div for better UI handling.
- **Event Propagation**: Understand and apply event capturing and bubbling techniques for efficient event handling.

## Concepts Learned
- **State Management**: Implemented React's `useState` hook to manage cart items, product list, and modal visibility.
- **Props and Component Reusability**: Created reusable components and passed props to manage product data and cart functionality.
- **Conditional Rendering**: Displayed modals and cart details based on the current state of the application.
- **Event Handling**: Applied event propagation concepts like capturing and bubbling to handle user interactions effectively.
- **2-Way Data Binding**: Used both `useRef` and `useState` to bind form inputs to state and ensure real-time updates.
- **Optimization**: Optimized code for performance, including efficient use of array methods and React’s built-in hooks.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/thekartikwalia/Ecommerce-Store.git
2. Navigate to the project folder:
    ```bash
    cd ecommerce-react-store
3. Install the dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm start
## Usage
- Browse the product list and add products to your cart.
- Open the cart modal to view the items added to the cart.
- Use the product addition form to add new products to the store (form handling covered in the project).
- Manage quantities of cart items and remove them when needed.

## Technologies Used
- React
- JavaScript (ES6+)
- CSS (for styling)

## Acknowledgments
- React Documentation: [React Docs](https://react.dev/)