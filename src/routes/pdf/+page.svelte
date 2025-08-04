<script lang="ts">
    import { profileData } from "$lib/data/profile.js";
</script>

<svelte:head>
    <title>{profileData.name} - Resume</title>
    <meta name="description" content="Resume of {profileData.name}" />
</svelte:head>

<div class="pdf-resume">
    <!-- Header Section -->
    <header class="pdf-header">
        <div class="header-content">
            <div class="name-title">
                <h1>{profileData.name}</h1>
                <h2>{profileData.title}</h2>
                <p class="location">{profileData.location}</p>
            </div>
            <div class="contact-info">
                <div class="contact-item">
                    <span class="label">Email:</span>
                    <a href="mailto:{profileData.email}" class="contact-link"
                        >{profileData.email}</a
                    >
                </div>
                <div class="contact-item">
                    <span class="label">LinkedIn:</span>
                    <a
                        href={profileData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-link">linkedin.com/in/jacoblewinski</a
                    >
                </div>
                <div class="contact-item">
                    <span class="label">GitHub:</span>
                    <a
                        href={profileData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-link">github.com/JLewinski</a
                    >
                </div>
            </div>
        </div>
    </header>

    <!-- Skills Section -->
    <section class="pdf-section">
        <h3>Core Skills</h3>
        <div class="skills-grid">
            {#each profileData.topSkills as skill}
                <span class="skill-item">{skill}</span>
            {/each}
        </div>
    </section>

    <!-- Summary Section -->
    <section class="pdf-section">
        <h3>Professional Summary</h3>
        <p class="summary-text">{profileData.summary}</p>
    </section>

    <!-- Experience Section -->
    <section class="pdf-section">
        <h3>Professional Experience</h3>
        {#each profileData.experience.filter((exp) => exp.includeInPDF) as exp}
            <div class="experience-item">
                <div class="exp-header">
                    <div class="exp-title">
                        <h4>{exp.position}</h4>
                        <p class="company">
                            {exp.company}{exp.location
                                ? ` • ${exp.location}`
                                : ""}
                        </p>
                    </div>
                    <div class="exp-duration">{exp.duration}</div>
                </div>
                <ul class="exp-description">
                    {#each exp.description as desc}
                        <li>{desc}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </section>

    <!-- Education Section -->
    <section class="pdf-section">
        <h3>Education</h3>
        {#each profileData.education as edu}
            <div class="education-item">
                <div class="edu-header">
                    <div class="edu-title">
                        <h4>{edu.degree}</h4>
                        <p class="institution">
                            {edu.institution}{edu.location
                                ? ` • ${edu.location}`
                                : ""}
                        </p>
                    </div>
                    <div class="edu-duration">{edu.duration}</div>
                </div>
            </div>
        {/each}
    </section>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.4;
        color: #333;
        background: white;
    }

    .pdf-resume {
        max-width: 8.5in;
        margin: 0 auto;
        padding: 0.75in;
        background: white;
        min-height: 11in;
    }

    .pdf-header {
        border-bottom: 2px solid #10b981;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .name-title h1 {
        font-size: 2.25rem;
        font-weight: 700;
        margin: 0;
        color: #10b981;
    }

    .name-title h2 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0.25rem 0;
        color: #374151;
    }

    .location {
        font-size: 1rem;
        margin: 0;
        color: #6b7280;
    }

    .contact-info {
        text-align: right;
        font-size: 0.9rem;
    }

    .contact-item {
        margin-bottom: 0.25rem;
    }

    .contact-item .label {
        font-weight: 600;
        color: #374151;
    }

    .contact-link {
        color: #10b981;
        text-decoration: none;
        margin-left: 0.5rem;
        font-weight: 500;
    }

    .contact-link:hover {
        text-decoration: underline;
    }

    .pdf-section {
        margin-bottom: 1.5rem;
    }

    .pdf-section h3 {
        font-size: 1.125rem;
        font-weight: 700;
        color: #10b981;
        margin: 0 0 0.75rem 0;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 0.25rem;
    }

    .skills-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .skill-item {
        background: #f3f4f6;
        color: #374151;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #d1d5db;
    }

    .summary-text {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #374151;
        margin: 0;
    }

    .experience-item {
        margin-bottom: 1.25rem;
    }

    .exp-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
    }

    .exp-title h4 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
        color: #374151;
    }

    .company {
        font-size: 0.9rem;
        color: #6b7280;
        margin: 0.125rem 0 0 0;
        font-style: italic;
    }

    .exp-duration {
        font-size: 0.875rem;
        color: #6b7280;
        font-weight: 500;
        text-align: right;
        white-space: nowrap;
    }

    .exp-description {
        margin: 0;
        padding-left: 1.25rem;
        color: #374151;
    }

    .exp-description li {
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 0.25rem;
    }

    .education-item {
        margin-bottom: 1rem;
    }

    .edu-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .edu-title h4 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
        color: #374151;
    }

    .institution {
        font-size: 0.9rem;
        color: #6b7280;
        margin: 0.125rem 0 0 0;
        font-style: italic;
    }

    .edu-duration {
        font-size: 0.875rem;
        color: #6b7280;
        font-weight: 500;
        text-align: right;
    }

    /* Print Styles */
    @media print {
        :global(body) {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .pdf-resume {
            padding: 0.5in;
            margin: 0;
            max-width: none;
            width: 100%;
        }

        .contact-link {
            color: #10b981 !important;
            text-decoration: none;
        }

        .pdf-section {
            margin-bottom: 1.25rem;
        }

        .experience-item {
            margin-bottom: 1rem;
        }

        .exp-description li {
            margin-bottom: 0.125rem;
        }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .pdf-resume {
            padding: 1rem;
        }

        .header-content {
            flex-direction: column;
            gap: 1rem;
        }

        .contact-info {
            text-align: left;
        }

        .exp-header {
            flex-direction: column;
            gap: 0.25rem;
        }

        .exp-duration {
            text-align: left;
        }

        .edu-header {
            flex-direction: column;
            gap: 0.25rem;
        }

        .edu-duration {
            text-align: left;
        }
    }
</style>
