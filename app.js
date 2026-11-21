(function () {
      /* ======================================================================
         1. SACRED CHANT & TARGET CATALOG
         ====================================================================== */
      const DIVYA_DATA = {
        naams: [
          { id: "ram", title: "RAM", subtitle: "श्री राम जय राम जय जय राम" },
          { id: "hari", title: "HARI", subtitle: "हरि बोल • ॐ नमो भगवते वासुदेवाय" },
          { id: "shiva", title: "SHIVA", subtitle: "ॐ नमः शिवाय • हर हर महादेव" },
          { id: "govind", title: "GOVIND", subtitle: "श्री कृष्ण गोविन्द हरे मुरारे" },
          { id: "ishwar", title: "ISHWAR", subtitle: "ईश्वर सत्य है • ॐ तत् सत्" },
          { id: "radha", title: "RADHA", subtitle: "श्री राधे राधे • राधा वल्लभ श्री हरिवंश" },
          { id: "krishna", title: "KRISHNA", subtitle: "हरे कृष्ण हरे राम • कृष्णाय वासुदेवाय" },
          { id: "durga", title: "DURGA", subtitle: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे" }
        ],
        mantras: [
          {
            id: "gayatri",
            title: "GAYATRI MANTRA",
            subtitle: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्"
          },
          {
            id: "mahamrityunjaya",
            title: "MAHAMRITYUNJAYA",
            subtitle: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्"
          },
          {
            id: "hare_krishna",
            title: "HARE KRISHNA MAHAMANTRA",
            subtitle: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे • हरे राम हरे राम राम राम हरे हरे"
          },
          {
            id: "panchakshari",
            title: "OM NAMAH SHIVAYA",
            subtitle: "ॐ नमः शिवाय शान्ताय कारणत्रयहेतवे"
          },
          {
            id: "ganesh",
            title: "GANESH MANTRA",
            subtitle: "ॐ गं गणपतये नमः • वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ"
          }
        ],
        chalisas: [
          {
            id: "hanuman_chalisa",
            title: "HANUMAN CHALISA",
            subtitle: "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि",
            verses: [
              "दोहा: श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि । बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥",
              "बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार । बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥",
              "चौपाई 1: जय हनुमान ज्ञान गुन सागर । जय कपीस तिहुँ लोक उजागर ॥",
              "चौपाई 2: राम दूत अतुलित बल धामा । अञ्जनि-पुत्र पवनसुत नामा ॥",
              "चौपाई 3: महाबीर बिक्रम बजरङ्गी । कुमति निवार सुमति के सङ्गी ॥",
              "चौपाई 4: कञ्चन बरन बिराज सुबेसा । कानन कुण्डल कुञ्चित केसा ॥",
              "चौपाई 5: हाथ बज्र औ ध्वजा बिराजै । काँधे मूँज जनेऊ साजै ॥",
              "चौपाई 6: सङ्कर सुवन केसरीनन्दन । तेज प्रताप महा जग बन्दन ॥",
              "चौपाई 7: बिद्यावान गुनी अति चातुर । राम काज करिबे को आतुर ॥",
              "चौपाई 8: प्रभु चरित्र सुनिबे को रसिया । राम लखन सीता मन बसिया ॥",
              "चौपाई 9: सूक्ष्म रूप धरि सियहिं दिखावा । बिकट रूप धरि लङ्क जरावा ॥",
              "चौपाई 10: भीम रूप धरि असुर सँहारे । रामचन्द्र के काज सँवारे ॥",
              "चौपाई 11: लाय सजीवन लखन जियाये । श्रीरघुबीर हरषि उर लाये ॥",
              "चौपाई 12: रघुपति कीन्ही बहुत बड़ाई । तुम मम प्रिय भरतहि सम भाई ॥",
              "चौपाई 13: सहस बदन तुम्हरो जस गावैं । अस कहि श्रीपति कण्ठ लगावैं ॥",
              "चौपाई 14: सनकादिक ब्रह्मादि मुनीसा । नारद सारद सहित अहीसा ॥",
              "चौपाई 15: जम कुबेर दिगपाल जहाँ ते । कबि कोबिद कहि सके कहाँ ते ॥",
              "चौपाई 16: तुम उपकार सुग्रीवहिं कीन्हा । राम मिलाय राज पद दीन्हा ॥",
              "चौपाई 17: तुम्हरो मन्त्र बिभीषन माना । लङ्केस्वर भए सब जग जाना ॥",
              "चौपाई 18: जुग सहस्र जोजन पर भानू । लील्यो ताहि मधुर फल जानू ॥",
              "चौपाई 19: प्रभु मुद्रिका मेलि मुख माहीं । जलधि लाँघि गये अचरज नाहीं ॥",
              "चौपाई 20: दुर्गम काज जगत के जेते । सुगम अनुग्रह तुम्हरे तेते ॥",
              "चौपाई 21: राम दुआरे तुम रखवारे । होत न आज्ञा बिनु पैसारे ॥",
              "चौपाई 22: सब सुख लहै तुम्हारी सरना । तुम रच्छक काहू को डर ना ॥",
              "चौपाई 23: आपन तेज सम्हारो आपै । तीनों लोक हाँक तें काँपै ॥",
              "चौपाई 24: भूत पिसाच निकट नहिं आवै । महाबीर जब नाम सुनावै ॥",
              "चौपाई 25: नासै रोग हरै सब पीरा । जपत निरन्तर हनुमत बीरा ॥",
              "चौपाई 26: सङ्कट तें हनुमान छुड़ावै । मन क्रम बचन ध्यान जो लावै ॥",
              "चौपाई 27: सब पर राम तपस्वी राजा । तिन के काज सकल तुम साजा ॥",
              "चौपाई 28: और मनोरथ जो कोई लावै । सोइ अमित जीवन फल पावै ॥",
              "चौपाई 29: चारों जुग परताप तुम्हारा । है परसिद्ध जगत उजियारा ॥",
              "चौपाई 30: साधु-सन्त के तुम रखवारे । असुर निकन्दन राम दुलारे ॥",
              "चौपाई 31: अष्ट सिद्धि नौ निधि के दाता । अस बर दीन जानकी माता ॥",
              "चौपाई 32: राम रसायन तुम्हरे पासा । सदा रहो रघुपति के दासा ॥",
              "चौपाई 33: तुम्हरे भजन राम को पावै । जनम-जनम के दुख बिसरावै ॥",
              "चौपाई 34: अन्तकाल रघुबर पुर जाई । जहाँ जन्म हरि-भक्त कहाई ॥",
              "चौपाई 35: और देवता चित्त न धरई । हनुमत सेइ सर्ब सुख करई ॥",
              "चौपाई 36: सङ्कट कटै मिटै सब पीरा । जो सुमिरै हनुमत बलबीरा ॥",
              "चौपाई 37: जै जै जै हनुमान गोसाईं । कृपा करहु गुरुदेव की नाईं ॥",
              "चौपाई 38: जो सत बार पाठ कर कोई । छूटहि बन्दि महा सुख होई ॥",
              "चौपाई 39: जो यह पढ़ै हनुमान चालीसा । होय सिद्धि साखी गौरीसा ॥",
              "चौपाई 40: तुलसीदास सदा हरि चेरा । कीजै नाथ हृदय मँह डेरा ॥",
              "दोहा: पवनतनय सङ्कट हरन मङ्गल मूरति रूप । राम लखन सीता सहित हृदय बसहु सुर भूप ॥"
            ]
          },
          {
            id: "shiv_chalisa",
            title: "SHIV CHALISA",
            subtitle: "जय गणेश गिरिजा सुवन मङ्गल मूल सुजान",
            verses: [
              "दोहा: जय गणेश गिरिजा सुवन मङ्गल मूल सुजान । कहत अयोध्यादास तुम देहु अभय वरदान ॥",
              "जय गिरिजा पति दीन दयाला । सदा करत सन्तन प्रतिपाला ॥",
              "भाल चन्द्रमा सोहत नीके । कानन कुण्डल नागफनी के ॥",
              "अङ्ग गौर शिर गङ्ग बहाये । मुण्डमाल तन क्षार लगाए ॥",
              "वस्त्र खाल बाघम्बर सोहे । छवि को देखि नाग मन मोहे ॥",
              "ॐ नमः शिवाय • हर हर महादेव शम्भो काशी विश्वनाथ गङ्गे ॥"
            ]
          },
          {
            id: "durga_chalisa",
            title: "DURGA CHALISA",
            subtitle: "नमो नमो दुर्गे सुख करनी नमो नमो दुर्गे दुःख हरनी",
            verses: [
              "नमो नमो दुर्गे सुख करनी । नमो नमो दुर्गे दुःख हरनी ॥",
              "निरङ्कार है ज्योति तुम्हारी । तिहूँ लोक फैली उजियारी ॥",
              "शशि ललाट मुख महाविशाला । नेत्र लाल भृकुटि विकराला ॥",
              "रूप मातु को अधिक सुहावे । दरश करत जन अति सुख पावे ॥",
              "जय अम्बे गौरी मैया जय श्यामा गौरी ॥"
            ]
          }
        ],
        targetPresets: [3, 5, 7, 8, 9, 11, 13, 108, 1008]
      };

      /* ======================================================================
         2. SYNTHESIZED WEB AUDIO ENGINE (BEAD CLICKS & SUMERU TEMPLE BELL)
         ====================================================================== */
      class SacredAudioEngine {
        constructor() {
          this.ctx = null;
          this.enabled = true;
        }

        ensureContext() {
          if (!this.enabled) return null;
          if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
          }
          if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume().catch(() => {});
          }
          return this.ctx;
        }

        playBeadClick(material = "rudraksha") {
          const ctx = this.ensureContext();
          if (!ctx) return;

          const now = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          const profiles = {
            rudraksha: { freq: 410, endFreq: 165, type: "triangle", filterFreq: 950, dur: 0.055 },
            tulsi: { freq: 540, endFreq: 220, type: "sine", filterFreq: 1300, dur: 0.045 },
            sphatik: { freq: 1420, endFreq: 880, type: "sine", filterFreq: 2800, dur: 0.065 },
            chandan: { freq: 470, endFreq: 190, type: "triangle", filterFreq: 1100, dur: 0.05 }
          };

          const p = profiles[material] || profiles.rudraksha;
          osc.type = p.type;
          osc.frequency.setValueAtTime(p.freq, now);
          osc.frequency.exponentialRampToValueAtTime(p.endFreq, now + p.dur);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(p.filterFreq, now);

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.22, now + 0.005);
          gain.gain.exponentialRampToValueAtTime(0.001, now + p.dur);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + p.dur + 0.01);
        }

        playSumeruBell() {
          const ctx = this.ensureContext();
          if (!ctx) return;

          const now = ctx.currentTime;
          const harmonics = [528, 1056, 1584, 2112];
          harmonics.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now);

            const amp = 0.16 / (idx + 1);
            const decay = 1.9 - idx * 0.28;

            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(amp, now + 0.015);
            gain.gain.exponentialRampToValueAtTime(0.0008, now + decay);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + decay + 0.05);
          });
        }
      }

      const SacredAudio = new SacredAudioEngine();

      /* ======================================================================
         3. PHOTOREALISTIC FPV MALA RENDERER
         - Photorealistic procedural micro-textures (bumpy organic 5-Mukhi Rudraksha
           seeds with bumpy silhouettes & Brahma thread knots, warm grained Tulsi,
           refractive faceted Sphatik crystal, and silky Chandan wood).
         - Realistic Proportional Bead Sizing:
           * The active center bead is only slightly larger (~1.25x) than the
             immediate neighboring beads on the strand (not an oversized ball
             dwarfing tiny dots), creating a cohesive, authentic garland scale.
         - Natural Engraved / Embossed Counter Integration:
           * Instead of a fake white-outlined digital sticker floating on top,
             the count is rendered as subtle warm gold-leaf / carved-inlay
             lettering following the spherical lighting and material surface.
         ====================================================================== */
      /* ======================================================================
         4. APPLICATION CONTROLLER & GESTURE LOCKING
         ====================================================================== */
      const STORAGE_KEY = "divya_jap_single_v2";

      const state = {
        category: "naam",
        chantId: "ram",
        chantTitle: "RAM",
        chantSubtitle: "श्री राम जय राम जय जय राम",
        chalisaId: "hanuman_chalisa",
        verseIndex: 0,
        material: "rudraksha",
        targetCount: 108,
        currentCount: 0,
        totalCount: 0,
        malasCompleted: 0,
        soundEnabled: true,
        theme: "dark"
      };

      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (saved && typeof saved === "object") {
          Object.assign(state, saved);
        }
      } catch (_) {}

      function saveState() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (_) {}
      }

      const canvas = document.getElementById("malaCanvas");
      const malaStage = document.getElementById("malaStage");
      const renderer = new window.FpvMalaRenderer(canvas);
      renderer.setMaterial(state.material);
      renderer.setTargetCount(state.targetCount);
      renderer.currentCount = state.currentCount;
      renderer.advanceOffset = state.currentCount;
      renderer.targetAdvanceOffset = state.currentCount;

      const malasCompletedVal = document.getElementById("malasCompletedVal");
      const totalCountVal = document.getElementById("totalCountVal");
      const chantCategoryTag = document.getElementById("chantCategoryTag");
      const chantTitleEl = document.getElementById("chantTitle");
      const chantSubtitleEl = document.getElementById("chantSubtitle");
      const targetCountDisplay = document.getElementById("targetCountDisplay");
      const malaProgressFill = document.getElementById("malaProgressFill");
      const toastBanner = document.getElementById("toastBanner");
      const chalisaControls = document.getElementById("chalisaControls");
      const verseProgressLabel = document.getElementById("verseProgressLabel");

      let toastTimer = null;
      function showToast(msg) {
        toastBanner.textContent = msg;
        toastBanner.classList.add("visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toastBanner.classList.remove("visible");
        }, 2400);
      }

      function updateUI() {
        document.documentElement.setAttribute("data-theme", state.theme);
        document.getElementById("btnTheme").setAttribute("aria-pressed", String(state.theme === "light"));
        malasCompletedVal.textContent = state.malasCompleted;
        totalCountVal.textContent = state.totalCount;
        targetCountDisplay.textContent = state.targetCount;

        const pct = Math.min(100, (state.currentCount / Math.max(1, state.targetCount)) * 100);
        malaProgressFill.style.width = `${pct}%`;

        const catMap = {
          naam: "NAAM JAP",
          mantra: "MANTRA JAP",
          chalisa: "CHALISA PATH",
          custom: "SACRED JAP"
        };
        chantCategoryTag.textContent = catMap[state.category] || "NAAM JAP";
        chantTitleEl.textContent = state.chantTitle;

        if (state.category === "chalisa") {
          const chalisa = DIVYA_DATA.chalisas.find((c) => c.id === state.chalisaId) || DIVYA_DATA.chalisas[0];
          const totalV = chalisa.verses.length;
          state.verseIndex = Math.max(0, Math.min(totalV - 1, state.verseIndex));
          chantSubtitleEl.textContent = chalisa.verses[state.verseIndex];
          verseProgressLabel.textContent = `Verse ${state.verseIndex + 1} / ${totalV}`;
          chalisaControls.classList.remove("hidden");
        } else {
          chantSubtitleEl.textContent = state.chantSubtitle;
          chalisaControls.classList.add("hidden");
        }

        document.querySelectorAll(".mat-pill").forEach((btn) => {
          const selected = btn.dataset.material === state.material;
          btn.classList.toggle("active", selected);
          btn.setAttribute("aria-pressed", String(selected));
        });

        SacredAudio.enabled = state.soundEnabled;
        document.getElementById("btnSound").classList.toggle("active", state.soundEnabled);
        document.getElementById("btnSound").setAttribute("aria-pressed", String(state.soundEnabled));
        document.getElementById("iconSoundOn").classList.toggle("hidden", !state.soundEnabled);
        document.getElementById("iconSoundOff").classList.toggle("hidden", state.soundEnabled);
      }

      function triggerSingleBeadAdvance() {
        const completed = renderer.advanceOneBead();
        state.currentCount = renderer.currentCount;
        state.totalCount += 1;

        if (state.category === "chalisa") {
          const chalisa = DIVYA_DATA.chalisas.find((c) => c.id === state.chalisaId);
          if (chalisa) {
            state.verseIndex = (state.verseIndex + 1) % chalisa.verses.length;
          }
        }

        if (completed) {
          state.malasCompleted += 1;
          SacredAudio.playSumeruBell();
          if (navigator.vibrate) navigator.vibrate([45, 60, 90]);
          showToast(`Sumeru Reached • ${state.malasCompleted} Mala Completed`);

          setTimeout(() => {
            renderer.resetCycleAfterCompletion();
            state.currentCount = 0;
            updateUI();
            saveState();
          }, 420);
        } else {
          SacredAudio.playBeadClick(state.material);
          if (navigator.vibrate) navigator.vibrate(14);
        }

        updateUI();
        saveState();
      }

      let pointerActive = false;
      let startY = 0;
      let hasTriggeredInGesture = false;
      const SLIDE_THRESHOLD = 28;

      malaStage.addEventListener("pointerdown", (e) => {
        pointerActive = true;
        startY = e.clientY;
        hasTriggeredInGesture = false;
        renderer.dragPull = 0;
        SacredAudio.ensureContext();
      });

      window.addEventListener("pointermove", (e) => {
        if (!pointerActive) {
          const normX = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
          renderer.targetTiltX = normX * 0.08;
          return;
        }

        if (!pointerActive) return;
        const deltaY = startY - e.clientY;

        if (deltaY <= 0) {
          renderer.dragPull = 0;
          return;
        }

        if (!hasTriggeredInGesture) {
          renderer.dragPull = Math.min(SLIDE_THRESHOLD * 1.4, deltaY);
          if (deltaY >= SLIDE_THRESHOLD) {
            hasTriggeredInGesture = true;
            renderer.dragPull = 0;
            triggerSingleBeadAdvance();
          }
        }
      });

      function endPointerGesture(e) {
        if (!pointerActive) return;
        const deltaY = e && typeof e.clientY === "number" ? startY - e.clientY : 0;
        if (!hasTriggeredInGesture && Math.abs(deltaY) < 8) {
          triggerSingleBeadAdvance();
        }
        pointerActive = false;
        hasTriggeredInGesture = false;
        renderer.dragPull = 0;
      }

      window.addEventListener("pointerup", endPointerGesture);
      window.addEventListener("pointercancel", endPointerGesture);

      window.addEventListener("keydown", (e) => {
        if (e.target.tagName === "INPUT") return;
        if (e.key === "ArrowUp" || e.key === " ") {
          e.preventDefault();
          triggerSingleBeadAdvance();
        }
      });

      document.querySelectorAll(".mat-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.material = btn.dataset.material;
          renderer.setMaterial(state.material);
          SacredAudio.playBeadClick(state.material);
          updateUI();
          saveState();
        });
      });

      document.getElementById("btnSound").addEventListener("click", () => {
        state.soundEnabled = !state.soundEnabled;
        updateUI();
        saveState();
        if (state.soundEnabled) SacredAudio.playBeadClick(state.material);
      });

      document.getElementById("btnTheme").addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        updateUI();
        saveState();
      });

      document.getElementById("btnReset").addEventListener("click", () => {
        state.currentCount = 0;
        renderer.resetAll();
        updateUI();
        saveState();
        showToast("Current Mala Count Reset to 0");
      });

      document.getElementById("btnPrevVerse").addEventListener("click", () => {
        const chalisa = DIVYA_DATA.chalisas.find((c) => c.id === state.chalisaId);
        if (!chalisa) return;
        state.verseIndex = (state.verseIndex - 1 + chalisa.verses.length) % chalisa.verses.length;
        updateUI();
      });

      document.getElementById("btnNextVerse").addEventListener("click", () => {
        const chalisa = DIVYA_DATA.chalisas.find((c) => c.id === state.chalisaId);
        if (!chalisa) return;
        state.verseIndex = (state.verseIndex + 1) % chalisa.verses.length;
        updateUI();
      });

      document.getElementById("btnReadFullChalisa").addEventListener("click", () => {
        const chalisa = DIVYA_DATA.chalisas.find((c) => c.id === state.chalisaId);
        if (!chalisa) return;
        document.getElementById("readerModalHeading").textContent = chalisa.title;
        document.getElementById("readerBody").innerHTML = chalisa.verses
          .map((v) => `<div class="reader-verse">${v}</div>`)
          .join("");
        document.getElementById("readerModal").classList.remove("hidden");
      });

      function populateModals() {
        document.getElementById("naamList").innerHTML = DIVYA_DATA.naams
          .map(
            (n) => `
            <button class="choice-card ${state.category === "naam" && state.chantId === n.id ? "selected" : ""}" data-type="naam" data-id="${n.id}" type="button">
              <div class="choice-title">${n.title}</div>
              <div class="choice-sub">${n.subtitle}</div>
            </button>`
          )
          .join("");

        document.getElementById("mantraList").innerHTML = DIVYA_DATA.mantras
          .map(
            (m) => `
            <button class="choice-card ${state.category === "mantra" && state.chantId === m.id ? "selected" : ""}" data-type="mantra" data-id="${m.id}" type="button">
              <div class="choice-title">${m.title}</div>
              <div class="choice-sub">${m.subtitle}</div>
            </button>`
          )
          .join("");

        document.getElementById("chalisaList").innerHTML = DIVYA_DATA.chalisas
          .map(
            (c) => `
            <button class="choice-card ${state.category === "chalisa" && state.chalisaId === c.id ? "selected" : ""}" data-type="chalisa" data-id="${c.id}" type="button">
              <div class="choice-title">${c.title}</div>
              <div class="choice-sub">${c.subtitle}</div>
            </button>`
          )
          .join("");

        document.getElementById("targetPresetGrid").innerHTML = DIVYA_DATA.targetPresets
          .map(
            (num) => `
            <button class="preset-btn ${state.targetCount === num ? "selected" : ""}" data-target="${num}" type="button">
              ${num}
            </button>`
          )
          .join("");
      }

      document.getElementById("btnChantMenu").addEventListener("click", () => {
        populateModals();
        document.getElementById("chantModal").classList.remove("hidden");
      });

      document.getElementById("btnTargetMenu").addEventListener("click", () => {
        populateModals();
        document.getElementById("targetModal").classList.remove("hidden");
      });

      document.querySelectorAll("[data-close]").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.getElementById(btn.dataset.close).classList.add("hidden");
        });
      });

      document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
        backdrop.addEventListener("click", (e) => {
          if (e.target === backdrop) backdrop.classList.add("hidden");
        });
      });

      document.querySelectorAll(".tab-btn").forEach((tab) => {
        tab.addEventListener("click", () => {
          document.querySelectorAll(".tab-btn").forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          const target = tab.dataset.tab;
          ["naam", "mantra", "chalisa", "custom"].forEach((key) => {
            const panel = document.getElementById(`tabContent${key.charAt(0).toUpperCase() + key.slice(1)}`);
            panel.classList.toggle("hidden", key !== target);
          });
        });
      });

      document.getElementById("chantModal").addEventListener("click", (e) => {
        const card = e.target.closest(".choice-card");
        if (!card) return;
        const { type, id } = card.dataset;

        if (type === "naam") {
          const item = DIVYA_DATA.naams.find((x) => x.id === id);
          if (item) {
            state.category = "naam";
            state.chantId = item.id;
            state.chantTitle = item.title;
            state.chantSubtitle = item.subtitle;
          }
        } else if (type === "mantra") {
          const item = DIVYA_DATA.mantras.find((x) => x.id === id);
          if (item) {
            state.category = "mantra";
            state.chantId = item.id;
            state.chantTitle = item.title;
            state.chantSubtitle = item.subtitle;
          }
        } else if (type === "chalisa") {
          const item = DIVYA_DATA.chalisas.find((x) => x.id === id);
          if (item) {
            state.category = "chalisa";
            state.chalisaId = item.id;
            state.chantTitle = item.title;
            state.verseIndex = 0;
          }
        }

        updateUI();
        saveState();
        document.getElementById("chantModal").classList.add("hidden");
      });

      document.getElementById("customChantForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("customNameInput").value.trim();
        const sub = document.getElementById("customSubInput").value.trim();
        if (!title) return;
        state.category = "custom";
        state.chantId = "custom";
        state.chantTitle = title.toUpperCase();
        state.chantSubtitle = sub || "निरन्तर नाम स्मरण";
        updateUI();
        saveState();
        document.getElementById("chantModal").classList.add("hidden");
      });

      document.getElementById("targetPresetGrid").addEventListener("click", (e) => {
        const btn = e.target.closest(".preset-btn");
        if (!btn) return;
        const count = parseInt(btn.dataset.target, 10);
        if (!isNaN(count) && count >= 1) {
          state.targetCount = count;
          state.currentCount = 0;
          renderer.setTargetCount(count);
          updateUI();
          saveState();
          document.getElementById("targetModal").classList.add("hidden");
          showToast(`Mala Set to ${count} Beads + 1 Sumeru`);
        }
      });

      document.getElementById("customTargetForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const val = parseInt(document.getElementById("customTargetInput").value, 10);
        if (!isNaN(val) && val >= 1 && val <= 10008) {
          state.targetCount = val;
          state.currentCount = 0;
          renderer.setTargetCount(val);
          updateUI();
          saveState();
          document.getElementById("targetModal").classList.add("hidden");
          showToast(`Mala Set to ${val} Beads + 1 Sumeru`);
        }
      });

      renderer.resize();
      if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(() => renderer.resize()).observe(malaStage);
      } else {
        window.addEventListener("resize", () => renderer.resize());
      }

      updateUI();

      let lastTime = performance.now();
      function loop(now) {
        const dt = Math.min(0.05, (now - lastTime) / 1000);
        lastTime = now;
        renderer.updatePhysics(dt);
        renderer.render();
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
    })();
