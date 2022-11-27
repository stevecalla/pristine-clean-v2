export const removeDuplicateBooks = (items) => {
  // results above can return duplicate book id; process below removes duplicates
  // when duplicate entries exist reeact returns an error message in the console b/c it can't uniquely identify each item
  const allBookIds = items.map((book) => book.id);
  const allBooks = items.map((book) => book.volumeInfo);

  let duplicateBookIds = [];
  let uniqueBookIds = [];
  let uniqueBooks = [];

  for (let i = 0; i < allBookIds.length; i++) {
    if (!uniqueBookIds.includes(allBookIds[i])) {
      uniqueBookIds.push(allBookIds[i]);
      uniqueBooks.push(allBooks[i]);
    } else {
      duplicateBookIds.push({ id: allBookIds[i], index: i });
    }
  }

  //add book id to the unique book objects
  for (let i = 0; i < uniqueBooks.length; i++) {
    uniqueBooks[i].id = uniqueBookIds[i];
  }

  return uniqueBooks;
};
