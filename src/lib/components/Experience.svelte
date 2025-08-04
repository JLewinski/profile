<script lang="ts">
    import type { ProfileData } from "$lib/data/profile";

    let { profile }: { profile: ProfileData } = $props();
</script>

<section class="experience-section">
    <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
            {#each profile.experience as job, index}
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="job-card">
                        <div class="job-header">
                            <div class="job-title-company">
                                <h3 class="job-title">{job.position}</h3>
                                <h4 class="company-name">{job.company}</h4>
                            </div>
                            <div class="job-meta">
                                <span class="duration">{job.duration}</span>
                                {#if job.location}
                                    <span class="location">{job.location}</span>
                                {/if}
                            </div>
                        </div>
                        <div class="job-description">
                            {#each job.description as desc}
                                <p class="description-item">{desc}</p>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .experience-section {
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

    .timeline {
        position: relative;
        padding-left: 2rem;
    }

    .timeline::before {
        content: "";
        position: absolute;
        left: 0.5rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--gradient-timeline);
    }

    .timeline-item {
        position: relative;
        margin-bottom: 2.5rem;
    }

    .timeline-marker {
        position: absolute;
        left: -2rem;
        top: 1rem;
        width: 1rem;
        height: 1rem;
        background: var(--color-primary);
        border-radius: 50%;
        border: 3px solid var(--color-surface);
        box-shadow: 0 0 0 3px var(--color-primary);
        z-index: 1;
    }

    .job-card {
        background: var(--color-surface);
        border-radius: 0.75rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px var(--color-shadow);
        border: 1px solid var(--color-border);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
    }

    .job-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px var(--color-shadow-hover);
    }

    .job-header {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        align-items: start;
        margin-bottom: 1rem;
    }

    .job-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--color-text-primary);
        margin: 0 0 0.25rem 0;
    }

    .company-name {
        font-size: 1.125rem;
        font-weight: 500;
        color: var(--color-primary);
        margin: 0;
    }

    .job-meta {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
        text-align: right;
    }

    .duration {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-text-muted);
        background: var(--color-background);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
    }

    .location {
        font-size: 0.8rem;
        color: var(--color-text-light);
    }

    .job-description {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .description-item {
        margin: 0;
        line-height: 1.6;
        color: var(--color-text-secondary);
        position: relative;
        padding-left: 1rem;
    }

    .description-item::before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--color-primary);
        font-weight: bold;
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .section-title {
            font-size: 1.75rem;
        }

        .timeline {
            padding-left: 2rem;
        }

        .timeline::before {
            left: 0.85rem;
        }

        .timeline-marker {
            left: -1.5rem;
        }

        .job-header {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .job-meta {
            align-items: flex-start;
            text-align: left;
        }

        .job-card {
            padding: 1rem;
        }

        .job-title {
            font-size: 1.125rem;
        }

        .company-name {
            font-size: 1rem;
        }
    }
</style>
