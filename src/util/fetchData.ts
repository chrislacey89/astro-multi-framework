export async function fetchData<
  TResult = "You must pass a type argument to fetchData"
>(url: string | undefined): Promise<TResult> {
  if (!url) {
    throw new Error("You must pass a URL to fetchData");
  }
  const response = await fetch(url);

  return response.json();
}
