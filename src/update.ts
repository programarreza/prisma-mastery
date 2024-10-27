import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 11,
  //     },
  //     data: {
  //       title: "Title 5",
  //       content: "Content 5",
  //       authorName: "Author 5",
  //     },
  //   });

  //   console.log(singleUpdate)

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Title 2",
    },
    data: {
      published: true,
    },
  });

  console.log({ updateMany });
};

updates();
