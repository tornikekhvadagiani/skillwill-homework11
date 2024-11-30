import Card from "./Card";
import mefeliri from "../assets/MEFELIRI.jpg"
import samoselipirveli from "../assets/SAMOSELIPIRVELI.jpg"
import vefxistyaosani from "../assets/VEFXISTYAOSANI.jpg"


const data = [
    {id:1,
    name:"მეფე ლირი", 
    description:"უილიამ შექსპირის ტრაგედია, დაფუძნებული ბრიტანეთის ლეგენდარული მეფე ლირის ისტორიაზე", 
    characters: ["პერსონაჟები", "მეფე ლირი", "გონერილი", "რეგანი", "კორდელია "], 
    image:mefeliri },
    {id:2,
    name:"სამოსელი პირველი", 
    description:"გურამ დოჩანაშვილის რომანი, რომელიც გამოიცა 1975 წელს", 
    characters: ["პერსონაჟები", "დომენიკო", "ედმონდო ბეტანკური", "გვეგვე", ], 
    image:samoselipirveli },
    {id:3,
    name:"ვეფხისტყაოსანი", 
    description:"XII საუკუნის ქართველი პოეტის, შოთა რუსთაველის ჩვენამდე მოღწეული ერთადერთი პოემა.", 
    characters: ["პერსონაჟები", "ტარიელი", "ნესტან-დარეჯანი", "ავთანდილი", "თინათინი"], 
    image:vefxistyaosani }]

const CardList = () => {
    function action(name) {
        alert (`this is an action ${name}`)
        
    }
  return (
    <div className="card-list">
        {data.map((card) => <Card key={card.id} name={card.name} description={card.description} characters={card.characters} image={card.image} action={action}/>)}
    </div>
  )
} 

export default CardList