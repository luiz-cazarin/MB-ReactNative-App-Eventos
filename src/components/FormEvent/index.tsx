import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "../layout/Button";
import { InputArea } from "../layout/InputArea";
import { useState } from "react";
import { ToggleButton } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import { newEvent } from "../../store/eventsSlice";

export interface Props {
  navigation: any;
}

export function FormEvent({ navigation }: Props) {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.user);
  const [name, setEventName] = useState("");
  const [description, setEventDescription] = useState("");
  const [category, setEventCategory] = useState("Empresa");
  const [price, setEventPrice] = useState(0);
  const [local, setEventLocal] = useState("");
  const [initalDate, setEventInitalDate] = useState("");
  const [finalDate, setEventFinalDate] = useState("");
  const [img, setEventImg] = useState("https://img.freepik.com/vetores-premium/ilustracao-em-vetor-de-fundo-de-calendario-com-sinal-circular-para-planejamento-gerenciamento-de-tempo-organizacao-de-trabalho-e-eventos-da-vida-ou-ferias_2175-982.jpg");
  const [cep, setEventCep] = useState("");
  const [organizer] = useState(state.name);
  
  function createEvent() {
    const event = {
      name: name,
      description: description,
      category: category,
      price: price,
      local: local,
      initalDate: initalDate,
      finalDate: finalDate,
      img: img,
      cep: cep,
      organizer: organizer,
    };
    dispatch(newEvent(event));
    // async -> try -> axios -> post -> createEvent
    navigation.navigate("user-events");
  }
  return (
    <View>
      <View style={{ margin: 20 }}>
        <InputArea
          title="URL da imagem"
          value={img}
          onChangeText={setEventImg}
        />
        <InputArea
          title="Nome do evento"
          value={name}
          onChangeText={setEventName}
        />
        <InputArea
          title="Descrição do evento"
          multiline={true}
          value={description}
          onChangeText={setEventDescription}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputArea
            mid={true}
            title="Inicio"
            placeholder="__/__/__"
            value={initalDate}
            onChangeText={setEventInitalDate}
          />
          <InputArea
            mid={true}
            title="Fim"
            placeholder="__/__/__"
            value={finalDate}
            onChangeText={setEventFinalDate}
          />
        </View>
        <InputArea
          title="Nome do local"
          value={local}
          onChangeText={setEventLocal}
        />
        <InputArea
          title="CEP do local"
          value={cep}
          onChangeText={setEventCep}
        />
        <InputArea
          title="Categoria do evento"
          value={category}
          editable={false}
          onChangeText={setEventCategory}
        />
        <ToggleButton.Row
          value={category}
          onValueChange={(category) => setEventCategory(category)}
        >
          <ToggleButton icon="briefcase" value="Empresa" />
          <ToggleButton icon="school" value="Universidade" />
        </ToggleButton.Row>
        <InputArea
          title="Valor do ingreço"
          placeholder="R$"
          value={price}
          keyboardType="decimal-pad"
          onChangeText={setEventPrice}
        />
        <Button
          text="CRIAR EVENTO"
          color="#ffff"
          backgroundColor="#6AD03A"
          event={createEvent}
        />
      </View>
    </View>
  );
}
