// ===== THREE.JS BACKGROUND =====
(function () {

    const canvas = document.getElementById('bg-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 5;

    // Wireframe outer sphere
    const sphereGeo = new THREE.IcosahedronGeometry(2, 3);
    const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.06
    });

    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Inner sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshBasicMaterial({
        color: 0x7c3aed,
        wireframe: true,
        transparent: true,
        opacity: 0.08
    });

    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Floating particle points
    const pointsGeo = new THREE.BufferGeometry();
    const count = 800;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
    }

    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pointsMat = new THREE.PointsMaterial({
        color: 0x00d4ff,
        size: 0.03,
        transparent: true,
        opacity: 0.4
    });

    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // Rings
    const rings = [];

    [3.5, 5].forEach((r, i) => {
        const rGeo = new THREE.TorusGeometry(r, 0.005, 4, 100);
        const rMat = new THREE.MeshBasicMaterial({
            color: i === 0 ? 0x00d4ff : 0x7c3aed,
            transparent: true,
            opacity: 0.15
        });

        const ring = new THREE.Mesh(rGeo, rMat);
        ring.rotation.x = Math.PI / 3 + i * 0.5;
        ring.rotation.y = i * 0.7;

        scene.add(ring);
        rings.push(ring);
    });

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    });

    function animate() {
        requestAnimationFrame(animate);

        const t = Date.now() * 0.001;

        sphere.rotation.x = t * 0.05 + mouseY * 0.3;
        sphere.rotation.y = t * 0.08 + mouseX * 0.3;

        innerSphere.rotation.x = -t * 0.08;
        innerSphere.rotation.y = -t * 0.05;

        points.rotation.y = t * 0.02;

        rings[0].rotation.z = t * 0.1;
        rings[1].rotation.z = -t * 0.07;

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

})();


// ===== EVENTS DATA =====
// ===== EVENTS DATA =====

const events = [

    /* ================= TECHNICAL ================= */

    {
        id: 1,
        name: "Web Sprint",
        tag: "technical",
        tagLabel: "Technical",
        icon: "🌐",
        desc: "Landing Page Development Challenge",
        duration: "1 Hour",
        team: "Solo",
        entry: "₹50",
        prize: "Cash Prize + Certificates",
        fullDesc: `
WEB SPRINT – Landing Page Challenge

• Participants: 20
• Mode: Solo
• Time Limit: 60 Minutes
• Entry Fee: ₹50

Rules:
• No AI tools
• No plagiarism
• No templates
• Use provided theme assets
• Platform: VS Code
`,
        form: "#registration"
    },

    {
        id: 2,
        name: "Code Quest",
        tag: "technical",
        tagLabel: "Technical",
        icon: "💻",
        desc: "3-Round Coding Competition",
        duration: "2 Hours",
        team: "Solo",
        entry: "₹50",
        prize: "Cash Prize + Certificates",
        fullDesc: `
CODE QUEST

• Entry Fee: ₹50
• 3 Elimination Rounds
  - Quiz
  - Debugging
  - Coding

Languages: C, C++, Python, Java
`,
        form: "#registration"
    },

    {
        id: 3,
        name: "Mystery Round",
        tag: "technical",
        tagLabel: "Technical",
        icon: "🎯",
        desc: "Surprise AI Challenge",
        duration: "1 Hour",
        team: "Solo",
        entry: "₹50",
        prize: "Cash Prize + Certificates",
        fullDesc: `
MYSTERY ROUND

• Entry Fee: ₹50
• Mode: Solo
• Task revealed on the spot
`,
        form: "#registration"
    },

    {
        id: 4,
        name: "InsightsX",
        tag: "technical",
        tagLabel: "Technical",
        icon: "📊",
        desc: "Python + Power BI Dashboard Challenge",
        duration: "90 Minutes",
        team: "Solo",
        entry: "₹50",
        prize: "Cash Prize + Certificates",
        fullDesc: `
INSIGHTSX – Data Analytics

• Participants: 20
• Mode: Solo
• No AI / No Internet
• Use provided CSV

Dashboard must include:
• 4 KPI Cards
• 1 Bar Chart
• 1 Line Chart
• 1 Pie Chart
• 2 Slicers
`,
        form: "#registration"
    },

    /* ================= NON TECHNICAL ================= */

    {
        id: 5,
        name: "Ludo BattleGrid",
        tag: "non-tech",
        tagLabel: "Non-Technical",
        icon: "🎲",
        desc: "Life-size Ludo Competition",
        duration: "Fun Rounds",
        team: "Team",
        entry: "₹50",
        prize: "Exciting Rewards + Certificates",
        fullDesc: `
LUDO BATTLEGRID

• Team Event
• Entry Fee: ₹50
• Giant Ludo Board Format
• Fun twists & elimination rounds
`,
        form: "#registration"
    },

    {
        id: 6,
        name: "Canva Event",
        tag: "non-tech",
        tagLabel: "Non-Technical",
        icon: "🎨",
        desc: "Creative Poster Designing",
        duration: "1 Hour",
        team: "Individual",
        entry: "₹50",
        prize: "Certificates + Cash Prize",
        fullDesc: `
CANVA DESIGN CHALLENGE

• Individual Participation
• Entry Fee: ₹50
• Design poster based on given theme
• Judging on creativity & aesthetics
`,
        form: "#registration"
    },

    {
        id: 7,
        name: "Treasure Hunt",
        tag: "non-tech",
        tagLabel: "Non-Technical",
        icon: "🗺️",
        desc: "Campus Clue Challenge",
        duration: "1–2 Hours",
        team: "Team",
        entry: "₹50",
        prize: "Cash Prize + Certificates",
        fullDesc: `
TREASURE HUNT

• Team Participation
• Entry Fee: ₹50
• Solve clues across campus
• Fastest team wins
`,
        form: "#registration"
    },

    /* ================= GAMING ================= */

    {
        id: 8,
        name: "Valorant",
        tag: "gaming",
        tagLabel: "Gaming",
        icon: "🔫",
        desc: "5v5 Knockout Tournament",
        duration: "Knockout",
        team: "Team (5)",
        entry: "₹400 per team",
        prize: "₹6000 Prize Pool",
        fullDesc: `
VALORANT

• Team of 5
• Entry Fee: ₹400 per team
• Prize Pool: ₹6000
  1st: ₹4000
  2nd: ₹2000
• Certificates: 1st, 2nd, 3rd
`,
        form: "#registration"
    },

    {
        id: 9,
        name: "BGMI",
        tag: "gaming",
        tagLabel: "Gaming",
        icon: "🎮",
        desc: "Squad Classic Match",
        duration: "Classic Format",
        team: "Team (4)",
        entry: "₹200 per team",
        prize: "₹7000 Prize Pool",
        fullDesc: `
BGMI

• Team of 4
• Entry Fee: ₹200 per team
• Prize Pool: ₹7000
  1st: ₹4500
  2nd: ₹2500
• No emulators allowed
`,
        form: "#registration"
    },

    {
        id: 10,
        name: "FIFA (FC 25)",
        tag: "gaming",
        tagLabel: "Gaming",
        icon: "⚽",
        desc: "Solo Championship",
        duration: "Knockout",
        team: "Individual",
        entry: "₹100",
        prize: "₹3000 Prize Pool",
        fullDesc: `
FIFA (FC 25)

• Individual
• Entry Fee: ₹100
• Prize Pool: ₹3000
  1st: ₹2000
  2nd: ₹1000
`,
        form: "#registration"
    },

    {
        id: 11,
        name: "Clash Royale",
        tag: "gaming",
        tagLabel: "Gaming",
        icon: "⚔️",
        desc: "1v1 Tournament",
        duration: "Knockout",
        team: "Individual",
        entry: "₹50",
        prize: "₹1500 Prize Pool",
        fullDesc: `
CLASH ROYALE

• 1v1 Format
• Entry Fee: ₹50
• 1st Prize: ₹1500
`,
        form: "#registration"
    }

];
// ================= DYNAMIC FORM FIELDS =================
// ===== BASE FORM FIELDS =====

const baseFields = `

<div class="form-group">
<label>Full Name</label>
<input type="text" name="name" placeholder="Enter your full name (eg: Rahul Sharma)" required>
</div>

<div class="form-group">
<label>College Name</label>
<input type="text" name="collegeName" placeholder="Enter your college name" required>
</div>

<div class="form-group">
<label>College Code</label>
<input type="text" name="collegeCode" placeholder="Enter your college code (example: GNIMS01)" required>
</div>

<div class="form-group">
<label>Phone Number</label>
<input type="tel" name="phone" placeholder="Enter active phone number" required>
</div>

<div class="form-group">
<label>Email</label>
<input type="email" name="email" placeholder="Enter valid email address" required>
</div>

`;



// ===== LOAD FORM BASED ON EVENT =====

function loadFormForEvent(event) {

    const container = document.getElementById("form-fields");

    document.getElementById("form-title").innerText = event.name + " Registration";

    document.getElementById("eventName").value = event.name;
    document.getElementById("eventCategory").value = event.tag;

    let extraFields = "";


    if (event.name === "Valorant") {

        extraFields = `

<div class="form-group">
<label>Team Name</label>
<input type="text" name="teamName" placeholder="Enter your team name" required>
</div>

<div class="form-group">
<label>Team Size</label>
<input type="number" name="teamSize" value="5" readonly>
</div>

<div class="form-group">
<label>Player 1</label>
<input type="text" name="player1" placeholder="Player 1 Name (Captain)" required>
</div>

<div class="form-group">
<label>Player 2</label>
<input type="text" name="player2" placeholder="Player 2 Name" required>
</div>

<div class="form-group">
<label>Player 3</label>
<input type="text" name="player3" placeholder="Player 3 Name" required>
</div>

<div class="form-group">
<label>Player 4</label>
<input type="text" name="player4" placeholder="Player 4 Name" required>
</div>

<div class="form-group">
<label>Player 5</label>
<input type="text" name="player5" placeholder="Player 5 Name" required>
</div>

<div class="form-group">
<label>IGL</label>
<input type="text" name="igl" placeholder="In-Game Leader Name" required>
</div>

<div class="form-group">
<label>Riot ID</label>
<input type="text" name="riotId" placeholder="Example: player#1234" required>
</div>

`;

    }

    else if (event.team.includes("Team")) {

        extraFields = `

<div class="form-group">
<label>Team Name</label>
<input type="text" name="teamName" placeholder="Enter your team name" required>
</div>

<div class="form-group">
<label>Team Size</label>
<input type="number" name="teamSize" placeholder="Enter number of team members" required>
</div>

`;

    }

    container.innerHTML = baseFields + extraFields;

    const regSection = document.getElementById("registration");
    regSection.style.display = "flex";
    setTimeout(() => {
        regSection.scrollIntoView({ behavior: "smooth" });
    }, 50);

}


// ===== RENDER EVENTS =====
function renderEvents(filter = 'all') {

    const grid = document.getElementById('events-grid');

    const filtered =
        filter === 'all'
            ? events
            : events.filter(e => e.tag === filter);

    grid.innerHTML = filtered.map(e => `
        <div class="event-card" onclick="openModal(${e.id})">
            <div class="event-card-banner">
                <div class="event-card-icon">${e.icon}</div>
            </div>
            <div class="event-card-body">
                <div class="event-tag">${e.tagLabel}</div>
                <div class="event-name">${e.name}</div>
                <div class="event-desc">${e.desc}</div>
                <div class="event-meta">
    <div>⏳ ${e.duration}</div>
    <div>👤 ${e.team}</div>
    <div>💰 ${e.entry ? e.entry : e.prize}</div>
</div>
            </div>
        </div>
    `).join('');
}

function filterEvents(tag, btn) {
    document.querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    renderEvents(tag);
}


// ===== MODAL =====
function openModal(id) {

    const e = events.find(ev => ev.id === id);
    if (!e) return;

    document.getElementById('modal-title').textContent = e.name;
    document.getElementById('modal-desc').innerText = e.fullDesc;

    const registerBtn = document.getElementById('modal-register');

    // If event uses internal registration form
    if (e.form === "#registration") {

        registerBtn.href = "#";
        registerBtn.onclick = function () {

            closeModal();

            setTimeout(() => {
                loadFormForEvent(e);
            }, 300);

            return false;
        };

    } else {
        // External Google Form
        registerBtn.href = e.form;
        registerBtn.onclick = null;
    }

    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {

    if (e &&
        e.target !== document.getElementById('modal-overlay') &&
        !e.target.closest('.modal-close')) return;

    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}


// ===== COUNTDOWN =====
function updateCountdown() {

    const target = new Date('2026-04-04T09:00:00');
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ===== REGISTRATION =====
function handleRegistration(e) {

    e.preventDefault();

    const name = document.getElementById('reg-name').value;

    showNotification(`🎉 Welcome ${name.split(' ')[0]}! Redirecting...`);

    setTimeout(() => {
        window.open('https://forms.google.com', '_blank');
        document.getElementById('reg-form').reset();
    }, 1500);
}

function showNotification(msg) {

    const notif = document.getElementById('notification');
    document.getElementById('notification-msg').textContent = msg;

    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 4000);
}


// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
});

// ================= GOOGLE SHEET SUBMISSION =================

// ===== GOOGLE SHEET SUBMISSION =====

document.getElementById("dynamic-form").addEventListener("submit", async function (e) {

    e.preventDefault();

    const form = e.target;

    const idFile = document.getElementById("idProof").files[0];
    const payFile = document.getElementById("paymentScreenshot").files[0];

    const toBase64 = file => new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result.split(",")[1]);

        reader.onerror = reject;

    });


    const idBase64 = await toBase64(idFile);
    const payBase64 = await toBase64(payFile);

    const formData = new FormData(form);

    formData.append("idProof", idBase64);
    formData.append("idProofType", idFile.type);
    formData.append("idProofName", idFile.name);

    formData.append("paymentScreenshot", payBase64);
    formData.append("paymentType", payFile.type);
    formData.append("paymentName", payFile.name);


    fetch(form.action, {
        method: "POST",
        body: formData
    })
        .then(res => res.text())
        .then(msg => {

            alert(msg || "Registration Successful");

            form.reset();
            document.getElementById("registration").style.display = "none";

        })
        .catch(err => {

            alert("Registration Successful");
            form.reset();
            document.getElementById("registration").style.display = "none";

        });

});




// ===== MOBILE MENU =====
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Reduce GPU load on mobile
if (window.innerWidth < 768) {
    renderer.setPixelRatio(1);
}
