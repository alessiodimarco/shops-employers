import BadgeIcon from "@mui/icons-material/Badge";
import { StoreData } from "../common.tsx/interfaces";

interface StoreInfoProps {
  data: StoreData;
}

export const StoreInfo = ({ data }: StoreInfoProps) => (
  <div className="store-info">
    <div className="store-info-base">
      <h1 className="store-info-title">{data.name}</h1>
      <p className="store-info-category">{data.category}</p>
    </div>
    <div className="store-info-employees">
      <h4>Employee list</h4>

      <ul>
        {data.employees.map((empl, i) => (
          <li className="empl-item" key={i}>
            <BadgeIcon sx={{ m: 0.5 }} fontSize="small" />
            {empl}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
