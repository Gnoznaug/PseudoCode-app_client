export const submitLeetcodeLink = async link => {
    const data = { url: link };
    var text;
    await fetch("http://localhost:5000/ans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
          throw Error(response.status);
      }
    })
    .then((data) => {
        text = (data.text);
    })
    .catch((error) => {
        console.log(error.message);
        if (error.message === "429") {
            text = "Too many requests, please slow down!";
        } else {
            text = "Error";
        }
    })
    return text;
}

export const urlChecker = async link => {
    return (link.length < 31 || link.slice(0,30) !== "https://leetcode.com/problems/");
}