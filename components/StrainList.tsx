import React from "react";
import { strainData } from "../data/strainData";
import StrainCard from "./StrainCard";
import { Strain } from "../interfaces/strains.interfaces";
import styles from "components/StrainList.module.css"; // Import the styles

const StrainList: React.FC = () => {
  return (
    <div className={styles["strain-list-container"]}>
      {strainData.map((strain: Strain) => (
        <StrainCard key={strain.id} strain={strain} />
      ))}
    </div>
  );
};

export default StrainList;
