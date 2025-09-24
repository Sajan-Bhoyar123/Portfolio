import Project from './Project.jsx';

export default function ProjectList() {
    // You can optionally move this to a separate file: data/projectData.js
    const projects = [
        {
            title: "Aarogyam",
            src: "/aarogyam_image.webp",
            description: "A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency.",           
             codeUrl: "https://github.com/Sajan-Bhoyar123/Aarogyamm",
            projectUrl: "https://mediconnect-uwnw.onrender.com",
            category: "Healthcare",
            date: "2025"
        },
        {
            title: "Airbnb Clone",
            src: "/wanderlust_image.webp",
             codeUrl: "https://github.com/Sajan-Bhoyar123/Airbnb",
            description: "A full-stack Airbnb clone that allows users to explore and book stays across various destinations. Features include property listing, booking management, authentication, and responsive UI. The application is built using Node.js, Express.js, MongoDB, and EJS for server-side rendering. It also exposes RESTful APIs for various operations, ensuring a scalable and modular architecture.",
            projectUrl: "https://airbnb-o9jf.onrender.com",
            category: "Travel",
            date: "2024"
        },
        {
            title: "VibeSync",
            src: "/vibesync_image.webp",
            description: "A compassionate mental health chatbot designed to detect emotions and provide gentle, thoughtful responses. Powered by OpenAI, it creates a safe, calming space where users can express themselves freely and feel truly heard. With a focus on emotional awareness and simplicity, VibeSync blends powerful AI with a human-centered design to support mental well-being.",          
             codeUrl: "https://github.com/Sajan-Bhoyar123/Vibesync-Project",
            projectUrl: "https://vibesync-ao2c.onrender.com/chatbot",
            category: "Wellness",
            date: "2025"
        },
        {
            title: "Weather-App",
            src: "/Weather-App.jpg",
            description: "The Weather App is a responsive and user-friendly application that provides real-time weather updates for any location worldwide. It uses weather APIs to fetch current weather conditions, including temperature, humidity, wind speed, and weather status (e.g., sunny, rainy, cloudy).",          
             codeUrl: "https://github.com/Sajan-Bhoyar123/Wheather-App",
            projectUrl: "https://wheather-app-foul.onrender.com",
            category: "Weather-Detection",
            date: "2025"
        },

        {
            title: "EduNear: Smart College Finder & Management System",
            src: "/portfolio_image.jpg",
            description: "A smart system helping students find nearest colleges by location while offering complete college management features for convenience.",
            codeUrl: "https://github.com/Sajan-Bhoyar123/college",
            projectUrl: "https://college-fckc.onrender.com",
            category: "College",
            date: "2025"
        }
    ];
    return (
        <div className="row" style={{width: "99vw", margin: "0", marginTop: "20px"}}>
                {projects.map((project, index) => (
                    <Project
                            key={index}
                            title={project.title}
                            src={project.src}
                            description={project.description}
                            codeUrl={project.codeUrl}
                            projectUrl={project.projectUrl}
                            category={project.category}
                            date={project.date}
                    />
                ))}
        </div>
    );
}
