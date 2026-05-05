// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor
} from '../code-to-unit-test/unit-test-me.js';

// Phone number tests
test('phone number with parens and dash is valid', () => {
  expect(isPhoneNumber('(858) 534-2230')).toBe(true);
});
test('phone number with all dashes is valid', () => {
  expect(isPhoneNumber('619-555-0142')).toBe(true);
});
test('letters are not a valid phone number', () => {
  expect(isPhoneNumber('abcdefg')).toBe(false);
});
test('too few digits is not a valid phone number', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

// Email tests
test('school email with .edu is valid', () => {
  expect(isEmail('ava@ucsd.edu')).toBe(true);
});
test('basic gmail address is valid', () => {
  expect(isEmail('hello@gmail.com')).toBe(true);
});
test('no @ symbol means it is not an email', () => {
  expect(isEmail('no-at-symbol.com')).toBe(false);
});
test('missing the .com part means it is not an email', () => {
  expect(isEmail('missing@domain')).toBe(false);
});

// Password tests
test('letters and numbers, 8 chars long is a strong password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('exactly 4 letters is a strong password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});
test('starting with a number is not a strong password', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});
test('only 2 chars is too short for a strong password', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// Date tests
test('standard MM/DD/YYYY date is valid', () => {
  expect(isDate('12/25/2025')).toBe(true);
});
test('single digit month and day is still a valid date', () => {
  expect(isDate('1/1/2000')).toBe(true);
});
test('dashes instead of slashes is not a valid date', () => {
  expect(isDate('12-25-2025')).toBe(false);
});
test('two-digit year is not a valid date', () => {
  expect(isDate('12/25/25')).toBe(false);
});

// Hex color tests
test('3-character hex code is a valid color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('6-character lowercase hex code is a valid color', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});
test('non-hex letters are not a valid color', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});
test('5 characters is the wrong length for a hex color', () => {
  expect(isHexColor('#12345')).toBe(false);
});