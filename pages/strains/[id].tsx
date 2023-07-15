// pages/strains/[id].tsx
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Strain } from "../../interfaces/strains.interfaces";
import { strainData } from "../../data/strainData";

interface StrainPageProps {
  strain: Strain;
}

const StrainPage: React.FC<StrainPageProps> = ({ strain }) => {
  return (
    <div>
      <h1>{strain.name}</h1>
      {/* Add more information and styling for the strain page */}
    </div>
  );
};

export default StrainPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = strainData.map((strain) => ({
    params: { id: strain.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<StrainPageProps> = async ({ params }) => {
  const id = params?.id;
  const strain = strainData.find((strain) => strain.id.toString() === id);

  if (!strain) {
    return { notFound: true };
  }

  return { props: { strain } };
};
