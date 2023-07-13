const User = require("../models/User");
const Article = require("../models/Article");
const Comment = require("../models/Comment");
const Category = require("../models/Category");

async function populateTables() {
  await User.bulkCreate([
    {
      pseudo: "JohnDoe",
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      password: "password123",
      age: 25,
      role: 2,
    },
    {
      pseudo: "Devconte",
      firstname: "Jane",
      lastname: "Doe",
      email: "janesmith@gmail.com",
      password: "987654321",
      age: 30,
      role: 2,
    },
    {
      pseudo: "AliceWonder",
      firstname: "Alice",
      lastname: "Doe",
      email: "alicewonder@gmail.com",
      password: "qwertyuiop",
      age: 28,
      role: 2,
    },
    {
      pseudo: "BobRoss",
      firstname: "Bob",
      lastname: "Doe",
      email: "bobross@gmail.com",
      password: "password1234",
      age: 35,
      role: 2,
    },
    {
      pseudo: "EmilyGreen",
      firstname: "Emily",
      lastname: "Doe",
      email: "emilygreen@gmail.com",
      password: "abcdefg",
      age: 32,
      role: 2,
    },
    {
      pseudo: "AlexSmith",
      firstname: "Alex",
      lastname: "Smith",
      email: "alexsmith@gmail.com",
      password: "pass123",
      age: 27,
      role: 2,
    },
    {
      pseudo: "SarahBrown",
      firstname: "Sarah",
      lastname: "Brown",
      email: "sarahbrown@gmail.com",
      password: "987654",
      age: 29,
      role: 2,
    },
    {
      pseudo: "MarkJohnson",
      firstname: "Mark",
      lastname: "Johnson",
      email: "markjohnson@gmail.com",
      password: "qazwsx",
      age: 31,
      role: 2,
    },
    {
      pseudo: "LauraLee",
      firstname: "Laura",
      lastname: "Lee",
      email: "lauralee@gmail.com",
      password: "password567",
      age: 26,
      role: 2,
    },
    {
      pseudo: "ChrisTaylor",
      firstname: "Chris",
      lastname: "Taylor",
      email: "christaylor@gmail.com",
      password: "12345678",
      age: 33,
      role: 2,
    },
    {
      pseudo: "MeganBrown",
      firstname: "Megan",
      lastname: "Brown",
      email: "meganbrown@gmail.com",
      password: "megan123",
      age: 28,
      role: 2,
    },
    {
      pseudo: "DavidClark",
      firstname: "David",
      lastname: "Clark",
      email: "davidclark@gmail.com",
      password: "password999",
      age: 34,
      role: 2,
    },
    {
      pseudo: "OliviaDavis",
      firstname: "Olivia",
      lastname: "Davis",
      email: "oliviadavis@gmail.com",
      password: "olivia123",
      age: 30,
      role: 2,
    },
    {
      pseudo: "MichaelWilson",
      firstname: "Michael",
      lastname: "Wilson",
      email: "michaelwilson@gmail.com",
      password: "michael456",
      age: 32,
      role: 2,
    },
    {
      pseudo: "SophiaHarris",
      firstname: "Sophia",
      lastname: "Harris",
      email: "sophiaharris@gmail.com",
      password: "sophia789",
      age: 27,
      role: 2,
    },
  ]);

  await Article.bulkCreate([
    {
      title: "Food",
      manga: "Naruto",
      content:
        "Naruto is known for its rich representation of Japanese cuisine. The ramen stands in the village of Konoha serve as popular gathering spots for hungry ninjas, where they indulge in steaming bowls of delicious noodles. Traditional dishes from the Land of Fire, such as grilled pork barbecue and yakitori skewers, are also widely appreciated. The manga often highlights the importance of food in bringing people together and showcases the culinary delights of the ninja world.\n\nOne notable food-related story in Naruto revolves around the character Naruto Uzumaki's love for ramen. Naruto's favorite ramen shop is Ichiraku Ramen, where he often enjoys meals with his friends. The manga even features an entire arc dedicated to Naruto's training to become a ramen chef.",
      likes: 137,
      edited: false,
      user_id: 2,
      category_id: 2,
    },
    {
      title: "Technology",
      manga: "Boruto",
      content:
        "Boruto explores a world where ninja technology is rapidly advancing. Futuristic gadgets like ninja tablets and virtual reality devices play a central role in missions and battles for shinobis. Technological innovation transforms how ninjas utilize their skills and interact with their environment.\n\nOne interesting aspect of ninja technology in Boruto is the introduction of scientific ninja tools. These tools enhance a shinobi's abilities and provide new avenues for combat. For example, the Kote is a wrist-mounted device that allows users to perform powerful jutsu without extensive training. However, the integration of technology also raises ethical questions and challenges traditional notions of what it means to be a ninja.",
      likes: 56,
      edited: false,
      user_id: 2,
      category_id: 2,
    },
    {
      title: "Sports",
      manga: "Fullmetal Alchemist",
      content:
        "Fullmetal Alchemist presents a world where sports competitions hold significant importance. Captivating alchemy tournaments feature epic clashes between talented alchemists. These contests of strength and strategy showcase the characters' skills and push them to their limits.\n\nOne memorable sports event in Fullmetal Alchemist is the National Alchemist Exam, where alchemists from all over the country gather to showcase their abilities and compete for recognition. The exams feature a series of challenges that test the participants' knowledge, creativity, and tactical prowess. The intense battles and high stakes make for thrilling moments in the manga.",
      likes: 23,
      edited: false,
      user_id: 3,
      category_id: 1,
    },
    {
      title: "Fashion",
      manga: "My Hero Academia",
      content:
        "My Hero Academia presents a universe where fashion and costumes play a significant role. Heroes and villains don unique outfits that reflect their personality and powers. Renowned fashion designers create iconic costumes that become symbols of a hero's might and presence.\n\nOne fascinating aspect of fashion in My Hero Academia is the concept of hero costumes being tailored to enhance a hero's quirk. These specialized outfits not only provide protection but also amplify and optimize their abilities. The design and functionality of hero costumes become crucial elements in a hero's effectiveness during battles and rescue missions.",
      likes: 8,
      edited: true,
      user_id: 3,
      category_id: 2,
    },
    {
      title: "Nature",
      manga: "One Piece",
      content:
        "One Piece transports readers into a world of vast oceans and exotic landscapes. Luffy and his crew's adventures take them to discover paradise islands, lush jungles, and majestic mountains. The exploration of nature is an essential component of the story, and the breathtaking settings add a captivating visual dimension.\n\nOne remarkable natural wonder in One Piece is the Grand Line, a treacherous and mysterious sea route that stretches across the entire world. It is home to countless islands with unique climates, wildlife, and hidden treasures. The diverse and awe-inspiring environments encountered by the characters make their journey even more thrilling and visually stunning.",
      likes: 5,
      edited: false,
      user_id: 3,
      category_id: 4,
    },
    {
      title: "Adventure",
      manga: "Hunter x Hunter",
      content:
        "Hunter x Hunter follows the story of Gon Freecss as he embarks on a journey to become a Hunter, an elite individual with exceptional skills and abilities. Along the way, Gon encounters various challenges, meets new friends, and uncovers the secrets of his father's past.\n\nThe manga explores different types of adventures, from thrilling battles to intricate puzzles and dangerous quests. It combines action, suspense, and strategic thinking to create a captivating narrative.",
      likes: 14,
      edited: false,
      user_id: 4,
      category_id: 1,
    },
    {
      title: "Romance",
      manga: "Kimi ni Todoke",
      content:
        "Kimi ni Todoke tells the heartwarming story of Sawako Kuronuma, a misunderstood high school girl who struggles to express her feelings and make friends. When she meets the popular and kind-hearted Shota Kazehaya, her life begins to change.\n\nThe manga explores the ups and downs of teenage romance, capturing the innocence, awkwardness, and joy of first love. It emphasizes the importance of communication, understanding, and self-acceptance in building meaningful relationships.",
      likes: 9,
      edited: false,
      user_id: 4,
      category_id: 3,
    },
    {
      title: "Mystery",
      manga: "Death Note",
      content:
        "Death Note follows the story of Light Yagami, a high school student who discovers a supernatural notebook that grants him the power to kill anyone whose name he writes in it. As Light uses the notebook to rid the world of criminals, a brilliant detective known as L becomes determined to catch him.\n\nThe manga delves into the psychological cat-and-mouse game between Light and L, exploring themes of morality, justice, and the nature of power. It keeps readers on the edge of their seats with its intricate plot twists and intellectual battles.",
      likes: 12,
      edited: false,
      user_id: 5,
      category_id: 1,
    },
    {
      title: "The Phantom Troupe",
      manga: "Hunter x Hunter",
      content:
        "Hunter x Hunter explores the journey of Gon Freecss as he becomes a Hunter, a licensed professional who can pursue various tasks such as capturing criminals and searching for rare items...",
      likes: 98,
      edited: false,
      user_id: 5,
      category_id: 2,
    },
    {
      title: "Comedy",
      manga: "Gintama",
      content:
        "Gintama is a comedic manga set in an alternate version of feudal Japan, where aliens known as Amanto have invaded and taken over the country. The story follows Gintoki Sakata, a lazy samurai who runs a freelance odd-jobs business. Together with his eccentric group of friends, they take on various absurd and hilarious tasks while navigating the challenges of a world transformed by the Amanto.",
      likes: 27,
      edited: false,
      user_id: 5,
      category_id: 1,
    },
    {
      title: "Supernatural",
      manga: "Bleach",
      content:
        "Bleach follows the adventures of Ichigo Kurosaki, a teenager with the ability to see ghosts. After obtaining the powers of a Soul Reaper, a spiritual being that protects the living world from malicious spirits, Ichigo embarks on a journey to defend humanity against powerful supernatural threats.",
      likes: 45,
      edited: false,
      user_id: 6,
      category_id: 4,
    },
    {
      title: "School Life",
      manga: "Assassination Classroom",
      content:
        "Assassination Classroom takes place in a unique classroom setting where the students are tasked with assassinating their alien teacher, Koro-sensei, before he destroys the Earth. The manga explores the students' personal growth, friendships, and the challenges they face in balancing their school life with their mission to save the world.",
      likes: 19,
      edited: false,
      user_id: 6,
      category_id: 7,
    },
    {
      title: "Historical",
      manga: "Vagabond",
      content:
        "Vagabond is a historical manga based on the life of the legendary swordsman Miyamoto Musashi. Set in feudal Japan, the manga depicts Musashi's journey as he seeks to become the greatest swordsman in the land. It explores themes of self-discovery, personal growth, and the pursuit of excellence in the martial arts.",
      likes: 35,
      edited: false,
      user_id: 7,
      category_id: 1,
    },
    {
      title: "Psychological",
      manga: "Monster",
      content:
        "Monster follows the story of Dr. Kenzo Tenma, a renowned neurosurgeon who becomes involved in a complex web of intrigue and psychological manipulation when he saves the life of a young boy who later grows up to become a dangerous serial killer. The manga delves into the depths of the human psyche, exploring themes of morality, identity, and the nature of evil.",
      likes: 29,
      edited: false,
      user_id: 7,
      category_id: 2,
    },
    {
      title: "Action",
      manga: "Attack on Titan",
      content:
        "Attack on Titan is set in a world where humanity is on the brink of extinction due to the existence of giant humanoid creatures known as Titans. The story follows Eren Yeager and his friends as they join the fight against the Titans and uncover the mysteries surrounding their existence.",
      likes: 53,
      edited: false,
      user_id: 8,
      category_id: 1,
    },
    {
      title: "Music",
      manga: "Your Lie in April",
      content:
        "Your Lie in April revolves around Kosei Arima, a former piano prodigy who lost the ability to hear the sound of his own playing after a traumatic event. The manga explores Kosei's journey of rediscovering his passion for music and his relationships with the people who inspire him to overcome his fears.",
      likes: 14,
      edited: false,
      user_id: 8,
      category_id: 7,
    },
    {
      title: "Supernatural",
      manga: "Noragami",
      content:
        "Noragami follows the story of Yato, a minor god who dreams of building his own shrine and becoming a well-known deity. Alongside his weapon partner, Yukine, and a human girl named Hiyori, Yato takes on odd jobs to help both spirits and humans while navigating the world of gods and supernatural beings.",
      likes: 17,
      edited: false,
      user_id: 9,
      category_id: 4,
    },
    {
      title: "Romantic Comedy",
      manga: "Toradora!",
      content:
        "Toradora! tells the story of Ryuji Takasu and Taiga Aisaka, two high school students with opposite personalities who form an unlikely friendship. As they team up to help each other pursue their respective love interests, their relationship deepens and they discover the true meaning of love and friendship.",
      likes: 12,
      edited: false,
      user_id: 9,
      category_id: 3,
    },
    {
      title: "Sports",
      manga: "Haikyu!!",
      content:
        "Haikyu!! follows the journey of Shoyo Hinata as he aspires to become a volleyball player despite his short stature. With his newfound team at Karasuno High School, Hinata experiences the exhilaration and challenges of competitive volleyball, forging bonds and honing his skills along the way.",
      likes: 31,
      edited: false,
      user_id: 10,
      category_id: 1,
    },
    {
      title: "Fantasy",
      manga: "Fairy Tail",
      content:
        "Fairy Tail is a fantasy manga set in a world where magic is commonplace and guilds of wizards engage in various adventures and quests. The story follows Lucy Heartfilia, a celestial spirit wizard, and Natsu Dragneel, a fire-breathing wizard, as they embark on thrilling quests and uncover the mysteries of the Fairy Tail guild.",
      likes: 42,
      edited: false,
      user_id: 10,
      category_id: 8,
    },
    {
      title: "Science Fiction",
      manga: "Astra Lost in Space",
      content:
        "Astra Lost in Space is a science fiction manga that follows a group of students who find themselves stranded in space after a mysterious wormhole transports them far away from Earth. As they work together to navigate the dangers of space and find a way back home, they uncover shocking truths about their situation.",
      likes: 21,
      edited: false,
      user_id: 11,
      category_id: 9,
    },
    {
      title: "Horror",
      manga: "Tokyo Ghoul",
      content:
        "Tokyo Ghoul is set in a world where flesh-eating ghouls lurk among humans, hiding their true nature. The story follows Ken Kaneki, a college student who becomes a half-ghoul after a fateful encounter. As Kaneki grapples with his newfound identity and navigates the dangerous world of ghouls, he must confront his own inner demons.",
      likes: 37,
      edited: false,
      user_id: 11,
      category_id: 10,
    },
    {
      title: "Slice of Life",
      manga: "Natsume's Book of Friends",
      content:
        "Natsume's Book of Friends revolves around Takashi Natsume, a teenager who has the ability to see spirits. After inheriting a book filled with the names of powerful spirits called the 'Book of Friends,' Natsume embarks on a journey to return the names and form genuine connections with both humans and spirits.",
      likes: 16,
      edited: false,
      user_id: 12,
      category_id: 7,
    },
    {
      title: "Psychological",
      manga: "Parasyte",
      content:
        "Parasyte follows the story of Shinichi Izumi, a high school student who becomes the host of a parasitic alien creature. As Shinichi and his parasite, Migi, coexist and face other hostile parasites, they grapple with questions of identity, morality, and the nature of humanity.",
      likes: 28,
      edited: false,
      user_id: 12,
      category_id: 2,
    },
    {
      title: "Action",
      manga: "One Punch Man",
      content:
        "One Punch Man is a satirical superhero manga that follows the story of Saitama, a seemingly ordinary man who can defeat any opponent with a single punch. Despite his incredible power, Saitama yearns for a challenging fight and struggles with the mundanity of his invincible existence.",
      likes: 64,
      edited: false,
      user_id: 13,
      category_id: 1,
    },
    {
      title: "Romance",
      manga: "Clannad",
      content:
        "Clannad centers around Tomoya Okazaki, a high school student who finds solace and love in a group of friends as he navigates the complexities of family, friendships, and romantic relationships. The manga explores themes of growth, forgiveness, and the power of human connections.",
      likes: 13,
      edited: false,
      user_id: 13,
      category_id: 3,
    },
    {
      title: "Adventure",
      manga: "Magi: The Labyrinth of Magic",
      content:
        "Magi: The Labyrinth of Magic is an adventure manga inspired by the tales of Arabian Nights. The story follows Aladdin, Alibaba, and Morgiana as they journey through a world of magic and political intrigue, encountering powerful djinns, mysterious dungeons, and diverse cultures along the way.",
      likes: 25,
      edited: false,
      user_id: 14,
      category_id: 1,
    },
    {
      title: "Sci-Fi",
      manga: "Ghost in the Shell",
      content:
        "Ghost in the Shell is a science fiction manga set in a cyberpunk future where humanity has become increasingly interconnected with technology. The story follows Major Motoko Kusanagi and her team as they investigate cybercrime and tackle philosophical questions about the nature of consciousness, identity, and what it means to be human.",
      likes: 32,
      edited: false,
      user_id: 14,
      category_id: 9,
    },
    {
      title: "Sports",
      manga: "Kuroko's Basketball",
      content:
        "Kuroko's Basketball revolves around the Seirin High basketball team and their pursuit of victory in the fiercely competitive world of high school basketball. The manga showcases the unique skills and strategies of each team member, culminating in thrilling matches and intense rivalries.",
      likes: 18,
      edited: false,
      user_id: 15,
      category_id: 1,
    },
    {
      title: "Drama",
      manga: "Honey and Clover",
      content:
        "Honey and Clover follows the lives of a group of art college students as they navigate their personal and professional journeys. The manga delves into themes of self-discovery, friendship, unrequited love, and the pursuit of artistic passion.",
      likes: 11,
      edited: false,
      user_id: 15,
      category_id: 7,
    },
  ]);

  await Comment.bulkCreate([
    {
      title: "One Piece",
      content:
        "The world-building in One Piece is truly remarkable. The creativity and variety of islands and characters are simply awe-inspiring!",
      likes: 9,
      edited: false,
      user_id: 12,
      article_id: 5,
    },
    {
      title: "Naruto",
      content:
        "Naruto's journey of growth and self-discovery is incredibly inspiring. He teaches us the importance of never giving up on our dreams.",
      likes: 16,
      edited: false,
      user_id: 8,
      article_id: 1,
    },
    {
      title: "Boruto",
      content:
        "I'm fascinated by the conflicts between traditional ninja values and the advancements of technology in Boruto. It raises thought-provoking questions about the evolution of society.",
      likes: 6,
      edited: false,
      user_id: 5,
      article_id: 2,
    },
    {
      title: "Fullmetal Alchemist",
      content:
        "The complex moral dilemmas explored in Fullmetal Alchemist make it a truly thought-provoking manga. It challenges our perceptions of right and wrong.",
      likes: 11,
      edited: false,
      user_id: 11,
      article_id: 3,
    },
    {
      title: "My Hero Academia",
      content:
        "The themes of heroism, sacrifice, and overcoming adversity in My Hero Academia resonate deeply with me. It's a story that inspires courage and hope.",
      likes: 19,
      edited: false,
      user_id: 4,
      article_id: 4,
    },
    {
      title: "One Piece",
      content:
        "The bond between the Straw Hat crew in One Piece is incredible. Their loyalty and friendship are a testament to the power of chosen family.",
      likes: 13,
      edited: false,
      user_id: 7,
      article_id: 5,
    },
    {
      title: "Hunter x Hunter",
      content:
        "Hunter x Hunter's intricate power system and strategic battles keep me hooked. It's a series that constantly surprises and challenges its readers.",
      likes: 22,
      edited: false,
      user_id: 6,
      article_id: 6,
    },
    {
      title: "Kimi ni Todoke",
      content:
        "Kimi ni Todoke beautifully portrays the journey of finding one's voice and embracing one's uniqueness. Sawako's character development is heartwarming.",
      likes: 7,
      edited: false,
      user_id: 9,
      article_id: 7,
    },
    {
      title: "Death Note",
      content:
        "The mind games and intellectual battles in Death Note are absolutely thrilling. It keeps you on the edge of your seat till the very end.",
      likes: 18,
      edited: false,
      user_id: 2,
      article_id: 8,
    },
    {
      title: "Hunter x Hunter",
      content:
        "The Phantom Troupe arc in Hunter x Hunter is one of the most intense and captivating story arcs I've ever read. The character dynamics are fascinating.",
      likes: 29,
      edited: false,
      user_id: 1,
      article_id: 9,
    },
    {
      title: "Gintama",
      content:
        "Gintama's humor and satirical take on historical events always leave me laughing out loud. It's a refreshing and hilarious manga.",
      likes: 10,
      edited: false,
      user_id: 3,
      article_id: 10,
    },
    {
      title: "Bleach",
      content:
        "The supernatural elements and epic battles in Bleach make it a thrilling read. The intricate character designs are also visually stunning.",
      likes: 14,
      edited: false,
      user_id: 4,
      article_id: 11,
    },
    {
      title: "Assassination Classroom",
      content:
        "Assassination Classroom's blend of humor and heartfelt moments creates a truly unique reading experience. The bond between the students and Koro-sensei is touching.",
      likes: 9,
      edited: false,
      user_id: 5,
      article_id: 12,
    },
    {
      title: "Vagabond",
      content:
        "Vagabond's beautiful artwork and philosophical exploration of the path of the sword make it a masterpiece. It's a manga that lingers in your thoughts long after reading.",
      likes: 20,
      edited: false,
      user_id: 6,
      article_id: 13,
    },
    {
      title: "Monster",
      content:
        "Monster's psychological depth and morally ambiguous characters make it a gripping and thought-provoking manga. It challenges our notions of good and evil.",
      likes: 15,
      edited: false,
      user_id: 7,
      article_id: 14,
    },
    {
      title: "Attack on Titan",
      content:
        "Attack on Titan's intense action and suspense keep me hooked with every chapter. The world-building and plot twists are mind-blowing!",
      likes: 24,
      edited: false,
      user_id: 8,
      article_id: 15,
    },
    {
      title: "Your Lie in April",
      content:
        "Your Lie in April beautifully captures the power of music to evoke emotions and heal hearts. The story is a symphony of love, loss, and personal growth.",
      likes: 17,
      edited: false,
      user_id: 9,
      article_id: 16,
    },
    {
      title: "Noragami",
      content:
        "Noragami's blend of supernatural elements, humor, and heartfelt moments make it an enjoyable and engaging read. The relationship between Yato and Yukine is endearing.",
      likes: 11,
      edited: false,
      user_id: 10,
      article_id: 17,
    },
    {
      title: "Toradora!",
      content:
        "Toradora! beautifully explores the complexities of teenage relationships and the power of understanding and acceptance. It's a heartwarming romantic comedy.",
      likes: 13,
      edited: false,
      user_id: 11,
      article_id: 18,
    },
    {
      title: "Haikyu!!",
      content:
        "Haikyu!! captures the exhilaration and teamwork of competitive sports. The dynamic character interactions and intense matches make it a must-read for sports fans.",
      likes: 28,
      edited: false,
      user_id: 12,
      article_id: 19,
    },
    {
      title: "Fairy Tail",
      content:
        "Fairy Tail's blend of fantasy, adventure, and friendship is pure escapism. The camaraderie between the characters is infectious.",
      likes: 22,
      edited: false,
      user_id: 13,
      article_id: 20,
    },
    {
      title: "One Piece",
      content:
        "One Piece is an amazing manga with a rich and expansive world. The adventures of Luffy and his crew never cease to entertain me!",
      likes: 10,
      edited: false,
      user_id: 1,
      article_id: 5,
    },
    {
      title: "Naruto",
      content:
        "Naruto is a classic manga that beautifully combines action, friendship, and perseverance. It's inspiring to see Naruto's growth throughout the series.",
      likes: 15,
      edited: false,
      user_id: 2,
      article_id: 1,
    },
    {
      title: "Boruto",
      content:
        "Boruto continues the legacy of Naruto with a fresh perspective. The integration of technology in the ninja world adds a unique twist to the story.",
      likes: 8,
      edited: false,
      user_id: 3,
      article_id: 2,
    },
    {
      title: "Fullmetal Alchemist",
      content:
        "Fullmetal Alchemist is a masterpiece that explores profound themes of sacrifice, redemption, and the consequences of playing god. The story will stay with me forever.",
      likes: 20,
      edited: false,
      user_id: 4,
      article_id: 3,
    },
    {
      title: "My Hero Academia",
      content:
        "My Hero Academia is a superhero manga that perfectly blends action, humor, and heartfelt moments. The character development and epic battles never fail to impress.",
      likes: 12,
      edited: false,
      user_id: 5,
      article_id: 4,
    },
    {
      title: "One Piece",
      content:
        "The world-building in One Piece is incredible. From the Grand Line to the unique Devil Fruit powers, Oda's imagination knows no bounds.",
      likes: 7,
      edited: false,
      user_id: 6,
      article_id: 5,
    },
    {
      title: "Hunter x Hunter",
      content:
        "Hunter x Hunter is a complex and thought-provoking manga. The intricate plot, diverse characters, and strategic battles make it a must-read.",
      likes: 14,
      edited: false,
      user_id: 7,
      article_id: 6,
    },
    {
      title: "Kimi ni Todoke",
      content:
        "Kimi ni Todoke is a heartwarming manga that beautifully depicts the journey of self-acceptance and the power of genuine connections.",
      likes: 6,
      edited: false,
      user_id: 8,
      article_id: 7,
    },
  ]);

  await Category.bulkCreate([
    {
      category_id: 1,
      name: "Shonen",
      limit: 0,
    },
    {
      category_id: 2,
      name: "Seinen",
      limit: 0,
    },
    {
      category_id: 3,
      name: "Shojo",
      limit: 0,
    },
    {
      category_id: 4,
      name: "Josei",
      limit: 0,
    },
    {
      category_id: 5,
      name: "Isekai",
      limit: 0,
    },
    {
      category_id: 6,
      name: "Mecha",
      limit: 0,
    },
    {
      category_id: 7,
      name: "Slice of Life",
      limit: 0,
    },
    {
      category_id: 8,
      name: "Fantasy",
      limit: 0,
    },
    {
      category_id: 9,
      name: "Sci-Fi",
      limit: 0,
    },
    {
      category_id: 10,
      name: "Horror",
      limit: 18,
    },
    {
      category_id: 11,
      name: "Hentai",
      limit: 18,
    },
  ]);
}

populateTables();
