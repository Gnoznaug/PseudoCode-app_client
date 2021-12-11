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
      .then((response) => response.json())
      .then((data) => {
        text = (data.text);
      });
    return text;
}

export const urlChecker = async link => {
    return (link.length < 31 || link.slice(0,30) !== "https://leetcode.com/problems/");
}