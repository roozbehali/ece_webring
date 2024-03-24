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
    cohort: 'Computer',
    year: 2028,
    siteURL: 'https://www.yashkarthik.xyz',
  },
  {
    name: 'Roozbeh Ali',
    cohort: 'Computer',
    year: 2028,
    siteURL: 'https://www.roozbehali.com',
  },
  {
    name: 'Sunnie Kapar',
    cohort: 'Computer',
    year: 2028,
    siteURL: 'https://www.sunniekapar.com',
  },
  {
    name: 'Bereket Semagn',
    cohort: 'Tunnel',
    year: 2032,
    siteURL: 'https://www.bereket.wtf',
  },
  {
    name: 'Ankur Boyed',
    cohort: 'Software',
    year: 2029,
    siteURL: 'https://www.ankurboyed.com',
  },
  {
    name: 'Steven Gong',
    cohort: 'Software',
    year: 2026,
    siteURL: 'https://stevengong.co',
  },
  {
    name: 'Akshay Satish',
    cohort: 'Computer',
    year: 2028,
    siteURL: 'https://akshaysatish.com',
  },
  {
    name: 'Moglai Bingleson',
    cohort: 'Computer',
    year: 2028,
    siteURL: 'https://awwwards.com',
  },
  {
    name: 'Hywaygo Johnson the IV',
    cohort: 'Computer',
    year: 2028,
    siteURL: 'https://google.com',
  },
];
