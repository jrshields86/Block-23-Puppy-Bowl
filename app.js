const nav = document.querySelector('nav')
const detail = document.querySelector('#detail')
console.log(detail)

let puppies;

const fetchPuppies = async() => {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
  const json = await response.json();
  puppies = json.data.players;
  render();
  //console.log(puppies)
};


const render = ()=> {
    const hash = window.location.hash.slice(1)*1;
    const html = puppies.map( puppy =>{
      return `<a href='#${puppy.id !== hash ? puppy.id : '' }' class='${ puppy.id === hash ? 'selected': ''}'>${puppy.name}</a>`
    }).join('');
    nav.innerHTML = html;

    const breeds = puppies.find( breed => {
        return breed.id === hash;
    });
    
    
    let detailHtml = 'Welcome to the 2023 Puppy Bowl site!'
    if(breeds){
      console.log(breeds.imageUrl)
      detailHtml = `<div><img src=${breeds.imageUrl}></div>`;
  }

    console.log(detailHtml)
    
    detail.innerHTML = detailHtml;

    
    
    
};


window.addEventListener('hashchange', ()=>{
    render();
});

fetchPuppies();

