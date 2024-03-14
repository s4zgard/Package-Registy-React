import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "./../../api/types/packageDetails";

interface LoaderArgs {
  params: Params;
}

export interface LoaderDetails {
  details: PackageDetails;
}

export const detailsLoader = async ({
  params,
}: LoaderArgs): Promise<LoaderDetails> => {
  const { name } = params;
  if (!name) throw new Error("Name must be provided.");
  const details = await getPackage(name);
  return { details };
};
