import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
//   const offsetData = await prisma.post.findMany({
// 	skip: 3,
// 	take: 2
//   });
//   console.log("Offset paginated data:", offsetData);

// cursor based pagination
const cursorData = await prisma.post.findMany({
	skip: 5,
	take: 5,
	cursor: {
		id: 50
	}
})

// console.log("Offset paginated data:", cursorData);

	// sorting
	const sortedData = await prisma.post.findMany({
		orderBy: {
			id: "desc"
		},
		skip: 2,
		take: 2
	})

	// console.log(sortedData)
};

paginationSorting()
