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

          this.material = "tulsi";
          this.targetCount = 108;
          this.currentCount = 0;
          this.countMode = "up";
          this.numeralScript = "en";

          this.advanceOffset = 0;
          this.targetAdvanceOffset = 0;
          this.dragPull = 0;
          this.beadLift = 0;
          this.beadLiftVel = 0;
          this.isTouching = false;
          this.touchLiftCurrent = 0;
          this.swayAngle = 0;
          this.swayVelocity = 0;
          this.targetTiltX = 0;
          this.tasselAngle = 0;
          this.tasselVelocity = 0;
          this.tasselBounceY = 0;
          this.tasselBounceVel = 0;
          this.tasselStretch = 0;
          this.windTime = Math.random() * 10;
          this.windGust = 0;
          this.gustCooldown = 5 + Math.random() * 6;
          this.gustActive = false;
          this.gustElapsed = 0;
          this.gustDuration = 4.2;
          this.gustPeak = 0.08;
          this.gustDir = 1;
          this.silkEnergy = 0;
          this.silkEnergyTarget = 0;

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
          // Load instant photorealistic embedded WebP sprites for Rudraksha & Tulsi.
          this.loadThreeDRudraksha();
        }

        loadThreeDRudraksha() {
          // Instant photorealistic Rudraksha bead sprite (embedded WebP — 0 network requests, 0 Three.js overhead)
          const img = new Image();
          img.onload = () => {
            this.beadSprites.rudraksha = img;
            this.render();
          };
          img.src = "data:image/webp;base64,UklGRuhCAABXRUJQVlA4WAoAAAAQAAAAFwEAFwEAQUxQSJsJAAAB18WgbSNJGw9/1Lv3IoiIXL3T39NVW5WKlFLTKEmSJIlERIQQsnPmDt62bVLkxtq2rCbJbI+ZLg8zMzMzMzMzo+3hGTMzSmYQrM6IOP6eWhpPdlXG9WmtiP5PQPif//9L2nlPffPLh1c1/t/h1JV03H/JWMbNOX3hBOe1PgETVRV4cpTzVjFyxQUnYv7TX3zx7BkN/9SuOowoHS3yVU8IofcbQEQMloz7J6eupePRtxdNnX32pVdeuKDXJxOf6QNhjMLQN4+8NIAoIzVycOKYijdBokgUxqgrb2+6Y9z7BmKMWRkpjB7pmzCGqSsRpaOJmMQYowBH73LGggFMjH9qEqMxVuXwpdNPmj5z1sm3fA3CCTSNsLThiYVKJEVjrMoJtjbr63lXm3zKRZeeNX9Cs9FsXaCmpGmiIyWKceLb/J5xxTnfHqLzfwaHBYwybXNXtp25CTCJMQoj1ShV0+P1THsFohidzcwo28jVefYZbaXcTft6cuwN2pS+srWRR8Upb/y1Ze1n5xchhPtoU4GRJVm0aB2dN59au4tIJUZOyZ/6KyCiqhLhAEY1iv2eO7Ur9qJKZ1WUqlQWjVLUigyp3b4XhLEalWl2/IHT55x2/xdr+w/t+uGGZmZcsgfEyMJj9xUZ0foJolHdFkUkipqZRFjWyobJfUQjG63N7nGZ0HuISFZGdjezoFiDkJmRv7LgHtpkZ+SWDKgdUcsP08Fm9V2LkKGRx6pu4jOiliNmh2qVNu5lI1eFU6rsoTZIvnxUXfWlIGSr2WCrqoo/aBsZa2yaVFHv0CZvlYHZlXQGkdwVhiZU0LijYtmDsLGonPHbUDI48lzVXDyIksWR6ZVSvA5KJtl7VVIsJRqZrGyukOJnItlsHK5VRvEDkZySnqqo/Uokp43JVfEDbbJaOC3Uemefdfq0ouRep01eG9uX9BvAjutL7RzaZLlEUVjcLK/6IdX8MjEDsEjflNK6h0jOR45PKalij2nWIfQ3y2kWSuZHvi6nOy3mHsLsUnoHyT9bXEqfOQBlShl95QHh0xLqOWiWfyhzy6Z26k4MF2wryqR13ff9YLgwclt59LwxDKjhQ7W+oixOPQpRDDcqM0riAoiGJ6NdUw5TEcWXwuflsB7Bmxonl8H/IbhT+KsM3rToD4QzSmA16hFb3H1FP+YQ41Ct62oHnTLc7Lqizyn7i64L21CHCD+Eri/2Yw6J3NF9cxFccl3X1debekR4u9taG1A8ana8t7uKjQg+NfZ8v+yPL+6b1i1308arRucvxnVF0WfqFkxUJSpHp3XDTBT3RvbXu+Buon9o80J69d1mDjIbaKQ2cT2GhyNnJ7boOIqP7I205oPgY2VDUrUDJjjZGGqkdAERNyvTU3rDHBW5OKWliKdeSOl31E/KspQWI34yhhsJvWXRTyjzE7oAT0UeSah+DPOT8GNC4W2in4w9RUKnIp4abCQ0zjBHHa0nVDvsKGVtSLjY5ajIoynVDjtKmZrSGQheVjaHlNehboo8mdJ8FDcL81N616KbjMFGShtRNylrQ8KNIcxRf6Q0CcNRq1O6iugn43gjndoOUz8hLErnDQRHRx5PZiaCp4XvkvnQoquU9akUezBXGf1FIo0hdx1vJFI/5q52K5Gw011DzVR+MHHW/loqVxFdpWwJqTYGzDxlHKqlEt4gegrh0mQmqLnK7EgrlfAx4imEz5IZH808hdrUVKaK4WrhhURa2019ZaxKo7YJxVt701hCxF3bkriZNt5W+zGF2gE1f3FlCuejeNs4WE/hPRN3RV4MKS5D3aVMTWIb5i1lTUhyu78ij6exxV/CGWmsQr1lOj6Nxe5SNoY0XzJxVuSZRE5FnaVMTqR2wMxVwrsh1WeJnjI90kymNSzqqMi5Id2LiOYm4Y2Q8v1EL6ltK5IKNyFeYmZI/BbERcL7Ifl3ER/NTq/Wb+Yfw3rTCzcQPXSg1gWtNuagPUUXhI2og47Xu+EjxD3AuG5Yi/pHmN0F81D8G7mzC14lOkj4sQuWow4ydqRX7HLSQL0bzEXam1zYgDoIY1J63yEegnHpPUt0kDHUSO9KJ+0p0puOOkj5M6TfjJh/Ii92QbHXR+d0QfgRcY8Re7rhYYvuEfs1dOMc1D9c2BVFv5lzzA7UuiI8SHRO5JHQnfXDqq4xHWp2SVhENM8ID4auvQZVv6j117onXALRvCJcGrp51lZQn6itDt1d3C+IS4T5XRbClI2IQ4QfQ/fXl6PuMIkTSyA0tqLeaHNPKMVJQ2q+iPwSSvJ+oiuE9fWy6IlmjlA2N0Jp/oL4wXR/byjPm4l+UE4JJToVc4OxpyiTYh/mBeH9UKrfI16IXF4uH/nBmFIun7rB2FWUyxI3RHsjlOsq1AnCzJJZ7QVhcSjZP5xgwqSy+cjEAypcFsr2SmL+WYSrQ+k2h9TyzkRg/ymhhJ8h5pxG4MgzjVDGtf1otgkw/M2FjVDSs8wkz0xh6VWtUOKL2kTLMIP3J4WSn7oKRCyzzOSiUP7F9TsBEcsoE10QKrE48/PjgOZT5PxQmY0LfwDLpcgToVIn/4XmkfB5qNjaLrMcUlYXVRNuJGaQ6eC4ULkTzTJIuCxUb7EPyx5lbajiX5DsEc6vpJeIuWMcq1fSpfkTeS1U8ji13FGmVFNYaZI3Yj+Hir6cmDnMqqpiK5IzkXdDZZ8kSL602VarrjDnANGyxETYPT5UeetbiJoVpipRgM+boeIv2QkW1bLAROg8+MmcUP21K1cCaIwiapUmAEe2r/rs4VObIROn3ffnMJ21uswYeOeMCfWQm82Zlz/7wXfr/oNWlRlPtULGtl5CqklNTwuZ+yWxioT2wpC7ta1I1ZhGBmaF/B13kFgdJlEU2DAl5PCUg0TtZCpRy8tEGBn/vr4Iedy7BCzGGIWRqv/A9N8yS0NFgMEf7z13Vk/I6AuW01FW33vFbyBiHUwlKpj+KwL6b6haFIkCMPDlBc2Q31MuefyJK+f1hBDC6SsAVVFj5JHtIP+CcXwAO3HC6DvePbsZ8n/RF8cY2d7yybXT68Ws5aicKOGJZs9i5EQJ60456Y5337//9IlFcGLjpHnzZ01rhc7F40CMIqJqY4u8GUJoHDAZxSRGsU4mPF8E707/RhlVoo4W2V4LIYS5RlQz00hHjSIS4Zbg4XGXvfDxD0uXbR0ATNTMVNk1PnSct4/O8sVVV7y3j477zwiubix8aj2jftAIozbuX3bgWN+SW8eFEEJt7gOfL373inpwdzH7sR9Xrln25oIw9nqrFv7n///6GgBWUDggJjkAABC9AJ0BKhgBGAE+SSCNRCKiIZZ63WwoBISxN34+TJvz/mr9c7UClvUPy39hjj3qj9s/cP8f/z/ZZyPdb+S90X/5f8v7Q/936nv1L7Bv7Cfsf5pPvB8znmuf+H9uvfZ/b/Uk/qn/B63v0HP3S9PD94vh4/tX/o9Lz1AP//sFn82/A7v7/vPgX+RfQv63+4eu79s4V/Tf6DzM/mf5Vxo8l/lNqEfmv9q895+j1h/H9Be111aPG3Rp/5PFIoFeTT/teVH7L9gv9guvJ6G37S//9rToFwhoFwhoFwhoFwhn8nXyzNU/s7xSfdCU4vZCWKrZVhkxNptWOCuENAuDbX1pf5NKH0l8+tUG0nZmEfWIHXshMbbmi6ynwvKaKthv0Ho40Ev1iiGqC3bXHXTRojeSgNM1BL4adj7sPHxizUiV4jUhg9y22p0+YsCd2uVoZJpaH+UeZszbzfLS7zWub+6XeiI/EdmVkEwqSCpxKXHNhJbh/YOZye03UcTIjxbJm3I+PYNIxvSMbH/LJcyk/pw1SIQz4zbwyLioXdhw4alPet4DqOWsZg2ZebZY37kpFWu2IzCfVwc4vDcJMvE+0/5k4KKV+UXjcVqfKF9HVCatKdZXps3/z7uUvtDcdRaBuHNQGkVF+cDQ/da02FU1ScMdF58ShV6Wc9WA9jhcc6iNTQpVs53/jUSPMXdc7HJeOOd98R9hffW9UkrYjZfwIioary1/NdP9J027xCstQf5IcgTI8AgN1xjRLKzm+RD+YJUNo/kN7lR7v0ByF7P5WQkishZW0iRZ/fyvrWmDvhmEH1lxlpwmHwyOajCHX1VhVZhjL1NOnMDbrxizTqCtX0/DbwsKElTCW39NQ2FP19fbIl3MnkD2h9fn/gy+2f/3yTzo3D7fZuY4Bg1//cjdiPzxpsOgH6mx6x2Nh4sVtglFF6pIO3wDy2RgImL5eg07uYao4ttlsljbVxFWpsXrYsXVWkv5XD7Qwuw9EV+L1DQcUbow/23g/kUoD5ctjv7Rl2DKQtHli7xnCeU9ACOYizaFJ9CHI0Wj/NfqIf6hnPazOyAPwe66J8kC8tXlWi0kuuhvdDfmA3XD2/OnYFmWjRwnJF1Mrk2C0H+9Rfga/SM+vDf7rK7KhyYkKZ/GDesVoRXG9gvvI8mcAyRXjwkrxJg0f7YI0akwHTKoABYCyvYrktTmOahfKEW349+PuAiDqqFfdCMWa7p07gUd61Dv5/NjXMnz/ZPAOlHBqs5CziB1RnXy1Q3BxK/zn2POC09fWkHqO7pMSnKmBk4DvYC0vRU6diocsk/T5GHnyC6ICkco5EY8ZIh0HDnTe+GgPCgR+LO9mHktCUgXZEe+BLsOSsFqRr+laVtMhopPs/N6Dpyc9Ht3L/E7QHxWwIrOQxy5qstMCqNIdlXmcIpuQfN8iIi2FkkYCexWrjnvvi6heIXTGrNFCHvyiLEvDIbGH9kkf85lMPGsxoIKYqNloXTLfEDy3cyjT7GfjQwIeHJQJ1e7MO7aeBkeSc2YrIOuzaUzs4gzqwZRB5pWaZPAGco+pFOHjGzw+X3kJgpifC5/iBcgmAkSb3/Zp4Xf6FsniWpb9MwIq9xZ1L/VUhnes6wF0f0HpqTLMvtt773R45EsrNiKEQE+iz1Q+EkGsqQt0c+OBIqElo4r3oN5FaNr+b+2SIJgvmzHsrfbbFL7ax8eMxKJnnOXvLLtARc2DexllWC6nF8YJ+VZcvcbMDHagarV+nHQlR4YSB8kW9AUQYEALB8xF16IU0/V/SF02p1fNCAjmaPjAfWchof8qIUfc75CODhyLUacXaNShn1FToJ6GWBmvqMXaIcvW4+SklWL5mZ89kumZ+6hvyZBqw5M7IaDrTn7weMANLHztMNfgZoS4gCkXhEKF1W+w4tniFtIZIfGUqtOgXyNuBxrIvgTUtMyr9byiiYApBwbZpHTAO6XEl884X5tzbY3m8vVtYd0MsTg4t5MmqeCbYXezOxoxSxo+aNhBrCztD7wCRVp0C4Q0C4Q0C4MgAD+/+GsgA+UoAVuOLpN+3sfQ80Dx8u8H2y74/3JjinrBDLk6AjikSB40P5QZX5nkapns72cOB7OKuWfbg2uhDAV2vwl/8cXPll40vIaLnNPNW3MvF39axjZ07QDWJl/lBVV0I1yoZ3v+7zYqfSMfdeWt40FZanu1z2Fm7a374aTS2f4edPyi3XYLWlcOUTYm26x0/z3/1ow4iOXRhMmCXLmc1Y4XX5cZ0T6tmwbtu/434Ru+ATFDonVmzhS2/2o/njhwoJ4680s174xbtiz+m6PRYyQxnqUATjbaBSyYXWcG4N6QuP6hjFLD+cB5aUlk1/+Z3+cnclB8R4NH3n//g6r3CP6EQpsrlDm3/lbWJJY0yPvLSPurjJdzu8/C5Fclro2VsKuNPJjmk1LbSYU9cEivwhvU8ev3N2eE//0l7ER4NT8M0xyGv530r4rWPwg50ZuQfgKn1h7cDPuzRzJso/gpYbHim8zmsyz9muk4ku9T9eJNUbijUIZ5WD+d8RR3fplDUvbR2lZJs8EVTpumGKJlVsvDertVZRnf9pH8AWrVEUfAnhi9Xeo2hYp50T8ZzNbIYwW7EwfG5QzKCLHXSXkK3F91WZCNsiCjuZ+T+rx4V876Q+WT//AEC15xdTUzzo8o75RgmxYfbKaDaKL6wr7Cy2Tnl/SbKSQZpGB7ArOriF2IUlfiDTHBXqgkQFPpW8sOW0/QmpOqC0rcJ6eVBPseSZ/lxqSRKAFToVLE2FdmbgbLLYDv4iCx8m7OZW1SRuY0ohMyLCOwnbtPBDrMOPXD/Du3/AV0LMIaO4DlBQv9VfELMk21AM4FblCHD/05Q4PSifeYk6ncecLgt8ILCuGfpT4CItQDkIa+FGj1DuuKb9ryPHxSShgcvxxVrZCqwn/BHMeOfV7lRnGvD9G5idqcQbGlV+seT4cm8WH9UjNcCagRWCeFf2k2sB5MPypbNQVtMHW0KLTM6kjeQiQksf/d+yEiM0i/xB8I8fEDfVPpMT3gPYIYJGo5zv13rDRrDYXltV9OCtryspcl2WHgtCmOPKlPV0WAQUIxToVcn0tL9wSGvoh7BIL+t9T0mgDNO66qMTvPxZlzV0HShQPtePhNBIoXKBc7mMQ8f33WPKuXaHIs6AmO5wNLwvxbaLZEV1/jYugSSsn7OS9b87bS7xqB9hpzDfXDADosiYxNfXVHOLySllqOH2pjZMYpLeHA4PlIvRejzI4kq2ZnyFzF6zACW2FDi3l2/RBY8xaH5PHCCkQJHPr8grWEKr8YeG1HfDQ3tTUo1SA5atE1P3YA8bvBxWpnzjf5i7pQz4oV7h9GuLJ6uMSZiug/0rLoz+SPfIuIVhyIRFaawTT2ulW0l2dvpGpWA6UA/BoJbimSp27vayQOmwrOiFSmUjD7ZCEEODNjp+pDt9hq72wqGz2ChSNm0aANZbjhS0oSMGvlgLff1bOWTLJL0KW3ty6Jl2Kt87r3iXMk2e9qGknjN1YY4VAp/ZSkxkAIsSHM7ZeAvHSw+dvIWi6eO/1vi+yF/oSuTp9Dv0L4jeYYFFPxItP7Rl5fuAtLGmURVVuHFbdvWFhVM5WYdl+bXBtP33Evc0ZQQA/NI3SqRnZi/By4z6kIBGJWLejKD+2EKl5fOeXBa2LZTvmeiTERsLJcYRY9lJPawaVh+Mm5MnG2ZkcXFwfgG5YYb2fhQGCWY1c1Vf8aXY6/i1kyZUX3OxyelkmSWPaFuqnEZPBJrUPLhS+1nQ60GVgJijB6oLbCmVsYZ+r4WenJCYhV5zPPsy+qLSpUH5vAA9HKmbkw2s2SAKBaBvaA6akQYFK8ED/JMvXwEXrnYT8GRbFNZASzvjj/j4gZsUqLCC2AkEhtayJ95M9hNlCiwfAeHpi9BKS0WsbcHIX9xku1sn70K4Jxgn9sYGy5Srrm4YkBvCc2uEzJ4oq2McS5sbC3u0np1Nh0T3VWOugUEDB3C3CKv5tvn0Z+0diZccGDEnzX/lXuTKZTIlN7sJV50db7qR40jHjxE2IKahNACcvERPDlHDxmW7uQJuO/JabCJABhAWvtuidTFQnptFtAFLAWMVmNm0greALMYmNOA8+B9EHkoRCOHN750l3NhPpLMbmpo3VHQHfsUZ6q8dvT52sCKFKxpAbtDCm1C4XdWewM335iauunG0iX2euJGfZh5mtEasbC3UH/ROAlyiIZo/7NeRi5Au8a+VgDGB22FUSgXD4ndF4Tu/bn6F5dJD9R/qXV4bnPZWvzWCQ7cRygL3YkRNXDeRE5T3EC9vxb0gZhJZBl93OqiiQ6lAL+bM5rcnJeL+wm8pag2rylZDf8gvGxFKG7gTP1pm6RJJ8ngyf8UWW9kc4GT10kUEZrqIj6BQ2hljApsqfetSAW+7gm/ARMrg8jAbXKylAhkx4vtAmKe46lZRnLBIJOIxC+Ih2qa7z/J3IttjGInisIY+HE77V+bp9iooTUA/r/7w9WLjCKfaYdjEVRrF7h/7JgCFdI15yzRrfLcQouhxaywa27AJGb9vuXtSX/PeEJf64unbB/PvteGJkTbzgIXZQQ8691W6Ci2CxhUjr8WMZzYSrHqhZwDdCjYrBKFIw0w2JDMEiJ2JffNkGo3RTEvEMZa9AiTLku4GlmZZJAd91Xm1PeFMk4gr17q36zXP6IWiJ/oYfDArWDDvaIeu123erlUGtt93ubq4MzRkxMXhx4TNEbIjri7td6DCzWucZX7xOdoRNXxi1fQFHLSGgLeNypVTl6iWscen4xiBGtf0f55TsI+pj+Ya2xSHNeM2AthFsM5Pbi510NxEY1EUfV/yP33vJ9/zSqnb2dUX0Ly7FVWojw9r9C0CgeSWjCp49Oy5dYDxszprYOdU6lZxT5aqWjszNwu2FuV1iihHppRfN9U7tiqvcAiM0V67ykMTblXbYLwuMk4Rz27wm4VDQC6l3itRcA25/wRwaIrqYpLYJaFZnkN7usG2ps59FKI7rgBbslVQKHC7jzIx7hieePB9lCe2nz1iP2vXoSyqnX0kzfL7wCCLPMZlt/tdOFEoXcKB0R5OQSIUgRsKSkHtL/knyJWYto66GsFEZQST0NyYh1HVW9uqW9MjKXAzsXi5SYe7v6gKz0z+t/XClTDzOa0QiO2oL2wgK3XIuio6NaTAR9A8xvkG4vzt+gxAFtnpyfGicg5t3QLcLCsHXAMUrVRe+n/ZfvrTYg1nzGTXpO0rFmVQ88jn9y+EJdTnhgLmFzG1d8/EDpJj2bU/4Jt9EKdt4gToQ5UwqQAlDfdjuebJOQLd8w9pWdQRL02D7ThVkMmpEmJfz2/DLVPsvvd8UiU4fSwv/YjBMChpCQvvGypBR74Zos7Q/EL0OnOPwIb0qRaDPy4CVIsjEMYS7ZFLdseZubWTn+VL/Kn5WFP4TfF6htqyF3Cl+Z16Brin0Fz4KGF7M4jSQi3iAQ16Mg4JDmzKx5h3aCaTYLMSWSCOW3unKnYBE6GIK7MbsnUYenhRvqDx0mgknM3NRsOfWVyhs6IRA/UkjpBENIOD5pQ11nJ8xWyCcjy3xbgDSvTX8J29AKe75/2FFy9g4JbbGZXZ7OLhm40qeh0/ZfLcKWpXiVWDu3DKC1rJdJ4H5jcYNZ2W4a+Vl84AnmvUD+Kc0LGRh8O4KkYxRhsz/mWORvAoAF+/GBy7dxhVquLlq4DUVtC7DeHZsVaGM8XB+y6tDTXWC6+Se3ejML/aF71BiwTi89kJsEwy0KbnqUveW23Sp7A2y1TjzI/lZbtSUevraGRu+E8DOvix3r7Dn+jhpqgSeOINaQmI1FvR20nBqjLSps++Xfm+dMjgCnHJFJ/mHGFySZkzMTehg0Jh4f/owgP+ZweIBE1dFyzvbc9iu6rjKSY/6mjCpa8ryCwgyyjDtnxxo2+Eb56y3QlPinYZYfXgMSnZfbVtbLYAsrW+gvWcutuCtxAsNn72VhQEJSoJdL481blWYnjiXyxu4tIjv/z/HfVpJrPmOGEG85D/VHYI8MRZljJYpRk7M1u+eJ8V5x18J2Ly5llXs3Rl8e14kiSTOmjVpEqG5ryESK0EtFmu/SHe7D1CWeLOBXpMRkRYNjEnKUcSY0Xa/h0venE0stMSzsPTRUYdgXK5/7nbeKCJTleNY5w2AXDKiheTaguuLpsBrBi5FBH8RFGsLoz7NB5Q5VB0Vg1jfHn4v060GT0INeIKfE2KZPZYMAww1ov9fYPAxLkzzzIXugM0oy7WMOW98NX3NOG6XxR5NKdhZ2mo9wzJ10zh8qkqVBlQ+oKBrV3QdfT3sIWWEbY18hQc5HsA3dXVIsJzkJdmKEQah4K+JX9KyUZg3Cfcz/Fzz/1Xln6ipYl3LpjNurBQtrgFuaF4h88O3Q+IjjoiKvw1AzWasHETGcxaUTgYVwJu5FCTmTX6M0isr7eUiF9dOJPjthXOEOHzMERNiKkKYBEGHg+jTP3RhJJCBjTJJxX2PrSPFHXO7XgKJHCEXacf7ftHmWpHC/vf+izRyUbBVr6lhxo4XiuH5si9keYD5EFhnjejts5vDGZq+Pzr4HG5pjw/V4//tDtm9AZCGKpboAqYNyEY2H6DvEplXOtKk8go7/Ca62yvfyy+Un0qjK/adclgFQXTPer7WKL8dzH8jHbkQDLga5HZtwRuJOZ/eRc/d6UUQ0cOYgXRvNKBTn1AlKbwNVpvjy0q+xF9Fh2Rncwh1mJ/HgxfNdug/n+BfGAu48VMCD8w75eeY+kO1SEBli/MUv6yPSTR0Age11BxU6k8z9kvmgzkwmYGUgyUm6HoApsrGnKYMAuyLpekTxg7VdtSNa7/67qx0Zc43aPwjJR7APnWVH/hKhwRTsZc++IhbAJHgeU5gXkCowdD4k8HuWTww9jq+3R1R3AYfH0q8LSb3m84ciRF4us/EM5omHyNqz4Nd/dGIvdfVFDmvWmZmcjVvPGr9v4hMD/64CW7igpmr0Y8YBwxqBWucpWWturieh7CTFTKZv3aU5qPy5vxlJYkaMLg/m8jQFe8a1TiBfB1qPD5KgNp9iwZ1eSLUqPp2gRmd8Is+TxQd8YyppB56oJTMg4oJl8/fIX1aP41GMoFNzwVFJOgFm3B8nrNwwnA2I2uFTm9F1vp2myPXThfB7HuyDX+Zkbd+fjnPRnFue4WVlYqWfnc9PLoPVII9U6VUTcrUAf0wei0rlEUk0sl7OkGSKewAFSKH0h7B3IMSd1eevKqvYra1XTHXyDjpP94nFrTAYCdXNlBiRReGaQxdsYbzX0lved/F2bSyrraF6dD6+tdCb6CWHOTQjm8TKHN4MeZKo4jbQEKIvQblIYu9Y6CucFlSwiDzW1N5eE7P5mVLHBM/5+e6OF0F52FHDzp9Ja57CakH2aazgMOr3Qof9s4+pMWgFxWoj6a0DY+jNjCa6jIQb20c34FmLH6e78Ktv8EitqesRnJ+Cx2beyaYObxGzlzgv7c+kGHDpPi3IlGQqqGZ8/6juxZROme+9gcv3dCPBRb8NNvzDL5v0wYEnlNOauU8+DPhlGVNR8KyocCsifyXT9ZqrjVG90u4LJKF16Yy3Pzhu5DP8956C8S0mdMqVSaJCPyNl/cGyRfBs15P5LxZ1itgXdR7h+hN3954zWYkRdXT1lGGi0MvVr0XdB7M00zwOeaVbC5hwWhK4p/GdZ13QuK4QY3ZXYChzYMEUYeXW7KQ4X7TTAqfC7/P/++yGz/yGJ5UqmShQkbUcdJSRfihR+g/VmIz3ngTYT8+Rd0kUR/TzBt8nNrf5LXVjDwwtdRwh8FguqC9iB4HZSI9P7rZ3294GOcf4F2SGqHpmhT6fWyW+Oz9xXrqDiokfe20XYtpjWGi3c6e36wJCVs+II+ucJkHdjF9l1E4asex4krzQPKfpuaCazMBsveDMw+WW14WcLXT6dVSgMa6khOlkkaHFNm/HFvn8MDXUtd6iTn+w28dBGgLTwo7RUOWSW1OYRVdTcKPg1aOZnTNbafPCXrGZgS90dJsmdvpWUMOf6o0r8LYamqmXH6d0yZ/flTVl/Je0Evozy4T+4mHaeCtP5XLeDRnvNl8INDvIMVqOatA6xJTRwZ2670jmtI8qViV7Lh0nsT1A8RBegnLVA9GRICF8vUVqhpjV3eidEpFUjSx96Zef07lU2wfajFWpSS8hUomrM+K6/prPfkYmn2G9pZhk8CBQZ/BTvZ2qDxaz2lByYDPkdi9gn8vGSfkvorJ4EeeYTDVqWVZ+kmTY70jpdWcjjIbam9NjzMyXh+RpGZNy0pEBhPZeBNbWbiADSBsOur5/pp66QnIAX1KhdnuzVsbHJRlDaBQh88vTlfZvdpkBqPXvm7XeTbvDYbvpn8HD4JBrN+tftdvyV+Hser6Pl7ceB2NybiZQCFKBHPpbyrrV7UjmVxssd+kaHBk5BbJBl84AiDu2FXlzKlN5ZjkSvVAHVbVw1xwD0ODalz6VPLnCUaBG13vXzM/nGyybJyEvIGAl7GzcwaLlEcFjzuAKdtSbxOI/q8XKHMc6r85UxQPWxYAErasAwNYWMTSUvTxs/h2p7pY9dkqOFbR5DL3QeL8qlBKEQ5P2AS6rHQD4J5EcTDuk4u8D6MDgf3P3xpBdDHatOmXvSpj57GuNU6nvB7INkAUlMQy69dLj5dnIFEt9e55g2HU6zJyQSC9HB35VputDj4SKaHzeiT+6leTTvEUTcOrd3jMaxP+pOSJYbJI2kPsXeEWvf3vGomemIbRl9p1Xkmd7PUfTi23XogzxsC2TZ6DzsbfStslkSI4c4NpesqVfc/pLUgyi9OgkBgYEynwV8XNhLfdjwDDQe3Y9nKJ8eI/t9JQIYoRN0ZW4hH+7h9nE796CNd6UsrQXDgehHti6TBo0EAl3tsHgVhIq8RCqo9OYBw6LRZbFOzvSsv13yJjoSlN9iZR1GVy2PbubhDslZPZv6U87+WwT26I0KGbKTn9i+sKjKNxljaC0ONlGrgZG9DYtBT/mNh6qRRjk9MS2Tn0gPjbcDPamdY8PX0+sX6sKyMhVYfya2tiRXREE7ZtDWnqA/jv3MqAXjyqagNBC4oUwlZctXvY6ZHm/vO6D6AU2wKZuqI9PTMIPaWoWfm8AbCDP7nHsDGAMhBjLinwhbiUXfTTp5edKidXwb6o4fhEPn7+MTrzaYDyqjvlTaRs68pB8w+CTG2gjK81f/0k9/6Ep+LkCYh1BtrcZxX1mkfzDRCP0XE7QSI1WJG3XzH9LQudqULJ8NQx08ZjIp/55jhjIj5b7W4ypKPCNVliuTm2wZb4jKbMmO45lgnYJ+7aMH7AMExNjp/ivR77IORTtFzGFjTng2tVJfe29ZjZK59Onm33DlY5VAWbirFNuw/hGLZe32LcGFoe6CxEJURq0jQkQPg9NMREHWwc1h8ZS8NyWxmXR/zCZibiGs4P5oby3Ke2dFy3pbH6PCxOqFTFUlPtO7oMIVIX1SDLmWfHWEV/+j+UR4QvxStLq/663tFYph9Wpos4QCsEoGhmdU7vMIkAw128Qmvzqogjis6KoJ9AcagwkhjJbMrLw5L2Ztqk5Uad+CkX4KRQTbDhi9WAP7QqrQDHk7L8Jdg2XB0cY4iDNKIHi0PdiGrMnF2cc0xo1HnvwRdqRrGdZZNOhV3uzm0g12Z9fl17HAIoE9XhfvXyG/UCCYHKk/73GOC+oZ5EbqUydr77hTF8v8Jdhm2oUZLOJIQS9RBEPz7e7Zt4a3zccrQK3IQ2rMDFiRWXkHCG2IPiOef18dTN/hVgEeZBEpesnhThAwCGrVpJNFmQhhppzBEUVh07IcUppo9AUP5N3lguTxvJNyGJIuPoh1GJbiPSvRHnGd7tKc7CbIfz9OzZSM43tvc+cShmZkkedcsnttAvMUVQA3uvAxKB0d019O3GuV21cre3fpg4T+PYSlTS1cwDRAxkgAR3QPMgBsJRQe6+SdFWqO3nS0IX0yWvebooJz9iTqI6FBVyOL6RJGCYzy0UdDkQXuhqr1TMJjpltnHgqZ40qgL1zEP0jAKWht1AeMNnPHVb+HD8OraPOHENBFLhSbE6caichFBaWDlx/o0SHGZNg2DW9vNbHredyn6F7oR3qFEucJyMa9lX2ehFSzZz5vZh7mecZy7EItT64PyQoAk5fiLigegLZT3vomsltX53CDxGxSfLzHoGQEEKPoBsi4NlHP7a3NaumhyOdEmCsWnMkiz9fu24y+BKmp0fg8hPLXXOF8yNI41yfFGsP+RVmv5eSnqWmT9CiiJV3Mk8/J5h/5njTRl56AsPLCE9ZXVDxqUsZnXK4nKxeTJY2jb1ELNsHbZtbeEP7cE3ZFY1/upcj00fXd8tuHtfu4ErAIL9DJpsLBoBj03ueDkDqM8TOO8riw24kM8/nJdEi6woWFe83RzudhxoGAklAjDlwCs5mQFAoXweklXCayQMiICgxNbFTRBjEEYDEX6UWyujyRW0S7pq+6l4OvjQ4wLhOwxK2rGUieNtZPb3mlLuLtDD3l/JCQQkB9U1+CHAenvoqD+LxtLFmqbBRFmDypn6iKU7gTEHoaFLJuxBUFALAbk6M305gNJiAfrxyQwAuFD0R93uW7Xdz+NmS8kr0tBF37SWZYviqDNrWv06UxBaGuwN6QyhSEd4fsfRNbqhixIF8lkdpDjO/AZ7vlQ1Scmd/AUieQvsj2Tga9G+LtVwFi3KtqR34T5XF0oWE9g80GYkk0F7uJkYIdW6ZKsQBMO8AX6QsQdr6SXXEH6pVT8rfH6RYtqmc+LrNNPZiY1FmVxBACQD06S6pwr6WjHuPP6aA9moXxJvfmNhOziJQhljGo6Q9+lqPCmgocHdWzDKnS4x9WNJK8jJUp4tA04v0uZ4BAELiJUIIznyRAnvOoLyB3cSVzfFbXVLELzXCt1Jt6KhgR6yjAle+eYhcsBzMsmr5hiNCjk1175qTIp532JopHGr+lrLh0i8y0kPe6STXeTxm07VH3zmxYua2ttaeB90a4b7tr/r26a5dB02a+Zm4zg+uEK0nchLX1C7SJQlqGT5tiijo2iBYXC4RKDVNkH0TndfwodBdSEoB52WXRy87E8Dyy//BKpvw5K4FyNgKTDmQsElwVprz1bJGEY3sR+h5vbznHpJRYq3mfjNsABVtpxhTVzof0kWn+E5uneGwpuel2gSJuxdSl2OXkHDS1En4yqep761v4YeOBPQGyuOnzIxR8JgWzktB3Islhbx5F9GCu3qyiKVt0OgB/PTEVlHDy2Ausp9DOcQa+1RoVStaL3KbjsYIqbfQ7XzALLtgidl652B4POtnQUgLqeHg1UZLjZgZj54qOB8bRQfBL0qu61JXSSKP7RnWmlmTMGFtH6dcjsa5IJelyor4sVhhcXQqwGW2Yi+bFltdYvKgzph8eeu0atN3GWcgVUTo15apVs0/KT/xq3CrqghxWD8258tCU0dH7h5uVmifhsYZAUH9Fjset0aGrjVea1kxfomWna0zPd3oFpCi50lng1ATdoTX55sWgMui8GVUQhv3PqRMHLAdM3VuQ2Tf1zfnYHz/gNDOsienkTubxmfZebPNup5c3KrBU4Tr5Uu4bKburKf22kiRygLEIP+cAMRPEkgLDj/dUD2DFHWGpbi0MycRs70vjO9VCMNYIVL8y7sriHH5aTO4Nb5cn7RVw4TJfawABIBb52SuBSloS79W+YbIAcOyObOBPX7dvjtj+iTuDP3F6tnrESNbqL6PsAZgFQbaH+IRna3TIzT/hwy64I8LotBkzDLDYkHC2lehubhQK4yQ16wCfzyRzsJS/mg2q1Fy8frQq+ha5zwUVeuQvi6g3ezs2zFClAM+9UTg73Rpe/MfhMgiYcaDkYVAKtqvo+fjXjcn+7N6HYFdEzruWsxP7dl7VjvNGwktYFCpM1miz0FcCpQOqjHkEi0ufxiW/Ua/hmZNFYR57YMfalRcHOb/rRMPa3N91UIN4Vbm932cpSGNle9UCjXpe+CaMFDC68vb6JppTT3ml/7c+jQ+VIRsKc6waOq7asacBBHTk9vCzHPTRmDz+DcqqsXzGCWocu2LUxXaMz4zKNbokrwoLGuDG4CF1wQhUD6XeZtQYuXO1RE2z3MbNpj4MNJs+XDv0bELWExZ0btbhpkIH0TFY21/YC6p3fzi/w3Y9jqcNn1p9vxqaCvynBzaVH6MVcyW31p8aoE0np5Z80gv0Ek12k1z1I2WDiGi9OAmmYZwwaAgaZD2pFyQzFhnRTl8Lkonut2BmWEhGzJV8o6KVI0o3hNiSXHhMS2AAYGWm77KuMuxfoL3o4taw9D1u6Wnkoxm1gzJ8Zg7HlaVApAN8nZrJpLD5zrFkl8vhgNVY+chKd8yROpjtVYmCu9fYLHwZBwpuMnkrOoJWZWou9HPNnnZfFtSqd3VHxdEiFu01DGU2SSOqvWRZM81FHZzZ3Ftfe0wwteojmrMwAQPxA7+Ya5yvQ435EHQkXWnvYRI6z8aA8YbF+YCWyfoNXQqL4TANMy8QKSJKLIbUaMnzemE9oZ52Vui2+f8Wxgw56YB9Sc/B7vmdPIa0LQRXKAq8AARB81U9lyISv8Fd58IB39Lem7/PTieZEbqjUWIXOkrP9wPD9S0D/vuUWanHa+19o/lD9L43ZYAt2so40p9fJO55NAo+BD4K8lSxrp2ZMJ8+YrmFbv5gBrMOjiuq1Zf23wAos6irnbFVbd7RLAc56UDekzuoy8Q9RPFjB7DV56cJYpgMT0z9j+OYHta/A+RgSahng+IHhSiVWp0c6MUotkqmCHMXeHq4UG1kfPI22XoZmXHdvHktVKRyPThTIPOPReB7cCoM36w7FgvhGC01sLVyW/+FWsf4sFplkaB1kseeq3mXFQSfRrl33WWbgsRj93nqI6+nfdRkAGRNyMtclGMn40YKvhRoSFuKr1DIIJP6hTj8nrvxQ2GwxQ/EqU85jFTnC8NWlKA043ZFEmXLTR0SzEIHQAwiE98iaUgF7D7Qerhrh43bktjxYBymwzjtA2hcPdLoqkQaDWHmY70LcNw7WG+8qTOgcvmfiga8k/s+aB0RlXa+XxEvh6hS70Y8i14/RKIINgwTFGFeldmt7ebhSvWuFG1w3QDKtnNfjVEaw5hvbo76N4saRQX82jlkeCUOR05GjFm+RufQ/Sinnsw4mwdlQULVK+8LTkxiDf5z7mESCIMGj+3INVrAmdsQ9P2mV6GcZjpJV282BWco3JZcKVG5d1m6D5yPjn9v4r7mNvrkqzxNeFLQGqBRvD58a153xsWsWDLT8wy2inzD7ypsFzf1kPF/bu+/GNlOqCbW28lpIbw25mAJzbC1RRGyPYYsNZ2/q6teXj489Cw4dIm6YMYRZ/xQ6UTBFbMVuNSbJdmWDcHH7VTxy7v8iex2/S2r82UXjE8spBmsM5SwD1ue2GeUH805dJppu8C2UFDQMZrLG9zdI8gfZ9xMyrI+6PNyQfgAv4WWNtW6XYarFDjjrrlQ7xvMDj5XPUY9SqhaxGnkdC9SutFNgY3+exp0AK+/ng3vMgYY7RN3BTkNx+wFQoukdy7Ztwu80HQ57H7Ps/+vSGuo7d+NyKC5ApzBptK/5aA6LV+lENYDNUYLl17x+UNTEoYSW+kE6c5w2Ocl9zTvnnK+sS2MG/xr2U2R4fRq180xb4dJffasnyMvaqQnfwmytp94IMzauUwzjEhnTOQ04I3oNrfkhgXVDdIheSkO3YGVMPuIX0/fXkJtixnYjecmwAUhza7nuGj9C+4XOUU5VpVrHdDupagafkCYKE7zeuCQuPbGM8Ylh2CKcCA1dE18YDV2sgKOczhwI5kIGjKG4NpYZYVQ4iIz2Aia42aqPucpYoapY7pZYLsDwWrSSPu6KqmHw6tzh1bI7aJCoDhBswIOz537P1APYuOecYenHotkNMlOXqqRWzDPz8E6uIdnBx9UWfQt+sIwrfLjf+1oZWWodlSsGbQnskGu4xK7WlnC37uyypcCBlLjOvIsY89WlcYWQZ1cLZSH6Bv9Hl1IqTHlh1K5J4Q6fRdXk4ZFBSBSkoAdWNn94c4HPcbnOusDWwDmZYNN0cUI0s1WFxphIV3IAJh6tIMBbEJMj8MqBT9MiyY8YgJ9tcMiRMHCRXNMDC+TMrYQ4tKWSkH56V2NluuS8S8/kSguuu4a7630pIQWxq22WmzRNQaFzB8g5dwM5FweniXNMMyocjhdqB2pzNmDmXUDPKc761+YZiBuRGfCi1rFoxNlIjrCntTPqgBXsnBhoTpX9p0mMg6CcTifgKQSLH1ZEdMEkm3A5qUy8PRCE89fPqoRsMRJoX449mB88dTZ3g2pvAMYrcwel1shyze1W7CmbIqvhngZwhgcmElkcmTKCBpuKuH6N1p21kqRPPFOQzz+Gjxo3yXc6lP2+WY2sjxIID578kq1dde7qKMgezqxLDo0dLfzCmXqViWI1zHe8UX+87EGkDiToS40TrFT9uPN7u94pVjIo+mK2YoPYZLPK6l3UYZXmPFVtB8FlYKTaiI5y2mI1Siii6uGjtAMx2dRrL2JrP1U1kEmG/GRP0ypmN+S1fAODs72ekg2bEYolnd0FVF8Levm7lvU/Mkg0ItjpBrRwhcAJY9TscINZJfbmDGBYTMxk5hRlKjyJ7b4NLm3Nqfc904/5Y5MJKCjemveDRHqedK7slIkSkMonOv3pP6uFYlBqa+7ASPL6HOtC+bsZzAbx1Kxsqw2hh4BjtnTpe5Nny1aHzQJeNwlQsGkCTcE33p7VojXVB+1NY/WADa48XYhEfhzaln4vNd1NDPEeyXE3VILsdtbFga1vNp6zRcHx+71W+mD3GlIsnvCDiCBZ9Lv2hvAFdFpH4efcD5iIuVkE7+Uy68uurVW8kKk6EFyrPKzGKSgM1zAkA17Gad5p7gvluTg2AmrHrzGEuNvrteyttMlwewusdgAFjmCURtlZ8bdXDXhFH7lghKVJYF2vigsj6gCXFz4oYTZgX0ihj6Ja37zM2am/vRrc370WjMUR6qDLH9C+JhgSWqCq1dRaNC7tl4P8uLCoFMUBLXL+PkkUYQaoSEHc8tgBGZPP2KRVNBvhh14A3a4wwJ9l55vIGPLSfAAXdpRvVcAePtIYUEGs37z4e7fm/kpl/Vov1dnPXWVpdUfPn9wBcNpYdKaLUkx7WiM4lk/rvMsa3VTXsMludwkj1cHW1P76cQG2Qz5fGLE9nbxWLyQSHrBcbPhXq+dXNaervZtYhhdAEDY2W+tmRqZjAy7WLTtfFXntuuijSD25JRQm+eEMqY6iXKLNR9cysgJEj+Bcx4bBgkqqC8rQ9dAC6RsrYxgKl89RLVG6WcDynIH7Q2Y6ugenHrhQwvZlGbck6u+zRdi9WEPcEUAvpEVmvfX9nvL5lhs9j2MjezVqweu0EGiVkaZhznyQGMJqjRi6iCXCIrr2klIHwFEEc0p9rVseyTI0itiMwjtjDbgA7UJ4QzvvMUGY9yON64mwnyvtXQKl2Uz4T7KrHW/Y1jbLkvLP+EW3uGN8QsxgdYoQJknYTS3FGczhO5aydlRFU0dHD1TIZntNBZ4MIxgVvwgrQKx1hCXjvD59uKpg7kP40flovAAVeKFNKGij7V5B6GysZni1FuPBGJGeZS5hMtV8CjIWjrOKhWGaWXW4hvi6v7r12fy6Shabznsnv87FVKd8QIcDYrFKlvVstoerYwVjDdaATlZuR7THqVsDCXEQwxCDedWUtqsS+4eT2so9fLh4IaUN9+54y7eKyu4G+1S5ZpxLHkstY7E861MtplBa5LJTYvGjwjXadW9tOSR+d0pQ1IGFdkrja/88q5gZxILvboOT++GCcrnP4CpjYzIcv4RRskEw8XXfUM2qeyXFdb27OoW6oFA9KBH1G3p+0ofnbv0azCyPzpNS87Nbjf4fByXEngau78+wmKXg2a5gPHU9YQuOGODMLwyLY3w+oAP8cUEDIsEuhVT8PDissCKIthkouFNlLxCqXuqs7KJb+Y/oBvcRjtK4Poce5Gipdfa3NoBLi86e2odCSTdJ746g/DhUUzI/W89IZnodOhVQoIQLmuFpKJHg38/NwDX3+RqaZk02ukJekfe+gbtxuMfw703ygAAglUaYhc45jwQlW3sEcskE2uEwDbnKV0VIajGKM1pMIt4lsUIdCPHnvSNhgz07/2UUA6ygIAGEmWDHlqkkg4SgFYka9oZn447ugfw2gjt90rgrf4C1JN453NeIuq/pH3fzQGVvxm3m7FUVW1BY8ODpv254Ovsn/pMeOl38k7bSYYBdhvf+ir2UffVww+LAYzkUMMTZbsP/zXTCzhYcEmZk46Cta/REu+8IBcJ4pRuNzQQYHwsUT/Utoc/mBG2iQ6MmgzQZ63VyriTpUZNlXq68y7fIsEpKmHfAbZCdAd1yp5xILYuwIKlag5HktFHTd3iUW0Gx3Nq3kcmrDG18Ele/uYTp0iyC7rN37sh2CXLi+wZ4MAhQaOol+KnPf4AA+xsaK6PSVrHN8KmKoFLY0DPOSbiG5fhz6xb2oNrlocigpdf0lxe6Mi2EMgJkauIHAcfhTDmE45D2wCeZkKmN17Q2n3BAekCtZnv4+2KwTILErxqdKo6L64ZUPFiSbM8eF8FwaQ3PSCLLwMkIuaxkOaFSlt91gTGYzB79NuQa2t6PwknZ3EI/2RbWwdgFXd2SdonckTwiHkvhZD3vxyUwSFdemipDN0toSsCFzf7Sr4rB25QC0zYNL768C44hO7NI33RGXsK9LvJ+ZkDFotacZCpe6J/bdjlmN4u5qenZd7yCmYgr+XipcUEPjGAq8/4EN+CuRjR98SW6L9Q2rvZekS7Sa+QPprGQYTiLcq0Ro9360A9P88PjLffsOYOQ9KLYBvyL++I/JuJ2RlBfLbGII53rE8WKj9vtMYZdpbJEFiqM8Kk18yw4+ds3EMQBgAUhdWs6ZX7WTu6wDndKInYK+Q0NqoMy4qXjIJqLuUjs0Su/htGaMzwGLZxhP5UE/cexGFZPLwPITyvW8FQ1q5pexkOVxu11t8Gm4nQITRsucEYK0VeVyXg9J+/G+zYBpX4Kj5T/XQc2IcaswM+NIgnkesI9Qq3WCFc7AkPo0G6FfAlyOVy0wIWVObov6Y+AX6fF9SqncrXUImEVGILXMSfXZO+viOL0eB8ApJ+nyTTn3Ez/Zp4naPrdyUW/Y979CfyEKRGM7B2X4tgBQWlU88EZi2nhdPQpDYXvyk9M1tvAHeaOyIlW2L09x/4oLdkoPK/JkAaN4g/YbqHv7q7knr1v38NOROausnV3NYfAGzKV0zu/2ev8LYgniJdAXMJBvSGETPfVVVMb76HnRaF93BzwF8EVe4HAkoJpc/1nISyufQDObVpFQr3zBRWxiIoxXj02HFJOEkjyp0grfbXUmJjloHw4JlZcOhmfwMvzCpN50OwjIVeIuEGgzrQlL3ArWHSMqT0tcXQELkJJUdoVAcdp5jbEJakKjP4S0fds7PTRBkv5mXqgbJ5fZ+qLAWAObiBgtnhwAE6RtS6ts3GUeeduHUbAKpyWtgBXvAKv7Yj+vfba1Cmottu29eprt7FH1+ttBca+FT+HPKVkDNcYLuU91ulTBvv5N/9WjE+b62bJfTqt59W0a9tEUOJdiWNMVjcX/xSIT/87fDoM0OmiCka8sEMX6j0a1wjzDKsZFJcH19HtgIXpaEmt3r7w3nH/ZHb+c6LM5M+uIrEiNg9SHIR0Hnwi4rRKU37mMVTU/xRgV3THstC0WhfBEuVIM396Z330bbeZ2cKTP4ue71DJv1s48gx71FVMvv9DE57G7wCgI3jVPvf/1U4+pmbxnxC1s1RhCQSBM5BfQhGmglL14H5l9zv6sit7RNNoKHAs5XlXzcQ9vJEqnta4vIXIO2r8K8qVoWN6GnMwSTydF2F34ZO+a/XmnZgBF1nih3U4ApDvn4aEpmxkE6Ngh/FFjnHGKR0wxzuDO2mxKavUaPmi/KcRs1D5eVOZFiAO/jK73MpIawa7PZ3UhJsuTYwAHBQGBpZnDyc+7qARRD7nv28qq9dwbn6Ahwha89enz7PBtqZlfe17a0EHRMQtttsxsQep7WWO2SEHCkdwbPtVEAuZL1yfwxwZNN1N15sDAgxwY2bLjPyWhRZU6LIq39i/NhatHKY55S6bFAlZoYGmeY4eSneV8G9j7GqtmTBTiMFLUUMHOlAWHl5OD7BEtBIApOq9+HgAdJzUijLvBLIRL4HxyMGNd2YJAA2q8XD0ngJsFHJc7XE5fTbIFddO1t3cQBjAbBj+KCxxZcWUdAxwUncDKJLUvr3ATCdNglBOUI8PXvd6nEYZSiBb2KqJb1jhkD6TJGTHt3j/Dm1Qth2HFJJxWjxj7UKAOpMC8fXVTS5mgGBjBJCRteJAWUgMJ05XYA2tih0MkGhkQfciyB9lTPOFV2zZQkcPT1AkejodJL3QEILFU1AOJM3RAIDTyarZERQgQahGfwDFxNyO8mR9TGAzykFjKUb18vqf9JJTUSK3VOf5m3P2/v+mqD/ytdWnv2xdsno867SHlaWOMQ0sjsPU01NuTp0P07LAEpFhUDITFb+HrYMXeuxqU76IRy36PZiD0oUyCScVLVTIOqe2sUol022GqScILVoXX8IPVs7k/ExB+656ZGN8+vyaxhl0yN+taE+DlUQIruZ9GtF8zhZMKIgYF9QBizaYMh3sKb6gZFEypZIjbs/s0E3HHKjb/yCrCeWlZockLFVfHJLmSwtOJd3/M9UUAi6/YykFk9mbVxN0AHHBuu+Ppt1B4vK44NtTmomueGFChOl3ByjQHy6ApXe7PdjbyLrs0LS+zNR4B51VCU3BCQZ+/ZL4+t0J9gjOHowhgDLuzJirq1ZJ3YlM0kzEeL6Bqrj6PvFzMNfIFd5osQvjD59zWYRUgGizZse0taJMSqSKCT8oaA9HXFq5M8l/7TtumGEhmY0jqesEJLeK3uILdhPWm2sm05jT1e4n5BFjqTQPVM5y3YirM1garDTBjgiHeoihR0WCfswfrxxWJoCj7sxHkcuTfMH+dmAAAAy9SKa4gExcxDEe7mUrQK4DvPgI+I5wBC/z1Dd53RmBkA0QqM7ykXOj8v9T7DIASGeB9+LBHGrdVFiEoWeki+P/hc1q5UwaC7c78oJWR1iN/OuTKkUtK0l0gmLm/7OoO6Jv88ExxDxrJwAu/Xkku39S50mhu2R6eltJ5tMfA+V+7rd6P8C3po9UhahwAkudm/lg69VhQerKR7wSREkpG0VxGvxBRGatOGdVo0y8PKjRbyi5dSBTImVY/UTw6Bb/Cs4i2HvGRKYyhvywRWe4f6vER+Wd5Ty2kWSS2Th3ZfjmKuvvn1G9ozZSrq8oeOBtSTTPGP+J0464ABDH1SPv36DvC4MTRVk42flsIBtkiA74ULvHYtrpJnBVdr/ym47KDsRqndSO3cYPu7kvbr/O8RsvgAHxAqgBgAiUSiPWi0umV34rxBf/XCAAAAAAAAAAAAAAA";
          // Instant photorealistic Tulsi bead sprite (embedded WebP — 0 network requests)
          const tulsiImg = new Image();
          const applyTulsi = () => {
            this.beadSprites.tulsi = tulsiImg;
            this.render();
          };
          tulsiImg.onload = applyTulsi;
          tulsiImg.src = "data:image/webp;base64,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";
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

          const traceSilhouette = () => {
            c.beginPath();
            const steps = 180;
            for (let i = 0; i <= steps; i++) {
              const a = (i / steps) * Math.PI * 2;
              let r = baseR;
              if (material === "rudraksha") {
                // Organic, knobby 5-mukhi contour with natural wart-like edge protuberances
                const mukhiLobes = Math.cos(a * 5 + 0.28) * baseR * 0.032;
                const warts1 = Math.sin(a * 17 + 0.9) * baseR * 0.017;
                const warts2 = Math.cos(a * 29 - 0.6) * baseR * 0.012;
                const warts3 = Math.sin(a * 43 + 1.4) * baseR * 0.007;
                r += mukhiLobes + warts1 + warts2 + warts3;
                r *= 1 - 0.038 * Math.pow(Math.abs(Math.sin(a)), 4);
              } else if (material === "tulsi") {
                r *= 1 - 0.035 * Math.abs(Math.sin(a));
              }
              const px = cx + Math.cos(a) * r;
              const py = cy + Math.sin(a) * r;
              if (i === 0) c.moveTo(px, py);
              else c.lineTo(px, py);
            }
            c.closePath();
          };

          c.save();
          traceSilhouette();
          c.clip();

          // Deeper, authentic dry Himalayan terracotta/maroon-brown palette for Rudraksha
          const palettes = {
            rudraksha: ["#b84d22", "#872c0e", "#4d1505", "#210702"],
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
          grad.addColorStop(0.36, colors[1]);
          grad.addColorStop(0.74, colors[2]);
          grad.addColorStop(1, colors[3]);
          c.fillStyle = grad;
          c.fillRect(0, 0, size, size);

          if (material === "rudraksha") {
            // 1. Dense, fused wart-like protuberances & dark recessed wart-grooves
            //    Distributed in a natural phyllotaxis spiral so there are no flat/smooth patches.
            const wartCount = 210;
            for (let w = 0; w < wartCount; w++) {
              const frac = (w + 0.5) / wartCount;
              const rr = Math.sqrt(frac) * baseR * 0.88;
              const a = w * 2.399963229728653 + (this.hash2d(w, 17.3) - 0.5) * 0.25;
              const wx = cx + Math.cos(a) * rr;
              const wy = cy + Math.sin(a) * rr;

              // Spherical foreshortening near the edges
              const edgeFactor = Math.max(0.45, Math.sqrt(Math.max(0, 1 - Math.pow(rr / (baseR * 1.02), 2))));
              const wr = (3.4 + this.hash2d(w, 57.1) * 5.8) * edgeFactor;
              const aspect = 0.68 + this.hash2d(w, 69.3) * 0.45;
              const rot = this.hash2d(w, 83.7) * Math.PI;

              // Deep dark groove/valley surrounding the base of each wart (bottom-right shadow)
              c.save();
              c.translate(wx + wr * 0.22, wy + wr * 0.26);
              c.rotate(rot);
              c.beginPath();
              c.ellipse(0, 0, wr * 1.15, wr * aspect * 1.15, 0, 0, Math.PI * 2);
              c.fillStyle = "rgba(18, 4, 1, 0.52)";
              c.fill();
              c.restore();

              // Raised dry woody wart crown with matte directional catchlight (top-left)
              c.save();
              c.translate(wx, wy);
              c.rotate(rot);
              const wGrad = c.createRadialGradient(
                -wr * 0.28, -wr * 0.28 * aspect, wr * 0.08,
                0, 0, wr * 1.05
              );
              // Lighten slightly on the upper-left lit hemisphere of the bead
              const litBoost = Math.max(0.25, 1.0 - Math.hypot((wx - (cx - baseR * 0.3)) / baseR, (wy - (cy - baseR * 0.3)) / baseR) * 0.55);
              wGrad.addColorStop(0, `rgba(208, 108, 60, ${0.42 * litBoost})`);
              wGrad.addColorStop(0.50, `rgba(128, 44, 16, ${0.46 * litBoost})`);
              wGrad.addColorStop(0.85, "rgba(42, 10, 3, 0.45)");
              wGrad.addColorStop(1, "rgba(20, 4, 1, 0)");
              c.fillStyle = wGrad;
              c.beginPath();
              c.ellipse(0, 0, wr, wr * aspect, 0, 0, Math.PI * 2);
              c.fill();
              c.restore();
            }

            // 2. Irregular winding wart-valleys / micro-crevices weaving between protuberances
            for (let k = 0; k < 75; k++) {
              const a = this.hash2d(k, 81.2) * Math.PI * 2;
              const rr = Math.sqrt(this.hash2d(k, 92.4)) * baseR * 0.82;
              const sx = cx + Math.cos(a) * rr;
              const sy = cy + Math.sin(a) * rr;
              const len = 7 + this.hash2d(k, 103.6) * 16;
              const bend = (this.hash2d(k, 119.1) - 0.5) * 1.4;
              c.beginPath();
              c.moveTo(sx, sy);
              c.quadraticCurveTo(
                sx + Math.cos(a + bend) * len * 0.5,
                sy + Math.sin(a + bend) * len * 0.5,
                sx + Math.cos(a + bend * 0.35) * len,
                sy + Math.sin(a + bend * 0.35) * len
              );
              c.strokeStyle = k % 4 === 0 ? "rgba(214, 122, 74, 0.16)" : "rgba(16, 4, 1, 0.44)";
              c.lineWidth = 0.9 + this.hash2d(k, 114.8) * 1.1;
              c.lineCap = "round";
              c.stroke();
            }

            // 3. Deep, unsymmetrical, jagged winding 5-Mukhi longitudinal clefts
            for (let i = 0; i < 5; i++) {
              const t = (i - 2) / 2;
              const baseX = cx + t * baseR * 0.68;
              const bow = (1 - Math.abs(t)) * baseR * 0.14;
              const segs = 18;

              // Dark recessed cleft channel
              c.beginPath();
              for (let s = 0; s <= segs; s++) {
                const f = s / segs; // 0 (top) to 1 (bottom)
                const y = cy - baseR * 0.90 + f * baseR * 1.80;
                const curve = Math.sin(f * Math.PI) * (i % 2 === 0 ? bow : -bow * 0.85);
                const jag = (this.hash2d(i * 31 + s, 4.7) - 0.5) * (size * 0.022);
                const x = baseX + curve + jag;
                if (s === 0) c.moveTo(x, y);
                else c.lineTo(x, y);
              }
              c.strokeStyle = "rgba(18, 4, 1, 0.86)";
              c.lineWidth = size * 0.024;
              c.lineCap = "round";
              c.lineJoin = "round";
              c.stroke();

              // Broken raised woody ridge catchlight along one edge of the cleft
              c.beginPath();
              for (let s = 1; s < segs; s++) {
                const f = s / segs;
                const y = cy - baseR * 0.90 + f * baseR * 1.80;
                const curve = Math.sin(f * Math.PI) * (i % 2 === 0 ? bow : -bow * 0.85);
                const jag = (this.hash2d(i * 31 + s, 4.7) - 0.5) * (size * 0.022);
                const x = baseX + curve + jag + size * 0.014;
                if (s === 1) c.moveTo(x, y);
                else c.lineTo(x, y);
              }
              c.strokeStyle = "rgba(218, 124, 72, 0.34)";
              c.lineWidth = size * 0.008;
              c.stroke();
            }

            // 4. Natural top thread aperture (dark bore + worn lip)
            c.beginPath();
            c.ellipse(cx, cy - baseR * 0.87, baseR * 0.11, baseR * 0.068, 0, 0, Math.PI * 2);
            c.fillStyle = "rgba(14, 3, 1, 0.92)";
            c.fill();
            c.beginPath();
            c.ellipse(cx - 1, cy - baseR * 0.89, baseR * 0.05, baseR * 0.028, 0, 0, Math.PI * 2);
            c.fillStyle = "rgba(186, 94, 48, 0.32)";
            c.fill();

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

          // Spherical edge shading for natural 3D depth
          const rim = c.createRadialGradient(
            cx - baseR * 0.18, cy - baseR * 0.18, baseR * 0.22,
            cx, cy, baseR * 1.02
          );
          rim.addColorStop(0, "rgba(0,0,0,0)");
          rim.addColorStop(0.76, "rgba(0,0,0,0.12)");
          rim.addColorStop(1, "rgba(0,0,0,0.48)");
          c.fillStyle = rim;
          c.fillRect(0, 0, size, size);
          c.restore();

          // Subtle outline only for smooth turned beads (no cartoon border on organic Rudraksha)
          if (material !== "rudraksha") {
            c.save();
            traceSilhouette();
            c.strokeStyle = "rgba(35, 18, 8, 0.38)";
            c.lineWidth = size * 0.010;
            c.stroke();
            c.restore();
          }

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
          // Slide the main counting bead smoothly upward on every tap or upward slide
          this.beadLift = Math.max(this.beadLift, 26);
          this.beadLiftVel = 165;
          this.swayVelocity += (Math.random() - 0.5) * 0.018;
          // Smooth vertical silk spring bounce on slide-up/tap + subtle gentle sway
          this.tasselBounceVel -= 54;
          const swingDir = this.tasselAngle >= 0 ? -1 : 1;
          this.tasselVelocity += swingDir * (0.48 + Math.random() * 0.24);
          this.silkEnergyTarget = Math.min(0.75, this.silkEnergyTarget + 0.55);
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
          // Much larger main counting bead for effortless readability (elderly-friendly)
          const primaryR = Math.min(54, Math.max(44, this.width * 0.135));
          let beadBaseR = Math.min(22, Math.max(17, this.width * 0.048));

          if (n <= 13) beadBaseR *= 1.12;
          else if (n > 108) beadBaseR *= 0.90;

          const centerY = Math.max(primaryR * 1.95, this.height * 0.31);
          const topY = Math.max(primaryR * 0.85, centerY - primaryR * 1.35);
          const bottomY = Math.min(this.height - 42, centerY + this.height * 0.57);
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

          // Smooth occasional wind envelope (ease-in / ease-out, zero sudden kicks, no spring in wind)
          this.windTime += dt;
          let gustEnvelope = 0;
          if (!this.gustActive) {
            this.gustCooldown -= dt;
            if (this.gustCooldown <= 0) {
              this.gustActive = true;
              this.gustElapsed = 0;
              this.gustDuration = 3.8 + Math.random() * 2.4;
              this.gustPeak = 0.065 + Math.random() * 0.045;
              this.gustDir = Math.random() < 0.5 ? -1 : 1;
            }
          } else {
            this.gustElapsed += dt;
            const p = this.gustElapsed / this.gustDuration;
            if (p >= 1) {
              this.gustActive = false;
              this.gustCooldown = 7 + Math.random() * 8;
              gustEnvelope = 0;
            } else {
              // Smooth sin^2 bell curve: starts at 0, peaks gently, returns smoothly to 0
              const s = Math.sin(Math.PI * p);
              gustEnvelope = this.gustDir * this.gustPeak * s * s;
            }
          }

          const slowDrift = Math.sin(this.windTime * 0.45) * 0.015;
          this.windGust = slowDrift + gustEnvelope;

          // Smoothly ease silk flutter energy (no abrupt jumps)
          this.silkEnergyTarget *= Math.pow(0.45, dt);
          if (this.silkEnergyTarget < 0.003) this.silkEnergyTarget = 0;
          const desiredSilk = Math.max(this.silkEnergyTarget, Math.abs(gustEnvelope) * 3.2);
          this.silkEnergy += (desiredSilk - this.silkEnergy) * Math.min(1, dt * 5.5);

          // Gentle, smooth pendulum sway for the tassel
          const targetTasselAngle = this.swayAngle * 1.15 + this.windGust;
          const tasselAccel = -11 * (this.tasselAngle - targetTasselAngle) - 4.2 * this.tasselVelocity;
          this.tasselVelocity += tasselAccel * dt;
          this.tasselAngle += this.tasselVelocity * dt;
          this.tasselAngle = Math.max(-0.24, Math.min(0.24, this.tasselAngle));

          // Vertical silk spring physics (triggered ONLY by touch / slide-up, stays 0 in wind)
          const bounceAccel = -135 * this.tasselBounceY - 12.5 * this.tasselBounceVel;
          this.tasselBounceVel += bounceAccel * dt;
          this.tasselBounceY += this.tasselBounceVel * dt;
          this.tasselBounceY = Math.max(-10, Math.min(8, this.tasselBounceY));
          if (Math.abs(this.tasselBounceY) < 0.02 && Math.abs(this.tasselBounceVel) < 0.05) {
            this.tasselBounceY = 0;
            this.tasselBounceVel = 0;
          }
          // Subtle elastic silk-strand length stretch coupled to vertical spring bounce
          this.tasselStretch = Math.max(-0.08, Math.min(0.14, this.tasselBounceY * 0.016));

          // Smooth spring return for the main bead's upward slide motion
          const liftSpring = -110 * this.beadLift - 16 * this.beadLiftVel;
          this.beadLiftVel += liftSpring * dt;
          this.beadLift += this.beadLiftVel * dt;
          if (this.beadLift < 0) {
            this.beadLift = 0;
            this.beadLiftVel = 0;
          } else if (this.beadLift > 44) {
            this.beadLift = 44;
            this.beadLiftVel = Math.min(0, this.beadLiftVel);
          }

          const targetTouch = this.isTouching ? 1 : 0;
          this.touchLiftCurrent += (targetTouch - this.touchLiftCurrent) * Math.min(1, dt * 18);
        }

        drawSilkenTassel(ctx, x, y, scale, angle) {
          const bounceY = (this.tasselBounceY || 0) * scale;
          const stretch = 1 + (this.tasselStretch || 0);
          const baseLen = 46 * scale * stretch;
          // Slight natural silk flare when the spring compresses/bounces
          const bounceFlare = 1 - (this.tasselStretch || 0) * 0.55;
          const baseSpread = 13.5 * scale * bounceFlare;
          const wt = this.windTime || 0;
          const gust = this.windGust || 0;
          const velTrail = Math.max(-0.45, Math.min(0.45, -(this.tasselVelocity || 0) * 0.22));

          ctx.save();
          ctx.translate(x, y + bounceY);
          ctx.rotate(angle * 0.85);
          ctx.lineCap = "round";

          // Draw 35 fine silken jhalar threads in 2 depth layers (18 rich saffron-crimson back, 17 golden-saffron front)
          const layers = [
            { count: 18, width: 1.35, colors: ["#8f2f0d", "#a83d14", "#b84e18"], lenScale: 1.03, alpha: 0.92 },
            { count: 17, width: 1.0, colors: ["#d96e1f", "#ea8a2e", "#f4b95a"], lenScale: 0.96, alpha: 0.95 }
          ];

          layers.forEach((layer, layerIdx) => {
            ctx.globalAlpha = layer.alpha;
            for (let i = 0; i < layer.count; i++) {
              const t = (i / (layer.count - 1)) * 2 - 1; // -1 to +1
              const seed = i * 1.73 + layerIdx * 7.1;

              // Natural slight unevenness in hand-cut silk thread lengths
              const lenVar = 0.88 + 0.18 * (0.5 + 0.5 * Math.sin(seed * 3.7));
              const len = baseLen * layer.lenScale * lenVar;

              // Smooth, restrained silk motion: calm at rest, gentle soft waves in wind or touch
              const energy = this.silkEnergy || 0;
              const calmBreath = Math.sin(wt * 0.65 + seed) * 0.35;
              const wavePhase = wt * 2.2 - Math.abs(t) * 0.65 + i * 0.32 + layerIdx * 0.9;
              const midWave = (calmBreath + Math.sin(wavePhase) * 2.0 * energy + gust * 10 + velTrail * 9) * scale;
              const tipWave = (calmBreath * 1.5 + Math.sin(wavePhase - 0.9) * 4.2 * energy + Math.sin(wt * 3.1 + seed) * 0.9 * energy + gust * 19 + velTrail * 18) * scale;

              // Subtle organic thread separation
              const flutterSpread = 1.0 + Math.sin(wt * 1.5 + seed) * (0.015 + 0.055 * energy);
              const startX = t * 3.6 * scale;
              const startY = 5.5 * scale;

              const cp1x = t * baseSpread * 0.42 * flutterSpread + midWave * 0.65;
              const cp1y = startY + len * 0.34;
              const cp2x = t * baseSpread * 0.78 * flutterSpread + midWave * 1.15;
              const cp2y = startY + len * 0.70;
              const endX = t * baseSpread * flutterSpread + tipWave;
              const endY = startY + len - Math.abs(tipWave) * 0.12;

              ctx.beginPath();
              ctx.moveTo(startX, startY);
              ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
              ctx.strokeStyle = layer.colors[i % layer.colors.length];
              ctx.lineWidth = layer.width * scale;
              ctx.stroke();
            }
          });

          ctx.globalAlpha = 1;

          // Hand-wrapped silk Brahma knot & woven golden-saffron cap on top of strands
          const capGrad = ctx.createLinearGradient(-5.5 * scale, 0, 5.5 * scale, 0);
          capGrad.addColorStop(0, "#7c3210");
          capGrad.addColorStop(0.35, "#d88a2e");
          capGrad.addColorStop(0.65, "#f5c570");
          capGrad.addColorStop(1, "#7c3210");
          ctx.fillStyle = capGrad;
          ctx.beginPath();
          if (typeof ctx.roundRect === "function") {
            ctx.roundRect(-5.2 * scale, -1.2 * scale, 10.4 * scale, 7.6 * scale, 2.8 * scale);
          } else {
            ctx.rect(-5.2 * scale, -1.2 * scale, 10.4 * scale, 7.6 * scale);
          }
          ctx.fill();

          // Fine golden zari binding wraps around the knot collar
          ctx.strokeStyle = "#f9d68e";
          ctx.lineWidth = 1.0 * scale;
          for (let w = 0; w < 3; w++) {
            const wy = (1.1 + w * 1.9) * scale;
            ctx.beginPath();
            ctx.moveTo(-4.8 * scale, wy);
            ctx.lineTo(4.8 * scale, wy);
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
          const upperCutY = dims.centerY;
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
          const totalLift = pullFraction * 38 + this.beadLift + this.touchLiftCurrent * 8;
          const cy = dims.centerY - totalLift;
          const pr = dims.primaryR;

          for (const item of items) {
            // Remove only beads on the short upper return section above the
            // numbered counting bead. Keep the lower strand, Guru bead and
            // moving jhalar untouched.
            if (item.y < dims.centerY - dims.primaryR * 0.35) continue;
            const r = (item.isGuru ? dims.beadBaseR * 1.36 : dims.beadBaseR) * item.scale;
            const dx = item.x - cx;
            const dy = item.y - dims.centerY;
            // Tight clear-zone seats the hanging strand flush against the main bead (no thread gap)
            if (Math.hypot(dx, dy) < pr * 0.88 + r * 0.20) continue;

            if (item.isGuru) {
              this.drawSilkenTassel(ctx, item.x, item.y + r * 0.80, item.scale, this.tasselAngle - this.swayAngle);
            }

            ctx.drawImage(sprite, item.x - r, item.y - r, r * 2, r * 2);
          }

          ctx.restore();

          // Large, elderly-friendly numbered counting bead that slides up when touched or upslid
          ctx.drawImage(sprite, cx - pr, cy - pr, pr * 2, pr * 2);

          const rawVal = this.countMode === "down"
            ? Math.max(0, this.targetCount - this.currentCount)
            : this.currentCount;
          const displayCount = formatNum(rawVal, this.numeralScript);
          const fontSize = displayCount.length >= 4 ? pr * 0.56 : displayCount.length === 3 ? pr * 0.70 : pr * 0.88;
          ctx.save();
          ctx.font = `800 ${Math.round(fontSize)}px "Cinzel", "Playfair Display", Georgia, serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.lineJoin = "round";

          const isLightBead = this.material === "sphatik" || this.material === "tulsi";
          ctx.lineWidth = Math.max(2, pr * 0.065);
          ctx.strokeStyle = isLightBead ? "rgba(255, 250, 240, 0.72)" : "rgba(18, 6, 2, 0.72)";
          ctx.strokeText(displayCount, cx, cy + 1);
          ctx.fillStyle = isLightBead ? "#1a0c03" : "#fffaf2";
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
        material: "tulsi",
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
        sadhakName: "You (Sadhak)",
        rankScope: "today",
        rankGroup: "sangha",
        friends: [],
        dailyLogs: {}
      };

      const SADHANA_TIERS = [
        { min: 0, name: "Arambhak", icon: "🪔" },
        { min: 108, name: "Sadhak", icon: "📿" },
        { min: 1080, name: "Nishthavan", icon: "🪷" },
        { min: 5400, name: "Bhakt", icon: "🔥" },
        { min: 10800, name: "Tapasvi", icon: "✨" },
        { min: 54000, name: "Siddha", icon: "🕉️" },
        { min: 108000, name: "Mahasadhak", icon: "👑" }
      ];

      const SANGHA_BENCHMARKS = [
        { name: "Aarav Sharma", todayMax: 1080, alltime: 42120, seed: 11 },
        { name: "Meera Devi", todayMax: 756, alltime: 28404, seed: 23 },
        { name: "Raghavendra", todayMax: 540, alltime: 19872, seed: 37 },
        { name: "Ananya Das", todayMax: 432, alltime: 14580, seed: 49 },
        { name: "Prakash Ji", todayMax: 324, alltime: 9720, seed: 61 },
        { name: "Sita Ram", todayMax: 216, alltime: 5400, seed: 73 },
        { name: "Kavita Nair", todayMax: 108, alltime: 2160, seed: 89 },
        { name: "Devendra", todayMax: 54, alltime: 864, seed: 97 },
        { name: "Neha Verma", todayMax: 27, alltime: 324, seed: 109 }
      ];

      function escapeHtml(str) {
        return String(str || "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }

      // Deterministic daily + time-of-day factor so local Sangha feels naturally alive through the day
      function getDailyBenchmarkScore(bench) {
        const now = new Date();
        const daySeed = now.getFullYear() * 372 + (now.getMonth() + 1) * 31 + now.getDate();
        const wave = Math.sin((daySeed + bench.seed) * 12.9898) * 43758.5453;
        const dailyVariance = 0.85 + (wave - Math.floor(wave)) * 0.30; // 0.85x - 1.15x
        const hourFloat = now.getHours() + now.getMinutes() / 60;
        // Smooth progress from 5:00 AM (18%) to 10:00 PM (100%)
        const dayProgress = Math.max(0.18, Math.min(1, (hourFloat - 4.5) / 17.5));
        return Math.max(9, Math.round(bench.todayMax * dailyVariance * dayProgress));
      }

      function getUserTierInfo(totalJap) {
        let current = SADHANA_TIERS[0];
        let next = SADHANA_TIERS[1];
        for (let i = 0; i < SADHANA_TIERS.length; i++) {
          if (totalJap >= SADHANA_TIERS[i].min) {
            current = SADHANA_TIERS[i];
            next = SADHANA_TIERS[i + 1] || null;
          }
        }
        const pct = next
          ? Math.min(100, Math.round(((totalJap - current.min) / Math.max(1, next.min - current.min)) * 100))
          : 100;
        return { current, next, pct };
      }

      function buildRankedBoard(scope, group = "sangha") {
        const todayKey = getTodayKey();
        const todayLog = ensureTodayLog();
        const myScore = scope === "today" ? todayLog.count : state.totalCount;
        const rows = [];

        if (group !== "circle") {
          SANGHA_BENCHMARKS.forEach((b) => {
            const dynToday = getDailyBenchmarkScore(b);
            rows.push({
              id: "bench_" + b.seed,
              name: b.name,
              score: scope === "today" ? dynToday : (b.alltime + dynToday),
              tier: getUserTierInfo(b.alltime).current.name,
              isMe: false,
              isFriend: false
            });
          });
        }

        if (Array.isArray(state.friends)) {
          state.friends.forEach((f) => {
            const fToday = f.date === todayKey ? (Number(f.today) || 0) : 0;
            const fTotal = Number(f.total) || 0;
            rows.push({
              id: f.id,
              name: f.name || "Friend",
              score: scope === "today" ? fToday : fTotal,
              tier: getUserTierInfo(fTotal).current.name,
              isMe: false,
              isFriend: true
            });
          });
        }

        rows.push({
          id: "me",
          name: state.sadhakName || "You (Sadhak)",
          score: myScore,
          tier: getUserTierInfo(state.totalCount).current.name,
          isMe: true,
          isFriend: false
        });

        rows.sort((a, b) => (b.score - a.score) || (a.isMe ? -1 : 1));
        return rows;
      }

      function getCurrentTodayRank() {
        const rows = buildRankedBoard("today", state.rankGroup || "sangha");
        const idx = rows.findIndex((r) => r.isMe);
        return idx >= 0 ? idx + 1 : 1;
      }

      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (saved && typeof saved === "object") {
          Object.assign(state, saved);
          if (!state.dailyLogs || typeof state.dailyLogs !== "object") {
            state.dailyLogs = {};
          }
          if (!Array.isArray(state.friends)) {
            state.friends = [];
          }
        }
      } catch (_) {}

      // Import a real friend's shared score link (?sadhak=Name&today=108&total=540&date=YYYY-MM-DD)
      let importedFriendName = "";
      try {
        const params = new URLSearchParams(window.location.search);
        const sharedName = (params.get("sadhak") || "").trim().slice(0, 24);
        const sharedTotal = parseInt(params.get("total") || "", 10);
        const sharedToday = parseInt(params.get("today") || "0", 10);
        const sharedDate = (params.get("date") || getTodayKey()).slice(0, 10);
        if (sharedName && !isNaN(sharedTotal) && sharedTotal >= 0) {
          const fid = "fr_" + sharedName.toLowerCase().replace(/[^a-z0-9]/g, "_");
          const existingIdx = state.friends.findIndex((f) => f.id === fid);
          const entry = {
            id: fid,
            name: sharedName,
            today: Math.max(0, isNaN(sharedToday) ? 0 : sharedToday),
            total: Math.max(0, sharedTotal),
            date: sharedDate
          };
          if (existingIdx >= 0) {
            state.friends[existingIdx] = entry;
          } else {
            state.friends.push(entry);
          }
          importedFriendName = sharedName;
          if (window.history && window.history.replaceState) {
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        }
      } catch (_) {}

      try {
        const tulsiDefaultKey = "divya_jap_tulsi_default_v1";
        if (!localStorage.getItem(tulsiDefaultKey)) {
          state.material = "tulsi";
          localStorage.setItem(tulsiDefaultKey, "1");
        }
      } catch (_) { state.material = "tulsi"; }

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
        const liveRankEl = document.getElementById("liveRankVal");
        if (liveRankEl) {
          liveRankEl.textContent = `#${formatNum(getCurrentTodayRank(), state.numeralScript)}`;
        }

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
        const prevTodayRank = getCurrentTodayRank();

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
          const newTodayRank = getCurrentTodayRank();
          if (newTodayRank < prevTodayRank) {
            showToast(`🏆 Rank Up! You reached #${formatNum(newTodayRank, state.numeralScript)} Today`);
          }
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
        renderer.isTouching = true;
        renderer.tasselBounceVel -= 26;
        renderer.tasselVelocity += (Math.random() < 0.5 ? -1 : 1) * (0.22 + Math.random() * 0.14);
        renderer.silkEnergyTarget = Math.min(0.55, renderer.silkEnergyTarget + 0.30);
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
        renderer.isTouching = false;
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

        // Tier Banner
        const tierInfo = getUserTierInfo(state.totalCount);
        document.getElementById("userTierBadge").textContent = `${tierInfo.current.icon} ${tierInfo.current.name.toUpperCase()}`;
        document.getElementById("userNextTierLabel").textContent = tierInfo.next
          ? `${formatNum(Math.max(0, tierInfo.next.min - state.totalCount), state.numeralScript)} jap to ${tierInfo.next.name}`
          : "Highest Tier Reached";
        document.getElementById("userTierProgressFill").style.width = `${tierInfo.pct}%`;

        // Ranking / Leaderboard
        renderLeaderboard();
      }

      function renderLeaderboard() {
        const nameInput = document.getElementById("sadhakNameInput");
        if (nameInput && document.activeElement !== nameInput) {
          nameInput.value = state.sadhakName || "";
        }
        document.querySelectorAll("#rankScopeCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.scope === state.rankScope);
        });
        document.querySelectorAll("#rankGroupCtrl .seg-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.group === (state.rankGroup || "sangha"));
        });

        const rows = buildRankedBoard(state.rankScope, state.rankGroup || "sangha");
        const myIndex = rows.findIndex((r) => r.isMe);
        const myRank = myIndex + 1;
        const above = myIndex > 0 ? rows[myIndex - 1] : null;
        const myScore = rows[myIndex] ? rows[myIndex].score : 0;

        const motivEl = document.getElementById("rankMotivationTag");
        if (above) {
          const gap = Math.max(1, above.score - myScore + 1);
          motivEl.textContent = `Rank #${formatNum(myRank, state.numeralScript)} • ${formatNum(gap, state.numeralScript)} to #${formatNum(myRank - 1, state.numeralScript)}`;
        } else {
          motivEl.textContent = `🏆 Rank #${formatNum(1, state.numeralScript)} Leader!`;
        }

        const listEl = document.getElementById("leaderboardList");
        if (state.rankGroup === "circle" && rows.length <= 1) {
          listEl.innerHTML = rows.map((row) => `
            <div class="lb-row is-me">
              <div class="lb-left">
                <span class="lb-rank top-1">${formatNum(1, state.numeralScript)}</span>
                <div class="lb-name-wrap">
                  <span class="lb-name">${escapeHtml(row.name)}</span>
                  <span class="lb-tier">${row.tier}</span>
                </div>
              </div>
              <span class="lb-score">${formatNum(row.score, state.numeralScript)} jap</span>
            </div>`).join("") + `<p class="modal-note">Tap "Share My Rank" and send your link to friends or family to build your private local circle.</p>`;
          return;
        }

        listEl.innerHTML = rows
          .map((row, idx) => {
            const rankNum = idx + 1;
            const topCls = rankNum === 1 ? "top-1" : rankNum === 2 ? "top-2" : rankNum === 3 ? "top-3" : "";
            const friendTag = row.isFriend ? `<span class="lb-friend-badge">👥 Friend</span>` : "";
            const removeBtn = row.isFriend
              ? `<button class="lb-remove-btn" data-remove-friend="${escapeHtml(row.id)}" type="button" title="Remove from Circle">✕</button>`
              : "";
            return `
              <div class="lb-row ${row.isMe ? "is-me" : ""}">
                <div class="lb-left">
                  <span class="lb-rank ${topCls}">${formatNum(rankNum, state.numeralScript)}</span>
                  <div class="lb-name-wrap">
                    <span class="lb-name">${escapeHtml(row.name)}${friendTag}</span>
                    <span class="lb-tier">${row.tier}</span>
                  </div>
                </div>
                <div class="lb-right">
                  <span class="lb-score">${formatNum(row.score, state.numeralScript)} jap</span>
                  ${removeBtn}
                </div>
              </div>`;
          })
          .join("");
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

      document.querySelectorAll(".stats-tab-btn").forEach((tab) => {
        tab.addEventListener("click", () => {
          document.querySelectorAll(".stats-tab-btn").forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          const target = tab.dataset.statstab;
          document.getElementById("statsPanelInsights").classList.toggle("hidden", target !== "insights");
          document.getElementById("statsPanelRanking").classList.toggle("hidden", target !== "ranking");
          if (target === "ranking") renderLeaderboard();
        });
      });

      document.getElementById("rankScopeCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.rankScope = btn.dataset.scope;
        saveState();
        renderLeaderboard();
      });

      document.getElementById("rankGroupCtrl").addEventListener("click", (e) => {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.rankGroup = btn.dataset.group;
        saveState();
        updateUI();
        renderLeaderboard();
      });

      document.getElementById("sadhakNameForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const val = document.getElementById("sadhakNameInput").value.trim();
        state.sadhakName = val || "You (Sadhak)";
        saveState();
        renderLeaderboard();
        showToast(`Sadhak Name Updated: ${state.sadhakName}`);
      });

      document.getElementById("btnShareRank").addEventListener("click", async () => {
        const todayLog = ensureTodayLog();
        const base = window.location.origin && window.location.origin !== "null"
          ? `${window.location.origin}${window.location.pathname}`
          : "https://divyajap.app/";
        const shareUrl = `${base}?sadhak=${encodeURIComponent(state.sadhakName || "Sadhak")}&today=${todayLog.count}&total=${state.totalCount}&date=${getTodayKey()}`;
        const shareText = `🙏 ${state.sadhakName || "Sadhak"} has chanted ${todayLog.count} jap today (${state.totalCount} total) on Divya Jap! Open to compare our ranks:`;

        if (navigator.share) {
          try {
            await navigator.share({ title: "Divya Jap — My Sadhana Rank", text: shareText, url: shareUrl });
            return;
          } catch (_) {}
        }
        try {
          await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
          showToast("Rank Challenge Link Copied!");
        } catch (_) {
          showToast("Link Ready: " + shareUrl.slice(0, 42) + "...");
        }
      });

      document.getElementById("leaderboardList").addEventListener("click", (e) => {
        const rem = e.target.closest("[data-remove-friend]");
        if (!rem) return;
        const fid = rem.dataset.removeFriend;
        state.friends = (state.friends || []).filter((f) => f.id !== fid);
        saveState();
        updateUI();
        renderLeaderboard();
        showToast("Removed from Circle");
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
      if (importedFriendName) {
        saveState();
        showToast(`👥 Added ${importedFriendName} to your Ranking Circle!`);
      }

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
