# Student Registration and Result Management System

**Course Assignment Submission**  
**Faculty In-Charge:** Sneha Gaurav Gawas (Assistant Professor - Computer Science, Kharghar)  
**Student:** Abhay G (`mca2026.abhayg@isu.ac.in`)  
**Stack:** HTML5, CSS3 (Modern Electric Indigo & Cyan Design), JavaScript (Vanilla ES6+), Local Storage  

---

## 📌 Project Overview
A fully responsive, client-side academic management portal built using pure HTML5, CSS3, and JavaScript. The system enables registration of students, captures marks across five core subjects, conducts real-time validation, calculates totals and percentages, determines Pass/Fail status based on institutional criteria, converts records to JSON objects, and persists them securely in browser Local Storage.

---

## 🚀 Key Features

1. **Academic Registration & Validation**:
   - Captures Student Full Name, Roll Number, Class/Course, and Email Address.
   - 5 Subject Marks input (English, Mathematics, Science, Computer, History) with $0 - 100$ boundary checks.
   - Duplicate roll number detection and real-time form feedback.

2. **Result Calculation Engine**:
   - Automatic computation of Total Marks (out of 500) and Percentage.
   - **Passing Rule**: Minimum 35 marks in every subject to achieve a "Pass" status.
   - Clear visual indicators (`.pass` emerald badge and `.fail` rose badge).

3. **JSON Serialization & Local Storage Persistence**:
   - Converts student data into structured JSON using `JSON.stringify()`.
   - Persists records into browser `localStorage` under the key `studentResultManagementRecords`.
   - Live JSON output viewer with instant copy and JSON file download capability (`Blob`).

4. **Interactive Records Directory**:
   - Responsive table listing all enrolled students with Roll No, Name, Class, Total, Percentage, and Status.
   - Individual student deletion and batch "Clear All Records" option.

5. **Modern Electric Indigo & Cyan Design**:
   - Styled with custom CSS variables, gradients, responsive flex/grid layouts, and Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono`).

---

## 📂 Project Structure
```
├── index.html   # Semantic HTML5 markup and dialog structures
├── style.css    # Responsive CSS3 styling (Electric Indigo & Cyan palette)
├── script.js    # Form validation, calculation, JSON & LocalStorage logic
└── README.md    # Project documentation and submission details
```

---

## 💻 How to Run Locally
1. Clone or download this repository.
2. Open `index.html` in any modern web browser (Google Chrome, Safari, Firefox, Edge).
   - Alternatively, serve locally:
     ```bash
     python3 -m http.server 8000
     ```
   - Navigate to `http://localhost:8000/` in your browser.
