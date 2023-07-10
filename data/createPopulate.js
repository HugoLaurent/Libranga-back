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
    },
    {
      title: "Technology",
      manga: "Boruto",
      content:
        "Boruto explores a world where ninja technology is rapidly advancing. Futuristic gadgets like ninja tablets and virtual reality devices play a central role in missions and battles for shinobis. Technological innovation transforms how ninjas utilize their skills and interact with their environment.\n\nOne interesting aspect of ninja technology in Boruto is the introduction of scientific ninja tools. These tools enhance a shinobi's abilities and provide new avenues for combat. For example, the Kote is a wrist-mounted device that allows users to perform powerful jutsu without extensive training. However, the integration of technology also raises ethical questions and challenges traditional notions of what it means to be a ninja.",
      likes: 56,
      edited: false,
      user_id: 2,
    },
    {
      title: "Sports",
      manga: "Fullmetal Alchemist",
      content:
        "Fullmetal Alchemist presents a world where sports competitions hold significant importance. Captivating alchemy tournaments feature epic clashes between talented alchemists. These contests of strength and strategy showcase the characters' skills and push them to their limits.\n\nOne memorable sports event in Fullmetal Alchemist is the National Alchemist Exam, where alchemists from all over the country gather to showcase their abilities and compete for recognition. The exams feature a series of challenges that test the participants' knowledge, creativity, and tactical prowess. The intense battles and high stakes make for thrilling moments in the manga.",
      likes: 23,
      edited: false,
      user_id: 3,
    },
    {
      title: "Fashion",
      manga: "My Hero Academia",
      content:
        "My Hero Academia presents a universe where fashion and costumes play a significant role. Heroes and villains don unique outfits that reflect their personality and powers. Renowned fashion designers create iconic costumes that become symbols of a hero's might and presence.\n\nOne fascinating aspect of fashion in My Hero Academia is the concept of hero costumes being tailored to enhance a hero's quirk. These specialized outfits not only provide protection but also amplify and optimize their abilities. The design and functionality of hero costumes become crucial elements in a hero's effectiveness during battles and rescue missions.",
      likes: 8,
      edited: true,
      user_id: 3,
    },
    {
      title: "Nature",
      manga: "One Piece",
      content:
        "One Piece transports readers into a world of vast oceans and exotic landscapes. Luffy and his crew's adventures take them to discover paradise islands, lush jungles, and majestic mountains. The exploration of nature is an essential component of the story, and the breathtaking settings add a captivating visual dimension.\n\nOne remarkable natural wonder in One Piece is the Grand Line, a treacherous and mysterious sea route that stretches across the entire world. It is home to countless islands with unique climates, wildlife, and hidden treasures. The diverse and awe-inspiring environments encountered by the characters make their journey even more thrilling and visually stunning.",
      likes: 5,
      edited: false,
      user_id: 3,
    },
  ]);

  await Comment.bulkCreate([
    {
      title: "Lorem",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      likes: 5,
      edited: false,
      user_id: 1,
      article_id: 1,
    },
    {
      title: "Dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 2,
      edited: false,
      user_id: 2,
      article_id: 1,
    },
    {
      title: "Amet",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 3,
      edited: false,
      user_id: 3,
      article_id: 1,
    },
    {
      title: "Consectetur",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      likes: 1,
      edited: false,
      user_id: 4,
      article_id: 2,
    },
    {
      title: "Adipiscing",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      likes: 4,
      edited: false,
      user_id: 5,
      article_id: 2,
    },
    {
      title: "Elit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 0,
      edited: false,
      user_id: 6,
      article_id: 2,
    },
    {
      title: "Etiam",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      likes: 2,
      edited: false,
      user_id: 7,
      article_id: 3,
    },
    {
      title: "Faucibus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 3,
      edited: false,
      user_id: 8,
      article_id: 3,
    },
    {
      title: "Vitae",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 1,
      edited: false,
      user_id: 9,
      article_id: 3,
    },
    {
      title: "Ullamcorper",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      likes: 5,
      edited: false,
      user_id: 10,
      article_id: 3,
    },
  ]);

  await Category.bulkCreate([
    {
      category_id: 1,
      name: "Shonen",
      limit: 14,
    },
    {
      category_id: 2,
      name: "Seinen",
      limit: 18,
    },
    {
      category_id: 3,
      name: "Shojo",
      limit: 14,
    },
    {
      category_id: 4,
      name: "Josei",
      limit: 16,
    },
    {
      category_id: 5,
      name: "Isekai",
      limit: 14,
    },
    {
      category_id: 6,
      name: "Mecha",
      limit: 14,
    },
    {
      category_id: 7,
      name: "Slice of Life",
      limit: 14,
    },
    {
      category_id: 8,
      name: "Fantasy",
      limit: 16,
    },
    {
      category_id: 9,
      name: "Sci-Fi",
      limit: 16,
    },
    {
      category_id: 10,
      name: "Horror",
      limit: 18,
    },
  ]);
}

populateTables();
