import { PackageDetails } from "./../../api/types/packageDetails";
import { getFeaturedPacakages } from "../../api/queries/getFeaturedPackages";

export interface HomeResults {
  featuredPackages: PackageDetails[];
}
export const homeLoader = async (): Promise<HomeResults> => {
  const featuredPackages = await getFeaturedPacakages();
  return { featuredPackages };
};
