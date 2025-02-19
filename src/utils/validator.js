export const emailValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Email is invalid";
      }
    }
  },
};

export const passwordValidator = {
  onBlur: ({ value }) => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(value)) {
      return "Password must contain at least 6 characters, including UPPER/lowercase";
    }
  },
};

export const displayNameValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Full Name is required";
    }
  },
};

export const companyNameValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Company Name is required";
    }
  },
};

export const companyLogoValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Company Logo is required";
    }
  },
};

// birthdate at least 18 years old
export const birthdateValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Birthdate is required";
    } else {
      const birthdate = new Date(value);
      const age = new Date().getFullYear() - birthdate.getFullYear();
      if (age < 18) {
        return "You must be at least 18 years old";
      }
    }
  },
};

export const cardNumberValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Card Number is required";
    } else {
      const formattedValue = value.replace(/\D/g, "");
      const cardNumberRegex = /^[0-9]{16}$/;
      if (!cardNumberRegex.test(formattedValue)) {
        return "Card Number is invalid";
      }
    }
  },
};

export const cvvValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "CVV is required";
    } else {
      const formattedValue = value.replace(/\D/g, "");
      const cvvRegex = /^[0-9]{3}$/;
      if (!cvvRegex.test(formattedValue)) {
        return "CVV is invalid";
      }
    }
  },
};

export const cardHolder = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Card Holder is required";
    }
  },
};

export const expirationDateValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Expiration Date is required";
    }
  },
};

export const assetNameValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Asset Name is required";
    }
  },
};

export const assetTypeValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Asset Type is required";
    }
  },
};

export const assetQuantityValidator = {
  onBlur: ({ value }) => {
    if (!value) {
      return "Asset Quantity is required";
    }
  },
};
