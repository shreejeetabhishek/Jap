/* Divya Jap — dedicated mala rendering layer.
   Owns bead appearance, hanging geometry, motion and canvas rendering.
   The application controller communicates through a small public API. */
(function () {
  window.FpvMalaRenderer = class FpvMalaRenderer {
        constructor(canvas) {
          this.canvas = canvas;
          this.ctx = canvas.getContext("2d");
          this.width = 360;
          this.height = 560;
          this.dpr = Math.min(window.devicePixelRatio || 1, 2.5);

          this.material = "rudraksha";
          this.targetCount = 108;
          this.currentCount = 0;

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
          const rect = this.canvas.parentElement.getBoundingClientRect();
          this.width = Math.max(280, rect.width || window.innerWidth || 360);
          this.height = Math.max(360, rect.height || window.innerHeight * 0.65 || 520);
          this.dpr = Math.min(window.devicePixelRatio || 1, 2.5);

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
              const SIZE = 640;
              const scene = new THREE.Scene();
              const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 30);
              camera.position.set(0.16, 0.10, 4.55);

              const gl = new THREE.WebGLRenderer({
                alpha: true, antialias: true, preserveDrawingBuffer: true,
                powerPreference: "high-performance"
              });
              gl.setPixelRatio(1);
              gl.setSize(SIZE, SIZE, false);
              gl.setClearColor(0x000000, 0);
              gl.outputColorSpace = THREE.SRGBColorSpace;
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.08;
              gl.shadowMap.enabled = true;
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
              const TEX_W = 1024, TEX_H = 512;
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
                    const center = (g + 0.5) * Math.PI * 2 / 5 - 0.16;
                    let d = Math.abs(theta - center);
                    d = Math.min(d, Math.PI * 2 - d);
                    grooveDistance = Math.min(grooveDistance, d);
                  }
                  const groove = Math.exp(-Math.pow(grooveDistance / 0.027, 2)) * Math.pow(sinPhi, 0.55);
                  const ridgeEdge = Math.exp(-Math.pow((grooveDistance - 0.052) / 0.018, 2)) * Math.pow(sinPhi, 0.6);
                  const n1 = Math.sin(theta * 41 + phi * 17) * 0.5;
                  const n2 = Math.sin(theta * 113 - phi * 37) * Math.sin(phi * 61 + theta * 7) * 0.24;
                  const n3 = Math.sin(theta * 263 + phi * 191) * 0.12;
                  const mottled = (hash(x * 0.37, y * 0.41) - 0.5) * 0.42;
                  const fiber = Math.sin(theta * 175 + Math.sin(phi * 13) * 3.2) * 0.055;
                  const noise = n1 * 0.12 + n2 + n3 + mottled + fiber;
                  const poleShade = 1 - 0.17 * Math.pow(Math.abs(Math.cos(phi)), 5);
                  const shade = (1 + noise - groove * 0.60 + ridgeEdge * 0.16) * poleShade;
                  const i = (y * TEX_W + x) * 4;
                  colorImage.data[i] = Math.max(0, Math.min(255, 111 * shade + 15));
                  colorImage.data[i + 1] = Math.max(0, Math.min(255, 51 * shade + 5));
                  colorImage.data[i + 2] = Math.max(0, Math.min(255, 25 * shade + 2));
                  colorImage.data[i + 3] = 255;

                  const relief = 132 + noise * 52 - groove * 76 + ridgeEdge * 34;
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
              for (let p = 0; p < 720; p++) {
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

              const rows = 192, cols = 256;
              const positions = [], uvs = [], indices = [];
              const seedPoint = (phi, theta, extra = 0) => {
                const sp = Math.sin(phi), cp = Math.cos(phi);
                const phase = 0.16 + 0.075 * Math.sin(phi * 2.0) + 0.025 * Math.sin(phi * 7.0);
                const lobe = Math.cos(5 * theta + phase);
                const channel = Math.pow(Math.max(0, (1 - lobe) * 0.5), 7);
                const fine = Math.sin(17 * theta + 11 * phi) * Math.sin(13 * phi + 0.6) * 0.010
                  + Math.sin(37 * theta - 19 * phi) * Math.sin(23 * phi) * 0.004
                  + Math.sin(71 * theta + 43 * phi) * 0.0018;
                const broad = 1 + 0.088 * lobe * Math.pow(sp, 0.62)
                  - 0.032 * channel * Math.pow(sp, 0.7)
                  + 0.010 * Math.sin(phi * 3.2 + 0.4) * Math.pow(sp, 1.4) + fine + extra;
                const poleIrregularity = 0.012 * Math.sin(theta * 3 + 0.7) * Math.pow(Math.abs(cp), 7);
                const r = broad + poleIrregularity;
                return new THREE.Vector3(r * sp * Math.cos(theta) * 0.91, r * cp * 1.03, r * sp * Math.sin(theta) * 0.88);
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
                map: colorMap, bumpMap, bumpScale: 0.105,
                roughnessMap, roughness: 0.98, metalness: 0,
                color: 0xffffff
              });
              const group = new THREE.Group();
              const seed = new THREE.Mesh(geo, seedMaterial);
              seed.rotation.set(0.17, -0.24, 0.055);
              seed.castShadow = true;
              seed.receiveShadow = true;
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

              // Fine, irregular surface nodules add a tactile seed-like silhouette.
              const noduleGeo = new THREE.SphereGeometry(0.010, 7, 6);
              const noduleMat = new THREE.MeshStandardMaterial({ color: 0x6c321b, roughness: 1 });
              const nodules = new THREE.InstancedMesh(noduleGeo, noduleMat, 360);
              const dummy = new THREE.Object3D();
              for (let i = 0; i < 360; i++) {
                const phi = 0.12 + hash(i, 41) * (Math.PI - 0.24);
                const theta = hash(i, 43) * Math.PI * 2;
                const p = seedPoint(phi, theta, 0.004);
                dummy.position.copy(p);
                dummy.scale.setScalar(0.35 + hash(i, 47) * 0.85);
                dummy.lookAt(p.clone().multiplyScalar(2));
                dummy.updateMatrix();
                nodules.setMatrixAt(i, dummy.matrix);
              }
              nodules.rotation.copy(seed.rotation);
              group.add(nodules);

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
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js";
          script.async = true;
          script.dataset.divyaThree = "1";
          script.onload = build;
          script.onerror = () => console.warn("Three.js unavailable; using built-in Rudraksha rendering.");
          document.head.appendChild(script);
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

          // A continuous hanging mala: both sides of the loop travel vertically
          // past the counting bead, so beads remain visible above AND below it.
          const spanY = Math.max(120, bottomY - topY);
          const y = topY + 0.5 * (1 - Math.cos(theta)) * spanY;

          // Keep the two sides close together, like a real strand viewed slightly
          // from the side. This creates overlapping beads without hiding a whole side.
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

          // Put the numbered counting bead inside the hanging strand rather than
          // at its endpoint. This leaves a visible run of beads above and below it.
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

          // Woven golden-silk cap & Brahma knot collar
          ctx.fillStyle = "#c9852c";
          ctx.beginPath();
          ctx.roundRect(-5 * scale, -1 * scale, 10 * scale, 7 * scale, 2.5 * scale);
          ctx.fill();

          ctx.strokeStyle = "#f2c272";
          ctx.lineWidth = 1.1 * scale;
          ctx.strokeRect(-4.5 * scale, 1.5 * scale, 9 * scale, 2 * scale);

          // Fine silken jhalar threads
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

          const displayCount = String(this.currentCount);
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
})();
