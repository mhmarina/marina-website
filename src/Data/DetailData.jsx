/**
 * @typedef {Object} DetailData
 * @property {string} header
 * @property {string} description
 * @property {Link[]} links
 * @property {Section[]} sections
 * @property {string[]} techStack
 * @property {Media[]} hero
 * @property {string} iframe
 */

/** 
 * @typedef {Object} Section
 * @property {Media[]} media // videos, images
 * @property {string} sectionHeader
 * @property {string} description
 */

/**
 * @typedef {Object} Media
 * @property {string} src
 * @property {string} caption
 */

/**
 * @typedef {Object} Link
 * @property {string} domain //ex github, determin icon, or use a helper function
 * @property {string} url
 * @property {string} display
 */

export const detailData = {
    "breathe": {
        "header": "Breathe",
        "description": "Breathe is a 2D top down game where the player roleplays as a kupuna from Hawaiian mythology, whose goal is to vanquish the Mo’o monsters plaguing their home in Waipi’o valley. The game was created as part of Gameheads' Summer Accelerated Program (SAP) for 2024, and was showcased at 2025 Conference on BIPOC Game Studies at the Strong Museum of Play, RIT EDGE, and Honolulu Museum.",
        "techStack": ["unity", "github", "C#"],
        "hero": [{
            "src": "/details/breathe/breathe-demo.gif",
            "caption": "A demo of Breathe!"
        }],
        "links": [{
            "domain": "itch.io",
            "url": "https://gameheads.itch.io/breathe",
            "display": "Play Breathe on itch!" 
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/Gameheads-SAP-2024"
        },
        {
            "domain": "youtube",
            "url": "https://www.youtube.com/watch?v=IO3P7k5acmE",
            "display": "Watch the trailer for Breathe!"
        }],
        "sections": [{
            "sectionHeader": "Prototyping",
            "description": "Here are some videos of early prototyping of Breathe inside Unity! A lot of work was done to develop the core mechanic of inhaling and exhaling both the enemies as well as the mana.",
            "media": [
                {"src": "/details/breathe/prototype-sc.png"},
                {"src": "/details/breathe/prototype-1.gif"},
                {"src": "/details/breathe/prototype-2.gif"},
                {"src": "/details/breathe/prototype-3.gif"},
            ]
        },
        {
            "sectionHeader": "Art",
            "description": "I contributed to some of the background art for Breathe for some of our cutscenes!",
            "media": [
                {"src": "/details/breathe/bg1.png"},
                {"src": "/details/breathe/bg2.png"},
                {"src": "/details/breathe/bg3.png"},
                {"src": "/details/breathe/art-in-game.jpg",
                 "caption": "My background art beautifully composed in game by our artist Serena Cai!"
                }
            ]
        }]
    },
    "valkyrie": {
        "header": "Valkyrie",
        "hero": [
        {
            "src": "/details/valkyrie/concept-sketch.png",
            "caption": "Early concept art for Valkyrie"
        },
        {
            "src": "/details/valkyrie/concept-art.png",
            "caption": "Visual Development for Valkyrie"
        }],
        "description": "Valkyrie is a 2D platformer made in Gamemaker2. I solo developed this game including GML scripting, UI design, illustrations, animations, level design as well as narrative design! This game has both a WebGL build as well as a Windows build.",
        "links": [{
            "domain": "itch.io",
            "url": "https://mhmarina.itch.io/valkyrie",
            "display": "Play Valkyrie!"
        }]
    },
    "alder-mayo":{
        "header": "Alder Mayo",
        "description": "In a partnership with Mayo Clinic, a team of Next Lab student workers created a virtual reality training simulation for medical students to practice diagnosing strokes. As a programmer on this project with NEXT Lab, I worked on desigining and implementing responsive, event driven systems, both XR and desktop controls, User Interface, Audio recognition, and more.",
        "links": [{
            "domain": "unity",
            "url": "https://alder-mayo-sept-8-2025.netlify.app/",
            "display": "Try the demo!"
        },
        {
            "domain": "readme",
            "url": "https://nextlab.asu.edu/alder-mayo/",
            "display": "Read Next Lab's blog"
        }],
        "hero": [{
            "src": "/details/alder-mayo/aldermayo.webp"
        },
        {
            "src": "/details/alder-mayo/early-dev.png",
            "caption": "Early development of the project featuring Susan"
        }],
        "sections": [{
            "sectionHeader": "Features",
            "description": "In a real stroke assessment, a provider would assess a patient based on visuals -- such as droopy eyes -- sound, such as slurred speech, as well as interacting with them: such as their response to commands like raising their arm or reading simple words. We set out to build digital twins of stroke patients that students at The Mayo Clinic can train on in virtual reality. The experience would also be able to evaluate a student's assessments.",
            "media": [{
                "src": "/details/alder-mayo/harold-armup.png",
                "caption": "Harold responding to raising his arms up"
            },
            {
                "src": "/details/alder-mayo/assessment.png",
                "caption": "Interactable tablet used to assess"
            },
            {
                "src": "/details/alder-mayo/harold-dab.png"
            }]
        }]
    },
    "zoom-spark":{
        "header": "Zoom Spark",
        "description": "A platformer-puzzle game that teaches players specifics about SDKs as well as concepts like modularity through hands-on building. Created for ASU's Zoom Spark Challenge. The game being a platformer requiring the player to search for the right objects mirrors the challenge of developing using SDKs and having to sift through documentation to find exactly what they're looking for. Finally, the developer puts it all together, developing new skills and acquiring new knowledge as they go.",
        "hero": [{
            "src": "/details/zoom-spark/gameplay.png"
        }],
        "links": [{
            "domain": "youtube",
            "url": "https://www.youtube.com/watch?v=3HxsbCWPL24",
            "display": "Check out the playthrough"
        },
        {
            "domain": "itch.io",
            "url": "https://mhmarina.itch.io/zoom-spark"
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/zoom-spark"
        }],
        "sections": [{
            "sectionHeader": "ASU's Zoom Spark Challenge",
            "description": "This game was created for ASU's Zoom Spark challenge for Fall 2025. The ask was to create a game that teaches player about SDKs, particularly zoom's SDKs. This game was selected as second place winner among ~10 submissions!"
        }]
    },
    "santa-slays":{
        "header": "Santa Slays",
        "description": "Santa Slays is a christmas themed FPS where you play as santa trying to put gifts in his sleigh as he fights off evil snowmen. This was created as part of Activision Blizzard (ABK)'s 2023 Christmas Game Jam and was also the first game I ever developed on Unity! I worked on UI integration, scene design (including post processing), audio integration as well as a few illustrations.",
        "hero": [{
            "src": "/details/santa-slays/santa-slays.jpg"
        },
        {
            "src": "/details/santa-slays/santa-slays-end.png",
            "caption": "My illustration for game win :)"
        },
        {
            "src": "/details/santa-slays/loss.png",
            "caption": "My illustration for game loss where Santa never comes :("
        }],
        "links": [{
            "domain": "itch.io",
            "url": "https://anis-karam.itch.io/santa-slays-windows",
            "display": "Play Santa Slays on Windows!"
        },
        {
            "domain": "itch.io",
            "url": "https://anis-karam.itch.io/santa-slays-macos",
            "display": "Play Santa Slays on MacOS!"
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/ABK2023-GameJam-Christmas"
        }]
    },
    "plastic-seas":{
        "header": "Plastic Seas",
        "description": "Every year, 19-23 million tonnes of plastic waste leak into our rivers, lakes, and oceans, devastating ecosystems and communities worldwide. Inspired by places without access to potable drinking water, like the Dominican Republic and Flint, Michigan, this experience uses narrative storytelling, dark humor, and interactivity to energize viewers to take action against plastic pollution.",
        "hero": [{
            "src": "/details/plastic-seas/sc.png"
        },
        {
            "src": "/details/plastic-seas/paul.png",
        }],
        "sections": [{
            "sectionHeader": "Experience",
            "description": "Plastic Seas was created as part of MIT Reality Hack in Boston in January 2025! This was my first time in Boston, as well as my first time developing for Virtual Reality! It was an awesome experience. Plastic Seas ended up landing in the top 10 finalists out of ~80 teams.",
            "media": [{
                "src": "/details/plastic-seas/pic1.jpg",
                "caption": "photos courtesy of Latiece Brown!"
            },
            {
                "src": "/details/plastic-seas/pic2.jpg"
            }]
        }],
        "links": [{
            "domain": "devpost",
            "url": "https://devpost.com/software/plastic-seas",
        },
        {
            "domain": "youtube",
            "url": "https://www.youtube.com/watch?v=NBFljO0--6o&t=1s0"
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/MIT-reality-hack"
        }]
    },
    "dancing-dog":{
        "header": "WebGL Projects",
        "description": "Projects from my intro to computer graphics class, 2025",
        "links": [{
            "domain": "link",
            "url": "https://mhmarina.github.io/WebGL/Dancer/Nasralla_figure.html",
            "display": "Visit the site"
        }],
        "iframe": "https://mhmarina.github.io/WebGL/Dancer/Nasralla_figure.html"
    },
    "virtual-biz-card":{
        "header": "Virtual Business Card",
        "iframe": "https://virtual-business-card.netlify.app/",
        "links": [{
            "domain": "link",
            "url": "https://virtual-business-card.netlify.app/",
            "display": "Visit the site"
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/business-card"
        }],

    },
    "evolution": {
        "header": "Evolution",
        "description": "Created for Gameheads with the theme, 'Evolution'. I wanted to incorporate the idea of breaking boundaries by having the player literally breaking down walls, bringing color to people's lives and then eventually destroying the 'box' that trapped everybody in. The player is able to inspire these people by constantly moving, while the rest remain stagnant. I also wanted to incorporate the idea of 'evolution causes epxansion'. I tried doing this by having the player gain an extra move, and expand their screen view everytime they 'evolved' or broke down a wall. This game was created using Gamemaker2, using the framework created in my other project, Valkyrie.",
        "links": [{
            "domain": "itch.io",
            "display": "Play on itch!",
            "url": "https://mhmarina.itch.io/evolution"
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/gameheads-evolution"
        }],
        "hero": [{"src": "/thumbnail/evolution.png"}]
    },
    "minecraft-dataviz": {
        "header": "Minecraft Data Viz Platform",
        "description": "A distributed data analytics platform that continuously tracks, aggregates and visualizes statistics for over 6000 Minecraft servers. By leveraging CockroachDB distributed architecture, replication and serializable isolation, the system ensures fault tolerance, strong consistency, and high data availability.",
        "hero": [{
            "src": "/thumbnail/mc-dataviz.png",
            "caption": "Architectural diagram for the data pipeline, as well as the frontend and backend"
        },
        {
            "src": "/details/minecraft-data-viz/search.png"
        },
        {
            "src": "/details/minecraft-data-viz/uptime.png"
        }],
        "links": [{
            "domain": "github",
            "url": "https://github.com/mhmarina/CSE512-minecraft"
        }]
    },
    "banned-books-dataviz":{
        "header": "Banned Books Dataviz",
        "links": [{
            "domain": "github",
            "url": "https://github.com/mhmarina/d3-banned-books"
        },
        {
            "domain": "link",
            "url": "https://mhmarina.github.io/d3-banned-books/",
            "display": "check out the site!"
        }],
        "iframe": "https://mhmarina.github.io/d3-banned-books/"
    },
    "monogame-game-engine": {
        "header": "Monogame Game Engine",
        "description": "Built engine supporting lights, cameras, colliders, GUI, and GameObjects using Monogame and C#. Then I created a Pacman clone to test functionality. The Pacman clone supports procedural level generation as well as A* search based enemy AI. This project was created throughout my Game Engine Development class.",
        "hero": [{
            "src": "/thumbnail/monogame.png"
        }],
        "links": [{
            "domain": "youtube",
            "display": "Watch the Pacman demo!",
            "url": "https://www.youtube.com/watch?v=yoeSyaLlzjQ"
        }]
    },
    "k-means-viz":{
        "header": "K-means Visualization",
        "links": [{
            "domain": "github",
            "url": "https://github.com/mhmarina/k-means"
        },
        {
            "domain": "link",
            "url": "https://mhmarina.github.io/k-means/",
            "display": "check out the site!"
        }],
        "iframe": "https://mhmarina.github.io/k-means/"
    },
    "z-alogithm-viz":{
        "header": "Z-Algorithm Visualization",
        "links": [{
            "domain": "github",
            "url": "https://github.com/mhmarina/z-algorithm"
        },
        {
            "domain": "link",
            "url": "https://mhmarina.github.io/z-algorithm/",
            "display": "check out the site!"
        }],
        "iframe": "https://mhmarina.github.io/z-algorithm/"
    },
    "income-predictor": {
        "header": "Icome Prediction",
        "hero": [{
            "src": "/details/income-predictor/parallel-coords.png",
            "caption": "Parallel Coordinate Graph encoding hours-per-week, education-num, age, capital-gain, and capital-loss continuous features"
        }],
        "description": "This is the capstone project of my Data Visualization class as part of my MS CS at ASU. Here, I am a data analyst at a marketing agency XYZ. XYZ develops marketing profiles on people. The client is a college UVW. The given raw dataset contains 32561 rows of people, containing columns that reflect demographics such as age, workclass, education, marital status, occupation, and race, as well as whether or not they make under 50K a year. UVW is specifically targeting people making less than 50K, and we want to know what the specific demographics of this group are in order to better market toward them.",
        "sections": [{
            "sectionHeader": "Data Exploration",
            "description": "The visualizations should help the marketing agency better understand UVW’s target demographic in order to make more informed and targeted marketing campaigns. These visualizations were created using python (matplotlib, plotly, pandas, and geopandas)",
            "media": [{
                "src": "/details/income-predictor/bar-chart.png",
                "caption": "Bar chart of coefficients of Logistic Regression model"
            },
            {
                "src": "/details/income-predictor/treemap.png",
                "caption": " Using one hot encoding, we also get a weight for each specific category of categorical features, which we break down and represent as a Tree-map."
            },
            {
                "src": "/details/income-predictor/sparklines.png",
                "caption": "Sparklines depicting normal distributions for every continuous feature for every class label."
            },
            {
                "src": "/details/income-predictor/map.png",
                "caption": "Choropleth showing each native-country in the dataset."
            }],
        },
        {
            "sectionHeader": "Class Prediction",
            "description": " Given a set of one or more variables, predict whether a person would make above or equal, or below 50K. The deliverable for this is an interactive Machine Learning (ML) prediction model. The goal is to train prediction models, and provide a command line interface for users to interact with either. The user should be able to provide as many or as little information as possible, and the models should be able to handle missing data via imputation. Furthermore, visualizations should give the users the ability to ”eyeball” or infer predicted class given a set of variables. For this project, I used scikit-learn (python) to train both a Naive Bayes and a Logistic Regression model, and provided a CLI for users to interact with and compare them. You can find the code and running instructions on the Github link provided!"
        }],
        "links": [{
            "domain": "github",
            "url": "https://github.com/mhmarina/income-prediction"
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/income-prediction/blob/master/app/viz.ipynb",
            "display": "Check out the jupyter notebook!"
        }]
    },
    "marinagan": {
        "header": "MarinaGAN",
        "description": "This personal project is a DCGAN (Deep Convolutional Generative Adversarial Network) trained on a small dataset (<500 samples) of some of my portrait drawings. I was curious how the model would interpret my style!",
        "sections": [{
            "sectionHeader": "Data Collection",
            "description": "Data collection was fun. I knew I wanted to train it on my drawings, but knew that I had to constrain myself to one style of drawing. I settled on a simple black and white square portrait, that I could easily whip out in a few minutes using Procreate on my iPad. Because this was a manual process, the dataset was extremely limited. The images have been preprocessed to be 16x16 and in grayscale, and augmented to include horizontal flips (to maintain the context of the image).",
            "media": [{
                "src": "/details/marina-gan/training-imgs.png",
                "caption": "A subset of training images"
            },
            {
                "src": "/details/marina-gan/doodle.jpg",
                "caption": "An example doodle"
            }]
        },
        {
            "sectionHeader": "Training",
            "description": "To help the training, I used a small training rate, an even smaller training rate for the discriminator, trained the discriminator slower that the generator, and used label smoothing. This was all done to make the discriminator's job a little harder as it had an advantage given the small dataset. For training, I used pytorch as well as Google colab on VSCode. The result is a weird looking thing that sort of resembles a person in my style!"
        }],
        "links": [{
            "domain": "github",
            "url": "https://github.com/mhmarina/marinaGAN"
        },
        {
            "domain": "huggingface",
            "url": "https://huggingface.co/spaces/mhmarina/marinaGAN",
            "display": "Try the generator!"
        }],
        "hero": [{
            "src": "/details/marina-gan/training-marina-gan.gif",
            "caption": "Generations over training epochs"
        }]
    },
    "animations": {
        "header": "Animations",
        "description": "My animation experiments!",
        "hero": [{
            "src": "/details/animations/kirby.GIF",
            "caption": "kirby jump cycle! Created in Procreate."
        },
        {
            "src": "/details/animations/pinky-pie.GIF",
            "caption": "Pinkie Pie stuffing her face with a cupcake. Created in Procreate."
        },
        {
            "src": "/details/animations/waterbending.GIF",
            "caption": "Avatar the Last Airbender inspired waterbending! Created in Procreate."
        }]
    },
    "discord-trivia-bot": {
        "header": "Discord Trivia Bot",
        "links": [{
            "domain": "github",
            "url": "https://github.com/mhmarina/Discord-Trivia-Bot"
        }],
        "hero": [{
            "src": "/details/discord-trivia-bot/er-diagrams.jpg",
            "caption": "ER diagram draft vs final design"
        }],
        "sections": [{
            "sectionHeader": "Database Design",
            "description": "For this project we chose to create an implementation of a trivia game that uses a PostgreSQL database to store all of the pertinent information. There are four tables in our database: Users, Categories, Questions, and Sessions.",
        },
        {
            "sectionHeader": "Implementation Details",
            "description": "This bot is written using python. It uses Asyncpg, which is an asynchronous PostgreSQL client library for Python, as well as Discord's API wrapper Discord.py.",
            "media": [{
                "src": "/details/discord-trivia-bot/interact.jpg",
                "caption": "The bot in action"
            },
            {
                "src": "/details/discord-trivia-bot/leaderboard.jpg",
                "caption": "Demo of the leaderboard function"
            }]
        }]
    },
    "sdfc-marketing": {
        "header": "SDFC Marketing & Graphic Design",
        "description": "During my freshman and sophomore years of college, I worked as a graphic designer at the Sun Devil Fitness Complex (SDFC)! I worked on various marketing campaigns, creating digital and physical assets including flyers, banners, social media graphics, and more, seen by hundreds of students daily!",
        "hero": [{
            "src": "/details/sdfc-marketing/flyers.png",
            "caption": "I designed graphics for multiple events at the SDFC, specifically flyers, quarter sheets and social media graphics."
        },
        {
            "src": "/details/sdfc-marketing/themed-schedules.png",
            "caption": "I was solely responsible for creating themed graphics for group fitness schedules at the SDFC!"
        },
        {
            "src": "/details/sdfc-marketing/sdfc-stickers.png",
            "caption": "A few sticker designs featuring ASU's Sparky!"
        }]
    }
}