import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // Fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 3,
      },
    })
    .Post();

  //   relational filtering
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
