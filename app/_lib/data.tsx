export type Project = {
    key: number;
    slug: string;
    title: string;
    years: string;
    collaborators?: {key: number, name: string}[];
    description: string;
    shortdesc: string;
    images: {key: number, src: string, alt: string, width: number, height: number}[];
    links: {key: number, label: string, url: string}[]; /* [] empty array at the end means links is an array of objects */
};

export const projects: Project [] = [
    {
        key: Math.floor(Math.random() * 10),
        slug: "photo-gallery",
        title: "Vacation Photo Gallery",
        years: "2025",
        description: "This is a very simple solo project that I created to give myself a refresher on front-end development. I’ve tried to make projects in the past outside of assingments and school projects but I either didn’t finish them or the idea just felt far out at the time. For me, making this my first deployed project is a great start and I feel very encouraged to push myself into better HTML development.  I always wanted to create a photo gallery of some sort, and I thought that creating one that includes photos of trips that I’ve been on with family is a great way for me to look back on great memories that I’m grateful I got to share with them. This was written only using HTML, CSS, and JavaScript. I designed this project to have responsive view on both desktop and mobile, along with a simple color scheme and font size for better accessibility. I figured a nice light blue/white background would be a nice touch that blends in and fits the theme for each trip. Almost all of the photos consist of nature and outdoors, and for the images that don’t, it still feels like they fit in. Feel free to check out the deployed website and the source code by clicking on the buttons below!",
        shortdesc: "Small HTML project I created to showcase simple skills and display my favorite photos from places I’ve been to.",
        images: [
            {
                key: Math.floor(Math.random() * 10),
                src: "/photogallery.png",
                alt: "Screenshot of home page of Vacation Photo Gallery website",
                width: 1024,
                height: 489
            },
            {
                key: Math.floor(Math.random() * 10),
                src: "/photogallery2.png",
                alt: "Screenshot of Denver page from Vacation Photo Gallery website",
                width: 1024,
                height: 489
            }
        ],
        links: [
            {
                key: Math.floor(Math.random() * 10),
                label: "View Website",
                url: "https://martezdaniel.github.io/photo-gallery/index.html"
            },
            {
                key: Math.floor(Math.random() * 10),
                label: "Source Code",
                url: "https://github.com/martezdaniel/photo-gallery"
            }
        ]
    },
    {
        key: Math.floor(Math.random() * 10),
        slug: "ucfrugal",
        title: "UCFrugal",
        years: "2023 - 2024",
        collaborators: [
            {
                key: Math.floor(Math.random() * 10),
                name: "Sophie Agudelo"
            },
            {
                key: Math.floor(Math.random() * 10),
                name: "Lindsey Nielsen"
            },
            {
                key: Math.floor(Math.random() * 10),
                name: "Jing Li"
            },
            {
                key: Math.floor(Math.random() * 10),
                name: "Jocelyn Santos"
            }
        ],
        description: "This is another group project that I worked on during my final two semesters at UCF, in the fall of 2023 into the spring of 2024. It was a whole new different learning experience that took only a fraction of what I knew with project development, and expanded it much further. Instead of just working on wireframes and brainstorming ideas for a possible project, we had the chance to do that and more by building an actual website for our idea. My assigned roles in the project were to mainly handle bits of the backend, handle parts of our prototyping and use cases, and also perform some research for our authentication feature.       UCFrugal is an advertising website dedicated towards UCF students and staff. We wanted to branch out using the ideas and concepts of other websites such as eBay, Facebook Marketplace, and Craigslist, and make something that resonates more with us, while also attempting to combat the struggles that users face with other advertising and e-commerce websites, whether that be fears of insecure transactions or troubles with trying to search for items listed.       To develop this project, we used Figma for the wireframes, and we used WordPress with a fair amount of plugins (ex: Classified Listings, LoginPress, Elementor, WP 2FA, and Better Messages) to power the site and provide it’s needed functionalities. We also used Flywheel to host the website, but we had to shut down the hosting as we were paying for it out of our own pockets.       Feel free to click the buttons below to see UCFrugal’s documentation and wireframes, as well as our group’s presentations from both the fall and spring semesters we worked in.",
        shortdesc: "Group project that I worked on with four other classmates at UCF during my final fall and spring semester before graduation. Our concept was to create an advertising website specifically for UCF students and staff.",
        images: [
            {
                key: Math.floor(Math.random() * 10),
                src: "/ucfrugal2.png",
                alt: "Screenshot of home page from UCFrugal website",
                width: 1024,
                height: 489
            }
        ],
        links: [
            {
                key: Math.floor(Math.random() * 10),
                label: "Documentation",
                url: "https://drive.google.com/file/d/1lEbiw0DFUTGa1CegZGXOGg4L5zFun_4-/view"
            },
            {
                key: Math.floor(Math.random() * 10),
                label: "Wireframes",
                url: "https://www.figma.com/proto/mq9WpxGUwfyr0p8LJUjnc4/Hi-Fi-Prototypes?type=design&node-id=209-13062&t=8MCxZNo8jwPN9roL-0&scaling=min-zoom&page-id=8%3A870&starting-point-node-id=209%3A12613"
            },
            {
                key: Math.floor(Math.random() * 10),
                label: "Fall 2023 Presentation",
                url: "https://drive.google.com/file/d/1_6c0qKcwB_77Mt76Zz688fre5eunzjos/view",
            },
            {
                key: Math.floor(Math.random() * 10),
                label: "Spring 2024 Presentation",
                url: "https://drive.google.com/file/d/1HBofhB151FZ7-Ct8ocoXE74e1AaOhL6k/view"
            }
        ]
    },
    {
        key: Math.floor(Math.random() * 10),
        slug: "arthop",
        title: "ArtHop",
        years: "2023",
        collaborators: [
            {
                key: Math.floor(Math.random() * 10),
                name: "Jacob Rothstein"
            },
            {
                key: Math.floor(Math.random() * 10),
                name: "Jolina Garcia"
            },
            {
                key: Math.floor(Math.random() * 10),
                name: "Kyla Slappey"
            },
            {
                key: Math.floor(Math.random() * 10),
                name: "Alejandro Montalvo"
            }
        ],
        description: "ArtHop is a group project that I worked on with four other classmates during my junior year at the University of Central Florida. We worked on this project during the spring semester of 2023 for a class that was dedicated to design in UI/UX. The goal of this project was to develop an idea for an educational application that we believed would be very helpful and informational for users who want to learn more about art history.",
        shortdesc: "Group project that I also worked on at UCF with four other classmates. This was presented as more of a concept instead of a website, but it was a project that helped us understand the full process of creating a product that has a purpose to help our target audience.",
        images: [
            {
                key: Math.floor(Math.random() * 10),
                src: "/arthop2.png",
                alt: "Screenshot of ArtHop home page",
                width: 757,
                height: 1480
            },
            {
                key: Math.floor(Math.random() * 10),
                src: "/arthop3.png",
                alt: "Screenshot of ArtHop discussion page",
                width: 746,
                height: 1477
            }
        ],
        links: [
            {
                key: Math.floor(Math.random() * 10),
                label: "Documentation",
                url: "https://drive.google.com/file/d/19ZUbHad3eAphUdwfFUKR0oxpkaeyKzAW/view"
            },
            {
                key: Math.floor(Math.random() * 10),
                label: "Prototype",
                url: "https://www.figma.com/proto/ojPXDXEPsJpQUKTF7L1L66/ArtHop-High-Fidelity-Prototype-Final?node-id=1127-184&scaling=scale-down&page-id=0%3A13759&starting-point-node-id=1127%3A184"
            }
        ]
    }
]