function fillDbPersonsData() {
  return [
    {
      name: "Mel Gibson",
      birthDate: new Date("1956-01-03"),
      birthPlace: "New York",
    },
    {
      name: "Sophie Marceau",
      birthDate: new Date("1966.11.17"),
      birthPlace: "Paris",
    },
  ];
}
function fillDbMoviesData() {
  return [
    {
      title: "Braveheart",
      releaseYear: 1995,
      genres: ["Drama", "Historic"],
      duration: 177,
      cast: ["Mel Gibson", "Sophie Marceau"],
      crew: [
        { personName: "Mel Gibson", role: "Director" },
        { personName: "Sophie Marceau", role: "Actress" },
      ],
    },
  ];
}

function fillDbUsersData() {
  return [
    {
      nickName: "user1",
      firstName: "user",
      lastName: "1",
      email: "user1@users.com",
      password: "123456",
      active: "true",
    },
    {
      nickName: "user2",
      firstName: "user",
      lastName: "2",
      email: "user2@users.com",
      password: "78910",
      active: "true",
    },
  ];
}

module.exports = {
  fillDbPersonsData: fillDbPersonsData,
  fillDbMoviesData: fillDbMoviesData,
  fillDbUsersData: fillDbUsersData,
};
