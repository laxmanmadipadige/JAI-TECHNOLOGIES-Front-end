# 🚀 JAI Technologies Website

## 🌐 Live URL
🔗 **[Visit JAI Technologies](https://jaitechnologies.com/)**

## 📌 Overview
JAI Technologies is a modern AI-driven platform that provides intelligent **technology solutions and services**. This full-stack web application is built using:

- **Frontend:** React.js (SPA)
- **Backend:** Node.js + Express.js (API)
- **Deployment:** Hosted online (possibly on Azure, Netlify, or Vercel)
- **Version Control:** GitHub for source code management

This guide provides instructions on how to **download, install, and run the project locally**.

---

## 🛠️ Tech Stack
- **React.js** - Frontend UI  
- **Node.js + Express.js** - Backend API  
- **Nodemailer** - Email service integration  
- **React Router** - Page navigation  
- **Axios** - API requests between frontend and backend  
- **GitHub Actions** - CI/CD Deployment  

---

## 💝 Installation & Setup
### **Prerequisites**
Before running the project, ensure you have the following installed:

- **Node.js** (v18 or later) ➔ [Download Here](https://nodejs.org/)
- **Git** ➔ [Download Here](https://git-scm.com/)
- **npm** (comes with Node.js) or **yarn**
- **A Code Editor** (e.g., VS Code)

---

## 🖥️ 1️⃣ Cloning the Project from GitHub
To download the project, **open a terminal** and run:
```sh
git clone https://github.com/laxmanmadipadige/JAI-TECHNOLOGIES-1.git
```
Then, navigate into the project folder:
```sh
cd JAI-TECHNOLOGIES-1
```

---

## 🌐 2️⃣ Running the Frontend (React.js)
### **Step 1: Navigate to the Frontend Folder**
```sh
cd frontend
```

### **Step 2: Install Dependencies**
```sh
npm install
```

### **Step 3: Start the React App**
```sh
npm start
```
This will run the React frontend at:
```
http://localhost:3000/
```

---

## 🛠️ 3️⃣ Running the Backend (Node.js + Express)
### **Step 1: Open a New Terminal and Navigate to the Backend Folder**
```sh
cd backend
```

### **Step 2: Install Dependencies**
```sh
npm install
```

### **Step 3: Set Up Environment Variables**
1. Inside the `backend/` folder, create a `.env` file:
```sh
touch .env
```
2. Open `.env` and add:
```env
PORT=5000
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```
> Replace `EMAIL_USER` and `EMAIL_PASS` with your **SMTP credentials**.

### **Step 4: Start the Backend Server**
```sh
node server.js
```
OR, if using nodemon (for automatic restarts):
```sh
nodemon server.js
```
This will run your **Node.js API server** at:
```
http://localhost:5000/
```

---



---

## 🛠️ 5️⃣ Common Issues & Fixes
| **Issue** | **Solution** |
|-----------|-------------|
| `npm start` fails | Run `npm install` to reinstall dependencies |
| `sh: react-scripts: command not found` | Install missing scripts with `npm install react-scripts --save` |
| `nodemailer not sending emails` | Check SMTP credentials in `.env` |

---

## 💪 Contribution Guidelines
We welcome contributions! To contribute:

1. **Fork** the repository.
2. **Create a new branch**:
   ```sh
   git checkout -b feature-branch
   ```
3. **Commit your changes**:
   ```sh
   git commit -m "Added feature X"
   ```
4. **Push to GitHub**:
   ```sh
   git push origin feature-branch
   ```
5. Open a **Pull Request (PR)** for review.

---

## 🛡 Issues & Support
If you find any **bugs** or have **feature requests**, please **open an issue** on GitHub.

For inquiries, contact:  
📧 **support@jaitechnologies.com**

---

## 📚 License
This project is **licensed under MIT**. You are free to **modify and distribute** it.

---

🎉 **Thank you for using JAI Technologies Web UI!** 🚀  
Now you can **download, run, and deploy your project seamlessly!**

