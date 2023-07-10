export const parseType = (type: string, value: any) => {
  switch (type) {
    case 'int':
      return parseInt(value);

    case 'string':
      return String(value);

    case 'float':
      return parseFloat(value);

    case 'boolean':
      return value === 'false' ? false : true;

    case 'date':
      return new Date(value);

    default:
      return value;
  }
};
