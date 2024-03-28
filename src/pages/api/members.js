// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {"Computer" | "Electrical"} cohort
 * @property {number} year
 * @property {string} siteURL
 */

/**
 * @type {Person}
 */
export const members = [
  {
    name: 'Yash Karthik',
    cohort: 'Computer Engineering',
    year: 2028,
    siteURL: 'https://www.yashkarthik.xyz',
  },
  {
    name: 'Roozbeh Ali',
    cohort: 'Computer Engineering',
    year: 2028,
    siteURL: 'https://www.roozbehali.com',
  },
  {
    name: 'Sunnie Kapar',
    cohort: 'Computer Engineering',
    year: 2028,
    siteURL: 'https://www.sunniekapar.com',
  },
  {
    name: 'Mark Aagaard',
    cohort: 'Engineering',
    year: null,
    siteURL: 'https://ece.uwaterloo.ca/~maagaard/',
    legacy: 'true',
    status: 'Professor',
  },
  {
    name: 'Douglas Wilhelm Harder',
    cohort: 'Math',
    year: null,
    siteURL: 'https://ece.uwaterloo.ca/~dwharder/',
    legacy: 'true',
    status: 'Professor',
  },
  {
    name: 'Hiren Patel',
    cohort: 'ECE',
    year: null,
    siteURL: 'https://caesr.uwaterloo.ca/',
    legacy: 'true',
    status: 'Professor',
  },
];
