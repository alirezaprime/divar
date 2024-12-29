import styles from "./SideBar.module.css";

function SideBar({ categories }) {
  // console.log(data);

  return (
    <div className={styles.sidebar}>
      <h4>دسته ها</h4>
      <ul>
        {categories?.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
