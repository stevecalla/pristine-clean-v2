// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  // Note = Query below is for title keywords with a preview available (filter = partial)
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&filter=partial`
    );
  };
  
// return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// return `https://www.googleapis.com/books/v1/volumes?q=${query}&&orderBy=newest&startIndex=0&maxResults=10`
// See google book API for more options https://developers.google.com/books/docs/v1/using#PerformingSearch
// 