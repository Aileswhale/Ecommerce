
import new_collection from "../assets/new_collections"
import Items from "../Items/Items"
import "./NewCollection.css"
const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px] mt-[5rem]">
      <h1 className="text-[#171717] text-[50px] text-600">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className=" grid collection mt-[50px] gap-[30px] w-[90%] ">
        {new_collection.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections
