<script lang="ts">
    import type { ProfileData } from "$lib/data/profile";

    let { profile }: { profile: ProfileData } = $props();
</script>

<section class="projects-section">
    <div class="container">
        <h2 class="section-title">Projects & Code</h2>
        <div class="projects-content">
            <div class="github-showcase">
                <div class="github-header">
                    <div class="github-info">
                        <h3 class="github-title">
                            Open Source & Personal Projects
                        </h3>
                        <p class="github-description">
                            Explore my coding projects, contributions, and
                            experiments on GitHub. From web applications to
                            utility tools, I enjoy building solutions and
                            sharing knowledge with the developer community.
                        </p>
                    </div>
                    <div class="github-stats">
                        <div class="stat-item">
                            <span class="stat-label">Platform</span>
                            <span class="stat-value">GitHub</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Profile</span>
                            <span class="stat-value">@JLewinski</span>
                        </div>
                    </div>
                </div>

                <div class="github-actions">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="github-button primary"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                        View GitHub Profile
                    </a>
                    <a
                        href="{profile.github}?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="github-button secondary"
                    >
                        Browse Repositories
                    </a>
                </div>
            </div>

            <div class="tech-highlight">
                <h4 class="tech-title">Technologies I Work With</h4>
                <div class="tech-grid">
                    <div class="tech-category">
                        <h5 class="category-title">Backend</h5>
                        <div class="tech-tags">
                            <span class="tech-tag">ASP.NET Core</span>
                            <span class="tech-tag">C#</span>
                            <span class="tech-tag">SQL Server</span>
                            <span class="tech-tag">.NET</span>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h5 class="category-title">Frontend</h5>
                        <div class="tech-tags">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Svelte</span>
                            <span class="tech-tag">React</span>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h5 class="category-title">Tools & Platforms</h5>
                        <div class="tech-tags">
                            <span class="tech-tag">Visual Studio</span>
                            <span class="tech-tag">Git</span>
                            <span class="tech-tag">Azure</span>
                            <span class="tech-tag">SQL Server</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .projects-section {
        margin-bottom: 3rem;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: 2rem;
        border-bottom: 3px solid var(--color-primary);
        padding-bottom: 0.5rem;
        display: inline-block;
    }

    .projects-content {
        display: grid;
        gap: 2rem;
    }

    .github-showcase {
        background: var(--color-surface);
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 4px 6px var(--color-shadow);
        border: 1px solid var(--color-border);
        position: relative;
        overflow: hidden;
    }

    .github-showcase::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--gradient-card-accent);
    }

    .github-header {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 2rem;
        align-items: start;
        margin-bottom: 2rem;
    }

    .github-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-text-primary);
        margin: 0 0 1rem 0;
    }

    .github-description {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-text-secondary);
        margin: 0;
    }

    .github-stats {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
    }

    .stat-label {
        font-size: 0.875rem;
        color: var(--color-text-muted);
        font-weight: 500;
    }

    .stat-value {
        font-size: 1rem;
        color: var(--color-primary);
        font-weight: 600;
    }

    .github-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .github-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
        border: 2px solid;
    }

    .github-button.primary {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
    }

    .github-button.primary:hover {
        background: var(--color-primary-dark);
        border-color: var(--color-primary-dark);
        transform: translateY(-1px);
        text-decoration: none;
    }

    .github-button.secondary {
        background: transparent;
        color: var(--color-primary);
        border-color: var(--color-primary);
    }

    .github-button.secondary:hover {
        background: var(--color-primary);
        color: white;
        transform: translateY(-1px);
        text-decoration: none;
    }

    .tech-highlight {
        background: var(--gradient-surface);
        border-radius: 1rem;
        padding: 2rem;
        border: 1px solid var(--color-border);
    }

    .tech-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--color-text-primary);
        margin: 0 0 1.5rem 0;
    }

    .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .tech-category {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .category-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-primary);
        margin: 0;
    }

    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tech-tag {
        background: var(--color-surface);
        color: var(--color-text-secondary);
        padding: 0.375rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid var(--color-border);
        transition: all 0.2s ease;
    }

    .tech-tag:hover {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .section-title {
            font-size: 1.75rem;
        }

        .github-showcase {
            padding: 1.5rem;
        }

        .github-header {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .github-stats {
            align-items: flex-start;
        }

        .stat-item {
            align-items: flex-start;
        }

        .github-actions {
            flex-direction: column;
        }

        .github-button {
            justify-content: center;
        }

        .tech-highlight {
            padding: 1.5rem;
        }

        .tech-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
