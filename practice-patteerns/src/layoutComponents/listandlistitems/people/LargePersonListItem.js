export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h1>{name}</h1>
      <p>Age: {age} </p>
      <p>Hair Color: {hairColor}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};
