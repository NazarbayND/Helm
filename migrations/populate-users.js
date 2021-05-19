module.exports = {
  async up(db, client) {
    await db
      .collection("users")
      .insertMany([
        { name: "John Smith" },
        { name: "Nazarbay Nursultan" },
        { name: "Admin" },
      ]);
  },

  async down(db, client) {
    await db.collection("movies").deleteMany({
      name: {
        $in: ["John Smith", "Nazarbay Nursultan", "Admin"],
      },
    });
  },
};
