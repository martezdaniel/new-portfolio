export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    links: {label: string, url: string}[]; /* [] empty array at the end means links is an array of objects */
};

export const projects: Project [] = [
    {
        slug: "photo-gallery",
        title: "Vacation Photo Gallery",
        description: "This is a very simple solo project that I created to give myself a refresher on front-end development. I’ve tried to make projects in the past outside of assingments and school projects but I either didn’t finish them or the idea just felt far out at the time. For me, making this my first deployed project is a great start and I feel very encouraged to push myself into better HTML development.  I always wanted to create a photo gallery of some sort, and I thought that creating one that includes photos of trips that I’ve been on with family is a great way for me to look back on great memories that I’m grateful I got to share with them. This was written only using HTML, CSS, and JavaScript. I designed this project to have responsive view on both desktop and mobile, along with a simple color scheme and font size for better accessibility. I figured a nice light blue/white background would be a nice touch that blends in and fits the theme for each trip. Almost all of the photos consist of nature and outdoors, and for the images that don’t, it still feels like they fit in. Feel free to check out the deployed website and the source code by clicking on the buttons below!",
        image: "/photogallery.png",
        alt: "Home page of photo gallery website",
        links: [
            {
                label: "View Website",
                url: "https://martezdaniel.github.io/photo-gallery/index.html"
            },
            {
                label: "Source Code",
                url: "https://github.com/martezdaniel/photo-gallery",
            }
        ]
    }
]