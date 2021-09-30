import { toast } from "react-toastify";

export function popUp(text: string, status = "success") {
  return toast(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div>
        <p
          style={{
            fontSize: 18,
            marginBottom: 0,
            fontWeight: "bold",
            color: status === "error" ? "rgb(243, 146, 0)" : "#960b03",
          }}
        >
          {status === "error"
            ? "Oops"
            : status === "thankyou"
            ? "Thank you"
            : "Success"}
        </p>
        <p style={{ marginBottom: 0, lineHeight: 1.4 }}>{text}</p>
      </div>
    </div>
  );
}
