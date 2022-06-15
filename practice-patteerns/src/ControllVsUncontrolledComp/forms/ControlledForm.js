import { useState, useEffect } from 'react';

export const ControlledFrom = () => {
  const [nameInputError, setNameInputError] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState('');

  useEffect(() => {
    setNameInputError('');
    if (name.length < 2) {
      setNameInputError('Name msut be long');
    }
  }, [name, age, hairColor]);

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Name"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
