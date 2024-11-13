import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "../../../Common/SelectInput";
import Input from "../../../Common/Input";
import JoditTextArea from "../../../Common/JoditTextArea";
import Button from "../../../Common/Button";


const FeedbackForm = () => {
  const [content, setContent] = useState("");
  const { handleSubmit, register } = useForm();

  const handleFeedback = () => {};

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFeedback)}
        className="flex flex-col gap-2 bg-white p-5"
      >
        <SelectInput
          {...register("feedbackType")}
          label="Type"
          required
          className="border bg-transparent text-sm"
        >
          <option value="bug">Bug</option>
          <option value="suggation">Suggation</option>
          <option value="other">Other</option>
        </SelectInput>
        <Input
          {...register("title")}
          label="Title"
          required
          placeholder="Title"
          className="border bg-transparent text-sm"
        />
        <span className="py-2 block font-medium text-sm">
          Product Description <span className="text-danger">*</span>
        </span>
        <div>
          <JoditTextArea content={content} setContent={setContent} />
        </div>

        <div className="mt-3 flex flex-col items-end">
          <Button className="w-36">Send feedback</Button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
