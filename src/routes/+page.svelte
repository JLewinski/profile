<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Summary from "$lib/components/Summary.svelte";
    import Experience from "$lib/components/Experience.svelte";
    import Education from "$lib/components/Education.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { profileData } from "$lib/data/profile";
</script>

<svelte:head>
    <title>{profileData.name} - {profileData.title}</title>
    <meta
        name="description"
        content="Professional profile and resume for {profileData.name}, {profileData.title} based in {profileData.location}"
    />
</svelte:head>

<main>
    <Header profile={profileData} />
    <Summary profile={profileData} />
    <Experience profile={profileData} />
    <Education profile={profileData} />
    <Projects profile={profileData} />
</main>

<Footer profile={profileData} />

<style>
    main {
        min-height: 100vh;
    }
</style>
