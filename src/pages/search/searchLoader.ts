import searchPackages from "../../api/queries/searchPackage";
import { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderResult {
  packages: PackageSummary[];
}

export const searchLoader = async ({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) throw new Error("Search cannot be null");
  const results = await searchPackages(term);

  return { packages: results };
};
