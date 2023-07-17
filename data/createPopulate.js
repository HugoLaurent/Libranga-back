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
