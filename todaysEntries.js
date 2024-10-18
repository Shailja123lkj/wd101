let todaysEntries=(logEntries)=> {
                                       // Get the current date in YYYY-MM-DD format
    let today = new Date().toISOString().split('T')[0];

                                     // Filter log entries that match today's date
    let matchingEntries = logEntries.filter(entry => {
                                       // Extract the date portion from the log entry's date
    let logDate = entry.date.split('T')[0];
     return logDate === today;
      }
      );

     // Return a string of names separated by commas
    return matchingEntries.map(entry => entry.name).join(',');
};

let today = 2024-09-21;
module.exports = todaysEntries;
