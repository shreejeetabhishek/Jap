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
          { id: "durga", title: "DURGA", subtitle: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे" },
          { id: "anukul_radhaswami", title: "RADHASWAMI — SATSANG", subtitle: "श्री श्री ठाकुर अनुकूलचन्द्र • प्रार्थना में उल्लिखित नाम-स्मरण" },
          { id: "mother_ma", title: "MA — THE MOTHER", subtitle: "श्री माँ • श्री अरविन्द आश्रम की The Mother (Mirra Alfassa) का स्मरण" }
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
          },
          {
            id: "sri_aurobindo_saranam",
            title: "SRI AUROBINDO SARANAM MAMA",
            subtitle: "श्री अरविन्द शरणं मम • श्री अरविन्द एवं The Mother से सम्बद्ध devotional invocation"
          },
          {
            id: "om_namo_bhagavate",
            title: "OM NAMO BHAGAVATE",
            subtitle: "ॐ नमो भगवते • श्री अरविन्द की साधना-साहित्य में उल्लिखित invocation"
          },
          {
            id: "om_namo_bhagavate_aravindaya",
            title: "OM NAMO BHAGAVATE SRI ARAVINDAYA",
            subtitle: "ॐ नमो भगवते श्री अरविन्दाय • श्री अरविन्द से सम्बद्ध devotional invocation"
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
        targetPresets: [3, 5, 7, 8, 9, 11, 13, 108, 1008],
        i18n: {
          en: {
            chant: "Chant",
            malas: "Malas",
            today: "Today",
            streak: "Streak",
            undo: "UNDO",
            auto: "AUTO",
            stop: "STOP",
            slideUp: "SLIDE UP",
            malaBeads: "MALA BEADS"
          },
          hi: {
            chant: "नाम चुनें",
            malas: "माला",
            today: "आज",
            streak: "निरंतर",
            undo: "पूर्ववत",
            auto: "स्वतः",
            stop: "रोकें",
            slideUp: "ऊपर सरकाएं",
            malaBeads: "मनके"
          }
        }
      };

      const DEVANAGARI_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
      function formatNum(value, script) {
        const str = String(value);
        if (script !== "hi") return str;
        return str.replace(/[0-9]/g, (d) => DEVANAGARI_DIGITS[parseInt(d, 10)]);
      }

      function getTodayKey() {
        const d = new Date();
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
      }

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


      class FpvMalaRenderer {
        constructor(canvas) {
          this.canvas = canvas;
          this.ctx = canvas.getContext("2d");
          this.width = 360;
          this.height = 560;
          this.dpr = Math.min(window.devicePixelRatio || 1, (navigator.connection?.saveData || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)) ? 1.25 : 1.75);

          this.material = "rudraksha";
          this.targetCount = 108;
          this.currentCount = 0;
          this.countMode = "up";
          this.numeralScript = "en";

          this.advanceOffset = 0;
          this.targetAdvanceOffset = 0;
          this.dragPull = 0;
          this.swayAngle = 0;
          this.swayVelocity = 0;
          this.targetTiltX = 0;
          this.tasselAngle = 0;
          this.tasselVelocity = 0;

          this.beadSprites = {};
          this.buildAllBeadSprites();
        }

        resize() {
          const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: 0, height: 0 };
          const vw = window.innerWidth || document.documentElement.clientWidth || 360;
          const vh = window.innerHeight || document.documentElement.clientHeight || 640;
          this.width = Math.max(280, rect.width > 10 ? rect.width : Math.min(520, vw - 28));
          this.height = Math.max(360, rect.height > 10 ? rect.height : Math.round(vh * 0.64));
          this.dpr = Math.min(window.devicePixelRatio || 1, (navigator.connection?.saveData || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)) ? 1.25 : 1.75);

          this.canvas.width = Math.round(this.width * this.dpr);
          this.canvas.height = Math.round(this.height * this.dpr);
          this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
        }

        buildAllBeadSprites() {
          ["rudraksha", "tulsi", "sphatik", "chandan"].forEach((mat) => {
            this.beadSprites[mat] = this.createBeadSprite(mat, 260);
          });
          // Replace only Rudraksha with a detailed, physically lit 3D seed render.
          this.loadThreeDRudraksha();
        }

        loadThreeDRudraksha() {
          const build = () => {
            if (!window.THREE || this._threeDReady) return;
            this._threeDReady = true;
            try {
              const THREE = window.THREE;
              const SIZE = 512;
              const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 30);
              camera.position.set(0.16, 0.10, 4.55);

              const gl = new THREE.WebGLRenderer({
                alpha: true, antialias: false, preserveDrawingBuffer: false,
                powerPreference: "high-performance"
              });
              gl.setPixelRatio(1);
              gl.setSize(SIZE, SIZE, false);
              gl.setClearColor(0x000000, 0);
              gl.outputColorSpace = THREE.SRGBColorSpace;
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.08;
              gl.shadowMap.enabled = false;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;

              scene.add(new THREE.HemisphereLight(0xffe0c4, 0x1b0904, 1.45));
              const key = new THREE.DirectionalLight(0xffd1a6, 3.15);
              key.position.set(-3.8, 4.8, 5.5);
              key.castShadow = true;
              scene.add(key);
              const fill = new THREE.DirectionalLight(0xc87543, 1.0);
              fill.position.set(4.2, -1.8, 3.5);
              scene.add(fill);
              const rim = new THREE.DirectionalLight(0x8d3c1d, 2.0);
              rim.position.set(1.5, 2.6, -4.0);
              scene.add(rim);
              const soft = new THREE.PointLight(0xffb878, 0.48, 8);
              soft.position.set(-1.5, 0.1, 3.2);
              scene.add(soft);

              // Build seamless procedural PBR maps: mottled seed color, high-frequency
              // dry woody relief, tiny pits, and a roughness map (not a glossy wood finish).
              const TEX_W = 896, TEX_H = 448;
              const colorCanvas = document.createElement("canvas");
              const bumpCanvas = document.createElement("canvas");
              const roughCanvas = document.createElement("canvas");
              [colorCanvas, bumpCanvas, roughCanvas].forEach(c => { c.width = TEX_W; c.height = TEX_H; });
              const colorCtx = colorCanvas.getContext("2d");
              const bumpCtx = bumpCanvas.getContext("2d");
              const roughCtx = roughCanvas.getContext("2d");
              const colorImage = colorCtx.createImageData(TEX_W, TEX_H);
              const bumpImage = bumpCtx.createImageData(TEX_W, TEX_H);
              const roughImage = roughCtx.createImageData(TEX_W, TEX_H);
              const fract = (n) => n - Math.floor(n);
              const hash = (x, y) => fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);

              for (let y = 0; y < TEX_H; y++) {
                const v = y / TEX_H;
                const phi = v * Math.PI;
                const sinPhi = Math.max(0.08, Math.sin(phi));
                for (let x = 0; x < TEX_W; x++) {
                  const u = x / TEX_W;
                  const theta = u * Math.PI * 2;
                  let grooveDistance = Math.PI;
                  for (let g = 0; g < 5; g++) {
                    const base = (g + 0.5) * Math.PI * 2 / 5 - 0.16;
                    const wander = 0.055 * Math.sin(phi * 3.1 + g * 1.7)
                      + 0.025 * Math.sin(phi * 9.2 + g * 2.3);
                    const center = base + wander;
                    let d = Math.abs(theta - center);
                    d = Math.min(d, Math.PI * 2 - d);
                    grooveDistance = Math.min(grooveDistance, d);
                  }
                  const groove = Math.exp(-Math.pow(grooveDistance / 0.020, 2)) * Math.pow(sinPhi, 0.52);
                  const ridgeEdge = Math.exp(-Math.pow((grooveDistance - 0.043) / 0.021, 2)) * Math.pow(sinPhi, 0.58);
                  // Multi-scale, non-uniform seed relief; avoid the polished wood-grain look.
                  const n1 = Math.sin(theta * 29 + phi * 23 + Math.sin(phi * 7)) * 0.42;
                  const n2 = Math.sin(theta * 71 - phi * 53) * Math.sin(phi * 37 + theta * 11) * 0.31;
                  const n3 = Math.sin(theta * 151 + phi * 127) * Math.sin(phi * 83 - theta * 19) * 0.19;
                  const mottled = (hash(x * 0.19, y * 0.23) - 0.5) * 0.58;
                  const fiber = Math.sin(theta * 137 + Math.sin(phi * 17) * 4.4) * 0.09;
                  const wartNoise = Math.pow(Math.max(0, Math.sin(theta * 17 + phi * 13)
                    * Math.sin(phi * 21 - theta * 9)), 3) * 0.24;
                  const noise = n1 * 0.14 + n2 + n3 + mottled + fiber + wartNoise;
                  const poleShade = 1 - 0.17 * Math.pow(Math.abs(Math.cos(phi)), 5);
                  const shade = (1 + noise - groove * 0.60 + ridgeEdge * 0.16) * poleShade;
                  const i = (y * TEX_W + x) * 4;
                  colorImage.data[i] = Math.max(0, Math.min(255, 111 * shade + 15));
                  colorImage.data[i + 1] = Math.max(0, Math.min(255, 51 * shade + 5));
                  colorImage.data[i + 2] = Math.max(0, Math.min(255, 25 * shade + 2));
                  colorImage.data[i + 3] = 255;

                  const relief = 126 + noise * 72 - groove * 104 + ridgeEdge * 48;
                  const b = Math.max(0, Math.min(255, relief));
                  bumpImage.data[i] = bumpImage.data[i + 1] = bumpImage.data[i + 2] = b;
                  bumpImage.data[i + 3] = 255;
                  const rough = Math.max(0, Math.min(255, 224 + (hash(x, y) - 0.5) * 34 - groove * 9));
                  roughImage.data[i] = roughImage.data[i + 1] = roughImage.data[i + 2] = rough;
                  roughImage.data[i + 3] = 255;
                }
              }
              colorCtx.putImageData(colorImage, 0, 0);
              bumpCtx.putImageData(bumpImage, 0, 0);
              roughCtx.putImageData(roughImage, 0, 0);

              // Scatter small irregular pits with a raised lip and dark recessed centre.
              for (let p = 0; p < 1050; p++) {
                const px = hash(p, 11) * TEX_W;
                const py = hash(p, 19) * TEX_H;
                const radius = 0.65 + hash(p, 23) * 2.25;
                const shade = 0.55 + hash(p, 29) * 0.45;
                const pit = colorCtx.createRadialGradient(px - radius * 0.25, py - radius * 0.25, 0.1, px, py, radius * 1.8);
                pit.addColorStop(0, `rgba(22,7,3,${0.42 * shade})`);
                pit.addColorStop(0.48, `rgba(35,11,4,${0.25 * shade})`);
                pit.addColorStop(0.76, `rgba(205,126,76,${0.22 * shade})`);
                pit.addColorStop(1, "rgba(205,126,76,0)");
                colorCtx.fillStyle = pit;
                colorCtx.beginPath(); colorCtx.arc(px, py, radius * 1.8, 0, Math.PI * 2); colorCtx.fill();

                const reliefPit = bumpCtx.createRadialGradient(px - radius * 0.28, py - radius * 0.28, 0, px, py, radius * 1.8);
                reliefPit.addColorStop(0, "rgb(62,62,62)");
                reliefPit.addColorStop(0.50, "rgb(94,94,94)");
                reliefPit.addColorStop(0.78, "rgb(177,177,177)");
                reliefPit.addColorStop(1, "rgba(132,132,132,0)");
                bumpCtx.fillStyle = reliefPit;
                bumpCtx.beginPath(); bumpCtx.arc(px, py, radius * 1.8, 0, Math.PI * 2); bumpCtx.fill();
              }

              const colorMap = new THREE.CanvasTexture(colorCanvas);
              colorMap.colorSpace = THREE.SRGBColorSpace;
              colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
              colorMap.anisotropy = gl.capabilities.getMaxAnisotropy();
              const bumpMap = new THREE.CanvasTexture(bumpCanvas);
              bumpMap.wrapS = bumpMap.wrapT = THREE.RepeatWrapping;
              bumpMap.anisotropy = gl.capabilities.getMaxAnisotropy();
              const roughnessMap = new THREE.CanvasTexture(roughCanvas);
              roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;

              const rows = 176, cols = 240;
              const positions = [], uvs = [], indices = [];

              // Real Rudraksha is not a smooth five-sided wooden ball. Its surface
              // is made of irregular, fused wart-like protuberances separated by
              // deep, winding mukhi clefts. Distribute those protuberances over the
              // seed and displace the actual mesh (not detached decorative spheres).
              const wartFeatures = [];
              for (let i = 0; i < 196; i++) {
                const y = 1 - 2 * ((i + 0.5) / 196);
                const phi = Math.acos(Math.max(-1, Math.min(1, y)));
                const theta = (i * 2.399963229728653) % (Math.PI * 2);
                wartFeatures.push({
                  phi, theta,
                  radius: 0.060 + hash(i, 61) * 0.092,
                  height: 0.020 + hash(i, 67) * 0.041,
                  phase: hash(i, 71) * Math.PI * 2
                });
              }

              const seedPoint = (phi, theta, extra = 0) => {
                const sp = Math.sin(phi), cp = Math.cos(phi);
                const phase = 0.13 + 0.095 * Math.sin(phi * 1.7 + 0.4)
                  + 0.045 * Math.sin(phi * 4.9 + 1.1);
                const angle = 5 * theta + phase;
                const lobe = Math.cos(angle);
                // Narrow, deep clefts between the five mukhi lobes.
                const cleft = Math.exp(-Math.pow(Math.sin(angle * 0.5) / 0.105, 2));
                const ridge = Math.pow(Math.max(0, lobe), 1.7);
                let wartRelief = 0;
                for (let w = 0; w < wartFeatures.length; w++) {
                  const f = wartFeatures[w];
                  const dot = Math.sin(phi) * Math.sin(f.phi) * Math.cos(theta - f.theta)
                    + Math.cos(phi) * Math.cos(f.phi);
                  const angular = Math.acos(Math.max(-1, Math.min(1, dot)));
                  const q = angular / f.radius;
                  if (q < 2.35) {
                    // Rounded irregular shoulders and a slightly flattened crown.
                    const bump = Math.exp(-q * q * 1.35);
                    const shoulder = Math.exp(-Math.pow((q - 1.05) / 0.34, 2));
                    wartRelief += f.height * (bump - shoulder * 0.20)
                      * (0.88 + 0.12 * Math.sin(f.phase + theta * 3 + phi * 2));
                  }
                }
                const fine =
                  Math.sin(19 * theta + 13 * phi) * Math.sin(11 * phi + 0.6) * 0.008
                  + Math.sin(43 * theta - 27 * phi) * Math.sin(17 * phi + theta) * 0.0048
                  + Math.sin(89 * theta + 57 * phi) * 0.0024
                  + Math.sin(137 * theta + 91 * phi) * 0.0011;
                const channelDepth = 0.071 * cleft * Math.pow(sp, 0.58);
                const broadLobes = 0.118 * ridge * Math.pow(sp, 0.72);
                const poleIrregularity = 0.018 * Math.sin(theta * 3 + 0.7) * Math.pow(Math.abs(cp), 6);
                const r = 1 + broadLobes - channelDepth + wartRelief + fine + poleIrregularity + extra;
                return new THREE.Vector3(
                  r * sp * Math.cos(theta) * 0.91,
                  r * cp * 1.02,
                  r * sp * Math.sin(theta) * 0.88
                );
              };

              for (let iy = 0; iy <= rows; iy++) {
                const phi = Math.PI * iy / rows;
                for (let ix = 0; ix <= cols; ix++) {
                  const theta = Math.PI * 2 * ix / cols;
                  const p = seedPoint(phi, theta);
                  positions.push(p.x, p.y, p.z);
                  uvs.push(ix / cols, 1 - iy / rows);
                }
              }
              for (let iy = 0; iy < rows; iy++) {
                for (let ix = 0; ix < cols; ix++) {
                  const a = iy * (cols + 1) + ix;
                  const b = a + cols + 1;
                  indices.push(a, a + 1, b, b, a + 1, b + 1);
                }
              }
              const geo = new THREE.BufferGeometry();
              geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
              geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
              geo.setIndex(indices);
              geo.computeVertexNormals();

              const seedMaterial = new THREE.MeshStandardMaterial({
                map: colorMap, bumpMap, bumpScale: 0.155,
                roughnessMap, roughness: 0.98, metalness: 0,
                color: 0xffffff
              });
              const group = new THREE.Group();
              const seed = new THREE.Mesh(geo, seedMaterial);
              seed.rotation.set(0.17, -0.24, 0.055);
              seed.castShadow = false;
              seed.receiveShadow = false;
              group.add(seed);

              // Five recessed, gently irregular mukhi seams follow the true surface.
              for (let g = 0; g < 5; g++) {
                const grooveTheta = (g + 0.5) * Math.PI * 2 / 5 - 0.16;
                const groovePoints = [];
                const leftRidge = [], rightRidge = [];
                for (let j = 2; j < 98; j++) {
                  const phi = Math.PI * j / 100;
                  const wobble = 0.018 * Math.sin(phi * 4.2 + g * 1.7) + 0.009 * Math.sin(phi * 13 + g);
                  groovePoints.push(seedPoint(phi, grooveTheta + wobble, 0.003));
                  leftRidge.push(seedPoint(phi, grooveTheta - 0.045 + wobble, 0.006));
                  rightRidge.push(seedPoint(phi, grooveTheta + 0.045 + wobble, 0.006));
                }
                const groove = new THREE.Mesh(
                  new THREE.TubeGeometry(new THREE.CatmullRomCurve3(groovePoints), 180, 0.0105, 7, false),
                  new THREE.MeshStandardMaterial({ color: 0x321208, roughness: 1 })
                );
                const ridgeMat = new THREE.MeshStandardMaterial({ color: 0xa85d36, roughness: 0.96 });
                const ridgeA = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(leftRidge), 180, 0.005, 5, false), ridgeMat);
                const ridgeB = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rightRidge), 180, 0.005, 5, false), ridgeMat);
                [groove, ridgeA, ridgeB].forEach(m => { m.rotation.copy(seed.rotation); group.add(m); });
              }

              // Thread bore: dark recessed opening with a worn, raised rim at both poles.
              const boreMat = new THREE.MeshStandardMaterial({ color: 0x160803, roughness: 1 });
              const rimMat = new THREE.MeshStandardMaterial({ color: 0x8e4827, roughness: 0.96 });
              const topBore = new THREE.Mesh(new THREE.SphereGeometry(0.050, 24, 16), boreMat);
              topBore.position.set(0.004, 1.026, 0.012);
              topBore.position.applyEuler(seed.rotation);
              topBore.scale.set(0.78, 0.32, 0.72);
              topBore.rotation.copy(seed.rotation);
              group.add(topBore);
              const topLip = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.009, 7, 28), rimMat);
              topLip.position.copy(topBore.position);
              topLip.scale.set(0.9, 0.55, 0.8);
              topLip.rotation.copy(seed.rotation);
              group.add(topLip);

              // All wart-like protuberances are part of the continuous seed mesh;
              // no detached bead-like bumps are placed on top of the surface.

              group.rotation.set(0.035, 0.10, -0.025);
              scene.add(group);

              // A soft, transparent contact shadow gives the seed a grounded photographic read.
              const shadowCanvas = document.createElement("canvas");
              shadowCanvas.width = shadowCanvas.height = 256;
              const sh = shadowCanvas.getContext("2d");
              const shadowGrad = sh.createRadialGradient(128, 128, 16, 128, 128, 120);
              shadowGrad.addColorStop(0, "rgba(12,4,1,0.34)");
              shadowGrad.addColorStop(0.58, "rgba(12,4,1,0.14)");
              shadowGrad.addColorStop(1, "rgba(12,4,1,0)");
              sh.fillStyle = shadowGrad;
              sh.fillRect(0, 0, 256, 256);

              gl.render(scene, camera);
              const sprite = document.createElement("canvas");
              sprite.width = sprite.height = SIZE;
              const spriteCtx = sprite.getContext("2d");
              spriteCtx.drawImage(shadowCanvas, 178, 205, 284, 284);
              spriteCtx.drawImage(gl.domElement, 0, 0);
              this.beadSprites.rudraksha = sprite;
              this.render();

              gl.dispose();
              geo.dispose();
              seedMaterial.dispose();
              colorMap.dispose(); bumpMap.dispose(); roughnessMap.dispose();
            } catch (err) {
              console.warn("3D Rudraksha model fallback:", err);
            }
          };

          if (window.THREE) { build(); return; }
          if (document.querySelector('script[data-divya-three]')) return;

          // The counter is fully usable with the built-in Canvas bead while Three.js
          // downloads. Delay the optional 3D enhancement until after first paint.
          const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
          if (connection?.saveData) return;

          const effectiveType = connection?.effectiveType || "4g";
          const downlink = Number(connection?.downlink || 0);
          const isConstrained = effectiveType === "slow-2g" || effectiveType === "2g" ||
            effectiveType === "3g" || (downlink > 0 && downlink < 1.0);
          const waitMs = isConstrained ? 12000 : 1100;

          const loadThree = () => {
            if (document.hidden || window.THREE || document.querySelector('script[data-divya-three]')) return;
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js";
            script.async = true;
            script.dataset.divyaThree = "1";
            script.onload = build;
            script.onerror = () => {
              script.remove();
              console.warn("Three.js unavailable; continuing with built-in Rudraksha rendering.");
            };
            document.head.appendChild(script);
          };

          const scheduleLoad = () => {
            if ("requestIdleCallback" in window) {
              requestIdleCallback(loadThree, { timeout: waitMs + 4000 });
            } else {
              window.setTimeout(loadThree, waitMs);
            }
          };
          window.setTimeout(scheduleLoad, waitMs);
        }

        // Deterministic pseudo-random helper for organic texture generation
        hash2d(x, y) {
          const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
          return n - Math.floor(n);
        }

        createBeadSprite(material, size) {
          const off = document.createElement("canvas");
          off.width = size;
          off.height = size;
          const c = off.getContext("2d");
          const cx = size / 2;
          const cy = size / 2;
          const baseR = size * 0.415;

          // Define the bead silhouette first, then clip every texture stroke to it.
          // This keeps the sprite transparent outside the bead (no square tile).
          c.save();
          c.beginPath();
          const steps = 144;
          for (let i = 0; i <= steps; i++) {
            const a = (i / steps) * Math.PI * 2;
            let r = baseR;
            if (material === "rudraksha") {
              r += Math.cos(a * 5 + 0.25) * baseR * 0.022;
              r += Math.sin(a * 11 + 0.8) * baseR * 0.009;
              r *= 1 - 0.035 * Math.pow(Math.abs(Math.sin(a)), 4);
            } else if (material === "tulsi") {
              r *= 1 - 0.035 * Math.abs(Math.sin(a));
            }
            const px = cx + Math.cos(a) * r;
            const py = cy + Math.sin(a) * r;
            if (i === 0) c.moveTo(px, py);
            else c.lineTo(px, py);
          }
          c.closePath();
          c.clip();

          const palettes = {
            rudraksha: ["#d58a58", "#a9532b", "#713016", "#2a1007"],
            tulsi: ["#faebd4", "#d8b17b", "#a37843", "#63431e"],
            sphatik: ["#ffffff", "#eef9ff", "#a7d2e8", "#3e6980"],
            chandan: ["#f7d49e", "#cc8f46", "#8f5920", "#54300c"]
          };
          const colors = palettes[material] || palettes.rudraksha;
          const grad = c.createRadialGradient(
            cx - baseR * 0.30, cy - baseR * 0.34, baseR * 0.04,
            cx, cy, baseR * 1.12
          );
          grad.addColorStop(0, colors[0]);
          grad.addColorStop(0.34, colors[1]);
          grad.addColorStop(0.72, colors[2]);
          grad.addColorStop(1, colors[3]);
          c.fillStyle = grad;
          c.fillRect(0, 0, size, size);

          if (material === "rudraksha") {
            // Five authentic longitudinal mukhi divisions: raised rounded
            // lobes separated by deep, irregular channels (not leaf/chevron lines).
            for (let i = 0; i < 5; i++) {
              const t = (i - 2) / 2;
              const x = cx + t * baseR * 0.68;
              const bow = (1 - Math.abs(t)) * baseR * 0.13;

              if (i > 0) {
                c.beginPath();
                c.moveTo(x - 1, cy - baseR * 0.91);
                c.bezierCurveTo(
                  x - bow - 2, cy - baseR * 0.36,
                  x + bow + 1, cy + baseR * 0.36,
                  x - 1, cy + baseR * 0.91
                );
                c.strokeStyle = "rgba(31, 8, 2, 0.78)";
                c.lineWidth = size * 0.021;
                c.lineCap = "round";
                c.stroke();

                c.beginPath();
                c.moveTo(x + size * 0.012, cy - baseR * 0.82);
                c.bezierCurveTo(
                  x + size * 0.012 - bow * 0.5, cy - baseR * 0.30,
                  x + size * 0.012 + bow * 0.55, cy + baseR * 0.30,
                  x + size * 0.012, cy + baseR * 0.82
                );
                c.strokeStyle = "rgba(239, 164, 109, 0.43)";
                c.lineWidth = size * 0.009;
                c.stroke();
              }

              // Soft raised lobe highlight on alternating faces.
              c.beginPath();
              c.moveTo(x - baseR * 0.055, cy - baseR * 0.78);
              c.bezierCurveTo(
                x - baseR * 0.10 - bow * 0.4, cy - baseR * 0.22,
                x + baseR * 0.07 + bow * 0.4, cy + baseR * 0.28,
                x - baseR * 0.025, cy + baseR * 0.78
              );
              c.strokeStyle = "rgba(245, 174, 119, 0.13)";
              c.lineWidth = size * 0.045;
              c.stroke();
            }

            // Pits and fine fibrous grain, individually distributed on the seed.
            for (let p = 0; p < 260; p++) {
              const rx = (this.hash2d(p, 1.3) * 2 - 1) * baseR * 0.84;
              const ry = (this.hash2d(p, 7.9) * 2 - 1) * baseR * 0.84;
              if (Math.hypot(rx, ry) > baseR * 0.84) continue;
              const dotR = 0.45 + this.hash2d(p, 3.1) * 1.25;
              c.beginPath();
              c.arc(cx + rx, cy + ry, dotR, 0, Math.PI * 2);
              c.fillStyle = this.hash2d(p, 5.7) > 0.5
                ? "rgba(255, 190, 137, 0.20)"
                : "rgba(24, 7, 2, 0.30)";
              c.fill();
            }

            // Layered organic Rudraksha relief for the immediate first-paint sprite.
            // The highlights and recessed shadows are clipped to the seed silhouette.
            for (let w = 0; w < 92; w++) {
              const a = this.hash2d(w, 31.7) * Math.PI * 2;
              const rr = Math.sqrt(this.hash2d(w, 43.9)) * baseR * 0.76;
              const wx = cx + Math.cos(a) * rr;
              const wy = cy + Math.sin(a) * rr;
              const wr = 2.2 + this.hash2d(w, 57.1) * 7.2;
              const warp = this.hash2d(w, 69.3) * 0.8 + 0.2;
              const shade = c.createRadialGradient(wx - wr * 0.28, wy - wr * 0.34, wr * 0.08, wx, wy, wr);
              shade.addColorStop(0, `rgba(224,145,91,${0.10 * warp})`);
              shade.addColorStop(0.48, `rgba(93,34,13,${0.12 * warp})`);
              shade.addColorStop(0.78, `rgba(27,7,2,${0.30 * warp})`);
              shade.addColorStop(1, 'rgba(20,5,1,0)');
              c.fillStyle = shade;
              c.beginPath(); c.ellipse(wx, wy, wr * (0.72 + warp * 0.25), wr, a, 0, Math.PI * 2); c.fill();
              c.beginPath();
              c.ellipse(wx - wr * 0.13, wy - wr * 0.20, wr * 0.52, wr * 0.27, a, Math.PI * 1.05, Math.PI * 1.88);
              c.strokeStyle = `rgba(244,174,119,${0.13 * warp})`;
              c.lineWidth = Math.max(0.7, wr * 0.13); c.stroke();
            }

            // Fine branching fissures and short weathered fibres, not regular stripes.
            for (let k = 0; k < 44; k++) {
              const a = this.hash2d(k, 81.2) * Math.PI * 2;
              const rr = Math.sqrt(this.hash2d(k, 92.4)) * baseR * 0.78;
              const sx = cx + Math.cos(a) * rr;
              const sy = cy + Math.sin(a) * rr;
              const len = 5 + this.hash2d(k, 103.6) * 13;
              c.beginPath(); c.moveTo(sx, sy);
              c.quadraticCurveTo(sx + Math.cos(a + 0.7) * len * 0.45, sy + Math.sin(a + 0.7) * len * 0.45, sx + Math.cos(a + 0.18) * len, sy + Math.sin(a + 0.18) * len);
              c.strokeStyle = k % 3 === 0 ? 'rgba(16,5,2,0.26)' : 'rgba(231,157,105,0.12)';
              c.lineWidth = 0.55 + this.hash2d(k, 114.8) * 0.75; c.stroke();
            }

            // Small natural thread aperture at the top pole.
            c.beginPath();
            c.ellipse(cx, cy - baseR * 0.88, baseR * 0.105, baseR * 0.065, 0, 0, Math.PI * 2);
            c.fillStyle = "rgba(20, 5, 1, 0.88)";
            c.fill();
            c.beginPath();
            c.ellipse(cx - 1, cy - baseR * 0.90, baseR * 0.045, baseR * 0.025, 0, 0, Math.PI * 2);
            c.fillStyle = "rgba(205, 112, 61, 0.35)";
            c.fill();

            // Scattered short wrinkles add the rough seed-like surface.
            for (let row = -3; row <= 3; row++) {
              const yy = cy + row * baseR * 0.22;
              c.beginPath();
              c.moveTo(cx - baseR * 0.66, yy);
              c.quadraticCurveTo(cx, yy + (row % 2 ? 2.2 : -2.2), cx + baseR * 0.66, yy - 1);
              c.strokeStyle = "rgba(38, 10, 3, 0.16)";
              c.lineWidth = size * 0.005;
              c.stroke();
            }
          } else if (material === "tulsi") {
            c.strokeStyle = "rgba(95, 58, 22, 0.22)";
            c.lineWidth = 1.3;
            for (let g = -5; g <= 5; g++) {
              c.beginPath();
              c.ellipse(cx, cy + g * baseR * 0.15, baseR * 0.94, baseR * 0.13, 0.06, 0, Math.PI * 2);
              c.stroke();
            }
          } else if (material === "sphatik") {
            const glint = c.createRadialGradient(cx - baseR * 0.28, cy - baseR * 0.30, 1, cx - baseR * 0.2, cy - baseR * 0.2, baseR * 0.55);
            glint.addColorStop(0, "rgba(255,255,255,0.82)");
            glint.addColorStop(1, "rgba(255,255,255,0)");
            c.fillStyle = glint;
            c.fillRect(0, 0, size, size);
          } else if (material === "chandan") {
            c.strokeStyle = "rgba(93, 48, 13, 0.20)";
            c.lineWidth = 1;
            for (let g = -4; g <= 4; g++) {
              c.beginPath();
              c.ellipse(cx, cy + g * baseR * 0.18, baseR * 0.86, baseR * 0.09, 0.04, 0, Math.PI * 2);
              c.stroke();
            }
          }

          // Spherical edge shading and a fine outline make every bead distinct.
          const rim = c.createRadialGradient(
            cx - baseR * 0.18, cy - baseR * 0.18, baseR * 0.20,
            cx, cy, baseR * 1.02
          );
          rim.addColorStop(0, "rgba(0,0,0,0)");
          rim.addColorStop(0.78, "rgba(0,0,0,0.08)");
          rim.addColorStop(1, "rgba(0,0,0,0.38)");
          c.fillStyle = rim;
          c.fillRect(0, 0, size, size);
          c.restore();

          c.save();
          c.beginPath();
          for (let i = 0; i <= steps; i++) {
            const a = (i / steps) * Math.PI * 2;
            let r = baseR;
            if (material === "rudraksha") {
              r += Math.cos(a * 5 + 0.25) * baseR * 0.022;
              r += Math.sin(a * 11 + 0.8) * baseR * 0.009;
              r *= 1 - 0.035 * Math.pow(Math.abs(Math.sin(a)), 4);
            } else if (material === "tulsi") {
              r *= 1 - 0.035 * Math.abs(Math.sin(a));
            }
            const px = cx + Math.cos(a) * r;
            const py = cy + Math.sin(a) * r;
            if (i === 0) c.moveTo(px, py);
            else c.lineTo(px, py);
          }
          c.closePath();
          c.strokeStyle = material === "rudraksha"
            ? "rgba(27, 8, 2, 0.82)"
            : "rgba(35, 18, 8, 0.42)";
          c.lineWidth = size * 0.012;
          c.stroke();
          c.restore();
          return off;
        }

        setMaterial(mat) {
          this.material = mat;
        }

        setTargetCount(count) {
          this.targetCount = Math.max(1, count);
          this.currentCount = 0;
          this.advanceOffset = 0;
          this.targetAdvanceOffset = 0;
        }

        advanceOneBead() {
          this.currentCount += 1;
          this.targetAdvanceOffset += 1;
          this.swayVelocity += (Math.random() - 0.5) * 0.018;
          this.tasselVelocity += 0.035;
          return this.currentCount >= this.targetCount;
        }

        undoOneBead() {
          if (this.currentCount <= 0) return false;
          this.currentCount -= 1;
          this.targetAdvanceOffset = Math.max(0, this.targetAdvanceOffset - 1);
          this.swayVelocity += (Math.random() - 0.5) * 0.012;
          return true;
        }

        resetCycleAfterCompletion() {
          this.currentCount = 0;
        }

        resetAll() {
          this.currentCount = 0;
          this.advanceOffset = 0;
          this.targetAdvanceOffset = 0;
        }

        getFpvLoopPoint(u, dims) {
          const { centerX, topY, bottomY, halfWidthX, zDepth } = dims;
          const theta = u * Math.PI * 2;
          const spanY = Math.max(120, bottomY - topY);
          const y = topY + 0.5 * (1 - Math.cos(theta)) * spanY;
          const x = centerX - Math.sin(theta) * halfWidthX;
          const z = -Math.sin(theta) * zDepth;
          return { x, y, z };
        }

        getLoopDimensions() {
          const n = this.targetCount;
          const centerX = this.width * 0.5;
          const primaryR = Math.min(35, Math.max(29, this.width * 0.084));
          let beadBaseR = primaryR * 0.48;

          if (n <= 13) beadBaseR = primaryR * 0.54;
          else if (n > 108) beadBaseR = primaryR * 0.43;

          const centerY = Math.max(primaryR * 3.4, this.height * 0.34);
          const topY = Math.max(primaryR * 1.25, centerY - primaryR * 2.35);
          const bottomY = Math.min(this.height - 48, centerY + this.height * 0.53);
          const halfWidthX = beadBaseR * 0.34;

          return {
            centerX,
            centerY,
            topY,
            bottomY,
            halfWidthX,
            zDepth: 42,
            beadBaseR,
            primaryR
          };
        }

        updatePhysics(dt) {
          const diff = this.targetAdvanceOffset - this.advanceOffset;
          this.advanceOffset += diff * Math.min(1, dt * 16);
          if (Math.abs(diff) < 0.0005) {
            this.advanceOffset = this.targetAdvanceOffset;
          }

          const springK = 14;
          const damping = 0.90;
          const accel = -springK * (this.swayAngle - this.targetTiltX);
          this.swayVelocity = (this.swayVelocity + accel * dt) * damping;
          this.swayAngle += this.swayVelocity * dt;

          const tasselAccel = -20 * (this.tasselAngle - this.swayAngle * 1.45);
          this.tasselVelocity = (this.tasselVelocity + tasselAccel * dt) * 0.88;
          this.tasselAngle += this.tasselVelocity * dt;
        }

        drawSilkenTassel(ctx, x, y, scale, angle) {
          const len = 36 * scale;
          const spread = 12 * scale;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);

          ctx.fillStyle = "#c9852c";
          ctx.beginPath();
          ctx.roundRect(-5 * scale, -1 * scale, 10 * scale, 7 * scale, 2.5 * scale);
          ctx.fill();

          ctx.strokeStyle = "#f2c272";
          ctx.lineWidth = 1.1 * scale;
          ctx.strokeRect(-4.5 * scale, 1.5 * scale, 9 * scale, 2 * scale);

          const strands = 17;
          for (let i = 0; i < strands; i++) {
            const t = (i / (strands - 1)) * 2 - 1;
            ctx.beginPath();
            ctx.moveTo(t * 3.5 * scale, 5.5 * scale);
            ctx.quadraticCurveTo(t * spread * 0.62, len * 0.55, t * spread, len);
            ctx.strokeStyle = i % 2 === 0 ? "#c8681c" : "#e89e42";
            ctx.lineWidth = 1.25 * scale;
            ctx.stroke();
          }

          ctx.restore();
        }

        render() {
          const ctx = this.ctx;
          ctx.clearRect(0, 0, this.width, this.height);

          const dims = this.getLoopDimensions();
          const totalSlots = this.targetCount + 1;
          const sprite = this.beadSprites[this.material] || this.beadSprites.rudraksha;

          ctx.save();
          ctx.translate(dims.centerX, dims.centerY);
          ctx.rotate(this.swayAngle);
          ctx.translate(-dims.centerX, -dims.centerY);

          // Keep the physical loop for bead travel, but render only the lower
          // hanging run. The unwanted upper return arch is hidden behind the
          // counting position instead of changing the mala's geometry.
          const upperCutY = dims.centerY - dims.primaryR * 0.42;
          const spanY = Math.max(120, dims.bottomY - dims.topY);
          const cosCut = Math.max(-1, Math.min(1, 1 - 2 * (upperCutY - dims.topY) / spanY));
          const uCut = Math.acos(cosCut) / (Math.PI * 2);
          ctx.beginPath();
          const cordSteps = 72;
          for (let s = 0; s <= cordSteps; s++) {
            const u = uCut + (s / cordSteps) * (1 - 2 * uCut);
            const pt = this.getFpvLoopPoint(u, dims);
            if (s === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }
          ctx.strokeStyle = "rgba(176, 124, 74, 0.38)";
          ctx.lineWidth = 2.4;
          ctx.stroke();

          const guruIndex = Math.floor(totalSlots / 2);
          const items = [];
          const pullFraction = Math.min(0.45, Math.max(0, this.dragPull / 95));
          const effectiveOffset = this.advanceOffset + pullFraction;

          for (let k = 0; k < totalSlots; k++) {
            const u = (((k + effectiveOffset) % totalSlots) + totalSlots) % totalSlots / totalSlots;
            const pt = this.getFpvLoopPoint(u, dims);
            const isGuru = k === guruIndex;

            // Render both strands. The rear strand is drawn first by the depth sort
            // below, allowing the front beads to overlap it naturally.
            let renderX = pt.x;
            if (isGuru && u > 0.02 && u < 0.50) {
              // Let the Guru bead peek slightly to the side as it passes behind the strand.
              renderX += Math.sin(u * Math.PI * 2) * (dims.beadBaseR * 0.48);
            }

            const depthNorm = (pt.z + dims.zDepth) / (2 * dims.zDepth);
            const perspectiveScale = 0.82 + 0.24 * depthNorm;
            const verticalFpvBoost = 1.0 - Math.max(0, (pt.y - dims.centerY) / Math.max(1, dims.bottomY - dims.centerY)) * 0.08;
            const scale = perspectiveScale * verticalFpvBoost;
            const distFromCenter = Math.min(u, 1 - u);

            items.push({
              k,
              u,
              x: renderX,
              y: pt.y,
              z: pt.z,
              depthNorm,
              scale,
              distFromCenter,
              isGuru
            });
          }

          // Painter's sort: rear beads render first, then nearer beads naturally
          // overlap them to create an oblique, side-looking perspective.
          items.sort((a, b) => {
            if (a.z < -2 && b.z >= -2) return -1;
            if (b.z < -2 && a.z >= -2) return 1;
            return b.y - a.y;
          });

          // Draw every mala bead except those physically occupying the counter's
          // footprint. The clear zone prevents neighbouring beads from being
          // painted over by the numbered bead while leaving beads visible above
          // and below it.
          const cx = dims.centerX + this.swayAngle * 10;
          const cy = dims.centerY - pullFraction * 16;
          const pr = dims.primaryR;

          for (const item of items) {
            // Remove only beads on the short upper return section above the
            // numbered counting bead. Keep the lower strand, Guru bead and
            // moving jhalar untouched.
            if (item.y < dims.centerY - dims.primaryR * 0.42) continue;
            const r = (item.isGuru ? dims.beadBaseR * 1.36 : dims.beadBaseR) * item.scale;
            const dx = item.x - cx;
            const dy = item.y - cy;
            if (Math.hypot(dx, dy) < pr + r * 0.48) continue;

            if (item.isGuru) {
              this.drawSilkenTassel(ctx, item.x, item.y + r * 0.80, item.scale, this.tasselAngle - this.swayAngle);
            }

            ctx.drawImage(sprite, item.x - r, item.y - r, r * 2, r * 2);
          }

          ctx.restore();

          // Numbered counting bead sits within the continuous hanging strand.



          ctx.drawImage(sprite, cx - pr, cy - pr, pr * 2, pr * 2);

          const rawVal = this.countMode === "down"
            ? Math.max(0, this.targetCount - this.currentCount)
            : this.currentCount;
          const displayCount = formatNum(rawVal, this.numeralScript);
          const fontSize = displayCount.length >= 4 ? pr * 0.50 : displayCount.length === 3 ? pr * 0.60 : pr * 0.72;
          ctx.save();
          ctx.font = `700 ${Math.round(fontSize)}px "Cinzel", "Playfair Display", Georgia, serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;

          const isLightBead = this.material === "sphatik" || this.material === "tulsi";
          ctx.fillStyle = isLightBead ? "#1e1005" : "#fff9f0";
          ctx.fillText(displayCount, cx, cy + 1);
          ctx.restore();
        }
      }


      /* ======================================================================
         4. LOCAL-FIRST APPLICATION CONTROLLER (ANALYTICS, UNDO, AUTO-JAP, BACKUP)
         ====================================================================== */
      const STORAGE_KEY = "divya_jap_local_v3";

      const state = {
        category: "naam",
        chantId: "ram",
        chantTitle: "RAM",
        chantSubtitle: "श्री राम जय राम जय जय राम",
        chalisaId: "hanuman_chalisa",
        verseIndex: 0,
        material: "rudraksha",
        targetCount: 108,
        sankalpaMalas: 3,
        currentCount: 0,
        totalCount: 0,
        malasCompleted: 0,
        soundEnabled: true,
        hapticEnabled: true,
        wakeLockEnabled: true,
        countMode: "up",
        numeralScript: "en",
        lang: "en",
        autoSpeedMs: 1500,
        theme: "dark",
        dailyLogs: {}
      };

      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (saved && typeof saved === "object") {
          Object.assign(state, saved);
          if (!state.dailyLogs || typeof state.dailyLogs !== "object") {
            state.dailyLogs = {};
          }
        }
      } catch (_) {}

      try {
        const detailDefaultKey = "divya_jap_detailed_rudraksha_default_v1";
        if (!localStorage.getItem(detailDefaultKey)) {
          state.material = "rudraksha";
          localStorage.setItem(detailDefaultKey, "1");
        }
      } catch (_) { state.material = "rudraksha"; }

      function saveState() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (_) {}
      }

      const undoStack = [];
      let sessionActiveSeconds = 0;
      let lastActivityTimestamp = 0;
      let autoJapTimer = null;
      let wakeLockSentinel = null;

      async function syncWakeLock() {
        if (!("wakeLock" in navigator)) return;
        try {
          if (state.wakeLockEnabled && document.visibilityState === "visible") {
            if (!wakeLockSentinel) {
              wakeLockSentinel = await navigator.wakeLock.request("screen");
              wakeLockSentinel.addEventListener("release", () => {
                wakeLockSentinel = null;
              });
            }
          } else if (wakeLockSentinel) {
            await wakeLockSentinel.release();
            wakeLockSentinel = null;
          }
        } catch (_) {}
      }

      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          syncWakeLock();
        }
      });

      const canvas = document.getElementById("malaCanvas");
      const malaStage = document.getElementById("malaStage");
      const renderer = new FpvMalaRenderer(canvas);
      renderer.setMaterial(state.material);
      renderer.setTargetCount(state.targetCount);
      renderer.currentCount = state.currentCount;
      renderer.advanceOffset = state.currentCount;
      renderer.targetAdvanceOffset = state.currentCount;
      renderer.countMode = state.countMode;
      renderer.numeralScript = state.numeralScript;

      const malasCompletedVal = document.getElementById("malasCompletedVal");
      const todayCountVal = document.getElementById("todayCountVal");
      const streakCountVal = document.getElementById("streakCountVal");
      const chantCategoryTag = document.getElementById("chantCategoryTag");
      const chantTitleEl = document.getElementById("chantTitle");
      const chantSubtitleEl = document.getElementById("chantSubtitle");
      const targetCountDisplay = document.getElementById("targetCountDisplay");
      const malaProgressFill = document.getElementById("malaProgressFill");
      const toastBanner = document.getElementById("toastBanner");
      const chalisaControls = document.getElementById("chalisaControls");
      const verseProgressLabel = document.getElementById("verseProgressLabel");
      const btnUndo = document.getElementById("btnUndo");
      const btnAutoJap = document.getElementById("btnAutoJap");

      let toastTimer = null;
      function showToast(msg) {
        toastBanner.textContent = msg;
        toastBanner.classList.add("visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toastBanner.classList.remove("visible");
        }, 2400);
      }

      function ensureTodayLog() {
        const key = getTodayKey();
        if (!state.dailyLogs[key]) {
          state.dailyLogs[key] = { count: 0, malas: 0, seconds: 0 };
        }
        return state.dailyLogs[key];
      }

      function computeStreakDays() {
        let streak = 0;
        const d = new Date();
        const todayKey = getTodayKey();
        if (!state.dailyLogs[todayKey] || state.dailyLogs[todayKey].count <= 0) {
          d.setDate(d.getDate() - 1);
        }
        while (true) {
          const yyyy = d.getFullYear();
          const mm = String(d.getMonth() + 1).padStart(2, "0");
          const dd = String(d.getDate()).padStart(2, "0");
          const k = `${yyyy}-${mm}-${dd}`;
          if (state.dailyLogs[k] && state.dailyLogs[k].count > 0) {
            streak += 1;
            d.setDate(d.getDate() - 1);
          } else {
            break;
          }
        }
        return streak;
      }

      function formatDuration(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      }

      function updateUI() {
        document.documentElement.setAttribute("data-theme", state.theme);
        renderer.countMode = state.countMode;
        renderer.numeralScript = state.numeralScript;

        const t = DIVYA_DATA.i18n[state.lang] || DIVYA_DATA.i18n.en;
        document.getElementById("hudChantBtnText").textContent = t.chant;
        document.getElementById("lblStatMalas").textContent = t.malas;
        document.getElementById("lblStatToday").textContent = t.today;
        document.getElementById("lblStatStreak").textContent = t.streak;
        document.getElementById("lblUndo").textContent = t.undo;
        document.getElementById("lblAuto").textContent = autoJapTimer ? t.stop : t.auto;
        document.getElementById("lblSlideUp").textContent = t.slideUp;
        document.getElementById("targetUnitDisplay").textContent = t.malaBeads;

        const todayLog = ensureTodayLog();
        const streak = computeStreakDays();

        malasCompletedVal.textContent = formatNum(state.malasCompleted, state.numeralScript);
        todayCountVal.textContent = formatNum(todayLog.count, state.numeralScript);
        streakCountVal.textContent = `${formatNum(streak, state.numeralScript)}d`;
        targetCountDisplay.textContent = formatNum(state.targetCount, state.numeralScript);

        const sankalpaDone = Math.min(state.sankalpaMalas, todayLog.malas);
        document.getElementById("sankalpaProgressVal").textContent =
          `${formatNum(sankalpaDone, state.numeralScript)}/${formatNum(state.sankalpaMalas, state.numeralScript)}`;

        document.getElementById("sessionTimeVal").textContent = formatDuration(sessionActiveSeconds);
        const pace = sessionActiveSeconds >= 5
          ? Math.round((todayLog.count / Math.max(1, todayLog.seconds)) * 60)
          : 0;
        document.getElementById("sessionPaceVal").textContent = formatNum(pace, state.numeralScript);

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
          btn.classList.toggle("active", btn.dataset.material === state.material);
        });

        SacredAudio.enabled = state.soundEnabled;
        document.getElementById("btnSound").classList.toggle("active", state.soundEnabled);
        document.getElementById("iconSoundOn").classList.toggle("hidden", !state.soundEnabled);
        document.getElementById("iconSoundOff").classList.toggle("hidden", state.soundEnabled);

        btnUndo.disabled = undoStack.length === 0;
        btnAutoJap.classList.toggle("active", Boolean(autoJapTimer));
      }

      setInterval(() => {
        if (lastActivityTimestamp > 0 && Date.now() - lastActivityTimestamp < 15000) {
          sessionActiveSeconds += 1;
          const todayLog = ensureTodayLog();
          todayLog.seconds = (todayLog.seconds || 0) + 1;
          document.getElementById("sessionTimeVal").textContent = formatDuration(sessionActiveSeconds);
        }
      }, 1000);

      function triggerSingleBeadAdvance() {
        lastActivityTimestamp = Date.now();
        syncWakeLock();

        const todayLog = ensureTodayLog();
        undoStack.push({
          prevCount: state.currentCount,
          prevTotal: state.totalCount,
          prevMalas: state.malasCompleted,
          prevTodayCount: todayLog.count,
          prevTodayMalas: todayLog.malas,
          prevVerse: state.verseIndex
        });
        if (undoStack.length > 30) undoStack.shift();

        const completed = renderer.advanceOneBead();
        state.currentCount = renderer.currentCount;
        state.totalCount += 1;
        todayLog.count += 1;

        if (state.category === "chalisa") {
          const chalisa = DIVYA_DATA.chalisas.find((c) => c.id === state.chalisaId);
          if (chalisa) {
            state.verseIndex = (state.verseIndex + 1) % chalisa.verses.length;
          }
        }

        if (completed) {
          state.malasCompleted += 1;
          todayLog.malas += 1;
          SacredAudio.playSumeruBell();
          if (state.hapticEnabled && navigator.vibrate) navigator.vibrate([45, 60, 90]);

          if (todayLog.malas === state.sankalpaMalas) {
            showToast(`🎉 Sankalpa Fulfilled • ${state.sankalpaMalas} Malas Today!`);
          } else {
            showToast(`Sumeru Reached • ${state.malasCompleted} Mala Completed`);
          }

          setTimeout(() => {
            renderer.resetCycleAfterCompletion();
            state.currentCount = 0;
            updateUI();
            saveState();
          }, 420);
        } else {
          SacredAudio.playBeadClick(state.material);
          if (state.hapticEnabled && navigator.vibrate) navigator.vibrate(14);
        }

        updateUI();
        saveState();
      }

      function handleUndo() {
        const snap = undoStack.pop();
        if (!snap) return;
        const todayLog = ensureTodayLog();
        state.currentCount = snap.prevCount;
        state.totalCount = snap.prevTotal;
        state.malasCompleted = snap.prevMalas;
        todayLog.count = snap.prevTodayCount;
        todayLog.malas = snap.prevTodayMalas;
        state.verseIndex = snap.prevVerse;

        renderer.currentCount = state.currentCount;
        renderer.targetAdvanceOffset = state.currentCount;
        renderer.advanceOffset = state.currentCount;
        updateUI();
        saveState();
        showToast("Undid last bead");
      }

      function toggleAutoJap() {
        if (autoJapTimer) {
          clearInterval(autoJapTimer);
          autoJapTimer = null;
          updateUI();
          showToast("Auto-Jap Paused");
        } else {
          SacredAudio.ensureContext();
          triggerSingleBeadAdvance();
          autoJapTimer = setInterval(() => {
            triggerSingleBeadAdvance();
          }, state.autoSpeedMs);
          updateUI();
          showToast(`Auto-Jap Active (${(state.autoSpeedMs / 1000).toFixed(1)}s / bead)`);
        }
      }

      btnUndo.addEventListener("click", (e) => {
        e.stopPropagation();
        handleUndo();
      });

      btnAutoJap.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAutoJap();
      });

      let pointerActive = false;
      let startY = 0;
      let hasTriggeredInGesture = false;
      const SLIDE_THRESHOLD = 28;

      malaStage.addEventListener("pointerdown", (e) => {
        if (e.target.closest("button")) return;
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
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
          e.preventDefault();
          handleUndo();
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
              ${formatNum(num, state.numeralScript)}
            </button>`
          )
          .join("");

        document.querySelectorAll("#sankalpaPresetCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", parseInt(b.dataset.sankalpa, 10) === state.sankalpaMalas);
        });
      }

      function populateStatsModal() {
        const todayLog = ensureTodayLog();
        const streak = computeStreakDays();
        document.getElementById("kpiTodayCount").textContent = formatNum(todayLog.count, state.numeralScript);
        document.getElementById("kpiLifetimeCount").textContent = formatNum(state.totalCount, state.numeralScript);
        document.getElementById("kpiStreak").textContent = `${formatNum(streak, state.numeralScript)} Days`;
        document.getElementById("kpiMalas").textContent = formatNum(state.malasCompleted, state.numeralScript);

        const days = [];
        let maxCount = 1;
        let bestDayCount = 0;
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for (let i = 6; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const yyyy = d.getFullYear();
          const mm = String(d.getMonth() + 1).padStart(2, "0");
          const dd = String(d.getDate()).padStart(2, "0");
          const key = `${yyyy}-${mm}-${dd}`;
          const c = state.dailyLogs[key] ? state.dailyLogs[key].count : 0;
          if (c > maxCount) maxCount = c;
          if (c > bestDayCount) bestDayCount = c;
          days.push({ label: dayNames[d.getDay()], count: c });
        }

        document.getElementById("chartBestDay").textContent = `Best: ${formatNum(bestDayCount, state.numeralScript)}`;
        document.getElementById("sevenDayChart").innerHTML = days
          .map((item) => {
            const hPct = Math.max(6, Math.round((item.count / maxCount) * 72));
            return `
              <div class="bar-col">
                <div class="bar-fill" style="height:${hPct}px" title="${item.label}: ${item.count}"></div>
                <span class="bar-day">${item.label}</span>
              </div>`;
          })
          .join("");

        const keys = Object.keys(state.dailyLogs).sort().reverse().slice(0, 14);
        document.getElementById("dailyHistoryList").innerHTML = keys.length
          ? keys
              .map((k) => {
                const entry = state.dailyLogs[k];
                return `
                  <div class="history-row">
                    <span>${k}</span>
                    <strong>${formatNum(entry.count, state.numeralScript)} jap · ${formatNum(entry.malas, state.numeralScript)}x</strong>
                  </div>`;
              })
              .join("")
          : `<div class="modal-note">Start chanting to build your local daily log.</div>`;
      }

      function syncSettingsButtons() {
        document.querySelectorAll("#countModeCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.mode === state.countMode);
        });
        document.querySelectorAll("#numeralCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.num === state.numeralScript);
        });
        document.querySelectorAll("#langCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.lang === state.lang);
        });
        document.querySelectorAll("#autoSpeedCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", parseInt(b.dataset.speed, 10) === state.autoSpeedMs);
        });
        document.querySelectorAll("#wakeLockCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", (b.dataset.wake === "on") === state.wakeLockEnabled);
        });
        document.querySelectorAll("#hapticCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", (b.dataset.haptic === "on") === state.hapticEnabled);
        });
      }

      document.getElementById("btnChantMenu").addEventListener("click", () => {
        populateModals();
        document.getElementById("chantModal").classList.remove("hidden");
      });

      document.getElementById("btnTargetMenu").addEventListener("click", () => {
        populateModals();
        document.getElementById("targetModal").classList.remove("hidden");
      });

      document.getElementById("btnStatsMenu").addEventListener("click", () => {
        populateStatsModal();
        document.getElementById("statsModal").classList.remove("hidden");
      });

      document.getElementById("btnSettingsMenu").addEventListener("click", () => {
        syncSettingsButtons();
        document.getElementById("settingsModal").classList.remove("hidden");
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
          undoStack.length = 0;
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
          undoStack.length = 0;
          renderer.setTargetCount(val);
          updateUI();
          saveState();
          document.getElementById("targetModal").classList.add("hidden");
          showToast(`Mala Set to ${val} Beads + 1 Sumeru`);
        }
      });

      document.getElementById("sankalpaPresetCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.sankalpaMalas = parseInt(btn.dataset.sankalpa, 10) || 1;
        populateModals();
        updateUI();
        saveState();
        showToast(`Daily Sankalpa Set to ${state.sankalpaMalas} Malas`);
      });

      document.getElementById("countModeCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.countMode = btn.dataset.mode;
        syncSettingsButtons();
        updateUI();
        saveState();
      });

      document.getElementById("numeralCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.numeralScript = btn.dataset.num;
        syncSettingsButtons();
        updateUI();
        saveState();
      });

      document.getElementById("langCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.lang = btn.dataset.lang;
        syncSettingsButtons();
        updateUI();
        saveState();
      });

      document.getElementById("autoSpeedCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.autoSpeedMs = parseInt(btn.dataset.speed, 10) || 1500;
        if (autoJapTimer) {
          clearInterval(autoJapTimer);
          autoJapTimer = setInterval(() => triggerSingleBeadAdvance(), state.autoSpeedMs);
        }
        syncSettingsButtons();
        updateUI();
        saveState();
      });

      document.getElementById("wakeLockCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.wakeLockEnabled = btn.dataset.wake === "on";
        syncWakeLock();
        syncSettingsButtons();
        saveState();
      });

      document.getElementById("hapticCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.hapticEnabled = btn.dataset.haptic === "on";
        syncSettingsButtons();
        saveState();
      });

      document.getElementById("btnResetCurrentMala").addEventListener("click", () => {
        state.currentCount = 0;
        undoStack.length = 0;
        renderer.resetAll();
        updateUI();
        saveState();
        document.getElementById("settingsModal").classList.add("hidden");
        showToast("Current Mala Count Reset to 0");
      });

      document.getElementById("btnResetTodayOnly").addEventListener("click", () => {
        const key = getTodayKey();
        state.dailyLogs[key] = { count: 0, malas: 0, seconds: 0 };
        state.currentCount = 0;
        undoStack.length = 0;
        renderer.resetAll();
        updateUI();
        saveState();
        document.getElementById("settingsModal").classList.add("hidden");
        showToast("Today's Log Cleared");
      });

      document.getElementById("btnExportJson").addEventListener("click", () => {
        const payload = {
          app: "Divya Jap",
          exportedAt: new Date().toISOString(),
          data: state
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `divya-jap-backup-${getTodayKey()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("Local JSON Backup Downloaded");
      });

      document.getElementById("btnImportJsonTrigger").addEventListener("click", () => {
        document.getElementById("importJsonInput").click();
      });

      document.getElementById("importJsonInput").addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(String(reader.result || "{}"));
            const incoming = parsed.data && typeof parsed.data === "object" ? parsed.data : parsed;
            if (typeof incoming.totalCount === "number") {
              Object.assign(state, incoming);
              renderer.setMaterial(state.material);
              renderer.setTargetCount(state.targetCount);
              renderer.currentCount = state.currentCount;
              renderer.advanceOffset = state.currentCount;
              renderer.targetAdvanceOffset = state.currentCount;
              saveState();
              updateUI();
              syncSettingsButtons();
              document.getElementById("settingsModal").classList.add("hidden");
              showToast("Backup Restored Successfully");
            } else {
              showToast("Invalid Backup File");
            }
          } catch (_) {
            showToast("Could not read backup file");
          }
        };
        reader.readAsText(file);
        e.target.value = "";
      });

      renderer.resize();
      updateUI();
      // Paint Frame 0 synchronously right now so the mala appears on the very first browser paint!
      renderer.render();
      syncWakeLock();

      if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(() => {
          renderer.resize();
          renderer.render();
        }).observe(malaStage);
      } else {
        window.addEventListener("resize", () => {
          renderer.resize();
          renderer.render();
        });
      }

      let lastTime = performance.now();
      let lastFrame = -100;
      function loop(now) {
        requestAnimationFrame(loop);
        if (document.hidden || now - lastFrame < 33) return;
        const dt = Math.min(0.05, (now - lastTime) / 1000);
        lastTime = now;
        lastFrame = now;
        renderer.updatePhysics(dt);
        renderer.render();
      }
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
          lastTime = performance.now();
          renderer.render();
        }
      });
      requestAnimationFrame(loop);
    })();
