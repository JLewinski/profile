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
    topSkills: ["C#", "ASP.NET Core", "JavaScript", "SQL", "DevOps", "GitHub Actions", "GitHub Enterprise", "Blazor", "Svelte", "GitHub Copilot", "Claude", "Codex", "Python", "Azure"],
    summary: "Results-driven Senior Software Engineer with deep expertise in architecting and delivering performant, maintainable, and secure web applications. Proven success modernizing legacy .NET solutions, migrating CI/CD workflows from Azure DevOps and other systems to GitHub Actions in GitHub Enterprise, elevating frontend experiences with contemporary frameworks (Svelte, React), and improving developer velocity through clean architecture, automation, and effective mentoring. Experienced in applying AI-assisted development workflows with GitHub Copilot, Claude, and Codex across code generation, chat-driven problem solving, and agent-based automation to accelerate delivery and improve team productivity, beginning with GitHub Copilot adoption during earlier development roles and continuing through advanced workflow customization. Passionate about translating business objectives into scalable technical solutions and continuously elevating code quality, reliability, and user experience while expanding my expertise in Python and Azure data workflows.",
    personalNote: "Outside of engineering, I'm a dedicated husband and father, continually inspired by time with my wife and young daughter—fueling both balance and purpose in my professional craft.",
    experience: [
        {
            company: "Alliance Technical Group",
            position: "Senior Software Developer",
            duration: "September 2024 - Present",
            description: [
                "Architected and developed internal web application using ASP.NET Core and Fast Endpoints, SQL database, and Svelte Front End currently in use for license management of our customers.",
                "Migrated Azure DevOps pipelines and other CI/CD workflows to GitHub Actions as the team transitioned to GitHub Enterprise, adapting existing automation to the new platform.",
                "Developed and refined AI-assisted development workflows using GitHub Copilot, Claude, and Codex in completion, chat, and agent modes, including custom skills and automation patterns tailored to team workflows and project delivery.",
                "Developed many POC applications using different UI and Backend frameworks to provide options for our team to choose a modern tech stack for all future applications. UI frameworks included Svelte, Vue, Blazor, React, and Angular. Backend was all done in ASP.NET but structured differently using Fast Endpoints, Minimal API, and MediatR.",
                "Architected and developed a report bundler and scheduler for our customers which builds off existing report tooling in our ASP.NET Core MVC application and SQL databases allowing customers to run multiple reports for defined time spans to easily retrieve proper regulatory information that took days to do manually.",
                "Architect and develop scalable enterprise applications in C#, elevate code quality standards, and mentor engineers while advancing modernization initiatives across .NET and frontend stacks.",
                "Developed a new Maui application based off our existing Xamarin application for a new type of emissions requirement impacting all our customers and allowing us to expand our reach. Additionally made modifications to an existing Sync Service API used by the mobile applications to support this and maintain compatibility.",
                "Continuing to expand expertise in Python and Azure data technologies to support modern data workflows and cloud-native integrations."
            ],
            includeInPDF: true
        },
        {
            company: "Alliance Technical Group",
            position: "Software Developer II",
            duration: "August 2023 - September 2024",
            description: [
                "Refactored existing C# code to use EF Core instead of LLBLGen and made efficiency modifications to optimize the number of times data was being requested from the database providing improvements of up to ~50%.",
                "Adopted GitHub Copilot early in development workflows, using inline code completion, chat assistance, and iterative refinement to speed up refactoring, debugging, and feature development while maintaining clean, maintainable code quality.",
                "Refactored existing ASP.NET Core MVC front end to use separate JS files, no View Bag, and partial Views to consolidate logic and code, separate functionality from display, improve type safety and readability, and improved UI/UX by removing unnecessary elements/requests",
                "Implemented team git standards using master, staging, and feature branches as well as pull requests",
                "Implemented CICD pipelines in Azure DevOps",
                "Implemented SQL Projects to keep track of schema changes",
                "Developed multi-tenant access to our existing ASP.NET Core MVC application to allow users to quickly switch between tenants they have access to.",
                "Operate effectively in an Agile/Scrum environment running 2-week sprint cycles, contributing to sprint planning, daily standups, sprint reviews, and retrospectives with a team of 10 people, 7 developers, 1 scrum master, 1 product owner, and 1 business analyst as well as an off shore QA team.",
                "All projects mentioned support over 10000 customers each with potentially 100's of users."
            ],
            includeInPDF: true
        },
        {
            company: "Powerserve",
            position: "Software Engineer",
            duration: "September 2021 - July 2023",
            description: [
                "Delivered and supported web application using ASP.NET Core MVC, ensuring robustness, performance, and clean separation of concerns for our manufacturing clients where over 100 workstations were constantly making requests throughout the plant to track their inventory and manufacturing process through manual entry and automated entry by industrial machinery.",
                "Used GitHub Copilot throughout development workflows to accelerate boilerplate generation, code exploration, refactoring, and troubleshooting in both ASP.NET Core MVC and TypeScript-heavy front-end work.",
                "Refactored hard-coded SQL data layers to Entity Framework, significantly improving maintainability and testability for our manufacturing clients",
                "Developed new ASP.NET Core website with custom TypeScript frontend for a new client.",
                "Used Git with GitHub utilizing branches for different features.",
                "Worked on a team of 3 developers meeting daily and maintaining a con bon board based on current client needs."
            ],
            includeInPDF: true
        },
        {
            company: "Torch Technologies, Inc.",
            position: "Software Engineer",
            duration: "April 2020 - September 2021",
            description: [
                "Developed full-stack solutions leveraging .NET and WPF for internal tooling and large-scale enterprise initiatives within the DOD, contributing reusable components and production-quality features."
            ],
            includeInPDF: true
        },
        {
            company: "Robins Air Force Base",
            position: "Electronics Engineer",
            duration: "June 2019 - April 2020",
            description: [
                "Built .NET applications to streamline embedded systems testing workflows and improve engineering efficiency within mission-focused environments.",
                "Maintained and enhanced C++ embedded software, ensuring reliability and alignment with stringent operational requirements."
            ],
            includeInPDF: true
        },
        {
            company: "Auburn University - Campus Web Solutions",
            position: "Full Stack Developer",
            duration: "January 2017 - June 2019",
            description: [
                "Delivered full-stack web solutions using C#, SQL, Entity Framework, JavaScript, MVC, Knockout.js, Blazor, and Angular in an Agile environment.",
                "Promoted to team lead, providing technical direction, mentoring peers, and ensuring consistent delivery quality across student development teams."
            ],
            includeInPDF: true
        }
    ],
    education: [
        {
            institution: "Auburn University",
            degree: "Bachelor's Degree, Computer Engineering",
            duration: "May 2019"
        },
        {
            institution: "Moorpark College",
            degree: "Pre-Engineering",
            duration: "2014 - 2015"
        }
    ]
};
