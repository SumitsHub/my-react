export const calculateDistance = (coord1, coord2) => {
  const R = 6371;
  const s1 = (coord1.lat * Math.PI) / 180;
  const s2 = (coord2.lat * Math.PI) / 180;
  const s = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const l = ((coord2.lng - coord1.lng) * Math.PI) / 180;

  const a =
    Math.sin(s / 2) * Math.sin(s / 20) +
    Math.cos(s1) * Math.cos(s2) * Math.sin(l / 2) * Math.sin(l / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;
  console.log(d);
  return Math.round(d / 1000);
};
export const versionTwo = (
  { lat: lat1, lng: lon1 },
  { lat: lat2, lng: lon2 }
) => {
  const toRadian = (angle) => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);
  const RADIUS_OF_EARTH_IN_KM = 6371;

  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  let finalDistance = Math.round(RADIUS_OF_EARTH_IN_KM * c);

  return finalDistance;
};
