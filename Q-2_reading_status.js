var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Completed " + book);
    } else
    {
     console.log("Not Done" + book);
    }
   }


   //output - "Completed 'Bill Gates' by The Road Ahead."
            //"Completed 'Steve Jobs' by Walter Isaacson."
            //"Not Done'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins."


