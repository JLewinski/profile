<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#10b981" />
	<meta name="color-scheme" content="light dark" />
</svelte:head>

{@render children?.()}

<style>
	:global(:root) {
		/* Light mode colors (default) */
		--color-primary: #10b981;
		--color-primary-dark: #059669;
		--color-primary-light: #34d399;
		--color-background: #f8fafc;
		--color-surface: #ffffff;
		--color-text-primary: #333333;
		--color-text-secondary: #555555;
		--color-text-muted: #666666;
		--color-text-light: #888888;
		--color-border: #e5e7eb;
		--color-border-light: rgba(255, 255, 255, 0.1);
		--color-shadow: rgba(0, 0, 0, 0.1);
		--color-shadow-hover: rgba(0, 0, 0, 0.15);
		--gradient-primary: linear-gradient(135deg, #10b981 0%, #059669 100%);
		--gradient-surface: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
		--gradient-timeline: linear-gradient(to bottom, #10b981, #059669);
		--gradient-card-accent: linear-gradient(90deg, #10b981, #059669);
	}

	/* Dark mode colors */
	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--color-primary: #34d399;
			--color-primary-dark: #10b981;
			--color-primary-light: #6ee7b7;
			--color-background: #0f172a;
			--color-surface: #1e293b;
			--color-text-primary: #f1f5f9;
			--color-text-secondary: #e2e8f0;
			--color-text-muted: #cbd5e1;
			--color-text-light: #94a3b8;
			--color-border: #334155;
			--color-border-light: rgba(255, 255, 255, 0.1);
			--color-shadow: rgba(0, 0, 0, 0.3);
			--color-shadow-hover: rgba(0, 0, 0, 0.4);
			--gradient-primary: linear-gradient(
				135deg,
				#34d399 0%,
				#10b981 100%
			);
			--gradient-surface: linear-gradient(
				135deg,
				#1e293b 0%,
				#0f172a 100%
			);
			--gradient-timeline: linear-gradient(to bottom, #34d399, #10b981);
			--gradient-card-accent: linear-gradient(90deg, #34d399, #10b981);
		}
	}

	:global(body) {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		margin: 0;
		padding: 0;
		background: var(--color-background);
		color: var(--color-text-primary);
		line-height: 1.6;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		color: var(--color-primary);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	:global(a:hover) {
		text-decoration: underline;
	}
</style>
