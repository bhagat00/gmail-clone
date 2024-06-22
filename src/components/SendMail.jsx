import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const [op, setOp] = useState(true);
  var open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();
  const chageHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });
    dispatch(setOpen(false));
    setFormData({
      to: "",
      subject: "",
      message: "",
    });
  };
  useEffect(() => {
    console.log("hahahahhahahah");
    setOp(open);
  }, [open]);
  // const composeMail = () => {
  //   const op = useSelector((store) => store.appSlice.open);

  //   setOpen(op);
  // };
  return (
    <div
      className={`${
        op ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => {
            dispatch(setOpen(false));
          }}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={"10px"} />
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-col p-3 gap-2"
      >
        <input
          onChange={chageHandler}
          value={formData.to}
          name="to"
          type="text"
          placeholder="Recipients"
          className="outline-none py-1"
        />
        <input
          onChange={chageHandler}
          type="text"
          value={formData.subject}
          name="subject"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          onChange={chageHandler}
          value={formData.message}
          name="message"
          id=""
          cols="30"
          rows="10"
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
