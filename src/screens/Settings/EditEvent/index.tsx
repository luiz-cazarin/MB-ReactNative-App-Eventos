import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { FormEvent } from "../../../components/FormEvent";
import { Header } from "../../../components/layout/Header";
import { InputArea } from "../../../components/layout/InputArea";
import { Button } from "../../../components/layout/Button";
import { ToggleButton } from "react-native-paper";

export function EditEvent({ route, navigation }: any) {
  const [name, setEventName] = useState(route.params.event.name);
  const [description, setEventDescription] = useState(
    route.params.event.description
  );
  const [category, setEventCategory] = useState(route.params.event.category);
  const [price, setEventPrice] = useState(route.params.event.price);
  const [local, setEventLocal] = useState(route.params.event.local);
  const [initalDate, setEventInitalDate] = useState(
    route.params.event.initalDate
  );
  const [finalDate, setEventFinalDate] = useState(route.params.event.finalDate);
  const [img, setEventImg] = useState(route.params.event.img);
  const [cep, setEventCep] = useState(route.params.event.cep);
  const [organizer, setEventOrganizer] = useState(route.params.event.organizer);

  function updateEvent() {
    setEventOrganizer("/userAuth");
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
    // async -> try -> axios -> post -> updateEvent
    navigation.goBack();
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft="arrow-back-ios"
          eventLeft={() => navigation.goBack()}
          title="Editar Evento"
        />
        <ScrollView>
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
              placeholder="Empresa"
              value={category}
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
              text="SALVAR ALTERAÇÕES"
              color="#ffff"
              backgroundColor="#6AD03A"
              event={updateEvent}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
