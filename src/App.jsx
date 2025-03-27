import { useState } from "react";
import "./App.css";
import "./index.css";

const App = () => {
  const handleAddFighter = (zombie) => {
    if (money >= zombie.price) {
      setTeam([...team, zombie]);
      const updatedZombieFighters = zombieFighters.filter(fighter => fighter.id !== zombie.id) // Used .filter to create a new array excluding the selected zombie id.
      setZombieFighters(updatedZombieFighters)
      const updatedMoney =  money - zombie.price //subtracting the price of the zombie from the total amount of money
      setMoney(updatedMoney) //updating the state of money
    } else {
      alert ("You do not have enough money");
    }
    console.log(zombie);
  };

  const handleRemoveFighter = (zombie) => { //doing the complete opposite of the add function
    setZombieFighters([...zombieFighters, zombie])
    const updateTeam = team.filter(fighter => fighter.id !== zombie.id)
    setTeam(updateTeam)
    const updatedMoney = money + zombie.price
    setMoney(updatedMoney)
  }

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "/survivor_imresizer.jpg",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "/scavenger.jpg",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "/shadow.jpg",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "/tracker.jpg",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "/sharp.jpg",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "/medic.jpg",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "/engineer.jpg",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "/brawler.jpg",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "/infiltrator.jpg",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "/leader.jpg",
    },
  ]);

  const totalStrength = team.reduce((accumulator, zombie) => accumulator + zombie.strength,0) //Used .reduce to sum up strength and agility of team members
  const totalAgility = team.reduce((accumulator, zombie) => accumulator + zombie.agility,0)

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <p>Money Amount: ${money}</p>
      <p>Team Strength: {totalStrength} </p>
      <p>Team Agility: {totalAgility} </p>
      <p>
        Team:
        <ul>
        {team.length === 0
          ? " Pick some Team members"
          : team.map((zombie) => (
              <li key={zombie.id}>
                <img src={zombie.img} alt="" />
                <h2>{zombie.name}</h2>
                <p>Price: ${zombie.price}</p>
                <p>Strength: {zombie.strength}</p>
                <p>Agility: {zombie.agility}</p>
                <button onClick={() => handleRemoveFighter(zombie)}>Remove</button>
              </li>
            ))}
            </ul>
      </p>

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombie) => (
          <li key={zombie.id}>
            <img src={zombie.img} alt="" />
            <h2>{zombie.name}</h2>
            <p>Price: ${zombie.price}</p>
            <p>Strength: {zombie.strength}</p>
            <p>Agility: {zombie.agility}</p>
            <button onClick={() => handleAddFighter(zombie)}>Add</button>
          </li>
        ))}
      </ul>

      <div>
        <p></p>
      </div>
    </div>
  );
};

export default App;
