<script lang="ts">
    import type { ProfileData } from "$lib/data/profile";

    let { profile }: { profile: ProfileData } = $props();
</script>

<header class="header">
    <div class="container">
        <div class="header-content">
            <div class="profile-section">
                <div class="profile-image-container">
                    <img
                        src="/profile.jpg"
                        alt="{profile.name} - Professional headshot"
                        class="profile-image"
                    />
                </div>
                <div class="name-title">
                    <h1 class="name">{profile.name}</h1>
                    <h2 class="title">{profile.title}</h2>
                    <p class="location">{profile.location}</p>
                </div>
            </div>

            <div class="contact-info">
                <div class="contact-item">
                    <span class="label">Email:</span>
                    <a href="mailto:{profile.email}" class="contact-link"
                        >{profile.email}</a
                    >
                </div>
                <div class="contact-item">
                    <span class="label">LinkedIn:</span>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-link"
                    >
                        linkedin.com/in/jacoblewinski
                    </a>
                </div>
                <div class="contact-item">
                    <span class="label">GitHub:</span>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-link"
                    >
                        github.com/JLewinski
                    </a>
                </div>
            </div>
        </div>

        <div class="skills-section">
            <h3 class="skills-title">Top Skills</h3>
            <div class="skills-list">
                {#each profile.topSkills as skill}
                    <span class="skill-tag">{skill}</span>
                {/each}
            </div>
        </div>
    </div>
</header>

<style>
    .header {
        background: var(--gradient-primary);
        color: white;
        padding: 3rem 0;
        margin-bottom: 2rem;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .header-content {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 2rem;
        align-items: center;
        margin-bottom: 2rem;
    }

    .profile-section {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .profile-image-container {
        flex-shrink: 0;
    }

    .profile-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .profile-image:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }

    .name-title {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .name {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.1;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0;
        opacity: 0.9;
    }

    .location {
        font-size: 1rem;
        margin: 0;
        opacity: 0.8;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        text-align: right;
    }

    .contact-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .label {
        font-size: 0.875rem;
        opacity: 0.8;
        font-weight: 500;
    }

    .contact-link {
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s ease;
    }

    .contact-link:hover {
        opacity: 0.8;
        text-decoration: underline;
    }

    .skills-section {
        border-top: 1px solid var(--color-border-light);
        padding-top: 2rem;
    }

    .skills-title {
        font-size: 1.25rem;
        margin: 0 0 1rem 0;
        font-weight: 600;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .skill-tag {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        font-weight: 500;
        backdrop-filter: blur(10px);
        border: 1px solid var(--color-border-light);
    }

    @media (max-width: 768px) {
        .header {
            padding: 2rem 0;
        }

        .container {
            padding: 0 1rem;
        }

        .header-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
        }

        .profile-section {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
        }

        .profile-image {
            width: 100px;
            height: 100px;
        }

        .contact-info {
            text-align: center;
        }

        .name {
            font-size: 2.5rem;
        }

        .title {
            font-size: 1.25rem;
        }
    }

    @media (max-width: 480px) {
        .profile-section {
            gap: 1rem;
        }

        .profile-image {
            width: 80px;
            height: 80px;
        }

        .name {
            font-size: 2rem;
        }

        .title {
            font-size: 1.125rem;
        }
    }
</style>
