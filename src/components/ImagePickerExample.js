import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        const result = await launchImageLibrary({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
    };



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}
