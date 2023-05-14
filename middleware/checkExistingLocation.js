export default async function ({ store, redirect, route }) {
  try {
    if (route.params.id) {
      const location = await store.dispatch("fetchLocation", route.params.id);

      if (!location) {
        return redirect(`/404`);
      }

      const locationName = location.name
        .replace("<sup>", "")
        .replace("</sup>", "")
        .replace(/ /g, "")
        .replace(/-/g, "")
        .replace(/—/g, "")
        .toLowerCase();

      const paramName = route.params.slug.replace(/-/g, "");

      const locationWithRouterName = locationName === paramName;

      if (!locationWithRouterName) {
        return redirect(`/404`);
      }

      store.commit("setCurrentLocation", location);
    } else {
      return redirect(`/404`);
    }
  } catch (error) {
    return redirect(`/404`);
  }
}
