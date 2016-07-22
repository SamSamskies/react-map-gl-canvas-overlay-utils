export default class {

  constructor({ coordinates = [], styles }) {
    const defaultStyles = {
      color: 'black',
      lineWidth: 2
    };
    const options = {
      coordinates,
      styles: {...defaultStyles, ...styles}
    };

    Object.assign(this, options);
  }
};
