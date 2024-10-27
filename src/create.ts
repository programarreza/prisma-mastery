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
        title: "Title 1",
        content: "content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 3",
        content: "content 3",
        authorName: "Author 3",
      },
      {
        title: "Title 4",
        content: "content 4",
        authorName: "Author 4",
      },
    ],
  });

  console.log({ createMany });
};

// main();
