const bandsList = document.querySelector('#bands');

const bands = [
  'The Plot in You', 
  'The Devil Wears Prada', 
  'Pierce the Veil', 
  'Norma Jean', 
  'The Bled', 
  'Say Anything', 
  'The Midway State', 
  'We Came as Romans', 
  'Counterparts', 
  'Oh, Sleeper', 
  'A Skylit Drive', 
  'Anywhere But Here', 
  'An Old Dog'
];

/*
anywhere but here
the bled
counterparts
The devil wears prada


final should be we came as romans
*/

function removeArticles(str) {
  words = str.split(" ");
  if(words.length <= 1) return str;
  if(words[0] == 'the' || words[0] == 'a' || words[0] == 'an'){
    return words.splice(1).join(" ")
  };
  return str;
}

function compareStrings(a, b) {
  aName = a.toLowerCase();
  bName = b.toLowerCase();
  const articleRemovedA = removeArticles(aName);
  const articleRemovedB = removeArticles(bName); 
  if(articleRemovedA < articleRemovedB) return -1;
  if(articleRemovedB < articleRemovedA) return 1;
  return 0;
}




const sortedBands = bands.sort(compareStrings);

bandsList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
