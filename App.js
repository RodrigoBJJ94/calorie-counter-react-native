import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import FoodImage from './src/assets/img/FoodImage.svg';
import DrinkImage from './src/assets/img/DrinkImage.svg';

export default function App() {
  const [protein, setProtein] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [fat, setFat] = useState(0);
  const [milliliter, setMilliliter] = useState(0);
  const [alcohol, setAlcohol] = useState(0);
  const [resultFood, setResultFood] = useState(0);
  const [resultDrink, setResultDrink] = useState(0);
  const [screen, setScreen] = useState('menu');

  const proteins = (value) => {
    setProtein(value);
  };

  const carbohydrates = (value) => {
    setCarbohydrate(value);
  }

  const fats = (value) => {
    setFat(value);
  };

  const calculateFood = () => {
    let caloriesFood = Number((protein * 4) + (carbohydrate * 4) + (fat * 9)).toFixed(0);
    setResultFood(caloriesFood);
  };

  const milliliters = (value) => {
    setMilliliter(value);
  };

  const alcohols = (value) => {
    setAlcohol(value);
  };

  const calculateDrink = () => {
    let caloriesDrink = Number(milliliter * alcohol / 100 * 7).toFixed(0);
    setResultDrink(caloriesDrink);
  };

  const foodBacktoMenu = () => {
    setScreen('menu');
    setResultFood(0);
  };

  const drinkBackToMenu = () => {
    setScreen('menu');
    setResultDrink(0);
  };

  if (screen === 'menu') {
    return getScreenMenu();
  } else if (screen === 'food') {
    return getScreenFood();
  } else if (screen === 'drink') {
    return getScreenDrink();
  };

  function getScreenMenu() {
    return (
      <View style={Styles.containerMenu}>
        <StatusBar backgroundColor="#170a28" />
        <Text style={Styles.titleMenu}>Menu</Text>
        <Text style={Styles.captionMenu}>Do you want to find out the amount of calories in a food or drink?</Text>
        <TouchableOpacity onPress={() => setScreen('food')} style={Styles.buttonGoFood}>
          <Text style={Styles.textButtonsMenu}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('drink')} style={Styles.buttonGoDrink}>
          <Text style={Styles.textButtonsMenu}>Drink</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenFood() {
    return (
      <View style={Styles.containerFood}>
        <StatusBar backgroundColor="#170a28" />
        <View style={Styles.containerImageFood}>
          <FoodImage width="50%" style={Styles.imageFood} />
        </View>
        <Text style={Styles.titleFood}>Inform below how many grams of protein, carbohydrates and fat the food have</Text>
        <Text style={Styles.captionFood}>Protein</Text>
        <TextInput keyboardType="numeric" onChangeText={text => proteins(text)} style={Styles.input} />
        <Text style={Styles.captionFood}>Carbohydrate</Text>
        <TextInput keyboardType="numeric" onChangeText={text => carbohydrates(text)} style={Styles.input} />
        <Text style={Styles.captionFood}>Fat</Text>
        <TextInput keyboardType="numeric" onChangeText={text => fats(text)} style={Styles.input} />
        <TouchableOpacity onPress={calculateFood} style={Styles.buttonFood}>
          <Text style={Styles.buttonTextFood}>Calculate</Text>
        </TouchableOpacity>
        <Text style={Styles.resultFood}>Your food have {resultFood} calories</Text>
        <TouchableOpacity onPress={() => foodBacktoMenu()} style={Styles.buttonFoodToMenu}>
          <Text style={Styles.buttonTextFoodToMenu}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenDrink() {
    return (
      <View style={Styles.containerDrink}>
        <StatusBar backgroundColor="#170a28" />
        <View style={Styles.containerImageDrink}>
          <DrinkImage width="55%" style={Styles.imageDrink} />
        </View>
        <Text style={Styles.titleDrink}>Inform bellow how many milliliters (ml) of drink you have and what's its alcohol by volume (ABV)</Text>
        <Text style={Styles.captionDrink}>Milliliters (ml)</Text>
        <TextInput keyboardType="numeric" onChangeText={text => milliliters(text)} style={Styles.input} />
        <Text style={Styles.captionDrink}>Alcohol by Volume (ABV)</Text>
        <TextInput keyboardType="numeric" onChangeText={text => alcohols(text)} style={Styles.input} />
        <TouchableOpacity onPress={calculateDrink} style={Styles.buttonDrink}>
          <Text style={Styles.buttonTextDrink}>Calculate</Text>
        </TouchableOpacity>
        <Text style={Styles.resultDrink}>Your drink have {resultDrink} calories</Text>
        <TouchableOpacity onPress={() => drinkBackToMenu()} style={Styles.buttonDrinkToMenu}>
          <Text style={Styles.buttonTextDrinkToMenu}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  };
};

const Styles = StyleSheet.create({
  containerMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#170a28',
  },
  titleMenu: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 50,
    marginTop: -60,
    marginBottom: 20,
    color: '#fff',
  },
  captionMenu: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    color: '#fff',
  },
  buttonGoFood: {
    width: Dimensions.get('screen').width / 2,
    height: 45,
    backgroundColor: '#30d4ae',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  buttonGoDrink: {
    width: Dimensions.get('screen').width / 2,
    height: 45,
    backgroundColor: '#6b63ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  textButtonsMenu: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 22,
    color: '#fff',
  },
  containerFood: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#170a28',
  },
  titleFood: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17.5,
    padding: 20,
    textAlign: 'center',
    marginTop: 5,
    color: '#fff',
  },
  captionFood: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginBottom: 6,
    color: '#fff',
  },
  input: {
    width: Dimensions.get('screen').width / 2,
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  buttonFood: {
    width: Dimensions.get('screen').width / 2.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: '#30d4ae',
  },
  buttonTextFood: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 22,
    color: '#fff',
  },
  resultFood: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 30,
    color: '#fff',
  },
  buttonFoodToMenu: {
    width: Dimensions.get('screen').width / 1.2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 122,
    borderRadius: 4,
    backgroundColor: '#30d4ae',
  },
  buttonTextFoodToMenu: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
    color: '#fff',
  },
  imageFood: {
    position: 'absolute',
  },
  containerImageFood: {
    alignItems: 'center',
    bottom: -250,
  },
  containerDrink: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#170a28',
  },
  containerImageDrink: {
    alignItems: 'center',
    bottom: -160,
  },
  imageDrink: {
    position: 'absolute',
  },
  titleDrink: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18.5,
    padding: 20,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
    color: '#fff',
  },
  captionDrink: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginBottom: 6,
    color: '#fff',
  },
  buttonDrink: {
    width: Dimensions.get('screen').width / 2.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: '#6b63ff',
  },
  buttonTextDrink: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 22,
    color: '#fff',
  },
  resultDrink: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 30,
    color: '#fff',
  },
  buttonDrinkToMenu: {
    width: Dimensions.get('screen').width / 1.2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 176,
    borderRadius: 4,
    backgroundColor: '#6b63ff',
  },
  buttonTextDrinkToMenu: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
    color: '#fff',
  }
});
