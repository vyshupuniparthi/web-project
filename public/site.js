const quotes=[
    "I have always imagined that Paradise will be a kind of a Library.",
    "When in doubt go to the library.",
    "Libraries were full of ideas – perhaps the most dangerous and powerful of all weapons.",
    "To build up a library is to create a life. It’s never just a random collection of books.",
    "A library is the delivery room for the birth of ideas, a place where history comes to life.",
    "Shout for libraries. Shout for the young readers who use them.",
    "Librarians are tour-guides for all of knowledge.",
    "A great library is one nobody notices because it is always there, and always has what people need.",
    "Libraries are our friends.",
    "Having fun isn’t hard when you’ve got a library card.",
    "A library is a place where you learn what teachers were afraid to teach you.",
    "The love of libraries, like most loves, must be learned.",
    "Libraries are the future of reading.",
    "A library is not a luxury but one of the necessities of life.",
    "An investment in knowledge pays the best interest",
    "Change is the end result of all true learning.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "The roots of education are bitter, but the fruit is sweet.",
    "The more that you read, the more things you will know, the more that you learn, the more places you’ll go.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Education without values, as useful as it is, seems rather to make man a more clever devil.",
    "The learning process continues until the day you die.",
    "Education is not the filling of a pail, but the lighting of a fire.",
    "Develop a passion for learning. If you do, you will never cease to grow.",
    "Education is not preparation for life; education is life itself",
    "Education is a better safeguard of liberty than a standing army.",
    "Educating the mind without educating the heart is no education at all.",
    "Learning is not compulsory. Neither is survival.",
    "Wisdom…. comes not from age, but from education and learning.",
    "Nothing is pleasanter than exploring a library."
]

!function newFact() {
    const randomquote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomquote];
  }();
