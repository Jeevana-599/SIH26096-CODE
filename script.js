/* =====================================================
   AMBEDKAR HERITAGE AI ARCHIVE
   SIH26096
===================================================== */


/* =====================================================
   ARCHIVE DATA
===================================================== */

let archive = [

    {
        id: 1,
        type: "Manuscript",
        title: "Handwritten Constitutional Notes",
        author: "B. R. Ambedkar",
        date: "1947",
        location: "New Delhi",
        subject: "Constitutional",
        icon: "📜",
        keywords: [
            "constitution",
            "draft",
            "rights"
        ],
        description:
            "Digitized manuscript containing constitutional notes."
    },

    {
        id: 2,
        type: "Speech",
        title: "Constituent Assembly Speech",
        author: "B. R. Ambedkar",
        date: "1949",
        location: "New Delhi",
        subject: "Constitutional",
        icon: "🎙️",
        keywords: [
            "constituent assembly",
            "constitution",
            "fundamental rights"
        ],
        description:
            "Historical speech record with transcript."
    },

    {
        id: 3,
        type: "Book",
        title: "Annihilation of Caste",
        author: "B. R. Ambedkar",
        date: "1936",
        location: "India",
        subject: "Social Reform",
        icon: "📚",
        keywords: [
            "caste",
            "social reform",
            "equality"
        ],
        description:
            "Book record used for social reform research."
    },

    {
        id: 4,
        type: "Document",
        title: "Draft Constitution Reference",
        author: "Constituent Assembly",
        date: "1948",
        location: "New Delhi",
        subject: "Law",
        icon: "📄",
        keywords: [
            "draft constitution",
            "law",
            "assembly"
        ],
        description:
            "Constitutional document and historical reference."
    },

    {
        id: 5,
        type: "Photograph",
        title: "Historical Study Photograph",
        author: "Institutional Collection",
        date: "1950",
        location: "Delhi",
        subject: "Education",
        icon: "📷",
        keywords: [
            "photograph",
            "study",
            "ambedkar"
        ],
        description:
            "Historical photograph with provenance metadata."
    },

    {
        id: 6,
        type: "Audio",
        title: "Constitutional History Audio",
        author: "Archive Collection",
        date: "1949",
        location: "New Delhi",
        subject: "Constitutional",
        icon: "🎧",
        keywords: [
            "audio",
            "speech",
            "debate"
        ],
        description:
            "Audio record with transcript workflow."
    },

    {
        id: 7,
        type: "Video",
        title: "Memorial Walkthrough",
        author: "Memorial Collection",
        date: "2025",
        location: "India",
        subject: "Historical Events",
        icon: "🎥",
        keywords: [
            "memorial",
            "museum",
            "video"
        ],
        description:
            "Educational memorial walkthrough video."
    },

    {
        id: 8,
        type: "Book",
        title: "Education and Social Change",
        author: "B. R. Ambedkar",
        date: "1930s",
        location: "India",
        subject: "Education",
        icon: "📚",
        keywords: [
            "education",
            "students",
            "social change"
        ],
        description:
            "Educational collection item."
    },

    {
        id: 9,
        type: "Document",
        title: "Women and Social Rights Notes",
        author: "Institutional Archive",
        date: "1940s",
        location: "India",
        subject: "Women's Rights",
        icon: "📄",
        keywords: [
            "women",
            "rights",
            "social reform"
        ],
        description:
            "Research material related to women's social rights."
    },

    {
        id: 10,
        type: "Speech",
        title: "Social Democracy Discussion",
        author: "B. R. Ambedkar",
        date: "1940s",
        location: "India",
        subject: "Social Reform",
        icon: "🎙️",
        keywords: [
            "social democracy",
            "equality",
            "democracy"
        ],
        description:
            "Speech record indexed for semantic discovery."
    },

    {
        id: 11,
        type: "Audio",
        title: "Historical Lecture Recording",
        author: "Archive Collection",
        date: "1950",
        location: "India",
        subject: "Education",
        icon: "🎧",
        keywords: [
            "lecture",
            "education",
            "audio"
        ],
        description:
            "Historical educational lecture recording."
    },

    {
        id: 12,
        type: "Photograph",
        title: "Memorial Exhibit Collection",
        author: "Museum Collection",
        date: "2024",
        location: "India",
        subject: "Historical Events",
        icon: "📷",
        keywords: [
            "museum",
            "memorial",
            "exhibit"
        ],
        description:
            "Museum exhibit collection for kiosk presentation."
    }

];


/* =====================================================
   NAVIGATION
===================================================== */

function showSection(sectionID) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {

        section.classList.remove("active");

    });


    const selected =
        document.getElementById(sectionID);

    if (selected) {

        selected.classList.add("active");

    }


    const navigation =
        document.querySelectorAll(".nav");

    navigation.forEach(button => {

        button.classList.remove("active");

    });


    renderSectionData(sectionID);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SECTION DATA
===================================================== */

function renderSectionData(sectionID) {

    if (sectionID === "archive") {

        renderArchive();

    }

    if (sectionID === "timeline") {

        renderTimeline();

    }

    if (sectionID === "media") {

        renderMedia();

    }

    if (sectionID === "knowledge") {

        showGraph("Ambedkar");

    }

    if (sectionID === "research") {

        renderSavedItems();

    }

}


/* =====================================================
   ARCHIVE
===================================================== */

function renderArchive(data = archive) {

    const grid =
        document.getElementById("archiveGrid");

    grid.innerHTML = "";


    if (data.length === 0) {

        grid.innerHTML = `
            <div>
                No archive records found.
            </div>
        `;

        return;

    }


    data.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "archive-card";


        card.innerHTML = `

            <div class="archive-image">
                ${item.icon}
            </div>

            <div class="archive-body">

                <small>
                    ${item.type}
                </small>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.author}
                    • ${item.date}
                    • ${item.location}
                </p>

                <p>
                    ${item.description}
                </p>

                <div class="tags">

                    ${item.keywords
                        .map(keyword =>
                            `<span>${keyword}</span>`
                        )
                        .join("")
                    }

                </div>

                <div class="card-buttons">

                    <button
                        class="small-btn"
                        onclick="openRecord(${item.id})">
                        View
                    </button>

                    <button
                        class="small-btn"
                        onclick="saveItem(${item.id})">
                        ☆ Save
                    </button>

                    <button
                        class="small-btn"
                        onclick="speak('${item.description}')">
                        🔊
                    </button>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });


    updateCounters();

}


/* =====================================================
   FILTER ARCHIVE
===================================================== */

function filterArchive() {

    const search =
        document
            .getElementById("archiveSearch")
            .value
            .toLowerCase();


    const type =
        document
            .getElementById("typeFilter")
            .value;


    const subject =
        document
            .getElementById("subjectFilter")
            .value;


    const results =
        archive.filter(item => {

            const text =
                (
                    item.title +
                    item.author +
                    item.subject +
                    item.keywords.join(" ")
                ).toLowerCase();


            return (

                text.includes(search)

                &&

                (
                    !type ||
                    item.type === type
                )

                &&

                (
                    !subject ||
                    item.subject === subject
                )

            );

        });


    renderArchive(results);

}


/* =====================================================
   SEARCH
===================================================== */

function semanticSearch() {

    const input =
        document
            .getElementById("semanticInput")
            .value
            .toLowerCase()
            .trim();


    if (!input) {

        showToast(
            "Please enter a search question."
        );

        return;

    }


    const words =
        input.split(/\W+/);


    const results =
        archive.filter(item => {

            const text = (

                item.title +
                " " +
                item.author +
                " " +
                item.subject +
                " " +
                item.description +
                " " +
                item.keywords.join(" ")

            ).toLowerCase();


            return words.some(word =>

                word.length > 2 &&
                text.includes(word)

            );

        });


    displaySearchResults(
        results.length
            ? results
            : archive.slice(0,5)
    );

}


function displaySearchResults(results) {

    const container =
        document.getElementById(
            "searchResults"
        );


    container.innerHTML = "";


    results.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "search-result";


        div.innerHTML = `

            <small>
                ${item.type}
            </small>

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.description}
            </p>

            <button
                class="small-btn"
                onclick="openRecord(${item.id})">

                Open Archive Record

            </button>

        `;


        container.appendChild(div);

    });

}


function useSearch(text) {

    document
        .getElementById("semanticInput")
        .value = text;

    semanticSearch();

}


/* =====================================================
   OPEN ARCHIVE RECORD
===================================================== */

function openRecord(id) {

    const item =
        archive.find(
            record => record.id === id
        );


    if (!item) return;


    alert(

        "ARCHIVE RECORD\n\n" +

        "Title: " + item.title +

        "\nAuthor: " + item.author +

        "\nDate: " + item.date +

        "\nLocation: " + item.location +

        "\nType: " + item.type +

        "\nSubject: " + item.subject +

        "\n\nOCR / Transcript:\n" +

        "Prototype text layer available."

    );

}


/* =====================================================
   KNOWLEDGE GRAPH
===================================================== */

const graphData = {

    "Ambedkar": [

        "Constituent Assembly",
        "Constitution",
        "Social Democracy",
        "Speeches",
        "Education"

    ],

    "Constitution": [

        "Ambedkar",
        "Fundamental Rights",
        "Draft Constitution",
        "Constituent Assembly"

    ],

    "Constituent Assembly": [

        "Ambedkar",
        "Draft Constitution",
        "Constitution",
        "Debates"

    ],

    "Social Democracy": [

        "Ambedkar",
        "Equality",
        "Social Reform",
        "Democracy"

    ]

};


function showGraph(entity) {

    const graph =
        document.getElementById("graph");


    graph.innerHTML = "";


    const relations =
        graphData[entity] ||
        graphData["Ambedkar"];


    const center =
        document.createElement("div");


    center.className = "node";

    center.textContent = entity;

    center.style.left = "50%";

    center.style.top = "50%";

    graph.appendChild(center);


    relations.forEach(
        (relation,index) => {

            const node =
                document.createElement("div");


            node.className = "node";

            node.textContent = relation;


            const angle =
                (
                    index /
                    relations.length
                ) *
                Math.PI *
                2;


            const x =
                50 +
                35 *
                Math.cos(angle);


            const y =
                50 +
                35 *
                Math.sin(angle);


            node.style.left =
                x + "%";


            node.style.top =
                y + "%";


            node.onclick =
                () => showGraph(relation);


            graph.appendChild(node);

        }
    );


    document
        .getElementById("entityName")
        .textContent = entity;


    document
        .getElementById("entityDescription")
        .textContent =
        "Connected archival entity in the heritage knowledge graph.";


    document
        .getElementById("entityRelations")
        .innerHTML =
        relations
            .map(
                relation =>
                    `<span>${relation}</span>`
            )
            .join("");

}


/* =====================================================
   TIMELINE
===================================================== */

const timelineData = [

    {
        date: "1891",
        title: "Early Life",
        text:
            "Beginning of the historical timeline."
    },

    {
        date: "1913–1917",
        title: "Higher Education",
        text:
            "Education and academic development."
    },

    {
        date: "1930s",
        title: "Social Reform Activities",
        text:
            "Explore social reform and equality related records."
    },

    {
        date: "1946–1949",
        title: "Constituent Assembly",
        text:
            "Explore debates, speeches and constitutional documents."
    },

    {
        date: "1947",
        title: "Drafting Committee",
        text:
            "Explore constitutional records and related documents."
    },

    {
        date: "1950",
        title: "Constitutional Work",
        text:
            "Explore constitutional history resources."
    },

    {
        date: "Later Life",
        title: "Legacy",
        text:
            "Continue expanding the digital heritage timeline."
    }

];


function renderTimeline() {

    const container =
        document.getElementById(
            "timelineContainer"
        );


    container.innerHTML = "";


    timelineData.forEach(event => {

        const div =
            document.createElement("div");


        div.className =
            "event";


        div.innerHTML = `

            <div class="date">
                ${event.date}
            </div>

            <h2>
                ${event.title}
            </h2>

            <p>
                ${event.text}
            </p>

            <button
                class="small-btn"
                onclick="useSearch('${event.title}')">

                Explore Related Records

            </button>

        `;


        container.appendChild(div);

    });

}


/* =====================================================
   MEDIA
===================================================== */

function renderMedia() {

    const grid =
        document.getElementById(
            "mediaGrid"
        );


    const media =
        archive.filter(
            item =>
                item.type === "Audio" ||
                item.type === "Video"
        );


    grid.innerHTML = "";


    media.forEach(item => {

        const card =
            document.createElement("div");


        card.className =
            "media-card";


        card.innerHTML = `

            <div class="media-cover">

                ${item.type === "Audio"
                    ? "🎧"
                    : "🎥"
                }

            </div>

            <div class="media-body">

                <small>
                    ${item.type}
                </small>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

                <button
                    class="small-btn"
                    onclick="playMedia('${item.title}')">

                    ▶ Open Player

                </button>

                <button
                    class="small-btn"
                    onclick="speak('${item.description}')">

                    🔊 Narrate

                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


function playMedia(title) {

    showToast(
        "Demo media player: " + title
    );

}


/* =====================================================
   AI RESEARCH ASSISTANT
===================================================== */

function askQuestion(question) {

    document
        .getElementById(
            "assistantInput"
        )
        .value = question;


    askAssistant();

}


function askAssistant() {

    const input =
        document
            .getElementById(
                "assistantInput"
            );


    const question =
        input.value.trim();


    if (!question) return;


    addChatMessage(
        "user",
        question
    );


    input.value = "";


    setTimeout(() => {

        const lower =
            question.toLowerCase();


        let matches =
            archive.filter(item => {

                const text = (

                    item.title +
                    " " +
                    item.subject +
                    " " +
                    item.description +
                    " " +
                    item.keywords.join(" ")

                ).toLowerCase();


                return lower
                    .split(/\W+/)
                    .some(word =>
                        word.length > 3 &&
                        text.includes(word)
                    );

            });


        if (!matches.length) {

            matches =
                archive.slice(0,3);

        }


        const sources =
            matches
                .map(
                    item =>
                        "AHA-" +
                        String(item.id)
                            .padStart(4,"0") +
                        " — " +
                        item.title
                )
                .join("<br>");


        const answer = `

            I found ${matches.length}
            related archival record(s).

            <br><br>

            The production system would retrieve
            verified institutional documents through
            semantic search/RAG and generate an
            answer with source, page and archive
            references.

            <div class="tags">

                <span>
                    Archive Sources
                </span>

            </div>

            <br>

            ${sources}

        `;


        addChatMessage(
            "bot",
            answer
        );


    },500);

}


function addChatMessage(type,text) {

    const chat =
        document.getElementById("chat");


    const div =
        document.createElement("div");


    div.className =
        type === "user"
            ? "user-message"
            : "bot-message";


    div.innerHTML =
        text;


    chat.appendChild(div);


    chat.scrollTop =
        chat.scrollHeight;

}


/* =====================================================
   TEXT TO SPEECH
===================================================== */

function speak(text) {

    if (!("speechSynthesis" in window)) {

        showToast(
            "Text-to-speech unavailable."
        );

        return;

    }


    speechSynthesis.cancel();


    const voice =
        new SpeechSynthesisUtterance(
            text
        );


    const language =
        document
            .getElementById(
                "languageSelect"
            )
            .value;


    const languages = {

        English: "en-IN",
        Hindi: "hi-IN",
        Marathi: "mr-IN",
        Telugu: "te-IN",
        Tamil: "ta-IN",
        Bengali: "bn-IN",
        Gujarati: "gu-IN",
        Punjabi: "pa-IN"

    };


    voice.lang =
        languages[language] ||
        "en-IN";


    speechSynthesis.speak(
        voice
    );

}


/* =====================================================
   MY RESEARCH
===================================================== */

function saveItem(id) {

    let saved =
        JSON.parse(
            localStorage.getItem(
                "savedArchive"
            ) || "[]"
        );


    if (!saved.includes(id)) {

        saved.push(id);

        localStorage.setItem(
            "savedArchive",
            JSON.stringify(saved)
        );

        showToast(
            "Saved to My Research"
        );

    } else {

        showToast(
            "Already saved"
        );

    }

}


function renderSavedItems() {

    const container =
        document.getElementById(
            "savedItems"
        );


    const saved =
        JSON.parse(
            localStorage.getItem(
                "savedArchive"
            ) || "[]"
        );


    const records =
        saved
            .map(
                id =>
                    archive.find(
                        item =>
                            item.id === id
                    )
            )
            .filter(Boolean);


    container.innerHTML = "";


    if (!records.length) {

        container.innerHTML = `
            <div>
                No saved records yet.
            </div>
        `;

        return;

    }


    records.forEach(item => {

        const card =
            document.createElement("div");


        card.className =
            "archive-card";


        card.innerHTML = `

            <div class="archive-image">
                ${item.icon}
            </div>

            <div class="archive-body">

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   UPLOAD / INGESTION
===================================================== */

function openUpload() {

    document
        .getElementById(
            "uploadModal"
        )
        .classList.add("show");

}


function closeUpload() {

    document
        .getElementById(
            "uploadModal"
        )
        .classList.remove("show");

}


function addArchiveItem() {

    const file =
        document
            .getElementById(
                "fileUpload"
            )
            .files[0];


    const title =
        document
            .getElementById(
                "newTitle"
            )
            .value;


    const author =
        document
            .getElementById(
                "newAuthor"
            )
            .value ||
            "Institutional Collection";


    const date =
        document
            .getElementById(
                "newDate"
            )
            .value ||
            "2026";


    const location =
        document
            .getElementById(
                "newLocation"
            )
            .value ||
            "India";


    const type =
        document
            .getElementById(
                "newType"
            )
            .value;


    const newItem = {

        id:
            Date.now(),

        type:

            type,

        title:

            title ||
            file?.name ||
            "New Archive Item",

        author:

            author,

        date:

            date,

        location:

            location,

        subject:

            "Historical Events",

        icon:

            getIcon(type),

        keywords:

            [
                "heritage",
                "archive",
                "historical"
            ],

        description:

            "Newly ingested archive item. Production workflow would perform image preprocessing, OCR/transcription, metadata validation and indexing."

    };


    archive.unshift(
        newItem
    );


    closeUpload();


    renderArchive();


    updateCounters();


    showToast(
        "Archive item added successfully."
    );

}


function getIcon(type) {

    const icons = {

        Manuscript: "📜",

        Book: "📚",

        Speech: "🎙️",

        Photograph: "📷",

        Audio: "🎧",

        Video: "🎥"

    };


    return icons[type] || "📄";

}


/* =====================================================
   ADMIN COUNTERS
===================================================== */

function updateCounters() {

    document
        .getElementById(
            "totalDocuments"
        )
        .textContent =
        archive.length;


    document
        .getElementById(
            "adminDocuments"
        )
        .textContent =
        archive.length;

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document
        .body
        .classList
        .toggle("dark");

}


/* =====================================================
   KIOSK
===================================================== */

function goFullscreen() {

    if (
        document.documentElement
            .requestFullscreen
    ) {

        document.documentElement
            .requestFullscreen();

    }

}


setInterval(() => {

    const clock =
        document.getElementById(
            "clock"
        );


    if (clock) {

        clock.textContent =
            new Date()
                .toLocaleTimeString();

    }

},1000);


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    },2500);

}


/* =====================================================
   LANGUAGE
===================================================== */

document
    .getElementById(
        "languageSelect"
    )
    .addEventListener(
        "change",
        function() {

            showToast(
                "Language selected: " +
                this.value
            );

        }
    );


/* =====================================================
   INITIALIZE
===================================================== */

renderArchive();

renderTimeline();

renderMedia();

showGraph("Ambedkar");

updateCounters();