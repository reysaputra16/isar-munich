"use client";
import Link from "next/link";
import { useState } from "react";
import { countries, getEmojiFlag } from "countries-list";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [birthDateError, setBirthDateError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Regex for date format
  const dateRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  const streetRegex =
    /^([A-Za-zäöüßÄÖÜ-]+(?:[-\s][A-Za-zäöüßÄÖÜ]+)*(?:[sS]traße|[sS]tr\.|[aA]llee|[wW]eg|[pP]latz|[gG]asse)?)\s+(\d{1,4}[a-zA-Z]?)$/;
  const postCodeRegex = /^\d{5}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="lime_gradient">Register Here!</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col gap-7"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            First Name
          </span>
          <input
            value={post.firstName}
            onChange={(e) => setPost({ ...post, firstName: e.target.value })}
            placeholder="First Name"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Last Name
          </span>
          <input
            value={post.lastName}
            onChange={(e) => setPost({ ...post, lastName: e.target.value })}
            placeholder="Last Name"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Address and House Number
          </span>
          <input
            value={post.address}
            onChange={(e) => {
              setPost({ ...post, address: e.target.value });
              if (!streetRegex.test(e.target.value)) {
                setStreetError("Street is not correctly written");
              } else {
                setStreetError("");
              }
            }}
            placeholder="Address"
            required
            className="form_input"
            pattern="^([A-Za-zäöüßÄÖÜ-]+(?:[-\s][A-Za-zäöüßÄÖÜ]+)*(?:[sS]traße|[sS]tr\.|[aA]llee|[wW]eg|[pP]latz|[gG]asse)?)\s+(\d{1,4}[a-zA-Z]?)$"
          />
          {streetError && <p className="text-red-500">{streetError}</p>}
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Postal Code
          </span>
          <input
            value={post.postCode}
            onChange={(e) => {
              setPost({ ...post, postCode: e.target.value });
              if (!postCodeRegex.test(e.target.value)) {
                setPostalCodeError("Format: XXXXX");
              } else {
                setPostalCodeError("");
              }
            }}
            placeholder="Postal Code"
            required
            pattern="^\d{5}$"
            className="form_input"
          />
          {postalCodeError && <p className="text-red-500">{postalCodeError}</p>}
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            City
          </span>
          <input
            value={post.city}
            onChange={(e) => setPost({ ...post, city: e.target.value })}
            placeholder="City"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Telephone
          </span>
          <input
            value={post.tel}
            onChange={(e) => setPost({ ...post, tel: e.target.value })}
            placeholder="Tel"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            E-Mail
          </span>
          <input
            value={post.email}
            onChange={(e) => {
              setPost({ ...post, email: e.target.value });
              if (!emailRegex.test(e.target.value)) {
                setEmailError("E-Mail does not have a valid format");
              } else {
                setEmailError("");
              }
            }}
            placeholder="E-Mail"
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            className="form_input"
            type="email"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Password
          </span>
          <input
            value={post.password}
            onChange={(e) => setPost({ ...post, password: e.target.value })}
            placeholder="*********************"
            required
            className="form_input"
            type="password"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Birth Date
          </span>
          {/*
          <input
            value={post.birthDate}
            onChange={(e) => {
              setPost({ ...post, birthDate: e.target.value });
              if (!dateRegex.test(e.target.value)) {
                setBirthDateError(
                  "Please enter a valid date in DD.MM.YYYY format."
                );
              } else {
                setBirthDateError("");
              }
            }}
            placeholder="Birth Date"
            required
            pattern="^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d\d$"
            className="form_input"
          />
          */}
          <input
            type="date"
            onChange={(e) => {
              setPost({ ...post, birthDate: e.target.value });
              if (!dateRegex.test(e.target.value)) {
                setBirthDateError("Please enter in your Birth Date");
              } else {
                setBirthDateError("");
              }
            }}
            required
            className="form_input"
          />
          {birthDateError && <p className="text-red-500">{birthDateError}</p>}
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Nationality
          </span>
          {/*
          <input
            value={post.nationality}
            onChange={(e) => setPost({ ...post, nationality: e.target.value })}
            placeholder="Nationality"
            required
            className="form_input"
          />
          */}
          <select
            className="form_input"
            defaultValue="choose"
            onChange={(e) => setPost({ ...post, nationality: e.target.value })}
          >
            <option key="choose" value="choose">
              Choose Nationality
            </option>
            {Object.entries(countries).map(([code, country]) => (
              <option key={code} value={code}>
                {getEmojiFlag(code)}&#160;
                {country.name}
              </option>
            ))}
          </select>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-white text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
