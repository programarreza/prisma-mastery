import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create single data into db
  // const result = await prisma.post.create({
  // 	data: {
  // 		title: "This is title-2!",
  // 		content: "This is content-2",
  // 		authorName: "shafikul islam"
  // 	}
  // })

  // createMany
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Exploring the Stars",
        content: "A journey through space.",
        authorName: "Alice Moon",
      },
      {
        title: "The Future of AI",
        content: "How AI will shape our lives.",
        authorName: "Bob Tech",
      },
      {
        title: "Mysteries of the Ocean",
        content: "Uncovering the deep blue secrets.",
        authorName: "Claire Waters",
      },
      {
        title: "Mastering the Art of Cooking",
        content: "Delicious recipes for beginners.",
        authorName: "David Chef",
      },
      {
        title: "Fitness for Busy People",
        content: "Stay fit with a tight schedule.",
        authorName: "Eve Fit",
      },
      {
        title: "Traveling on a Budget",
        content: "See the world without breaking the bank.",
        authorName: "Frank Wanderer",
      },
      {
        title: "Secrets of Mindfulness",
        content: "Meditation for peace and clarity.",
        authorName: "Grace Zen",
      },
      {
        title: "The Power of Habits",
        content: "Building positive habits for success.",
        authorName: "Henry Discipline",
      },
      {
        title: "Tech Trends in 2024",
        content: "What's hot in the tech world.",
        authorName: "Ivy Innovator",
      },
      {
        title: "The History of Music",
        content: "From classical to contemporary.",
        authorName: "Jack Melody",
      },
      {
        title: "Exploring the Jungle",
        content: "An adventure into the wild.",
        authorName: "Karen Safari",
      },
      {
        title: "Mind Over Matter",
        content: "Harnessing the power of the mind.",
        authorName: "Leo Focus",
      },
      {
        title: "Building a Startup",
        content: "Tips for aspiring entrepreneurs.",
        authorName: "Mia Founder",
      },
      {
        title: "Photography 101",
        content: "Master the basics of photography.",
        authorName: "Nina Click",
      },
      {
        title: "Coding for Kids",
        content: "A fun introduction to programming.",
        authorName: "Oscar Code",
      },
      {
        title: "Understanding Blockchain",
        content: "The technology behind cryptocurrency.",
        authorName: "Paul Ledger",
      },
      {
        title: "The Art of Negotiation",
        content: "How to get the best deals.",
        authorName: "Quinn Deal",
      },
      {
        title: "Designing Your Dream Home",
        content: "Interior design tips.",
        authorName: "Rachel Architect",
      },
      {
        title: "Fitness Myths Debunked",
        content: "Separating fact from fiction.",
        authorName: "Steve Strong",
      },
      {
        title: "Investing for Beginners",
        content: "How to start investing.",
        authorName: "Tim Money",
      },
      {
        title: "The Science of Happiness",
        content: "What makes us truly happy.",
        authorName: "Uma Joy",
      },
      {
        title: "Gardening Made Simple",
        content: "Grow your own food at home.",
        authorName: "Vera Green",
      },
      {
        title: "Fashion Trends of 2024",
        content: "What's in style this year.",
        authorName: "Will Fashion",
      },
      {
        title: "The Future of Work",
        content: "How remote work is changing the world.",
        authorName: "Xander Remote",
      },
      {
        title: "Exploring Ancient Civilizations",
        content: "Discovering lost cultures.",
        authorName: "Yara History",
      },
      {
        title: "Healthy Eating on the Go",
        content: "Nutritious meals for a busy life.",
        authorName: "Zane Health",
      },
      {
        title: "The Magic of Mindset",
        content: "Achieving success through positivity.",
        authorName: "Amelia Optimist",
      },
      {
        title: "Life in the Metaverse",
        content: "What virtual reality means for us.",
        authorName: "Ben VR",
      },
      {
        title: "Understanding Quantum Physics",
        content: "Exploring the smallest particles.",
        authorName: "Cara Quantum",
      },
      {
        title: "The Psychology of Colors",
        content: "How colors affect our emotions.",
        authorName: "Dylan Artist",
      },
      {
        title: "Remote Learning Revolution",
        content: "The future of education.",
        authorName: "Emma Teacher",
      },
      {
        title: "The Ultimate Guide to Camping",
        content: "How to enjoy the great outdoors.",
        authorName: "Finn Adventure",
      },
      {
        title: "Sustainability in Fashion",
        content: "Eco-friendly clothing trends.",
        authorName: "Gina Green",
      },
      {
        title: "Mastering Social Media",
        content: "Grow your online presence.",
        authorName: "Holly Influencer",
      },
      {
        title: "The Science Behind Sleep",
        content: "Why sleep is essential.",
        authorName: "Ian Dream",
      },
      {
        title: "The Rise of Esports",
        content: "Competitive gaming in 2024.",
        authorName: "Jake Gamer",
      },
      {
        title: "The Benefits of Yoga",
        content: "Mind and body wellness.",
        authorName: "Kay Flex",
      },
      {
        title: "How to Save for Retirement",
        content: "Planning your financial future.",
        authorName: "Linda Saver",
      },
      {
        title: "The Secrets of Productivity",
        content: "Get more done in less time.",
        authorName: "Mark Hustle",
      },
      {
        title: "Exploring the World of Robotics",
        content: "How robots are changing industries.",
        authorName: "Nate Robot",
      },
      {
        title: "Digital Art for Beginners",
        content: "Create art with technology.",
        authorName: "Olivia Creative",
      },
      {
        title: "The Benefits of Minimalism",
        content: "Living with less.",
        authorName: "Peter Simple",
      },
      {
        title: "The Wonders of Astronomy",
        content: "Understanding the cosmos.",
        authorName: "Quincy Star",
      },
      {
        title: "Baking Like a Pro",
        content: "Perfect your pastries.",
        authorName: "Rebecca Baker",
      },
      {
        title: "Self-Care for Mental Health",
        content: "Prioritize your well-being.",
        authorName: "Sophie Calm",
      },
      {
        title: "The Future of Transportation",
        content: "Electric cars and beyond.",
        authorName: "Tom Tesla",
      },
      {
        title: "The Art of Storytelling",
        content: "Captivate your audience.",
        authorName: "Ursula Tales",
      },
      {
        title: "The Science of Climate Change",
        content: "Understanding global warming.",
        authorName: "Victor Earth",
      },
      {
        title: "Fitness Challenges for Fun",
        content: "Motivate yourself to move.",
        authorName: "Wendy Strong",
      },
      {
        title: "The Evolution of Cinema",
        content: "How movies have changed.",
        authorName: "Xenia Film",
      },
      {
        title: "The Joy of Cooking",
        content: "From home chef to pro.",
        authorName: "Yvonne Flavor",
      },
      {
        title: "The Importance of Hydration",
        content: "Stay healthy by staying hydrated.",
        authorName: "Zeke Water",
      },
    ],
  });

  console.log({ createMany });
};

main();
