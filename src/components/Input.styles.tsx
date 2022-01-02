import styled from "@emotion/styled/macro";
import {
  ErrorPattern,
  InputPattern,
  InputContainerPattern,
  LabelPattern,
} from "../styles/patterns";

export const InputContainer = styled.div<{
  startWeight?: boolean;
}>`
  ${InputContainerPattern}
`;

export const InputItem = styled.input<{
  isValid: boolean;
  startWeight?: boolean;
}>`
  ${InputPattern}
`;

export const Label = styled.p<{
  fullness: boolean;
  isValid: boolean;
  startWeight?: boolean;
}>`
  ${LabelPattern}
`;

export const Error = styled.div<{ isValid: boolean }>`
  ${ErrorPattern}
`;
