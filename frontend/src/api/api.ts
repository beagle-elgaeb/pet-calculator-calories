const BaseUrl = "http://localhost:3000";

const jsonHeaders = {
  "Content-Type": "application/json",
};

export async function registration({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const data = await fetch(`${BaseUrl}/signup`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  });

  return handleResult(data);
}

export async function authorization({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const data = await fetch(`${BaseUrl}/signin`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  return handleResult(data);
}

export async function logout() {
  const data = await fetch(`${BaseUrl}/signout`, {
    method: "POST",
    headers: jsonHeaders,
    credentials: "include",
  });

  return handleResult(data);
}

export async function getProfileData() {
  const data = await fetch(`${BaseUrl}/users/me`, {
    credentials: "include",
  });

  return handleResult(data);
}

export async function editCalcProfileData({
  name,
  email,
  age,
  stature,
  weight,
  sex,
  activityLevel,
  target,
}: {
  name: string;
  email: string;
  age: number;
  stature: number;
  weight: number;
  sex: number;
  activityLevel: number;
  target: number;
}) {
  const data = await fetch(`${BaseUrl}/users/me`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify({
      name,
      email,
      age,
      stature,
      weight,
      sex,
      activityLevel,
      target,
    }),
    credentials: "include",
  });

  return handleResult(data);
}

// export async function editProfileData({
//   name,
//   email,
// }: {
//   name: string;
//   email: string;
// }) {
//   const data = await fetch(`${BaseUrl}/users/me`, {
//     method: "PATCH",
//     headers: jsonHeaders,
//     body: JSON.stringify({ name, email }),
//     credentials: "include",
//   });

//   return handleResult(data);
// }

// export async function removeFavoredCards(id: number) {
//   const data = await fetch(`${BaseUrl}/movies/${id}`, {
//     method: "DELETE",
//     credentials: "include",
//   });

//   handleResult(data);
// }

async function handleResult(data: Response) {
  if (!data.ok) {
    throw new Error(`Статуc ошибки: ${data.status}`);
  }

  const result = await data.json();

  return result;
}
