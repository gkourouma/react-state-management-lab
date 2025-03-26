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
      console.log("Not enough money");
    }
    console.log(zombie);
  };

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <p>Money Amount: ${money}</p>
      <p>Team Strength: </p>
      <p>Team Agility: </p>
      <p>
        Team:
        {team.length === 0
          ? " Pick some Team members"
          : team.map((zombie) => (
              <li key={zombie.id}>
                <img src={zombie.img} alt="" />
                <h2>{zombie.name}</h2>
                <p>Price: {zombie.price}</p>
                <p>Strength: {zombie.strength}</p>
                <p>Agility: {zombie.agility}</p>
              </li>
            ))}
      </p>

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombie) => (
          <li key={zombie.id}>
            <img src={zombie.img} alt="" />
            <h2>{zombie.name}</h2>
            <p>Price: {zombie.price}</p>
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
