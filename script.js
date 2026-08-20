/**
 * AHMAD BILAL ZAIDI — LUXURY EDITORIAL PORTFOLIO CONTROLLER
 * Source: UI/UX Pro Max Luxury & Premium Design System
 * Pure Jet Black (#000000) & Polished Champagne Gold Palette
 */

// --- CONFIG & CONSTANTS ---
const API_BASE_URL = "https://script.google.com/macros/s/AKfycbxdFDBsvmMF--b-6FSRVa8bnpZT1dcWLkXkqQBHsqAMhw3_HQlog-ZLpc1RBmegcQUGeA/exec";
const API_TOKEN = "ILoveS7f8a";

const LOCAL_KEY_DATA = "ahmad_portfolio_data_v12";
const LOCAL_KEY_THEME = "ahmad_portfolio_theme_v12";

// UI/UX Pro Max Luxury Theme (Pure Jet Black & Champagne Gold)
const DEFAULT_THEME_CONFIG = {
    activeMode: "dark",
    dark: {
        primaryColor: "#c5a059",      /* Polished Champagne Gold */
        secondaryColor: "#f5e6c8",
        backgroundColor: "#000000",   /* Pure Jet Black - Zero Blue */
        surfaceColor: "#0f0f12",      /* Carbon Card */
        surfaceLightColor: "#17171c",
        accentColor: "#c5a059",
        textColor: "#f7f7f9",
        textMutedColor: "#a1a1aa"
    },
    light: {
        primaryColor: "#b45309",      /* Rich Antique Gold */
        secondaryColor: "#d97706",
        backgroundColor: "#f8fafc",   /* Crisp Luminous Canvas */
        surfaceColor: "#ffffff",      /* Pure Crisp White */
        surfaceLightColor: "#f1f5f9",
        accentColor: "#b45309",
        textColor: "#0f172a",         /* Deep Slate 900 */
        textMutedColor: "#475569"     /* Slate 600 */
    }
};

// Rich Seed Data (Rendered synchronously in 0ms)
const FALLBACK_SEED_DATA = {
    profile: {
        name: "Ahmad Bilal Zaidi",
        role: "Software Engineer · Cloud & AI Backend",
        bio: "Architecting resilient cloud-native healthcare infrastructure on AWS and engineering intelligent AI & RAG retrieval systems.",
        aboutDesc: "Software Engineer at Symbian Health, building cloud-native healthcare platforms on AWS — spanning serverless microservices, DICOM radiology systems, AI-powered medical document pipelines, and LLM-driven chatbots with AWS Bedrock. Pursuing M.Tech in Software Engineering at AMU with research in Hybrid RAG systems.",
        location: "Prayagraj, India",
        email: "ahmadbilal.199822@gmail.com",
        github: "https://github.com/AngryFalcon89",
        linkedin: "https://linkedin.com",
        photoUrl: "https://lh3.googleusercontent.com/d/11MXQIX96Xj4BisD99zxBB4jJGFy5GubR"
    },
    skills: {
        languages: [
            { name: "Python", iconUrl: "https://lh3.googleusercontent.com/d/1T2gCp_UYlOiZVpnu_77_cjz0ARIwQ7OB" },
            { name: "JavaScript", iconUrl: "https://lh3.googleusercontent.com/d/1N1UUSFielfObDI1ayj4TZvM8nlsEDKQS" },
            { name: "Kotlin", iconUrl: "https://lh3.googleusercontent.com/d/1pGiSh9XMq0Xzl3dto1enJq1kj-zlqAQo" },
            { name: "SQL", iconUrl: "https://lh3.googleusercontent.com/d/16WXl5aIfsCvMbcAb9NhMCkTyBt9tiiO7" },
            { name: "C++", iconUrl: "https://lh3.googleusercontent.com/d/1ppbPrGi_u8c_0oXLhKnmGk8U2HWaRP4Z" }
        ],
        frameworks: [
            { name: "Node.js", iconUrl: "https://lh3.googleusercontent.com/d/1SjHttingUyqzUFpTGrwEfxShVDs3sCoM" },
            { name: "LangChain", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" },
            { name: "AWS CDK (IaC)", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" },
            { name: "Android (Jetpack Compose)", iconUrl: "https://lh3.googleusercontent.com/d/1x22RpQ1alNhAFIXTT5SY1Qkc-QV8SQYH" }
        ],
        tools: [
            { name: "AWS", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" },
            { name: "Docker", iconUrl: "https://lh3.googleusercontent.com/d/1srnne0crSgpWEyK13BqDSHAk1eFvTIEr" },
            { name: "Git", iconUrl: "https://lh3.googleusercontent.com/d/1gBvnY2bC7Ujw1iEiVnYmCt3CPHygQlWF" },
            { name: "pytest", iconUrl: "https://lh3.googleusercontent.com/d/1T2gCp_UYlOiZVpnu_77_cjz0ARIwQ7OB" },
            { name: "MongoDB", iconUrl: "https://lh3.googleusercontent.com/d/1srnne0crSgpWEyK13BqDSHAk1eFvTIEr" }
        ],
        services: [
            { name: "AWS Lambda", iconUrl: "https://lh3.googleusercontent.com/d/12W3dKt2HE7K3-6otse8Fgq-sgwLtDl0S" },
            { name: "Amazon Bedrock", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" },
            { name: "DynamoDB", iconUrl: "https://lh3.googleusercontent.com/d/1XKvGMt_7TNUke7cpZ5u0J_NSkAXfDMTc" },
            { name: "S3", iconUrl: "https://lh3.googleusercontent.com/d/1RXI2ZWQstVcjgIsHQIj1N0mYCTpw7qis" },
            { name: "AppSync (GraphQL)", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" },
            { name: "SQS / SNS", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" },
            { name: "AWS Cognito", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" },
            { name: "AWS HealthImaging", iconUrl: "https://lh3.googleusercontent.com/d/106D1B6SU1Jhynk9V4G2naWlLa5a2o8SK" }
        ]
    },
    experience: [
        {
            id: 0,
            role: "Software Engineer",
            company: "Symbian Health",
            location: "Remote / India",
            date: "Sep 2024 – Present",
            desc: "Building production-grade, cloud-native healthcare infrastructure on AWS for a medical SaaS platform deployed across 4 hospital environments.\n\n• Architected 40+ serverless Lambda microservices (AWS CDK IaC) spanning DICOM radiology, pathology, lab diagnostics, and AI health modules.\n• Engineered an AI-powered chest X-ray analysis pipeline using Docker Lambda ML inference triggered via SQS with DLQ retry.\n• Built an enterprise RBAC system securing 40+ API endpoints with per-permission authorization.\n• Delivered an LLM health chatbot (AWS Bedrock + AppSync streaming) with subscription gates.",
            docUrl: ""
        },
        {
            id: 1,
            role: "Application Development Intern",
            company: "Stick App",
            location: "Remote / India",
            date: "Jan 2023 – Apr 2023",
            desc: "Contributed to end-to-end development of an online youth engagement platform — database schema design, backend API development, and Android UI using Kotlin and Jetpack Compose.",
            docUrl: "https://stickapp.club/"
        }
    ],
    education: [
        {
            id: 0,
            institution: "Zakir Husain College of Engineering & Technology (AMU)",
            degree: "Master of Technology (M.Tech) — Software Engineering",
            startYear: "2024",
            endYear: "2026",
            location: "Aligarh, India",
            details: "CGPA: 9.028/10 | Dissertation: LLM-Driven Hybrid RAG System for University Course Enrollment",
            docUrl: "https://drive.google.com/file/d/1bZjf9X1oQpQLcD-Lol8v5KBHcSYWcoTN/view?usp=sharing"
        },
        {
            id: 1,
            institution: "Zakir Husain College of Engineering & Technology (AMU)",
            degree: "Bachelor of Technology (B.Tech) — Computer Engineering",
            startYear: "2020",
            endYear: "2024",
            location: "Aligarh, India",
            details: "CGPA: 8.803/10",
            docUrl: "https://lh3.googleusercontent.com/d/113LF5DEZbcpG6r9P7KrAHd0uyEOpoDyg"
        }
    ],
    projects: [
        {
            id: 1,
            title: "LLM-Driven University Chatbot (Hybrid RAG)",
            category: "ai",
            desc: "M.Tech dissertation: a 5-stage Hybrid RAG pipeline for university course advising. Combines BM25 lexical search, semantic search, Reciprocal Rank Fusion, and cross-encoder reranking. Evaluated with RAGAS (Faithfulness: 0.88, Answer Relevancy: 0.82, Context Recall: 0.85).",
            techStack: ["Node.js", "AWS Bedrock", "LangChain", "HNSWLib", "RAGAS", "Express.js"],
            githubUrl: "https://github.com/AngryFalcon89/genai",
            liveUrl: "",
            docUrl: "",
            imageUrl: ""
        },
        {
            id: 2,
            title: "myMD Radiology AI Pipeline",
            category: "cloud",
            desc: "Production AI pipeline for automated radiology analysis at Symbian Health. SQS-triggered Docker Lambda runs ML inference on DICOM studies from AWS HealthImaging (AHI) with DLQ retry and KMS encryption.",
            techStack: ["Python", "AWS CDK", "SQS", "Docker Lambda", "AWS HealthImaging", "DynamoDB"],
            githubUrl: "https://apps.apple.com/in/app/mymd-ai/id6754447595",
            liveUrl: "https://www.symbianhealth.com/",
            docUrl: "",
            imageUrl: ""
        },
        {
            id: 5,
            title: "Globe Today 2.0",
            category: "mobile",
            desc: "Modern news mobile application keeping users updated with global events with bookmarks, offline cache, and real-time feeds.",
            techStack: ["Kotlin", "Android", "Jetpack Compose", "Coroutines"],
            githubUrl: "https://github.com/AngryFalcon89/GlobeToday_2.0",
            liveUrl: "",
            docUrl: "",
            imageUrl: "https://lh3.googleusercontent.com/d/1zSG5udHm4i5vo2RcuP8_ryJHoRrwSdns"
        },
        {
            id: 6,
            title: "Seminar Management System",
            category: "mobile",
            desc: "Android application to streamline academic book issuing, reservations, and inventory lifecycle tracking.",
            techStack: ["Kotlin", "Android", "Jetpack Compose", "Room DB"],
            githubUrl: "https://github.com/AngryFalcon89/Seminar_Management_System",
            liveUrl: "",
            docUrl: "",
            imageUrl: "https://lh3.googleusercontent.com/d/19Y2CdJwKEjjvmNmQAgzIibRUr-MT5qnl"
        }
    ],
    research: [
        {
            title: "LLM-Driven Virtual Assistant for University Course Enrollment (M.Tech Dissertation)",
            venue: "Zakir Husain College of Engineering & Technology, AMU",
            authors: "<strong>Ahmad Bilal Zaidi</strong>",
            year: "2026",
            status: "In Progress",
            paperUrl: "https://drive.google.com/file/d/1d9C_Lv7NosHGSZvaeip2HAnVZBaI9drw/view?usp=drive_link",
            certUrl: ""
        },
        {
            title: "Transformer-Based Topic Modeling for Research Literature",
            venue: "MAT Journals",
            authors: "<i>Shah Ahmed Shakir Abu Asim Khan, Eraf Ali, Osama Zaheer</i>, <strong>Ahmad Bilal Zaidi</strong>, <i>Zuhair Arif, Mohammad Rayyan</i>",
            year: "2025",
            status: "Published",
            paperUrl: "https://lh3.googleusercontent.com/d/1rT11ysDr_zISKqABpDYGLJbYApVODd2u",
            certUrl: "https://lh3.googleusercontent.com/d/1Hho8AR1F57DB6CBgTqjChh_q2GsKPktn"
        },
        {
            title: "ParkSense: A Computer Vision-Driven Parking Assistant",
            venue: "MAT Journals",
            authors: "<i>Eraf Ali, Osama Zaheer, Mohd Altamash, Zuhair Arif, Abdullah Awais, Ash Mohammad Abbas, Shah Ahmed Shakir Abu Asim Khan, Mohammad Rayyan</i>, <b>Ahmad Bilal Zaidi</b>",
            year: "2025",
            status: "Published",
            paperUrl: "https://lh3.googleusercontent.com/d/18x-fNXPKWCTI41c121zrAxNxjyzpFhB1",
            certUrl: "https://lh3.googleusercontent.com/d/1BUuELZPgn46KmdpBe27ds4Pr0XsHyIXr"
        }
    ],
    userSections: [
        {
            title: "Certifications",
            icon: "fa-solid fa-certificate",
            items: [
                {
                    title: "AWS Certified Solutions Architect – Associate",
                    subtitle: "Amazon Web Services (AWS)",
                    description: "Validated expertise in designing scalable, cost-optimized, fault-tolerant AWS cloud architectures — including VPC, EC2, EBS, RDS, IAM, Auto-Scaling, and high-availability deployment strategies.",
                    date: "January 2025",
                    badgeUrl: ""
                }
            ]
        }
    ],
    documents: [
        {
            id: 1,
            title: "Resume / CV",
            desc: "Ahmad Bilal Zaidi — Software Engineer (M.Tech)",
            category: "Resume",
            url: "https://drive.google.com/file/d/1bUVP43S7383pAfQVtBMrsy5cDTeItsmP/view?usp=drive_link"
        }
    ]
};

// --- STATE ---
let siteData = {};
let themeConfig = {};
let activeProjectFilter = 'all';

function buildApiUrl(action) {
    const url = new URL(API_BASE_URL);
    url.searchParams.set("action", action);
    url.searchParams.set("token", API_TOKEN);
    return url.toString();
}

// --- BOOTSTRAP (0ms Instant Render) ---
function init() {
    const cachedData = localStorage.getItem(LOCAL_KEY_DATA);
    siteData = cachedData ? JSON.parse(cachedData) : FALLBACK_SEED_DATA;

    const cachedTheme = localStorage.getItem(LOCAL_KEY_THEME);
    themeConfig = cachedTheme ? JSON.parse(cachedTheme) : DEFAULT_THEME_CONFIG;

    // Ensure dark mode background is pure black
    if (themeConfig.dark) {
        themeConfig.dark.backgroundColor = "#000000";
        themeConfig.dark.surfaceColor = "#0f0f12";
        themeConfig.dark.surfaceLightColor = "#17171c";
        themeConfig.dark.primaryColor = "#c5a059";
        themeConfig.dark.accentColor = "#c5a059";
    }

    applyTheme(themeConfig);
    renderAll();
    setupEventListeners();
    fetchRemoteData();
}

async function fetchRemoteData() {
    try {
        const [dataRes, themeRes] = await Promise.allSettled([
            fetch(buildApiUrl("getData")),
            fetch(buildApiUrl("getTheme"))
        ]);

        if (dataRes.status === "fulfilled") {
            const json = await dataRes.value.json();
            if (json && json.profile) {
                siteData = json;
                if (!siteData.education) siteData.education = [];
                if (!siteData.userSections) siteData.userSections = [];
                localStorage.setItem(LOCAL_KEY_DATA, JSON.stringify(siteData));
                renderAll();
            }
        }

        if (themeRes.status === "fulfilled") {
            const json = await themeRes.value.json();
            if (json && (json.dark || json.light)) {
                themeConfig = json;
                // Enforce pure black for dark theme
                if (themeConfig.dark) {
                    themeConfig.dark.backgroundColor = "#000000";
                    themeConfig.dark.surfaceColor = "#0f0f12";
                    themeConfig.dark.primaryColor = "#c5a059";
                    themeConfig.dark.accentColor = "#c5a059";
                }
                localStorage.setItem(LOCAL_KEY_THEME, JSON.stringify(themeConfig));
                applyTheme(themeConfig);
            }
        }
    } catch (err) {
        console.warn("Using local cache:", err);
    }
}

// --- THEME MANAGEMENT ---
function applyTheme(cfg) {
    if (!cfg) return;
    const mode = cfg.activeMode || "dark";
    const t = cfg[mode] || DEFAULT_THEME_CONFIG[mode];

    const htmlEl = document.documentElement;
    htmlEl.classList.remove('light', 'dark');
    htmlEl.classList.add(mode);

    // Luxury Champagne / Bronze Gold
    const goldColor = mode === 'dark' ? "#c5a059" : "#b45309";
    const goldRgb = mode === 'dark' ? "197, 160, 89" : "180, 83, 9";
    const bgColor = mode === 'dark' ? "#000000" : "#f8fafc";
    const surfaceColor = mode === 'dark' ? "#0f0f12" : "#ffffff";
    const cardColor = mode === 'dark' ? "#0d0d10" : "#ffffff";
    const textColor = mode === 'dark' ? "#f7f7f9" : "#0f172a";
    const textMuted = mode === 'dark' ? "#a1a1aa" : "#475569";

    htmlEl.style.setProperty("--color-gold", goldColor);
    htmlEl.style.setProperty("--color-accent", goldColor);
    htmlEl.style.setProperty("--color-accent-rgb", goldRgb);
    htmlEl.style.setProperty("--color-bg", bgColor);
    htmlEl.style.setProperty("--color-surface", surfaceColor);
    htmlEl.style.setProperty("--color-surface-card", cardColor);
    htmlEl.style.setProperty("--color-text", textColor);
    htmlEl.style.setProperty("--color-text-muted", textMuted);
}

function toggleTheme() {
    themeConfig.activeMode = themeConfig.activeMode === "dark" ? "light" : "dark";
    applyTheme(themeConfig);
    localStorage.setItem(LOCAL_KEY_THEME, JSON.stringify(themeConfig));
    saveThemeToCloud();
}

// --- GOOGLE DRIVE PDF HELPER ---
function toPdfViewerUrl(url) {
    if (!url) return "#";
    if (url.includes("googleusercontent.com/d/")) {
        const id = url.split("/d/")[1];
        return `https://drive.google.com/file/d/${id}/view`;
    }
    if (url.includes("drive.google.com")) {
        if (url.includes("/view")) return url;
        if (url.includes("/preview")) return url.replace("/preview", "/view");
        const m = url.match(/\/d\/(.*?)(\/|$)/);
        if (m && m[1]) return `https://drive.google.com/file/d/${m[1]}/view`;
        const m2 = url.match(/[?&]id=([^&]+)/);
        if (m2 && m2[1]) return `https://drive.google.com/file/d/${m2[1]}/view`;
    }
    return url;
}

// --- RENDER FUNCTIONS ---
function renderAll() {
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderEducation();
    renderProjects();
    renderResearch();
    renderCustomSections();
    renderDocuments();
    renderContact();
    initAnimations();
}

function renderHero() {
    const p = siteData.profile || {};
    document.title = `${p.name || 'Ahmad Bilal Zaidi'} — Software Engineer`;

    const nameEl = document.getElementById('hero-name');
    if (nameEl) {
        nameEl.innerHTML = `Ahmad Bilal <span class="gold-gradient-text">Zaidi</span>`;
    }

    const bioEl = document.getElementById('hero-bio');
    if (bioEl && p.bio) bioEl.textContent = p.bio;

    let socialsHtml = '';
    if (p.github) socialsHtml += `<a href="${p.github}" target="_blank" rel="noopener" title="GitHub"><i class="fa-brands fa-github"></i></a>`;
    if (p.linkedin) socialsHtml += `<a href="${p.linkedin}" target="_blank" rel="noopener" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>`;
    if (p.email) socialsHtml += `<a href="mailto:${p.email}" title="Email"><i class="fa-regular fa-envelope"></i></a>`;
    const heroSocials = document.getElementById('hero-socials');
    if (heroSocials) heroSocials.innerHTML = socialsHtml;

    const photoWrapper = document.getElementById('hero-photo-wrapper');
    if (photoWrapper && p.photoUrl && p.photoUrl.trim() !== '') {
        const frame = photoWrapper.querySelector('.portrait-image-container');
        if (frame) {
            frame.innerHTML = `<img src="${p.photoUrl}" alt="${p.name || 'Profile'}">`;
        }
    }
}

function renderAbout() {
    const p = siteData.profile || {};
    const descEl = document.getElementById('about-desc');
    if (descEl && p.aboutDesc) descEl.textContent = p.aboutDesc;

    const infoGrid = document.getElementById('about-info-grid');
    if (infoGrid) {
        const info = [
            { label: "Location", val: p.location || "Prayagraj, India" },
            { label: "Email", val: p.email || "ahmadbilal.199822@gmail.com" },
            { label: "Specialization", val: "AWS Cloud Infrastructure & AI Systems" }
        ];
        infoGrid.innerHTML = info.map(i => `
            <div class="detail-row">
                <h4>${i.label}</h4>
                <p>${i.val}</p>
            </div>
        `).join('');
    }
}

function renderSkills() {
    const s = siteData.skills || {};
    const container = document.getElementById('skills-container');
    if (!container) return;

    let html = '';
    for (let cat in s) {
        const skillList = s[cat] || [];
        html += `
            <div class="skill-box">
                <h3 class="skill-box-title">
                    <span>${cat}</span>
                    <span style="font-size:0.75rem; color:var(--color-accent); font-family:var(--font-mono);">${skillList.length}</span>
                </h3>
                <div class="skill-pill-list">
                    ${skillList.map(skill => {
                        const name = typeof skill === 'string' ? skill : skill.name;
                        const icon = (typeof skill === 'object' && skill.iconUrl) ? `<img src="${skill.iconUrl}" alt="" class="skill-icon-img">` : '';
                        return `<div class="luxury-skill-pill">${icon}<span>${name}</span></div>`;
                    }).join('')}
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;
    const expList = siteData.experience || [];

    container.innerHTML = expList.map(exp => `
        <div class="timeline-entry">
            <div class="timeline-top-row">
                <div>
                    <h3 class="timeline-role-title">${exp.role}</h3>
                    <span class="timeline-company">@ ${exp.company}</span>
                </div>
                <span class="timeline-period">${exp.date} &bull; ${exp.location}</span>
            </div>
            <p class="timeline-narrative">${exp.desc}</p>
            ${exp.docUrl ? `<a href="${toPdfViewerUrl(exp.docUrl)}" target="_blank" rel="noopener" class="btn btn-luxury-outline btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Certificate</a>` : ''}
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-timeline');
    if (!container) return;
    const eduList = siteData.education || [];

    container.innerHTML = eduList.map(edu => `
        <div class="timeline-entry">
            <div class="timeline-top-row">
                <div>
                    <h3 class="timeline-role-title">${edu.degree}</h3>
                    <span class="timeline-company">@ ${edu.institution}</span>
                </div>
                <span class="timeline-period">${edu.startYear} – ${edu.endYear} &bull; ${edu.location}</span>
            </div>
            <p class="timeline-narrative">${edu.details}</p>
            ${edu.docUrl ? `<a href="${toPdfViewerUrl(edu.docUrl)}" target="_blank" rel="noopener" class="btn btn-luxury-outline btn-sm"><i class="fa-regular fa-file-lines"></i> View Document</a>` : ''}
        </div>
    `).join('');
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const projs = siteData.projects || [];

    const filtered = projs.filter(p => {
        if (activeProjectFilter === 'all') return true;
        if (p.category && p.category.toLowerCase() === activeProjectFilter.toLowerCase()) return true;
        const techStr = (p.techStack || []).map(t => typeof t === 'string' ? t : t.name).join(' ').toLowerCase();
        if (activeProjectFilter === 'cloud' && (techStr.includes('aws') || techStr.includes('lambda') || techStr.includes('cdk') || techStr.includes('sqs'))) return true;
        if (activeProjectFilter === 'ai' && (techStr.includes('rag') || techStr.includes('bedrock') || techStr.includes('langchain') || techStr.includes('llm'))) return true;
        if (activeProjectFilter === 'mobile' && (techStr.includes('android') || techStr.includes('compose') || techStr.includes('kotlin'))) return true;
        return false;
    });

    grid.innerHTML = filtered.map(proj => `
        <div class="project-item-card">
            <div class="project-top-line">
                <h3 class="project-heading">${proj.title}</h3>
                <div class="project-links-group">
                    ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener" title="Source Code"><i class="fa-brands fa-github"></i></a>` : ''}
                    ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener" title="Live Preview"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                    ${proj.docUrl ? `<a href="${toPdfViewerUrl(proj.docUrl)}" target="_blank" rel="noopener" title="Documentation"><i class="fa-regular fa-file-lines"></i></a>` : ''}
                </div>
            </div>
            <p class="project-summary">${proj.desc}</p>
            <div class="project-tags-wrap">
                ${(proj.techStack || []).map(t => {
                    const name = typeof t === 'string' ? t : t.name;
                    return `<span class="project-pill">${name}</span>`;
                }).join('')}
            </div>
        </div>
    `).join('');
}

function renderResearch() {
    const grid = document.getElementById('research-grid');
    if (!grid) return;
    const papers = siteData.research || [];

    grid.innerHTML = papers.map(paper => {
        const s = (paper.status || '').toLowerCase();
        const statusClass = s === 'published' ? 'status-published' : 'status-in-progress';

        return `
            <div class="research-entry-card">
                <div class="research-top-meta">
                    <span class="research-status-pill ${statusClass}">${paper.status || 'Research'}</span>
                    <span style="font-family:var(--font-mono); font-size:0.78rem; color:var(--color-accent);">${paper.year}</span>
                </div>
                <h3 class="research-paper-title">${paper.title}</h3>
                <p class="research-citation">${paper.authors} &bull; <em>${paper.venue}</em></p>
                <div class="research-btn-group">
                    ${paper.paperUrl ? `<a href="${toPdfViewerUrl(paper.paperUrl)}" target="_blank" rel="noopener" class="btn btn-luxury-outline btn-sm"><i class="fa-solid fa-book-open"></i> Read Paper</a>` : ''}
                    ${paper.certUrl ? `<a href="${toPdfViewerUrl(paper.certUrl)}" target="_blank" rel="noopener" class="btn btn-luxury-text btn-sm"><i class="fa-solid fa-certificate"></i> Certificate</a>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderCustomSections() {
    const wrapper = document.getElementById('custom-sections-wrapper');
    if (!wrapper) return;
    const sections = siteData.userSections || [];
    if (sections.length === 0) { wrapper.innerHTML = ""; return; }

    wrapper.innerHTML = sections.map((sec, idx) => `
        <section class="section">
            <div class="container">
                <div class="section-label">
                    <span class="num">0${idx + 8}</span>
                    <span class="sep">/</span>
                    <span class="title">${sec.title}</span>
                </div>
                <h2 class="section-heading">${sec.title}</h2>

                <div class="luxury-docs-grid">
                    ${(sec.items || []).map(item => `
                        <div class="doc-entry-card">
                            <h3 class="doc-heading">${item.title}</h3>
                            <span style="color:var(--color-accent); font-size:0.88rem; font-weight:600; margin-bottom:4px;">${item.subtitle || ''}</span>
                            <span style="color:var(--color-text-dim); font-family:var(--font-mono); font-size:0.78rem; margin-bottom:10px;">${item.date || ''}</span>
                            <p class="doc-info">${item.description || ''}</p>
                            ${item.docUrl ? `<a href="${toPdfViewerUrl(item.docUrl)}" target="_blank" rel="noopener" class="btn btn-luxury-outline btn-sm" style="align-self:flex-start;"><i class="fa-solid fa-file"></i> View Attachment</a>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `).join('');
}

function renderDocuments() {
    const grid = document.getElementById('documents-grid');
    if (!grid) return;
    const docs = siteData.documents || [];

    grid.innerHTML = docs.map(doc => `
        <div class="doc-entry-card">
            <h3 class="doc-heading">${doc.title}</h3>
            <p class="doc-info">${doc.desc}</p>
            <a href="${toPdfViewerUrl(doc.url)}" target="_blank" rel="noopener" class="btn btn-luxury-outline btn-sm" style="align-self:flex-start;">
                <i class="fa-solid fa-arrow-down"></i> View / Download
            </a>
        </div>
    `).join('');
}

function renderContact() {
    const p = siteData.profile || {};
    const emailBtn = document.getElementById('contact-email-btn');
    if (emailBtn && p.email) emailBtn.href = `mailto:${p.email}`;

    const socials = document.getElementById('contact-socials');
    if (socials) {
        let html = '';
        if (p.github) html += `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-luxury-outline btn-sm"><i class="fa-brands fa-github"></i> GitHub</a>`;
        if (p.linkedin) html += `<a href="${p.linkedin}" target="_blank" rel="noopener" class="btn btn-luxury-outline btn-sm"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>`;
        socials.innerHTML = html;
    }
}

// --- EVENT LISTENERS & ADMIN SYSTEM ---
function setupEventListeners() {
    const menuBtn = document.getElementById('menu-toggle-btn');
    const navWrap = document.getElementById('nav-links-wrap');
    const overlay = document.getElementById('mobile-overlay');

    if (menuBtn && navWrap) {
        menuBtn.addEventListener('click', () => {
            const list = navWrap.querySelector('.nav-list');
            if (list) list.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            const list = navWrap?.querySelector('.nav-list');
            if (list) list.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            const list = navWrap?.querySelector('.nav-list');
            if (list) list.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        });
    });

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const filterTabs = document.querySelectorAll('.luxury-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeProjectFilter = tab.dataset.filter;
            renderProjects();
        });
    });

    // Admin Modal
    const loginModal = document.getElementById('login-modal');
    const adminDashboard = document.getElementById('admin-dashboard');

    document.getElementById('admin-trigger')?.addEventListener('click', e => { e.preventDefault(); if (loginModal) loginModal.style.display = 'flex'; });
    document.getElementById('footer-admin-link')?.addEventListener('click', e => { e.preventDefault(); if (loginModal) loginModal.style.display = 'flex'; });
    document.querySelector('.close-modal')?.addEventListener('click', () => { if (loginModal) loginModal.style.display = 'none'; });

    document.getElementById('admin-login-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const u = document.getElementById('admin-user').value;
        const p = document.getElementById('admin-pass').value;
        const btn = document.getElementById('do-login-btn');
        btn.innerHTML = '<span>Logging in...</span>';

        try {
            const res = await fetch(buildApiUrl("login"), {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify({ username: u, password: p })
            });
            const data = await res.json();
            if (data.success) {
                if (loginModal) loginModal.style.display = 'none';
                if (adminDashboard) adminDashboard.style.display = 'flex';
                renderAdminForms();
                showToast("Welcome to Admin Dashboard", "success");
            } else {
                document.getElementById('login-error').textContent = "Invalid Credentials";
            }
        } catch (err) {
            document.getElementById('login-error').textContent = "Network / Auth Error";
        } finally {
            btn.innerHTML = '<span>Login</span>';
        }
    });

    document.getElementById('logout-btn')?.addEventListener('click', () => {
        if (adminDashboard) adminDashboard.style.display = 'none';
    });
    document.getElementById('save-data-btn')?.addEventListener('click', saveDataToCloud);
    document.getElementById('save-theme-btn')?.addEventListener('click', saveThemeToCloud);

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.target);
            if (target) target.classList.add('active');
        });
    });
}

// Toast & Admin Functions
function showToast(msg, type = "success") {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-check' : 'fa-triangle-exclamation'}"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

function showAdminStatus(msg, isError = false) {
    const el = document.getElementById('admin-status');
    if (!el) return;
    if (!msg) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    el.innerHTML = msg;
    el.style.borderColor = isError ? '#dc2626' : 'var(--color-accent)';
}

async function saveDataToCloud() {
    showAdminStatus("Saving Content to Cloud...", false);
    try {
        await fetch(buildApiUrl("saveData"), { method: "POST", body: JSON.stringify(siteData) });
        localStorage.setItem(LOCAL_KEY_DATA, JSON.stringify(siteData));
        showAdminStatus("Content Saved Successfully!", false);
        showToast("Content synced to Cloud!", "success");
        renderAll();
    } catch (e) {
        showAdminStatus("Save Failed", true);
        showToast("Cloud sync failed", "error");
    }
}

async function saveThemeToCloud() {
    showAdminStatus("Saving Theme to Cloud...", false);
    try {
        await fetch(buildApiUrl("saveTheme"), { method: "POST", body: JSON.stringify(themeConfig) });
        localStorage.setItem(LOCAL_KEY_THEME, JSON.stringify(themeConfig));
        showAdminStatus("Theme Saved Successfully!", false);
        showToast("Theme synced to Cloud!", "success");
    } catch (e) {
        showAdminStatus("Theme Save Failed", true);
        showToast("Theme save failed", "error");
    }
}

function handleUpload(input, callback) {
    const file = input.files[0];
    if (!file) return;
    const span = input.nextElementSibling;
    if (span) span.textContent = "Uploading...";

    const reader = new FileReader();
    reader.onload = async () => {
        const base64 = reader.result.split(",")[1];
        try {
            const res = await fetch(buildApiUrl("uploadFile"), {
                method: "POST",
                body: JSON.stringify({ filename: file.name, mimeType: file.type, data: base64 })
            });
            const data = await res.json();
            if (data.success) {
                if (span) span.textContent = "Done";
                callback(data.url);
                showToast("File uploaded successfully!", "success");
            } else throw new Error();
        } catch (e) {
            if (span) span.textContent = "Error";
            showToast("Upload failed", "error");
        }
    };
    reader.readAsDataURL(file);
}

function renderAdminForms() {
    const p = siteData.profile || {};
    let html = `
        <div class="luxury-form-group">
            <label>Profile Photo</label>
            <input type="text" class="luxury-input" value="${p.photoUrl || ''}" onchange="siteData.profile.photoUrl=this.value">
            <div class="file-upload-group">
                <input type="file" onchange="handleUpload(this, u=>{siteData.profile.photoUrl=u; renderAll();})">
                <span class="upload-status"></span>
            </div>
        </div>
    `;

    for (let k in p) {
        if (k === 'photoUrl') continue;
        html += `<div class="luxury-form-group"><label>${k}</label>`;
        if (k.includes('bio') || k.includes('Desc')) {
            html += `<textarea class="luxury-input" style="min-height:90px;" onchange="siteData.profile['${k}']=this.value">${p[k] || ''}</textarea>`;
        } else {
            html += `<input type="text" class="luxury-input" value="${p[k] || ''}" onchange="siteData.profile['${k}']=this.value">`;
        }
        html += `</div>`;
    }
    const profilePane = document.getElementById('edit-profile');
    if (profilePane) profilePane.innerHTML = html;

    renderSkillsEditor();
    renderComplexList('edit-exp', siteData.experience || [], 'experience', ['role', 'company', 'date', 'location', 'desc', 'docUrl']);
    renderComplexList('edit-edu', siteData.education || [], 'education', ['degree', 'institution', 'startYear', 'endYear', 'location', 'details', 'docUrl']);
    renderProjectsEditor();
    renderComplexList('edit-research', siteData.research || [], 'research', ['title', 'authors', 'venue', 'year', 'status', 'paperUrl', 'certUrl']);
    renderComplexList('edit-docs', siteData.documents || [], 'documents', ['title', 'desc', 'url']);
    renderCustomSectionEditor();
    renderThemeEditor();
}

function renderSkillsEditor() {
    const el = document.getElementById('edit-skills');
    if (!el) return;
    const cats = siteData.skills || {};
    let html = `
        <div style="margin-bottom:18px; padding:14px; border:1px dashed var(--color-accent); border-radius:6px;">
            <h5 style="margin-bottom:8px;">Add New Category</h5>
            <div style="display:flex; gap:8px;">
                <input type="text" id="new-skill-cat" class="luxury-input" placeholder="Category Name" style="flex-grow:1;">
                <button class="btn btn-sm btn-luxury-primary" onclick="addSkillCategory()">Add</button>
            </div>
        </div>
    `;

    for (let cat in cats) {
        html += `
            <div style="margin-bottom:20px; border:1px solid var(--color-border); padding:14px; border-radius:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                    <h4 style="margin:0; text-transform:capitalize;">${cat}</h4>
                    <button class="delete-btn" onclick="deleteSkillCategory('${cat}')">Delete Category</button>
                </div>
        `;

        (cats[cat] || []).forEach((skill, idx) => {
            let name = typeof skill === 'string' ? skill : skill.name;
            let icon = typeof skill === 'object' ? skill.iconUrl || '' : '';
            html += `
                <div class="admin-item-card">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:4px;">
                        <button class="btn btn-sm btn-luxury-outline" onclick="moveSkill('${cat}', ${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>&uarr;</button>
                        <button class="btn btn-sm btn-luxury-outline" onclick="moveSkill('${cat}', ${idx}, 1)" ${idx === cats[cat].length - 1 ? 'disabled' : ''}>&darr;</button>
                        <button class="delete-btn" onclick="deleteSkill('${cat}', ${idx})">&times;</button>
                    </div>
                    <div class="luxury-form-group"><label>Name</label><input class="luxury-input" value="${name}" onchange="updateSkill('${cat}', ${idx}, 'name', this.value)"></div>
                    <div class="luxury-form-group"><label>Icon URL</label><input class="luxury-input" value="${icon}" onchange="updateSkill('${cat}', ${idx}, 'iconUrl', this.value)">
                        <div class="file-upload-group">
                            <input type="file" onchange="handleUpload(this, url => updateSkill('${cat}', ${idx}, 'iconUrl', url))">
                            <span class="upload-status"></span>
                        </div>
                    </div>
                </div>
            `;
        });
        html += `<button class="btn btn-sm btn-luxury-primary" onclick="addSkill('${cat}')">+ Add Skill to ${cat}</button></div>`;
    }
    el.innerHTML = html;
}

window.updateSkill = (cat, idx, key, val) => {
    let item = siteData.skills[cat][idx];
    if (typeof item === 'string') item = { name: item, iconUrl: '' };
    item[key] = val;
    siteData.skills[cat][idx] = item;
    renderAll();
};
window.addSkill = (cat) => { siteData.skills[cat].push({ name: "New Skill", iconUrl: "" }); renderAdminForms(); };
window.deleteSkill = (cat, idx) => { siteData.skills[cat].splice(idx, 1); renderAdminForms(); };
window.moveSkill = (cat, idx, dir) => {
    const arr = siteData.skills[cat];
    if (idx + dir < 0 || idx + dir >= arr.length) return;
    const temp = arr[idx];
    arr[idx] = arr[idx + dir];
    arr[idx + dir] = temp;
    renderAdminForms();
    renderAll();
};
window.addSkillCategory = () => {
    const name = document.getElementById('new-skill-cat').value.trim();
    if (name && !siteData.skills[name]) {
        siteData.skills[name] = [];
        renderAdminForms();
        renderAll();
    }
};
window.deleteSkillCategory = (cat) => {
    if (confirm(`Delete category '${cat}' and all its skills?`)) {
        delete siteData.skills[cat];
        renderAdminForms();
        renderAll();
    }
};

function renderProjectsEditor() {
    const el = document.getElementById('edit-projects');
    if (!el) return;
    const projs = siteData.projects || [];
    let html = projs.map((p, idx) => `
        <div class="admin-item-card">
            <div style="position:absolute; top:10px; right:10px; display:flex; gap:4px;">
                <button class="btn btn-sm btn-luxury-outline" onclick="moveItem('projects', ${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>&uarr;</button>
                <button class="btn btn-sm btn-luxury-outline" onclick="moveItem('projects', ${idx}, 1)" ${idx === projs.length - 1 ? 'disabled' : ''}>&darr;</button>
                <button class="delete-btn" onclick="deleteItem('projects', ${idx})">&times;</button>
            </div>
            <div class="luxury-form-group"><label>Title</label><input class="luxury-input" value="${p.title || ''}" onchange="siteData.projects[${idx}].title=this.value"></div>
            <div class="luxury-form-group"><label>Category (cloud / ai / mobile / general)</label><input class="luxury-input" value="${p.category || 'general'}" onchange="siteData.projects[${idx}].category=this.value"></div>
            <div class="luxury-form-group"><label>Description</label><textarea class="luxury-input" onchange="siteData.projects[${idx}].desc=this.value">${p.desc || ''}</textarea></div>
            <div class="luxury-form-group"><label>Tech Stack (Comma-separated)</label><input class="luxury-input" value="${(p.techStack || []).map(t => typeof t === 'string' ? t : t.name).join(', ')}" onchange="updateProjectTechSimple(${idx}, this.value)"></div>
            <div class="luxury-form-group"><label>GitHub URL</label><input class="luxury-input" value="${p.githubUrl || ''}" onchange="siteData.projects[${idx}].githubUrl=this.value"></div>
            <div class="luxury-form-group"><label>Live Demo URL</label><input class="luxury-input" value="${p.liveUrl || ''}" onchange="siteData.projects[${idx}].liveUrl=this.value"></div>
            <div class="luxury-form-group"><label>Doc URL</label><input class="luxury-input" value="${p.docUrl || ''}" onchange="siteData.projects[${idx}].docUrl=this.value"></div>
        </div>
    `).join('') + `<button class="btn btn-luxury-primary btn-sm" onclick="addItem('projects')">+ Add Project</button>`;
    el.innerHTML = html;
}
window.updateProjectTechSimple = (idx, str) => {
    siteData.projects[idx].techStack = str.split(',').map(s => s.trim());
    renderAll();
};

function renderCustomSectionEditor() {
    const el = document.getElementById('edit-custom');
    if (!el) return;
    if (!siteData.userSections) siteData.userSections = [];

    let html = siteData.userSections.map((sec, sIdx) => `
        <div class="admin-item-card" style="border:1px solid var(--color-accent);">
            <div style="position:absolute; top:10px; right:10px; display:flex; gap:4px;">
                <button class="btn btn-sm btn-luxury-outline" onclick="moveCustomSection(${sIdx}, -1)" ${sIdx === 0 ? 'disabled' : ''}>&uarr;</button>
                <button class="btn btn-sm btn-luxury-outline" onclick="moveCustomSection(${sIdx}, 1)" ${sIdx === siteData.userSections.length - 1 ? 'disabled' : ''}>&darr;</button>
                <button class="delete-btn" onclick="deleteCustomSection(${sIdx})">Delete</button>
            </div>
            <div class="luxury-form-group"><label>Section Title</label><input class="luxury-input" value="${sec.title}" onchange="siteData.userSections[${sIdx}].title=this.value"></div>

            <h5 style="margin:10px 0;color:var(--color-accent)">Items</h5>
            ${(sec.items || []).map((item, iIdx) => `
                <div class="admin-item-card">
                    <div style="position:absolute; top:10px; right:10px; display:flex; gap:4px;">
                        <button class="delete-btn" onclick="deleteCustomItem(${sIdx}, ${iIdx})">&times;</button>
                    </div>
                    <div class="luxury-form-group"><label>Title</label><input class="luxury-input" value="${item.title}" onchange="siteData.userSections[${sIdx}].items[${iIdx}].title=this.value"></div>
                    <div class="luxury-form-group"><label>Subtitle</label><input class="luxury-input" value="${item.subtitle || ''}" onchange="siteData.userSections[${sIdx}].items[${iIdx}].subtitle=this.value"></div>
                    <div class="luxury-form-group"><label>Date</label><input class="luxury-input" value="${item.date || ''}" onchange="siteData.userSections[${sIdx}].items[${iIdx}].date=this.value"></div>
                    <div class="luxury-form-group"><label>Description</label><textarea class="luxury-input" onchange="siteData.userSections[${sIdx}].items[${iIdx}].description=this.value">${item.description || ''}</textarea></div>
                    <div class="luxury-form-group"><label>Doc URL</label><input class="luxury-input" value="${item.docUrl || ''}" onchange="siteData.userSections[${sIdx}].items[${iIdx}].docUrl=this.value"></div>
                </div>
            `).join('')}
            <button class="btn btn-sm btn-luxury-outline" onclick="addCustomItem(${sIdx})">+ Add Item</button>
        </div>
    `).join('');

    html += `<button class="btn btn-luxury-primary btn-sm" onclick="addCustomSection()">+ Add New Section</button>`;
    el.innerHTML = html;
}

window.addCustomSection = () => { siteData.userSections.push({ title: "New Section", icon: "fa-solid fa-star", items: [] }); renderAdminForms(); };
window.deleteCustomSection = (idx) => { if (confirm("Delete section?")) { siteData.userSections.splice(idx, 1); renderAdminForms(); } };
window.addCustomItem = (sIdx) => { siteData.userSections[sIdx].items.push({ title: "New Item", subtitle: "", description: "" }); renderAdminForms(); };
window.deleteCustomItem = (sIdx, iIdx) => { siteData.userSections[sIdx].items.splice(iIdx, 1); renderAdminForms(); };
window.moveCustomSection = (idx, dir) => {
    const arr = siteData.userSections;
    if (idx + dir < 0 || idx + dir >= arr.length) return;
    const temp = arr[idx];
    arr[idx] = arr[idx + dir];
    arr[idx + dir] = temp;
    renderAdminForms();
    renderAll();
};

function renderThemeEditor() {
    const el = document.getElementById('edit-theme');
    if (!el) return;
    const m = themeConfig.activeMode || 'dark';
    const t = themeConfig[m] || DEFAULT_THEME_CONFIG[m];

    el.innerHTML = `
        <div style="margin-bottom:16px; background:var(--color-surface); padding:14px; border-radius:6px; border:1px solid var(--color-border);">
            <label style="display:block;margin-bottom:6px;font-family:var(--font-mono);font-size:0.78rem;color:var(--color-text-muted);">Theme Mode</label>
            <select class="luxury-input" onchange="themeConfig.activeMode=this.value; applyTheme(themeConfig); renderAdminForms();">
                <option value="dark" ${m === 'dark' ? 'selected' : ''}>Dark Mode (Pure Jet Black)</option>
                <option value="light" ${m === 'light' ? 'selected' : ''}>Light Mode (Warm Alabaster)</option>
            </select>
        </div>

        <h4 style="margin-bottom:12px;border-bottom:1px solid var(--color-border);padding-bottom:6px;">Palette Colors</h4>
        <div class="config-group">
            <div class="config-item"><label>Champagne / Bronze Gold Accent</label><input type="color" value="${t.accentColor || t.primaryColor}" onchange="themeConfig['${m}'].accentColor=this.value; themeConfig['${m}'].primaryColor=this.value; applyTheme(themeConfig);"></div>
            <div class="config-item"><label>Background</label><input type="color" value="${t.backgroundColor}" onchange="themeConfig['${m}'].backgroundColor=this.value; applyTheme(themeConfig);"></div>
            <div class="config-item"><label>Card Surface</label><input type="color" value="${t.surfaceColor}" onchange="themeConfig['${m}'].surfaceColor=this.value; applyTheme(themeConfig);"></div>
            <div class="config-item"><label>Text</label><input type="color" value="${t.textColor}" onchange="themeConfig['${m}'].textColor=this.value; applyTheme(themeConfig);"></div>
        </div>
    `;
}

function renderComplexList(elId, arr, arrName, fields) {
    const el = document.getElementById(elId);
    if (!el) return;
    let html = arr.map((item, idx) => `
        <div class="admin-item-card">
            <div style="position:absolute; top:10px; right:10px; display:flex; gap:4px;">
                <button class="btn btn-sm btn-luxury-outline" onclick="moveItem('${arrName}', ${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>&uarr;</button>
                <button class="btn btn-sm btn-luxury-outline" onclick="moveItem('${arrName}', ${idx}, 1)" ${idx === arr.length - 1 ? 'disabled' : ''}>&darr;</button>
                <button class="delete-btn" onclick="deleteItem('${arrName}', ${idx})">&times;</button>
            </div>
            ${fields.map(k => `
                <div class="luxury-form-group"><label>${k}</label>
                    ${k.toLowerCase().includes('url') ?
                        `<input class="luxury-input" value="${item[k] || ''}" onchange="siteData.${arrName}[${idx}].${k}=this.value"><div class="file-upload-group"><input type="file" onchange="handleUpload(this, u=>{siteData.${arrName}[${idx}].${k}=u;renderAdminForms();})"><span class="upload-status"></span></div>` :
                        (k === 'desc' || k === 'details' ? `<textarea class="luxury-input" onchange="siteData.${arrName}[${idx}].${k}=this.value">${item[k] || ''}</textarea>` : `<input class="luxury-input" value="${item[k] || ''}" onchange="siteData.${arrName}[${idx}].${k}=this.value">`)
                    }
                </div>
            `).join('')}
        </div>
    `).join('') + `<button class="btn btn-luxury-primary btn-sm" onclick="addItem('${arrName}')">+ Add Item</button>`;
    el.innerHTML = html;
}

window.deleteItem = (arrName, idx) => { siteData[arrName].splice(idx, 1); renderAdminForms(); renderAll(); };
window.addItem = (arrName) => { siteData[arrName].push({}); renderAdminForms(); };
window.moveItem = (arrName, idx, dir) => {
    const arr = siteData[arrName];
    if (idx + dir < 0 || idx + dir >= arr.length) return;
    const temp = arr[idx];
    arr[idx] = arr[idx + dir];
    arr[idx + dir] = temp;
    renderAdminForms();
    renderAll();
};

function initAnimations() {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll(
        '.section, .timeline-entry, .project-item-card, .skill-box, .research-entry-card, .doc-entry-card, .luxury-contact-card'
    );

    revealElements.forEach(el => {
        if (!el.classList.contains('reveal-on-scroll')) {
            el.classList.add('reveal-on-scroll');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // Card Mouse Spotlight Aura
    const cards = document.querySelectorAll(
        '.project-item-card, .timeline-entry, .skill-box, .research-entry-card, .doc-entry-card, .about-details-card, .portrait-card'
    );

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Start Immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}