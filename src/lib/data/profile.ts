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
    summary: "I am an experienced software developer specialized in building web applications that enhance the lives of the others. I have a strong foundation with years of experience using ASP.NET Core MVC with vanilla JS. Recently, I have helped multiple projects grow by modernizing the tech stack to include a frontend framework like Svelte and React. I have enjoyed experimenting with different technologies and the differences in performance and developer experience.",
    personalNote: "When I'm not working or learning, I am a loving husband and father. Lately I have been cherishing the time I get to play with my one-year-old daughter and going on dates with my amazing wife.",
    experience: [
        {
            company: "Alliance Technical Group",
            position: "Senior Software Developer",
            duration: "September 2024 - Present",
            description: ["Lead development of enterprise applications, architect scalable solutions, and mentor junior developers while maintaining high-quality code standards and best practices."],
            includeInPDF: true
        },
        {
            company: "Alliance Technical Group",
            position: "Software Developer II",
            duration: "August 2023 - September 2024 (1 year 2 months)",
            description: ["Promoted to Software Developer II with expanded responsibilities in application architecture, team leadership, and cross-functional project coordination to deliver robust software solutions."],
            includeInPDF: true
        },
        {
            company: "Powerserve",
            position: "Software Engineer",
            duration: "September 2021 - July 2023 (1 year 11 months)",
            description: [
                "Developed and maintained multi-client applications using ASP.NET MVC, ASP.NET Core MVC, and mobile technologies, ensuring scalable and efficient solutions across diverse platforms.",
                "Designed and implemented database schemas, views, and stored procedures in SQL Server to optimize application performance and data integrity."
            ],
            includeInPDF: true
        },
        {
            company: "Torch Technologies, Inc.",
            position: "Software Engineer",
            duration: "April 2020 - September 2021 (1 year 6 months)",
            location: "Huntsville, Alabama, United States",
            description: [
                "Engineered full-stack solutions using .NET technologies, developing multiple internal WPF applications and contributing to large-scale WPF and ASP.NET Core MVC projects for enterprise clients."
            ],
            includeInPDF: true
        },
        {
            company: "Robins Air Force Base",
            position: "Electronics Engineer",
            duration: "June 2019 - April 2020 (11 months)",
            description: [
                "Developed .NET applications to support testing and development of embedded systems, streamlining project management workflows and improving operational efficiency.",
                "Maintained and enhanced embedded systems using C++, ensuring reliable performance in critical defense applications."
            ],
            includeInPDF: true
        },
        {
            company: "Auburn University - Campus Web Solutions",
            position: "Full Stack Developer",
            duration: "January 2017 - June 2019 (2 years 6 months)",
            location: "Auburn, Alabama",
            description: [
                "Collaborated in an agile team environment to develop full-stack web applications using C#, SQL, JavaScript, MVC, and Knockout.js with Visual Studio and SQL Server Management Studio.",
                "Promoted to team leader and mentor role, providing guidance and technical leadership to fellow cooperative education students while maintaining project delivery standards."
            ],
            includeInPDF: true
        },
        {
            company: "Best Buy",
            position: "Sales Associate",
            duration: "June 2016 - August 2016 (3 months)",
            location: "Mayfield Heights, OH",
            description: [
                "Provide customers with a complete solution through selling computer products and services."
            ],
            includeInPDF: false
        },
        {
            company: "Sandbox Computers for Kids, Inc.",
            position: "Software Developer and Instructor",
            duration: "June 2015 - October 2015 (5 months)",
            location: "Thousand Oaks, California",
            description: [
                "Responsibilities include, but are not limited to, designing applications for teaching material and administrative purposes, teaching students K-12, collaborating on curriculum content development, developing lesson plans, reviewing assignments, assigning and mentoring students on projects, participating in faculty development, teaching in one of our studios, traveling to schools / after-schools to conduct classes, and supporting promotional and outreach activities."
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
