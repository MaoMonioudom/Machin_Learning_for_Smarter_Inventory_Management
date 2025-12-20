# GoCart - E-commerce Website

A modern, responsive e-commerce website built with **React** and **Vite**, featuring multiple pages for customers, sellers, and admin, with smooth navigation, product listing, and Google OAuth placeholders.

## **Features**
---
- Landing page with hero section and introduction
- Customer home page with banner and product listing
- Category navigation with smooth scrolling
- Customer navigation bar with search and account icons
- Login and Register pages with Google OAuth placeholder
- Footer with multiple columns
- Responsive design
- Sticky navigation for easy access
- Product detail pages
---

## **Tech Stack**

- **Frontend:** React (JSX)
- **Bundler / Dev Server:** Vite
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Styling:** CSS (plain)
- **Version Control:** Git & GitHub
- **Authentication:** Google OAuth placeholder (can integrate Firebase later)

---

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/MaoMonioudom/ecommerce.git
```
2. Navigate into project folder
```bash
cd ecommerce
```
3. Install Dependencies
```bash
npm install
```
4. start server
```bash
npm run dev
```
5. Open the app in browser

##Folder Structure
ecommerce/
├─ public/             
├─ src/
│  ├─ assets/             
│  │  ├─ CategoryOne/
│  │  ├─ CategoryTwo/
│  │  └─ ...
│  ├─ components/        
│  │  ├─ Nav/
│  │  ├─ NavCustomer/
│  │  ├─ CategoryNav/
│  │  ├─ ProductList/
│  │  ├─ ProductCard/
│  │  └─ Footer/
│  ├─ pages/
│  │  ├─ Landing/
│  │  ├─ HomeCustomer/
│  │  ├─ Products/
│  │  ├─ Login/
│  │  └─ Register/
│  ├─ data/                
│  ├─ App.jsx
│  └─ main.jsx
├─ .gitignore
├─ package.json
└─ README.md

