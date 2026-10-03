// import { useState } from "react";

// function ReplyForm() {

//     const [message, setMessage] = useState("");

//     function handleChange(event) {
//         setMessage(event.target.value);
//     }

//     function handleClear() {
//         setMessage("");
//     }

//     return(
//         <section>
//             <h1>Ваш ответ</h1>
//             <textarea value={message} onChange={handleChange}></textarea>
//             <button disabled={message.trim() === ""}>Отправить</button>
//             <button onClick={handleClear} disabled={message === ""}>Очистить</button>
//             <p>
//                 {message.trim() ? "Отправить ответ" : "Напишите ответ"}
//             </p>
//         </section>
//     )
// }

// export default ReplyForm;

// import { useState } from "react";

// function ReplyForm() {

//     const [message, setMessage] = useState("");
//     const [replies, setReplies] = useState([]);

//     function handleChange(myEvent) {
//         setMessage(myEvent.target.value);
//     }

//     function handleClear() {
//         setMessage("");
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         setReplies(currentReplies => [...currentReplies, message.trim()]);
//         setMessage("");      
//     };

//     return(
//         <form onSubmit={handleSubmit}>
//             <h1>Ваш ответ</h1>
//             <textarea value={message} onChange={handleChange}></textarea>
//             <button type="submit" disabled={message.trim() === ""}>Отправить</button>
//             <button type="button" onClick={handleClear} disabled={message === ""}>Очистить</button>
//             <p>{message.trim() ? "Отправить ответ" : "Напишите ответ"}</p>
//             {replies.map((reply, index) => <p key={index}>{reply}</p>)}
//         </form>
//     )
// }

// export default ReplyForm;