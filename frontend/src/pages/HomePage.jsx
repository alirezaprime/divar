import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import Loader from "components/modules/Loader";
import { getCategory } from "services/admin";

function HomePage() {
  const { data: posts, isloading: postsLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isloading: categoryLoading } = useQuery(
    ["get-category"],
    getCategory
  );

  // console.log({ data, isloading });

  const style = { display: "flex" };
  return (
    <>
      {postsLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
