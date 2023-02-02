export default {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "underline", "italic"],
      [
        {
          color: [
            "#eee",
            "#333",
            "#A998A0",
            "#FCA08B",
            "#FCBEAC",
            "#A09A6F",
            "#B8C7D4",
          ],
        },
        { background: [] },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  },
  formats: [
    "size",
    "font",
    "align",
    "bold",
    "underline",
    "italic",
    "color",
    "background",
    "list",
    "link",
    "image",
  ],
};
