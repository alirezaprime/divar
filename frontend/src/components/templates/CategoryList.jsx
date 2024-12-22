import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import Loader from "../modules/Loader";

function CategoryList() {
  //   getCategory()
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  const { data, isLoading } = useQuery(["get-category"], getCategory);
  console.log({ data, isLoading });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((item) => (
          <div key={item._id}>
            <img src={`${item.icon}.svg`} />
            <h5>{item.name}</h5>
            <p>slug: {item.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
/////////////////////////////////////////////////////////////////////////
