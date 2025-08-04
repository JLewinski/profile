<script lang="ts">
    import type { ProfileData } from "$lib/data/profile";

    let { profile }: { profile: ProfileData } = $props();
</script>

<section class="summary-section">
    <div class="container">
        <h2 class="section-title">Summary</h2>
        <div class="summary-content">
            <p class="summary-text">{profile.summary}</p>
            <blockquote class="personal-note">
                {profile.personalNote}
            </blockquote>
        </div>
    </div>
</section>

<style>
    .summary-section {
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
        margin-bottom: 1.5rem;
        border-bottom: 3px solid var(--color-primary);
        padding-bottom: 0.5rem;
        display: inline-block;
    }

    .summary-content {
        display: grid;
        gap: 2rem;
    }

    .summary-text {
        font-size: 1.125rem;
        line-height: 1.6;
        color: var(--color-text-secondary);
        margin: 0;
    }

    .personal-note {
        background: var(--gradient-surface);
        border-left: 4px solid var(--color-primary);
        padding: 1.5rem;
        margin: 0;
        border-radius: 0 0.5rem 0.5rem 0;
        font-style: italic;
        color: var(--color-text-muted);
        line-height: 1.6;
        position: relative;
    }

    .personal-note::before {
        content: '"';
        font-size: 3rem;
        color: var(--color-primary);
        position: absolute;
        top: -0.5rem;
        left: 1rem;
        font-family: serif;
        opacity: 0.3;
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .section-title {
            font-size: 1.75rem;
        }

        .summary-text {
            font-size: 1rem;
        }

        .personal-note {
            padding: 1rem;
        }
    }
</style>
