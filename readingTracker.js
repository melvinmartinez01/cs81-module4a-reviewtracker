// Weekly reading log

// This constant holds all the entries for the week's reading log.
// Each entry is an object with the day of the week, the book read, 
// and the minutes spent reading.

const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log

// This function adds a new entry to the reading log array.

function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);  // This pushes the new entry object into the readingLog array
}

// Returns total minutes spent reading all week

// This function calculates the total number of minutes spent reading by
// using a loop to sum up the minutes from each entry in the log.

function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {  // Loop through each entry to accumulate total minutes
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently

// This function determines which book was read the most by counting
// the book entries and returning the one with the highest count. This
// uses the if... and else... structure.

function mostReadBook(log) {
  const bookCounts = {};  // This object tracks how many times each book appears in the log
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  // This part sets up the max count as null so that there will not be
  // a limit. It then uses a loop to check which book has the highest count
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day

// This function prints out the daily reading summary by looping through
// each entry in the log, which then prints the day, minutes, and book 
// read.

function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage

// This section demonstrates how the function above is to be used.

addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
