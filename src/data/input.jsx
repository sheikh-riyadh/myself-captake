export const inputData = {
  personalData: [
    {
      label: "First Name",
      placeholder: "First name",
      registerName: "fName",
      isRequired: true,
      type: "test",
    },
    {
      label: "Last Name",
      placeholder: "Last name",
      registerName: "lName",
      isRequired: true,
      type: "test",
    },
    {
      label: "Email",
      placeholder: "Email",
      registerName: "email",
      isRequired: true,
      type: "email",
    },
    {
      label: "Phone number",
      placeholder: "Phone number",
      registerName: "phone",
      isRequired: true,
      type: "number",
    },
    {
      label: "Gender",
      placeholder: "Gender",
      registerName: "gender",
      isRequired: true,
      data: ["male", "female", "other"],
    },
    {
      label: "Date of birth",
      placeholder: "Date of birth",
      registerName: "dob",
      isRequired: true,
      type: "date",
    },
  ],
  changePassowrdData: [
    {
      label: "Old Password",
      placeholder: "Enter old password",
      registerName: "oldPassword",
      isRequired: true,
      type: "password",
    },
    {
      label: "New Password",
      placeholder: "Enter new password",
      registerName: "newPassword",
      isRequired: true,
      type: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "Enter confirm password",
      registerName: "confirmPassword",
      isRequired: true,
      type: "password",
    },
  ],
};
