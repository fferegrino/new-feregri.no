// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const BIOGRAPHY = 'MLOps Engineer - once data scientist and always a software engineer. Educator and content creator.'


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
        url: "https://github.com/fferegrino",
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


export type Credits = {
    text: string,
    url: string
};

export const CREDITS = [
{
    "text": "Base theme by Tailus Blocks",
    "url": "https://preview.tailus.io/astrolus-free/"
},
{
    "text": "Some icons by Freepik",
    "url": "https://www.flaticon.com/authors/special/lineal-color?author_id=1&type=standard"    
}
];


