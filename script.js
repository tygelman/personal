// JavaScript to handle project detail pop-up
function showProjectDetails(project) {
    // Project data
    const projects = {
        edmund: {
            title: "Edmund",
            description: "At HPoint, I entirely developed the back-end and UI/UX of a tool to automate proprietary sourcing. I used the Selenium and Streamlit frameworks in Python to create Edmund. Edmund takes inputs such as industry, state, county, number of results, and outputs company names, location, website, contact info, Google stars/reviews into a .xlsx file. Edmund also has data-enhancing capabilities as I used the OpenAI API to query GPT-4 to improve and fill in data gaps.",
            videoSrc: null // No video for this project
        },
        openInterest: {
            title: "Open Interest (OI) Anomalies",
            description: "At GTS, I built a tool to detect anomalies in security OI levels. When an anomaly/spike was detected, securities were flagged and allowed traders to backtest trading strategies in light of this new information.",
            videoSrc: null // No video for this project
        },
        availapy: {
            title: "AvailaPy Project (See video demo)",
            description: "AvailaPy is a project aimed at streamlining data access and interaction. This project integrates advanced data analysis techniques and provides an intuitive interface for users to interact with data seamlessly.",
            videoSrc: "caldemo.mp4" // Only this project has a video
        },
        soccerScraper: {
            title: "Soccer Scraper",
            description: "Used Bayes' Theorem to develop a predictive model on individual university acceptance rates based on personalized factors.",
            videoSrc: null // No video for this project
        }
    };
    
    // Get the project details from the data object
    const projectData = projects[project];
    
    // Populate the modal with the project's data
    document.getElementById('project-title').innerText = projectData.title;
    document.getElementById('project-description').innerText = projectData.description;

    // Handle video display
    const videoContainer = document.getElementById('project-video-container');
    const videoElement = document.getElementById('project-video');
    const videoSource = document.getElementById('project-video-source');

    if (projectData.videoSrc) {
        videoSource.src = projectData.videoSrc;
        videoElement.load(); // Load the new video source
        videoContainer.classList.remove('hidden'); // Show video container
    } else {
        videoSource.src = ""; // Clear the video source
        videoElement.load(); // Ensure the previous video is cleared
        videoContainer.classList.add('hidden'); // Hide video container if no video
    }

    // Show the modal
    document.getElementById('project-details-modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('project-details-modal').style.display = 'none';
    
    // Pause the video when closing the modal
    const videoElement = document.getElementById('project-video');
    videoElement.pause();
    videoElement.currentTime = 0;
}

// JavaScript for mobile menu toggle
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const toggleMenu = document.createElement('div');
toggleMenu.innerText = '☰';
toggleMenu.style.cursor = 'pointer';
toggleMenu.style.fontSize = '1.5rem';
toggleMenu.style.display = 'none';
navbar.insertBefore(toggleMenu, navLinks);

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// CSS to handle active class for mobile menu
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
  }

  .nav-links.active {
    display: flex;
  }

  .navbar div[style*="cursor: pointer"] {
    display: block; /* Show the toggle menu icon */
  }
}

