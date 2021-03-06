/**
 * A simple field.
 *
 * @param {array} validators Validation rules (bindable functions) to satisfy
 * @param {Function|null} condition Condition to meet before validators are run
 * @return {object} Validation object suitable for processing
 */
module.exports = (validators = [], condition) => {
  validators.forEach((v) => {
    if (typeof v !== 'function') {
      throw new TypeError(`Validators must be a function, got ${typeof v}`);
    }
  });

  if (typeof condition !== 'undefined' && typeof condition !== 'function') {
    throw new TypeError(`Conditional must be a function, got ${typeof condition}`);
  }

  return Object.create(Object.prototype, {
    type: {
      writable: false,
      confirgurable: false,
      value: 'simple',
    },
    condition: {
      writable: false,
      configurable: false,
      value: condition || (() => true),
    },
    validators: {
      value: validators,
      writable: false,
      configurable: false,
    },
  });
};
