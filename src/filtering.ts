import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  // AND filtering
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //   OR filtering
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "u",
      },
    },
  });

  const endWith = await prisma.user.findMany({
    where: {
      username: {
      	endsWith: "2"
      }
    },
  }); 

  const fullMatch = await prisma.user.findMany({
    where: {
      username: {
      	equals: "user1"
      }
    },
  }); 

  const userNameArray = ['user1', 'user2', 'user3']

  const userNameByArray = await prisma.user.findMany({
	where: {
		username: {
			in: userNameArray
		}
	}
  })

  const inDepthData = await prisma.user.findUnique({
	where: {
		id: 3
	},
	include: {
		Post: {
			include:{
				postCategory: {
					include: {
						category: true
					}
				}
			}
		}
	}
  })

  console.dir(inDepthData, {depth: Infinity});
};

filtering();
