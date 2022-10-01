import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray400: "border border-gray_400 border-solid",
  FillBlue800: "bg-blue_800",
  srcOutlineGray203: "bg-white_A700 shadow-bs1",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  RoundedBorder8: "rounded-radius8",
  srcRoundedBorder8: "rounded-radius8",
};
const sizes = {
  sm: "lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  md: "lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[16px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
  lg: "lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px]",
  smSrc: "lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "RoundedBorder8",
    "srcRoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray400",
    "FillBlue800",
    "srcOutlineGray203",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineGray400",
  size: "sm",
};

export default Input;
