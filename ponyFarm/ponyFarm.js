function getPonyAllergies (ponies, ownerEmail) {
  return ponies.filter((obj) => {
    return obj.email === ownerEmail
  }).map((pony) => {
    return pony.allergies
  }).concatAll().sort().filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  })
}
