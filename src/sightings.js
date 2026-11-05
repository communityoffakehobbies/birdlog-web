const API = "https://api.birdlog.example/v1";

export async function loadSightings(species) {
  const query = species ? `?species=${encodeURIComponent(species)}` : "";
  const response = await fetch(`${API}/sightings${query}`);
  return (await response.json()).map(toRow);
}

function toRow(sighting) {
  return {
    id: sighting.id,
    species: sighting.species,
    who: sighting.observer,
    // birdlog-api sends "YYYY-MM-DD HH:MM:SS" in the observer's local time.
    when: sighting.observed_at.replace(" ", " at "),
  };
}
