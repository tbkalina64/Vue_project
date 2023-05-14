/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */

import { extend, configure } from "vee-validate";
import {
  required,
  min,
  confirmed,
  alpha,
  max,
  numeric,
  length,
  required_if,
  alpha_spaces,
  double,
  integer,
  min_value,
  max_value,
} from "vee-validate/dist/rules";

configure({
  classes: {
    valid: "has-success has-feedback",
    invalid: "has-error has-feedback",
  },
});

extend("required_if", {
  ...required_if,
  message: "This field is required",
});

extend("required", {
  ...required,
  message: "This field is required",
});

extend("requiredAgree", {
  ...required,
  message: "You must agree to the terms of services and privacy policy",
});

extend("requiredLiability", {
  ...required,
  message: "You must agree to the Waiver And Release Of Liability",
});

extend("email", {
  validate(value) {
    if (value.length < 6 || value.length > 64) {
      return false;
    }
    if (value) {
      return /^(([^<>()[\]\\.,#%^&`?\/()~<>={}|*$!;:\s@\"]+(\.[^<> ()[\]\\.,#%^&`?\/()~<>={}|*$!;:\s@\"]+)*)|(\".+\"))@((\[[0-9 ]{1,3}\.[0-9 ]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    }
    return false;
  },
  message: "This email is not valid",
});

extend("confirmed", {
  ...confirmed,
  message: "Passwords don't match",
});
extend("alpha_num", {
  validate(value) {
    if (value) {
      return /^[a-zA-Z0-9_\-]+$/.test(value);
    }
    return false;
  },
  message: "Should contains only english letters, number and underscore",
});
extend("alpha_num-short", {
  validate(value) {
    if (value) {
      return /^[a-zA-Z0-9_\- ]+$/.test(value);
    }
    return false;
  },
  message: "Only english letters and number",
});

extend("phone", {
  validate(value) {
    if (value) {
      return /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/im.test(value);
    }
    return false;
  },
  message: "The field must be a valid phone number",
});

extend("name", {
  validate(value) {
    if (value) {
      return /^[a-zA-Z]+((['. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
    }
    return false;
  },
  message: "The field must be a valid Name",
});

extend("price", {
  validate(value) {
    if (value) {
      return value % 1000 === 0;
    }
    return false;
  },
  message: "Must be multiplied by 1000",
});

extend("min", {
  ...min,
  params: ["length"],
  message: "Min length is {length} chars",
});

extend("max", {
  ...max,
  params: ["length"],
  message: "Max length is {length} chars",
});
extend("max_value", {
  ...max_value,
  params: ["max"],
  message: "Max value is {max}",
});
extend("value_is_int", {
  validate(value) {
    if (value) {
      return !value.startsWith("0");
    }
    return false;
  },
  message: "Value is invalid",
});
extend("min_value", {
  ...min_value,
  params: ["min"],
  message: "Min value is {min}",
});
extend("alpha", {
  ...alpha,
  message: "Only alphabetic characters",
});

extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Only alphabetic characters and spaces",
});

extend("numeric", {
  ...numeric,
  message: "Only digits are allowed",
});

extend("length", {
  ...length,
  params: ["length"],
  message: "Length must be {length} chars",
});

extend("credit_card", {
  validate: (value) => {
    const newValue = value.split(" ").join("");
    const RegexpStrMastercard =
      "^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$";
    const RegexpStrVisa = "^4[0-9]{12}(?:[0-9]{3})?$";
    const RegexpStrAmex = "^3[47][0-9]{13}$";
    const RegexpStrMaestro =
      "^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$";

    const cardRegexp = new RegExp(
      `${RegexpStrMastercard}|${RegexpStrVisa}|${RegexpStrAmex}|${RegexpStrMaestro}`,
      "i"
    );

    return cardRegexp.test(newValue);
  },
  params: ["value"],
  message: "Card number is invalid",
});

extend("max_name", {
  ...max,
  message: "Max length is 50 chars",
});

extend("between", {
  validate(value, { min, max }) {
    return +value <= +max && +value >= +min;
  },
  params: ["min", "max"],
  message: "Enter value from {min} to {max}",
});

extend("length", {
  validate(value, { chars }) {
    return value.length === +chars;
  },
  params: ["chars"],
  message: "The field must be {chars} long",
});

extend("cvv", {
  validate(value) {
    if (value) {
      return /^[0-9]{3,4}$/.test(value);
    }
    return false;
  },
  message: "CVV is invalid",
});

extend("between--short", {
  validate(value, { min, max }) {
    return +value <= +max && +value >= +min;
  },
  params: ["min", "max"],
  message: "From {min} to {max}",
});

extend("size-max", {
  ...max,
  message: "Max length is 15 chars",
});

extend("integer", {
  ...integer,
  message: "Must be integer",
});

extend("double", {
  ...double,
  message: "Must be double",
});

extend("url", {
  validate(value) {
    if (value) {
      return /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,8}(:[0-9]{1,5})?(\/.*)?$/.test(
        value
      );
    }
    return false;
  },
  message: "The field must be a valid URL",
});

extend("latin", {
  validate(value) {
    if (value) {
      return /^([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0026\s]*)$/.test(
        value
      );
    }
    return false;
  },
  message: "Only latin letters are allowed",
});

extend("latin-short", {
  validate(value) {
    if (value) {
      return /^([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\s]*)$/.test(
        value
      );
    }
    return false;
  },
  message: "Only latin letters",
});

extend("latin-ampersand", {
  validate(value) {
    if (value) {
      return /^[a-zA-Z&“ ”]+$/.test(value);
    }
    return false;
  },
  message: "Only latin letters and ampersand are allowed",
});

extend("latin-space", {
  validate(value) {
    if (value) {
      return /^[a-zA-Z“ ”]+$/.test(value);
    }
    return false;
  },
  message: "Only latin letters are allowed",
});

extend("latin-numeric-address", {
  validate(value) {
    if (value) {
      return /^[a-zA-Z0-9_"\'\/(),.’“ ”(\r\n)\-]+$/.test(value);
    }
    return false;
  },
  message: "Only latin letters and numbers are allowed",
});

extend("latin-numeric", {
  validate(value) {
    if (value) {
      return /^[a-zA-Z0-9_"\'\/$!?&():;,.’“ ”(\r\n)*.*(\r\n)\-\%]+$/.test(
        value
      );
    }
    return false;
  },
  message: "Only latin letters and numbers are allowed",
});

extend("1-digit-at-least", {
  validate(value) {
    if (value) {
      return /^(?=.*?[0-9])/.test(value);
    }
    return false;
  },
  message: "Must contain 1 digit at least",
});

extend("1-letter-at-least", {
  validate(value) {
    if (value) {
      return /^(?=.*?[A-z])/.test(value);
    }
    return false;
  },
  message: "Must contain 1 letter at least",
});

extend("latin-spaces", {
  validate(value) {
    if (value) {
      return /^([A-Za-z\0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]*)$/.test(
        value
      );
    }
    return false;
  },
  message: "Only latin letters and numbers are allowed",
});

extend("expiration_date", {
  validate(value) {
    if (value) {
      return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value);
    }
    return false;
  },
  message: "Date is invalid",
});
