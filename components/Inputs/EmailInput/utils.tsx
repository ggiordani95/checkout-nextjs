import { TIsError } from "./types";

const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setIsError: React.Dispatch<React.SetStateAction<TIsError>>
) => {
  const result = event.target.value;
  if (result.length === 0) setIsError({ message: false, valid: false });
  setInputValue(result);
  if (result.length > 3) {
    if (result.includes("@")) {
      setIsError({ message: false, valid: true });
    } else {
      setIsError({ message: true, valid: false });
    }
  } else {
    setIsError({ message: false, valid: false });
  }
};

export default handleChange;
