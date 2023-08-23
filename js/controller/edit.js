export function isiData(results) {
  const inputMapping = [
    { id: 'nama_kontak', path: 'nama_kontak' },
    { id: 'nomor_hp', path: 'nomor_hp' },
    { id: 'alamat', path: 'alamat' },
    { id: 'keterangan', path: 'keterangan' },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
}
