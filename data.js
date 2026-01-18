const issues = [
  { number: 1, theme: "FOUNDATIONS & REVOLUTION" },
  { number: 2, theme: "INDUSTRY & EMPIRE" }
];

let staff = [
  { name: "Editor-in-Chief", role: "Editorial Lead" },
  { name: "Jane Historian", role: "Senior Writer" }
];

let articles = [
  {
    id: 1,
    issue: 1,
    title: "THE FOUNDING DECADE",
    author: "Jane Historian",
    date: "March 1790",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    synopsis: "How the early republic took shape after independence.",
    content: `
      <p>The first decade of the republic was fragile and uncertain.</p>
      <p>Institutions were young, and unity was far from guaranteed.</p>
    `
  },
  {
    id: 2,
    issue: 1,
    title: "PRINT AND POWER",
    author: "Samuel Press",
    date: "April 1790",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
    synopsis: "Pamphlets, newspapers, and the rise of public opinion.",
    content: `
      <p>The printing press shaped the political imagination.</p>
      <p>Ideas traveled faster than armies.</p>
    `
  }
];
