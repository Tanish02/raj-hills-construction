export type Project = {
  id: number;
  title: string;
  location: string;
  image: string;
};
export const projects: Project[] = [
  // top 3 from delhi
  {
    id: 1,
    title: "Raj Hills Residence",
    location: "Delhi, India",
    image: "/projects/delhi1.jpg",
  },
  {
    id: 2,
    title: "Raj Hills Villas",
    location: "Delhi, India",
    image: "/projects/delhi2.jpg",
  },
  {
    id: 3,
    title: "Raj Hills Commercial",
    location: "Delhi, India",
    image: "/projects/delhi3.jpg",
  },

  //Bottom 3 from rajisthan
  {
    id: 4,
    title: "Raj Hills Homes",
    location: "Rajasthan, India",
    image: "/images/rajasthan.jpg",
  },
  {
    id: 5,
    title: "Raj Hills Residency",
    location: "Rajasthan, India",
    image: "/images/rajasthan1.jpg",
  },
  {
    id: 6,
    title: "Raj Hills Modern Build",
    location: "Rajasthan, India",
    image: "/images/rajasthan2.jpg",
  },
];

// end code
// it shows our projects section with dynamic data.
