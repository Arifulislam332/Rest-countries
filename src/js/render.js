const main = document.querySelector(".main");

export function renderData(countries) {
  countries.forEach((country) => {
    const template = `
      <div class ="border-2 p-5 rounded-md m-5 bg-red-200 border-rose-600">
        <h1 class ="text-3xl text-rose-400">Country Name: ${
          country?.name?.common
        }</h1>
        <p>Capital: ${country?.capital?.at(0)}</p>
      </div>
    `;
    main.insertAdjacentHTML("beforeend", template);
  });
}
export function renderError(message) {
  const template = `<p class ="text-3xl font-medium text-center">${message}</p>`;
  main.insertAdjacentHTML("beforeend", template);
}
export function renderLoading(loadingState) {
  const template = `<p class=" loading text-3xl text-center font-medium">Loading...🏃‍♀️</p>`;
  if (!loadingState) {
    document.querySelector(".loading").style.display = "none";
  }
  main.insertAdjacentHTML("beforeend", template);
}
