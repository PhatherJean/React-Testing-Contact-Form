import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("Contact form renders with out any errors", () => {
  render(<ContactForm />);
});

test("text input can be inputed and rendered", () => {
  const { debug } = render(<ContactForm />);
  //debug();

  // Grab all the inputs and buttons avail in the component

  const firstName = screen.getByLabelText(/first name*/i);
  const lastName = screen.getByLabelText(/last name*/i);
  const email = screen.getByLabelText(/email*/i);
  const message = screen.getByLabelText(/message/i);
  const button = screen.getByRole("button", { name: /submit/i });
  // input the test text to the fields

  userEvent.type(firstName, "Patrice");
  userEvent.type(lastName, "Jean");
  userEvent.type(email, "random@mail.com");
  userEvent.type(
    message,
    "Can you SSSSMMMMEEEELLLLLLLLL WHAT THE ROCK IS COOOOOOOOKING !!!!!!!!!!!!!!!!!!!!!!!!!!"
  );

  expect(firstName).toHaveValue("Patrice");
  expect(lastName).toHaveValue("Jean");
  expect(email).toHaveValue("random@mail.com");
  userEvent.click(button);
});
