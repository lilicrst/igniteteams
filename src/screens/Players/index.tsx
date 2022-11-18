import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e sapare os times"
      />
      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />

      </Form>

    </Container>
  );
}