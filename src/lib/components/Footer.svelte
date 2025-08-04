<script lang="ts">
    import type { ProfileData } from "$lib/data/profile";

    let { profile }: { profile: ProfileData } = $props();

    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-info">
                <h3 class="footer-name">{profile.name}</h3>
                <p class="footer-title">{profile.title}</p>
            </div>

            <div class="footer-contact">
                <a href="mailto:{profile.email}" class="footer-link">
                    {profile.email}
                </a>
                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer-link"
                >
                    LinkedIn Profile
                </a>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="copyright">
                © {currentYear}
                {profile.name}. All rights reserved.
            </p>
            <p class="built-with">Built with SvelteKit & TypeScript</p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: #1a202c;
        color: white;
        padding: 2rem 0 1rem;
        margin-top: 4rem;
    }

    @media (prefers-color-scheme: dark) {
        .footer {
            background: #0a0e1a;
        }
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .footer-content {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 2rem;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-name {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        color: var(--color-primary);
    }

    .footer-title {
        margin: 0;
        opacity: 0.8;
        font-size: 1rem;
    }

    .footer-contact {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-end;
    }

    .footer-link {
        color: white;
        text-decoration: none;
        transition: color 0.2s ease;
        font-weight: 500;
    }

    .footer-link:hover {
        color: var(--color-primary);
        text-decoration: underline;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        opacity: 0.7;
    }

    .copyright,
    .built-with {
        margin: 0;
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
        }

        .footer-contact {
            align-items: center;
        }

        .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
        }
    }
</style>
