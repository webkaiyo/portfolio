function getAge(date) {
  const today = new Date()
  var age = today.getUTCFullYear() - date.getUTCFullYear()
  var months = today.getUTCMonth() - date.getUTCMonth()

  if (months < 0 || (months === 0 && today.getUTCDate() < date.getUTCDate())) {
    age--
  }

  return age;
}

export { getAge }