import React,{Component} from 'react'
import SuperHero from './SuperHero'

const heros = [
  {
    name: "Deadpool",
    image: "https://a.ltrbxd.com/resized/sm/upload/ht/ra/iv/pe/deadpool-1200-1200-675-675-crop-000000.jpg?k=25cd90d5f0",
    catchPhrase: "Chimichanga!"
  },{
    name: "Goku",
    image: "https://static2.thegamerimages.com/wordpress/wp-content/uploads/2018/10/goku-ssj2.jpg",
    catchPhrase: "I would rather be a brainless monkey than a heartless monster!"
  },{
    name: "Naruto",
    image: "https://www.whats-on-netflix.com/wp-content/uploads/2018/09/naruto-on-netflix.jpg",
    catchPhrase: "It's "
  },{
    name: "Robin",
    image: "https://img1.looper.com/img/gallery/why-dc-wont-make-a-robin-movie/intro.jpg",
    catchPhrase: "Summer"
  },{
    name: "Black Panther",
    image: "https://www.thewrap.com/wp-content/uploads/2018/02/the-black-panther-film-marvel.jpg",
    catchPhrase: "Wakanda Forever!"
  },{
    name: "Stephen Curry",
    image: "https://stmed.net/sites/default/files/stephen-curry-wallpapers-31397-5671741.jpg",
    catchPhrase: "I can do all things!"
  }
]

class App extends Component {
  constructor(){
    super()
    this.state={
      catchPhrase:""
    }
  }
  showCatchPhrase = () => {
    this.setState({catchPhrase: heros.catchPhrase})
  }
  render(){
    const mappedHeros = heros.map((hero) => {
      return <SuperHero 
        name={hero.name} 
        image={hero.image}
        catchphrase={hero.catchPhrase}

      />
    })
    const parent={
      display:"grid",
      gridGap:5,
      gridTemplateColumns:"repeat(auto-fill,minmax(400px, 1fr))"
    }
      return (
        <div style={parent}>
          {mappedHeros}
        </div>
      )
    }
}

export default App