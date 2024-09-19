import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";


const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className='bg-slate-200'
      showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Search />
        <Banner />
      </View>

      <Section
        name="Comidas em alta"
        label="Veja Mais"
        action={() => console.log("Clicou no botão")}
        size="text-2xl"
      />
      <TrendingFoods />

      <Section
        name="Comidas Preferidas"
        label="Veja Mais"
        action={() => console.log("Clicou em preferencias")}
        size="text-2xl"
      />
      <TrendingFoods />

      <Section
        name="Famosas no DevFood"
        label="Veja todas"
        action={() => console.log("Clicou no veja todas")}
        size="text-xl"
      />
      <Restaurants />

      <Section
        name="Restaurantes"
        label="Veja todas"
        action={() => console.log("Clicou no Restaurantes")}
        size="text-xl"
      />

      <RestaurantVerticalList/>
      
    </ScrollView>
  );
}
