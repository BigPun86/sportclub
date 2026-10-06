import { css } from "styled-components";
import { brand } from "../theme";

export type ButtonVariant = "primary" | "outlineLight" | "outlineDark";

export const buttonStyles = css<{ $variant?: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0 1.4rem;
  border-radius: 8px;
  font-family: ${brand.fontBody};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  ${({ $variant = "primary" }) =>
    $variant === "primary"
      ? css`
          background: ${brand.red};
          color: #fff;
          border: 2px solid ${brand.red};
          &:hover {
            background: ${brand.redDark};
            border-color: ${brand.redDark};
            color: #fff;
          }
        `
      : $variant === "outlineLight"
        ? css`
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.55);
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              border-color: #fff;
              color: #fff;
            }
          `
        : css`
            background: transparent;
            color: ${brand.navy};
            border: 2px solid ${brand.navy};
            &:hover {
              background: ${brand.navy};
              color: #fff;
            }
          `}
`;
