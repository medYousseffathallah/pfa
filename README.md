# � University Club Management System (ISIMM)

## 🌟 Project Overview
This project is a **University Club Management System** designed for *Institut Supérieur d'Informatique et de Mathématiques de Monastir (ISIMM)*. It serves as a centralized platform to streamline the administration of student clubs, events, and activities.

---

## ✨ Key Features
- **Club Registration & Management** - Complete lifecycle management of student clubs
- **Event Scheduling & Tracking** - Calendar integration with reminders
- **Student Participation Analytics** - Engagement metrics and reporting
- **Department-Specific Clubs**:
  - Informatique
  - Mathématiques
  - Technologies de l'Information
- **News & Announcements Dashboard** - Centralized communication hub

---

## 🤖 AI Integration Options
The system supports two AI integration methods:

### 1. DeepSeek API
**Setup Instructions**:
1. Obtain API credentials from [DeepSeek](https://platform.deepseek.com)
2. Configure `config/ai_config.json` with your endpoint
3. Activate via the admin panel

### 2. Botpress Chatbot
**Setup Instructions**:
1. Deploy a [Botpress](https://botpress.com) server
2. Set the webhook in `config/botpress_config.json`
3. Import the chatbot templates from `/templates`

---

## ⚙️ Technical Stack
| Component       | Technology           |
|----------------|----------------------|
| Backend        | Node.js 16+, Express |
| Database       | MongoDB 4.4+         |
| Frontend       | React.js             |
| Deployment     | Docker (optional)    |

---

## 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/your-repo/university-club-mgmt.git

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start development server
npm run dev
