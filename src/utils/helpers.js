exports.createSlug = string =>
  string
    .toLowerCase()
    .trim()
    .split(' ')
    .join('-');
