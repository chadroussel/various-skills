const fetchUsers = fetch("data/users.json");
const fetchColors = fetch("data/colors.json");

Promise.all([fetchUsers, fetchColors])
  .then((values) => {
    return Promise.all(values.map((r) => r.json()));
  })
  .then(([Users, Colors]) => {
    console.log(Users);
    console.log(Colors);
  });
