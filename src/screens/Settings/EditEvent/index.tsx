import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Background } from "../../../components/Background";
import { View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { Header } from "../../../components/layout/Header";
import { InputArea } from "../../../components/layout/InputArea";
import { Button } from "../../../components/layout/Button";
import { ToggleButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { updateEventData } from "../../../store/eventsSlice";
import { newEvent } from "../../../store/eventsSlice";

export function EditEvent({ route, navigation }: any) {
  const dispatch = useDispatch();
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

  function updateEvent() {
    const event = {
      id: route.params.event.id,
      name: name,
      description: description,
      category: category,
      price: price,
      local: local,
      initalDate: initalDate,
      finalDate: finalDate,
      img: img,
      cep: cep,
    };
    dispatch(updateEventData(event));
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
              title="Descri????o do evento"
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
              title="Valor do ingre??o"
              placeholder="R$"
              value={`${price}`}
              keyboardType="decimal-pad"
              onChangeText={setEventPrice}
            />
            <Button
              text="SALVAR ALTERA????ES"
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
