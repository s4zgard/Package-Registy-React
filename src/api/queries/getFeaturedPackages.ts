import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACAKAGES = ["react", "typescript", "esbuild", "vite"];

export const getFeaturedPacakages = async () => {
  const promises = FEATURED_PACAKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  const data = await Promise.all(promises);
  return data as PackageDetails[];
};
