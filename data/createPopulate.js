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
        "Naruto is known for its rich representation of Japanese cuisine...",
      likes: 137,
      edited: false,
      user_id: 2,
      category_id: 1,
    },
    {
      title: "Technology",
      manga: "Boruto",
      content:
        "Boruto explores a world where ninja technology is rapidly advancing...",
      likes: 56,
      edited: false,
      user_id: 2,
      category_id: 1,
    },
    {
      title: "Sports",
      manga: "Fullmetal Alchemist",
      content:
        "Fullmetal Alchemist presents a world where sports competitions hold significant importance...",
      likes: 23,
      edited: false,
      user_id: 3,
      category_id: 2,
    },
    {
      title: "Fashion",
      manga: "My Hero Academia",
      content:
        "My Hero Academia presents a universe where fashion and costumes play a significant role...",
      likes: 8,
      edited: true,
      user_id: 3,
      category_id: 3,
    },
    {
      title: "Nature",
      manga: "One Piece",
      content:
        "One Piece transports readers into a world of vast oceans and exotic landscapes...",
      likes: 5,
      edited: false,
      user_id: 3,
      category_id: 4,
    },
    {
      title: "Humanity's Struggle",
      manga: "Attack on Titan",
      content:
        "Attack on Titan is a gripping manga that portrays humanity's struggle for survival against giant humanoid creatures known as Titans...",
      likes: 87,
      edited: false,
      user_id: 4,
      category_id: 1,
    },
    {
      title: "The Power of the Death Note",
      manga: "Death Note",
      content:
        "Death Note follows the story of a high school student named Light Yagami who discovers a mysterious notebook with the power to kill anyone whose name is written in it...",
      likes: 122,
      edited: false,
      user_id: 5,
      category_id: 2,
    },
    {
      title: "The Curse of the Zodiac",
      manga: "Fruits Basket",
      content:
        "Fruits Basket revolves around the curse of the Zodiac, where certain members of a family turn into animals of the Chinese zodiac when embraced by someone of the opposite sex...",
      likes: 63,
      edited: false,
      user_id: 6,
      category_id: 3,
    },
    {
      title: "The Dark Guild",
      manga: "Fairy Tail",
      content:
        "Fairy Tail follows the adventures of Natsu Dragneel and his friends as they belong to a magical guild known for its rowdy and powerful members...",
      likes: 72,
      edited: false,
      user_id: 4,
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
      title: "Music and Friendship",
      manga: "K-On!",
      content:
        "K-On! focuses on a group of high school girls who form a band and share their passion for music and friendship...",
      likes: 43,
      edited: false,
      user_id: 5,
      category_id: 3,
    },
    {
      title: "The Black Swordsman",
      manga: "Berserk",
      content:
        "Berserk follows the story of Guts, a skilled swordsman seeking revenge against demonic beings known as Apostles...",
      likes: 112,
      edited: false,
      user_id: 5,
      category_id: 1,
    },
    {
      title: "The World of Dreams",
      manga: "Spirited Away",
      content:
        "Spirited Away tells the tale of Chihiro, a young girl who enters a magical world after her parents are transformed into pigs...",
      likes: 76,
      edited: false,
      user_id: 2,
      category_id: 2,
    },
    {
      title: "The Power of Music",
      manga: "Your Lie in April",
      content:
        "Your Lie in April follows the story of Kōsei Arima, a former piano prodigy who rediscovers his love for music through a talented violinist named Kaori Miyazono...",
      likes: 85,
      edited: false,
      user_id: 10,
      category_id: 3,
    },
    {
      title: "The Pirate King",
      manga: "One Piece",
      content:
        "One Piece chronicles the adventures of Monkey D. Luffy and his crew as they search for the legendary treasure known as One Piece and strive to become the Pirate King...",
      likes: 235,
      edited: false,
      user_id: 10,
      category_id: 4,
    },
    {
      title: "The Chūnin Exams",
      manga: "Naruto",
      content:
        "Naruto revolves around the journey of Naruto Uzumaki as he trains to become a powerful ninja and participates in the prestigious Chūnin Exams...",
      likes: 172,
      edited: false,
      user_id: 1,
      category_id: 1,
    },
    {
      title: "The World of Alchemy",
      manga: "Fullmetal Alchemist",
      content:
        "Fullmetal Alchemist delves into the world of alchemy as brothers Edward and Alphonse Elric search for the Philosopher's Stone to restore their bodies...",
      likes: 201,
      edited: false,
      user_id: 3,
      category_id: 2,
    },
    {
      title: "The Forbidden Love",
      manga: "Fruits Basket",
      content:
        "Fruits Basket explores the story of Tohru Honda as she becomes involved with the cursed members of the Sohma family and experiences love and friendship...",
      likes: 119,
      edited: false,
      user_id: 3,
      category_id: 3,
    },
    {
      title: "The Hero Association",
      manga: "One-Punch Man",
      content:
        "One-Punch Man follows the story of Saitama, a superhero who can defeat any opponent with a single punch, as he battles against powerful monsters and seeks recognition from the Hero Association...",
      likes: 156,
      edited: false,
      user_id: 4,
      category_id: 1,
    },
    {
      title: "The Dimensional Crossroads",
      manga: "Yu Yu Hakusho",
      content:
        "Yu Yu Hakusho tells the story of Yusuke Urameshi, a delinquent who becomes a Spirit Detective and protects the human world from supernatural threats...",
      likes: 88,
      edited: false,
      user_id: 7,
      category_id: 2,
    },
    {
      title: "The World of Magic",
      manga: "Black Clover",
      content:
        "Black Clover follows the journey of Asta, a young boy born without magical powers in a world where magic is everything, as he strives to become the Wizard King...",
      likes: 132,
      edited: false,
      user_id: 8,
      category_id: 3,
    },
    {
      title: "The Demon Slayer Corps",
      manga: "Demon Slayer",
      content:
        "Demon Slayer follows the story of Tanjiro Kamado, a young boy who becomes a member of the Demon Slayer Corps after his family is slaughtered by demons...",
      likes: 189,
      edited: false,
      user_id: 8,
      category_id: 4,
    },
    {
      title: "The Supernatural Investigations",
      manga: "Tokyo Ghoul",
      content:
        "Tokyo Ghoul explores the life of Ken Kaneki, a college student who becomes a half-ghoul after a close encounter with a ghoul and must navigate the dark world of supernatural beings...",
      likes: 143,
      edited: false,
      user_id: 8,
      category_id: 1,
    },
    {
      title: "The School of Assassins",
      manga: "Assassination Classroom",
      content:
        "Assassination Classroom revolves around a class of students who must assassinate their alien teacher, Koro-sensei, while learning valuable life lessons along the way...",
      likes: 98,
      edited: false,
      user_id: 3,
      category_id: 2,
    },
    {
      title: "The World of Gaming",
      manga: "Sword Art Online",
      content:
        "Sword Art Online takes place in a virtual reality MMORPG where players must fight for their lives as they are trapped inside the game...",
      likes: 207,
      edited: false,
      user_id: 10,
      category_id: 3,
    },
    {
      title: "The Soul Society",
      manga: "Bleach",
      content:
        "Bleach follows the adventures of Ichigo Kurosaki, a teenager with the ability to see ghosts, as he becomes a Soul Reaper and protects the living world from malevolent spirits...",
      likes: 172,
      edited: false,
      user_id: 11,
      category_id: 4,
    },
    {
      title: "The Pirate King's Crew",
      manga: "One Piece",
      content:
        "One Piece focuses on the journey of Monkey D. Luffy and his diverse crew of pirates as they search for the ultimate treasure and confront powerful enemies...",
      likes: 238,
      edited: false,
      user_id: 11,
      category_id: 1,
    },
  ]);

  await Comment.bulkCreate([
    {
      title: "One Piece",
      content: "Ah, I love One Piece! Luffy is my favorite character.",
      likes: 5,
      edited: false,
      user_id: 10,
      article_id: 1,
    },
    {
      title: "Naruto",
      content:
        "Naruto is an awesome series, but I haven't finished reading it yet.",
      likes: 2,
      edited: false,
      user_id: 8,
      article_id: 1,
    },
    {
      title: "Attack on Titan",
      content: "Wow, Attack on Titan totally captivated me!",
      likes: 3,
      edited: false,
      user_id: 5,
      article_id: 1,
    },
    {
      title: "One Punch Man",
      content: "One Punch Man is hilarious! Saitama is so powerful.",
      likes: 1,
      edited: false,
      user_id: 16,
      article_id: 2,
    },
    {
      title: "My Hero Academia",
      content:
        "I'm a huge fan of My Hero Academia! The characters' powers are incredible.",
      likes: 4,
      edited: false,
      user_id: 3,
      article_id: 2,
    },
    {
      title: "Demon Slayer",
      content:
        "Demon Slayer is one of my favorite manga! The animation is beautiful.",
      likes: 0,
      edited: false,
      user_id: 12,
      article_id: 2,
    },
    {
      title: "Dragon Ball",
      content: "Dragon Ball is an absolute classic! Goku is the best.",
      likes: 2,
      edited: false,
      user_id: 23,
      article_id: 3,
    },
    {
      title: "Bleach",
      content:
        "I really enjoyed Bleach, but I haven't finished the series yet.",
      likes: 3,
      edited: false,
      user_id: 19,
      article_id: 3,
    },
    {
      title: "Fullmetal Alchemist",
      content:
        "Fullmetal Alchemist is a work of art! The characters and story are amazing.",
      likes: 1,
      edited: false,
      user_id: 7,
      article_id: 3,
    },
    {
      title: "Death Note",
      content:
        "Death Note is so captivating! The intellectual duel between Light and L is fascinating.",
      likes: 5,
      edited: false,
      user_id: 14,
      article_id: 3,
    },
    {
      title: "Fairy Tail",
      content:
        "Fairy Tail is such a fun and exciting series! The magic battles are epic.",
      likes: 2,
      edited: false,
      user_id: 18,
      article_id: 4,
    },
    {
      title: "Hunter x Hunter",
      content:
        "Hunter x Hunter is a masterpiece! The intricate power system and character development are top-notch.",
      likes: 6,
      edited: false,
      user_id: 2,
      article_id: 4,
    },
    {
      title: "K-On!",
      content:
        "K-On! is a heartwarming series that celebrates the power of music and friendship.",
      likes: 3,
      edited: false,
      user_id: 12,
      article_id: 4,
    },
    {
      title: "Berserk",
      content:
        "Berserk is an intense and dark manga that delves into the depths of human nature.",
      likes: 4,
      edited: false,
      user_id: 24,
      article_id: 4,
    },
    {
      title: "Spirited Away",
      content:
        "Spirited Away is a magical and enchanting film that transports you to a whimsical world.",
      likes: 7,
      edited: false,
      user_id: 1,
      article_id: 5,
    },
    {
      title: "Your Lie in April",
      content:
        "Your Lie in April is a beautiful and emotional story that showcases the power of music and love.",
      likes: 5,
      edited: false,
      user_id: 11,
      article_id: 5,
    },
    {
      title: "Black Clover",
      content:
        "Black Clover is a captivating series with a unique magic system and lovable characters.",
      likes: 3,
      edited: false,
      user_id: 9,
      article_id: 5,
    },
    {
      title: "Tokyo Ghoul",
      content:
        "Tokyo Ghoul is a thrilling and dark manga that explores the boundaries of humanity and monstrosity.",
      likes: 4,
      edited: false,
      user_id: 22,
      article_id: 5,
    },
    {
      title: "Attack on Titan",
      content:
        "The action scenes in Attack on Titan are so intense and adrenaline-pumping!",
      likes: 2,
      edited: false,
      user_id: 20,
      article_id: 6,
    },
    {
      title: "My Hero Academia",
      content:
        "I can't get enough of My Hero Academia! The character development and plot twists keep me hooked.",
      likes: 6,
      edited: false,
      user_id: 6,
      article_id: 6,
    },
    {
      title: "Demon Slayer",
      content:
        "The animation in Demon Slayer is breathtaking! The fight scenes are a visual treat.",
      likes: 3,
      edited: false,
      user_id: 17,
      article_id: 6,
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
