export async function sendScore(userName: string, score: number) {
  try {
    const response = await fetch("http://localhost:4000/api/users/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score, name: userName }),
    });

    if (!response.ok) {
      console.error("Error sending score:", response.status);
    }
  } catch (error) {
    console.error("Error sending score:", error);
  }
}
