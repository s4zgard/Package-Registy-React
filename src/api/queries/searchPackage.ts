import type { PackageSummary } from "./../types/packageSummary";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      version: string;
      description: string;
      keywords: string[];
    };
  }[];
}

const searchPackages = async (term: string): Promise<PackageSummary[]> => {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );
  const data: SearchResponse = await res.json();
  const packages: PackageSummary[] = data.objects.map(
    ({ package: { name, description, version, keywords } }) => {
      return {
        name,
        description,
        version,
        keywords,
      };
    }
  );
  return packages;
};
export default searchPackages;
