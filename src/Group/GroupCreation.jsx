import './GroupCreation.css'
import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function GroupCreation({ toggleVisibility, defaultGame }) {
  const [groupTitle, setGroupTitle] = useState('');
  const [selectedGame, setSelectedGame] = useState(defaultGame || 'SELECT GAME');
  const [numPlayers, setNumPlayers] = useState('?');
  const [groupGamemode, setGamemode] = useState('SELECT MODE');
  const [userRank, setUserRank] = useState('SELECT RANK');

  // Define rank options for each game
  const rankOptions = {
    "Valorant": ["Iron 1", "Iron 2", "Iron 3", "Bronze 1", "Bronze 2", "Bronze 3", "Silver", "Gold", "Platinum", "Diamond", "Immortal", "Radiant"],
    "Overwatch": ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Grandmaster", "Top 500"],
    "Rainbow Six Siege": ["Copper", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Champion"],
    // Add more games with specific ranks as needed
  };

  const handleSelect = (game) => {
    setSelectedGame(game);
    setUserRank('SELECT RANK'); // Reset rank when the game changes
  };

  const handleRank = (rank) => {
    setUserRank(rank);
  };

  const handlePlayers = (players) => {
    setNumPlayers(players);
  };

  const handleGamemode = (gamemode) => {
    setGamemode(gamemode);
  };

  const groupTitleChange = (e) => {
    setGroupTitle(e.target.value);
  };

  return (
    <div>
      <div className='group-creation-container'>
        <button className='group-creator-text'>
          CREATE GROUP
        </button>
        <button onClick={toggleVisibility} className='close-button'>
          X
        </button>
        <div className="group-game">
          {selectedGame}
        </div>
        
        {/* Rank Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="group-dropdown-custom">
            {userRank}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {rankOptions[selectedGame]?.map((rank, index) => (
              <Dropdown.Item key={index} onClick={() => handleRank(rank)}>
                {rank}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="group-dropdown-custom">
            {groupGamemode}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleGamemode("Unrated")}>Unrated</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGamemode("Deathmatch")}>Deathmatch</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGamemode("Swiftplay")}>Swiftplay</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGamemode("Spike Rush")}>Spike Rush</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGamemode("Competitive")}>Competitive</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="group-dropdown-custom">
            # OF PLAYERS: {numPlayers}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlePlayers(2)}>2</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePlayers(3)}>3</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePlayers(4)}>4</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePlayers(5)}>5</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <input className="group-title" type="text" value={groupTitle} onChange={groupTitleChange} placeholder='<ENTER GROUP TITLE>' />
        <button className='group-done-button' onClick={toggleVisibility}>
          DONE
        </button>
      </div>
    </div>
  );
}

export default GroupCreation;