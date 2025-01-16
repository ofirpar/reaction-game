export interface Feedback {
  type: "success" | "error";
  msg: "Success" | "Too Soon" | "Wrong Key" | "Too Late";
}
