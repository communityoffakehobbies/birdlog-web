export function placePins(map, sightings) {
  for (const sighting of sightings) {
    // Pins at the same spot draw their labels on top of each other.
    map.addPin(sighting.lat, sighting.lng, { label: sighting.species });
  }
}
