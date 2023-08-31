const ul = document.querySelector('ul')

let puppies;

const fetchPuppies = async() => {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
  const json = await response.json();
  puppies = json.data.players;
  render();
};

const render = ()=> {
    const hash = window.location.hash.slice(1)*1;
    const html = puppies.map( puppy =>{
      return `<li><a href='#${puppy.id}' class='${ puppy.id === hash ? 'selected': ''}'>${puppy.name}</a></li>`
    }).join('');
    ul.innerHTML = html;
};

window.addEventListener('hashchange', ()=>{
    render();
});

fetchPuppies();

