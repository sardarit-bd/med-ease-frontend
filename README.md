# 🩺 Med’Ease Platform V2 — Technical Specification

## 📘 Overview
**Med’Ease** is a next-generation healthcare coordination platform designed to connect **patients**, **professionals**, **establishments**, and **administrators** in a unified digital ecosystem.

**Version 2** introduces:
- 🧠 **Intelligent Pharmaceutical Module**
- 🚀 **Improvements** to existing V1 modules (beds, transport, directory)
- 🤖 **AI-powered features** (drug interactions, mapping, prioritization)
- 🔒 **Enhanced security & GDPR compliance**

---

## 👥 Target Users
- **Patients & Families**
- **Healthcare Professionals**
- **Healthcare Establishments** (hospitals, clinics, SSR, EHPAD)
- **Administrators (Med’Ease team)**
- **Medical Transport Providers**

---

## ✅ Key User Stories

### 👤 Patients / Families
- Manage **pill organizer** and receive reminders  
- Scan prescriptions or medicine boxes (OCR/Datamatrix)  
- Receive **AI alerts** for interactions and contraindications  
- Search medicine in the **pharmaceutical dictionary**  
- Track medical expenses and visualize treatments  
- Access full **health record** (vaccines, documents, history)  
- Request services from the **Medical Concierge**  
- Track **medical transport** in real-time (Uber-like)

### 🩺 Healthcare Professionals
- View and edit **patient records**  
- Manage **prescriptions** directly from platform  
- Access **available beds** and hospital data  
- Create professional **service pages** (pricing, diplomas, etc.)  
- Integrate with scheduling APIs (Doctolib, Maiia, etc.)  
- Accept/reject **transport missions**

### 🏥 Establishments
- Update **bed availability** manually or via API  
- Manage service catalogs and pricing  
- Display **TripAdvisor-style** pages  
- Handle transport and concierge requests  
- Publish establishment details, location, and certifications  

### 🛠️ Administrators
- Manage multi-profile access (patients, pros, admins)  
- Monitor **logs, activities, and audit trails**  
- Manage healthcare directory  
- Run **dynamic searches** for coordination  
- Ensure GDPR and data privacy compliance  

### 🚑 Transport Providers
- Manage **availability status**  
- Show **real-time GPS tracking**  
- Calculate ETA via **Google Maps API**  
- Manage **crew and equipment info**  
- Accept / reject transport missions  

---

## 🧩 Main Modules & Features

### 💊 Pharmaceutical Module
| Feature | Description |
|----------|--------------|
| **Dashboard** | Overview of prescriptions, alerts, and pharmacy data |
| **Virtual Pillbox** | Manual or scanned medicine management with AI alerts |
| **Virtual Pharmacy** | Track home stock, expiries, and local availability |
| **Medical Expenses** | Auto-categorized expenses and reimbursement tracking |
| **Prescription OCR** | Automatic extraction and digital renewal |
| **Health Record / Vaccination** | Centralized history, devices, vaccines, documents |

### 🗺 V1 Improvements
- **Healthcare Directory** (TripAdvisor-style map)
- **Available Beds** (real-time + smart filtering)
- **Medical Transport** (end-to-end digital flow)

### 🤖 AI Services
- **General AI:** drug interactions, allergy alerts, smart suggestions  
- **Pharma AI:** replacement suggestions, contraindication detection  
- **Transport AI:** ETA prediction, route optimization  
- **Mapping AI:** facility recommendation & relevance scoring  

---

## 🧱 Technical Architecture

### 🌐 Frontend
- **Framework:** React + Next.js + TailwindCSS  
- **Shared Modules:** dashboards, smart search, cards/lists, Google Maps JS API  

### ⚙️ Backend
- **Stack:** Node.js + Express + MongoDB Atlas  
- **Architecture:** Modular Monolith  
- **Webhooks:** Beds, Pharmacies updates  
- **Cron Jobs:** BDPM sync, stock refresh, vaccination updates  

### 🔑 Authentication
- Firebase Auth reference  
- JWT (multi-profile)  
- OAuth2 (for professionals)  
- Optional MFA (2FA)  

### 🧠 AI Layer
- Rule-based + NLP hybrid models  
- Data Sources: **BDPM, DrugBank, OpenMedic**  
- Real-time **drug interaction checker**


### 💊 Pharmaceutical Dictionary Engine
- Daily **ETL sync** from BDPM  
- Redis cache for instant search  
- Meilisearch / Elasticsearch for full-text indexing  

### 🏢 Professional Studio
- Media: Firebase Storage / Cloudflare R2  
- CDN Delivery  
- Video Transcoding API (YouTube / Vimeo / Cloudflare Stream)  

---

## 🧾 Data Models (Summary)

### 🧠 Medicines
| Field | Type | Description | Source |
|-------|------|--------------|---------|
| id_medicament | string | CIP/CIS code | BDPM |
| nom_commercial | string | Brand name | BDPM |
| interactions | array | Related drugs | DrugBank |
| prix | number | Public price | BDPM |
| taux_remboursement | number | Reimbursement % | BDPM |

### 💊 Pillbox
user_id, medicament_id, dose, fréquence, horaires, historique  

### 🧾 Prescriptions
ordonnance_id, user_id, physician, date, médicaments (OCR extracted)  

### 🏥 Establishments
nom, type, localisation, prestations, lits_disponibles, services_spécialisés  

### 🚑 Transport
transport_id, patient_id, statut, localisation, ETA, véhicule, équipage, logs  

### 👨‍⚕️ Professional Studio
pro_id, établissement_id, photos, vidéos, tarification, disponibilités, certifications  

---

## 🌍 External APIs & Data Sources

| Category | Source |
|-----------|---------|
| **Pharmaceutical Data** | BDPM, API Médicaments, DrugBank, RxNorm |
| **Geolocation / Mapping** | Etalab API, Google Maps APIs |
| **Expenses Data** | OpenMedic (Assurance Maladie) |
| **Medical Transport** | Google Maps, Firebase RTDB, Vehicle Fleet APIs |
| **Professional / Establishment** | Doctolib, Maiia, Google Places, Cloudflare Stream |

---

## 🔒 Security & GDPR Compliance
- Explicit user consent for all data sharing  
- AES-256 encryption for sensitive data  
- Pseudonymization of health data  
- Complete audit logging on CRUD actions  
- Role-based, multi-profile access control  

---

## 🎯 Functional Objectives
| Service | Goal |
|----------|------|
| Virtual Pillbox | Ensure correct intake, prevent dosage errors |
| Prescriptions | Digitize and automate management |
| Virtual Pharmacy | Track personal and local stock |
| Health Record | Centralize all documents |
| Medical Expenses | Transparent cost and reimbursement overview |
| Directory | Find qualified care providers easily |
| Available Beds | Simplify hospital routing |
| Dictionary | Provide reliable drug data with interactions |
| Transport | Real-time, Uber-like coordination |
| Professional Studio | Enable pros to publish rich profiles |

---

## 🧭 Main Menu (Frontend Navigation)
- Healthcare Offers  
- Establishment Information Portal  
- Professional Information Portal  
- Map Explorer  
- Pharmacy  
- Health Record  
- Medical Transport  
- Thematic Sections  
- Emergency & On-Call Services  
- Useful Numbers  
- Patient Experience  

---


### ⚙️ Environment Variables  
Create a file named `.env.local` in the **project root directory** and add the following:

```bash
NEXT_PUBLIC_BASE_URL = Your backend base url here

```



### Clone the repository and move the folder

```bash
git clone https://github.com/sardarit-bd/med-ease-frontend.git

cd med-ease-frontend

```




### Install dependencies and start the server

```bash
npm install

# Start the server in development mode (using nodemon)
npm run dev

# Or start normally
npm start

```






### You will see"
Site is runing: http://localhost:3000



### And you can access 
http://localhost:3000



## 📄 License
© 2025 **Med’Ease** — All Rights Reserved.  
Confidential internal document for project development use only.

---

### 👩‍💻 Authors
**Med’Ease Development Team**  
Lead Architect: *[Your Name / Company]*  
Backend: Node.js + Express  
Frontend: Next.js + TailwindCSS  
AI: Hybrid NLP & Rules Engine  

---


#  Thank you so Much