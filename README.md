<div align="center">

# 🩺 Swasthya-Drishti 1.0

### AI-Powered Medical Command Center — Patna District, Bihar

**Build with AI: Code for Communities Hackathon** &nbsp;|&nbsp; **Smart Health Track** &nbsp;|&nbsp; Team **MACET**

[![Python](https://img.shields.io/badge/Python-3.11-3776ab?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Gemini](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-4285f4?style=flat-square&logo=google&logoColor=white)](https://aistudio.google.com)
[![Render](https://img.shields.io/badge/Deployed%20on-Render-46e3b7?style=flat-square&logo=render&logoColor=white)](https://swasthya-drishti-1-0.onrender.com/)
[![License](https://img.shields.io/badge/License-MIT-2ecc82?style=flat-square)](LICENSE)
[![Facilities](https://img.shields.io/badge/Live%20Facilities-316-39ff88?style=flat-square)](#-why-it-matters)

[🌐 **Live App**](https://swasthya-drishti-1-0.onrender.com/) &nbsp;•&nbsp; [📦 **Source Code**](https://github.com/mdkamran623/Swasthya-Drishti-1.0) &nbsp;•&nbsp; [🚀 Quick Start](#️-quick-start) &nbsp;•&nbsp; [📊 Data Sources](#-why-it-matters)

</div>

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [The Fix — Swasthya-Drishti](#-the-fix--swasthya-drishti)
- [Why It Matters](#-why-it-matters)
- [What's Inside](#-whats-inside)
- [Tech Stack](#️-tech-stack)
- [System Architecture](#-system-architecture)
- [Quick Start](#️-quick-start)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment-render)
- [Project Structure](#-project-structure)
- [Roadmap](#-where-this-goes-next)
- [Team](#-team)
- [License](#-license)

---

## 🎯 The Problem

District health officers in India manage this **blind**, every single day:

| Issue | Real-World Impact |
|---|---|
| 🔴 **No live view** | Overloaded health centers go unnoticed until it's already a crisis |
| 🔴 **Medicine stockouts** | Discovered only after a patient is turned away |
| 🔴 **Doctor absenteeism** | Tracked on paper registers, weeks after the fact |
| 🔴 **Disease outbreaks** | Dengue, malaria, typhoid spotted late — surveillance data sits in disconnected PDFs |

The result: **reactive** healthcare management, where officials fight fires instead of preventing them.

---

## 💡 The Fix — Swasthya-Drishti

**Swasthya-Drishti** (*"Health Vision"*) turns scattered government data into **one live command center** for a district health administration — built and proven on **real data for Patna District, Bihar**.

<table>
<tr>
<td width="33%" valign="top">

### 📡 See It Live
Pulls real bed occupancy, doctor attendance, footfall, and disease surveillance data from **NHM Bihar** and **IDSP** reports, cross-referenced against **316 live facilities** from OpenStreetMap.

</td>
<td width="33%" valign="top">

### 🚨 Catch It Early
Auto-flags critical centers, medicine shortages, and bed overload **before** they become a public emergency — via a real-time alerts panel.

</td>
<td width="33%" valign="top">

### 🤖 Act On It
**Gemini 1.5 Flash** reads the district's numbers and writes an executive summary, critical actions, a **7-day risk forecast**, and an auto-generated medicine redistribution plan.

</td>
</tr>
</table>

---

## 🌍 Why It Matters

> A health officer in Patna today makes redistribution and staffing decisions off memory, phone calls, and paper reports. Swasthya-Drishti replaces that with a single screen that already knows where the next shortage is coming from.

This isn't a hackathon toy dashboard — **every number traces back to a published government source**:

| Source | What It Grounds |
|---|---|
| **NHM Bihar Annual Report 2023–24** | Beds, doctors, facility baselines |
| **IDSP Weekly Bulletin W45/2024** | Live disease surveillance (malaria, dengue, TB, typhoid) |
| **OpenStreetMap Overpass API** | 316 real facility locations, live |
| **Gemini 1.5 Flash** | Turns raw numbers into a decision an officer can act on today |

That means the model is **directly reusable** for any of Bihar's 38 districts — or any Indian district health office — just by swapping in that district's NHM/IDSP data.

---

## ✨ What's Inside

- 🖥️ **District Cockpit** — live KPIs at a glance
- 🏥 **Health Center Network** — status radar across all major facilities
- 📈 **Disease & Footfall Trends** — 30-day charts, per-center drill-down
- 💊 **Supply Chain View** — medicine stock ranked by urgency, days-remaining
- 🔄 **AI Redistribution Plan** — auto-matched transfers between over/under-stocked centers
- 🧠 **Gemini AI Analysis** — plain-language district intelligence report
- 🌐 **Bilingual (English/Hindi)**, dark-mode, fully responsive — built for the field, not just a demo

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Python 3 + Flask (REST APIs, data processing) |
| **AI Engine** | Google Gemini 1.5 Flash API |
| **Frontend** | HTML5, CSS3, JavaScript, Chart.js |
| **Data Layer** | Government facility/stock/bed records + OpenStreetMap Overpass API |
| **Deployment** | Render (continuous cloud hosting) |
| **Version Control** | Git & GitHub |

---

## 🏗 System Architecture

```
┌─────────────────────┐     ┌──────────────────┐     ┌────────────────────┐
│  Government Data     │────▶│   Flask Backend   │────▶│  Gemini 1.5 Flash  │
│  NHM Bihar · IDSP ·   │     │  REST APIs +      │     │  AI insights,      │
│  OpenStreetMap        │     │  data processing  │     │  forecasts, plans  │
└─────────────────────┘     └──────────────────┘     └────────────────────┘
                                     │
                                     ▼
                          ┌────────────────────────┐
                          │  Chart.js Frontend UI   │
                          │  Bilingual live         │
                          │  dashboard (EN/HI)      │
                          └────────────────────────┘
                                     │
                                     ▼
                     🌐 swasthya-drishti-1-0.onrender.com
```

---

## ⚙️ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/mdkamran623/Swasthya-Drishti-1.0.git
cd Swasthya-Drishti-1.0

# 2. Install dependencies
pip install -r requirements.txt

# 3. Set up environment variables
cp .env.example .env
# Add your free Gemini key from https://aistudio.google.com/app/apikey

# 4. Run the app
python app.py
```

Open **http://localhost:5000** in your browser.

> 💡 The app runs even **without** a Gemini key, using a detailed AI-analysis fallback — so you can explore it instantly.

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Recommended | Your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey) — enables live AI analysis, forecasts & redistribution plans |
| `CACHE_TTL` | Optional | Cache duration (seconds) for API responses. Default: `300` |

> 🔒 Never commit your real `.env` file. Only `.env.example` (with placeholder values) should be tracked in Git.

---

## 🚀 Deployment (Render)

Swasthya-Drishti is live at **[swasthya-drishti-1-0.onrender.com](https://swasthya-drishti-1-0.onrender.com/)**, deployed on [Render](https://render.com) in a few clicks:

| Setting | Value |
|---|---|
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn app:app --bind 0.0.0.0:$PORT --workers 2 --timeout 120` |
| **Environment Variables** | `GEMINI_API_KEY`, `CACHE_TTL=300` |

**Steps:** Push to GitHub → connect this repo on [render.com](https://render.com) → set the build/start commands above → add env vars → Deploy 🎉

---

## 📁 Project Structure

```
Swasthya-Drishti-1.0/
├── static/            # CSS, JS, images — frontend assets
├── templates/          # HTML templates (Jinja2)
├── app.py              # Flask application entry point
├── requirements.txt     # Python dependencies
├── runtime.txt          # Python runtime version (for Render)
├── Procfile             # Process file for deployment
└── README.md            # You are here
```

---

## 🧭 Where This Goes Next

Swasthya-Drishti is built as a **template for scale**, not a one-district demo:

- 🗺️ Swap in NHM/IDSP data for any other district → instant new command center
- 📶 Plug in real-time IoT bed sensors instead of periodic reports
- 📝 Extend the Gemini layer to auto-draft the officer's weekly report
- 📲 Add SMS/WhatsApp alerts so field staff get shortage warnings without opening a dashboard
- 🏛️ Scale to all 38 districts of Bihar, then integrate with state health department systems

---

## 👥 Team

**Team MACET** — Maulana Azad College of Engineering & Technology, Patna (BEU)

Built for **Build with AI: Code for Communities** Hackathon · Smart Health Track

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with 💚 in Patna, Bihar

**[🌐 Live Demo](https://swasthya-drishti-1-0.onrender.com/)** &nbsp;•&nbsp; **[📦 GitHub Repo](https://github.com/mdkamran623/Swasthya-Drishti-1.0)**

</div>
