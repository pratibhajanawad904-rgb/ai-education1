# LearnPath — Digital Learning System

A personalized, career-focused digital learning platform that combines AI mentoring, smart assessments, and progress tracking to help students build real skills.

![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Status](https://img.shields.io/badge/Status-Demo-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ✨ Features

### 1. Personalized Learning Path
- Choose a career goal: **Web Development**, **Data Science**, or **AI/ML**
- Set your skill level (Beginner / Intermediate / Advanced) and weekly hours
- Get a customized 8-week roadmap with tasks, resources, and checkboxes
- Track weekly progress with visual completion markers

### 2. AI Mentor Chatbot
- 24/7 AI chatbot accessible from any page (bottom-right corner)
- Answers programming questions in simple, encouraging language
- Provides coding tips, career advice, and emotional support
- Typing indicator and chat history for natural conversation feel

### 3. Smart Skill Assessment
- **Quiz Tab** — Multiple-choice questions with auto-difficulty adjustment
- **Coding Challenge Tab** — Write code and get simulated feedback
- **Aptitude Tab** — Logical reasoning and problem-solving questions
- Instant strength/weakness analysis after each assessment

### 4. Career Recommendation Engine
- Personalized career path suggestions based on your goal and performance
- Recommended courses, certifications, and project ideas
- Internship type suggestions with job search platforms
- "High demand in 2025" badges for trending skills

### 5. Progress Dashboard
- Lessons completed with visual progress rings
- Average test scores with trend indicators
- Day streak tracker with weekly view
- Weak topics list and upcoming tasks
- Achievement badges and milestones

---

## 📂 Project Structure

```
mysore/
├── frontend/
│   ├── index.html              # Main HTML (single-page app)
│   ├── css/
│   │   └── style.css           # Complete stylesheet
│   └── js/
│       ├── app.js              # Core logic, navigation, learning path
│       ├── chat.js             # AI Mentor chatbot
│       ├── assessment.js       # Quizzes, coding, aptitude tests
│       └── dashboard.js        # Dashboard charts and stats
│
├── backend/
│   ├── server.js               # Express.js server
│   ├── package.json            # Node.js dependencies
│   ├── routes/
│   │   ├── users.js            # User API endpoints
│   │   ├── paths.js            # Learning path API endpoints
│   │   ├── assessments.js      # Assessment API endpoints
│   │   └── careers.js          # Career recommendation API endpoints
│   └── data/
│       └── mockDB.json         # Mock database with all content
│
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Option 1: Open Frontend Directly (No Server Needed)
The frontend works entirely on its own using localStorage. Simply open:

```
frontend/index.html
```

in any modern browser (Chrome, Firefox, Edge).

### Option 2: Run with Backend Server

1. **Install Node.js** (v16 or higher): https://nodejs.org

2. **Navigate to the backend folder:**
   ```bash
   cd mysore/backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 🔌 API Endpoints

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | `/api/health`               | Server health check                  |
| GET    | `/api/motivation`           | Random motivational message          |
| GET    | `/api/users`                | List all users                       |
| GET    | `/api/users/:id`            | Get user by ID                       |
| POST   | `/api/users`                | Create a new user                    |
| PUT    | `/api/users/:id`            | Update user profile                  |
| GET    | `/api/paths`                | List all learning paths              |
| GET    | `/api/paths/:id`            | Get specific learning path           |
| POST   | `/api/paths/generate`       | Generate personalized roadmap        |
| GET    | `/api/assessments/quizzes`  | Get quiz questions (by difficulty)   |
| GET    | `/api/assessments/coding`   | Get coding challenges                |
| POST   | `/api/assessments/submit`   | Submit answers and get results       |
| GET    | `/api/careers`              | List all career paths                |
| GET    | `/api/careers/recommend`    | Get personalized recommendations     |
| GET    | `/api/careers/courses`      | List courses (filter by goal)        |

---

## 🎨 Design Philosophy

- **Clean & Calm** — Soft white background, gentle shadows, rounded corners
- **Slate Blue Palette** — Professional and soothing primary color
- **Inter Font** — Modern, highly readable sans-serif
- **No Aggressive Animations** — Subtle transitions for a comfortable feel
- **Human Touch** — Real student names, encouraging messages, warm copy
- **Mobile-First** — Fully responsive on all screen sizes

---

## 🛠️ Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | HTML5, CSS3, Vanilla JS     |
| Backend    | Node.js, Express.js         |
| Database   | Mock JSON (localStorage)    |
| Fonts      | Google Fonts (Inter)        |

---

## 📝 Notes

- All data is stored in **localStorage** for the demo — no account persists across browsers
- The AI chatbot uses **pattern-matching** for responses (not a real AI model)
- Quiz difficulty **auto-adjusts**: scores below 50% switch to easier questions, above 75% switch to harder ones
- The backend is optional — the frontend is fully functional standalone

---

## 👥 Sample Users

| Name          | Goal            | Level        |
|---------------|-----------------|--------------|
| Riya Sharma   | Web Development | Beginner     |
| Arjun Patel   | Data Science    | Intermediate |
| Priya Nair    | AI / ML         | Beginner     |

---

## 📄 License

This project is for educational and demonstration purposes. MIT License.
