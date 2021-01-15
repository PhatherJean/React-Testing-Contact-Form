import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("render form with no errors", () => {
  render(<ContactForm />);
});

test("text input can be inserted", () => {
  render(<ContactForm />);
  //Retrieve data input on the form
  const fNameInput = screen.getByLabelText(/first Name/i);
  const lNameInput = screen.getByLabelText(/last Name/i);
  const yourEmail = screen.getByLabelText(/email/i);
  const yourMessage = screen.getByLabelText(/message/i);
  const button = screen.getByRole("button");
  //type values into input fields
  userEvent.type(fNameInput, "pf");
  userEvent.type(lNameInput, "jay");
  userEvent.type(yourEmail, "blah@dont.com");
  userEvent.type(yourMessage, "COOKIN");
  //check functionality of submit button
  userEvent.click(button);
});
