# Study Manager Application

A simple React + Vite study planner that allows users to add, view, and remove study activities.  
This project demonstrates core React concepts including components, props, state, events, list rendering, conditional rendering, and routing.

---

## 📂 Project Structure


---

## 🚀 How to Run the Project

### 1. Install dependencies
Open your terminal inside the project folder and run:


### 2. Start the development server


### 3. Open the app  
Vite will show a link such as:


Open it in your browser to view the Study Manager.

---

## 🧭 Routing (React Router)

This project uses **React Router v6** for navigation:

- `/` → Home page  
- `/planner` → Study Planner page  

Defined in `App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/planner" element={<StudyPlanner />} />
</Routes>
