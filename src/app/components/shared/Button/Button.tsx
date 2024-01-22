import React, { FC, MouseEvent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { IconType } from "react-icons";
import { theme } from "@/theme/theme";
import { Styles } from "styled-components/dist/types";

type ButtonProps = {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  buttonType?: "button" | "submit" | "reset";
  outline?: boolean;
  small?: boolean;
  icon?: IconType | IconType[];
  iconPosition?: "left" | "right";
  tooltip?: string;
  ariaLabel?: string;
  hoverStyle?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
  iconClassName?: string;
  textClassName?: string;
  className?: string;
  color?: string;
	backgroundColor?: string;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  children?: ReactNode;
  currentuser?: {};
  sectionid?: string;
};

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled, loading }) => (disabled || loading ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;
  transition: all 0.3s;
  width: 100%;
  background-color: ${({ outline, backgroundColor }) => (outline ? "transparent" : backgroundColor || theme.colors.accent)};
  color: ${({ outline, color }) => (outline ? color || theme.colors.accent : "white")};
  padding: ${({ small, size }) => (small ? "0.25rem" : size === "large" ? "1.25rem" : "0.75rem")};
  font-size: ${({ small, size }) => (small ? "0.875rem" : size === "large" ? "1.25rem" : "1rem")};
  font-weight: ${({ small }) => (small ? "lighter" : "bold")};
  border: ${({ outline, color, small }) => (outline ? `solid ${small ? "1px" : "2px"} ${color || theme.colors.accent}` : "none")};

  &:hover {
${({ hoverStyle }) => hoverStyle && css(hoverStyle as Styles<object>)}
  }

  &:active {
    ${({ activeStyle }) => activeStyle && css(activeStyle as Styles<object>)}
  }
`;

const ButtonIcon = styled.span<{ size: string; position: string }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position}: 0.25rem;
  transform: translateY(-50%);
`;

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  loading,
  buttonType = "button",
  outline,
  small,
  icon,
  iconPosition = "left",
  tooltip,
  ariaLabel,
  hoverStyle,
  activeStyle,
  iconClassName,
  textClassName,
  className,
  color,
	backgroundColor,
  size = "medium",
  style,
  children,
  currentuser,
  sectionid
}) => {
  const isLoading = loading && !disabled;

  return (
    <StyledButton
      type={buttonType}
			label={label}
      onClick={onClick}
      disabled={disabled || isLoading}
      outline={outline}
      small={small}
      color={color}
			backgroundColor={backgroundColor}
      size={size}
      aria-label={ariaLabel || label}
      title={tooltip}
      hoverStyle={hoverStyle}
      activeStyle={activeStyle}
      className={className}
      style={style}
      currentuser={currentuser}
      sectionid={sectionid}
    >
      {Array.isArray(icon) ? (
        icon.map((IconComponent, index) => (
          <ButtonIcon
            key={index}
            as={IconComponent}
            size={size === "large" ? "32px" : "18px"}
            position={iconPosition}
            className={iconClassName}
          />
        ))
      ) : (
        icon && (
          <ButtonIcon
            as={icon}
            size={size === "large" ? "32px" : "18px"}
            position={iconPosition}
            className={iconClassName}
          />
        )
      )}
      <span className={textClassName}>{isLoading ? "Loading..." : children || label}</span>
    </StyledButton>
  );
};

export default Button;
