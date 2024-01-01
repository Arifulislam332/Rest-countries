import { renderData, renderError, renderLoading } from "./render";

export default async function fetchCountries() {
  try {
    renderLoading(true);
    const res = await fetch("https://restcountries.com/v3.1/all");

    if (!res.ok) throw new Error("Invalid Fetch⚠️");

    const data = await res.json();

    renderData(data);
  } catch (err) {
    renderError(err.message);
  } finally {
    renderLoading(false);
  }
}
