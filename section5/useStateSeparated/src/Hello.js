export const Hello = ({ name, handleChangeName, initialName }) => {
  return (
    <>
      <p>
        Hello, <b>{name} !!</b>
        <br />
        nameの初期値： <b>{initialName}</b>
      </p>
      <input type="text" onChange={handleChangeName} />
    </>
  );
};
