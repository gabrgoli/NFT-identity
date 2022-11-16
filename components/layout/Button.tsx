import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const StyledButton = styled.button`
  border: none;
  border-radius: 112px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 32px;
  width: 100%;
  margin-top: 5px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  font-family: Space Grotesk, sans-serif;

  position: relative;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
  }

  .icon {
    position: absolute;
    left: 24px;
  }

  &.square {
    border-radius: 0px;
    position: absolute;
    left: 24px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.small {
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    padding: 8px;
  }

  &.primary {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;

    &.outline {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.secondary {
    background: #000000;
    color: #fff;

    &.outline {
      border: 2px solid #000000;
      background-color: transparent;
      color: #000;
    }
  }

  &.icon {
    background: #f4f5f5;
    border: 0.5px solid #e0e0e0;
    &:hover {
      transition: all 0.5s;
      background: #e0e0e0;
      border: 0.5px solid #a0a3a7;
    }
  }

  &.social {
    color: #fff;
    background: #0081FF;
  }
`;

type Props = {
  text?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "social" | "icon" | "square";
  socialType?: "twitter" | "facebook" | "github" | "instagram" | "discord" | "google" | "youtube" | "iamxid" | "linkedin" | "mailchimp" | "paypal" | "reddit" | "snapchat" | "twitch";
  outline?: boolean;
  small?: boolean;
};

const Button = ({
  children,
  variant = "primary",
  outline = false,
  small = false,
  socialType,
  className,
  ...rest
}: Props & ComponentPropsWithoutRef<"button">) => {
  return (
    <>
      <StyledButton
        {...rest}
        className={`${variant} ${outline ? "outline" : ""} ${
          small ? "small" : ""
        } ${socialType} ${className}`}
      >
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
