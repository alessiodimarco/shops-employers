import { useEffect, useState } from "react";

interface InputReviewProps {
  onChange: (inputs: string[]) => void;
}

const InputReview = ({ onChange }: InputReviewProps) => {
  const [inputs, setInputs] = useState<string[]>([""]);

  useEffect(() => {
    onChange(inputs);
  }, [inputs, onChange]);

  const addInput = () => setInputs(prevInputs => [...prevInputs, ""]);

  const removeInput = (index: number) => setInputs(prevInputs => prevInputs.filter((_, i) => i !== index));

  const handleInputChange = (index: number, value: string) =>
    setInputs(prevInputs => prevInputs.map((input, i) => (i === index ? value : input)));

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input type="text" value={input} onChange={e => handleInputChange(index, e.target.value)} />
          <span onClick={addInput}>+</span>
          {inputs.length > 1 && <span onClick={() => removeInput(index)}>-</span>}
        </div>
      ))}
    </div>
  );
};

export default InputReview;
