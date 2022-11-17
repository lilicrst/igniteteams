import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </Content>

    </Container>
  );
}