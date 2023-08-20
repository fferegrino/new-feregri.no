// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';



export type SocialNetwork = {
    name: string,
    url: string,
    icon: string
}

export const SOCIALS = [
    {
        name: "Twitter",
        url: "https://twitter.com/feregri_no",
        icon: "twitter"
    },
    {
        name: "GitHub",
        url: "",
        icon: "github"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/antonio.feregrino/",
        icon: "linkedin"
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@feregrino",
        icon: "youtube"
    }
];