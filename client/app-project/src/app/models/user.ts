export interface User {
  user: string,
    password :string,
    name: String,
    email : String,
    birthdate : Date,
    address: String,
    phone_number : String,
    mobile: String,
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
}
