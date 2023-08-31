const ul = document.querySelector('ul')
console.log(ul)

const fetchPuppies = async() => {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
  const json = await response.json();
  const puppies = json.data.players;
  console.log(puppies)

  const html = puppies.map( puppy =>{
    return `<li>${puppy.name}</li>`
  }).join('');
  ul.innerHTML = html;
  console.log(html)
  
};
fetchPuppies();