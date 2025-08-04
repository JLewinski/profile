<script lang="ts">
    import type { ProfileData } from "$lib/data/profile";

    let { profile }: { profile: ProfileData } = $props();
</script>

<section class="education-section">
    <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
            {#each profile.education as edu}
                <div class="education-card">
                    <div class="education-header">
                        <h3 class="institution">{edu.institution}</h3>
                        <span class="duration">{edu.duration}</span>
                    </div>
                    <p class="degree">{edu.degree}</p>
                    {#if edu.location}
                        <p class="location">{edu.location}</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .education-section {
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

    .education-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .education-card {
        background: var(--color-surface);
        border-radius: 0.75rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px var(--color-shadow);
        border: 1px solid var(--color-border);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        position: relative;
        overflow: hidden;
    }

    .education-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--gradient-card-accent);
    }

    .education-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px var(--color-shadow-hover);
    }

    .education-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
        gap: 1rem;
    }

    .institution {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--color-text-primary);
        margin: 0;
        line-height: 1.2;
    }

    .duration {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-text-muted);
        background: var(--color-background);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .degree {
        font-size: 1rem;
        color: var(--color-primary);
        font-weight: 500;
        margin: 0 0 0.5rem 0;
        line-height: 1.4;
    }

    .location {
        font-size: 0.875rem;
        color: var(--color-text-light);
        margin: 0;
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .section-title {
            font-size: 1.75rem;
        }

        .education-grid {
            grid-template-columns: 1fr;
        }

        .education-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .education-card {
            padding: 1rem;
        }

        .institution {
            font-size: 1.125rem;
        }
    }
</style>
