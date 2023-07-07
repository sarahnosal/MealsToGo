import React, { useState, useRef, useEffect, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, TouchableOpacity, Text } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;
const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;
export const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
      console.log(photo);
    }
  };

  return (
    <ProfileCamera ref={(camera) => (cameraRef.current = camera)} type={type}>
      <TouchableOpacity onPress={toggleCameraType}>
        <List.Icon icon="camera" backgroundColor="#2182BD" />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={snap}>
          <InnerSnap />
        </TouchableOpacity>
      </View>
    </ProfileCamera>
  );
};
