maptilersdk.config.apiKey = mapApiKey;

const map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates,
  zoom: 9,
});

const marker = new maptilersdk.Marker({
  color: "red",
  element: createCustomIcon(),
})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);

function createCustomIcon() {
  const el = document.createElement("img");
  el.src = "/images/home.png";
  el.style.width = "40px";
  el.style.height = "40px";
  return el;
}
