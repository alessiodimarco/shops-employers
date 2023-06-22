import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

import Link from "next/link";

export const Menu = () => {
  return (
    <ul className="nav">
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <HomeIcon />
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <AddIcon />
          <Link href={`/add-product`}>Add Product</Link>
        </li>
      </ul>
    </ul>
  );
};
