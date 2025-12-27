    // Get the mobile menu button and menu container elements
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');

    // Toggle the menu visibility when the button is clicked
    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Close the menu automatically when a link is clicked
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove('active');
        });
    });

    // Set the current year in the footer
    const footer_year = document.getElementById("footerYear");
    const currentYear = new Date().getFullYear();
    footer_year.textContent = currentYear;

    // Version number
    const version_number = document.getElementById("versionNumber");
    const VERSION = "v0.2.2";
    version_number.textContent = VERSION;


// Function to get CSS class based on project state
    function getStateClass(state) {
    switch (state.toLowerCase()) {
        case "active":
        return "state-active";
        case "paused":
        return "state-paused";
        case "planned":
        return "state-planned";
        case "archived":
        return "state-archived";
        default:
        return "state-unknown";
    }
    }

    // Top projects data
const TOP_PROJECTS = [
    {
        title: "nirbhayslab.dev",
        status: "Active",
        description: "Personal dev lab — portfolio, about me, projects, notes, and experiments.",
        stack: ["CSS", "HTML", "JS"],
        link: "https://github.com/nirbhayslab/nirbhayslab.dev"
    },
    {
        title: "EduZynora",
        status: "Planned",
        description: "A student-built platform for notes, PDFs, sample papers and educational resources.",
        stack: [ "Django", "HTML", "CSS"   ],
        link: "https://github.com/nirbhayslab/EduZynora"
    },
    {
        title: "FacialRecognition AttendanceSystem",
        status: "Active",
        description: "Python-based system for automated attendance using facial recognition via webcam.",
        stack: ["Python", "Computer Vision", "OpenCV"],
        link: "https://github.com/nirbhayslab/FacialRecognitionAttendanceSystem"
    },
    {
        title: "WeatherApp-python",
        status: "Paused",
        description: "A simple weather application using PyQt5 and OpenWeather API for real-time weather updates.",
        stack: ["Python", "PyQt5", "API"],
        link: "https://github.com/nirbhayslab/WeatherApp-python"
    },
    {
        title: "JARIVIS-1.1-PYTHON-AI-ASSISTANT",
        status: "Archived",
        description: "Python-based AI assistant that automates tasks like opening Websites, time checks, and calculations.",
        stack: ["Python", "AI/Automation"],
        link: "https://github.com/nirbhayslab/JARIVIS-1.1-PYTHON-AI-ASSISTANT"
    },
    {
        title: "strangexstarkWeb",
        status: "Paused",
        description: "Your personal website built with HTML, CSS, and JavaScript to showcase your projects and journey.",
        stack: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/nirbhayslab/strangexstarkWeb"
    }
];

    // Function to render top projects
    const PROJECTS_GRID = document.getElementById("projectsGrid");
    function renderTopProjects() {
    PROJECTS_GRID.innerHTML = TOP_PROJECTS.map(project => `
        <div class="project">
        <h3 class="title">${project.title}</h3>

        <div class="state ${getStateClass(project.status)}">
            <p>${project.status}</p>
        </div>

        <div class="description">
            <p class="desc-text">${project.description}</p>
        </div>

        ${project.stack.map(t => `<div class="project-stack">${t}</div>`).join("")}

        ${project.link !== "#" ? `
            <div class="project-link">
            <a href="${project.link}" target="_blank">View</a>
            </div>` : ""}
        </div>
    `).join("");
    }




    // Initial rendering of top projects
    renderTopProjects();
