// Profile data extracted from Profile.md
export interface Experience {
    company: string;
    position: string;
    duration: string;
    location?: string;
    description: string[];
    includeInPDF: boolean;
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
    location?: string;
}

export interface ProfileData {
    name: string;
    title: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    topSkills: string[];
    summary: string;
    personalNote: string;
    experience: Experience[];
    education: Education[];
}

export const profileData: ProfileData = {
    name: "Jacob Lewinski",
    title: "Senior Software Engineer",
    location: "Huntsville, Alabama, United States",
    email: "jdlewinski@outlook.com",
    linkedin: "https://www.linkedin.com/in/jacoblewinski",
    github: "https://github.com/JLewinski",
    topSkills: ["ASP.NET Core", "JavaScript", "SQL", "Dev Ops", "Svelte"],
    summary: "Results-driven Senior Software Engineer with deep expertise in architecting and delivering performant, maintainable, and secure web applications. Proven success modernizing legacy .NET solutions, elevating frontend experiences with contemporary frameworks (Svelte, React), and improving developer velocity through clean architecture, automation, and effective mentoring. Passionate about translating business objectives into scalable technical solutions and continuously elevating code quality, reliability, and user experience.",
    personalNote: "Outside of engineering, I'm a dedicated husband and father, continually inspired by time with my wife and young daughter—fueling both balance and purpose in my professional craft.",
    experience: [
        {
            company: "Alliance Technical Group",
            position: "Senior Software Developer",
            duration: "September 2024 - Present",
            description: [
                "Architect scalable enterprise applications, elevate code quality standards, and mentor engineers while advancing modernization initiatives across the .NET and frontend stacks.",
                "Drove rigorous code review practices and mentorship, fostering a collaborative engineering culture and accelerating skill development within the team.",
                "All in addition to responsibilities held as Software Developer II."
            ],
            includeInPDF: true
        },
        {
            company: "Alliance Technical Group",
            position: "Software Developer II",
            duration: "August 2023 - September 2024 (1 year 2 months)",
            description: [
                "Led modernization of legacy ASP.NET MVC features to contemporary component-based frontends (Svelte 5 / React), improving maintainability and user experience.",
                "Implemented data access and API enhancements using Entity Framework (code-first & database-first), FastEndpoints, and modern tooling to streamline delivery."
            ],
            includeInPDF: true
        },
        {
            company: "Powerserve",
            position: "Software Engineer",
            duration: "September 2021 - July 2023 (1 year 11 months)",
            description: [
                "Delivered and supported multiple web applications using ASP.NET MVC / Core, ensuring robustness, performance, and clean separation of concerns.",
                "Engineered optimized SQL Server schemas, views, and stored procedures to enhance data integrity and application responsiveness.",
                "Refactored hard-coded SQL data layers to Entity Framework, significantly improving maintainability and testability."
            ],
            includeInPDF: true
        },
        {
            company: "Torch Technologies, Inc.",
            position: "Software Engineer",
            duration: "April 2020 - September 2021 (1 year 6 months)",
            location: "Huntsville, Alabama, United States",
            description: [
                "Developed full-stack solutions leveraging .NET and WPF for internal tooling and large-scale enterprise initiatives, contributing reusable components and production-quality features."
            ],
            includeInPDF: true
        },
        {
            company: "Robins Air Force Base",
            position: "Electronics Engineer",
            duration: "June 2019 - April 2020 (11 months)",
            description: [
                "Built .NET applications to streamline embedded systems testing workflows and improve engineering efficiency within mission-focused environments.",
                "Maintained and enhanced C++ embedded software, ensuring reliability and alignment with stringent operational requirements."
            ],
            includeInPDF: true
        },
        {
            company: "Auburn University - Campus Web Solutions",
            position: "Full Stack Developer",
            duration: "January 2017 - June 2019 (2 years 6 months)",
            location: "Auburn, Alabama",
            description: [
                "Delivered full-stack web solutions using C#, SQL, Entity Framework, JavaScript, MVC, and Knockout.js in an agile environment.",
                "Promoted to team lead, providing technical direction, mentoring peers, and ensuring consistent delivery quality across student development teams."
            ],
            includeInPDF: true
        },
        {
            company: "Best Buy",
            position: "Sales Associate",
            duration: "June 2016 - August 2016 (3 months)",
            location: "Mayfield Heights, OH",
            description: [
                "Advised customers on end-to-end computing solutions, aligning product capabilities with user needs."
            ],
            includeInPDF: false
        },
        {
            company: "Sandbox Computers for Kids, Inc.",
            position: "Software Developer and Instructor",
            duration: "June 2015 - October 2015 (5 months)",
            location: "Thousand Oaks, California",
            description: [
                "Developed instructional and administrative applications; created curriculum and lesson plans; instructed K-12 students; mentored project work; and supported outreach initiatives."
            ],
            includeInPDF: false
        }
    ],
    education: [
        {
            institution: "Auburn University",
            degree: "Bachelor's Degree, Computer Engineering",
            duration: "2016 - May 2019"
        },
        {
            institution: "Moorpark College",
            degree: "Pre-Engineering",
            duration: "2014 - 2015"
        },
        {
            institution: "Agoura High School",
            degree: "High School, General Studies",
            duration: "2010 - 2014"
        }
    ]
};
