export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      {name}, age: {age}
    </p>
  );
};
