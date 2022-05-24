import Card from "./Card";

function List({ chars }) {
  // select only 6 chars
  const selectedChars = chars?.slice(6, 12);

  return (
    <div>
      <div className="text-white flex flex-wrap justify-center p-5">
        {selectedChars?.map((char) => {
          return <Card key={char?.id} char={char} />;
        })}
      </div>
    </div>
  );
}

export default List;
