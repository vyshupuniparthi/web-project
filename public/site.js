const quotes=[
    "I have always imagined that Paradise will be a kind of a Library.",
    "When in doubt go to the library.",
    "Libraries were full of ideas – perhaps the most dangerous and powerful of all weapons.",
    
]
const authors=["meee","myself","myyyyy"]


!function newFact() {
    const randomquote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomquote];
    document.getElementById('authorDisplay').innerHTML= authors[randomquote];

  }();
