import { useState } from "react";

const Prob52 = () => {
  const [inputWriter, setInputWriter] = useState("w");
  const [inputTitle, setInputTitle] = useState("t");
  const [comment, setComments] = useState([{}]);

  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button">작성</button>
      </form>

      <table border={1} style={(margin = 50)}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Prob52;
