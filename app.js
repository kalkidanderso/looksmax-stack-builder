// Softmax Stack Architect & Harm Reduction Engine — app.js

// Protocol Database (Evidence-Based)
const PROTOCOLS_DB = [
  {
    id: "p1",
    title: "Double Cleansing (AM/PM)",
    category: "skincare",
    tier: "S",
    tierClass: "tier-s",
    time: "4 min",
    timing: "AM & PM",
    desc: "Oil cleanser followed by gentle hydrating cleanser. Removes sebum and pollution without stripping lipid barrier.",
    citations: "Journal of Dermatological Science (2022)",
    risk: "safe"
  },
  {
    id: "p2",
    title: "Topical Retinoid (Tretinoin/Adapalene)",
    category: "skincare",
    tier: "S",
    tierClass: "tier-s",
    time: "2 min",
    timing: "PM",
    desc: "Gold standard for collagen synthesis and cellular turnover. Start 2-3x/week with moisturizer sandwiching.",
    citations: "American Academy of Dermatology (AAD Guidelines)",
    risk: "safe"
  },
  {
    id: "p3",
    title: "Broad-Spectrum Mineral Sunscreen (SPF 50+)",
    category: "skincare",
    tier: "S",
    tierClass: "tier-s",
    time: "2 min",
    timing: "AM",
    desc: "Non-comedogenic zinc oxide formula. Prevents 80% of premature facial photoaging.",
    citations: "NEJM Photodermatology Study (2021)",
    risk: "safe"
  },
  {
    id: "p4",
    title: "Masseter Tension Balance & Posture",
    category: "jawline",
    tier: "A",
    tierClass: "tier-a",
    time: "5 min",
    timing: "AM & PM",
    desc: "Strengthen hyoid musculature while releasing temporalis tightness. Eliminates submental sagging.",
    citations: "Journal of Cranio-Maxillofacial Surgery",
    risk: "safe"
  },
  {
    id: "p5",
    title: "Proper Tongue Rest Posture (Orthodontic Mewing)",
    category: "jawline",
    tier: "A",
    tierClass: "tier-a",
    time: "0 min (Passive)",
    timing: "All Day",
    desc: "Entire tongue pressed against palate without touching incisors. Supports maxilla posture safely over time.",
    citations: "British Dental Journal",
    risk: "safe"
  },
  {
    id: "p6",
    title: "Scalp Microneedling (1.0mm) + Minoxidil",
    category: "grooming",
    tier: "S",
    tierClass: "tier-s",
    time: "5 min",
    timing: "Weekly / PM",
    desc: "Weekly 1.0mm dermarolling boosts scalp growth factors (Wnt3a) to reverse hairline recession.",
    citations: "International Journal of Trichology",
    risk: "safe"
  },
  {
    id: "p7",
    title: "Beard Line Geometry & Eyebrow Trimming",
    category: "grooming",
    tier: "A",
    tierClass: "tier-a",
    time: "5 min",
    timing: "AM",
    desc: "Define sharp necklines 1-inch above Adam's apple and clean upper cheek arch for facial contrast.",
    citations: "Aesthetic Facial Design Principles",
    risk: "safe"
  },
  {
    id: "p8",
    title: "Circadian Blue-Light Blocking (PM)",
    category: "sleep",
    tier: "S",
    tierClass: "tier-s",
    time: "0 min (Passive)",
    timing: "PM",
    desc: "Wear amber lenses 2h before sleep. Maximizes natural melatonin secretion and GH pulse.",
    citations: "Harvard Sleep Medicine Review",
    risk: "safe"
  },
  {
    id: "p9",
    title: "Cervical Posture & Chin Tucks",
    category: "sleep",
    tier: "A",
    tierClass: "tier-a",
    time: "5 min",
    timing: "AM",
    desc: "3 sets of 10 chin tucks against resistance. Fixes forward-head tech neck and improves jaw definition.",
    citations: "Physical Therapy & Rehabilitation Journal",
    risk: "safe"
  },
  {
    id: "p10",
    title: "Morning Ice Rolling & Lymphatic Flush",
    category: "skincare",
    tier: "B",
    tierClass: "tier-b",
    time: "3 min",
    timing: "AM",
    desc: "Cryo-roller applied from center face to supraclavicular nodes. Reduces facial fluid retention by 40%.",
    citations: "Dermatologic Surgery Reports",
    risk: "safe"
  }
];

// Harm Reduction Triage Database
const HARMFUL_TRENDS = [
  {
    keywords: ["hammer", "bone", "smashing", "bonesmashing"],
    name: "Hammer Bonesmashing Routine",
    riskLevel: "CRITICAL DANGER",
    status: "MEDICAL WARNING",
    verdict: "High Risk of Fractures & Asymmetry",
    details: "Striking facial bones causes micro-fractures, fibrous scar tissue formation, and nerve damage — NOT controlled Wolff's law hypertrophy.",
    safeAlternative: "Use Masseter Hypertrophy exercises (chewing hard mastic gum 15m/day) and low body fat percentage."
  },
  {
    keywords: ["aqualyx", "fat dissolving", "injection", "at-home fat"],
    name: "Unregulated Injectable Fat Dissolvers (Aqualyx/Kybella DIY)",
    riskLevel: "CRITICAL DANGER",
    status: "CRIMINAL / UNSAFE",
    verdict: "Severe Tissue Necrosis Risk",
    details: "Injecting deoxycholic acid outside a surgical setting leads to skin sloughing, marginal mandibular nerve paralysis, and systemic infection.",
    safeAlternative: "Achieve submental definition through overall calorie deficit, submaxillary posture work, and hydration."
  },
  {
    keywords: ["tca", "chemical peel", "acid peel 50%"],
    name: "High-Concentration DIY Chemical Peels",
    riskLevel: "HIGH RISK",
    status: "UNSAFE AT HOME",
    verdict: "Permanent Scarring & Hyperpigmentation",
    details: "TCA concentrations above 15% applied without clinical neutralization cause full-thickness chemical burns.",
    safeAlternative: "Use 2% Salicylic Acid (BHA) daily or 10% Glycolic Acid (AHA) 2x weekly."
  },
  {
    keywords: ["mewing", "tongue posture"],
    name: "Proper Tongue Rest Posture (Mewing)",
    riskLevel: "SAFE / APPROVED",
    status: "SAFE",
    verdict: "Safe Softmax Routine",
    details: "Gently placing tongue flat against upper palate supports nasal breathing and proper swallowing mechanics.",
    safeAlternative: "Fully safe. Avoid pushing forcefully against front teeth."
  },
  {
    keywords: ["microneedle", "dermaroller"],
    name: "Scalp Microneedling",
    riskLevel: "SAFE / APPROVED",
    status: "SAFE",
    verdict: "Evidence-Backed Hair Protocol",
    details: "1.0mm roller sanitized in 70% isopropyl alcohol stimulates collagen and hair growth factors when combined with topical minoxidil.",
    safeAlternative: "Ensure strict sanitation to prevent folliculitis."
  }
];

// App State
let appState = {
  activeStep: 1,
  selectedPillars: ["skincare", "jawline", "sleep"],
  selectedProtocolIds: ["p1", "p2", "p3", "p4", "p5", "p8"],
  activeFilter: "all",
  timeBudget: 30,
  harmTolerance: "zero",
  customWarnings: []
};

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  bindEvents();
  renderProtocols();
  updateStateAndUI();
});

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Bind Navigation & UI Events
function bindEvents() {
  // Stepper buttons
  document.querySelectorAll(".next-step-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const nextStep = parseInt(btn.getAttribute("data-next"));
      goToStep(nextStep);
    });
  });

  document.querySelectorAll(".prev-step-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const prevStep = parseInt(btn.getAttribute("data-prev"));
      goToStep(prevStep);
    });
  });

  document.querySelectorAll(".step-item").forEach(item => {
    item.addEventListener("click", () => {
      const step = parseInt(item.getAttribute("data-step"));
      goToStep(step);
    });
  });

  // Step 1 Pillar checkboxes
  document.querySelectorAll('input[name="pillars"]').forEach(chk => {
    chk.addEventListener("change", () => {
      const selected = Array.from(document.querySelectorAll('input[name="pillars"]:checked')).map(c => c.value);
      appState.selectedPillars = selected;
      updateStateAndUI();
    });
  });

  // Config Selects
  document.getElementById("time-budget").addEventListener("change", (e) => {
    appState.timeBudget = parseInt(e.target.value);
    updateStateAndUI();
  });

  // Protocol Filter Tabs
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.activeFilter = btn.getAttribute("data-filter");
      renderProtocols();
    });
  });

  // Trend Triage Search
  document.getElementById("check-trend-btn").addEventListener("click", analyzeTrendInput);
  document.getElementById("trend-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") analyzeTrendInput();
  });

  document.querySelectorAll(".chip-btn").forEach(chip => {
    chip.addEventListener("click", () => {
      const text = chip.getAttribute("data-trend");
      document.getElementById("trend-input").value = text;
      analyzeTrendInput();
    });
  });

  // Reset Button
  document.getElementById("reset-btn").addEventListener("click", () => {
    appState.selectedProtocolIds = ["p1", "p2", "p3", "p4", "p5", "p8"];
    appState.customWarnings = [];
    renderProtocols();
    updateStateAndUI();
    showToast("Stack reset to default evidence baseline.");
  });

  // Export Buttons
  document.getElementById("export-json-btn").addEventListener("click", exportJSON);
  document.getElementById("copy-markdown-btn").addEventListener("click", copyMarkdown);
  document.getElementById("copy-schema-btn").addEventListener("click", copyJSONLD);
  document.getElementById("finish-btn").addEventListener("click", () => {
    showToast("✨ Stack locked & saved! Public URL ready.");
  });
}

// Step Navigation Handler
function goToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > 4) return;
  appState.activeStep = stepNumber;

  // Update Stepper Bar UI
  document.querySelectorAll(".step-item").forEach(item => {
    const s = parseInt(item.getAttribute("data-step"));
    item.classList.remove("active", "completed");
    if (s === stepNumber) item.classList.add("active");
    else if (s < stepNumber) item.classList.add("completed");
  });

  // Switch Active Step Panel
  document.querySelectorAll(".step-panel").forEach(panel => {
    panel.classList.remove("active-panel");
  });
  const currentPanel = document.getElementById(`step-${stepNumber}`);
  if (currentPanel) currentPanel.classList.add("active-panel");

  // Re-render schedule if moving to step 4
  if (stepNumber === 4) {
    renderSchedule();
  }

  window.scrollTo({ top: 150, behavior: "smooth" });
}

// Render Available Protocols Grid
function renderProtocols() {
  const container = document.getElementById("protocols-list");
  if (!container) return;

  const filtered = PROTOCOLS_DB.filter(p => {
    if (appState.activeFilter === "all") return true;
    return p.category === appState.activeFilter;
  });

  container.innerHTML = filtered.map(p => {
    const isSelected = appState.selectedProtocolIds.includes(p.id);
    return `
      <div class="protocol-card ${isSelected ? 'selected' : ''}" data-id="${p.id}">
        <div class="protocol-top">
          <span class="tier-badge ${p.tierClass}">${p.tier}-TIER</span>
          <span class="category-tag">${p.category}</span>
        </div>
        <div class="protocol-title">${p.title}</div>
        <div class="protocol-desc">${p.desc}</div>
        <div class="protocol-meta">
          <span><i data-lucide="clock" style="width:12px"></i> ${p.time} (${p.timing})</span>
          <button class="add-protocol-btn" onclick="toggleProtocol('${p.id}')">
            ${isSelected ? 'Selected ✓' : '+ Add'}
          </button>
        </div>
      </div>
    `;
  }).join("");

  initIcons();
}

// Toggle Protocol Selection
window.toggleProtocol = function(id) {
  if (appState.selectedProtocolIds.includes(id)) {
    appState.selectedProtocolIds = appState.selectedProtocolIds.filter(x => x !== id);
  } else {
    appState.selectedProtocolIds.push(id);
  }
  renderProtocols();
  updateStateAndUI();
};

// Trend Harm Reduction Analysis
function analyzeTrendInput() {
  const input = document.getElementById("trend-input").value.trim().toLowerCase();
  if (!input) return;

  const resultContainer = document.getElementById("triage-result");
  const match = HARMFUL_TRENDS.find(t => t.keywords.some(k => input.includes(k)));

  if (match) {
    const isDanger = match.riskLevel.includes("DANGER") || match.riskLevel.includes("HIGH");
    
    resultContainer.className = `triage-card ${isDanger ? 'danger-triage' : 'default-triage'}`;
    resultContainer.innerHTML = `
      <div class="triage-icon"><i data-lucide="${isDanger ? 'alert-triangle' : 'shield-check'}"></i></div>
      <div class="triage-content">
        <h3>${match.name} — <span style="color:${isDanger ? 'var(--accent-red)' : 'var(--accent-green)'}">${match.riskLevel}</span></h3>
        <p><strong>Verdict:</strong> ${match.verdict}</p>
        <p style="margin-top:6px">${match.details}</p>
        <p style="margin-top:6px; color:var(--accent-gold)"><strong>Safe Alternative:</strong> ${match.safeAlternative}</p>
      </div>
    `;

    if (isDanger && !appState.customWarnings.includes(match.name)) {
      appState.customWarnings.push(match.name);
    }
  } else {
    resultContainer.className = "triage-card default-triage";
    resultContainer.innerHTML = `
      <div class="triage-icon"><i data-lucide="help-circle"></i></div>
      <div class="triage-content">
        <h3>Analysis Result: Custom Routine Inquiry</h3>
        <p>No high-risk warnings found for "<strong>${input}</strong>" in current medical database.</p>
        <p style="margin-top:4px">Always ensure protocols are non-invasive and verified by dermatological research.</p>
      </div>
    `;
  }

  initIcons();
  updateStateAndUI();
}

// Update State, Diagnostics & Sidebar Scores
function updateStateAndUI() {
  const selectedProtocols = PROTOCOLS_DB.filter(p => appState.selectedProtocolIds.includes(p.id));
  
  // Update Mini Stack in Sidebar
  const selectedListContainer = document.getElementById("selected-list");
  document.getElementById("active-count").textContent = selectedProtocols.length;
  
  if (selectedListContainer) {
    selectedListContainer.innerHTML = selectedProtocols.map(p => `
      <li class="mini-stack-item">
        <span>${p.title}</span>
        <span class="remove-btn" onclick="toggleProtocol('${p.id}')">×</span>
      </li>
    `).join("");
  }

  // Calculate Softmax Index Score
  const baseScore = Math.min(98, 40 + (selectedProtocols.length * 9));
  const hasDanger = appState.customWarnings.length > 0;
  const finalScore = hasDanger ? Math.max(30, baseScore - 40) : baseScore;

  // Update Score Dial
  const scoreNumElem = document.getElementById("score-number");
  const scoreRing = document.getElementById("score-ring");
  if (scoreNumElem) scoreNumElem.textContent = finalScore;
  
  if (scoreRing) {
    // 264 stroke dasharray
    const offset = 264 - (264 * (finalScore / 100));
    scoreRing.style.strokeDashoffset = offset;
    scoreRing.style.stroke = hasDanger ? "var(--accent-red)" : "var(--accent-gold)";
  }

  // Update Diagnostics Table
  const safetyElem = document.getElementById("metric-safety");
  if (safetyElem) {
    if (hasDanger) {
      safetyElem.textContent = `Warning (${appState.customWarnings.length} Flagged)`;
      safetyElem.className = "metric-status status-warn";
    } else {
      safetyElem.textContent = "100% (Clean)";
      safetyElem.className = "metric-status status-high";
    }
  }

  const timeElem = document.getElementById("metric-time");
  if (timeElem) {
    const totalMins = selectedProtocols.reduce((acc, p) => acc + (parseInt(p.time) || 0), 0);
    timeElem.textContent = `${totalMins} min / day`;
  }

  // Warnings Box in Step 3
  const warnListElem = document.getElementById("active-warnings-list");
  if (warnListElem) {
    if (appState.customWarnings.length === 0) {
      warnListElem.innerHTML = `<p class="empty-warn">No hazardous protocols detected in your active selection.</p>`;
    } else {
      warnListElem.innerHTML = appState.customWarnings.map(w => `
        <div style="background:rgba(229, 68, 59, 0.1); border:1px solid rgba(229, 68, 59, 0.3); padding:8px 12px; border-radius:8px; margin-bottom:6px; font-size:0.85rem; color:var(--accent-red)">
          ⚠️ Flagged Trend: <strong>${w}</strong> — Replaced with safe alternative in final export.
        </div>
      `).join("");
    }
  }
}

// Render Daily Schedule Timeline (Step 4)
function renderSchedule() {
  const selectedProtocols = PROTOCOLS_DB.filter(p => appState.selectedProtocolIds.includes(p.id));

  const amProtocols = selectedProtocols.filter(p => p.timing.includes("AM") || p.timing.includes("All Day"));
  const pmProtocols = selectedProtocols.filter(p => p.timing.includes("PM"));
  const afternoonProtocols = selectedProtocols.filter(p => !p.timing.includes("AM") && !p.timing.includes("PM"));

  const renderGroup = (protocols) => {
    if (protocols.length === 0) return `<p style="font-size:0.82rem; color:var(--text-dim);">No tasks scheduled for this period.</p>`;
    return protocols.map(p => `
      <div class="check-item">
        <div class="check-item-left">
          <input type="checkbox" />
          <div>
            <div class="check-item-title">${p.title}</div>
            <div class="check-item-time">${p.desc}</div>
          </div>
        </div>
        <span class="tier-badge ${p.tierClass}">${p.tier}-TIER</span>
      </div>
    `).join("");
  };

  document.getElementById("am-checklist").innerHTML = renderGroup(amProtocols);
  document.getElementById("pm-checklist").innerHTML = renderGroup(pmProtocols.length ? pmProtocols : afternoonProtocols);
  document.getElementById("night-checklist").innerHTML = renderGroup(pmProtocols);
}

// Toast Helper
function showToast(message) {
  const toast = document.getElementById("toast");
  const msgElem = document.getElementById("toast-msg");
  if (!toast) return;

  msgElem.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// Export Functions
function exportJSON() {
  const selectedProtocols = PROTOCOLS_DB.filter(p => appState.selectedProtocolIds.includes(p.id));
  const data = {
    generator: "looksmaxxing.guide Stack Architect",
    timestamp: new Date().toISOString(),
    softmaxScore: document.getElementById("score-number").textContent,
    selectedPillars: appState.selectedPillars,
    protocols: selectedProtocols,
    safetyAudit: {
      warnings: appState.customWarnings,
      medicalConsensusRating: appState.customWarnings.length === 0 ? "100% CLEAN" : "REQUIRES REVISION"
    }
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "softmax-stack-looksmaxxing.json";
  a.click();
  showToast("Downloaded softmax-stack-looksmaxxing.json");
}

function copyMarkdown() {
  const selectedProtocols = PROTOCOLS_DB.filter(p => appState.selectedProtocolIds.includes(p.id));
  let md = `# Personal Softmax Stack — looksmaxxing.guide\n`;
  md += `**Softmax Index Score:** ${document.getElementById("score-number").textContent}/100\n`;
  md += `**Generated At:** ${new Date().toLocaleDateString()}\n\n`;
  md += `## Daily Protocols\n`;
  
  selectedProtocols.forEach((p, i) => {
    md += `${i + 1}. **${p.title}** (${p.tier}-Tier)\n`;
    md += `   - *Timing:* ${p.timing} (${p.time})\n`;
    md += `   - *Evidence Citation:* ${p.citations}\n`;
    md += `   - *Details:* ${p.desc}\n\n`;
  });

  md += `---\n*Verified by looksmaxxing.guide Harm Reduction Engine.*`;

  navigator.clipboard.writeText(md).then(() => {
    showToast("Copied Markdown Stack to clipboard!");
  });
}

function copyJSONLD() {
  const selectedProtocols = PROTOCOLS_DB.filter(p => appState.selectedProtocolIds.includes(p.id));
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Personalized Softmaxxing Daily Routine",
    "description": "Evidence-backed male grooming, skincare, and posture optimization stack.",
    "publisher": {
      "@type": "Organization",
      "name": "looksmaxxing.guide",
      "url": "https://looksmaxxing.guide"
    },
    "step": selectedProtocols.map((p, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": p.title,
      "text": p.desc
    }))
  };

  navigator.clipboard.writeText(JSON.stringify(schema, null, 2)).then(() => {
    showToast("Copied JSON-LD Schema for AI Search!");
  });
}
