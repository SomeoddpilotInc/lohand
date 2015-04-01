module.exports = function urlify(string) {
    if (!string) {
      return '';
    }
    return string
      .toLowerCase()
      // replace multiple spaces with a single hyphen
      .replace(/\s+/g, '-')
      // remove non-alphanumeric or non-hyphen characters
      .replace(/[^a-z0-9\-]/g, '');
};
