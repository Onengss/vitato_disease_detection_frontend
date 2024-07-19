import AsyncStorage from '@react-native-async-storage/async-storage';
// store and read obj value
const storeObject = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log(e)
    }
};

const getObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e)
    }
};

export { storeObject, getObject }