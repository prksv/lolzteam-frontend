import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export interface CommentFields {
  text: string;
}

interface ArticleCommentInputProps {
  onSubmit: (value: CommentFields) => void;
}

export function ArticleCommentInput({ onSubmit }: ArticleCommentInputProps) {
  const { register, handleSubmit } = useForm<CommentFields>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <InputGroup>
        <Input {...register("text")} placeholder="Оставить коментарий..." />
        <InputRightElement width="120px">
          <Button type="submit">Отправить</Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
}
