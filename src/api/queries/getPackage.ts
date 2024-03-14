import { PackageDetails } from "./../types/packageDetails";

export const getPackage = async (name: string) => {
  const res = await fetch(`https://registry.npmjs.org/${name}`);
  const data = await res.json();
  return data as PackageDetails;
};
