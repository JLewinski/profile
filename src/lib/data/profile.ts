// Profile data extracted from Profile.md
export interface Experience {
    company: string;
    position: string;
    duration: string;
    location?: string;
    description: string[];
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
            description: ["Currently serving as Senior Software Developer, continuing to build and maintain enterprise applications."]
        },
        {
            company: "Alliance Technical Group",
            position: "Software Developer II",
            duration: "August 2023 - September 2024 (1 year 2 months)",
            description: ["Advanced to Software Developer II role, taking on increased responsibilities in application development and team leadership."]
        },
        {
            company: "Powerserve",
            position: "Software Engineer",
            duration: "September 2021 - July 2023 (1 year 11 months)",
            description: [
                "Developing and maintaining applications for various clients. Most applications are ASP.NET MVC applications. Other applications include ASP.NET CORE MVC, Console Applications, and mobile applications.",
                "Developing tables, views, and stored procedures in SQL database for applications to interface with."
            ]
        },
        {
            company: "Torch Technologies, Inc.",
            position: "Software Engineer",
            duration: "April 2020 - September 2021 (1 year 6 months)",
            location: "Huntsville, Alabama, United States",
            description: [
                "Full Stack development using .NET products. Developed many internal WPF applications as well as working on a larger WPF application as well as a new ASP.NET Core MVC application."
            ]
        },
        {
            company: "Robins Air Force Base",
            position: "Electronics Engineer",
            duration: "June 2019 - April 2020 (11 months)",
            description: [
                "Developing and maintaining applications (.NET) to enable testing and development of embedded systems as well as some applications for general project management.",
                "Additionally develop and maintain the embedded systems (C++)."
            ]
        },
        {
            company: "Auburn University - Campus Web Solutions",
            position: "Full Stack Developer",
            duration: "January 2017 - June 2019 (2 years 6 months)",
            location: "Auburn, Alabama",
            description: [
                "Full stack web development using mainly Visual Studio and Microsoft SQL Server Management Studio. Here I learned and developed with C#, SQL, JS, MVC, Knockout.js, etc. I worked with a team of fellow COOP students to develop web applications.",
                "For my last year I was the leader of our team as a mentor."
            ]
        },
        {
            company: "Best Buy",
            position: "Sales Associate",
            duration: "June 2016 - August 2016 (3 months)",
            location: "Mayfield Heights, OH",
            description: [
                "Provide customers with a complete solution through selling computer products and services."
            ]
        },
        {
            company: "Sandbox Computers for Kids, Inc.",
            position: "Software Developer and Instructor",
            duration: "June 2015 - October 2015 (5 months)",
            location: "Thousand Oaks, California",
            description: [
                "Responsibilities include, but are not limited to, designing applications for teaching material and administrative purposes, teaching students K-12, collaborating on curriculum content development, developing lesson plans, reviewing assignments, assigning and mentoring students on projects, participating in faculty development, teaching in one of our studios, traveling to schools / after-schools to conduct classes, and supporting promotional and outreach activities."
            ]
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
