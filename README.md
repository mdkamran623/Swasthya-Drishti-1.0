<div align="center">

# 🩺 Swasthya-Drishti 1.0
### AI-Powered Medical Command Center — Patna District, Bihar

**Build with AI: Code for Communities Hackathon** · Team **MACET**

[![Python](https://img.shields.io/badge/Python-3.11-3776ab?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Gemini](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-4285f4?style=flat-square&logo=google&logoColor=white)](https://aistudio.google.com)
[![License](https://img.shields.io/badge/License-MIT-2ecc82?style=flat-square)](LICENSE)
[![Facilities](https://img.shields.io/badge/Live%20Facilities-316-39ff88?style=flat-square)](#-why-it-matters)

</div>

<br>

## 🎯 The Problem

District health officers in India manage this blind, every single day:

- **No live view** of which health centers are overloaded until it's already a crisis
- **Medicine stockouts** discovered only after a patient is turned away
- **Doctor absenteeism** tracked on paper registers, weeks after the fact
- **Disease outbreaks** (dengue, malaria, typhoid) spotted late because surveillance data sits in disconnected PDFs

The result: reactive healthcare management, where officials fight fires instead of preventing them.

<br>

## 💡 The Fix — Swasthya-Drishti

**Swasthya-Drishti** ("Health Vision") turns scattered government data into one live command center for a district health administration — built and proven on **real data for Patna District, Bihar**.

<table>
<tr><td width="33%" align="center">

### 📡 See It Live
Pulls real bed occupancy, doctor attendance, footfall, and disease surveillance data from **NHM Bihar** and **IDSP** reports, cross-referenced against **316 live facilities** from OpenStreetMap.

</td><td width="33%" align="center">

### 🚨 Catch It Early
Auto-flags critical centers, medicine shortages, and bed overload **before** they become a public emergency — with a real-time alerts panel.

</td><td width="33%" align="center">

### 🤖 Act On It
**Gemini 1.5 Flash** reads the district's numbers and writes an executive summary, critical actions, and a **7-day risk forecast** — plus an auto-generated medicine redistribution plan between centers.

</td></tr>
</table>

<br>

## 🌍 Why It Matters

> A health officer in Patna today makes redistribution and staffing decisions off memory, phone calls, and paper reports. Swasthya-Drishti replaces that with a single screen that already knows where the next shortage is coming from.

This isn't a hackathon toy dashboard — every number traces back to a **published government source**:

| Source | What it grounds |
|---|---|
| NHM Bihar Annual Report 2023–24 | Beds, doctors, facility baselines |
| IDSP Weekly Bulletin W45/2024 | Live disease surveillance (malaria, dengue, TB, typhoid) |
| OpenStreetMap Overpass API | 316 real facility locations, live |
| Gemini 1.5 Flash | Turns raw numbers into a decision an officer can act on today |

That means the model is **directly reusable** for any of Bihar's 38 districts — or any Indian district health office — just by swapping in that district's NHM/IDSP data.

<br>

## ✨ What's Inside

- **District Cockpit** — live KPIs at a glance
- **Health Center Network** — status radar across all 5 major facilities
- **Disease & Footfall Trends** — 30-day charts, per-center drill-down
- **Supply Chain View** — medicine stock ranked by urgency, days-remaining
- **AI Redistribution Plan** — auto-matched transfers between over/under-stocked centers
- **Gemini AI Analysis** — plain-language district intelligence report
- **Bilingual, dark-mode, fully responsive** — built for the field, not just a demo

<br>

## 🛠️ Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/swasthya-drishti.git
cd swasthya-drishti/Build-with-Ai-Smart-Health_Track
pip install -r requirements.txt
cp .env.example .env   # add your free Gemini key from aistudio.google.com/app/apikey
python app.py
```

Open **[http://localhost:5000](http://localhost:5000)** — runs even without a Gemini key, using a detailed AI-analysis fallback.

<details>
<summary><b>Deploy to Render in 5 minutes</b></summary>

<br>

| Setting | Value |
|---|---|
| Root Directory | `Build-with-Ai-Smart-Health_Track` |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `gunicorn app:app --bind 0.0.0.0:$PORT --workers 2 --timeout 120` |
| Env Vars | `GEMINI_API_KEY`, `CACHE_TTL=300` |

Push to GitHub → connect repo on [render.com](https://render.com) → deploy.

</details>

<br>

## 🧭 Where This Goes Next

Swasthya-Drishti is built as a **template for scale**, not a one-district demo:

- Swap in NHM/IDSP data for any other district → instant new command center
- Plug in real-time IoT bed sensors instead of periodic reports
- Extend the Gemini layer to auto-draft the officer's weekly report
- Add SMS/WhatsApp alerts so field staff get shortage warnings without opening a dashboard

<br>

<div align="center">

**Team MACET** · Build with AI: Code for Communities Hackathon
<sub>Made with 💚 in Patna, Bihar</sub>

</div>
